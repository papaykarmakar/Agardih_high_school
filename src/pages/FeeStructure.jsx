import React from "react";

export default function FeeStructure() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fee Structure</h2>
      <p>
        We strive for affordability and transparency. Here’s a typical fee breakdown:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>Tuition Fees (Annual): ₹8,000 – ₹12,000</li>
        <li>Stationery & Uniform: ₹2,000 – ₹3,000</li>
        <li>Exam & Miscellaneous Fees: ₹1,000 – ₹2,000</li>
      </ul>
      <p className="mt-2">
        See full details: <a href="/fee-structure.pdf" className="text-blue-600 underline">Fee Structure (PDF)</a>
      </p>
    </div>
  );
}
