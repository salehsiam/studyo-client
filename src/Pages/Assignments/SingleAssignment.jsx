import { data, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const SingleAssignment = ({ assignment, assignments, setAssignments }) => {
  const {
    _id,
    photo,
    title,
    marks,
    level,
    dueDate,
    description,
    creator_email,
  } = assignment;
  const { user } = useAuth();

  const handleDelete = (id) => {
    if (user.email !== creator_email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't delete this assignment!",
      });
      return;
    } else {
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
            .delete(`http://localhost:5000/assignment/${_id}`)
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
    }
  };

  return (
    <div className="flex flex-col rounded-md bg-orange-100 shadow-xl">
      <div className=" h-64  ">
        <img
          className="h-full w-full rounded-md object-cover"
          src={photo}
          alt={title}
        />
      </div>
      <div className="card-body">
        <div className="flex gap-4">
          <div className="badge bg-secondary py-3 text-white">
            Marks: {marks}
          </div>
          <div className="badge bg-primary text-secondary py-3">{level}</div>
        </div>
        <h2 className="card-title">{title}</h2>
        <p>{description?.substring(0, 100)}...</p>
        <p>{dueDate}</p>
        <div className="card-actions justify-between">
          <Link
            to={`/assignment/details/${_id}`}
            className="badge badge-outline px-5 py-3"
          >
            View
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="badge badge-outline px-5 py-3"
          >
            Delete
          </button>
          <Link to={`/assignment/updated/${_id}`}>
            <button className="badge badge-outline px-5 py-3">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
