import React from "react";

export default function DownloadForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Download Admission Form</h2>
      <p>You can download the form for admission here:</p>
      <a href="/admission-form.pdf" className="text-blue-600 underline">Download Admission Form (PDF)</a>
    </div>
  );
}
