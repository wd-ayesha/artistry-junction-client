import { useEffect, useState } from "react";

const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([]);

    useEffect( () => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => {
            const popularClasses = data.filter(item => item.class.status === "popular");
            setPopularClass(popularClasses)
        })
    }, [])
    return (
        <div className="pt-20">
         <h2 className="text-4xl pb-8 text-center">Popular Classes</h2>
            {
                popularClass.map(pClass => <p>{pClass.class.name}</p>)
            }
        </div>
    );
}

export default PopularClass;