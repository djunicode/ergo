import React from "react";
import Navbar from "./Navbar/Navbar";
import AddProject from "./AddProject";
import RecentProjects from "./RecentProjects";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <AddProject />
      <RecentProjects />
    </div>
  );
}

export default Dashboard;
