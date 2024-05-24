import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutUs } from "../pages/AboutUs"

export const RouterMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
        </Routes>
    )
}