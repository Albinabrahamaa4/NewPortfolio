import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    period: "2025 — Present",
    role: "Software Developer",
    company: "Indus Motors Pvt. Ltd",
    location: "Kochi, Kerala",
    description:
      "Building and maintaining scalable web applications, backend services and business-critical features with a focus on performance, reliability and clean architecture.",
    responsibilities: [
      "Developing and maintaining ASP.NET applications and REST APIs.",
      "Designing and optimizing SQL Server stored procedures and queries.",
      "Building responsive frontend features and reusable UI components.",
      "Working with third-party APIs, payment systems and business integrations.",
    ],
    technologies: [
      "ASP.NET",
      "C#",
      "SQL Server",
      "JavaScript",
      "REST API",
      "React",
    ],
  },
  {
    period: "2022 — 2025",
    role: "Software Developer",
    company: "Tenwyn Media & Solutions (Techneurons Consulting Solutions)",
    location: "Kochi, Kerala",
    description:
      "Worked across backend and frontend development, contributing to production applications, database-driven systems and modern web interfaces.",
    responsibilities: [
      "Developed features using ASP.NET, C# and SQL Server.",
      "Created and maintained database queries and stored procedures.",
      "Integrated frontend interfaces with backend services and APIs.",
      "Collaborated with developers to deliver production-ready features.",
    ],
    technologies: [
      "ASP.NET",
      "C#",
      "SQL Server",
      "Angular",
      "JavaScript",
      "Git",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[700px] w-[700px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-violet-700/[0.05]
          blur-[170px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-7 inline-flex items-center gap-2
                rounded-full border border-white/10
                bg-white/[0.03]
                px-4 py-2
                text-sm text-zinc-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Career journey
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                text-5xl font-semibold
                leading-[0.95]
                tracking-[-0.05em]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Building experience
              <span className="block text-zinc-600">
                one project at a time.
              </span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:flex lg:justify-end"
          >
            <p className="max-w-md text-base leading-8 text-zinc-500 lg:text-right">
              My professional journey building web applications, backend
              systems, APIs and digital products while continuously improving
              performance and user experience.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative">
          {/* Vertical background line */}
          <div
            className="
              absolute bottom-0 left-[19px] top-0
              w-px bg-white/[0.08]
              md:left-1/2
            "
          />

          {/* Animated violet line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            style={{
              transformOrigin: "top",
            }}
            className="
              absolute left-[19px] top-0
              h-full w-px
              bg-gradient-to-b
              from-violet-400
              via-violet-600
              to-transparent
              md:left-1/2
            "
          />

          {/* =================================================
              EXPERIENCES
          ================================================== */}

          <div className="space-y-14 md:space-y-20">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${experience.company}-${experience.period}`}
                  className="
                    relative grid
                    pl-14
                    md:grid-cols-2
                    md:gap-20
                    md:pl-0
                  "
                >
                  {/* =================================================
                      TIMELINE NODE
                  ================================================== */}

                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                    }}
                    className="
                      absolute left-[9px] top-8
                      z-20
                      flex h-5 w-5
                      items-center justify-center
                      rounded-full
                      border border-violet-400/40
                      bg-[#050505]
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  >
                    <span
                      className="
                        h-2 w-2 rounded-full
                        bg-violet-400
                        shadow-[0_0_15px_rgba(167,139,250,0.9)]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      EXPERIENCE CARD
                  ================================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -50 : 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className={`
                      ${isLeft ? "md:col-start-1" : "md:col-start-2"}
                    `}
                  >
                    <div
                      className="
                        group relative overflow-hidden
                        rounded-[28px]
                        border border-white/[0.08]
                        bg-[#0a0a0a]
                        p-7
                        transition-all duration-500
                        hover:border-violet-400/20
                        sm:p-9
                      "
                    >
                      {/* Hover glow */}
                      <div
                        className="
                          pointer-events-none
                          absolute -right-28 -top-28
                          h-72 w-72
                          rounded-full
                          bg-violet-600/[0.06]
                          blur-[90px]
                          transition-all duration-500

                          group-hover:bg-violet-600/[0.14]
                        "
                      />

                      <div className="relative z-10">
                        {/* =================================================
                            TOP
                        ================================================== */}

                        <div className="mb-7 flex items-start justify-between gap-5">
                          <div>
                            {/* Period */}
                            <div
                              className="
                                mb-4 inline-flex
                                items-center gap-2
                                rounded-full
                                border border-violet-400/20
                                bg-violet-500/[0.06]
                                px-3 py-1.5
                                text-xs font-medium
                                text-violet-300
                              "
                            >
                              <CalendarDays size={13} />

                              {experience.period}
                            </div>

                            {/* Role */}
                            <h3
                              className="
                                text-2xl font-semibold
                                tracking-tight text-white
                                sm:text-3xl
                              "
                            >
                              {experience.role}
                            </h3>

                            {/* Company */}
                            <p className="mt-2 text-base font-medium text-zinc-400">
                              {experience.company}
                            </p>
                          </div>

                          {/* Icon */}
                          <div
                            className="
                              flex h-12 w-12 shrink-0
                              items-center justify-center
                              rounded-2xl
                              border border-white/10
                              bg-white/[0.04]
                              text-violet-400
                              transition-all duration-300

                              group-hover:border-violet-400/30
                              group-hover:bg-violet-500/10
                            "
                          >
                            <BriefcaseBusiness size={20} />
                          </div>
                        </div>

                        {/* Location */}
                        <div
                          className="
                            mb-7 flex items-center gap-2
                            text-sm text-zinc-600
                          "
                        >
                          <MapPin size={14} />

                          {experience.location}
                        </div>

                        {/* Divider */}
                        <div className="mb-7 h-px bg-white/[0.07]" />

                        {/* Description */}
                        <p
                          className="
                            text-sm leading-7
                            text-zinc-500
                            sm:text-[15px]
                          "
                        >
                          {experience.description}
                        </p>

                        {/* =================================================
                            RESPONSIBILITIES
                        ================================================== */}

                        <div className="mt-7 space-y-3">
                          {experience.responsibilities.map(
                            (responsibility, responsibilityIndex) => (
                              <motion.div
                                key={responsibility}
                                initial={{
                                  opacity: 0,
                                  x: -10,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  duration: 0.4,
                                  delay: responsibilityIndex * 0.08,
                                }}
                                className="
                                  flex items-start gap-3
                                  text-sm leading-6
                                  text-zinc-500
                                "
                              >
                                <span
                                  className="
                                    mt-[9px] h-1.5 w-1.5
                                    shrink-0 rounded-full
                                    bg-violet-400
                                  "
                                />

                                <span>{responsibility}</span>
                              </motion.div>
                            ),
                          )}
                        </div>

                        {/* =================================================
                            TECHNOLOGIES
                        ================================================== */}

                        <div className="mt-8 flex flex-wrap gap-2">
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="
                                rounded-lg
                                border border-white/[0.08]
                                bg-white/[0.025]
                                px-3 py-2
                                text-xs font-medium
                                text-zinc-400
                                transition-all duration-300

                                hover:border-violet-400/30
                                hover:bg-violet-500/[0.07]
                                hover:text-white
                              "
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* =================================================
                      YEAR / SIDE INFORMATION

                      Desktop only.
                  ================================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25,
                    }}
                    className={`
                      hidden md:flex
                      ${
                        isLeft
                          ? "col-start-2 row-start-1 justify-start"
                          : "col-start-1 row-start-1 justify-end"
                      }
                    `}
                  >
                    <div
                      className={`
                        mt-8 flex max-w-[250px]
                        items-center gap-3
                        ${isLeft ? "text-left" : "text-right"}
                      `}
                    >
                      {!isLeft && (
                        <ArrowUpRight size={16} className="text-violet-400" />
                      )}

                      <span
                        className="
                          text-sm font-medium
                          uppercase tracking-[0.15em]
                          text-zinc-600
                        "
                      >
                        {experience.period}
                      </span>

                      {isLeft && (
                        <ArrowUpRight size={16} className="text-violet-400" />
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-20 flex flex-col
            gap-5 rounded-[24px]
            border border-white/[0.08]
            bg-[#090909]
            px-7 py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-9
          "
        >
          <div>
            <p className="text-lg font-medium text-white">
              Always learning. Always building.
            </p>

            <p className="mt-1 text-sm text-zinc-600">
              Exploring better ways to build reliable and meaningful software.
            </p>
          </div>

          <a
            href="#contact"
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              text-zinc-400
              transition-colors
              hover:text-white
            "
          >
            Let's work together
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
