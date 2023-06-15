import { useForm } from "react-hook-form";


const AddClassForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
      
    return (
        <div className="hero min-h-screen bg-base-200 py-20">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-semibold pb-3">Add a Class</h1>
        </div>
        <div className="card max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onsubmit)} className="card-body w-[400px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class name</span>
              </label>
              <input
                type="name"
                {...register("name", { required: true })}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input type="text" {...register("photo")} name="photo" placeholder="photo url" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available seats</span>
              </label>
              <input
                type="number"
                {...register("seat", { required: true })}
                name="seat"
                placeholder="seats"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                name="price"
                placeholder="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default AddClassForm;