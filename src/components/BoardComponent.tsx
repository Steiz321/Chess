import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CageComponent from "./CageComponent";
import {Cage} from "../models/Cage";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCage, setSelectedCage] = useState<Cage | null>(null);

    function click (cage: Cage) {
        if(selectedCage && selectedCage !== cage && selectedCage.figure?.canMove(cage)) {
            selectedCage.moveFigure(cage);
            swapPlayer();
            setSelectedCage(null);
        } else {
            if(cage.figure?.color === currentPlayer?.color) {
                setSelectedCage(cage);
            }
        }
    }

    useEffect(() => {
        highlightCages();
    }, [selectedCage])

    function highlightCages() {
        board.highlightCages(selectedCage);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div>
            <h3>It's {currentPlayer?.color} player turn!</h3>
            <div className="board">
                {board.cages.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cage =>
                            <CageComponent
                                click={click}
                                cage={cage}
                                key={cage.id}
                                selected={cage.x === selectedCage?.x && cage.y === selectedCage?.y}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default BoardComponent;