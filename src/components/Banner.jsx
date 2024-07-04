import { ReactTyped } from "react-typed";
import pic from "../../public/shahin picture linkedin.png";
import { FaInstagram, FaLinkedin, FaNodeJs, FaReact, FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";


function Banner() {
    return (
        <>
            <div
                name="Home"
                className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
            >
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome In My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I am a</h1>
                            {/* <span >Developer</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify">
                        I'm Shahinur, a passionate Web developer with a keen eye for MERN Stack . With a background in IT, I strive to create impactful and
                        visually stunning Software solutions that leave a lasting impression.
                        </p>
                        <button className="btn btn-warning">Download CV</button>
                        <br />
                        {/* social media icons */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                            <div className="  space-y-2">
                                <h1 className="font-bold text-center ">Available on</h1>
                                <ul className="flex space-x-5">
                                    <li>
                                        <a href="https://www.facebook.com/shahin.ahamed.3139" target="_blank">
                                            <FaSquareFacebook className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/shaheen-ahamed-shahinur/" target="_blank">
                                            <FaLinkedin className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/shahinur009" target="_blank">
                                            <FaGithub className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/shahin.ahamed.3139/?hl=en" target="_blank">
                                            <FaInstagram className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" space-y-2">
                                <h1 className="font-bold text-center">Currently working on</h1>
                                <div className="flex space-x-5">
                                    <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <img
                            src={pic}
                            className="rounded-full md:w-[450px] md:h-[450px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <hr />
        </>
    );
}

export default Banner;
