import Image from "next/image";
import Experience from "@/component/experience";
import About from "@/component/about";
import Projects from "@/component/project";
import Navbar from "@/component/Navbar";
import {Container} from "@mui/material";
import Education from "@/component/Education";
import Skills from "@/component/Skills";
import Hobbies from "@/component/Hobbies";
import Contact from "@/component/Contact";
import {Metadata} from "next";
import Home from "@/component/Home";

export const metadata: Metadata = {
    title: "Matthias Vanpoecke Portfolio",
    description: "Portfolio of Matthias Vanpoecke, a student of Applied Computer Science.",
    };


export default function HomePage() {
  return (
      <>
        <Navbar />
        <Container>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Hobbies />
          <Contact />
        </Container>
      </>
  );
}
