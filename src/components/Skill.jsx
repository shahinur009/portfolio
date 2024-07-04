import html from "../../public/html.png";
import css from "../../public/CSS-Logo.jpg";
import tailwind from "../../public/tailwindcss.png";
import daisy from "../../public/daisy ui.png";
import javaScript from "../../public/javaScript.webp";
import reactjs from "../../public/react js.png";
import express from "../../public/express-js.png";
import nodejs from "../../public/node js.png";
import mongoDB from "../../public/mongodb.png";

function Skill() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML",
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
        },
        {
            id: 3,
            logo: tailwind,
            name: "Tailwind CSS",
        },
        {
            id: 4,
            logo: daisy,
            name: "DaisyUI",
        },
        {
            id: 5,
            logo: javaScript,
            name: "JavaScript",
        },
        {
            id: 6,
            logo: reactjs,
            name: "React-JS",
        },
        {
            id: 7,
            logo: express,
            name: "Express-JS",
        },
        {
            id: 8,
            logo: nodejs,
            name: "Node-JS",
        },
        {
            id: 9,
            logo: mongoDB,
            name: "MongoDB",
        },
    ];
    return (
        <div
            name="Skills"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">Skills</h1>
                <span className=" underline font-semibold">This Skill I Have</span>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                    {cardItem.map(({ id, logo, name }) => (
                        <div
                            className="md:w-[200px] md:h-[240px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                            key={id}
                        >
                            <img
                                src={logo}
                                className="w-full p-1 rounded-md "
                                alt=""
                            />
                            <div className="text-center">
                                <p>{name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skill;
