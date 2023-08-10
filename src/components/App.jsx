import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <nav className="text-center">
                <Link to="/wheres-waldo/maps">Where&apos;s Waldo?</Link>
            </nav>
            <Routes>
                <Route path="/*" element={<Navigate to="/wheres-waldo/maps" />} />
                <Route path="/wheres-waldo/maps" />
                <Route path="/wheres-waldo/maps/:id" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
