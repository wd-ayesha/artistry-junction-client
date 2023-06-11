import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center bg-slate-300">
      <img
        className="mx-auto w-1/2"
        src="https://i.ibb.co/FKcg8H2/error.png"
        alt=""
      />
      <Link to="/">
        <button className="btn btn-active btn-link pb-48 text-teal-900">Back to Home</button>
      </Link>
    </div>
    );
};

export default ErrorPage;