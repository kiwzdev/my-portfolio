import {
  FaCopy,
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import FloatingLogoMarqueeSlow from "../components/FloatingLogo";
import { FaXTwitter } from "react-icons/fa6";
import { SiNestjs, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { copyEmail } from "../utils/common/copyEmail";
import ThemeChanger from "../components/common/ThemeChanger";
import Reveal from "../hooks/Reveal";

// assets
import profileImg from '/src/assets/university_photo1_square.png';

const Home = () => {
  const scrollToCenter = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        const elementHeight = el.offsetHeight;
        const screenHeight = window.innerHeight;

        const y = elementTop - screenHeight / 2 + elementHeight / 2;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      });
    });
  };

  return (
    <div
      className="
  min-h-screen 
  bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] 
  bg-[length:24px_24px]
  dark:bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)]
  dark:bg-[#0d0d0d]
"
    >
      <Navbar onNavigate={scrollToCenter} />
      <div className="px-4 sm:px-6 md:px-12 lg:px-32 pt-28 pb-20 space-y-16">
        <div
          className="
  fixed top-24 lg:top-6 right-6 z-50 hidden lg:flex xl:flex-row lg:flex-col gap-4
  bg-white/90 dark:bg-[#1a1a1a]/80
  backdrop-blur-xl 
  border border-white/20 dark:border-white/10
  shadow-xl rounded-2xl px-6 py-4
"
        >
          {/* Theme Changer */}
          <a
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ThemeChanger />
          </a>
          {/* GitHub */}
          <a
            href="https://x.com/kiwzdev"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={34} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/athit-thammawongphon/"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={34} />
          </a>

          {/* Email */}
          <a
            href="mailto:athit.thammawongphon@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-white transition-all duration-300 hover:scale-110"
            onClick={copyEmail}
          >
            <FaEnvelope size={34} />
          </a>
        </div>
        {/* Summary */}
        <Reveal transitionDelay={0.1}>
          <section id="summary" className="py-16 md:py-18">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Image Left */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl 
                   dark:shadow-gray-900 hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content Right */}
              <div className="w-full md:w-1/2">
                <p className="text-gray-600 dark:text-gray-100 leading-relaxed text-3xl md:text-4xl flex items-center gap-2">
                  Hi there!
                  <span className="inline-block animate-wave text-4xl">👋</span>
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900 dark:text-gray-100">
                  Athit Thammawongphon
                </h2>
                <div
                  className="
  inline-block 
  px-4 py-1.5 
  bg-amber-50 dark:bg-amber-900/40
  text-amber-700 dark:text-amber-300
  text-md md:text-lg font-semibold rounded-xl shadow-sm mb-6 
  hover:scale-[1.06] hover:shadow-md dark:hover:shadow-lg 
  transition-all duration-300
"
                >
                  3rd Year Student @ MC KMUTNB
                </div>

                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-md md:text-lg">
                  I have a strong interest in full-stack development.
                  Experienced in building web applications through internship
                  and personal projects. Highly motivated, and eager to learn
                  new technologies.
                </p>
                <button
                  onClick={() => scrollToCenter("contact")}
                  className="
    px-6 py-3 md:px-7 md:py-3 mt-4
    bg-black dark:bg-white 
    text-white dark:text-black
    rounded-xl text-lg md:text-xl font-medium
    hover:bg-gray-900 dark:hover:bg-gray-100
    hover:scale-105 transition-all duration-300 
    block mx-auto md:mx-0
"
                >
                  Get in touch
                </button>
                {/* Social Buttons */}
                <div className="mt-5 flex flex-wrap items-center gap-5 justify-center md:justify-start">
                  {/* GitHub */}
                  <a
                    href="https://github.com/kiwzdev"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub size={40} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/athit-thammawongphon/"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin size={40} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/kwz1x"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram size={40} />
                  </a>

                  {/* X */}
                  <a
                    href="https://x.com/kiwzdev"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FaXTwitter size={40} />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/kiwzdev"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebook size={40} />
                  </a>

                  {/* Discord */}
                  <a
                    href="https://discord.com/users/242609859806101505"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <FaDiscord size={40} />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:athit.thammawongphon@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-all duration-300 hover:scale-110"
                    onClick={copyEmail}
                  >
                    <FaEnvelope size={34} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* SKILLS */}
        <Reveal transitionDelay={0.1}>
          <div id="skills" className="text-center mb-15">
            <h2 className="text-5xl font-semibold tracking-tight relative inline-block px-4 text-gray-900 dark:text-gray-100">
              Skills
              <span
                className="absolute bottom-[-2px] left-0 right-0 
      h-1 bg-yellow-300/60 dark:bg-yellow-400/70 rounded-lg"
              ></span>
            </h2>
          </div>
        </Reveal>

        <Reveal transitionDelay={0.1}>
          <FloatingLogoMarqueeSlow />
        </Reveal>

        {/* Education */}
        <Reveal transitionDelay={0.1}>
          <section id="education" className="px-6 py-18">
            <div className="glass-inner mx-auto max-w-6xl space-y-16">
              <div className="mx-auto max-w-6xl space-y-16">
                <div className="text-center mb-15">
                  <h2 className="text-5xl font-semibold tracking-tight  relative inline-block px-4 text-gray-900 dark:text-gray-100">
                    Education
                    <span className="absolute bottom-[-2px] left-0 right-0 h-1 bg-yellow-300/60 rounded-lg"></span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                  {/* LEFT — TIME */}
                  <div className="text-black dark:text-gray-300 text-lg">
                    2023 – Present
                  </div>

                  {/* RIGHT — CONTENT */}
                  <div className="md:col-span-3 space-y-3">
                    <p className="font-semibold text-2xl text-gray-900 dark:text-gray-100">
                      King Mongkut's University of Technology North Bangkok
                    </p>

                    <p className="text-gray-500 dark:text-gray-300">
                      Bachelor of Science in Mathematics with Computer Science
                    </p>

                    <p className="text-gray-700 dark:text-gray-200 font-semibold text-xl">
                      GPAX:
                      <span className="bg-yellow-300/60 px-2 py-1 rounded-md ">
                        3.92
                      </span>
                    </p>

                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                      Wongsawang, Bangkok, Thailand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* WORK EXPERIENCE */}
        <Reveal transitionDelay={0.1}>
          <section id="experience" className="px-6 py-18">
            <div className="glass-inner mx-auto max-w-6xl space-y-16">
              <div className="mx-auto max-w-6xl space-y-16 ">
                <div className="text-center mb-15">
                  <div>
                    <h2 className="text-5xl font-semibold tracking-tight relative inline-block px-4 text-gray-900 dark:text-gray-100">
                      Experience{" "}
                      <span className="text-2xl text-gray-500 dark:text-gray-300 font-light">
                        (Internship)
                      </span>
                      <span className="absolute bottom-[-2px] left-0 right-0 h-1 bg-yellow-300/60 rounded-lg"></span>
                    </h2>
                  </div>
                </div>

                {/* Experience Item */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* LEFT — TIME */}
                  <div className="text-black dark:text-gray-300 text-lg">
                    Nov 2025 – Present
                  </div>

                  {/* RIGHT — CONTENT */}
                  <div className="md:col-span-3 space-y-4">
                    <p className="font-semibold text-2xl text-gray-900 dark:text-gray-100">
                      Full Stack Developer — Attra Inter Group (Thailand)
                    </p>

                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                      Contributed to the development of{" "}
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        Attra Card
                      </span>
                      , a digital membership and rewards platform.
                    </p>

                    {/* Tech Badges (Logo + Minimal Hover) */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-200 rounded-xl shadow-sm hover:scale-110 hover:shadow-md hover:cursor-pointer transition-all duration-300">
                        <FaReact className="text-blue-500" size={22} />{" "}
                        <span className="dark:text-gray-900">React</span>
                      </div>

                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-200 rounded-xl shadow-sm hover:scale-110 hover:shadow-md hover:cursor-pointer transition-all duration-300">
                        <SiNestjs className="text-red-600" size={22} />{" "}
                        <span className="dark:text-gray-900">NestJS</span>
                      </div>

                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-200 rounded-xl shadow-sm hover:scale-110 hover:shadow-md hover:cursor-pointer transition-all duration-300">
                        <SiNextdotjs
                          className="text-black-600 dark:text-gray-900"
                          size={22}
                        />{" "}
                        <span className="dark:text-gray-900">NextJS</span>
                      </div>

                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-200 rounded-xl shadow-sm hover:scale-110 hover:shadow-md hover:cursor-pointer transition-all duration-300">
                        <SiPostgresql className="text-blue-700" size={22} />
                        <span className="dark:text-gray-900">PostgreSQL</span>
                      </div>
                    </div>

                    <ul className="list-disc ml-6 space-y-2 text-gray-500 dark:text-gray-300">
                      <li>
                        Designed and developed full-stack web applications.
                      </li>
                      <li>
                        Created responsive, accessible UI components and
                        optimized frontend performance.
                      </li>
                      <li>Implemented and maintained core backend features.</li>
                      <li>
                        Diagnosed and resolved issues across client, server
                        layers.
                      </li>
                      <li>
                        Collaborated using Git/GitLab and Agile/Scrum
                        methodologies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal transitionDelay={0.1}>
          {/* CONTACT */}
          <section id="contact" className="px-6 py-18">
            <div className="glass-inner mx-auto max-w-6xl space-y-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-center mb-15">
                  <h2 className="text-5xl font-semibold tracking-tight relative inline-block px-4 text-gray-900 dark:text-gray-100">
                    Contact
                    <span className="absolute bottom-[-2px] left-0 right-0 h-1 bg-yellow-300/60 rounded-lg"></span>
                  </h2>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                  Let’s connect! You can find me on the platforms below or reach
                  me directly.
                </p>

                {/* CONTACT PANEL */}
                <div
                  className="
    mt-12 
    rounded-2xl 
    p-10 
    bg-gray-100 dark:bg-white/90
    backdrop-blur-sm
    border border-white/20 
    shadow-[0_4px_12px_rgba(0,0,0,0.15)]
  "
                >
                  <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20">
                    {/* COLUMN 1 — EMAIL */}
                    <div className="space-y-3 text-center">
                      <p className="text-gray-500 dark:text-gray-900 text-sm uppercase tracking-wide">
                        Email
                      </p>

                      <div className="flex justify-center items-center gap-3 relative break-all">
                        {/* Mailto link */}
                        <a
                          href="mailto:athit.thammawongphon@gmail.com"
                          className="text-md xl:text-xl font-medium text-blue-800 dark:text-blue-500 hover:text-black transition"
                          onClick={copyEmail}
                        >
                          athit.thammawongphon@gmail.com
                        </a>

                        {/* Copy button */}
                        <button
                          onClick={copyEmail}
                          className="text-gray-500 hover:text-black  transition"
                        >
                          <FaCopy size={18} />
                        </button>
                      </div>
                    </div>

                    {/* COLUMN 2 — IMPORTANT SOCIALS */}
                    <div className="space-y-3 text-center">
                      <p className="text-gray-500 dark:text-gray-900 text-sm uppercase tracking-wide">
                        Social
                      </p>

                      <div className="flex justify-center gap-3 lg:gap-6 mt-2">
                        <a
                          href="https://github.com/kiwzdev"
                          target="_blank"
                          className="text-gray-700 dark:text-gray-900 hover:text-black  transition hover:scale-110 wrap:break-words"
                        >
                          <FaGithub size={34} />
                        </a>

                        <a
                          href="https://x.com/kiwzdev"
                          target="_blank"
                          className="text-gray-700 dark:text-gray-900 hover:text-gray-900  transition hover:scale-110"
                        >
                          <FaXTwitter size={34} />
                        </a>
                        <a
                          href="https://instagram.com/kwz1x"
                          target="_blank"
                          className="text-gray-700 dark:text-gray-900 hover:text-pink-500  transition hover:scale-110"
                        >
                          <FaInstagram size={34} />
                        </a>

                        <a
                          href="https://facebook.com/kiwzdev"
                          target="_blank"
                          className="text-gray-700 dark:text-gray-900 hover:text-blue-600  transition hover:scale-110"
                        >
                          <FaFacebook size={34} />
                        </a>

                        <a
                          href="https://discord.com/users/242609859806101505"
                          target="_blank"
                          className="text-gray-700 dark:text-gray-900 hover:text-blue-400  transition hover:scale-110"
                        >
                          <FaDiscord size={34} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
