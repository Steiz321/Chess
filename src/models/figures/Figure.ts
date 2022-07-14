import logo from '../../img/blackKing.png';
import {Colors} from "../Colors";
import {Cage} from "../Cage";

export enum FigureName {
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Королева",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cage: Cage;
    name: FigureName;
    id: number;


    constructor(color: Colors, cage: Cage) {
        this.color = color;
        this.cage = cage;
        this.cage.figure = this;
        this.logo = null;
        this.name = FigureName.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cage): boolean {
        if(target.figure?.color === this.color) {
            return false;
        }
        if(target.figure?.name === FigureName.KING) {
            return false;
        }
        return true;
    }

    moveFigure(target: Cage) {}
}