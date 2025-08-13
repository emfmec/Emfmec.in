
function Hero() {
  

  return (
    <>
    <section className="flex flex-col lg:flex-row items-start justify-between min-h-screen w-full p-6 sm:p-10 lg:p-20 xl:p-32">
  {/* Left side - Text */}
  <div className="flex flex-col text-white text-left max-w-2xl gap-6">
    <h1 className="text-4xl sm:text-6xl lg:text-8xl leading-tight">
      Driven by <span className="block">current.</span>
    </h1>
    <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
      A hub for innovation and learning in Electrical & Electronics Engineering,
      connecting ideas, projects, and future engineers.
    </p>
    <button className="text-lg sm:text-xl lg:text-2xl font-semibold bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
    Join Now
    </button>

  </div>

 {/* Right side - Orbit animation */}
  {/* Right side - Bigger Orbit animation */}
  <div className="relative w-[600px] h-[600px] mr-15 mt-[-50px] lg:mt-[-80px] lg:ml-10 ">
    {/* Orbit paths */}
    <div className="absolute inset-0 border border-gray-500 rounded-full" />
    <div className="absolute inset-[70px] border border-gray-500 rounded-full" />
    <div className="absolute inset-[140px] border border-gray-500 rounded-full" />

    {/* Orbit 1 - slow spin with multiple icons */}
    <div className="absolute inset-0 spin-slow">
      {/* Top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 float">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <img src="" alt="icon" className="w-8 h-8" />
        </div>
      </div>
      {/* Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 float">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <img src="/icons/bolt.svg" alt="icon" className="w-8 h-8" />
        </div>
      </div>
    </div>

    {/* Orbit 2 - reverse spin with multiple icons */}
    <div className="absolute inset-[70px] spin-reverse">
      {/* Left */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 float">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <img src="/icons/wave.svg" alt="icon" className="w-8 h-8" />
        </div>
      </div>
      {/* Right */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 float">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <img src="/icons/settings.svg" alt="icon" className="w-8 h-8" />
        </div>
      </div>
    </div>

    {/* Orbit 3 - slow spin with one icon */}
    <div className="absolute inset-[140px] spin-slow">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 float">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <img src="/icons/circuit.svg" alt="icon" className="w-8 h-8" />
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
    
  );
}

export default Hero
