import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


/* 🔹 ALL ASSETS – SAME */
import title from "../assets/title.avif";
import poster1 from "../assets/poster1.avif";
import poster2 from "../assets/poster2.avif";
import poster3 from "../assets/poster3.avif";
import card1 from "../assets/card1.avif";
import card2 from "../assets/card2.avif";
import card3 from "../assets/card3.avif";
import background from "../assets/background.avif";
import pic1 from "../assets/pic1.avif";
import pic2 from "../assets/pic2.avif";
import pic3 from "../assets/pic3.avif";
import pic5 from "../assets/pic5.avif";
import pic6 from "../assets/pic6.avif";
import pic7 from "../assets/pic7.avif";
import pic8 from "../assets/pic8.avif";
import pic9 from "../assets/pic9.avif";
import pic10 from "../assets/pic10.avif";
import pic11 from "../assets/pic11.avif";
import pic12 from "../assets/pic12.avif";

function Home() {
  const logos = [
    { name: "InStyle", className: "font-vogue lowercase font-black tracking-tighter" },
    { name: "COSMOPOLITAN", className: "font-sans uppercase font-black tracking-widest text-2xl md:text-4xl" },
    { name: "BAZAAR", className: "font-bazaar uppercase font-black tracking-tighter" },
    { name: "VOGUE", className: "font-vogue uppercase font-medium tracking-[0.2em]" },
    { name: "VANITY FAIR", className: "font-vogue uppercase font-bold tracking-tight" },
    { name: "ELLE", className: "font-didone uppercase tracking-[0.3em]" },
    { name: "allure", className: "font-serif italic lowercase font-black tracking-tighter" },
    { name: "marie claire", className: "font-marie lowercase font-black tracking-tighter" },
  ];

  const brands = [
    { name: "REVELON", className: "font-vogue uppercase font-black tracking-tighter" },
    { name: "WELLA", className: "font-sans uppercase font-black tracking-widest text-2xl md:text-4xl" },
    { name: "LOREAL", className: "font-bazaar uppercase font-black tracking-tighter" },
    { name: "O.P.I", className: "font-vogue uppercase font-medium tracking-[0.2em]" },
    { name: "BALMAIN", className: "font-vogue uppercase font-bold tracking-tight" },
    { name: "SHISEIDO", className: "font-didone uppercase tracking-[0.3em]" },
    { name: "REDKEN", className: "font-serif italic lowercase font-black tracking-tighter" },
    { name: "OLAPLEX", className: "font-marie lowercase font-black tracking-tighter" },
  ];

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
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
        <div className="absolute inset-0">
          <img
            src={title}
            alt="Glamour Model"
            className="h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60"></div>
        </div>
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <motion.h1
            className="hero-title font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white text-center lg:mt-100 md:mt-120  "
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 2,
              ease: "easeOut",
            }}
          >
            Glamify
          </motion.h1>
          
          <motion.h6
            className="hero-title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-8 text-white text-center px-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 2,
              ease: "easeOut",
            }}
          >
            BEAUTY THAT IS TAILORED TO YOU
          </motion.h6>
        </div>
      </div>

      {/* Introducing Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="relative py-12 md:py-24 px-4 sm:px-6 text-center flex flex-col items-center justify-center min-h-[50vh] md:min-h-37.5"
      >
        <div className="inline-block border-y border-black py-1 mb-6 md:mb-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-black font-medium px-2">
            Introducing Us
          </p>
        </div>

        <div className="relative mb-6 md:mb-8">
          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black">
            Welcome to Glamify
          </h2>

          <motion.div
            variants={slideIn.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeout" }}
            className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FF99E2] z-0 translate-y-1"
          ></motion.div>
        </div>

        <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-semibold">
            At our salon we prioritise your unique experience. We take the time to know you and your needs. We're not satisfied with a quick fix, but rather strive for a lasting transformation. Our goal is to create a sustainable, luxurious experience that makes you feel great.
          </p>
        </div>

        <a
       
          className="inline-block border-2 md:border-4 border-black px-4 sm:px-6 md:px-7 py-2 md:py-4 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight hover:bg-black hover:text-white transition-colors duration-300"
        >
         <Link to="/About">About</Link>
        </a>
      </motion.section>

      {/* Hair Banner */}
      <div className="bg-black py-2 md:py-3 overflow-hidden">
        <Marquee speed={120} gradient={false}>
          <div className="flex items-center gap-1">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase">
                Hair /
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Hair Services Section */}
      <motion.div
        variants={slideIn.right}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full min-h-[50vh] md:min-h-37.5"
      >
        <div className="w-full md:w-1/2 bg-[#FF99E2] p-6 md:p-10 lg:p-20 flex flex-col justify-center">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-4 md:mb-8 leading-none">
              Nurture your looks
            </h1>

            <p className="text-black text-base sm:text-lg md:text-lg font-semibold leading-snug mb-6 md:mb-10">
              Experience the ultimate in hair care with our beauty salon's wide range of hair services, including cuts, color, styling, and extensions. Our experienced stylists use only the highest quality products to ensure your hair looks and feels its best. Visit us today and discover the perfect style for you.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h3 className="font-bold uppercase text-sm md:text-base">
                Check the treatments
              </h3>

              <button
                onClick={() => window.open("https://www.fresha.com/for-business", "_blank", "noopener,noreferrer")}
                className="bg-white border-2 md:border-4 border-black px-4 py-2 md:px-4 md:py-3 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all w-full md:w-auto"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-75 md:min-h-full">
          <img
            src={poster1}
            alt="Hair Model"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Nails Banner */}
      <div className="bg-black py-2 md:py-3 overflow-hidden">
        <Marquee speed={120} gradient={false}>
          <div className="flex items-center gap-1">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase">
                Nails /
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Nails Services Section */}
      <motion.div
        variants={slideIn.left}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full min-h-[50vh] md:min-h-37.5"
      >
        <div className="w-full md:w-1/2 relative min-h-75 md:min-h-full order-2 md:order-1">
          <img
            src={poster2}
            alt="Nails"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 bg-[#FF99E2] p-6 md:p-10 lg:p-20 flex flex-col justify-center order-1 md:order-2">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-4 md:mb-8 leading-none">
              GLOSSIFY YOUR NAILS
            </h1>

            <p className="text-black text-base sm:text-lg md:text-lg font-semibold leading-snug mb-6 md:mb-10">
              Indulge in the ultimate nail care at our beauty salon with our variety of nail services, including manicures, pedicures, gel nails, and nail art. Our skilled nail technicians use only the highest quality products to ensure your nails look and feel their best. Visit us today and pamper yourself with our nail services.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h3 className="font-bold uppercase text-sm md:text-base">
                Check the treatments
              </h3>

              <button
                onClick={() => window.open("https://www.fresha.com/for-business", "_blank", "noopener,noreferrer")}
                className="bg-white border-2 md:border-4 border-black px-4 py-2 md:px-4 md:py-3 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all w-full md:w-auto"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Makeup Banner */}
      <div className="bg-black py-2 md:py-3 overflow-hidden">
        <Marquee speed={120} gradient={false}>
          <div className="flex items-center gap-1">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase">
                MAKEUP /
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Makeup Services Section */}
      <motion.div
        variants={slideIn.right}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full min-h-[50vh] md:min-h-37.5"
      >
        <div className="w-full md:w-1/2 bg-[#FF99E2] p-6 md:p-10 lg:p-20 flex flex-col justify-center">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-4 md:mb-8 leading-none">
              boost your colors
            </h1>

            <p className="text-black text-base sm:text-lg md:text-lg font-semibold leading-snug mb-6 md:mb-10">
              Feel confident and beautiful with our beauty salon's wide range of makeup services. Our skilled makeup artists use only the highest quality products to create stunning makeup looks. Whether you're looking for a classic, timeless look or a trendy, edgy style, we have something for everyone.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h3 className="font-bold uppercase text-sm md:text-base">
                Check the treatments
              </h3>

              <button
                onClick={() => window.open("https://www.fresha.com/for-business", "_blank", "noopener,noreferrer")}
                className="bg-white border-2 md:border-4 border-black px-4 py-2 md:px-4 md:py-3 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all w-full md:w-auto"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-75 md:min-h-full">
          <img
            src={poster3}
            alt="Makeup"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* As Featured In Section */}
      <section className="relative bg-white px-4 sm:px-6 text-center flex flex-col items-center justify-center py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeOut",
          }}
          className="relative mb-12 md:mb-28"
        >
          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black">
            As featured in
          </h2>
          <motion.div
            variants={slideIn.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeout" }}
            className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FF99E2] z-0 translate-y-1"
          ></motion.div>
        </motion.div>

        <div className="w-full">
          <Marquee speed={80} gradient={true} gradientColor="white" gradientWidth={50} pauseOnHover>
            {logos.map((logo, index) => (
              <span
                key={index}
                className={`mx-4 sm:mx-6 md:mx-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#afadae] font-serif whitespace-nowrap select-none ${logo.className}`}
              >
                {logo.name}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="relative bg-black py-12 md:py-24 px-4 sm:px-6 text-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-7xl h-auto px-4 sm:px-6 md:px-20 py-12 md:py-20 bg-[#f6ebe3]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="inline-block border-y border-black py-1 mt-0 mb-6 md:mb-10"
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-black font-medium px-2">
              TESTIMONIALS
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
            className="relative mb-8"
          >
            <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black">
              what people say about us
            </h2>
            <motion.div
              variants={slideIn.left}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeout" }}
              className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-1/3 bg-[#FF99E2] z-0 translate-y-1 ml-0 md:ml-47"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-25"
          >
            <div className="bg-white border-2 md:border-3 border-black p-6 md:p-18 flex flex-col items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <img src={card1} alt="Maria" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-base md:text-lg leading-tight">Maria Johnson</h4>
                  <p className="text-gray-500 text-sm text-left">@mjohnson</p>
                </div>
              </div>
              <div className="flex text-[#ff80db] mb-4 text-xl md:text-2xl border-b border-black">
                ★★★★★
              </div>
              <p className="text-black leading-relaxed text-left text-sm md:text-base">
                I recently had a makeover service at a beauty salon, and I must say, I couldn't be happier with the results. So amazing to transform my appearance and feel like a million bucks.
              </p>
            </div>

            <div className="bg-white border-2 md:border-3 border-black p-6 md:p-18 flex flex-col items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <img src={card2} alt="Kayla" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-base md:text-lg leading-tight">Kayla Ray</h4>
                  <p className="text-gray-500 text-sm text-left">@kayray</p>
                </div>
              </div>
              <div className="flex text-[#ff80db] mb-4 text-xl md:text-2xl border-b border-black">
                ★★★★★
              </div>
              <p className="text-black leading-relaxed text-left text-sm md:text-base">
                I am thrilled with the gel nails results! The technician was skilled and attentive, ensuring that my nails looked and felt great. I would definitely recommend this salon for my friends!
              </p>
            </div>

            <div className="bg-white border-2 md:border-3 border-black p-6 md:p-18 flex flex-col items-start shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4 mb-4">
                <img src={card3} alt="Eva" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-base md:text-lg leading-tight">Eva Elle</h4>
                  <p className="text-gray-500 text-sm text-left">@evaelle</p>
                </div>
              </div>
              <div className="flex text-[#ff80db] mb-4 text-xl md:text-2xl border-b border-black">
                ★★★★★
              </div>
              <p className="text-black leading-relaxed text-left text-sm md:text-base">
                I recently had a makeup service at a beauty salon, and I must say, it was an experience to remember. The makeup artist was incredibly talented, and she created a stunning look for me.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book a Treatment Section */}
      <section className="relative min-h-40 flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 overflow-hidden font-sans bg-white">
        <section className="bg-[#FFF2EB] py-6 md:py-10 px-4 sm:px-6 md:px-10 lg:px-74 flex flex-col items-center justify-center text-center font-sans border-2 md:border-3 border-black w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="inline-block border-y border-black py-1 mt-0 md:mt-5 mb-4 md:mb-5">
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
              className="absolute bottom-0 left-0 w-full h-2 md:h-4 bg-[#FF99E2] z-0"
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
            className="max-w-md text-gray-800 text-base sm:text-lg leading-relaxed mb-6 md:mb-10"
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
              className="border-2 md:border-[3px] border-black bg-white px-4 sm:px-6 md:px-8 py-3 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
              Book an Appointment
            </button>
            <button
         
              className="border-2 md:border-[3px] border-black bg-white px-4 sm:px-6 md:px-8 py-3 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
              <Link to="/Service">Browse Services</Link>
            </button>
          </motion.div>
        </section>
      </section>

      {/* Brands We Use Section */}
      <section className="relative bg-white px-4 sm:px-6 text-center flex flex-col items-center justify-center py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeOut",
          }}
          className="relative mb-12 md:mb-28"
        >
          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black">
            Brands we use
          </h2>
          <motion.div
            variants={slideIn.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeout" }}
            className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FF99E2] z-0 translate-y-1"
          ></motion.div>
        </motion.div>

        <div className="w-full mb-6 md:mb-10">
          <Marquee speed={80} gradient={true} gradientColor="white" gradientWidth={50} pauseOnHover>
            {brands.map((brand, index) => (
              <span
                key={index}
                className={`mx-4 sm:mx-6 md:mx-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#afadae] font-serif whitespace-nowrap select-none ${brand.className}`}
              >
                {brand.name}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] font-sans border-t border-black">
        <div className="bg-[#f5e1d3] flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-black uppercase italic mb-8 md:mb-16 tracking-tight"
          >
            <span className="relative z-10">Contact</span>
            <motion.span
              variants={slideIn.left}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeout" }}
              className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-[#ff80db] z-0"
            ></motion.span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="space-y-8 md:space-y-16 w-full max-w-sm"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 border-2 border-black rounded-full flex items-center justify-center mb-4 md:mb-6 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-2 md:mb-3">Address</h4>
              <p className="text-gray-800 text-base md:text-lg leading-snug">123 Victoria Street, <br /> NYC USA</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 border-2 border-black rounded-full flex items-center justify-center mb-4 md:mb-6 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-2 md:mb-3">Contact</h4>
              <p className="text-gray-800 text-base md:text-lg">(111) 222-3345</p>
              <p className="text-gray-800 text-base md:text-lg">info@glamify.com</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 border-2 border-black rounded-full flex items-center justify-center mb-4 md:mb-6 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-2 md:mb-3">Hours</h4>
              <p className="text-gray-800 text-base md:text-lg font-bold">MON-FRI : 8am - 8pm</p>
              <p className="text-gray-800 text-base md:text-lg font-bold">SAT-SUN : 11am - 7pm</p>
            </div>
          </motion.div>
        </div>

        <div className="relative h-100 md:h-auto w-full bg-gray-200 overflow-hidden border-l border-black">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0454069207485!2d-73.99040588954136!3d40.73902637127019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a171f28d43%3A0x3cdaa25ac68bc20a!2s260%20E%2021st%20St%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2s!4v1768459918938!5m2!1sen!2s"
            className="w-full h-full sepia-30 saturate-60 brightness-95 contrast-90"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center border-2 border-white shadow-xl animate-bounce">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-[#ff80db] rounded-full"></div>
            </div>
            <div className="w-1 h-2 bg-black mx-auto -mt-1"></div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="relative min-h-40 flex flex-col items-center justify-center text-center py-12 md:py-20 px-4 sm:px-6 overflow-hidden font-sans bg-white"
      >
        <div className="flex items-center gap-4">
          <div className="inline-block border-y border-black py-1 mt-0 md:mt-5 mb-4 md:mb-5">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-black font-medium px-2">
              Recent posts
            </p>
          </div>
        </div>

        <div className="relative mb-6 md:mb-8">
          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
            our instagram
          </h2>
          <motion.div
            variants={slideIn.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeout" }}
            className="absolute bottom-0 left-0 w-full h-2 md:h-4 bg-[#FF99E2] z-0"
          ></motion.div>
        </div>

        <div className="w-full mt-6 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-white">
            {[pic1, pic2, pic3, title, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12].map((pic, index) => (
              <div key={index} className="aspect-square overflow-hidden group border border-white">
                <img
                  src={pic}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-center mt-8 md:mt-15">
          <button
            onClick={() => window.open("https://www.instagram.com/glamify_salon/", "_blank", "noopener,noreferrer")}
            className="border-3 md:border-5 border-black bg-white px-4 py-2 text-lg sm:text-xl font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
          >
            Follow us
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-12 px-4 sm:px-6 md:px-20 font-sans">
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
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-4">Glamify</h2>
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

        <hr className="border-white border md:border-2 mb-8 md:mb-12" />

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
          {["https://www.facebook.com/", "https://www.instagram.com/", "https://www.pinterest.com/"].map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center text-base md:text-[20px]">
                {["f", "in", "p"][index]}
              </div>
            </a>
          ))}
        </motion.div>
      </footer>
    </>
  );
}

export default Home;