const Hero = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/P9NCNmC/gym-workout-plan-for-gaining-muscle-header.jpg')] h-[75vh] bg-cover bg-fixed">
      <div className=" bg-black h-[75vh] flex items-center bg-opacity-70  px-10 md:px-40 text-white">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold my-3">Why Heavenly Feast?</h1>
          <p>
            Indulge in a culinary journey like no other at Heavenly Feast. Our
            restaurant is a haven for food lovers seeking a divine dining
            experience. With an eclectic menu that fuses global flavors with a
            touch of elegance, every dish is a masterpiece. From savory
            appetizers to delectable desserts, our chefs craft each plate with
            passion and precision. Join us and savor the taste of paradise on
            every plate.
          </p>
          <button className="btn btn-outline btn-warning border-0 border-b-4 mt-3 ">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
