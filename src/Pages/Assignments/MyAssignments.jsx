import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../../loading/Loading";
import Lottie from "lottie-react";
import noFound from "./../../assets/lottie/nofound.json";

const MyAssignments = () => {
  const { user } = useAuth();
  const [myAssignments, setMyAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://studyo-server.vercel.app/my-assignment/${user.email}`, {
        withCredentials: true,
      })
      .then((data) => {
        setMyAssignments(data.data);
        setLoading(false);
      });
  }, [user.email]);
  if (loading) return <Loading></Loading>;

  if (myAssignments.length === 0) {
    return (
      <>
        <div className="flex flex-col md:flex-row items-center justify-center pt-24">
          <div>
            <Lottie animationData={noFound} loop={true} />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Nothing to show!</h2>
            <p>Please take a assignments</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className=" px-8 pt-24 max-w-7xl mx-auto">
      <h2 className="text-3xl text-primary font-semibold mb-4">
        My Assignments
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th className="text-center">Status</th>
                <th className="text-center">Assignments marks</th>
                <th className="text-center">Obtain Marks</th>
                <th className="text-center">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myAssignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td>{assignment.title}</td>
                  <td className="text-center">{assignment.status}</td>
                  <td className="text-center">
                    {assignment.assignments_marks}
                  </td>
                  <td className="text-center">
                    {assignment.marks || "Not graded"}
                  </td>
                  <td className="text-center">{assignment.feedback || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAssignments;
