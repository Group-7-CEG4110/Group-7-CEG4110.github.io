"use client"; 

import { useState } from "react";

// array of weekly reports
const weeks = Array.from({ length: 16 }, (_, i) => ({
  label: `Week ${i + 1}`,
  pdf: `/pdfs/week${i + 1}.pdf`,
}));

export default function Home() {
  // Track which week is currently selected (starts at week 1)
  const [selectedWeek, setSelectedWeek] = useState(0);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Left sidebar for week selection*/}
      <aside className="w-48 bg-white shadow-md p-4 flex flex-col gap-2">
        <h2 className="font-bold text-lg mb-2 text-black">Weekly <span className="text-orange-600">Reports</span></h2>
        {weeks.map((week, index) => (
          <button
            key={index}
            onClick={() => setSelectedWeek(index)}
            className={`px-3 py-2 rounded text-sm font-medium transition-colors
              ${selectedWeek === index
                ? "bg-green-600 text-white"       // Active/selected style
                : "bg-gray-200 text-gray-800 hover:bg-gray-300" // Default style
              }`}
          >
            {week.label}
          </button>
        ))}
      </aside>

      {/* simply sets the iframe to reference the pds based on the useState, which changes the index reference for the weeks array*/}
      <main className="flex-1 p-6">
        <h1 className="text-xl text-black font-bold mb-4">{weeks[selectedWeek].label} Report</h1>
        <iframe
          src={weeks[selectedWeek].pdf}
          className="w-full h-screen border rounded shadow"
          title={`${weeks[selectedWeek].label} PDF`}
        />
      </main>

    </div>
  );
}