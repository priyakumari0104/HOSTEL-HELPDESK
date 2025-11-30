import React from "react";
import About from "../About/About";
import student_web from "../../assets/web student.png";

const Home = () => {
  return (
    <>
      {/* TOP IMAGE */}
      <img src={student_web} alt="student web" id="home" />

      {/* ABOUT SECTION */}
      <section id="about">
        <About />
      </section>
    </>
  );
};

export default Home;

