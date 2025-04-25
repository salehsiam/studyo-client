import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyAssignment = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/assignments?email=${user.email}`)
      .then((data) => {
        setAssignments(data.data);
        setLoading(false);
      });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://studyo-server.vercel.app/assignment/${id}`)
          .then((data) => {
            const remaining = assignments.filter((ass) => ass._id != id);
            setAssignments(remaining);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  return (
    <div className=" px-8 pt-24 max-w-7xl mx-auto">
      <h2 className="text-3xl text-primary font-semibold mb-4">
        My Assignment
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th className="text-center">Level</th>
                <th className="text-center">Marks</th>
                <th className="text-center">Date</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {assignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td>{assignment.title}</td>
                  <td className="text-center">{assignment.level}</td>
                  <td className="text-center">{assignment.marks}</td>
                  <td className="text-center">
                    {assignment.dueDate.split("T")[0]}
                  </td>
                  <td className="text-center">
                    <Link to={`/assignment/updated/${assignment._id}`}>
                      <button className="bg-secondary text-white px-3 py-1 rounded-md mr-2">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(assignment._id)}
                      className="border px-3 py-1 rounded-md"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAssignment;
