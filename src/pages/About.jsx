import React from 'react';
import { motion } from 'framer-motion';
import title2 from "../assets/title2.avif";
import about1 from "../assets/about1.avif";
import background from "../assets/background.avif";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5.avif";
import img6 from "../assets/img6.avif";

function About() {
  const slideIn = {
    left: {
      hidden: { opacity: 0, x: -120 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 120 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <>
      <div className="relative h-[400px] md:h-150 w-full overflow-hidden bg-black text-white font-sans">
        <div className="absolute inset-0">
          <img
            src={title2}
            alt="Glamour Tools"
            className="h-full w-full object-cover object-center opacity-70"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center h-full pt-20">
          <motion.h1
            className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] mt-0 sm:mt-30 md:mt-60 font-bold tracking-tighter text-white leading-none opacity-90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            ABOUT
          </motion.h1>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="bg-[#FAF3EF] py-12 md:py-24 px-4 md:px-6 text-center flex flex-col items-center justify-center min-h-[300px] md:min-h-100 font-sans"
      >
        <div className="inline-block border-y border-black py-1 mb-6 md:mb-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] text-black font-medium px-4">
            Introducing Us
          </p>
        </div>

        <div className="relative mb-6 md:mb-8">
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black">
            Our Mission
          </h2>
          <motion.div
            variants={slideIn.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeout" }}
            className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FF99E2] z-0 translate-y-1"
          ></motion.div>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            At Glamify, our mission is to offer exceptional services at affordable prices.
            We are dedicated to helping individuals discover their perfect style,
            fostering confidence and self-expression through personalized beauty experiences.
          </p>
        </div>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-150 border-b border-black">
        <div className="bg-[#F5E1D3] p-6 md:p-10 lg:p-20 flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="inline-block border-y border-black py-1 mb-6 md:mb-8"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-black font-medium px-2">
              How It Started
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="relative mb-6 md:mb-8"
          >
            <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black">
              Our Story
            </h2>
            <motion.div
              variants={slideIn.left}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeout" }}
              className="absolute bottom-1 left-0 w-full h-4 md:h-5 bg-[#FF99E2] z-0"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="space-y-4 md:space-y-6 text-gray-900 font-medium leading-relaxed max-w-lg text-sm md:text-base"
          >
            <p>
              In the bustling city of New York, where aspirations spark like neon lights,
              two visionary sisters named Isabella and Amanda Sterling unveiled Glamify —
              an oasis of beauty born from their passion.
            </p>
            <p>
              With hearts set on making beauty care accessible, Isabella and Amanda, both
              former scientists, blended science and elegance. Inspired by the belief that
              every woman deserves affordable luxury, Glamify emerged.
            </p>
            <p>
              The salon became a sanctuary where beauty wasn't a privilege but a celebration.
              Isabella's and Amanda's journey, from the lab to the salon chair, echoed in
              each treatment. Glamify wasn't just a salon; it was a manifesto of
              empowerment, self-love, and the radiant glow of a dream realized.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[400px] md:h-full min-h-[400px] md:min-h-100">
          <img
            src={about1}
            alt="Glamify Founders Style"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-12 md:py-24 px-4 md:px-6 lg:px-20 border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FAF3EF] rounded-full flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl">
              🌐
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 md:mb-4 text-black italic">
              Sustainability
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
              Committed to a greener future, Glamify embraces sustainability. We strive to minimize waste by incorporating reusable products, sustainable materials, and eco-friendly practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FAF3EF] rounded-full flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl">
              ♻
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 md:mb-4 text-black italic">
              Ethical Sourcing
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
              Glamify promotes cruelty-free practices and ethical sourcing. We prioritize products with responsibly sourced ingredients, advocating clean beauty aligned with environmental and ethical values.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FAF3EF] rounded-full flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl">
              🚫
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 md:mb-4 text-black italic">
              Sans Allergens
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
              Committed to skin and hair health, our salon prioritizes alcohol-free products to prevent dryness. We avoid allergens, ensuring a safe and comfortable experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="h-auto md:h-290 px-4 md:px-20 py-12 md:py-22"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#F5E1D3] h-auto md:h-250 w-full p-6 md:p-0">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-center"
          >
            <div className="inline-block border-y border-black py-1 mb-5 mt-6 md:mt-10">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] text-black font-medium px-2 md:px-4">
                MEET THE STARS
              </p>
            </div>

            <div className="relative mb-6 md:mb-8">
              <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black">
                our experts
              </h2>
              <motion.div
                variants={slideIn.left}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeout" }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none md:ml-115 w-1/2 md:w-1/3 h-1/3 bg-[#FF99E2] z-0 translate-y-1"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 px-4 md:px-0"
          >
            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
              <div key={index} className="relative group aspect-square overflow-hidden">
                <img src={img} className="w-full h-full object-cover" alt="Expert" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-white/95 p-3 md:p-4 flex items-center gap-3">
                  <div>
                    <h4 className="font-bold text-sm text-black leading-none uppercase">
                      Inga Spencer
                    </h4>
                    <p className="text-[10px] text-black mt-1 uppercase tracking-widest font-semibold">
                      Hair Stylist
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-40 flex items-center justify-center py-12 md:py-20 px-4 md:px-6 overflow-hidden font-sans bg-white">
        <section className="bg-[#FFF2EB] py-6 md:py-10 px-4 md:px-8 lg:px-74 flex flex-col items-center justify-center text-center font-sans border-2 md:border-3 border-black w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="flex items-center gap-4 mb-4 md:mb-6"
          >
            <div className="inline-block border-y border-black py-1 mt-2 md:mt-5 mb-2 md:mb-5">
              <p className="text-xs md:text-xs uppercase tracking-[0.4em] text-black font-medium px-2">
                Get pampered
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="relative mb-6 md:mb-8"
          >
            <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              Book a Treatment
            </h2>
            <motion.div
              variants={slideIn.left}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeout" }}
              className="absolute bottom-0 left-0 w-full h-3 md:h-4 bg-[#FF99E2] z-0"
            ></motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="max-w-md text-gray-800 text-base md:text-lg leading-relaxed mb-6 md:mb-10"
          >
            Why wait? Start your beauty journey today. Reserve an appointment and get ready to shine!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center"
          >
            <button
              onClick={() => window.open("https://www.fresha.com/for-business", "_blank", "noopener,noreferrer")}
              className="border-[2px] sm:border-[3px] border-black bg-white px-4 sm:px-8 py-3 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => (window.location.href = "/Service")}
              className="border-[2px] sm:border-[3px] border-black bg-white px-4 sm:px-8 py-3 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
              Browse Services
            </button>
          </motion.div>
        </section>
      </section>

      <footer className="bg-black text-white py-6 md:py-3 px-4 md:px-6 lg:px-20 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeOut",
          }}
          className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-6 md:gap-8"
        >
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-4">
              Glamify
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              At our salon we prioritise your unique experience. We take the time to know you and your needs. Our goal is to create a sustainable, luxurious experience that makes you feel great.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="text-sm font-bold mb-3 md:mb-4">Subscribe to our newsletter</h3>
            <div className="flex bg-white p-1 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 md:px-4 py-2 text-black outline-none text-sm"
              />
              <button className="bg-black text-white px-4 md:px-6 py-2 text-sm font-bold uppercase transition-opacity hover:opacity-80">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        <hr className="border-white border-1 md:border-2 mb-8 md:mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeOut",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-16"
        >
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm uppercase tracking-wide">Pages</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-300">
              <li><a href="/Service" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/About" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/Contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/Blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-300">
              <li>123 Victoria Street</li>
              <li>NYC USA</li>
              <li>(111) 222-3345</li>
              <li>info@glamify.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm uppercase tracking-wide">Opening hours</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-300">
              <li>MON-FRI : 8am - 8pm</li>
              <li>SAT-SUN: 11am - 7pm</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeOut",
          }}
          className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12"
        >
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center text-base md:text-[20px]">
              f
            </div>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-md flex items-center justify-center text-base md:text-[20px]">
              in
            </div>
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center text-base md:text-[20px]">
              p
            </div>
          </a>
        </motion.div>
      </footer>
    </>
  );
}

export default About;