import bg from '../images/Santorini-Greece.jpg'

const Hero = ({ hero }: any) => {
  const { title, subtitle, text, btn1, btn2, img } = hero;

  return (
    <div id="home">
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}
        className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto min-h-screen">
        <div className="travigo-container grid items-start justify-items-center">
          <div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-white filter drop-shadow-lg">
              {title}
            </h1>
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-white filter drop-shadow-lg">
              {subtitle}
            </h1>
            <p className="text-white my-5 text-center sm:text-sm">{text}</p>
            <div className="flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full">
              
              <button type="button" className="button-emrald">
                <a href="#contact">{btn2}</a>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mb-11">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
