import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyAssignments = () => {
  const { user } = useAuth();
  const [myAssignments, setMyAssignments] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-assignment/${user.email}`)
      .then((data) => {
        console.log(data.data);
        setMyAssignments(data.data);
      });
  }, [user.email]);
  return (
    <div>
      <h2 className="text-3xl font-semibold">My Assignments</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th className="text-center">Status</th>
                <th className="text-center">Assignments marks</th>
                <th className="text-center">Obtain Marks</th>
                <th className="text-center">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myAssignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td>{assignment.title}</td>
                  <td className="text-center">{assignment.status}</td>
                  <td className="text-center">
                    {assignment.assignments_marks}
                  </td>
                  <td className="text-center">
                    {assignment.marks || "Not graded"}
                  </td>
                  <td className="text-center">{assignment.feedback || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAssignments;
