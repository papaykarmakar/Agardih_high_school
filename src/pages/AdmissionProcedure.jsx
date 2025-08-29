import React from "react";

export default function AdmissionProcedure() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admission Procedure</h2>
      <ol className="list-decimal ml-6">
        <li>Collect or download the admission form.</li>
        <li>Submit completed form with required documents (birth cert., report card, ID).</li>
        <li>Attend interview/assessment (for higher classes).</li>
        <li>Pay the admission fees to confirm enrolment.</li>
        <li>Attend orientation before the new school year.</li>
      </ol>
      <p className="mt-2">
        Download Form: <a href="/admission-form.pdf" className="text-blue-600 underline">Admission Form (PDF)</a><br/>
        Fee Structure: <a href="/fee-structure.pdf" className="text-blue-600 underline">Fee Structure (PDF)</a>
      </p>
    </div>
  );
}
