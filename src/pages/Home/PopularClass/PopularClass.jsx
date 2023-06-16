import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard/ClassCard";

const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("https://artistry-junction-server-wd-ayesha.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.filter(
          (item) => item?.status === "popular"
        );
        setPopularClass(popularClasses);
      });
  }, []);

  return (
    <div className="pt-20">
      <h2 className="text-4xl pb-8 text-center">Popular Classes</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {popularClass.map((item) => (
         <ClassCard item={item} key={item._id}></ClassCard>
        ))} 
      </div>
    </div>
  );
};

export default PopularClass;
