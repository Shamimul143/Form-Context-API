import { useContext } from 'react';
import './Grandpa.css'
import { AssetContext } from './Grantpa';

const Chaild = () => {

const gift = useContext(AssetContext)

    return (
        <div className="child">
            <h1>Chaild</h1>
            <p>Eid: {gift}</p>
        </div>
    );
};

export default Chaild;