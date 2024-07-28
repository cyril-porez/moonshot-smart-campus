import React from "react";
import TablePropisition from "../../../components/table/TablePropostion";
import Title from "../../../components/Title";

/**
 * Là où les élèves pourront voir l'avancée des votes, ou si leur activité à été refusée
 */
export default function PropositionStatus() {
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
        <Title title="Statut des propositions" />
      </div>
      <div className=" flex justify-center mt-[3%]">
        <div className="w-4/5">
          <TablePropisition
            datas={datas}
            ButtonDescription="Description"
            ButtonAction="Voir refus"
          />
        </div>
      </div>
    </div>
  );
}
