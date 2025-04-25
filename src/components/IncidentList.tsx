import React, { useState } from "react";
import { Incident } from "../types/Incident";

interface IncidentListProps {
  incidents: Incident[];
}

const severityBadgeColors: Record<string, string> = {
  Low: "bg-green-100 text-green-800 transition duration-200",
  Medium: "bg-yellow-100 text-yellow-800  transition duration-200",
  High: "bg-red-100 text-red-800  transition duration-200",
};

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {incidents.length === 0 && (
        <p className="text-center text-gray-500">No incidents found.</p>
      )}
      {incidents.map((incident) => (
        <article
          key={incident.id}
          className="bg-white rounded-lg shadow-md p-5 transition-shadow hover:shadow-lg"
          aria-expanded={expandedId === incident.id}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {incident.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <span
                  className={`inline-block px-3 py-1 rounded-full font-medium text-sm ${
                    severityBadgeColors[incident.severity]
                  }`}
                  aria-label={`Severity level: ${incident.severity}`}
                >
                  {incident.severity}
                </span>
                <time
                  dateTime={incident.reported_at}
                  className="text-gray-500 text-sm"
                  aria-label={`Reported at ${new Date(
                    incident.reported_at
                  ).toLocaleString()}`}
                >
                  {new Date(incident.reported_at).toLocaleString()}
                </time>
              </div>
            </div>
            <button
              className="
    mt-4 sm:mt-0 
    px-4 py-2 
    text-blue-600 font-semibold 
    rounded-md 
    cursor-pointer 
    focus:outline-none 
    focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white 
    transition 
    duration-200 ease-in-out
    "
              onClick={() =>
                setExpandedId(expandedId === incident.id ? null : incident.id)
              }
              aria-controls={`incident-desc-${incident.id}`}
              aria-expanded={expandedId === incident.id}
            >
              {expandedId === incident.id ? "Hide Details" : "View Details"}
            </button>
          </div>
          {expandedId === incident.id && (
            <p
              id={`incident-desc-${incident.id}`}
              className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line"
            >
              {incident.description}
            </p>
          )}
        </article>
      ))}
    </div>
  );
};

export default IncidentList;
