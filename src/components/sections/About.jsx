import { RevealOnScroll } from "../RevealOnScroll";
import { StonePaperScissors } from "../stone";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiSvelte,
  SiVuedotjs,
} from "react-icons/si";

const Highlight = ({ children, color = "bg-yellow-300/30 text-white" }) => (
  <span className={`px-1 rounded-md ${color}`}>{children}</span>
);

export const About = () => {
  const skillIcons = [
    { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React" },
    { icon: <SiVuedotjs className="text-green-400 text-5xl" />, name: "Vue" },
    { icon: <SiTypescript className="text-blue-500 text-5xl" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, name: "TailwindCSS" },
    { icon: <SiSvelte className="text-orange-400 text-5xl" />, name: "Svelte" },
    { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js" },
    { icon: <FaPython className="text-yellow-400 text-5xl" />, name: "Python" },
    { icon: <FaAws className="text-orange-500 text-5xl" />, name: "AWS" },
    { icon: <SiMongodb className="text-green-500 text-5xl" />, name: "MongoDB" },
    { icon: <SiGraphql className="text-pink-400 text-5xl" />, name: "GraphQL" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Top Section: About + Game */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left: About */}
        <RevealOnScroll>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-300">
              I am a passionate Full Stack Engineer with a strong focus on{" "}
              <Highlight color="bg-blue-500/30 text-blue-200">
                backend development
              </Highlight>
              , scalable systems, and real-time solutions. My journey began with
              competitive programming in my first year and I am an efficient{" "}
              <Highlight color="bg-green-500/30 text-green-200">
                problem solver
              </Highlight>{" "}
              and a full stack developer.
            </p>

            {/* Skills small list */}
            <div className="flex flex-wrap gap-4 mt-2">
              {skillIcons.map((skill, idx) => (
                <span key={idx} className="text-gray-300 text-sm bg-white/10 px-2 py-1 rounded">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Right: Stone Paper Scissors Game */}
        <div className="flex-1 flex justify-center items-center">
          <StonePaperScissors />
        </div>
      </div>
<br/>
<br/>
<br/>
<br/>
    
      {/* Scrolling Icons */}
      <div className="absolute bottom-40 w-full overflow-hidden">
        <div className="flex animate-scroll w-[200%]">
          {[...skillIcons, ...skillIcons].map((skill, idx) => (
            <div key={idx} className="flex items-center justify-center mx-8">
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
<br/>
<br/>
<br/>
    </section>



  );
};
