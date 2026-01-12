// import Clients from "@/components/clientandPArtners";
import Chatbot from "@/components/chatbot/Chatbot";
import Footer from "@/components/footer";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Gallery from "@/components/slider";
// import OurValue from "@/components/values";
import Goals from "@/components/visoin";
import WhoWeAre from "@/components/whoweare";
// import Image from "next/image";

export const metadata = {
  title: "Nayan - Leading Real Estate Development in Saudi Arabia",
  description:
    "NAYAN Investment and Trade, a leading Saudi company in the field of real estate development and investment",
};

export default function Home() {
  return (
    <main className="relative h-screen text-white ">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* <Image
          src="/hero.png" // put your image in /public
          alt="Townhouse"
          fill
          priority
          className="object-cover"
        /> */}
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10 hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/du8hedlvt/video/upload/v1768229534/heroo_ehjav7.mov"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/du8hedlvt/video/upload/v1768229534/heroo_ehjav7.mov"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* Navbar */}
      <nav className="w-full absolute top-0 left-0 px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nayan</h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:opacity-80">Home</li>
          <li className="cursor-pointer hover:opacity-80">About</li>
          <li className="cursor-pointer hover:opacity-80">Gallery</li>
          <li className="cursor-pointer hover:opacity-80">Pricing</li>
          <li className="cursor-pointer hover:opacity-80">Contact</li>
        </ul>

        {/* LANG DROPDOWN */}
        <select className="ml-6 bg-transparent border border-white/60 rounded-md px-2 py-1 text-sm focus:outline-none cursor-pointer">
          <option value="en" className="text-black">
            EN
          </option>
          <option value="ar" className="text-black">
            AR
          </option>
        </select>
      </nav>
      {/* Hero Content */}
      <section className="h-full flex flex-col justify-center px-8 md:px-20 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Get Ready.
          <br />
          We’re finishing!
        </h1>

        <p className="mt-6 font-medium">Enter your email for the latest news</p>

        <form className="mt-3 flex bg-white rounded-md overflow-hidden max-w-md">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow px-4 py-3 text-gray-800 outline-none"
          />
          <button
            type="submit"
            className="px-6 bg-gray-900 hover:bg-gray-700 transition"
          >
            →
          </button>
        </form>
      </section>
      <Section2 />
      <Section3 /> <Gallery />
      <Section4 />
      <WhoWeAre />
      <Goals />
      {/* <OurValue /> */}
      {/* <Clients /> */}
      <Footer />
      <Chatbot />
    </main>
  );
}
