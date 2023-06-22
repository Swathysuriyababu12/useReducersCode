import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./css/sb-admin-2.min.css";
import Dashboard from "./Dashboard";
import Users from "./Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Login from "./Login";
import Portal from "./Portal";
import Createuser from "./Createuser";
import Userview from "./Userview";
import ProductCreate from "./ProductCreate";
import ProductView from "./ProductView";
import ProductEdit from "./ProductEdit";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div id="wrapper">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/portal" element={<Portal />}>
              <Route path="dashbaord" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="create-product" element={<ProductCreate />} />
              <Route path="create-user" element={<Createuser />} />
              <Route path="user/view/:id" element={<Userview />} />
              <Route path="product/view/:id" element={<ProductView />} />
              <Route path="product/edit/:id" element={<ProductEdit />} />
            </Route>
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
