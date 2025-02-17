import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Loading from "../../loading/Loading";

const ResourcesNotes = () => {
  const { user } = useAuth();
  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUpload = () => {
    if (!title || !file) return;

    const newResource = {
      title,
      description,
      file: file.name,
      uploader: user.displayName,
      email: user.email,
      date: new Date().toISOString().split("T")[0],
    };
    console.log(newResource);
    axios
      .post("https://studyo-server.vercel.app/resources", newResource)
      .then((data) => {
        toast.success("resources added");
        setResources((prev) => [...prev, newResource]);
        setTitle("");
        setDescription("");
        setFile(null);
      });
  };
  useEffect(() => {
    axios.get("https://studyo-server.vercel.app/resources").then((data) => {
      console.log(data.data);
      setResources(data.data);
      setLoading(false);
    });
  }, []);
  if (loading) return <Loading></Loading>;
  return (
    <div className="max-w-7xl pt-24 px-8 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Resources & Notes</h2>
      <div className="flex flex-col-reverse md:flex-row-reverse gap-6 justify-between">
        <div className="bg-white shadow p-4 md:w-96 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">Upload a Resource</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={handleUpload}
            className="bg-primary text-white p-2 rounded"
          >
            Upload
          </button>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Shared Resources</h3>
          {resources.length === 0 ? (
            <p className="text-gray-500">No resources available.</p>
          ) : (
            <div className="grid gap-4">
              {resources.map((res) => (
                <div
                  key={res._id}
                  className="p-4 border rounded flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-semibold">{res.title}</h4>
                    <p className="text-sm text-gray-600">{res.description}</p>
                    <p className="text-xs text-gray-500">
                      Uploaded by {res.uploader} on {res.date}
                    </p>
                  </div>
                  <a
                    href={`#`}
                    download={res.file}
                    className="text-secondary underline"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesNotes;
