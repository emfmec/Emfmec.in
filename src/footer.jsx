function Footer() {
  return (
    <footer className="bg-transparent text-gray-300 mt-20 py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 mb-6">

          {/* Social Section */}
          <div className="text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fbf1c7] mb-2">Follow Us</h2>
            <p className="text-xs sm:text-sm md:text-base">Follow EMF on social media</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a
                href="https://www.facebook.com/electricalmindsforum/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fbf1c7] text-base sm:text-lg md:text-xl"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/emf_mec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fbf1c7] text-base sm:text-lg md:text-xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/emf-mec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fbf1c7] text-base sm:text-lg md:text-xl"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fbf1c7] mb-2">Location</h2>
            <p className="text-xs sm:text-sm md:text-base">Model Engineering College</p>
            <p className="text-xs sm:text-sm md:text-base">Thrikkakara, Kochi 682021</p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fbf1c7] mb-2">Contact</h2>
            <p className="text-xs sm:text-sm md:text-base">Sebin: +91 9895685103</p>
            <p className="text-xs sm:text-sm md:text-base">Contact us at: support@emfclub.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-[10px] sm:text-xs md:text-sm">
            &copy; 2024 Electrical Minds Forum. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm">
            Contact us at: support@emfclub.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
