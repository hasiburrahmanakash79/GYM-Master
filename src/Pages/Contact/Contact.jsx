import SectionTitle from "../../Hooks/SectionTitle";

const Contact = () => {
  return (
    <div>
      <SectionTitle subTitle={"GYM Master"} title={"Contact"}></SectionTitle>
      <div className="container mx-auto">
        <div className="md:grid grid-cols-2">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">
              We are here for help you! To Shape Your Body.
            </h1>
          </div>
          <div className="md:w-1/2">
            <h1>form</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
