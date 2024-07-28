import React from "react";
import Title from "../components/Title";
import TableProposition from "../components/table/TablePropostion";

export default function Test(params) {
  const datas = [
    {
      subject: "WebSocket",
      promo: "B2-Logiciel",
      student: "Bob",
      description: "ips qsdfgsd degsg",
      statut: "En Attente",
    },
    {
      subject: "WebSocket",
      promo: "B2-Logiciel",
      student: "Bob",
      description: "ips qsdfgsd degsg",
      statut: "Accépté",
    },
    {
      subject: "WebSocket",
      promo: "B2-Logiciel",
      student: "Bob",
      description: "ips qsdfgsd degsg",
      statut: "Refus",
    },
    {
      subject: "WebSocket",
      promo: "B2-Logiciel",
      student: "Bob",
      description: "ips qsdfgsd degsg",
      statut: "En Attente",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="text-center mt-[3%]">
        <Title title="test" />
      </div>
      <div className=" flex justify-center mt-[3%]">
        <div className="w-4/5">
          <TableProposition
            datas={datas}
            ButtonDescription="Description"
            ButtonAction="Voir refus"
          />
        </div>
      </div>
    </div>
  );
}
