import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <Counter></Counter>
    </div>
  );
};

export default Home;
