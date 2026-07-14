import React, { useState } from "react";
import Title from "../components/Title";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { icon: <FaFacebook />, label: "Facebook", href: "https://facebook.com/yourusername" },
  { icon: <FaXTwitter />, label: "Twitter/X", href: "https://x.com/yourusername" },
  { icon: <MdEmail />, label: "Email", href: "mailto:you@email.com" },
  { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/8801XXXXXXXXX" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // এখানে EmailJS বা অন্য service connect করতে পারবে
    console.log(form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="py-6 lg:py-12 bg-bg">
      <div className="max-w-7xl mx-auto lg:py-12 px-4 pb-12">
        <Title
          subtitle={"get in touch"}
          title1={"Contact"}
          title2={"Me"}
          para={"Have a project in mind or just want to say hi? I'm all ears."}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-12 border border-surface2">

        {/* Left — Form */}
        <div className="bg-surface border border-surface2 rounded-md p-8 flex flex-col gap-5">
          <h4 className="font-inter font-bold text-lg text-text">
            Send a Message
          </h4>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-inter text-text/60">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-surface2 border border-border rounded px-4 py-2 text-text font-inter text-sm outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-inter text-text/60">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="bg-surface2 border border-border rounded px-4 py-2 text-text font-inter text-sm outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-inter text-text/60">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              rows={5}
              className="bg-surface2 border border-border rounded px-4 py-2 text-text font-inter text-sm outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="self-end flex items-center gap-2 px-5 py-2 border border-accent text-accent text-sm font-inter rounded hover:bg-accent/10 transition-all duration-200"
          >
            <FiSend className="text-base" />
            {sent ? "Message Sent! ✅" : "Send Message"}
          </button>
        </div>

        {/* Right — Info + Socials */}
        <div className="flex flex-col gap-6">

          {/* Info */}
          <div className="bg-surface border border-surface2 rounded-md p-8">
            <h4 className="font-inter font-bold text-lg text-text mb-2">
              Let's Connect
            </h4>
            <p className="text-sm font-inter text-text/50 leading-relaxed">
              I'm currently open to freelance work and full-time opportunities.
              Whether you have a question or just want to say hello — my inbox
              is always open!
            </p>
            <p className="font-firaCode text-accent text-sm mt-4">
              // response within 24 hours
            </p>
          </div>

          {/* Socials */}
          <div className="bg-surface border border-surface2 rounded-md p-8">
            <h4 className="font-inter font-bold text-base text-text mb-5">
              Find Me On
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-surface2 border border-border rounded hover:border-accent hover:text-accent text-text/60 text-sm font-inter transition-all duration-200"
                >
                  <span className="text-lg">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;