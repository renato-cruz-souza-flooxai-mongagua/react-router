import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = () => (
    <main>
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/param/:id" element={<Param />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </main>
);

export default Content;