import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-4 p-6 mx-auto border-t-2 border-black bg-zinc-200
                            dark:bg-gray-800 dark:text-white dark:border-white">
            <div className="justify-self-center text-center py-6">
                <h2 className="text-xl font-bold mb-3">LET'S CONNECT</h2>
                <h4 className="text-md font-medium">Feel free to reach out for opportunities to work together</h4>

                <div className="flex space-x-5 mt-5 pt-2 pb-6 place-content-center">

                    <a href="https://www.linkedin.com/in/kwa-guang-hao-98213y" target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-300 dark:bg-black rounded-xl">
                        <FaLinkedin size={20} />
                    </a>

                    <a href="https://github.com/guanghaokwa" target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-300 dark:bg-black rounded-xl">
                        <FaGithub size={20} />
                    </a>
                </div>

                <div className="place-content-center font-light dark:text-[#adb5bd] pb-3">
                    Designed by Kwa Guang Hao 
                </div>

                <div className="place-content-center font-light dark:text-[#adb5bd]">
                    &copy; 2025 All rights reserved. 
                </div>
            </div>
        </footer >
    );
}

export default Footer;
