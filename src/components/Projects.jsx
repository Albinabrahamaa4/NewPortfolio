import { motion } from "motion/react";
import { ArrowUpRight, Database, Code2, Layers3 } from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "01",
    title: "Enterprise Booking System",
    category: "Full Stack Application",

    description:
      "A scalable booking and management platform with payment processing, reporting, invoicing and administrative workflows.",

    technologies: ["ASP.NET", "C#", "SQL Server", "JavaScript"],

    icon: Database,

    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",

    live: "#",
    github: "#",
  },

  {
    id: "02",
    title: "Modern Web Platform",
    category: "Frontend Development",

    description:
      "A responsive web experience focused on clean interfaces, reusable components and smooth user interactions.",

    technologies: ["React", "Tailwind CSS", "JavaScript", "Motion"],

    icon: Code2,

    gradient: "from-fuchsia-500/20 via-violet-500/10 to-transparent",

    live: "#",
    github: "#",
  },

  {
    id: "03",
    title: "Management Dashboard",
    category: "Business Application",

    description:
      "A data-driven dashboard designed for managing business operations, reports and complex application workflows.",

    technologies: ["Angular", ".NET", "REST API", "SQL Server"],

    icon: Layers3,

    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",

    live: "#",
    github: "#",
  },
];

/* =========================================================
   GITHUB ICON
   Inline SVG so we don't depend on Lucide's Github export.
========================================================= */

const GitHubIcon = ({ size = 17 }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.1v3.2c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.8-10.8C23.4 5.8 18.3.7 12 .7Z" />
    </svg>
  );
};

