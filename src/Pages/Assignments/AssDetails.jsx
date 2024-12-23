import { useLoaderData } from "react-router-dom";

const AssDetails = () => {
  const data = useLoaderData();
  const { photo, title, marks, level, dueDate, description } = data;
  return (
    <div>
      <img src={photo} alt="" />
      <h2 className="text-2xl">Assignments Details : {title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AssDetails;
