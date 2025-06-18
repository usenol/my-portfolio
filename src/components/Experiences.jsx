import React from "react";
import { useTranslation } from "react-i18next";

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
