import { useState } from "react";
import { Incident } from "./types/Incident";
import { mockData } from "./data/mockData";
import IncidentList from "./components/IncidentList";
import FilterSortBar from "./components/FilterSortBar";
import IncidentForm from "./components/IncidentForm";

export default function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockData);
  const [filter, setFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("Newest");

  const addIncident = (incident: Incident) => {
    setIncidents([incident, ...incidents]);
  };

  const filteredIncidents = incidents.filter((incident) =>
    filter === "All" ? true : incident.severity === filter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white font-sans p-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="20%" cy="30%" r="200" fill="url(#grad)" />
        <circle cx="80%" cy="70%" r="300" fill="url(#grad)" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-8 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 tracking-wide">
            AI Safety Incident Dashboard
          </h1>
          <p className="mt-2 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Monitor and report AI safety incidents effectively
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Left: Filters and Form */}
          <section className="md:col-span-1 space-y-6">
            <FilterSortBar
              filter={filter}
              setFilter={setFilter}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
            <IncidentForm addIncident={addIncident} />
          </section>

          {/* Right: Incident List */}
          <section className="md:col-span-2">
            <IncidentList incidents={sortedIncidents} />
          </section>
        </main>
      </div>
    </div>
  );
}
