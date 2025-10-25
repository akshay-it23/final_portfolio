import { RevealOnScroll } from "../RevealOnScroll";
import akshayphoto from "../../assets/akshayphoto.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
   <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
  Hi, I am <span className="cursive">Akshay</span>
</h1>


          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a <span className="font-handwritten text-2xl text-white">Full Stack Application</span> who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
<div className="flex justify-center space-x-6 my-6 text-2xl text-gray-400">
  <a href="https://github.com/akshay2326" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
    <FaGithub />
  </a>
  <a href="https://www.linkedin.com/in/akshay-saini-1a8979303/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
    <FaLinkedin />
  </a>
  <a href="https://x.com/Akshay232606" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
    <FaTwitter />
  </a>
  <a href="https://www.instagram.com/akshay_saini_23/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
    <FaInstagram />
  </a>
</div>

          <div className="flex justify-center space-x-4">
<a
  href={`${import.meta.env.BASE_URL}final_resume.pdf`}
  download
  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition"
>
  Download Resume
</a>



            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* 👇 Photo in the right-center */}
    {/* 👇 Photo in the right-center */}
<div className="absolute left-8 top-1/2 transform -translate-y-1/2">
  <img
    src={akshayphoto}
    alt="Akshay"
    className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-white float"
  />
</div>

    </section>
  );
};
