import { useLoaderData } from "react-router-dom";
import SingleAssignment from "./SingleAssignment";

const Assignments = () => {
  const assignments = useLoaderData();
  return (
    <div className="px-6">
      <h2 className="text-4xl font-semibold mb-4">All Assignments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {assignments.map((assignment) => (
          <SingleAssignment
            assignment={assignment}
            key={assignment._id}
          ></SingleAssignment>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
