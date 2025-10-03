import { useState } from "react";
import './itemCounter.css'


export interface Props {
    name: string;
    quantity: number;
}



export function ItemCounter({ name, quantity }: Props) {

    const [count, setCount] = useState(quantity)
    const handleAdd = () => { setCount(count + 1) }
    const handleSubastract = () => {
        if (count === 0) return;  /* si el valor es 0 no hace nada */
        setCount(count - 1)
    }


    return (
        <section
            className="item-row"
        /* style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
        }} */
        >
            <span className="item-text">
                {name}
            </span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubastract}>-1</button>

        </section>
    )
}