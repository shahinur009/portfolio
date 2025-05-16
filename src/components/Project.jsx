import success from "../../public/success.jobs.png";
import ironfitness from "../../public/Ironfitness.png";
import shahintourism from "../../public/shahintourism.png";
import khagracharipratidin from "../../public/khagrachori-potidin.png";
import ShatRong from "../../public/shatrong.png";
import blackcraftresort from "../../public/blackcraft.png";
import dicom from "../../public/dicom.png";
import { Link } from "react-router-dom";

function Project() {
  const cardItem = [
    {
      id: 1,
      logo: khagracharipratidin,
      name: "Khagrachari-Pratidin",
      link: "https://khagracharipratidin.com",
      text: "I worked on the frontend developer for Khagrachori Potidin, a local newspaper based in Khagrachori. ",
    },
    {
      id: 2,
      logo: ShatRong,
      name: "ShatRong Gents Parlour",
      link: "https://shatronggentsparlour.com/",
      github: "https://github.com/shahinur009/Success-job",
      text: "SELUN solutions and professional training programs. Collaborated with the backend team to develop and implement effective user interfaces.",
    },
    {
      id: 3,
      logo: blackcraftresort,
      name: "Black Craft Resort",
      link: "https://blackcraftresort.com/",
      github: "https://github.com/shahinur009/Success-job",
      text: "I worked on the frontend developer for Black Craft Resort and Restaurant.",
    },
    {
      id: 4,
      logo: dicom,
      name: "Dicom Viewer",
      link: "https://medevel.com/14-best-browser-web-based-dicom-viewers-projects/",
      github: "https://github.com/shahinur009/Success-job",
      text: "Medical Image viewer. This is a premium version used in world wide. But I modified this viewer as my company client for free version,",
    },
    {
      id: 5,
      logo: success,
      name: "Success-Jobs",
      link: "https://success-jobs-7e686.web.app/",
      github: "https://github.com/shahinur009/Success-job",
      text: "Success jobs is a website there job seeker and Employer also post jobs and search jobs.",
    },
    {
      id: 6,
      logo: shahintourism,
      name: "Shahin-Tourism",
      link: "https://shahin-tourism.web.app/",
      github: "https://github.com/shahinur009/shahin-tourism",
      text: "Shain Tourism is a website there tourist search location where he/she travel and booked packages",
    },
    {
      id: 7,
      logo: ironfitness,
      name: "Iron-Fitness",
      link: "https://iron-fitness-4500d.web.app/",
      github: "https://github.com/shahinur009/iron-fitness-center",
      text: "Iron-fitness is a GYM center website. There users see the all packages those offer admin.",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          {cardItem.map(({ id, logo, name, link, github, text }) => (
            <div
              className="border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{text}</p>
              </div>
              <div className="px-3 py-2 md:px-6 md:py-4 space-x-3 justify-around">
                <Link
                  to={link}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Live link
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
