import React from 'react'
import Navbar from '../../Navbar/Navbar';
import AddProject from '../../components/AddProject'
import RecentProjects from '../../components/RecentProjects'
function Dashboard() {
    return (
        <div>
            <Navbar />
            <AddProject />
            <RecentProjects />
        </div>
    )
}

export default Dashboard
