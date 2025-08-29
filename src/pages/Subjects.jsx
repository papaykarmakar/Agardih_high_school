import React from "react";

export default function Subjects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Subjects Offered</h2>
      <p>We offer a diverse array of subjects in compliance with WBCHSE norms:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>First & Second Languages (Bengali, English, Hindi, Urdu)</li>
        <li>Mathematics, Physics, Chemistry, Biology, Geography, Economics</li>
        <li>Commerce: Accountancy, Business Studies</li>
        <li>Humanities: History, Political Science, Sociology</li>
        <li>Modern subjects: Computer Science, Environmental Studies</li>
      </ul>
    </div>
  );
}
