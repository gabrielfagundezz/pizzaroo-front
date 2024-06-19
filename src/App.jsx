import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./paginas/Home";
import Pedido from "./paginas/Pedido";
import Pagina2 from "./paginas/Pagina2";
import Pagina3 from "./paginas/Pagina3";
import Pagina4 from "./paginas/Pagina4";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />

                <Route path="/pedido" element={<Layout><Pedido /></Layout>} />

                <Route path="/pagina2" element={<Layout><Pagina2 /></Layout>} />
                <Route path="/pagina3" element={<Layout><Pagina3 /></Layout>} />
                <Route path="/pagina4" element={<Layout><Pagina4 /></Layout>} />
            </Routes>
        </>
    );
}

export default App;