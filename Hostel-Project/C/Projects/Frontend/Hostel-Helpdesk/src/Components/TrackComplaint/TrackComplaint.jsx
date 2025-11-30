import React, { useState } from "react";
import "./TrackComplaint.css";

const TrackComplaint = () => {
  const [complaintID, setComplaintID] = useState("");
  const [statusData, setStatusData] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();

    // Temporary dummy data (until backend is ready)
    const sampleStatus = {
      id: complaintID,
      status: "In Progress",
      steps: [
        { step: "Complaint Submitted", done: true },
        { step: "Assigned to Worker", done: true },
        { step: "Worker Visit Scheduled", done: false },
        { step: "Issue Resolved", done: false },
      ]
    };

    setStatusData(sampleStatus);
  };

  return (
    <div className="track-container">
      <h2>Track Your Complaint</h2>

      <form className="track-form" onSubmit={handleTrack}>
        <input
          type="text"
          placeholder="Enter Complaint ID"
          value={complaintID}
          onChange={(e) => setComplaintID(e.target.value)}
          required
        />
        <button type="submit">Track</button>
      </form>

      {statusData && (
        <div className="status-box">
          <h3>Complaint ID: {statusData.id}</h3>
          <h4>Status: {statusData.status}</h4>

          <div className="progress-steps">
            {statusData.steps.map((item, index) => (
              <div
                key={index}
                className={`step ${item.done ? "done" : ""}`}
              >
                <span>{item.step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackComplaint;
