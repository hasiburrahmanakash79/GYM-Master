const Hero = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/P9NCNmC/gym-workout-plan-for-gaining-muscle-header.jpg')] h-[75vh] bg-cover bg-fixed">
      <div className=" bg-black h-[75vh] flex items-center bg-opacity-70 px-10 text-white">
        <div className="container mx-auto">
          <div className="md:w-1/2 ">
            <p>FIND YOUR BODY</p>
            <div className="mt-5">
              <h1 className="text-5xl font-bold">STRONGER WITH</h1>
              <h1 className="text-5xl">FIT & PERFECT</h1>
            </div>
            <p className="my-3">
              Gymhen an unknown printer took a galley of type and scrambled.It
              has survived unknown printer centuries.
            </p>
            <button className="bg-red-600 p-3">Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
