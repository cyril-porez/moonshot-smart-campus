import React from "react";
import { Routes, Route } from "react-router-dom";
import { ActivityReview as ActivityReviewResponsible } from "../Pages/Staff/ActivityReview";
import { ActivityPropositions as ActivityPropositionsResponsible } from "../Pages/Staff/ActivityPropositions";
import { ActivityList as ActivityListResponsible } from "../Pages/Staff/ActivityList";
import { AccompanyingPresence } from "../Pages/Staff/AccompanyingPresence";

const ResponsibleRoutes = () => (
  <Routes>
    <Route path="/activity-review" element={<ActivityReviewResponsible />} />
    <Route path="/activity-propositions" element={<ActivityPropositionsResponsible />} />
    <Route path="/activity-list" element={<ActivityListResponsible />} />
    <Route path="/accompanying-presence" element={<AccompanyingPresence />} />
  </Routes>
);

export default ResponsibleRoutes;
