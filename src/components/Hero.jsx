import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import DeveloperRoom from "../components3d/DeveloperRoom/DeveloperRoom";

const stats = [
  {
    value: "3+",
    label: "Years of Experience",
  },
  {
    value: "15+",
    label: "Projects Completed",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Passion for Code",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-16 pt-32 sm:px-8 lg:pt-36"
    >
      {/* Background glow */}
      <div className=" pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.06]  blur-[140px] " />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Hero Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0a0a0a] ">
          <div className=" grid min-h-[620px] items-center gap-12 px-7 py-14 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-16">
            {/* LEFT CONTENT */}
            <div className="relative z-10">
              {/* Small label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium  text-zinc-400 "
              >
                <span className=" h-2 w-2 rounded-full bg-emerald-400" />{" "}
                Available for opportunities
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className=" max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl "
              >
                Building ideas
                <span className="block text-zinc-500">
                  into digital experiences.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
              >
                Hi, I'm Albin — a software engineer focused on building modern,
                scalable and user-focused web applications with clean code and
                thoughtful experiences.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className=" mt-9 flex flex-wrap items-center gap-4 "
              >
                {/* Primary */}
                <a
                  href="#projects"
                  className=" group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 "
                >
                  <span style={{ color: "#000000" }}>View my work</span>

                  <ArrowDownRight
                    size={18}
                    style={{ color: "#000000" }}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>

                {/* Secondary */}
                <a
                  href="#contact"
                  className=" group inline-flex items-center gap-2 rounded-xl border border-white/10  bg-white/[0.03] px-6 py-3.5 text-base font-medium text-white 
                  transition-all duration-300

                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >
                  Let's talk
                  <ArrowUpRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </motion.div>
            </div>

            {/* RIGHT / 3D AREA */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="
                relative
                flex min-h-[420px]
                items-center
                justify-center

                lg:min-h-[520px]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  h-[70%]
                  w-[70%]
                  rounded-full
                  bg-violet-500/[0.10]
                  blur-[100px]
                "
              />

              {/* 3D container */}
              <div className="relative h-[400px] w-full max-w-[520px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#07070a] lg:h-[470px]">
                {/* Decorative grid */}
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]
                    [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
      [background-size:35px_35px]"
                />

                {/* Purple background glow */}
                <div
                  className=" pointer-events-none absolute left-1/2 top-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2
                        -translate-y-1/2 rounded-full bg-violet-600/[0.10] blur-[90px] "
                />
                {/* Three.js */}
                <div className="absolute inset-0 z-10">
                  <DeveloperRoom />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom gradient */}
          <div
            className="
              pointer-events-none
              absolute bottom-0
              left-0 right-0
              h-32
              bg-gradient-to-t
              from-violet-500/[0.025]
              to-transparent
            "
          />
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            mt-5 grid
            grid-cols-2 gap-3

            lg:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                group
                rounded-2xl
                border border-white/[0.08]
                bg-[#0a0a0a]
                px-6 py-6
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-white/[0.15]
                hover:bg-[#0d0d0d]
              "
            >
              <h3
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white

                  sm:text-4xl
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-zinc-500
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
