import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBar = () => {
    const [Nav, setNav] = useState(false);
    const [Mode, setMode] = useState('Dark');

    const handleClick = () => {
        if (Mode === 'Light') {
            setMode('Dark');
            document.documentElement.classList.add("dark");
        } else {
            setMode('Light');
            document.documentElement.classList.remove("dark");
        }
    }

    return (
        <header 
            className="fixed top-0 left-0 z-50 w-full bg-zinc-300 navbar-border font-medium italic
                    dark:bg-gray-800 dark:text-white">
            <nav className="mx-auto px-8 py-4 flex justify-between items-center text-base font-serif">
                <div className="font-bold dark:text-white">
                    <a href="#Home">GH Portfolio</a>
                </div>

                {/* Desktop View */}
                <div className="flex space-x-7">
                    <div className="hidden sm:block space-x-7">
                        <a className="italic" href="#aboutMe">About Me</a>
                        <a className="italic" href="#workEx">Work Experiences</a>
                        <a className="italic" href="#myProject">Projects</a>
                    </div>

                    <button onClick={handleClick}>
                        <div className="text-xl">
                            {Mode === 'Light' ? <MdLightMode /> : <MdDarkMode />}
                        </div>
                        <p className="hidden">{Mode}</p>
                    </button>

                    <button className="block sm:hidden"
                        onClick={() => setNav(!Nav)}>
                        {!Nav ? <GiHamburgerMenu size={25}/> : <ImCross size={18}/>}
                    </button>
                </div>
            </nav>

            {/* Mobile View */}
            <div className={`${Nav ? "block" : "hidden"} sm:hidden px-6 py-3 absolute bg-gray-200 w-full dark:bg-gray-600 dark:text-white`}>
                <a href="#aboutMe" className="py-1 block font-medium italic" onClick={() => setNav(!Nav)}>About Me</a>
                <a href="#workEx" className="py-1 block font-medium italic" onClick={() => setNav(!Nav)}>Work Experiences</a>
                <a href="#myProject" className="py-1 block font-medium italic" onClick={() => setNav(!Nav)}>Projects</a>
            </div>
        </header>
    );
}

export default NavBar;