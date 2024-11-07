import React, { useState } from 'react';
import { Github, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form submitted:', {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });
    
    setFormStatus("Message Sent!");
    e.target.reset();
    
    setTimeout(() => {
      setFormStatus("");
    }, 3000);
  };

  const socialLinks = [
    { Icon: Github, href: "https://github.com/" },
    { Icon: Instagram, href: "https://www.instagram.com/" },
    { Icon: Youtube, href: "https://www.youtube.com/" },
    { Icon: Twitter, href: "https://twitter.com/" }
  ];

  return (
    <footer id="footer" className="bg-[#2c3e50] text-[#ecf0f1] pt-16">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Arshita Library Management</h3>
          <p className="mb-4">Efficiently manage your library with our cutting-edge system.</p>
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <a 
                key={index}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ecf0f1] hover:text-primary transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-[#ecf0f1] hover:text-primary transition-colors">Home</a></li>
            <li><a href="#profile" className="text-[#ecf0f1] hover:text-primary transition-colors">Profile</a></li>
            <li><a href="#books" className="text-[#ecf0f1] hover:text-primary transition-colors">Books</a></li>
            <li><a href="#footer" className="text-[#ecf0f1] hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-[#34495e] text-[#ecf0f1] border-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-[#34495e] text-[#ecf0f1] border-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-[#34495e] text-[#ecf0f1] border-none h-24 resize-y"
            ></textarea>
            <button
              type="submit"
              className={`w-full p-3 rounded ${
                formStatus ? 'bg-green-600' : 'bg-primary'
              } text-white hover:opacity-90 transition-opacity`}
            >
              {formStatus || "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 py-4 bg-[#34495e] text-center">
        <div className="w-[90%] max-w-7xl mx-auto">
          <p>&copy; 2024 Arshita Library Management - All rights reserved | Designed By: Arshita</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;