import { Link } from "react-router-dom";

const SingleAssignment = ({ assignment }) => {
  const { _id, photo, title, marks, level, dueDate, description } = assignment;

  return (
    <div className="flex rounded-xl flex-col bg-base-100 shadow-xl">
      <div className=" h-52 ">
        <img
          className="h-full w-full rounded-t-xl object-cover"
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
          <button className="badge badge-outline px-5 py-3">Delete</button>
          <Link to={`/assignment/updated/${_id}`}>
            <button className="badge badge-outline px-5 py-3">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
