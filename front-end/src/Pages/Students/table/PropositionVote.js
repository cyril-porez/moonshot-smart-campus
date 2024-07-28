import React from "react";
import Title from "../../../components/Title";
import TableVoteProposition from "../../../components/table/TableVoteProposition";

export default function PropositionVote() {
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
        <Title title="Voter pour les Proposition d’activité" />
      </div>
      <div className=" flex justify-center mt-[3%]">
        <div className="w-4/5">
          <TableVoteProposition
            datas={datas}
            ButtonDescription="Description"
            ButtonAction="Voter"
          />
        </div>
      </div>
    </div>
  );
}
