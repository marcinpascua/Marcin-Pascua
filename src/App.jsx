import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Layout from "./components/Layout";
import MainSection from "./components/MainSection";

export default function App() {

  return (
    <>
     <Layout>
      <Header />
       <MainSection/>  
     </Layout>
    </>
  )
}


