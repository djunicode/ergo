import React from 'react'
import '../css/App.css';

import AddProject from './AddProject';
import RecentProjects from './RecentProjects';
import Navbar from './Navbar';
export default function App() {
    return (
        <div className="app">
            <Navbar />
            <AddProject />
            <RecentProjects />
        </div>
    )
}
