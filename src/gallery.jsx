function Gallery() {
    return (
      <section className="gallery">
        <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-6 md:mb-8 relative">
              Gallery
              <span className="absolute left-0 top-full w-24 h-1 mt-2 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 rounded-full"></span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl italic">
              "Illuminating Memories, One Snap at a Time!"
            </p>
          </div>
        </div>
  
        <div id="gallery" className="container mx-auto px-4 py--10 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4">
            {[
              { src: "/magazine.jpg", alt: "photo 1" },
              { src: "/gallery1.jpg", alt: "photo 2" },
              { src: "/gallery2.jpg", alt: "photo 3" },
              { src: "https://fossmec.netlify.app/images/gallery1.jpg", alt: "photo 4" }
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover grayscale hover:grayscale-0
                    transition-all duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
  
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/cial.jpg"
              alt="group photo"
              className="w-full h-64 sm:h-80 md:h-96 object-cover grayscale hover:grayscale-0
                transition-all duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Gallery;
  