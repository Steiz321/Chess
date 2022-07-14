import React, {FC} from 'react';
import {Cage} from '../models/Cage';

interface CageProps {
    cage: Cage;
    selected: boolean;
    click: (cage: Cage) => void;
}

const CageComponent: FC<CageProps> = ({cage, selected, click}) => {
    return (
        <div
            className={['cage', cage.color, selected ? "selected" : ""].join(' ')}
            onClick={() => click(cage)}
            style={{background: cage.available && cage.figure ? 'green' : ''}}
        >
            {cage.available && !cage.figure && <div className="available" />}
            {cage.figure?.logo && <img src={cage.figure.logo} />}
        </div>
    );
};

export default CageComponent;