/* =========================================================
   PROJECTS COMPONENT
========================================================= */

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        bg-[#050505]
        px-5
        py-24
        sm:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-14
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* LEFT */}

          <div>
            {/* SMALL LABEL */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-violet-400
                "
              />

              <span
                className="
                  text-sm
                  font-medium
                  text-zinc-400
                "
              >
                Selected projects
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-3xl
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Selected
              <span
                className="
                  block
                  text-zinc-600
                "
              >
                Work.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <p
            className="
              max-w-md
              text-base
              leading-7
              text-zinc-500
              md:text-right
            "
          >
            A selection of applications and digital experiences I've worked on —
            combining clean architecture, thoughtful interfaces and scalable
            development.
          </p>
        </motion.div>

        {/* =================================================
            PROJECT LIST
        ================================================= */}

        <div className="space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/[0.09]
                  bg-[#0a0a0a]
                  transition-colors
                  duration-500
                  hover:border-violet-500/20
                "
              >
                <div
                  className="
                    grid
                    min-h-[480px]
                    lg:grid-cols-[0.9fr_1.1fr]
                  "
                >
                  {/* =========================================
                      PROJECT INFORMATION
                  ========================================= */}

                  <div
                    className="
                      flex
                      flex-col
                      justify-between
                      p-7
                      sm:p-10
                      lg:p-12
                    "
                  >
                    <div>
                      {/* NUMBER + CATEGORY */}

                      <div
                        className="
                          mb-10
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        <span
                          className="
                            text-sm
                            font-medium
                            text-zinc-600
                          "
                        >
                          / {project.id}
                        </span>

                        <span
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-4
                            py-2
                            text-xs
                            font-medium
                            text-zinc-400
                          "
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          max-w-lg
                          text-3xl
                          font-semibold
                          tracking-[-0.03em]
                          text-white
                          sm:text-4xl
                          lg:text-5xl
                        "
                      >
                        {project.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-6
                          max-w-lg
                          text-base
                          leading-7
                          text-zinc-500
                        "
                      >
                        {project.description}
                      </p>

                      {/* TECHNOLOGIES */}

                      <div
                        className="
                          mt-8
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-lg
                              border
                              border-white/[0.08]
                              bg-white/[0.03]
                              px-3
                              py-2
                              text-xs
                              font-medium
                              text-zinc-400
                              transition-colors
                              duration-300
                              hover:border-violet-500/30
                              hover:text-white
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* =========================================
                        BUTTONS
                    ========================================= */}

                    <div
                      className="
                        mt-12
                        flex
                        flex-wrap
                        gap-3
                      "
                    >
                      {/* VIEW PROJECT */}

                      <a
                        href={project.live}
                        style={{
                          color: "#000000",
                        }}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          bg-white
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:bg-zinc-200
                        "
                      >
                        View project
                        <ArrowUpRight size={16} />
                      </a>

                      {/* GITHUB */}

                      <a
                        href={project.github}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-white/20
                          hover:bg-white/[0.08]
                        "
                      >
                        <GitHubIcon size={17} />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* =========================================
                      PROJECT VISUAL
                  ========================================= */}

                  <div
                    className="
                      relative
                      min-h-[380px]
                      overflow-hidden
                      border-t
                      border-white/[0.07]
                      lg:border-l
                      lg:border-t-0
                    "
                  >
                    {/* PURPLE BACKGROUND */}

                    <div
                      className={`
                        absolute
                        inset-0
                        bg-gradient-to-br
                        ${project.gradient}
                        opacity-70
                      `}
                    />

                    {/* GRID BACKGROUND */}

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.08]
                        [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
                        [background-size:38px_38px]
                      "
                    />

                    {/* PURPLE GLOW */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[350px]
                        w-[350px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-violet-600/20
                        blur-[110px]
                      "
                    />

                    {/* =========================================
                        APPLICATION WINDOW
                    ========================================= */}

                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        absolute
                        left-[8%]
                        top-[12%]
                        h-[76%]
                        w-[84%]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0c0c10]
                        shadow-2xl
                        shadow-black/60
                      "
                    >
                      {/* WINDOW TOP BAR */}

                      <div
                        className="
                          flex
                          h-12
                          items-center
                          gap-2
                          border-b
                          border-white/[0.07]
                          px-4
                        "
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                        <div
                          className="
                            ml-4
                            h-2
                            w-24
                            rounded-full
                            bg-white/[0.05]
                          "
                        />
                      </div>

                      {/* =========================================
                          DASHBOARD
                      ========================================= */}

                      <div className="flex h-full">
                        {/* SIDEBAR */}

                        <div
                          className="
                            hidden
                            w-[22%]
                            border-r
                            border-white/[0.06]
                            p-4
                            sm:block
                          "
                        >
                          {/* LOGO */}

                          <div
                            className="
                              mb-7
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-lg
                              bg-violet-500/70
                            "
                          >
                            <div
                              className="
                                h-2
                                w-2
                                rounded-full
                                bg-white
                              "
                            />
                          </div>

                          {/* MENU ITEMS */}

                          {[1, 2, 3, 4, 5].map((item) => (
                            <div
                              key={item}
                              className="
                                mb-5
                                flex
                                items-center
                                gap-2
                              "
                            >
                              <div
                                className="
                                  h-2
                                  w-2
                                  rounded-sm
                                  bg-white/[0.08]
                                "
                              />

                              <div
                                className="
                                  h-2
                                  rounded-full
                                  bg-white/[0.07]
                                "
                                style={{
                                  width: `${40 + item * 6}%`,
                                }}
                              />
                            </div>
                          ))}
                        </div>

                        {/* MAIN CONTENT */}

                        <div
                          className="
                            flex-1
                            overflow-hidden
                            p-5
                            sm:p-7
                          "
                        >
                          {/* DASHBOARD TITLE */}

                          <div
                            className="
                              mb-3
                              h-3
                              w-32
                              rounded-full
                              bg-white/20
                            "
                          />

                          <div
                            className="
                              h-2
                              w-20
                              rounded-full
                              bg-white/[0.07]
                            "
                          />

                          {/* STAT CARDS */}

                          <div
                            className="
                              mt-7
                              grid
                              grid-cols-3
                              gap-3
                            "
                          >
                            {[1, 2, 3].map((item) => (
                              <motion.div
                                key={item}
                                whileHover={{
                                  y: -3,
                                }}
                                className="
                                  relative
                                  h-20
                                  overflow-hidden
                                  rounded-xl
                                  border
                                  border-white/[0.07]
                                  bg-white/[0.025]
                                "
                              >
                                <div
                                  className="
                                    absolute
                                    left-4
                                    top-4
                                    h-2
                                    w-10
                                    rounded-full
                                    bg-white/10
                                  "
                                />

                                <div
                                  className="
                                    absolute
                                    bottom-4
                                    left-4
                                    h-4
                                    w-14
                                    rounded
                                    bg-violet-500/30
                                  "
                                />
                              </motion.div>
                            ))}
                          </div>

                          {/* =====================================
                              CHART
                          ===================================== */}

                          <div
                            className="
                              relative
                              mt-4
                              h-[150px]
                              overflow-hidden
                              rounded-xl
                              border
                              border-white/[0.07]
                              bg-white/[0.02]
                            "
                          >
                            {/* HORIZONTAL LINES */}

                            <div className="absolute inset-0">
                              {[25, 50, 75].map((position) => (
                                <div
                                  key={position}
                                  className="
                                    absolute
                                    left-0
                                    right-0
                                    border-t
                                    border-white/[0.04]
                                  "
                                  style={{
                                    top: `${position}%`,
                                  }}
                                />
                              ))}
                            </div>

                            {/* BARS */}

                            <div
                              className="
                                absolute
                                bottom-5
                                left-5
                                right-5
                                flex
                                items-end
                                gap-2
                              "
                            >
                              {[35, 55, 45, 75, 60, 90, 70, 100].map(
                                (height, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{
                                      height: 0,
                                    }}
                                    whileInView={{
                                      height: `${height}px`,
                                    }}
                                    viewport={{
                                      once: true,
                                    }}
                                    transition={{
                                      duration: 0.7,
                                      delay: i * 0.06,
                                    }}
                                    className="
                                    flex-1
                                    rounded-t-sm
                                    bg-violet-500/60
                                  "
                                  />
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* =========================================
                        PROJECT TYPE ICON
                    ========================================= */}

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      className="
                        absolute
                        bottom-6
                        right-6
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-black/50
                        text-violet-300
                        backdrop-blur-xl
                      "
                    >
                      <Icon size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
