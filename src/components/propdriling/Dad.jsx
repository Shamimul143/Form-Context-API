import { useContext } from "react";
import Chaild from "./Chaild";
import './Grandpa.css'
import { MoneyContext } from "./Grantpa";

const Dad = () => {

    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <div className="child">
                <h1>dade</h1>
                <p>money: {money}</p>
                <button onClick={()=>setMoney(money+1000)} className="btn btn-primary">add 1000</button>
            </div>
            <Chaild></Chaild>
        </div>

    );
};

export default Dad;