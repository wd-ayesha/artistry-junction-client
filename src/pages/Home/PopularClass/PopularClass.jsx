import { useEffect, useState } from "react";

const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            const popularClasses = data.filter(item => item?.status === "popular");
            setPopularClass(popularClasses)
        })
    }, [])
    return (
        <div className="pt-20">
         <h2 className="text-4xl pb-8 text-center">Popular Classes</h2>
         <div className="grid md:grid-cols-3 gap-10">
         {
                popularClass.map(pClass => 
                <>
                <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={pClass?.image} alt="class_img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {pClass.name}</h2>
              <p>Available seats: {pClass.availableSeats}</p>
              <p>Category: {pClass.category}</p>
            </div>
          </div>
                </>
               )
            }
         </div>
            
        </div>
    );
}

export default PopularClass;