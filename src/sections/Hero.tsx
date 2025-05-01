import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12 md:gap-16 lg:gap-20">
          
          {/* Image Section */}
          <div className="order-1 md:order-2 md:justify-self-end flex justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-80 lg:w-[21rem] lg:h-96 md:mb-5 lg:mb-5">
              {/* Background pulse effect */}
              <div className="absolute inset-0 bg-[#10b981]/20 blur-xl animate-pulse rounded-full md:rounded-[8px]"></div>
              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden shadow-lg shadow-[#10b981]/10 rounded-full md:rounded-[12px] border-2 border-[#10b981]/30">
                <Image
                  src="/ali.jpg"
                  alt="Developer Profile"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              {/* Badge showing years of experience */}
              {/* <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#0a0f0d] rounded-full flex items-center justify-center border-2 border-[#10b981]/30">
                <span className="text-[#10b981] font-bold text-sm sm:text-base md:text-lg">5+ yrs</span>
              </div> */}
            </div>
          </div>

          {/* Text Content Section */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Badge for developer role */}
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-[#10b981]/10 text-[#10b981]">
              Frontend Developer
            </div>
            {/* Main Heading */}
            <h1 className="font-bold leading-tight tracking-tight mb-6 text-[clamp(2rem,5vw,3.75rem)]">
             <span className="text-[#10b981]">Sky </span> is the Limit
            </h1>
            {/* Paragraph for brief introduction */}
            <p className="text-gray-300 mb-8 text-[clamp(1rem,1.2vw,1.125rem)] max-w-md mx-auto md:mx-0 leading-relaxed">
              I craft responsive, user-friendly interfaces with modern technologies and clean code, focusing on
              performance and accessibility.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
  <button className="bg-[#10b981] hover:bg-[#10b981]/90 text-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ">
    Download CV
  </button>
  <button className="border-2 border-[#10b981] hover:bg-[#10b981]/10 text-[#10b981] px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ">
    View Projects
  </button>
</div>

          </div>

        </div>
      </div>
    </section>
  )
}
