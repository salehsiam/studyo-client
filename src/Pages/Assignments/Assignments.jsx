import { useLoaderData } from "react-router-dom";
import SingleAssignment from "./SingleAssignment";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../loading/Loading";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://studyo-server.vercel.app/assignments").then((data) => {
      setAssignments(data.data);
      setLoading(false);
    });
  }, []);

  const filterByEasy = () => {
    setLoading(true);
    axios
      .get("https://studyo-server.vercel.app/assignments/easy")
      .then((data) => {
        setAssignments(data.data);
        setLoading(false);
      });
  };

  const filterByMedium = () => {
    setLoading(true);
    axios
      .get("https://studyo-server.vercel.app/assignments/medium")
      .then((data) => {
        setAssignments(data.data);
        setLoading(false);
      });
  };
  const filterByHard = () => {
    setLoading(true);
    axios
      .get("https://studyo-server.vercel.app/assignments/hard")
      .then((data) => {
        setAssignments(data.data);
        setLoading(false);
      });
  };
  const handleSearch = (e) => {
    const query = e.target.value;
    axios
      .get(`https://studyo-server.vercel.app/assignments/search?query=${query}`)
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      });
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="pt-24 md:px-10">
      <div className="md:flex items-center px-4 justify-between  ">
        <h2 className="md:text-4xl text-primary flex-1 text-3xl mb-4 font-semibold">
          All Assignments
        </h2>
        <div className="flex justify-between items-center gap-4">
          <label
            onChange={handleSearch}
            className="input input-bordered flex items-center gap-2"
          >
            <input type="text" className="grow w-2/3" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-primary text-white hover:bg-green-700"
            >
              Filter
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-orange-100  rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={filterByEasy}>Easy</button>
              </li>
              <li>
                <button onClick={filterByMedium}>Medium</button>
              </li>
              <li>
                <button onClick={filterByHard}>Hard</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 mt-4 gap-10">
        {assignments.map((assignment) => (
          <SingleAssignment
            setAssignments={setAssignments}
            assignments={assignments}
            assignment={assignment}
            key={assignment._id}
          ></SingleAssignment>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
