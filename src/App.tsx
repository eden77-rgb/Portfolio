import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { MainPage, ProjectPage } from "./pages"
import Navbar from "@/components/Layouts/Navbar"
import ScrollProgress from "@/components/Layouts/ScrollProgress"


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ScrollProgress />  

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
