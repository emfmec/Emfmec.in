export default function Team() {
    const members = [
      {
        role: "Staff-in-charge",
        name: "Dr. Arun Prasad",
        img: "https://i.ibb.co/cvvYvSC/arunsir.png",
      },
      {
        role: "Chairman",
        name: "Sebin",
        img: "/sebin.jpeg",
      },
      {
        role: "Secretary",
        name: "Aaron",
        img: "/Aaron.jpeg",
      },
      {
        role: "Treasurer",
        name: "Aparna",
        img: "/Aparna.jpg",
      },
      
      {
        role: "Operations Head",
        name: "Geon",
        img: "https://i.ibb.co/4FGt1p6/IMG-4953.jpg",
      },
      {
        role: "Operations Head",
        name: "Anamika",
        img: "/anamika.jpg",
      },
      {
        role: "Tech Head",
        name: "Nevin",
        img: "/nevin.jpg",
      },
      {
        role: "Tech sub-head",
        name: "Azim",
        img: "/Azim.jpg",
      },
      {
        role: "Visit Head",
        name: "Georgy",
        img: "/Georgy.jpg",
      },
      {
        role: "Visit sub-Head",
        name: "Amal",
        img: "/Amal.jpg",
      },
      {
        role: "Magazine Head",
        name: "Adith",
        img: "https://i.ibb.co/jht0dQJ/IMG-2244.jpg",
      },
      {
        role: "Magazine Sub-Head",
        name: "Parvathy",
        img: "/Parvathy.jpg",
      },
      {
        role: "Publicity Head",
        name: "Shaun",
        img: "/shaun.jpg",
      },
      {
        role: "Publicity sub-Head",
        name: "Megha",
        img: "/Megha.jpg",
      },
      {
        role: "Initiative Head",
        name: "Athul",
        img: "/athul.jpg",
      },
      {
        role: "Initiative sub-Head",
        name: "Sreelakshmi",
        img: "/sreelakshmi.jpg",
      },
    
      {
        role: "Content Head",
        name: "Geethu",
        img: "https://i.ibb.co/Y2yhM2s/Whats-App-Image-2025-01-03-at-7-55-18-PM.jpg",
      },
      {
        role: "Content Sub-Head",
        name: "Gouri",
        img: "/gouri.png",
      },
      {
        role: "Genaral Coordinator",
        name: "Shilpa",
        img: "https://i.ibb.co/NVDdGVv/3Y6A6987.jpg",
      },
      {
        role: "Genaral Coordinator",
        name: "Abhiram",
        img: "/abhiram.jpg",
      },
      {
        role: "Event Head",
        name: "Sidharth",
        img: "/sidharth.jpg",
      },
      {
        role: "Event Manager",
        name: "Anantesh",
        img: "/Anantesh.png",
      },
      {
        role: "Media Team",
        name: "Nived",
        img: "https://i.ibb.co/fkGtVdJ/Web-Admin.jpg",
      },
      {
        role: "Web Head",
        name: "Jacob",
        img: "/jacob.jpg",
      },
      {
        role: "Design Head",
        name: "Abhinand",
        img: "https://i.ibb.co/Yk01PZt/MEEEEE.jpg",
      },
      {
        role: "Design sub-Head",
        name: "Sacheth",
        img: "/Sacheth.jpg",
      },
    ];
  
    return (
      <section className="team w-full h-auto px-4">
        <div className="max-w-6xl mx-auto mt-20">
          <h1 className="text-3xl sm:text-5xl text-white font-bold mb-8 flex justify-center items-center text-center">
            EMF Core Team
          </h1>
    
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 text-white">
            {members.map((member, index) => (
              <div
                key={index}
                className="text-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-5 shadow-2xl"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover"
                />
                <h3 className="mt-4 text-sm sm:text-lg font-semibold">{member.role}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
    
  }
  