import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Loading from "../../loading/Loading";
import Lottie from "lottie-react";
import noFound from "./../../assets/lottie/no.json";

const PendingAssignment = () => {
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [marks, setMarks] = useState("");
  const [feedback, setFeedback] = useState("");
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  // Fetch submitted assignments

  useEffect(() => {
    axios
      .get("https://studyo-server.vercel.app/submittedAssignments")
      .then((data) => {
        setSubmittedAssignments(data.data);
        setLoading(false);
      });
  }, [user.email]);

  // Open modal and set selected assignment
  const openModal = (assignment) => {
    setSelectedAssignment(assignment);
    setIsModalOpen(true);
    setMarks("");
    setFeedback("");
  };

  // Submit marks and feedback
  const handleSubmit = () => {
    if (!marks) {
      toast("Please enter marks!");
      return;
    }

    const updatedData = {
      marks: parseInt(marks, 10),
      feedback,
      status: "Completed",
    };

    axios
      .put(
        `https://studyo-server.vercel.app/submittedAssignments/${selectedAssignment._id}`,
        updatedData
      )
      .then((response) => {
        setIsModalOpen(false);
        setSubmittedAssignments((prev) =>
          prev.filter((assignment) => assignment._id !== selectedAssignment._id)
        );
        setIsModalOpen(false);
        toast.success("Marks and feedback submitted successfully!");
      })
      .catch((error) => {});
  };

  if (loading) return <Loading></Loading>;

  if (submittedAssignments.length === 0) {
    return (
      <>
        <div className="flex flex-col md:flex-row items-center justify-center pt-24">
          <div>
            <Lottie animationData={noFound} loop={true} />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">
              No Assignments is pending!
            </h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl text-primary font-semibold mb-4">
        Pending Assignments
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th className="text-center">Assignment Mark</th>
              <th className="text-center">Examinee Name</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {submittedAssignments.map((assignment, idx) => (
              <tr key={assignment._id}>
                <td>{assignment.title}</td>
                <td className="text-center">
                  {assignment.assignments_marks || "Not graded"}
                </td>
                <td className="text-center">{assignment.examinee_name}</td>
                <td className="text-end">
                  <button
                    onClick={() => openModal(assignment)}
                    className="btn btn-xs w-20 bg-secondary hover:bg-primary text-white"
                  >
                    Give Mark
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedAssignment && (
        <div className="fixed inset-0 overflow-y-scroll flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-orange-100 w-4/5 md:w-1/2 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Marks for Assignment</h2>
            <p>
              <strong>Docs:</strong>{" "}
              <a
                target="_blank"
                className="underline break-all"
                href={selectedAssignment.googleDocsLink}
              >
                {selectedAssignment.googleDocsLink}
              </a>
            </p>
            <p>
              <strong>Note:</strong> {selectedAssignment.quickNote}
            </p>
            <div className="mt-4 space-y-4">
              {/* Marks Input */}
              <div>
                <label className="block text-sm font-medium mb-1">Marks</label>
                <input
                  type="number"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  placeholder="Enter marks"
                  className="w-full border border-gray-300 bg-orange-50 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>

              {/* Feedback Input */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Feedback
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter feedback"
                  rows={1}
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

export default PendingAssignment;
