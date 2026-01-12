import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Nayan</h3>
          <p className="text-sm leading-relaxed">
            Modern homes designed for comfort, lifestyle and privacy — built
            with quality and passion.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>info@nayan.com</li>
            <li>+966 123 456 789</li>
            <li>Jeddah, Saudi Arabia</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
          <p className="text-sm mb-3">Subscribe for latest updates</p>

          <form className="flex bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 text-gray-800 outline-none text-sm"
            />
            <button
              type="submit"
              className="px-4 bg-gray-900 hover:bg-gray-700 text-white text-sm"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Propper. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
