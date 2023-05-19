import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Library, LibraryOne, LibraryTwo, LibraryThree } from "./pages/Library";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import AlbumSongs from "./components/AlbumScreen/AlbumSongs";
import TrendingInsideCustom from "./components/TrendingInsideCustom/TrendingInsideCustom";
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Library/Library1" element={<LibraryOne />} />
          <Route path="/Library/Library2" element={<LibraryTwo />} />
          <Route path="/Library/Library3" element={<LibraryThree />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/events1" element={<EventsOne />} />
          <Route path="/events/events2" element={<EventsTwo />} />
          <Route path="/support" element={<Support />} />
          <Route path="/albumSongs" element={<AlbumSongs />} />
          <Route path="/trendingInside" element={<TrendingInsideCustom />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
