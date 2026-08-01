import { ArrowUp } from "lucide-react";

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
   FOOTER
========================================================= */

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#050505] px-5 pb-8 pt-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="border-t border-white/[0.08] py-12 lg:py-14">
          <div
            className="
              grid
              gap-10
              md:grid-cols-2
              lg:grid-cols-[1.2fr_0.8fr_0.8fr]
            "
          >
            {/* =================================================
                BRAND
            ================================================= */}

            <div>
              <a
                href="#home"
                className="
                  inline-flex
                  items-center
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                ALBIN
                <span className="text-violet-400">.</span>
              </a>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                Software developer focused on building scalable, maintainable
                and thoughtful digital experiences.
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-zinc-600
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                  "
                />
                Kerala, India
              </div>
            </div>

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div>
              <p
                className="
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                Navigation
              </p>

              <div className="flex flex-col items-start gap-3">
                <a
                  href="#projects"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Work
                </a>

                <a
                  href="#skills"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Skills
                </a>

                <a
                  href="#experience"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Experience
                </a>

                <a
                  href="#about"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-white
                  "
                >
                  About
                </a>
              </div>
            </div>

            {/* =================================================
                SOCIAL
            ================================================= */}

            <div>
              <p
                className="
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                Connect
              </p>

              <div className="flex items-center gap-3">
                {/* GitHub */}

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    text-zinc-400
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-violet-400/30
                    hover:bg-violet-500/[0.08]
                    hover:text-violet-300
                  "
                >
                  <GitHubIcon />
                </a>

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/albin-abraham-7138a9205/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    text-zinc-400
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-violet-400/30
                    hover:bg-violet-500/[0.08]
                    hover:text-violet-300
                  "
                >
                  <LinkedInIcon />
                </a>

                {/* Email */}

                <a
                  href="mailto:albinabrahamaa4@gmail.com"
                  aria-label="Email"
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-4
                    text-sm
                    font-medium
                    text-zinc-400
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-violet-400/30
                    hover:bg-violet-500/[0.08]
                    hover:text-white
                  "
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM FOOTER
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.08]
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}

          <p className="text-sm text-zinc-600">
            © 2026 Albin Abraham. All rights reserved.
          </p>

          {/* Right */}

          <div className="flex items-center gap-5">
            <p className="hidden text-sm text-zinc-600 sm:block">
              Designed & developed with React.
            </p>

            {/* Scroll Top */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                text-zinc-400
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-violet-400/30
                hover:bg-violet-500/[0.08]
                hover:text-white
              "
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
