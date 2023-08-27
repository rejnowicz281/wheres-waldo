import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import MapPlay from "./MapPlay";
import Maps from "./Maps";

function App() {
    return (
        <HashRouter>
            <header className="text-center">
                <Link to="/wheres-waldo/maps">Where&apos;s Waldo?</Link>
            </header>
            <Routes>
                <Route path="/*" element={<Navigate to="/wheres-waldo/maps" />} />
                <Route path="/wheres-waldo/maps" element={<Maps />} />
                <Route path="/wheres-waldo/maps/:id" element={<MapPlay />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
