import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        const popularInstructors = data.filter(
          (item) => item?.status === "popular"
        );
        setPopularInstructor(popularInstructors);
      });
  }, []);

  return (
    <div className="pt-20">
      <h2 className="text-4xl pb-8 text-center">Popular Instructors</h2>
      <div className="grid md:grid-cols-3 gap-10">
      {popularInstructor.map((pTeacher) => (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={pTeacher.image} alt="teacher_img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {pTeacher.name}</h2>
              <p>Email: {pTeacher.email}</p>
              <p>Subject: {pTeacher.category}</p>
            </div>
          </div>
        </>
      ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
