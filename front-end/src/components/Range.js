import React, { useState } from "react";
// import { Slider } from "rsuite";
import "../style/Range.css";

export default function Range({ props }) {

    let min = props.min ?? 0;
    let max = props.max ?? 10;
    let label = props.label ?? "Label";

    const [value, setValue] = useState(5);

    return (
        <div className="range-container">
            <div className="range-label">{label}</div>
            <div className="range-wrapper">
                <img src="/icons/triste.png" className="icon left-icon" />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={1}
                    defaultValue={value}
                    onChange={e => setValue(e.target.value)}
                    className="range"
                />
                <img src="/icons/heureux.png" className="icon right-icon" />
            </div>
        </div>
    )
}