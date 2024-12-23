const Footer = () => {
  return (
    <footer className="bg-[#333333] text-[#FADADD] py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="/logoo.ico" alt="Logo" className="w-10 h-10" />
          <h2 className="text-2xl font-semibold">PregnancyJourney</h2>
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-left">
          <p>© 2024 PregnancyJourney. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-[#FF6F61] transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-[#FF6F61] transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-[#FF6F61] transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
