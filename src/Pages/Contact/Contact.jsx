import SectionTitle from "../../Hooks/SectionTitle";

const Contact = () => {
  return (
    <div>
      <SectionTitle subTitle={"GYM Master"} title={"Contact"}></SectionTitle>
      <div className="container mx-auto my-10">
        <div className="md:grid grid-cols-2 gap-10">
          <div className="">
            <h1 className="text-4xl font-bold">
              We are here for help you! To Shape Your Body.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
              perferendis? Qui, magni temporibus commodi vitae consectetur
              molestias? Dolore, exercitationem officia? Quidem tempore
              temporibus optio, inventore nostrum molestias voluptatum
              voluptates quae maxime repudiandae ipsum est quaerat, ullam
              recusandae.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h1 className="text-2xl font-bold pb-3">New York City, USA</h1>
                <p>85 Briston Mint Street,</p>
                <p>London, E1 8LG, USA</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold pb-3">Opening Hours</h1>
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold pb-3">Information</h1>
                <p>+800-123-4567</p>
                <p>gymaster@yourname.com</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold pb-3">Follow Us On</h1>
                <p> Facebook, instagram, X, linkedin</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 ">
            <div className="mx-auto p-10">
              <div>
                <label className="form-control w-full">
                  <span className="label-text">What is your name?</span>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text">What is your name?</span>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text">What is your name?</span>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Who shot first?
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                    <option>Greedo</option>
                    <option>Greedo</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text">What is your name?</span>
                  <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
