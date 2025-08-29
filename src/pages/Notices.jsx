import React, { useEffect, useState } from "react";

export default function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("/notices.json")
      .then((res) => res.json())
      .then((data) => setNotices(data.notices))
      .catch((err) => console.error("Error loading notices:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Notices</h2>
      <ul className="list-disc ml-6 space-y-2">
        {notices.map((notice, index) => (
          <li key={index}>{notice}</li>
        ))}
      </ul>
    </div>
  );
}
