import React, { useState } from "react";
import "../style/Range.css";

export default function Range({ label, register }) {
    const min = 0;
    const max = 10;

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
                    defaultValue={5}
                    {...register(label, { valueAsNumber: true })}
                    className="range"
                />
                <img src="/icons/heureux.png" className="icon right-icon" />
            </div>
        </div>
    );
}
