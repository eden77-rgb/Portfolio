import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { MainPage, ProjectPage } from "./pages"
import { Navbar, ScrollProgress } from "@/components/Layouts/"
import { LanguageProvider } from "./contexts"


function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Navbar />
                <ScrollProgress />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    )
}

export default App
