import React, { useState } from "react";
import "./ComplaintHistory.css";

const ComplaintHistory = () => {
  // Dummy history data (replace later with backend API)
  const historyData = [
    {
      id: "C101",
      date: "2025-01-20",
      category: "Water Issue",
      status: "Resolved"
    },
    {
      id: "C102",
      date: "2025-01-25",
      category: "Electricity",
      status: "In-Progress"
    },
    {
      id: "C103",
      date: "2025-02-01",
      category: "Road Damage",
      status: "Pending"
    }
  ];

  return (
    <div className="history-container">
      <h2>Your Complaint History</h2>

      <table className="history-table">
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Date</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td className={`status ${item.status.toLowerCase()}`}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintHistory;
