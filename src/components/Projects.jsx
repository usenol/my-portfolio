import React from "react";
import project1 from "/images/ctsProject.png";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ image, title, description, link, buttonText }) => {
    return (
        <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
            <div className="absolute z-0 w-40 h-40 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

            <div className="relative z-10">
                <figure className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-500 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(128, 0, 128, 0.2)' }}
                    >
                        <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#281c35]">
                            {buttonText}
                        </button>
                    </a>
                </figure>

                <div className="px-6 py-4">
                    <header>
                        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                    </header>
                    <p className="text-gray-200 text-base">{description}</p>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    const { t } = useTranslation();
    const listProjects = [
        {
            image: project1,
            title: t("projects.items.0.title"),
            description: t("projects.items.0.description"),
            link: "https://drive.google.com/file/d/1_q9JfDGLsSjdtJMAM5YGzYai8iujt0eW/view?usp=share_link",
        }
    ];

    return (
        <main id="projects" className="p-4 bg-gray-950 text-white min-h-screen pt-[120px]">
            <section data-aos="fade-up" data-aos-delay="300">
  {/* Blur arka plan */}
  <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#e05fee] rounded-full blur-3xl opacity-50 -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none"></div>

  {/* Başlık katmanı */}
  <header className="text-center relative z-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
      {t("projects.header")} <span className="text-purple-400">{t("projects.subheader")}</span>
    </h1>
    <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
      {t("projects.description")}
    </p>
  </header>
</section>

            <section
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex flex-wrap gap-6 justify-center mt-6"
            >
                {listProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        buttonText={t("projects.button")}
                    />
                ))}
            </section>
        </main>
    );
};

export default Projects;
