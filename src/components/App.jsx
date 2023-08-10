import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/wheres-waldo/maps">Where&apos;s Waldo?</Link>
            </header>
            <Routes>
                <Route path="/*" element={<Navigate to="/wheres-waldo/maps" />} />
                <Route path="/wheres-waldo/maps" />
                <Route path="/wheres-waldo/maps/:id" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
