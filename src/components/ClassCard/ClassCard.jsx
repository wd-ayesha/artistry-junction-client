import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({item}) => {
    const { name, image, availableSeats, _id, category } = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {classId: _id, name, image, availableSeats, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                   
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Class added.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to add the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="mx-auto w-1/2">
                <img src={image} alt="class_img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Available seats: {availableSeats}</p>
                <p>Category: {category}</p>
                <div className="card-actions mt-3">
                  <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
    );
};

export default ClassCard;