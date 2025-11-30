import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err) => {
    if (err) return res.json({ error: err });
    res.json({ message: "User Registered" });
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err || result.length === 0) {
      return res.json({ error: "User not found" });
    }

    const isMatch = bcrypt.compareSync(password, result[0].password);

    if (!isMatch) return res.json({ error: "Incorrect password" });

    const token = jwt.sign({ id: result[0].id }, "secret");

    res.json({ message: "Login Successful", token });
  });
};
