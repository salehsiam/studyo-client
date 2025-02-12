import { useState } from "react";

const ResourcesNotes = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: "React Basics",
      description: "Introduction to React.",
      file: "react-basics.pdf",
      uploader: "John Doe",
      date: "2025-02-12",
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!title || !file) return;
    const newResource = {
      id: resources.length + 1,
      title,
      description,
      file: file.name,
      uploader: "You",
      date: new Date().toISOString().split("T")[0],
    };
    setResources([newResource, ...resources]);
    setTitle("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="max-w-7xl pt-24 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Resources & Notes</h2>
      <div className="flex flex-row-reverse gap-6 justify-between">
        <div className="bg-white shadow p-4 w-96 rounded-lg mb-6">
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
            className="bg-blue-500 text-white p-2 rounded"
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
                  key={res.id}
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
                    className="text-blue-500 underline"
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
