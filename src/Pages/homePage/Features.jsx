import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Features = () => {
  const [featuresAssignments, setFeaturesAssignments] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/features").then((res) => {
      setFeaturesAssignments(res.data);
    });
  }, []);
  return (
    <div className="my-16 mx-8">
      <h2 className="text-4xl font-semibold text-center mb-4">Our features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresAssignments.map((assignment) => (
          <Card assignment={assignment} key={assignment._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
