import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cage} from "../Cage";
import blackLogo from "../../img/blackBishop.png";
import whiteLogo from "../../img/whiteBishop.png";

export class Bishop extends Figure {

    constructor(color: Colors, cage: Cage) {
        super(color, cage);

        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.BISHOP;
    }

    canMove(target: Cage): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        if(this.cage.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}