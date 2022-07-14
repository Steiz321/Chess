import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cage} from "../Cage";
import blackLogo from "../../img/blackRook.png";
import whiteLogo from "../../img/whiteRook.png";

export class Rook extends Figure {

    constructor(color: Colors, cage: Cage) {
        super(color, cage);

        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.ROOK;
    }

    canMove(target: Cage): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        if(this.cage.isEmptyVertical(target)) {
            return true;
        }
        if(this.cage.isEmptyHorizontal(target)) {
            return true;
        }
        return false;
    }
}