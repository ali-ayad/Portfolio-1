import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer } from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      name: 'React',
      icon: <FaReact className="h-8 w-8 text-[#61DAFB]" />,
      color: "bg-[#000000]/20",
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="h-8 w-8 text-white" />,
      color: "bg-[#000000]/20",
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare className="h-8 w-8 text-[#F7DF1E]" />,
      color: "bg-[#000000]/20",
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" />,
      color: "bg-[#000000]/20",
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss className="h-8 w-8 text-[#38B2AC]" />,
      color: "bg-[#000000]/20",
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="h-8 w-8 text-[#2965f1]" />,
      color: "bg-[#000000]/20",
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" />,
      color: "bg-[#000000]/20",
    },
    {
      name: 'Framer Motion',
      icon: <SiFramer className="h-8 w-8 text-[#FF4D8B]" />,
      color: "bg-[#000000]/20",
    },
  ];

  return (
    <section id="skills" className="py-24 text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-14">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#10b981]">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative overflow-hidden border border-[#10b981]/10 p-2 bg-[#0f1511] transition-all duration-300 rounded-[6px] 
              hover:scale-[1.05] hover:shadow-md hover:shadow-[#10b981]/10 hover:border-[#10b981]/30 group h-24 flex flex-col items-center justify-center"
            >
              {/* Space effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              
              {/* Icon */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                <div className="p-2 rounded-md bg-[#0a0f0d]/80">{skill.icon}</div>
                <h3 className="text-sm font-medium text-gray-200 group-hover:text-[#10b981] transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
