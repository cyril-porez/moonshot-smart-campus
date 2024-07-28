import React from "react";
import Title from "../../../components/Title";
import TableAbsentStudents from "../../../components/table/TableAbsentStudents";

/**
 * Liste des absences, qui montre qui était absent, à quelle activité, quelle date, et pour quel motif
 */
export default function ListAbsentStudent() {
  const datas = [
    {
      student: "John",
      subject: "websocket",
      promo: "B2-Logiciel",
      date: "10/10/2024",
      accompagnateur: "Bob",
    },
    {
      student: "John",
      subject: "websocket",
      promo: "B2-Logiciel",
      date: "10/10/2024",
      accompagnateur: "Bob",
    },
    {
      student: "John",
      subject: "websocket",
      promo: "B2-Logiciel",
      date: "10/10/2024",
      accompagnateur: "Bob",
    },
    {
      student: "John",
      subject: "websocket",
      promo: "B2-Logiciel",
      date: "10/10/2024",
      accompagnateur: "Bob",
    },
    {
      student: "John",
      subject: "websocket",
      promo: "B2-Logiciel",
      date: "10/10/2024",
      accompagnateur: "Bob",
    },
    {
      student: "John",
      subject: "websocket",
      promo: "B2-Logiciel",
      date: "10/10/2024",
      accompagnateur: "Bob",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="text-center mt-[3%]">
        <Title title="Liste des élèves absent" />
      </div>
      <div className=" flex justify-center mt-[3%]">
        <div className="w-4/5">
          <TableAbsentStudents textButton="Voir motif" datas={datas} />
        </div>
      </div>
    </div>
  );
}
