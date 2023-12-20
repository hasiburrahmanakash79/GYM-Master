const Intro = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[75vh] bg-cover bg-fixed">
      <div className=" bg-black h-[75vh] flex items-center bg-opacity-70 px-10 text-white">
        <div className="container mx-auto md:flex items-center justify-around gap-10">
          <div className="md:w-1/2  p-5">
            <p>FIND YOUR BODY</p>
            <div className="mt-5">
              <h1 className="text-5xl font-bold">Gyms Don’t Change <br /> Lives. People Do.</h1>
            </div>
            <p className="my-3">
              Gymhen an unknown printer took a galley of type and scrambled.It
              has survived unknown printer centuries.
            </p>
            <button className="bg-red-600 p-3">Read more</button>
          </div>
          <div
            className='flex items-center justify-center rounded-lg w-1/2'
          >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eAlNvWgTDZQ?si=1EmTv6ZCKwR19uwN" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {/* <video
              controls
              muted
              autoPlay
              className='w-full border border-red-500 rounded-lg h-3/4'
            >
              <source src='https://www.youtube.com/embed/eAlNvWgTDZQ?si=FIC8J5_DX7mZzyJb' type='video/mp4' />
            </video> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
