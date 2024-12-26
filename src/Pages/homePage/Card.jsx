import { format } from "date-fns";
import { Link } from "react-router-dom";
const Card = ({ assignment }) => {
  const { _id, photo, title, marks, level, dueDate, description } = assignment;
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
        <p>{format(new Date(dueDate), "P")}</p>
        <div className="card-actions justify-between">
          <Link
            to={`/assignment/details/${_id}`}
            className="badge badge-outline px-5 py-3"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
