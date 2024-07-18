import React, { useState } from "react";
// import { Slider } from "rsuite";
import "../style/Range.css";

export default function Range( props ) {

    let min = props.min ?? 0;
    let max = props.max ?? 10;
    
    const [value, setValue] = useState(5);

    return (
        <>
            <div className="range-field">
                <input type="range"
                    min={min} max={max} step={1}
                    defaultValue={value}
                    onChange={e => setValue(e.target.value)}
                    className="range"
                />
            </div>
        </>
    )
}