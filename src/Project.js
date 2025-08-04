import { GrTrophy } from "react-icons/gr";
import { FaAward, FaGithub } from "react-icons/fa";

const Project = () => {
    return (
        <main className="px-6 mt-5 py-6 max-w-screen-xl mx-auto scroll-mt-20" id="myProject">
            <h1 className="text-3xl font-bold justify-self-center italic">My Projects</h1>

            <div className="my-6 py-6">
                <div 
                    className="grid grid-cols-1 gap-4 mx-auto max-w-2xl
                                border border-gray-500 dark:border-[#ffffff1a] rounded-xl">
                    <img src="my_projects/GreenMelionAI.png" alt="my project" 
                            className="object-cover border-b-4 border rounded-t-xl"/>

                    <div className="pt-2 px-6 pb-6">
                        <h2 className="text-2xl text-blue-700 dark:text-[#4dabf7] justify-self-center font-bold">GreenMerlionAI</h2>

                        <p className="p-1 sm:p-4">
                            This project aims to improve recycling rates in Singapore using image processing, AI and
                            gamification.
                            For instance, our <b>Waste Classification System</b> can identify waste types which can help to
                            reduce contaimination in
                            recycling bins and improve efficiency. An <b>AI-Powered Assistant</b> can guide user on proper
                            waste disposal and promote
                            awaresness on recycling habits. To encourage active participation, 
                            a <b>Gamification System</b> rewards user for correct recycling practices.
                        </p>

                        <div className="px-4 py-5 mt-4 bg-[#00000033] rounded-lg">
                            <div className="flex flex-row gap-2 pb-3 text-wrap">
                                <span 
                                    className="flex flex-row gap-1 items-center font-bold text-blue-700 dark:text-[#4dabf7]">
                                        <GrTrophy />Competition: 
                                </span>
                                <span className="items-center ">Hack for Cities 2025</span>
                            </div>
                            <div className="flex flex-row gap-2 pb-1">
                                <span 
                                    className="flex flex-row gap-1 items-center font-bold text-blue-700 dark:text-[#4dabf7]">
                                    <FaAward />Achievement: 
                                </span>
                                <span className="items-center">Top 10 finalist</span>
                            </div>
                        </div>

                        <div className="justify-self-center mt-5">
                            <a href="https://github.com/guanghaokwa/AI-HFC-Recycle-Management-System" target="_blank" rel="noopener noreferrer"
                                className="flex flex-row gap-2 items-center bg-blue-400 dark:bg-[#007bbf] p-3 rounded-xl"> 
                                <FaGithub size={20}/> View on GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Project;