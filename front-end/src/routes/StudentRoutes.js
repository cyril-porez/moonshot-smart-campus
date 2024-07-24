import React from "react";
import { Routes, Route } from "react-router-dom";
import { ActivityDone as ActivityDoneStudent } from "../Pages/Students/ActivityDone";
import { ActivityReview as ActivityReviewStudent } from "../Pages/Students/ActivityReview";
import { ActivityStatus as ActivityStatusStudent } from "../Pages/Students/ActivityStatus";
import { ActivityVote as ActivityVoteStudent } from "../Pages/Students/ActivityVote";

const StudentRoutes = () => (
  <Routes>
    <Route path="/activity-done" element={<ActivityDoneStudent />} />
    <Route path="/activity-review" element={<ActivityReviewStudent />} />
    <Route path="/activity-status" element={<ActivityStatusStudent />} />
    <Route path="/activity-vote" element={<ActivityVoteStudent />} />
  </Routes>
);

export default StudentRoutes;
