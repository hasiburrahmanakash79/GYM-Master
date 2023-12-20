import Calculator from "../Calculator/Calculator";
import DailyRoutine from "../DailyRoutine/DailyRoutine";
import FeaturedClasses from "../FeaturedClasses/FeaturedClasses";
import FounderProfile from "../FounderProfile/FounderProfile";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Calculator/>
            <FounderProfile/>
            <FeaturedClasses/>
            <DailyRoutine/>
            <Intro/>
        </div>
    );
};

export default Home;