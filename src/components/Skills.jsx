import { motion } from "motion/react";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Braces,
  Globe2,
  GitBranch,
  Boxes,
  Terminal,
  Layers3,
  Cpu,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Backend",
    subtitle: "Server-side development & APIs",
    icon: Server,
    skills: [
      { name: "ASP.NET", icon: Code2 },
      { name: "C#", icon: Braces },
      { name: ".NET Core", icon: Cpu },
      { name: "Web API", icon: Globe2 },
      { name: "REST APIs", icon: Workflow },
      { name: "MVC", icon: Layers3 },
    ],
  },
  {
    title: "Frontend",
    subtitle: "Modern responsive interfaces",
    icon: Code2,
    skills: [
      { name: "React", icon: Code2 },
      { name: "Angular", icon: Boxes },
      { name: "JavaScript", icon: Braces },
      { name: "HTML", icon: Globe2 },
      { name: "CSS", icon: Layers3 },
      { name: "Tailwind CSS", icon: Code2 },
    ],
  },
  {
    title: "Database",
    subtitle: "Data architecture & optimization",
    icon: Database,
    skills: [
      { name: "SQL Server", icon: Database },
      { name: "Stored Procedures", icon: Terminal },
      { name: "SQL Queries", icon: Braces },
      { name: "Database Design", icon: Layers3 },
    ],
  },
  {
    title: "Tools",
    subtitle: "Development workflow & productivity",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Postman", icon: Globe2 },
      { name: "Visual Studio", icon: Code2 },
      { name: "VS Code", icon: Terminal },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[600px] w-[600px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-violet-700/[0.06]
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
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
              My toolkit
            </motion.div>

            {/* Heading */}
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
              Technologies
              <span className="block text-zinc-600">I work with.</span>
            </motion.h2>
          </div>

          {/* Right description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:flex lg:justify-end"
          >
            <p
              className="
                max-w-md text-base
                leading-8 text-zinc-500
                lg:text-right
              "
            >
              A practical technology stack focused on building scalable
              applications, reliable backend systems and clean digital
              experiences.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            SKILL CARDS
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-4 md:grid-cols-2"
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-white/[0.08]
                  bg-[#0a0a0a]
                  p-7
                  sm:p-9
                "
              >
                {/* Violet hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -right-24 -top-24
                    h-64 w-64 rounded-full
                    bg-violet-600/[0.08]
                    blur-[80px]
                    transition-all duration-500

                    group-hover:bg-violet-600/[0.16]
                  "
                />

                {/* Top */}
                <div className="relative z-10 mb-9 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-600">
                      {group.subtitle}
                    </p>
                  </div>

                  {/* Category icon */}
                  <div
                    className="
                      flex h-12 w-12
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
                    <GroupIcon size={21} />
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-7 h-px bg-white/[0.06]" />

                {/* Skills */}
                <div className="relative z-10 grid gap-3 sm:grid-cols-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          x: 4,
                        }}
                        className="
                          flex items-center gap-3
                          rounded-xl
                          border border-white/[0.07]
                          bg-white/[0.025]
                          px-4 py-3.5
                          text-sm font-medium
                          text-zinc-400
                          transition-colors duration-300

                          hover:border-violet-400/20
                          hover:bg-violet-500/[0.06]
                          hover:text-white
                        "
                      >
                        <div
                          className="
                            flex h-8 w-8
                            shrink-0 items-center
                            justify-center
                            rounded-lg
                            bg-violet-500/[0.08]
                            text-violet-400
                          "
                        >
                          <SkillIcon size={15} />
                        </div>

                        {skill.name}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =====================================================
            BOTTOM TECH STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-4 flex flex-wrap
            items-center justify-center
            gap-x-8 gap-y-4
            rounded-[24px]
            border border-white/[0.08]
            bg-[#090909]
            px-6 py-6
          "
        >
          {[
            "ASP.NET",
            "C#",
            "SQL Server",
            "React",
            "Angular",
            "JavaScript",
            "REST API",
            "Git",
          ].map((technology, index) => (
            <div key={technology} className="flex items-center gap-8">
              <span
                className="
                  text-sm font-medium
                  text-zinc-500
                  transition-colors duration-300
                  hover:text-white
                "
              >
                {technology}
              </span>

              {index !== 7 && (
                <span className="hidden h-1 w-1 rounded-full bg-violet-500/50 sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
