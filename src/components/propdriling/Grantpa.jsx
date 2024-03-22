import { createContext, useState } from "react";
import Dad from "./Dad";
import './Grandpa.css'


export const AssetContext = createContext("gold")
export const MoneyContext = createContext(1000)

const Grantpa = () => {

    const [money, setMoney] = useState(1000)

    return (
        <div className="pa">
            <h1>this is grant pa</h1>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value={"gold"}>
                    <Dad></Dad>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grantpa;