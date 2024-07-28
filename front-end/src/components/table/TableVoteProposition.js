import React from "react";
import { FormButton } from "../button/Button";

export default function TableVoteProposition({
  datas = [],
  ButtonDescription,
  ButtonAction,
}) {
  const onClickTest = () => {
    console.log("test");
  };

  const bob = () => {
    console.log("bob");
  };

  return (
    <div className="w-full">
      <table className="table-auto w-full">
        <thead className="h-16 bg-[#92B4F4]">
          <tr className="border border-slate-300 text-white">
            <th className="text-center">Sujet</th>
            <th className="text-center">Promo</th>
            <th className="text-center">Elève</th>
            <th className="text-center">Description</th>
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
                <td className="text-center">{data.subject}</td>
                <td className="text-center">{data.promo}</td>
                <td className="text-center">{data.student}</td>
                <td className="text-center">
                  <FormButton
                    onClick={() => onClickTest()}
                    text={ButtonDescription}
                    className="mr-2"
                  />
                </td>
                <td className="text-center">
                  <FormButton
                    onClick={() => bob()}
                    text={ButtonAction}
                    className="mr-2 border border-2 border-[#92B4F4] bg-white  text-white"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
