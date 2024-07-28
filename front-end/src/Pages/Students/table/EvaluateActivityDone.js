import React from "react";
import Title from "../../../components/Title";
import Table from "../../../components/table/Table";

/**
 * Liste des activités terminées, d'où les élèves pourront les évaluer
 */
export default function EvaluateActivityDone() {
  const datas = [
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="text-center mt-[3%]">
        <Title title="Evaluer les activités terminées" />
      </div>
      <div className=" flex justify-center mt-[3%]">
        <div className="w-4/5">
          <Table textButton="Evaluer" datas={datas} />
        </div>
      </div>
    </div>
  );
}
