import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage, ProjectPage } from "./pages"


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
