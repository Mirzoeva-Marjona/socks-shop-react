import React, {useState} from 'react'

const Counter = ({value, countUpdated}) => {

    const [countValue, setCountValue] = useState(value);

    const handleChange = (event) => {
        const value = event.target.value;
        setCountValue(value);
        countUpdated(value);
    }

    const handleDecrease = () => {
        const count = countValue - 1;
        setCountValue(count);
        countUpdated(count);
    }

    const handleIncrease = () => {
        const count = countValue + 1;
        setCountValue(count);
        countUpdated(count);
    }

    return (
        <div>
            <button type={"button"} onClick={handleDecrease}>-</button>
            <input type={"number"} value={value} onChange={handleChange}/>
            <button type={"button"} onClick={handleIncrease}>+</button>
        </div>
    )
}

export default Counter
