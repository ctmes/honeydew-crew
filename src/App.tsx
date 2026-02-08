import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

const VideosPage = lazy(() => import("@/components/pages/VideosPage"));
const MembersPage = lazy(() => import("@/components/pages/MembersPage"));
const AboutPage = lazy(() => import("@/components/pages/AboutPage"));
const EventsPage = lazy(() => import("@/components/pages/EventsPage"));
const GalleryPage = lazy(() => import("@/components/pages/GalleryPage"));

function App() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-background flex items-center justify-center"><div className="text-primary text-2xl font-black uppercase tracking-tighter">Loading...</div></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
