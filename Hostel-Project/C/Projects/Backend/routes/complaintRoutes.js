import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const {
      name,
      room,
      phone,
      email,
      hostelType,
      hostelName,
      otherHostel,
      time,
      details,
      category
    } = req.body;

    // Debug: log the received data
    console.log("Received complaint data:", req.body);

    const sql = `
      INSERT INTO complaints 
      (name, room, phone, email, hostelType, hostelName, otherHostel, time, details, category)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

   const [result] = await db.promise().query(sql, [
  name,
  room,
  phone,
  email,
  hostelType,
  hostelName,
  otherHostel || "",
  time,
  details,
  category
]);

    console.log("Insert result:", result);

    res.json({ message: "Complaint submitted successfully", complaintId: result.insertId });
  } 
  catch (error) {
    console.error("SQL ERROR:", error); // <-- log the full error
    res.status(500).json({ message: "Error submitting complaint", error: error.message });
}

});

export default router;
