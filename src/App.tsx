import React from 'react';
import {
    Route,
    Routes,
    HashRouter as Router
} from 'react-router-dom';
import Book from "./pages/Book";
import Index from "./pages/Index"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/book/:id" element={<Book/>}/>
            </Routes>
        </Router>
    );
}

export default App;
