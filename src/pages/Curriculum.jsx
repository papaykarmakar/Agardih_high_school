import React from "react";

export default function Curriculum() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
      <p>
        Our curriculum follows West Bengal's state board (WBCHSE) syllabus, designed for a balanced
        mix of theoretical knowledge and practical application.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>Semester-based structure for Classes XI and XII</li>
        <li>Focused subjects across streams: Science, Commerce, Humanities</li>
        <li>Includes language, elective, and vocational courses</li>
      </ul>
      <p className="mt-2">
        Refer to the <a href="/academic-calendar" className="text-blue-600 underline">Academic Calendar</a> for detailed timelines.
      </p>
    </div>
  );
}
