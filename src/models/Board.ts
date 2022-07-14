import {Cage} from './Cage';
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";
import {Knight} from "./figures/Knight";
import {King} from "./figures/King";
import {Queen} from "./figures/Queen";
import {Bishop} from "./figures/Bishop";
import {Rook} from "./figures/Rook";
import {Figure} from "./figures/Figure";

export class Board {
    cages: Cage[][] = [];
    lostBlackFigures: Figure[] = [];
    lostWhiteFigures: Figure[] = [];

    public initCages() {
        for(let i = 0; i < 8; i++) {
            const row: Cage[] = []
            for(let j = 0; j < 8; j++) {
                if((i+j) % 2 !== 0) {
                    row.push(new Cage(this, j, i, Colors.BLACK, null)); // black cage
                } else {
                    row.push(new Cage(this, j, i, Colors.WHITE, null)); // white cage
                }
            }
            this.cages.push(row);
        }
    }

    public highlightCages(selectedCage: Cage | null) {
        for(let i = 0; i < this.cages.length; i++) {
            const row = this.cages[i];
            for(let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCage?.figure?.canMove(target);
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cages = this.cages;
        newBoard.lostBlackFigures = this.lostBlackFigures;
        newBoard.lostWhiteFigures = this.lostWhiteFigures;
        return newBoard;
    }

    public getCage(x: number, y: number) {
        return this.cages[y][x];
    }

    private addPawns() {
        for(let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCage(i, 1));
            new Pawn(Colors.WHITE, this.getCage(i, 6));
        }
    }

    private addKnights() {
        new Knight(Colors.BLACK, this.getCage(1, 0));
        new Knight(Colors.BLACK, this.getCage(6, 0));
        new Knight(Colors.WHITE, this.getCage(1, 7));
        new Knight(Colors.WHITE, this.getCage(6, 7));
    }

    private addKings() {
        new King(Colors.BLACK, this.getCage(4, 0));
        new King(Colors.WHITE, this.getCage(4, 7));
    }

    private addQueens() {
        new Queen(Colors.BLACK, this.getCage(3, 0));
        new Queen(Colors.WHITE, this.getCage(3, 7));
    }

    private addBishops() {
        new Bishop(Colors.BLACK, this.getCage(2, 0));
        new Bishop(Colors.BLACK, this.getCage(5, 0));
        new Bishop(Colors.WHITE, this.getCage(2, 7));
        new Bishop(Colors.WHITE, this.getCage(5, 7));
    }

    private addRooks() {
        new Rook(Colors.BLACK, this.getCage(0, 0));
        new Rook(Colors.BLACK, this.getCage(7, 0));
        new Rook(Colors.WHITE, this.getCage(0, 7));
        new Rook(Colors.WHITE, this.getCage(7, 7));
    }

    public addFigures() {
        this.addPawns();
        this.addKnights();
        this.addRooks();
        this.addBishops();
        this.addKings();
        this.addQueens();
    }
}