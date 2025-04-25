import { data, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { format } from "date-fns";
import { MdDelete } from "react-icons/md";

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

  return (
    <div className="flex flex-col relative mx-auto rounded-md max-w-xs bg-white shadow-xl">
      <div className=" h-48 relative ">
        <img
          className="h-full w-full rounded-md object-cover"
          src={photo}
          alt={title}
        />
        <div className="absolute bottom-0 right-0">
          <p className="badge rounded-none bg-secondary text-accent py-3">
            {" "}
            {level}
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col grow space-y-1">
        <div className="flex flex-col grow">
          <div className="flex justify-between">
            <h2 className="card-title">{title}</h2>
          </div>
          <p>{description?.substring(0, 80)}...</p>
        </div>
        {/* <p>{format(new Date(dueDate), "P")}</p> */}
        <div className="card-actions justify-end">
          <Link
            to={`/assignment/details/${_id}`}
            className="border-2 bg-secondary text-white px-3 py-1 rounded-md"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
