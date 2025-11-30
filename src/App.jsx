import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

export default function App() {
  return (
    <>
      <Layout>
        <Header />
        <AboutMe />
        <Education />
        <Skills />
        <Achievements />
      </Layout>
    </>
  );
}
