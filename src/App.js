import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Boilerplate from "./components/screens/Boilerplate";
import HomePage from "./components/screens/HomePage";
import NotFound from "./components/screens/NotFound";
import MyCourse from "./components/screens/MyCourse";
import CourseDetail from "./components/screens/CourseDetail";
import Landing from "./components/screens/Landing";
import SectionDetailed from "./components/screens/SectionDetailed";
import Instructor from "./components/screens/Instructor";
import Coins from "./components/screens/Coins";

function App() {
    return (
        <>
            <BrowserRouter>
                <Boilerplate>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/coins" element={<Coins />} />
                        <Route path="/my-courses" element={<MyCourse />} />
                        <Route path="/course/:id" element={<CourseDetail />} />
                        <Route
                            path="/course/:id/section/:id"
                            element={<SectionDetailed />}
                        />
                        <Route
                            path="/instructor/:id"
                            element={<Instructor />}
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Boilerplate>
            </BrowserRouter>
        </>
    );
}

export default App;
