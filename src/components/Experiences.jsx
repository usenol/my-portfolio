import React from "react";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    id: 1,
    role: "Candidate Engineer",
    company: "KEYDATA Computing System Technologies Inc.",
    date: "Jan 2025 – Jun 2025",
    location: "Ankara, Turkey",
    tools: "Java, Maven, Lombok, Hibernate, Spring Boot, Postman, RESTful API, PostgreSQL, JIRA",
    description: [
      "Took part in backend development processes.",
      "Managed queries and relationships on PostgreSQL database systems."
    ]
  },
  {
    id: 2,
    role: "Mobile Application Developer (Part-Time)",
    company: "The Food Runners",
    date: "Feb 2025 – Mar 2025",
    location: "Remote – California, USA",
    tools: "Flutter, Dart, Android, iOS, Postman, RESTful API, Git, GitHub, JIRA",
    description: [
      "Developed the driver-side UI of the app using Flutter.",
      "Integrated API endpoints and handled UI logic for mobile screens."
    ]
  },
  {
    id: 3,
    role: "Intern Software Test Engineer",
    company: "Utarit Information Technologies Inc.",
    date: "Jul 2024 – Aug 2024",
    location: "Ankara, Turkey",
    tools: "JIRA, SQL, Postman, Excel, Word",
    description: [
      "Conducted manual and automated mobile application testing.",
      "Contributed to test documentation and issue tracking processes via JIRA."
    ]
  },
  {
    id: 4,
    role: "iOS Developer Intern",
    company: "Ordulu Technology Inc.",
    date: "Jul 2023 – Aug 2023",
    location: "Ankara, Turkey",
    tools: "Swift, UIKit, Storyboard, MVVM, MVC, CocoaPods, Git, GitLab, Xcode",
    description: [
      "Contributed to the development of a mobile app with end-to-end encryption.",
    ]
  },
  {
    id: 5,
    role: "Trainee Developer",
    company: "Apple Authorized Training Center",
    date: "Jul 2022 – Dec 2022",
    location: "",
    tools: "",
    description: [
      "Completed a 240-hour Swift & iOS training program in collaboration with Turkey’s Presidential National Library Digital Transformation Office."
    ]
  }
];

export default function Experiences() {
  const { t } = useTranslation();
  const experiences = t("experiences.items", { returnObjects: true }) || [];

  return (

    <section id="experiences" className="relative min-h-screen bg-gray-950 text-white px-6 pt-28 pb-16">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-16 left-1/2 transform -translate-x-1/2"></div>

      <div className="relative z-10 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <header className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t("experiences.header")}
            <span className="text-purple-400"> {t("experiences.subheader")}</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            {t("experiences.description")}
          </p>
        </header>

        <div className="space-y-8">
          {experiences.map(exp => (
            <div key={exp.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-800/40 transition-all duration-300" data-aos="fade-up" data-aos-delay={exp.id * 150}>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <div className="text-purple-400 font-medium">{exp.company}</div>
              <div className="text-sm text-gray-400 mb-2">{exp.date} {exp.location && `• ${exp.location}`}</div>
              {exp.tools && <div className="text-sm text-gray-300 mb-2"><span className="font-medium text-white">Skills & Tools: </span>{exp.tools}</div>}
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
