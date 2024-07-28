import React from "react";
import { FormButton } from "../button/Button";

export default function TableAbsentStudents({ textButton, datas = [] }) {
  const onClickTest = () => {
    console.log("test");
  };

  return (
    <div className="w-full">
      <table className="table-auto w-full">
        <thead className="h-16 bg-[#92B4F4]">
          <tr className="border border-slate-300 text-white">
            <th className="text-center">Elève</th>
            <th className="text-center">Sujet</th>
            <th className="text-center">Promo</th>
            <th className="text-center">Date</th>
            <th className="text-center">Accompagnateur</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            return (
              <tr
                key={index}
                className={`border border-slate-300 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#CFDEE7]"
                } `}
              >
                <td className="text-center">{data.student}</td>
                <td className="text-center">{data.subject}</td>
                <td className="text-center">{data.promo}</td>
                <td className="text-center">{data.date}</td>
                <th className="text-center">{data.accompagnateur}</th>
                <td className="text-center p-2 flex">
                  <div className="space-x-4 inline-flex  ml-[25%]">
                    <FormButton
                      onClick={() => onClickTest()}
                      text={textButton}
                      className="mr-2 border border-2 border-[#CFDEE7] bg-[#92B4F4]  text-white"
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
