import { data, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { format } from "date-fns";

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
            .delete(`https://studyo-server.vercel.app/assignment/${_id}`)
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
    <div className="flex flex-col relative rounded-md max-w-xs bg-orange-100 shadow-xl">
      <div className=" h-48 relative ">
        <img
          className="h-full w-full rounded-md object-cover"
          src={photo}
          alt={title}
        />
        <div className="absolute bottom-0 right-0">
          <p className="badge rounded-none bg-blue-600 text-secondary py-3">
            {" "}
            Marks: {marks}
          </p>
          <p className="badge rounded-none bg-green-500 text-secondary py-3">
            {" "}
            {level}
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col grow space-y-1">
        <div className="flex flex-col grow">
          <h2 className="card-title">{title}</h2>
          <p>{description?.substring(0, 80)}...</p>
        </div>
        {/* <p>{format(new Date(dueDate), "P")}</p> */}
        <div className="card-actions justify-between">
          <Link
            to={`/assignment/details/${_id}`}
            className="bg-blue-600 text-white px-3 py-1 rounded-md"
          >
            View
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-green-500 text-white px-3 py-1 rounded-md"
          >
            Delete
          </button>
          <Link to={`/assignment/updated/${_id}`}>
            <button className="bg-blue-600 btn-outline text-white px-3 py-1 rounded-md">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
