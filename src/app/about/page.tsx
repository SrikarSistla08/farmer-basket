"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import TypingAnimation from "@/components/TypingAnimation";
import Footer from "@/components/Footer";

// Smooth scroll utility
const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Header currentPage="about" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center">
          {/* Pattern Background */}
          <div className="absolute inset-0 bg-[url('/patterns/farm-pattern.svg')] opacity-5" />
          {/* Video Background */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Vizag.mp4" type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <Image
                src="/pictures/valley.jpg"
                alt="TheValleyCo."
                fill
                className="object-cover"
                priority
              />
            </video>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              <TypingAnimation 
                texts={["Welcome to", "Discover"]}
                staticText="TheValleyCo."
                speed={100}
                className="text-white text-2xl sm:text-3xl md:text-4xl"
                staticTextClassName="text-5xl sm:text-6xl md:text-8xl font-extrabold"
                loop={true}
              />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">We're more than just a farm - we're a community dedicated to sustainable agriculture</p>
            <div className="mt-12 sm:mt-16">
              <Link
                href="#vision"
                onClick={(e) => smoothScroll(e, 'vision')}
                className="inline-block bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                Discover Our Vision
              </Link>
            </div>
          </div>
          {/* <div className="absolute bottom-4 right-4 text-sm text-gray-300">
            Proudly Presented by TheValleyCo.❤
          </div> */}
        </section>

        {/* Vision Section */}
        <section id="vision" className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
            <div className="md:w-1/2 w-full">
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/pictures/valley.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                At TheValleyCo, we envision a future where every community has access to fresh, locally-grown produce. We believe in creating a sustainable food system that benefits both farmers and consumers.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Our vision is to revolutionize the way people think about and access their food, making farm-fresh produce accessible to everyone while supporting local agriculture.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8 md:mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Sustainability",
                description: "We are committed to sustainable farming practices that protect our environment and ensure the longevity of our agricultural resources.",
                icon: "🌱"
              },
              {
                title: "Quality",
                description: "We maintain the highest standards of quality in our produce, ensuring that every item meets our rigorous quality checks.",
                icon: "✨"
              },
              {
                title: "Community",
                description: "We believe in building strong relationships with our local community, supporting other farmers, and creating a network of sustainable agriculture.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8 md:mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            {[
              {
                name: "Srikar Sistla",
                role: "Founder & CEO",
                bio: "The entrepreneur behind FarmerBasket, Srikar is a passionate Businessman for innovative technologies that involve AI and ML along with local agriculture and sustainable farming practices.",
                image: "/pictures/Profile.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center">
                  <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-60 md:w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain h-96 w-198 rounded-3xl border-2 border-green-600 shadow-lg"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-green-600">{member.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">{member.role}</p>
                    <p className="text-sm sm:text-base text-gray-700">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 