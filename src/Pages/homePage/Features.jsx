import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Features = () => {
  const [featuresAssignments, setFeaturesAssignments] = useState([]);
  useEffect(() => {
    axios.get("https://studyo-server.vercel.app/features").then((res) => {
      setFeaturesAssignments(res.data);
    });
  }, []);
  return (
    <div className="">
      <h2 className="text-4xl font-semibold text-center mb-2">Our features</h2>
      <p className="text-center mb-4 ">
        Empowering collaboration with seamless assignment creation, peer
        grading, <br /> and interactive group study sessions for all fields of
        learning.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {featuresAssignments.map((assignment) => (
          <Card assignment={assignment} key={assignment._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
