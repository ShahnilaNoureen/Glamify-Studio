import React from 'react';
import { motion } from 'framer-motion';
import blog1 from "../assets/blog1.avif";
import blog2 from "../assets/blog2.avif";
import blog3 from "../assets/blog3.avif";
import blog5 from "../assets/blog5.avif";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <div className="min-h-screen bg-[#F9F4F1] font-sans text-[#000000] selection:bg-gray-200">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 2,
            ease: "easeOut",
          }}
          className="flex flex-col items-center pt-12 md:pt-24 pb-8 md:pb-12 px-4"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter leading-none mb-6 md:mb-10 mt-6 md:mt-10">
            Blog
          </h1>
          
          {/* Category Filter Pills */}
          <div className="flex gap-1.5 flex-wrap justify-center">
            {['Hair', 'Makeup', 'Nails'].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 md:px-5 md:py-3 bg-[#C5C5C5] text-white text-xs sm:text-sm md:text-[15px] font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.header>

        {/* Main Content Area */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-4">
          {/* Post 1 */}
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 2,
              ease: "easeOut",
            }}
            className="bg-white p-6 md:p-10 lg:p-14 shadow-sm mb-6 md:mb-8"
          >
            {/* Post Meta */}
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <time className="text-[#A1A1A1] text-xs font-medium uppercase tracking-tight">
                Sep 25, 2023
              </time>
              <span className="px-2 py-0.5 bg-[#C5C5C5] text-white text-[9px] font-bold uppercase tracking-widest">
                Hair
              </span>
            </div>

            {/* Post Title */}
            <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold uppercase tracking-tighter mb-6 md:mb-8 leading-[1.1] hover:text-[#ef60c6]">
              Exploring Diverse Approaches to Haircuts
            </h2>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={blog1}
                alt="Model with bob haircut"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.article>

          {/* Post 2 */}
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 2,
              ease: "easeOut",
            }}
            className="bg-white p-6 md:p-10 lg:p-14 shadow-sm mb-6 md:mb-8"
          >
            {/* Post Meta */}
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <time className="text-[#A1A1A1] text-xs font-medium uppercase tracking-tight">
                Sep 25, 2023
              </time>
              <span className="px-2 py-0.5 bg-[#C5C5C5] text-white text-[9px] font-bold uppercase tracking-widest">
                Hair
              </span>
            </div>

            {/* Post Title */}
            <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold uppercase tracking-tighter mb-6 md:mb-8 leading-[1.1] hover:text-[#ef60c6]">
              Mastering the Art of Hair Transformation: Unveiling the Latest Coloring Techniques
            </h2>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={blog2}
                alt="Model with hair color transformation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.article>

          {/* Post 3 */}
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 2,
              ease: "easeOut",
            }}
            className="bg-white p-6 md:p-10 lg:p-14 shadow-sm mb-6 md:mb-8"
          >
            {/* Post Meta */}
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <time className="text-[#A1A1A1] text-xs font-medium uppercase tracking-tight">
                Sep 25, 2023
              </time>
              <span className="px-2 py-0.5 bg-[#C5C5C5] text-white text-[9px] font-bold uppercase tracking-widest">
                Hair
              </span>
            </div>

            {/* Post Title */}
            <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold uppercase tracking-tighter mb-6 md:mb-8 leading-[1.1] hover:text-[#ef60c6]">
              Embracing Beauty Sustainably: The Rise of Eco-Friendly and Healthy Makeup Products
            </h2>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={blog3}
                alt="Eco-friendly makeup products"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.article>

          {/* Post 4 */}
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 2,
              ease: "easeOut",
            }}
            className="bg-white p-6 md:p-10 lg:p-14 shadow-sm mb-6 md:mb-8"
          >
            {/* Post Meta */}
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <time className="text-[#A1A1A1] text-xs font-medium uppercase tracking-tight">
                Sep 25, 2023
              </time>
              <span className="px-2 py-0.5 bg-[#C5C5C5] text-white text-[9px] font-bold uppercase tracking-widest">
                Hair
              </span>
            </div>

            {/* Post Title */}
            <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold uppercase tracking-tighter mb-6 md:mb-8 leading-[1.1] hover:text-[#ef60c6]">
              Embrace Your Beauty: Unveiling the Latest Makeup Trends of 2023
            </h2>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={blog5}
                alt="Makeup trends 2023"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.article>
        </div>
      </div>

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
  <h4 className="font-bold mb-4 md:mb-6 text-sm uppercase tracking-wide">
    Pages
  </h4>

  <ul className="space-y-3 md:space-y-4 text-sm text-gray-300">
    <li>
      <Link to="/Service" className="hover:text-white transition-colors">
        Services
      </Link>
    </li>
    <li>
      <Link to="/About" className="hover:text-white transition-colors">
        About
      </Link>
    </li>
    <li>
      <Link to="/Contact" className="hover:text-white transition-colors">
        Contact
      </Link>
    </li>
    <li>
      <Link to="/Blog" className="hover:text-white transition-colors">
        Blog
      </Link>
    </li>
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

export default Blog;