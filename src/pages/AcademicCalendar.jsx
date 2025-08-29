import React from "react";

export default function AcademicCalendar() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Academic Calendar</h2>
      <p>
        Our academic year runs from April to March, structured into segments:
        <ul className="list-disc ml-6 mt-2">
          <li>Term I (Apr–Jul): Assessments, cultural events</li>
          <li>Term II (Aug–Nov): Mid-year exams, sports events</li>
          <li>Term III (Dec–Mar): Final exams, annual awards</li>
        </ul>
      </p>
      <p className="mt-2">
        Download the full calendar: <a href="/academic-calendar.pdf" className="text-blue-600 underline">Academic Calendar (PDF)</a>
      </p>
    </div>
  );
}
