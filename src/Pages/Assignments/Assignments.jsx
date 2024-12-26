import { useLoaderData } from "react-router-dom";
import SingleAssignment from "./SingleAssignment";
import { useEffect, useState } from "react";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/assignments").then((data) => {
      setAssignments(data.data);
    });
  }, []);

  const filterByEasy = () => {
    axios.get("http://localhost:5000/assignments/easy").then((data) => {
      console.log(data.data);
      setAssignments(data.data);
    });
  };

  const filterByMedium = () => {
    axios.get("http://localhost:5000/assignments/medium").then((data) => {
      setAssignments(data.data);
    });
  };
  const filterByHard = () => {
    axios.get("http://localhost:5000/assignments/hard").then((data) => {
      setAssignments(data.data);
    });
  };
  const handleSearch = (e) => {
    const query = e.target.value;
    axios
      .get(`http://localhost:5000/assignments/search?query=${query}`)
      .then((res) => {
        setAssignments(res.data);
      });
  };

  return (
    <div className="px-6">
      <div className="flex items-center justify-between my-6 ">
        <h2 className="text-4xl w-1/3 font-semibold">All Assignments</h2>
        <div className="flex items-center gap-4">
          <label
            onChange={handleSearch}
            className="input input-bordered  flex items-center gap-2"
          >
            <input type="text" className="grow" placeholder="Search" />
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
              className="btn m-1 bg-green-900 text-white hover:bg-green-700"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
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
