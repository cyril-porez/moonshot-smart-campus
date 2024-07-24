import React from "react";
import { Routes, Route } from "react-router-dom";
import { ActivityReview } from "../Pages/Staff/ActivityReview";
import { ActivityPropositions } from "../Pages/Staff/ActivityPropositions";
import { ActivityList } from "../Pages/Staff/ActivityList";
import { AccompanyingPresence } from "../Pages/Staff/AccompanyingPresence";

const AccompagnateurRoutes = () => (
  <Routes>
    <Route path="/activity-review" element={<ActivityReview />} />
    <Route path="/activity-propositions" element={<ActivityPropositions />} />
    <Route path="/activity-list" element={<ActivityList />} />
    <Route path="/accompanying-presence" element={<AccompanyingPresence />} />
  </Routes>
);

export default AccompagnateurRoutes;
