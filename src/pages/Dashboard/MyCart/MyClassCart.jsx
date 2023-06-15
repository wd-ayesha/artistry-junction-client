import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useQueryCart";

const MyClassCart = () => {
    const [cart] = useCart()
    console.log(cart);
    const total = cart.reduce((sum, item)=> item.price + sum, 0)
    return (
        <>
        <div>
         total: ${total}
        </div>
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="text-xl text-center">
            <tr>
              <th>Class Image</th>
              <th>Class name</th>
              <th>Available seats</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cart?.map((classItem, index) => (
              <tr key={classItem._id}>
              <td className="font-bold">{index + 1}</td>
              <td className="w-20">
                <img src={classItem.image} alt="" />
              </td>
            <td>{classItem.name}</td>
            <td>{classItem.availableSeats}</td>
            <td>{classItem.category}</td>
            <td>${classItem.price}</td>
            <th>
              <button><FaTrashAlt></FaTrashAlt></button>
            </th>
          </tr>
            ))}
          </tbody>
        </table>
      </div></>
    );
};

export default MyClassCart;