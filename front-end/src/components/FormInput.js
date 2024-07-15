import React from "react";
import { TagPicker } from 'rsuite';
import "../style/FormInput.css";

export function FormInput({ legend, type, placeholder }) {
    return (
        <div>
            <p className="legend">{legend}</p>

            <input className="form-input" type={type} placeholder={placeholder} />
        </div>
    )
}

export function SelectInput({ legend, name, options = [], hasDefaultOption = false }) {
    return (
        <div>
            <p className="legend">{legend}</p>

            <select name={name} className="select">
                {hasDefaultOption ? <option name="default">-- Sélectionnez --</option> : null}
                {options.map(option => (
                    <option value={option.toLowerCase()}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export function TagSelector({ legend, data, width = 300 }) {

    return (
        <>
            <label>{legend}</label>
            <TagPicker data={data.map(item => ({ label: item, value: item }))} size="md" style={{ width: `${width}px` }} block/>
        </>
    )
}