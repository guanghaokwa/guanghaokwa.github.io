import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Overview = () => {
    return (
        <main id="Home"
            className="flex flex-col md:flex-row md:space-x-10 m-auto scroll-mt-20
                    justify-self-center items-center px-6 pt-20 pb-10 mt-2 mb-5 mx-auto">

            <div className="flex justify-center w-full md:w-1/2">
                <img className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 
                                xl:w-80 xl:h-80 object-cover rounded-full shadow-lg"
                    src="my_projects/gh photo.jpg" alt="Kwa Guang Hao" />
            </div>

            <div className="columns-4xl pt-6">
                <div className='mb-3'>
                    <h1 className="text-3xl md:text-4xl sm:text-5xl font-bold">Hi, I'm Kwa Guang Hao</h1>
                </div>

                <ReactTyped
                    strings={[
                        "Application Programmer",
                        "Information Systems Student",
                    ]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop
                    className="text-2xl min-h-12 block mb-1"
                ></ReactTyped>


                <p className="text-lg mt-2 md:text-xl">
                    A 2nd Year Information Systems Undergraduate Student at
                    Singapore Management University.
                </p>
                <p className="text-lg md:text-xl">
                    Passionate to help design solutions
                    streamlines processes
                </p>

                <div className="flex space-x-5 mt-3">

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
            </div>

        </main>
    );
}

export default Overview;