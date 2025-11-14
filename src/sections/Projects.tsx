"use client"; // This makes the file a Client Component

import * as React from "react";
import { Button } from "@/components/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Lbitm-company",
    description:
      "A collaborative company application with real-time updates and with customizable themes businesses with analytics.",
    image: "/Screenshot 2025-05-01 221449.png",
    tags: ["React", "TypeScript", "Framer Motion"],
    liveUrl: "https://lbitmcompany.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Storia",
    description:
      "Storia is a modern platform where authors write, share, and explore stories .",
    image: "/Screenshot 2025-11-12 160230.png",
    tags: ["Nextjs", "TypeScript", "shadcn/UI", "supabase"],
    liveUrl: "https://storia-beta.vercel.app/",
    githubUrl: "https://github.com/ali-ayad/Storia",
  },
  {
    title: "HR Manager",
    description:
      "A React dashboard for managing employees, departments, and tasks..",
    image: "/dashbored.png",
    tags: ["React", "TypeScript", "Antdesign", "Express"],
    liveUrl: "#",
    githubUrl: "https://github.com/ali-ayad/HR-Manager-Front",
  },
  {
    title: "Quotey",
    description:
      "Quotey is a minimal app to collect and write popular quotes.",
    image: "/Screenshot 2025-11-14 073613.png",
    tags: ["React", "Tailwind CSS", "DndKit"],
    liveUrl: "https://quotey-fawn.vercel.app/",
    githubUrl: "https://github.com/ali-ayad/Quotey",
  },
  {
    title: "Machines-Site",
    description:
      "A responsive portfolio website for creative professionals with customizable themes and sections",
    image: "/Screenshot 2025-05-01 220856.png", // Image generated from the URL
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://machines-site.vercel.app/",
    githubUrl: "#",
  },

  
  {
    title: "Meet-LandingPage",
    description:
      "A modern, responsive portfolio website for creative professionals with customizable themes and sections.",
    image: "/Screenshot 2025-05-01 221807.png",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Vercel"],
    liveUrl: "https://exquisite-caramel-bb5bf6.netlify.app/",
    githubUrl: "#",
  },
  
];

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = React.useState(false);

  const handleViewAllProjects = () => {
    setShowAllProjects(true);
  };

  const projectsToShow = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#10b981]">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-center max-w-2xl">
            A selection of my recent work, showcasing my skills in frontend
            development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f1511]  rounded-lg border border-[#10b981]/10 shadow-md transition-all duration-300 hover:border-[#10b981]/30 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden mb-4 rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1511] to-transparent opacity-60"></div>
              </div>

              {/* Project Title and Description */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white transition-colors hover:text-[#10b981]">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-[#10b981]/10 text-[#10b981]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button with hover effect for green text */}
                <div className="flex gap-2 justify-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#10b981]/30 bg-[#0b0e0d] flex-1 w-full"
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex justify-center"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#10b981]/30 bg-[#0b0e0d] flex-1 w-full"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      On GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {!showAllProjects && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleViewAllProjects}
              className="border border-[#10b981] hover:bg-[#10b981]/10 hover:text-[#10b981] py-3 px-8 rounded-md text-sm transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
