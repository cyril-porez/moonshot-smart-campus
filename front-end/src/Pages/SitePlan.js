import React from "react";
import { routes } from "../App";

export default function SitePlan() {
    return (
        <>
            <h2>Common</h2>
            <ul>
            {routes.common.map(item => (
                <li><a href={item.path}>{item.path} - {item.title}</a></li>
            ))}
            </ul>
            <h2>Student</h2>
            <ul>
            {routes.student.map(item => (
                <li><a href={item.path}>{item.path} - {item.title}</a></li>
            ))}
            </ul>
            <h2>Accompagnateur</h2>
            <ul>
            {routes.accompagnateur.map(item => (
                <li><a href={item.path}>{item.path} - {item.title}</a></li>
            ))}
            </ul>
            <h2>Responsable</h2>
            <ul>
            {routes.responsable.map(item => (
                <li><a href={item.path}>{item.path} - {item.title}</a></li>
            ))}
            </ul>
        </>
    )
}