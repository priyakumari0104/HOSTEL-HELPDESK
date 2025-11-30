import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = ({ userData }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    hostelType: "",
    hostelName: "",
    roomNumber: "",
    department: "",
    year: "",
    guardianName: "",
    guardianPhone: "",
    gender: "",
    dob: "",
  });

  useEffect(() => {
    if (userData) {
      setProfile(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");

    // Later: send profile to backend API
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>

      <form className="profile-form" onSubmit={handleUpdate}>
        
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={profile.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="text" name="phone" value={profile.phone} onChange={handleChange} />

        <label>Address:</label>
        <input type="text" name="address" value={profile.address} onChange={handleChange} />

        <label>Gender:</label>
        <select name="gender" value={profile.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={profile.dob} onChange={handleChange} />

        <label>Hostel Type:</label>
        <select name="hostelType" value={profile.hostelType} onChange={handleChange}>
          <option value="">Select Hostel Type</option>
          <option value="Boys">Boys Hostel</option>
          <option value="Girls">Girls Hostel</option>
        </select>

        <label>Hostel Name:</label>
        <input type="text" name="hostelName" value={profile.hostelName} onChange={handleChange} />

        <label>Room Number:</label>
        <input type="text" name="roomNumber" value={profile.roomNumber} onChange={handleChange} />

        <label>Department:</label>
        <input type="text" name="department" value={profile.department} onChange={handleChange} />

        <label>Year / Semester:</label>
        <input type="text" name="year" value={profile.year} onChange={handleChange} />

        <label>Guardian Name:</label>
        <input type="text" name="guardianName" value={profile.guardianName} onChange={handleChange} />

        <label>Guardian Phone:</label>
        <input type="text" name="guardianPhone" value={profile.guardianPhone} onChange={handleChange} />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;

