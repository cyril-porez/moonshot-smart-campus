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
        <thead>
          <tr className="border border-slate-300">
            <th className="text-center">Sujet</th>
            <th className="text-center">Promo</th>
            <th className="text-center">Elève</th>
            <th className="text-center">Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            return (
              <tr className="border border-slate-300 ">
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
                    className="mr-2"
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
