import React from "react";
import Title from "../../../components/Title";
import TableValidateProposition from "../../../components/table/TableValidatePoposition";

export default function ActivityPropositions() {
  const datas = [
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      student: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      student: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      student: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      student: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      student: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      student: "Bob",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="text-center mt-[3%]">
        <Title title="propositions d' activité" />
      </div>
      <div className=" flex justify-center mt-[3%]">
        <div className="w-4/5">
          <TableValidateProposition datas={datas} />
        </div>
      </div>
    </div>
  );
}
