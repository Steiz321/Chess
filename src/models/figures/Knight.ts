import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cage} from "../Cage";
import blackLogo from "../../img/blackKnight.png";
import whiteLogo from "../../img/whiteKnight.png";

export class Knight extends Figure {

    constructor(color: Colors, cage: Cage) {
        super(color, cage);

        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KNIGHT;
    }

    canMove(target: Cage): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        const dx = Math.abs(this.cage.x - target.x);
        const dy = Math.abs(this.cage.y - target.y);

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}