import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Counter from "../Counter/Counter";
import Instructors from "../Instructors/Instructors ";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
            <Counter></Counter>
        </div>
    );
};

export default Home;