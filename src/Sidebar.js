import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./context/userContext";

function Sidebar() {
  let userData = useContext(UserContext)
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
          {userData.username}
        </div>
      </a>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link class="nav-link" to={"/portal/dashbaord/"}>
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <li class="nav-item">
        <Link class="nav-link" to={"/portal/users"}>
          <i class="fas fa-fw fa-table"></i>
          <span>Users</span>
        </Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to={"/portal/products"}>
          <i class="fas fa-fw fa-table"></i>
          <span>Products</span>
        </Link>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />

      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <div class="sidebar-card d-none d-lg-flex">
        <img
          class="sidebar-card-illustration mb-2"
          src="img/undraw_rocket.svg"
          alt="..."
        />
        <p class="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          class="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
}

export default Sidebar;
