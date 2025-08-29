import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Subjects from "./pages/Subjects";
import AcademicCalendar from "./pages/AcademicCalendar";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import DownloadForm from "./pages/DownloadForm";
import FeeStructure from "./pages/FeeStructure";
import TeachingStaff from "./pages/TeachingStaff";
import NonTeachingStaff from "./pages/NonTeachingStaff";
import Notices from "./pages/Notices";

// 🔹 Dropdown Menu Component
const NavItem = ({ title, items }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-4 py-2 hover:bg-blue-600 rounded-md">{title}</button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg z-10"
        >
          <ul className="py-2">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

// 🔹 Notice Bar Component
const NoticeBar = () => {
  const [notices, setNotices] = React.useState([]);

  React.useEffect(() => {
    fetch("/notices.json")
      .then((res) => res.json())
      .then((data) => setNotices(data.notices))
      .catch((err) => console.error("Error loading notices:", err));
  }, []);

  return (
    <div className="bg-yellow-300 text-black py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        {notices.map((notice, i) => (
          <span key={i} className="mx-8 font-medium">
            📢 {notice}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      {/* 🔹 Navbar */}
      <header className="bg-blue-700 text-white">
        <div className="flex justify-between items-center px-8 py-4">
          <Link to="/" className="text-xl font-bold">
            Agardih High School (H.S.)
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavItem
              title="Academics"
              items={[
                { name: "Curriculum", link: "/curriculum" },
                { name: "Subjects", link: "/subjects" },
                { name: "Academic Calendar", link: "/academic-calendar" },
              ]}
            />
            <NavItem
              title="Admissions"
              items={[
                { name: "Procedure", link: "/admission-procedure" },
                { name: "Download Form", link: "/download-form" },
                { name: "Fee Structure", link: "/fee-structure" },
              ]}
            />
            <NavItem
              title="Faculty"
              items={[
                { name: "Teaching Staff", link: "/teaching-staff" },
                { name: "Non-teaching Staff", link: "/non-teaching-staff" },
              ]}
            />
            <NavItem
              title="Notices"
              items={[{ name: "View All Notices", link: "/notices" }]}
            />
          </nav>
        </div>
      </header>

      {/* 🔹 Notice Bar */}
      <NoticeBar />

      {/* 🔹 Page Content */}
      <main className="p-8">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/admission-procedure" element={<AdmissionProcedure />} />
          <Route path="/download-form" element={<DownloadForm />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/teaching-staff" element={<TeachingStaff />} />
          <Route path="/non-teaching-staff" element={<NonTeachingStaff />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
      </main>

      {/* 🔹 Footer */}
      <footer className="bg-blue-700 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Agardih High School (H.S.)</p>
      </footer>
    </Router>
  );
}
