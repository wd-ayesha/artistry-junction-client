import {
  FaClipboard,
  FaTrophy,
  FaUserAlt,
  FaUserFriends,
} from "react-icons/fa";

const Counter = () => {
  return (
    <div className="bg-red-500 text-white text-center py-10">
      <h2 className="text-4xl pb-8">Why People Choose Us</h2>
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-transparent text-white">
        <div className="stat">
          <FaClipboard className="text-5xl mx-auto" />
          <div className="stat-value py-4">4</div>
          <div className="stat-title text-white text-3xl font-bold pb-3">
            Classes
          </div>
        </div>

        <div className="stat">
          <FaUserAlt className="text-5xl mx-auto"></FaUserAlt>
          <div className="stat-value py-4">12</div>
          <div className="stat-title text-white text-3xl font-bold pb-3">
            Teachers
          </div>
        </div>
        <div className="stat">
          <FaTrophy className="text-5xl mx-auto"></FaTrophy>
          <div className="stat-value py-4">40</div>
          <div className="stat-title text-white text-3xl font-bold pb-3">
            Awards
          </div>
        </div>
        <div className="stat">
          <FaUserFriends className="text-5xl mx-auto"></FaUserFriends>
          <div className="stat-value py-4">800</div>
          <div className="stat-title text-white text-3xl font-bold pb-3">
            Students
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
