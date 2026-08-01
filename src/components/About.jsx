import { motion } from "motion/react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Code2,
  MapPin,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

const floatingTech = [
  {
    name: "ASP.NET",
    className: "left-[4%] top-[15%]",
    delay: 0,
  },
  {
    name: "React",
    className: "right-[4%] top-[20%]",
    delay: 0.4,
  },
  {
    name: "C#",
    className: "left-[8%] bottom-[20%]",
    delay: 0.8,
  },
  {
    name: "SQL Server",
    className: "right-[3%] bottom-[18%]",
    delay: 1.2,
  },
  {
    name: ".NET",
    className: "left-1/2 top-[7%] -translate-x-1/2",
    delay: 1.6,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[#050505]
        px-5 py-24
        sm:px-8
        lg:py-32
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute left-[20%] top-1/2
          h-[600px] w-[600px]
          -translate-y-1/2
          rounded-full
          bg-violet-700/[0.06]
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-7 inline-flex
                items-center gap-2
                rounded-full
                border border-white/10
                bg-white/[0.03]
                px-4 py-2
                text-sm text-zinc-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-violet-400" />A little
              about me
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
              More than
              <span className="block text-zinc-600">just code.</span>
            </motion.h2>
          </div>

          {/* Header description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="lg:flex lg:justify-end"
          >
            <p
              className="
                max-w-md text-base
                leading-8 text-zinc-500
                lg:text-right
              "
            >
              I enjoy turning complex requirements into clean, practical and
              meaningful digital products.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN ABOUT GRID
        ====================================================== */}

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          {/* ===================================================
              LEFT DEVELOPER CARD
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
            className="
              relative min-h-[520px]
              overflow-hidden
              rounded-[30px]
              border border-white/[0.08]
              bg-[#090909]
            "
          >
            {/* Grid */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                opacity-[0.16]
              "
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "42px 42px",
              }}
            />

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute left-1/2 top-1/2
                h-[300px] w-[300px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-violet-600/[0.14]
                blur-[90px]
              "
            />

            {/* =================================================
                FLOATING TECHNOLOGIES
            ================================================== */}

            {floatingTech.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.5,
                    delay: tech.delay,
                  },
                  scale: {
                    duration: 0.5,
                    delay: tech.delay,
                  },
                  y: {
                    duration: 3 + tech.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`
                  absolute z-20
                  ${tech.className}
                `}
              >
                <div
                  className="
                    rounded-xl
                    border border-white/10
                    bg-[#111111]/90
                    px-4 py-2.5
                    text-xs font-medium
                    text-zinc-400
                    shadow-xl
                    backdrop-blur-xl
                  "
                >
                  {tech.name}
                </div>
              </motion.div>
            ))}

            {/* =================================================
                CENTER PROFILE
            ================================================== */}

            <div
              className="
                absolute inset-0
                flex items-center
                justify-center
                p-8
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  relative z-10
                  w-full max-w-[300px]
                  rounded-[28px]
                  border border-white/10
                  bg-[#0d0d0d]/90
                  p-8 text-center
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                {/* Code icon */}
                <motion.div
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mx-auto flex
                    h-20 w-20
                    items-center justify-center
                    rounded-[22px]
                    border border-violet-400/20
                    bg-violet-500/[0.08]
                    text-violet-400
                    shadow-[0_0_60px_rgba(139,92,246,0.12)]
                  "
                >
                  <Code2 size={34} strokeWidth={1.5} />
                </motion.div>

                <p
                  className="
                    mt-7 text-xs font-medium
                    uppercase
                    tracking-[0.25em]
                    text-violet-400
                  "
                >
                  Software Developer
                </p>

                <h3
                  className="
                    mt-3 text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  Albin Abraham
                </h3>

                <p
                  className="
                    mx-auto mt-4
                    max-w-[230px]
                    text-sm leading-6
                    text-zinc-600
                  "
                >
                  Building scalable web applications and thoughtful digital
                  experiences.
                </p>

                {/* Status */}
                <div
                  className="
                    mt-7 inline-flex
                    items-center gap-2
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.03]
                    px-3 py-2
                    text-xs text-zinc-500
                  "
                >
                  <span
                    className="
                      h-2 w-2 rounded-full
                      bg-emerald-400
                    "
                  />
                  Available for opportunities
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT CONTENT
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              rounded-[30px]
              border border-white/[0.08]
              bg-[#0a0a0a]
              p-7
              sm:p-10
              lg:p-12
            "
          >
            {/* Small heading */}
            <div className="flex items-center gap-3 text-violet-400">
              <Sparkles size={18} />

              <span
                className="
                  text-xs font-medium
                  uppercase tracking-[0.2em]
                "
              >
                Who I am
              </span>
            </div>

            {/* Main text */}
            <h3
              className="
                mt-8 max-w-xl
                text-3xl font-semibold
                leading-[1.2]
                tracking-[-0.03em]
                text-white
                sm:text-4xl
              "
            >
              Developer focused on building software that
              <span className="text-zinc-500"> actually solves problems.</span>
            </h3>

            <div
              className="
                mt-8 space-y-5
                text-[15px]
                leading-8
                text-zinc-500
              "
            >
              <p>
                I'm Albin, a software developer with experience building and
                maintaining web applications using ASP.NET, C#, SQL Server and
                modern frontend technologies.
              </p>

              <p>
                I enjoy working across both backend and frontend development —
                from designing APIs and optimizing database queries to creating
                clean and responsive user interfaces.
              </p>

              <p>
                For me, good software is not just about making something work.
                It's about keeping the code maintainable, the experience simple
                and the solution reliable.
              </p>
            </div>

            {/* =================================================
                INFO CARDS
            ================================================== */}

            <div
              className="
                mt-10 grid gap-3
                sm:grid-cols-2
              "
            >
              {/* Location */}
              <div
                className="
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                "
              >
                <MapPin size={18} className="text-violet-400" />

                <p
                  className="
                    mt-5 text-xs
                    uppercase
                    tracking-[0.15em]
                    text-zinc-600
                  "
                >
                  Based in
                </p>

                <p
                  className="
                    mt-1 text-sm
                    font-medium text-zinc-300
                  "
                >
                  Kerala, India
                </p>
              </div>

              {/* Experience */}
              <div
                className="
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                "
              >
                <BriefcaseBusiness size={18} className="text-violet-400" />

                <p
                  className="
                    mt-5 text-xs
                    uppercase
                    tracking-[0.15em]
                    text-zinc-600
                  "
                >
                  Experience
                </p>

                <p
                  className="
                    mt-1 text-sm
                    font-medium text-zinc-300
                  "
                >
                  3+ Years
                </p>
              </div>
            </div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-10 flex
                flex-wrap gap-3
              "
            >
              {/* CV */}
              <a
                href="resume/ALBIN_ABRAHAM_CV.pdf"
                download
                style={{ color: "#000000" }}
                className="
                  inline-flex items-center
                  gap-2 rounded-xl
                  bg-white
                  px-5 py-3.5
                  text-sm font-semibold
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:bg-zinc-200
                "
              >
                Download CV
                <ArrowDownToLine size={16} />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="
                  inline-flex items-center
                  gap-2 rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5 py-3.5
                  text-sm font-semibold
                  text-white
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:bg-white/[0.07]
                "
              >
                Let's talk
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mt-5 grid gap-3
            sm:grid-cols-3
          "
        >
          <div
            className="
              rounded-[22px]
              border border-white/[0.08]
              bg-[#090909]
              px-7 py-6
            "
          >
            <p
              className="
                text-3xl font-semibold
                tracking-tight text-white
              "
            >
              3+
            </p>

            <p className="mt-2 text-sm text-zinc-600">Years of experience</p>
          </div>

          <div
            className="
              rounded-[22px]
              border border-white/[0.08]
              bg-[#090909]
              px-7 py-6
            "
          >
            <p
              className="
                text-3xl font-semibold
                tracking-tight text-white
              "
            >
              15+
            </p>

            <p className="mt-2 text-sm text-zinc-600">Projects completed</p>
          </div>

          <div
            className="
              rounded-[22px]
              border border-white/[0.08]
              bg-[#090909]
              px-7 py-6
            "
          >
            <p
              className="
                text-3xl font-semibold
                tracking-tight text-white
              "
            >
              ∞
            </p>

            <p className="mt-2 text-sm text-zinc-600">Curiosity to learn</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
