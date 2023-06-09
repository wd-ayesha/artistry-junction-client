import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay={true} stopOnHover={true} onChange={true} className="text-center">
        <div>
            <img src="https://i.ibb.co/Fb2rQbp/banner1.jpg" />
            <p className="legend"><span className=" text-3xl">Welcome to Artistry Junction!</span></p>
        </div>
        <div>
            <img src="https://i.ibb.co/xGggVkr/banner2.jpg" />
            <p className="legend"><span className=" text-3xl">
            This school conveys a sense of creativity, imagination, and a safe space for artistic exploration.</span></p>
        </div>
        <div>
            <img src="https://i.ibb.co/7zsq449/banner3.jpg" />
            <p className="legend"><span className=" text-3xl">It conveys a sense of collaboration, inspiration, and a place where different artistic paths intersect.</span></p>
        </div>
        <div>
            <img src="https://i.ibb.co/Swy9DZF/banner4.jpg" />
            <p className="legend"><span className=" text-3xl">It is a vibrant hub where artists of all levels come together to learn, share, and showcase their creative talents.</span></p>
        </div>
        <div>
            <img src="https://i.ibb.co/XzbyMBK/banner5.jpg" />
            <p className="legend"><span className=" text-3xl">Aspiring artists can find their haven to learn, create, and express themselves through various art forms and crafts.</span></p>
        </div>
    </Carousel>
    );
};

export default Banner;