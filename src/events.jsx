function Event() {
    return (
      <section className="event mt-10">
        <div id="event" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-6 md:mb-8 relative">
              Events
              <span className="absolute left-0 top-full w-24 h-1 mt-2 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 rounded-full"></span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl italic">Our recent events</p>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl italic">
              " Powering Ideas, Sparking Innovation! "
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Event Card 1 */}
            <div className="bg-[#262626] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-gray-700 relative">
                <img
                  src="/TECHFUSION4.4.png"
                  alt="Tech Fusion 2.0"
                  className="w-full object-contain min-h-48 sm:min-h-56 md:min-h-64"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-2">Tech Fusion 2.0</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Get ready to witness groundbreaking innovations, cutting-edge projects, and electrifying ideas at Tech Fusion 2.0!
                  Join us on March 7, 2025, at the External Auditorium from 10:30 AM – 3:00 PM and experience the future of technology.
                  Don't miss out on the biggest tech expo of the year!
                </p>
              </div>
            </div>
  
            {/* Event Card 2 */}
            <div className="bg-[#262626] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-gray-700 relative">
                <img
                  src="/lumiere.jpeg"
                  alt="Lumiere"
                  className="w-full object-contain min-h-48 sm:min-h-56 md:min-h-64"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">Lumiere</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  The technical competition Lumiere was conducted by EMF MEC in collaboration with Excel 2024 on 24 January 2025.
                  The event was coordinated by EMF, the club of electrical and electronics, in collaboration with Excel.
                </p>
              </div>
            </div>
  
            {/* Event Card 3 */}
            <div className="bg-[#262626] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-gray-700 relative">
                <img
                  src="/autocad_resized.jpg"
                  alt="AutoCAD Workshop"
                  className="w-full object-contain min-h-48 sm:min-h-56 md:min-h-64"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-300 mb-2">AutoCAD Workshop</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  The workshop covered topics such as basic design principles, 3D modeling, and practical applications in engineering.
                  Attendees engaged in hands-on sessions where they learned to use CAD software for creating and simulating designs,
                  which provided a real-world perspective on the power of digital design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Event;
  