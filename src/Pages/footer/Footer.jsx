import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand and About */}
          <div>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">Studyo</h2>
            <p className="text-sm">
              Join hands with your friends to excel academically. Create, share,
              and grade assignments together in a collaborative environment.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@groupstudyapp.com"
                  className="hover:text-orange-300 transition duration-300"
                >
                  support@groupstudyapp.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+123456789"
                  className="hover:text-orange-300 transition duration-300"
                >
                  +123 456 789
                </a>
              </li>
              <li>
                <strong>Address:</strong> 123 Study Lane, Learnville
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-400 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-400 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-400 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-400 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className=" text-center text-sm">
          <p>© {new Date().getFullYear()} Studyo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
