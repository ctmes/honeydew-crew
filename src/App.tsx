import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

const VideosPage = lazy(() => import("@/components/pages/VideosPage"));
const MembersPage = lazy(() => import("@/components/pages/MembersPage"));
const AboutPage = lazy(() => import("@/components/pages/AboutPage"));
const EventsPage = lazy(() => import("@/components/pages/EventsPage"));

function App() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-[#0f0f0f] flex items-center justify-center"><div className="text-[#9dff00] text-2xl font-bold">Loading...</div></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
