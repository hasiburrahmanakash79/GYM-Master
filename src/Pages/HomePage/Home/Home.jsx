import Calculator from "../Calculator/Calculator";
import FeaturedClasses from "../FeaturedClasses/FeaturedClasses";
import FounderProfile from "../FounderProfile/FounderProfile";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Calculator/>
            <FounderProfile/>
            <FeaturedClasses/>
        </div>
    );
};

export default Home;