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

  return (
    <div className="px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-semibold">All Assignments</h2>
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
