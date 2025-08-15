export default function About() {
    return (
      <section className="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-6 md:mb-8 relative">
            About us
            <span className="absolute left-0 top-full w-24 h-1 mt-2 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 rounded-full"></span>
          </h1>
  
          <div className="w-full p-4 sm:p-6 md:p-8 bg-[#242424] rounded-2xl shadow-2xl">
            <div className="about-para text-white sm:text-lg md:text-[20px] space-y-6">
              <p>
                Electrical Minds Forum (EMF) is the society of the students of the Department of Electrical and Electronics Engineering.
                EMF officially began its operation in 2011. Since then the Electrical Department Students raised the club to what it is now.
              </p>
              <p>
                EMF aims to act as a bridge between the students and the strides made in the industry. EMF, the Electrical Association of{" "}
                <a
                  className="border-b border-dotted border-b-2 border-[#FFBF00] hover:text-[#FFBF00] transition-colors"
                  href="https://www.mec.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Model Engineering College
                </a>{" "}
                is the joint venture of the staff and students of the Electrical and Electronics Department. Electrical Minds Forum (EMF) 
                of Govt. Model Engineering College is a noble attempt to create a platform on which one can discuss ideas, practice and 
                articulate a shared vision for progress in the areas of interest. EMF will aid thought-provoking interactions and motivate 
                the students to excel. EMF will help in achieving career goals, technological innovation, and continuous improvement.
              </p>
              <p>
                Our primary objective is to develop a passion in students for electrical and electronics engineering and help them achieve 
                their goals. As an organization at the campus level, we aspire to create a platform for students to showcase their ideas 
                and skills, assist them in their work, and keep them abreast of all the developments in the field. In addition to enhancing 
                the technical background of students, we also give due importance to developing their organizational and management skills. 
                Our goal is to mold a smarter generation of Electrical and Electronics Engineers.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  