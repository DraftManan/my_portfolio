import Footer from "../components/footer";
const education = [
    {
        dates: "2022-present",
        role: "School of Information Technology",
        company: "King Mongkut's Institute of Technology Ladkrabang",
        GPA: "5 term 3.22",
        logo: "/images/kmitl.png"
    },
    {
        dates: "2015-2021",
        role: "student",
        company: "Samsenwittayalai School",
        GPA: "3.82",
        logo: "/images/samsen.png"
    }
]

const AboutEducation = ({ logo, company, dates, role, GPA }) => {
    return (
        <div className="relative flex flex-col justify-start pl-12">
        <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
            <img src={logo} alt={company} className="w-8 h-8" />
        </div>
        <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">{dates}</p>
        <h3 className="my-1 text-lg font-bold dark:text-neutral-100">{role}</h3>
            <p className="mb-1 text-sm font-medium dark:text-neutral-300">{company}</p>
            <p className="text-sm font-light text-neutral-600 dark:text-neutral-400"> GPA: 
                {GPA}
            </p>
        </div>
     )
}

const About = () => {

    return (
        <><div className="h-[100px]"></div><div>
            <section className="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
                <div className="relative z-20 w-full mx-auto lg:mx-0">
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">About Me</h2>
                    <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
                        Hello 👋 I am a third-year IT student at King Mongkut's Institute of Technology Ladkrabang (KMITL){" "}
                    </p>
                </div>

                <img src="/images/Me.jpg" className="relative z-30 w-full my-10 rounded-xl" />


                <h2
                    className="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6 dark:text-neutral-200"
                >
                    Education
                </h2>
                <div className="px-5 py-10">
                    {education.map((education, index) => {
                        return (
                            <div
                                key={index}
                                className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700"
                            >
                                <AboutEducation
                                    dates={education.dates}
                                    role={education.role}
                                    company={education.company}
                                    GPA={education.GPA}
                                    logo={education.logo} />
                            </div>
                        )
                    })}
                </div>

            </section>
            <Footer />
        </div></>
    )
}
export default About;