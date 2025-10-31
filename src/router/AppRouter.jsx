import { Routes, Router, Route } from "react-router-dom";
import Index from "../pages/Index/Index";
import Proyectos from "../pages/Proyectos/Proyectos";
import QuienesSomos from "../pages/Quienes_somos/Quienes_somos";
import Fachadas from "../pages/Fachadas/Fachadas";
import Impermeabilizacion from "../pages/Impermeabilizacion/Impermeabilizacion";
import Remodelacion_comercial from "../pages/Remodelacion_comercial/Remodelacion_comercial";
import Remodelacion_residencial from "../pages/Remodelacion_residencial/Remodelacion_residencial";
import ObrasCiviles from "../pages/Obras_civiles/Obras_civiles";
import PrivacyPolicy from "../pages/Politica/Politica";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<h1>login</h1>} />
            <Route path='/' element={<Index />} />
            <Route path='/proyectos' element={<Proyectos />} />
            <Route path='/quienes_somos' element={<QuienesSomos />} />
            <Route path="/fachadas" element={<Fachadas />} />
            <Route path="/impermeabilizacion" element={<Impermeabilizacion />} />
            <Route path="/remodelacion_comercial" element={<Remodelacion_comercial />} />
            <Route path="/remodelacion_residencial" element={<Remodelacion_residencial />} />
            <Route path="/obras_civiles" element={<ObrasCiviles />} />
            <Route path="/politica" element={<PrivacyPolicy />} />
        </Routes>
    )
}