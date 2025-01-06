const Home = () => {
  return (
    <div className="bg-[#FADADD] min-h-screen flex flex-col items-center text-[#333333]">
      {/* Wrapper to ensure spacing from Navbar */}
      <div className="pt-24 md:pt-32 w-full">
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-[#FF6F61]">PregnancyJourney</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Designed to help expectant mothers manage maternity appointments and
            track weekly baby development effortlessly.
          </p>
          <button className="bg-[#FF6F61] text-white px-6 py-2 rounded-md hover:bg-[#e65a4f] transition duration-300">
            Get Started
          </button>
        </section>

        {/* Key Features Section */}
        <section className="bg-white w-full py-12 px-4 rounded-lg mt-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="p-6 bg-[#FADADD] rounded-md text-center transition duration-300">
              <h3 className="text-xl font-bold mb-2">Appointment Management</h3>
              <p className="text-sm">
                Easily track and manage your maternity appointments with our
                calendar feature.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-[#FADADD] rounded-md text-center transition duration-300">
              <h3 className="text-xl font-bold mb-2">Weekly Updates</h3>
              <p className="text-sm">
                Get weekly updates on your baby&apos;s growth and development.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-[#FADADD] rounded-md text-center transition duration-300">
              <h3 className="text-xl font-bold mb-2">Stress-Free Planning</h3>
              <p className="text-sm">
                Reduce stress with an easy-to-use platform designed for moms.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center py-12 px-4 mt-8">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today!</h2>
          <p className="text-lg mb-6">
            Take control of your pregnancy journey with ease and confidence.
          </p>
          <button className="bg-[#FF6F61] text-white px-6 py-2 rounded-md hover:bg-[#e65a4f] transition duration-300">
            Sign Up Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
