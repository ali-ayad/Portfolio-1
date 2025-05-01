"use client"; // This makes the file a Client Component

import * as React from "react";
import { Button } from "@/components/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Framer Motion", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website for creative professionals with customizable themes and sections.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Chat Application",
    description:
      "A real-time messaging application with integrated notifications, direct messages, and group chat support.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    liveUrl: "#",
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
          <h2 className="text-3xl font-bold mb-4 text-center text-[#10b981]">Featured Projects</h2>
          <p className="text-gray-300 text-center max-w-2xl">
            A selection of my recent work, showcasing my skills in frontend development, UI/UX design, and
            problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f1511] p-6 rounded-lg border border-[#10b981]/10 shadow-md transition-all duration-300 hover:border-[#10b981]/30 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1511] to-transparent opacity-60"></div>
              </div>

              {/* Project Title and Description */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-white transition-colors hover:text-[#10b981]">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

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
                <div className="flex justify-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#10b981]/30 bg-[#0b0e0d] flex-1 w-full"
                  >
                    <Link href={project.liveUrl} target="_blank" className="flex justify-center" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
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
