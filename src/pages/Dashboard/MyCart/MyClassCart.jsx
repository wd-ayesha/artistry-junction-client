import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useQueryCart";
import Swal from "sweetalert2";

const MyClassCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (classItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artistry-junction-server-wd-ayesha.vercel.app/carts/${classItem._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <div>total: ${total}</div>
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
                  <button onClick={() => handleDelete(classItem)}>
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClassCart;
