const Explore = ({ title, placesAPI }: any) => {
  return (
    <div id="explore">
      <div className="relative my-7 md:mt-3 " >
        <div className="travigo-container">
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
          </div>
          <div className="grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {placesAPI?.map((val: any, i: any) => (
    // the card
    <div
      key={i}
      className="relative flex items-center gap-5 sm:gap-3 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 group"
      style={{ height: "200px" }}
    >
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url(${val.placeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          borderRadius: "inherit",
        }}
      ></div>
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
          zIndex: 2,
          borderRadius: "inherit",
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10 flex items-start flex-col text-fourth p-3">
        <h1 className="text-xl sm:text-lg font-bold text-white">
          {val.location}
        </h1>
        <p className="font-normal text-sm lg:text-sm sm:text-xs text-white hidden group-hover:block transition-all duration-500 ease-in-out opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100">
        {val.description}
      </p>
      </div>
    </div>
  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
