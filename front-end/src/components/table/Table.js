import React from "react";
import { FormButton } from "../button/Button";

export default function Table({ textButton, datas = [] }) {
  const handleClick = () => {
    console.log("test");
  };

  return (
    <div className="w-full">
      <table className="table-auto w-full">
        <thead className="h-16 bg-[#92B4F4]">
          <tr className="border border-slate-300">
            <th className="text-center">Sujet</th>
            <th className="text-center">Promo</th>
            <th className="text-center">Date</th>
            <th className="text-center">Heure</th>
            <th className="text-center">Accompagnateur</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            return (
              <tr className="border border-slate-300  ">
                <td className="text-center">{data.subject}</td>
                <td className="text-center">{data.promo}</td>
                <td className="text-center">{data.date}</td>
                <td className="text-center">{data.hour}</td>
                <th className="text-center">{data.accompagnateur}</th>
                <td className="text-center p-2 flex">
                  <div className="space-x-4 inline-flex  ml-[25%]">
                    <FormButton
                      onClick={() => handleClick()}
                      text={textButton}
                      className="mr-2"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
