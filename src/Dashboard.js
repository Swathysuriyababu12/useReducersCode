import React from "react";
import Card from "./Card";

function Dashboard() {
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
        <Card title="Card 1" value="40,000"/>
        <Card title="Card 2" value="70,000"/>
        <Card title="Card 3" value="10,000"/>
        <Card title="Card 4" value="80,000"/>
      </div>
    </div>
  );
}

export default Dashboard;
