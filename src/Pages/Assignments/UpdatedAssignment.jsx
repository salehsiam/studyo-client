import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedAssignment = () => {
  const data = useLoaderData();
  const { _id, photo, title, marks, level, dueDate, description } = data;
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const handleUpdatedAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const marks = form.marks.value;
    const level = form.level.value;
    const dueDate = startDate;
    const description = form.description.value;
    const updatedAssignment = {
      photo,
      title,
      marks,
      level,
      dueDate,
      description,
    };

    axios
      .patch(
        `https://studyo-server.vercel.app/assignment/${_id}`,
        updatedAssignment
      )
      .then((data) => {
        Swal.fire("Successfully updated");
      });
  };
  return (
    <div className="mt-16">
      <div className=" md:mx-10 py-16 bg-orange-300 p-10">
        <h2 className="text-4xl mb-4 text-secondary font-semibold">
          Update Assignment
        </h2>
        <form className="space-y-3" onSubmit={handleUpdatedAssignment}>
          {/* first row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                defaultValue={photo}
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* second row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Marks</span>
              </label>
              <input
                type="number"
                name="marks"
                defaultValue={marks}
                placeholder="marks"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Level</span>
              </label>
              <select
                className="select select-bordered w-full"
                defaultValue={level}
                name="level"
                required
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <DatePicker
                className="p-3 rounded-lg"
                selected={dueDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          {/* third row */}
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                defaultValue={description}
                placeholder="description"
              ></textarea>
            </div>
          </div>
          <button className="btn w-full bg-green-800 text-white">
            Update Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatedAssignment;
