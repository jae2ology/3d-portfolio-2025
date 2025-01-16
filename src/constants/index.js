import gsu from "../assets/images/gsu.png";
import gwc from "../assets/images/gwc.png";
import gameheads from "../assets/images/gameheads.jpg";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Self-Paced Program",
        company_name: "Girls Who Code",
        icon: gwc,
        iconBg: "#06bf8e",
        date: "July 2024 - August 2024",
        points: [
            "Made an impact through hands-on, real-world projects with self paced coding modules focused on HTML, CSS, and JavaScript.",
            "Earned certificates in coding languages such as HTML, CSS, and JavaScript.",
            "Collaborated with small group advisory sessions and cohorts with other Self-Paced students.",
        ],
    },
    {
        title: "Southern Ambassador",
        company_name: "Georgia Southern University",
        icon: gsu,
        iconBg: "#353973",
        date: "September 2024 - Present",
        points: [
            "Provided daily campus tours to prospective students.",
            "Assisted in preparation for and attend recruitment events hosted by the Office of Admissions.",
            "Collaborated with other Ambassadors for projects and events.",
    ],
    },
    {
        title: "Peer Tutor",
        company_name: "Georgia Southern University",
        icon: gsu,
        iconBg: "#353973",
        date: "December 2024 - Present",
        points: [
            "Answered subject-specific questions, help students identify and overcome learning challenges, and improve students' problem-solving abilities in MATH 1111, MATH 1112, ENGL 1101, and ENGL 1102.",
            "Provided assistance with various assignments, including essays when applicable.",
        ],
    },
    {
        title: "Game Developer Cohort",
        company_name: "Gameheads",
        icon: gameheads,
        iconBg: "#ff4d4d",
        date: "Jan 2024 - Present",
        points: [
            "Over the course of a year, I will combine video game design and development, education and career counseling, industry exposure, and hands-on training. ",
            "I will get trained on how to create, code and design games, building skills across specific fields necessary to thrive in technology.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/jae2ology',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jacksonjae',
    }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Health Equity Activism Website',
        description: 'Highlighted the issues in health and discrepancies in treatment based on race and gender, embedded with a page to contact your local representative.',
        link: 'https://github.com/adrianhajdin/healthequitywebsite',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'My Little Pony Personality Quiz',
        description: 'Created a My Little Pony Personality quiz, like a Buzzfeed quiz, where users can find out which My Little Pony character they are.',
        link: 'https://github.com/adrianhajdin/quiz',
    },
  
];