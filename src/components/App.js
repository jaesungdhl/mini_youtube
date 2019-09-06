// React Module
import React from "react";

// React Router Module
import { BrowserRouter , Route } from "react-router-dom";

// Component Module
    // Root Route Components
    import Navbar from "./RootRoute/Navbar/Navbar";
    import RecommendedVideos from "./RootRoute/ExactRoute/RecommendedVideos";
    // Results Route Components
    import SearchedList from "./ResultsRoute/ExactRoute/SearchedList";

const App = () => {
    return (
        < BrowserRouter >
            < Route path="/" component={ Navbar } />
            < Route path="/" exact component={ RecommendedVideos } />
            < Route path="/results" component={ SearchedList } />
        </ BrowserRouter >
    )
}

export default App;