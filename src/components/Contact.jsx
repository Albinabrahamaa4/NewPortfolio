import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, BriefcaseBusiness } from "lucide-react";

/* =========================================================
   GITHUB ICON
========================================================= */

const GitHubIcon = ({ size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.269.098-2.645 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.392.1 2.645.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.679.92.679 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
};

/* =========================================================
   LINKEDIN ICON
========================================================= */

const LinkedInIcon = ({ size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V19H6.94V8.5ZM5.25 3.25C4.17 3.25 3.3 4.12 3.3 5.2C3.3 6.28 4.17 7.15 5.25 7.15C6.33 7.15 7.2 6.28 7.2 5.2C7.2 4.12 6.33 3.25 5.25 3.25ZM19.5 13.02C19.5 9.86 17.81 8.39 15.56 8.39C13.74 8.39 12.93 9.39 12.47 10.09V8.5H9.09V19H12.47V13.8C12.47 12.43 12.73 11.1 14.43 11.1C16.1 11.1 16.12 12.66 16.12 13.89V19H19.5V13.02Z" />
    </svg>
  );
};

/* =========================================================
   CONTACT
========================================================= */

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-24
        sm:px-8
        lg:py-32
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-1/2
          h-[600px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-violet-700/[0.07]
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =================================================
            BADGE
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-zinc-400
          "
        >
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          Get in touch
        </motion.div>

        {/* =================================================
            MAIN CONTACT CARD
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-[#090909]
          "
        >
          {/* =================================================
              GRID
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.15]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "55px 55px",
            }}
          />

          {/* =================================================
              VIOLET GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-100px]
              top-[-100px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-violet-700/[0.10]
              blur-[130px]
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              relative
              grid
              gap-14
              px-7
              py-12
              sm:px-10
              sm:py-14
              lg:grid-cols-[1.25fr_0.75fr]
              lg:items-center
              lg:px-14
              lg:py-16
            "
          >
            {/* =================================================
                LEFT
            ================================================= */}

            <div>
              {/* SMALL LABEL */}

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-violet-400
                "
              >
                <Mail size={15} />
                Let's work together
              </div>

              {/* =================================================
                  HEADING
              ================================================= */}

              <h2
                className="
                  max-w-4xl
                  text-5xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Have an idea?
                <span className="mt-2 block text-zinc-600">
                  Let's build something great.
                </span>
              </h2>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-base
                  leading-8
                  text-zinc-400
                  sm:text-lg
                "
              >
                I'm always interested in discussing new projects, opportunities
                and ideas. Whether you're looking for a developer or just want
                to talk about building something, feel free to reach out.
              </p>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >
                {/* EMAIL */}

                <motion.a
                  href="mailto:albinabrahamaa4@gmail.com"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-white
                    px-6
                    py-4
                    text-base
                    font-semibold
                  "
                  style={{ color: "#000000" }}
                >
                  <Mail size={18} />
                  Email me
                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </motion.a>

                {/* =================================================
                    LINKEDIN
                ================================================= */}

                <motion.a
                  href="https://www.linkedin.com/in/albin-abraham-7138a9205/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    text-base
                    font-medium
                    text-zinc-300
                    transition-colors
                    hover:border-white/20
                    hover:bg-white/[0.07]
                    hover:text-white
                  "
                >
                  <LinkedInIcon />
                  LinkedIn
                </motion.a>

                {/* =================================================
                    GITHUB
                ================================================= */}

                <motion.a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    text-base
                    font-medium
                    text-zinc-300
                    transition-colors
                    hover:border-white/20
                    hover:bg-white/[0.07]
                    hover:text-white
                  "
                >
                  <GitHubIcon />
                  GitHub
                </motion.a>
              </div>
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}

            <div
              className="
                flex
                flex-col
                gap-4
                lg:pl-6
              "
            >
              {/* =================================================
                  ANIMATED ARROW
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  mb-4
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-violet-400/20
                  bg-violet-500/[0.08]
                  text-violet-400
                "
              >
                <ArrowUpRight size={36} strokeWidth={1.5} />
              </motion.div>

              {/* =================================================
                  LOCATION
              ================================================= */}

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-6
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-violet-400/20
                    bg-violet-500/[0.08]
                    text-violet-400
                  "
                >
                  <MapPin size={18} />
                </div>

                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  Based in
                </p>

                <p
                  className="
                    mt-2
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  Kerala, India
                </p>
              </motion.div>

              {/* =================================================
                  AVAILABILITY
              ================================================= */}

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-6
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-violet-400/20
                    bg-violet-500/[0.08]
                    text-violet-400
                  "
                >
                  <BriefcaseBusiness size={18} />
                </div>

                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  Availability
                </p>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                  "
                >
                  {/* GREEN ANIMATED DOT */}

                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-emerald-400
                        opacity-40
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-emerald-400
                      "
                    />
                  </span>

                  <p className="text-lg font-semibold text-white">
                    Open to opportunities
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div
            className="
              relative
              flex
              flex-col
              gap-3
              border-t
              border-white/[0.07]
              px-7
              py-6
              text-sm
              text-zinc-600
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-10
              lg:px-14
            "
          >
            <p>Have a project in mind? My inbox is always open.</p>

            <a
              href="mailto:albinabrahamaa4@gmail.com"
              className="
                group
                inline-flex
                items-center
                gap-2
                font-medium
                text-zinc-400
                transition-colors
                hover:text-white
              "
            >
              albinabrahamaa4@gmail.com
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
