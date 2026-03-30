import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { MainPage, ProjectPage } from "./pages"


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
