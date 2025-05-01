export default function About() {
  return (
    <section id="about" className="py-24  text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#10b981]">About Me</h2>
        <div className="bg-[#1a1f1c] p-8 rounded-lg shadow-lg border border-[#10b981]/30">
          <h3 className="text-2xl font-semibold text-[#10b981] mb-6">My Journey</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a passionate frontend developer with a keen eye for design and a love for creating seamless user
            experiences. With expertise in React and Next.js, I build modern web applications that are not only
            visually appealing but also performant and accessible.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            My approach combines technical excellence with creative problem-solving. I believe that great frontend
            development is about finding the perfect balance between beautiful design, intuitive user interfaces, and
            clean, maintainable code.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through technical articles and community engagement.
          </p>
        </div>
      </div>
    </section>
  )
}
