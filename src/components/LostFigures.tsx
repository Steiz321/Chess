import React, {FC} from 'react'
import {Figure} from "../models/figures/Figure";

interface LostFigureProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<LostFigureProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img width={25} height={25} src={figure.logo} />}
                </div>
            )}
        </div>
    );
};

export default LostFigures;