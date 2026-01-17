import React from 'react';
import { motion } from 'framer-motion'; 
import title5 from "../assets/title5.avif";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { Link } from "react-router-dom";


function Contact() {
  const faqs = [
    {
      question: "How to make a booking?",
      answer: "Please use our book links or relevant pages to get to the booking system or give us a call."
    },
    {
      question: "Do you offer gift certificates?",
      answer: "We are planning to launch VIP programs and memberships soon."
    },
    {
      question: "Is it allowed to bring children?",
      answer: "We have limited space but we welcome you coming with your children, so please give us a call beforehand so we can find a solution."
    },
    {
      question: "How early to come for an appointment?",
      answer: "We suggest to come 5-10 minutes before your appointment time."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <div className="relative h-100 md:h-150 w-full overflow-hidden bg-black text-white font-sans">
        <div className="absolute inset-0">
          <img
            src={title5}
            alt="Glamour Tools"
            className="h-full w-full object-cover object-center opacity-70"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center h-full pt-20">
          <motion.h1
            className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] mt-0 sm:mt-30 md:mt-60 font-bold tracking-tighter text-white leading-none opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            CONTACTS
          </motion.h1>
        </div>
      </div>

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="bg-white py-12 md:py-24 px-4 md:px-6 text-center flex flex-col items-center justify-center min-h-75 md:min-h-100 font-sans"
      >
        <div className="inline-block border-y border-black py-1 mb-6 md:mb-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] text-black font-medium px-2 md:px-4">
            LET'S MEET
          </p>
        </div>

        <div className="relative mb-6 md:mb-8">
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black">
            welcome to glamify
          </h2>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FF99E2] z-0 translate-y-1"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            Immerse yourself in a world of elegance with our stylish interior and sink into ultimate comfort in our plush chairs. Our expert staff is dedicated to providing unparalleled service, blending skill and attentiveness. Indulge, relax, and let your beauty journey begin!
          </p>
        </div>
      </motion.section>

      {/* Contact & Map Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-200 md:min-h-40 font-sans">
        <div className="bg-[#ebe2dc] flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-24 text-center">
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

        <div className="relative h-100 md:h-auto w-full bg-gray-200 overflow-hidden border-t md:border-l border-black">
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

      {/* FAQ Banner Top */}
      <div className="bg-black py-2 md:py-3 overflow-hidden">
        <Marquee speed={120} gradient={false}>
          <div className="flex items-center gap-1">
            {[...Array(18)].map((_, i) => (
              <span key={i} className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase">
                FAQ /
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* FAQ Section */}
      <section className="bg-[#FAF3EF] py-12 md:py-24 px-4 md:px-6">
        <div className="text-center relative mb-8 md:mb-16 inline-block w-full">
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-800 p-4 md:p-6 cursor-pointer group"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold uppercase text-xs md:text-sm tracking-wide">
                  {faq.question}
                </span>
                <span className="text-3xl md:text-4xl text-black transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="mt-4 text-black text-sm md:text-base">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Banner Bottom */}
      <div className="bg-black py-2 md:py-3 overflow-hidden">
        <Marquee speed={120} gradient={false}>
          <div className="flex items-center gap-1">
            {[...Array(18)].map((_, i) => (
              <span key={i} className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase">
                FAQ /
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Book Treatment Section */}
      <section className="relative min-h-40 flex items-center justify-center py-12 md:py-17 px-4 md:px-6 overflow-hidden font-sans bg-white">
        <section className="bg-[#FFF2EB] py-6 md:py-10 px-4 md:px-8 lg:px-20 flex flex-col items-center justify-center text-center font-sans border-2 md:border-3 border-black w-full max-w-6xl">
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
              className="border-2 sm:border-[3px] border-black bg-white px-4 sm:px-8 py-3 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
              Book an Appointment
            </button>
            <button
              
              className="border-2 sm:border-[3px] border-black bg-white px-4 sm:px-8 py-3 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
               <Link to="/Service">Browse Services</Link>
            </button>
          </motion.div>
        </section>
      </section>

      {/* Footer */}
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

export default Contact;