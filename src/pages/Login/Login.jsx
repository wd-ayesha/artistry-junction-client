import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {logIn} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        logIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
    };
    return (
        <div className="hero min-h-screen bg-base-200 py-20">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
          <div className="card max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <input type="password" {...register("password")} name="password" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              <div><p>New to this website? Please <Link className="font-bold text-blue-950" to="/register">Register</Link></p></div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;