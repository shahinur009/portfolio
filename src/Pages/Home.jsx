import { Toaster } from "react-hot-toast";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skill from "../components/Skill";


const Home = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <About></About>
                <Skill></Skill>
                <Project></Project>
                <Contact></Contact>
                <Footer></Footer>
            </div>
            <Toaster></Toaster>
        </>
    );
};

export default Home;