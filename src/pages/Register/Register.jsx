import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { saveUser } from './../../api/auth';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmit = async (data) => {
      if (data.password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      try {
        const result = await createUser(data.email, data.password);
        const loggedUser = result.user;
        console.log(loggedUser);
        
        updateUserProfile(loggedUser, data.name, data.photo);
          // save user to db
        saveUser(result.user)
      } catch (error) {
        console.log("Error:", error);
      }
    };

    return (
        <div className="hero min-h-screen bg-base-200 py-20">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold py-5">Register now!</h1>
          </div>
          <div className="card shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[400px]">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-700 pt-2">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-700 pt-2">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { 
                  required: true,
                   minLength:6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/})} name="password" placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-600 pt-2">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600 pt-2">Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600 pt-2">Password must have a capital letter & a special character</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photo")} name="photo" placeholder="photo url" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;