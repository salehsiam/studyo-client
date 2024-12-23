import React from "react";

const SingleAssignment = ({ assignment }) => {
  const { photo, title, marks, level, dueDate, description } = assignment;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-56" src={photo} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className={title}>
          Shoes!
          <div className="badge badge-secondary">{level}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
