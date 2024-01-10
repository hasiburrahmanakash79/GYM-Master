import SectionTitle from "../../Hooks/SectionTitle";

const About = () => {
  return (
    <div>
      <SectionTitle subTitle={"GYM Master"} title={"About"}></SectionTitle>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-2">
            <img src="https://i.ibb.co/mHzkwPZ/about-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
