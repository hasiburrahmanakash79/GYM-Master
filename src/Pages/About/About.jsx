import SectionTitle from "../../Hooks/SectionTitle";

const About = () => {
  return (
    <div>
      <SectionTitle subTitle={"GYM Master"} title={"About"}></SectionTitle>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-2 items-center gap-20">
          <div className="p-5 border-2 border-red-500">
            <img src="https://i.ibb.co/mHzkwPZ/about-1.jpg" alt="" />
          </div>
          <div className="space-y-7">
            <p>Lorem, ipsum.</p>
            <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nihil qui sequi laboriosam cumque! Porro cupiditate esse quo ratione asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, harum voluptate expedita aliquam animi dicta ducimus? Adipisci, quaerat accusantium. Maxime?</p>
            <div className="text-lg font-bold">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </div>
            <button className="btn btn-primary">contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
