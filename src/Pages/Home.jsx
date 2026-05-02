import { Toaster } from "react-hot-toast";
import About from "../components/About";
import Banner from "../components/Banner";
import ClientLogos from "../components/ClientLogos";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div className="bg-bg text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Banner />
        <ClientLogos />
        <About />
        <Stats />
        <Project />
        <Skill />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#161616",
            color: "#fff",
            border: "1px solid #1F1F1F",
          },
        }}
      />
    </div>
  );
};

export default Home;
