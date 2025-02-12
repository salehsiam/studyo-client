import { format } from "date-fns";
import { Link } from "react-router-dom";
const Card = ({ assignment }) => {
  const { _id, photo, title, marks, level, dueDate, description } = assignment;
  return (
    <div className="flex flex-col relative rounded-md max-w-xs bg-orange-100 shadow-xl">
      <div className=" h-48 relative ">
        <img
          className="h-full w-full rounded-md object-cover"
          src={photo}
          alt={title}
        />
        <div className="absolute bottom-0 right-0">
          <p className="badge rounded-none bg-accent text-secondary py-3">
            {" "}
            Marks: {marks}
          </p>
          <p className="badge rounded-none bg-primary text-secondary py-3">
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
            className="bg-accent text-white px-5 py-1 rounded-md"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
