import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#15192b] via-[#1c2135] to-[#23273e] text-white font-sans overflow-x-hidden">
      {/* Animated background gradient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          className="absolute top-[-10%] left-1/2 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-cyan-700 via-blue-700 to-indigo-800 opacity-30 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        <motion.div
          className="absolute bottom-[-15%] left-1/4 w-[36vw] h-[36vw] rounded-full bg-gradient-to-tl from-fuchsia-700 via-purple-700 to-indigo-700 opacity-25 blur-2xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.42, 0, 0.58, 1],
          }}
        />
      </div>

      {/* Header/Navbar */}
      <header className="fixed top-0 w-full z-30 backdrop-blur bg-[#181c2c]/80 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="inline-block">
              {/* Simple Barber Scissors SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="8" cy="24" r="3" stroke="#47b5ff" strokeWidth="2"/>
                <circle cx="24" cy="24" r="3" stroke="#47b5ff" strokeWidth="2"/>
                <line x1="9" y1="22" x2="16" y2="4" stroke="#47b5ff" strokeWidth="2" strokeLinecap="round"/>
                <line x1="23" y1="22" x2="16" y2="4" stroke="#47b5ff" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16" y1="4" x2="16" y2="29" stroke="#47b5ff" strokeWidth="2" strokeDasharray="2 4"/>
              </svg>
            </span>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#47b5ff] transition-colors duration-200">QuickCuts</span>
          </a>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-[#47b5ff] focus:text-[#47b5ff] transition-colors duration-150 font-medium">Home</a>
            <a href="#features" className="hover:text-[#47b5ff] focus:text-[#47b5ff] transition-colors duration-150 font-medium">Features</a>
            <a href="#about" className="hover:text-[#47b5ff] focus:text-[#47b5ff] transition-colors duration-150 font-medium">About</a>
            <a href="#testimonials" className="hover:text-[#47b5ff] focus:text-[#47b5ff] transition-colors duration-150 font-medium">Testimonials</a>
            <a href="#contact" className="hover:text-[#47b5ff] focus:text-[#47b5ff] transition-colors duration-150 font-medium">Contact</a>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button className="w-10 h-10 flex flex-col justify-center items-center group focus:outline-none" aria-label="Open menu">
              <span className="h-0.5 w-6 bg-white rounded transition-all duration-300 group-hover:bg-[#47b5ff]" />
              <span className="h-0.5 w-6 bg-white rounded mt-1.5 transition-all duration-300 group-hover:bg-[#47b5ff]" />
              <span className="h-0.5 w-6 bg-white rounded mt-1.5 transition-all duration-300 group-hover:bg-[#47b5ff]" />
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 pb-24 md:py-32">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Your Style, <span className="text-[#47b5ff]">Sharper</span> Than Ever
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl mx-auto text-lg md:text-2xl text-white/80 font-medium"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            QuickCuts is the modern barbershop for the busy city. Fresh fades, classic cuts, and a welcoming vibe—crafted just for you, every time.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block mt-10 px-8 py-3 rounded-lg bg-[#47b5ff] text-[#181c2c] font-semibold text-lg shadow-lg hover:bg-[#3aa7e2] focus:bg-[#3aa7e2] transition-colors duration-200"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Book Your Cut
          </motion.a>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 py-20 px-4 md:px-0 bg-[#181c2c]/70 border-t border-white/5">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
              Why Choose <span className="text-[#47b5ff]">QuickCuts?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <motion.div
                className="bg-[#23273e]/90 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
              >
                <span className="mb-4">
                  <svg width="44" height="44" fill="none">
                    <rect x="9" y="9" width="26" height="26" rx="13" fill="#47b5ff" opacity="0.15"/>
                    <path d="M22 14v16m6-6H16" stroke="#47b5ff" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <h3 className="text-xl font-semibold mb-2">Walk-ins & Appointments</h3>
                <p className="text-white/80">Whether you&apos;re planning ahead or need a quick trim on the fly, we&apos;ve got you covered—no long waits.</p>
              </motion.div>
              {/* Feature 2 */}
              <motion.div
                className="bg-[#23273e]/90 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
              >
                <span className="mb-4">
                  <svg width="44" height="44" fill="none">
                    <rect x="9" y="9" width="26" height="26" rx="13" fill="#47b5ff" opacity="0.15"/>
                    <path d="M18 22l4 4 8-8" stroke="#47b5ff" strokeWidth="2.5" strokeLinecap="round" />
                    <rect x="11" y="11" width="22" height="22" rx="11" stroke="#47b5ff" strokeWidth="2"/>
                  </svg>
                </span>
                <h3 className="text-xl font-semibold mb-2">Expert Barbers</h3>
                <p className="text-white/80">Our talented barbers are passionate about their craft. Expect precision, attention to detail, and friendly service every visit.</p>
              </motion.div>
              {/* Feature 3 */}
              <motion.div
                className="bg-[#23273e]/90 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.42, 0, 0.58, 1] }}
              >
                <span className="mb-4">
                  <svg width="44" height="44" fill="none">
                    <rect x="9" y="9" width="26" height="26" rx="13" fill="#47b5ff" opacity="0.15"/>
                    <path d="M15 29h14m-7-7v7" stroke="#47b5ff" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="22" cy="17" r="5" stroke="#47b5ff" strokeWidth="2"/>
                  </svg>
                </span>
                <h3 className="text-xl font-semibold mb-2">Modern, Relaxing Space</h3>
                <p className="text-white/80">Enjoy fresh beats, premium products, and a comfortable atmosphere designed for you to unwind and recharge.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 py-20 px-4 md:px-0 border-t border-white/5 bg-[#1c2135]/90">
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex-1 mb-8 md:mb-0">
              <img
                src="/barber-chair-placeholder.png"
                alt="Barber chair"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg border-2 border-[#47b5ff]/20 object-cover aspect-square bg-[#23273e]"
                style={{ minHeight: 240 }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About <span className="text-[#47b5ff]">QuickCuts</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-4">
                QuickCuts was born from a passion for style and a commitment to community. We believe getting a great haircut should be simple, quick, and enjoyable—no matter your schedule.
              </p>
              <p className="text-white/70">
                Our mission is to elevate the classic barbershop experience with modern convenience and timeless skill. Whether you&apos;re after the latest trend or a tried-and-true look, you&apos;ll always leave looking sharp and feeling confident.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative z-10 py-20 px-4 md:px-0 bg-[#181c2c]/80 border-t border-white/5">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
              What Our <span className="text-[#47b5ff]">Clients Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div
                className="bg-[#23273e]/90 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
              >
                <img
                  src="/client1-placeholder.jpg"
                  alt="Client 1"
                  className="w-16 h-16 rounded-full border-2 border-[#47b5ff]/40 mb-3 object-cover bg-[#23273e]"
                />
                <p className="text-white/90 italic mb-2">&quot;I was in and out in 25 minutes with a killer fade. These guys are pros!&quot;</p>
                <span className="text-[#47b5ff] font-semibold">— Marcus T.</span>
              </motion.div>
              {/* Testimonial 2 */}
              <motion.div
                className="bg-[#23273e]/90 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
              >
                <img
                  src="/client2-placeholder.jpg"
                  alt="Client 2"
                  className="w-16 h-16 rounded-full border-2 border-[#47b5ff]/40 mb-3 object-cover bg-[#23273e]"
                />
                <p className="text-white/90 italic mb-2">&quot;Super clean shop, chill environment, and the best cut I&apos;ve had in ages.&quot;</p>
                <span className="text-[#47b5ff] font-semibold">— Jenna P.</span>
              </motion.div>
              {/* Testimonial 3 */}
              <motion.div
                className="bg-[#23273e]/90 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.42, 0, 0.58, 1] }}
              >
                <img
                  src="/client3-placeholder.jpg"
                  alt="Client 3"
                  className="w-16 h-16 rounded-full border-2 border-[#47b5ff]/40 mb-3 object-cover bg-[#23273e]"
                />
                <p className="text-white/90 italic mb-2">&quot;Easy to book, warm welcome, and they really listen to what you want!&quot;</p>
                <span className="text-[#47b5ff] font-semibold">— Alex R.</span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="relative z-10 py-20 px-4 md:px-0 bg-gradient-to-tr from-[#1c2135]/90 via-[#23273e]/80 to-[#23273e]/90 border-t border-white/5 flex items-center justify-center">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready for Your Next <span className="text-[#47b5ff]">Fresh Look?</span>
            </h2>
            <p className="text-white/80 text-lg mb-7">
              Book your appointment today or drop in for a quick cut. Experience the QuickCuts difference!
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg bg-[#47b5ff] text-[#181c2c] font-semibold text-lg shadow-lg hover:bg-[#3aa7e2] focus:bg-[#3aa7e2] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Book Now
            </motion.a>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10 py-20 px-4 md:px-0 bg-[#181c2c]/95 border-t border-white/5">
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact <span className="text-[#47b5ff]">Us</span>
              </h2>
              <p className="text-white/80 mb-6">
                Have a question or ready to book? Reach out below or visit us in person!
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <span>
                    {/* Phone SVG */}
                    <svg width="22" height="22" fill="none"><path d="M3.5 5.5A2 2 0 015.5 3.5h2A1 1 0 018.5 4.5v2a1 1 0 01-1 1H7.5a10 10 0 005 5v-0.5a1 1 0 011-1h2a1 1 0 011 1v2a2 2 0 01-2 2c-7.18 0-13-5.82-13-13z" stroke="#47b5ff" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    {/* Email SVG */}
                    <svg width="22" height="22" fill="none"><rect x="3" y="5" width="16" height="12" rx="3" stroke="#47b5ff" strokeWidth="2"/><path d="M5 7l7 6 7-6" stroke="#47b5ff" strokeWidth="2"/></svg>
                  </span>
                  <span>hello@quickcuts.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    {/* Location SVG */}
                    <svg width="22" height="22" fill="none"><path d="M11 19c5-5.5 7-8.5 7-11A7 7 0 0011 1a7 7 0 00-7 7c0 2.5 2 5.5 7 11z" stroke="#47b5ff" strokeWidth="2"/><circle cx="11" cy="8" r="2.5" stroke="#47b5ff" strokeWidth="2"/></svg>
                  </span>
                  <span>123 Main St, Metropolis</span>
                </li>
              </ul>
            </div>
            {/* Contact Form - placeholder, no submission logic */}
            <form className="bg-[#23273e]/90 rounded-xl shadow-lg p-8 flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block mb-1 text-white/80 font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full bg-[#181c2c] border border-[#47b5ff]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#47b5ff] transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-white/80 font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full bg-[#181c2c] border border-[#47b5ff]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#47b5ff] transition-all"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-white/80 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-[#181c2c] border border-[#47b5ff]/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#47b5ff] transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full py-3 rounded-lg bg-[#47b5ff] text-[#181c2c] font-semibold text-lg shadow-md hover:bg-[#3aa7e2] focus:bg-[#3aa7e2] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-20 bg-[#1c2135] border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {/* Simple SVG logo */}
            <span>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="8" cy="24" r="3" stroke="#47b5ff" strokeWidth="2"/>
                <circle cx="24" cy="24" r="3" stroke="#47b5ff" strokeWidth="2"/>
                <line x1="9" y1="22" x2="16" y2="4" stroke="#47b5ff" strokeWidth="2" strokeLinecap="round"/>
                <line x1="23" y1="22" x2="16" y2="4" stroke="#47b5ff" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16" y1="4" x2="16" y2="29" stroke="#47b5ff" strokeWidth="2" strokeDasharray="2 4"/>
              </svg>
            </span>
            <span className="text-lg font-bold text-white">QuickCuts</span>
          </div>
          <div className="flex gap-6 text-white/70 text-sm">
            <a href="#home" className="hover:text-[#47b5ff] transition-colors">Home</a>
            <a href="#features" className="hover:text-[#47b5ff] transition-colors">Features</a>
            <a href="#about" className="hover:text-[#47b5ff] transition-colors">About</a>
            <a href="#testimonials" className="hover:text-[#47b5ff] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#47b5ff] transition-colors">Contact</a>
          </div>
          <div className="flex gap-5">
            {/* Socials */}
            <a href="#" aria-label="Instagram" className="hover:text-[#47b5ff] transition-colors">
              {/* Instagram SVG */}
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <rect x="3" y="3" width="16" height="16" rx="5" stroke="#47b5ff" strokeWidth="2"/>
                <circle cx="11" cy="11" r="4" stroke="#47b5ff" strokeWidth="2"/>
                <circle cx="16" cy="6" r="1" fill="#47b5ff"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#47b5ff] transition-colors">
              {/* Facebook SVG */}
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <rect x="1" y="1" width="20" height="20" rx="5" stroke="#47b5ff" strokeWidth="2"/>
                <path d="M14 7h-2a2 2 0 00-2 2v2h-2v2h2v4h2v-4h2v-2h-2v-1a1 1 0 011-1h1V7z" stroke="#47b5ff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#47b5ff] transition-colors">
              {/* Twitter SVG */}
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <rect x="1" y="1" width="20" height="20" rx="5" stroke="#47b5ff" strokeWidth="2"/>
                <path d="M16.5 8.5c-.4.2-.8.3-1.2.4.5-.3.8-.7 1-1.2-.5.3-1 .6-1.4.7-.4-.4-1-.7-1.6-.7C11 7.7 10 8.7 10 10c0 .2 0 .4.1.6-1.6-.1-3-.9-3.9-2.1-.2.3-.3.7-.3 1.1 0 .7.4 1.3 1 1.7-.4 0-.7-.1-.9-.2v.1c0 1 .7 1.8 1.6 2-.2 0-.4.1-.6.1-.1 0-.2 0-.3-.1.2.7.9 1.3 1.7 1.3-0.6.5-1.3.8-2 .8-.1 0-.2 0-.3-.1.7.4 1.5.7 2.3.7 2.8 0 4.4-2.3 4.4-4.4v-0.2c.3-.2.6-.5.9-.8z" stroke="#47b5ff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} QuickCuts. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;