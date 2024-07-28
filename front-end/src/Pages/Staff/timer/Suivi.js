import React, { useEffect } from "react";
import Timer from "../../../components/Timer";
import Hourglass from "../../../components/Hourglass";
// Make sure to create and import this CSS file

import { useSearchParams } from "react-router-dom";

const Suivi = () => {
  const [searchParams] = useSearchParams();
  const activityId = searchParams.get("activityId");

  useEffect(() => {
    console.log("Activity ID:", activityId);
  }, [activityId]);

  console.log("Activity ID:", activityId);
  return (
    <div className="">
      <div className="">
        <Timer />
      </div>
      <div className="">
        <Hourglass />
      </div>
    </div>
  );
};

export default Suivi;
