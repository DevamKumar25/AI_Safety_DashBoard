import React from "react";

interface FilterSortProps {
  filter: string;
  setFilter: (val: string) => void;
  sortOrder: string;
  setSortOrder: (val: string) => void;
}

const severityColors: Record<string, string> = {
  All: "bg-gray-300 text-gray-700",
  Low: "bg-green-200 text-green-800",
  Medium: "bg-yellow-200 text-yellow-800",
  High: "bg-red-200 text-red-800",
};

const FilterSortBar: React.FC<FilterSortProps> = ({
  filter,
  setFilter,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap gap-3">
        {["All", "Low", "Medium", "High"].map((level) => (
          <button
            key={level}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200
              ${
                filter === level
                  ? `${severityColors[level]} shadow-md`
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            onClick={() => setFilter(level)}
            aria-pressed={filter === level}
          >
            {level}
          </button>
        ))}
      </div>
      <div>
        <label htmlFor="sortOrder" className="sr-only">
          Sort incidents
        </label>
        <select
          id="sortOrder"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortBar;
