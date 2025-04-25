import React, { useState } from "react";
import { Incident } from "../types/Incident";

interface IncidentFormProps {
  addIncident: (incident: Incident) => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ addIncident }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    const newIncident: Incident = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      severity,
      reported_at: new Date().toISOString(),
    };
    addIncident(newIncident);
    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-5"
      aria-label="Report new incident form"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Report New Incident
      </h2>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        aria-required="true"
      />
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Description"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        aria-required="true"
      />
      <select
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        aria-label="Select severity level"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default IncidentForm;
