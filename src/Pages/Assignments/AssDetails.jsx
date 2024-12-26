import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
const AssDetails = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [googleDocsLink, setGoogleDocsLink] = useState("");
  const [quickNote, setQuickNote] = useState("");
  const { photo, title, marks, level, dueDate, description, creator_email } =
    data;
  const handleSubmit = () => {
    const examinee_name = user.displayName;
    const examinee_email = user.email;
    const status = "pending";
    if (!googleDocsLink) {
      alert("Google Docs Link is required!");
      return;
    }
    const submitAssignment = {
      title,
      assignments_marks: marks,
      creator_email,
      examinee_name,
      examinee_email,
      status,
      googleDocsLink,
      quickNote,
    };

    axios
      .post(
        "https://studyo-server.vercel.app/submittedAssignments",
        submitAssignment
      )
      .then((data) => {
        setGoogleDocsLink("");
        setQuickNote("");
        toast.success("Assignments successfully submitted");
      });
  };
  return (
    <div className="w-2/3 mx-auto rounded-md space-y-6 border border-orange-200 p-5">
      <img
        className="h-[410px] w-full object-cover rounded-md"
        src={photo}
        alt={title}
      />
      <p className="badge bg-green-900 text-white px-5 py-4">Level: {level}</p>

      <h2 className="text-3xl font-semibold"> {title}</h2>
      <p>{description}</p>
      <div className="flex gap-16 items-center">
        <p className="badge font-semibold px-5 py-4">Total-Marks: {marks}</p>
        <p className="badge font-semibold px-5 py-4">
          Date: {format(new Date(dueDate), "P")}
        </p>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn bg-transparent border-green-900 text-green-900 hover:bg-green-900 hover:text-white"
      >
        Take Assignment
      </button>

      {/* Modal  */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-orange-100 w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Submit Your Assignment</h2>
            <div className="space-y-4">
              {/* Google Docs Link Input */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Google Docs Link
                </label>
                <input
                  type="url"
                  placeholder="google docs"
                  value={googleDocsLink}
                  onChange={(e) => setGoogleDocsLink(e.target.value)}
                  className="w-full border border-gray-300 bg-orange-50 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>

              {/* Quick Note Textarea */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Quick Note
                </label>
                <textarea
                  placeholder="Enter a quick note here..."
                  value={quickNote}
                  onChange={(e) => setQuickNote(e.target.value)}
                  name="note"
                  rows={2}
                  className="w-full border bg-orange-50 border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                ></textarea>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-900 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssDetails;
