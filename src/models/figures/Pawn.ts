import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cage} from "../Cage";
import blackLogo from "../../img/blackPawn.png";
import whiteLogo from "../../img/whitePawn.png";

export class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, cage: Cage) {
        super(color, cage);

        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.PAWN;
    }

    canMove(target: Cage): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        const direction = this.cage.figure?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cage.figure?.color === Colors.BLACK ? 2 : -2;

        if((target.y === this.cage.y + direction || this.isFirstStep && (target.y === this.cage.y + firstStepDirection))
            && target.x === this.cage.x
            && this.cage.board.getCage(target.x, target.y).isEmpty()) {
                return true;
        }

        if(target.y === this.cage.y + direction
            && (target.x === this.cage.x + 1 || target.x === this.cage.x - 1)
            && this.cage.isEnemy(target)) {
                return true;
        }

        return false;
    }

    moveFigure(target: Cage) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}