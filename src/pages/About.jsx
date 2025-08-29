import React from "react";
import logo from "../assets/logo.jpg"; // Place the uploaded logo in src/assets and rename it as logo.jpg

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      {/* Logo */}
      <img 
        src={logo} 
        alt="Agardih High School Logo" 
        className="mx-auto mb-6 w-48 h-48 object-contain"
      />

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4 text-blue-800">
        About Agardih High School (H.S.)
      </h2>

      {/* Content */}
      <p className="text-lg mb-4">
        Established in 1949, <strong>Agardih High School (H.S.)</strong> is a 
        co-educational institution under the West Bengal Council of Higher Secondary Education (WBCHSE). 
        The school has been serving the community for decades, nurturing young minds with knowledge, 
        values, and discipline.
      </p>

      <p className="text-lg mb-4">
        Guided by our motto <em>"Education for a sustainable development of society and country"</em>, 
        we emphasize both academic excellence and character building, preparing students for higher 
        education and meaningful contributions to society.
      </p>

      <p className="text-lg">
        The school offers classes from <strong>V to XII</strong>, covering Science, Commerce, 
        and Humanities streams, with a team of experienced faculty and well-equipped facilities 
        to ensure holistic development of every learner.
      </p>
    </div>
  );
}
