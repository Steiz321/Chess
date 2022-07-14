import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cage} from "../Cage";
import blackLogo from "../../img/blackKing.png";
import whiteLogo from "../../img/whiteKing.png";

export class King extends Figure {

    constructor(color: Colors, cage: Cage) {
        super(color, cage);

        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KING;
    }

    canMove(target: Cage): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        const dy = Math.abs(this.cage.y - target.y);
        const dx = Math.abs(this.cage.x - target.x);

        if(dx <= 1 && dy <= 1) {
            return true;
        }
        return false;
    }
}