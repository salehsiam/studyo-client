import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleAddAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const marks = form.marks.value;
    const level = form.level.value;
    const dueDate = startDate;
    const description = form.description.value;
    const newAssignment = { photo, title, marks, level, dueDate, description };
    console.log(newAssignment);
    axios
      .post("http://localhost:5000/assignments", newAssignment)
      .then((data) => {
        console.log(data.data);
      });
  };
  return (
    <div>
      <div className="w-2/3 mx-auto bg-primary p-10">
        <h2 className="text-4xl text-secondary font-semibold">
          Create Assignment
        </h2>
        <form onSubmit={handleAddAssignment}>
          {/* first row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
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
                <span className="label-text">Marks</span>
              </label>
              <DatePicker
                className="p-3 rounded-lg"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          {/* third row */}
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>
          <div className="mt-8">
            <button className="btn w-full bg-[#8da6d4] text-white">
              Add Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
