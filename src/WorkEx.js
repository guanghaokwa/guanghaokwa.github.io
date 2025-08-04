const WorkEx = () => {
    const jobList = [
        {
            "file": "works/xiohoo_logo.jpg",
            "alt": "XIOHOO Logo",
            "company": "XIOHOO (Social Enterprise)",
            "position": "Application Programmer",
            "type": "Part Time",
            "date": "June 2022 - August 2022"
        }, {
            "file": "works/xiohoo_logo.jpg",
            "alt": "XIOHOO Logo",
            "company": "XIOHOO (Social Enterprise)",
            "position": "Application Programmer",
            "type": "Internship",
            "date": "March 2021 - July 2021"
        }, {
            "file": "works/ems_logo.jpg",
            "alt": "EMS Wiring Systems Pte Ltd Logo",
            "company": "EMS Wiring Systems Pte Ltd",
            "position": "Finance Assistance",
            "type": "Part Time",
            "date": "December 2018 - Feburary 2019"
        }
    ];
    return (
        <main className="px-6 mt-5 py-6 max-w-screen-xl mx-auto scroll-mt-20" id="workEx">
            <h1 className="text-3xl font-bold justify-self-center italic">Work Experiences</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 py-10">
                {jobList.map((job, idx) => (
                    <div key={idx}
                        className="p-4 sm:p-6 flex flex-col sm:flex-row space-x-3 sm:space-x-5 rounded-2xl
                                        dark:bg-[#ffffff0d] bg-gray-200
                                        border border-gray-500 dark:border-[#ffffff1a]">
                        <div className="justify-items-center mb-2">
                            <img src={`${job.file}`} className="w-20 md:w-24 h-auto rounded-[1.5vw]" alt={`${job.alt}`}/>
                        </div>

                        <div className="place-content-center">
                            <div className='mb-1 text-xl font-medium text-blue-700 dark:text-[#4dabf7]'>{job.position}</div>
                            <div className="mb-1 text-base">{job.company} &#183; {job.type}</div>
                            <div className="text-base italic font-light dark:text-[#adb5bd]">{job.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default WorkEx;