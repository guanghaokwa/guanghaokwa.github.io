import { MdOutlineSchool, MdDateRange } from "react-icons/md";
import { FaToolbox } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";

const About = () => {
    const EduList = [
        {
            "courseName": "Bachelor of Science (Information Systems)",
            "school": "Singapore Management University",
            "location": "Singapore",
            "date": "Aug 2024 - Aug 2028"
        }, {
            "courseName": "Diploma in Business Information Systems",
            "school": "Republic Polytechnic",
            "location": "Singapore",
            "date": "Apr 2019 - Apr 2022"
        }
    ];

    const skills = [
        { "name": "HTML", "icon": <FaHtml5 size={20} /> },
        { "name": "CSS", "icon": <IoLogoCss3 size={20} /> },
        { "name": "Python", "icon": <FaPython size={20} /> },
        { "name": "React", "icon": <FaReact size={20} /> },
        { "name": "JavaScript", "icon": <IoLogoJavascript size={20} /> },
        { "name": "MySQL", "icon": <GoDatabase size={20} /> },
    ]

    return (
        <main className="px-6 mt-5 py-6 max-w-screen-xl mx-auto scroll-mt-20" id="aboutMe">
            <h1 className="text-3xl font-bold justify-self-center italic dark:text-white">About Me</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">

                <div className="dark:bg-[#ffffff0d] bg-gray-200 p-4 sm:p-6 rounded-lg border border-gray-500 dark:border-[#ffffff1a]">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold flex flex-row gap-2 text-blue-700 dark:text-[#4dabf7]">
                            <MdOutlineSchool size={30} /> Education
                        </h2>
                    </div>

                    {EduList.map((Edu, idx) => (
                        <div className="flex flex-col mb-4 px-2 py-2 border-l-4 border-emerald-400" key={idx}>
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                                {Edu.courseName}
                            </h3>

                            <p className="font-semibold text-gray-700 dark:text-gray-300">
                                {Edu.school}
                            </p>

                            <div className="text-sm flex flex-row gap-3 pt-1">
                                <p className="text-gray-600 dark:text-[#adb5bd] flex flex-row gap-1">
                                    <MdDateRange size={20} /> {Edu.date}
                                </p>

                                <p className="text-gray-600 dark:text-[#adb5bd] flex flex-row gap-1">
                                    <SlLocationPin size={20} /> {Edu.location}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="dark:bg-[#ffffff0d] bg-gray-200 p-4 sm:p-6 rounded-lg border border-gray-500 dark:border-[#ffffff1a]">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold flex flex-row gap-2 text-blue-700 dark:text-[#4dabf7] mb-3">
                            <FaToolbox size={30} /> Skills
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-3 text-gray-800 dark:text-gray-300">
                        {skills.map((skill, idx) => (
                            <div key={idx} 
                                className="bg-white/70 dark:bg-white/10 backdrop-blur-sm py-2 px-3 rounded-md transition
                                        border border-black dark:border-none
                                        hover:shadow-md hover:shadow-blue-400">
                                <span className="flex flex-row gap-1 font-semibold items-center">
                                    {skill.icon}
                                    {skill.name}
                                </span>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main >
    );
}

export default About;