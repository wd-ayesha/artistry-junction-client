import './Banner.css'
const Banner = () => {
  return (
     <>
     <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Fb2rQbp/banner1.jpg"
            className="w-full h-[490px]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/xGggVkr/banner2.jpg"
            className="w-full h-[490px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/7zsq449/banner3.jpg"
            className="w-full h-[490px]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Swy9DZF/banner4.jpg"
            className="w-full h-[490px]"
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/XzbyMBK/banner5.jpg"
            className="w-full h-[490px]"
          />
        </div>
      </div> 

      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
      </div>
     </>
  );
};

export default Banner;

{
  /* <Carousel autoPlay={true} stopOnHover={true} onChange={true} className="text-center">
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
</Carousel> */
}
