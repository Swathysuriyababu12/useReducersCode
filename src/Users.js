import React, { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import UserContext from "./context/userContext";
import { useReducer } from "react";
import { crudInitialState } from "./reducers/user-reducer";
import  userReducer  from "./reducers/user-reducer";
import axios from "axios";
import { useEffect } from "react";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  let userData = useContext(UserContext)

  searchParams.forEach((value, key) => {
    console.log(key);
    console.log(value);
  });
  const [state, dispatch] = useReducer(userReducer, crudInitialState);


let getData = async () => {
  const users=await axios.get(`https://64928bd0428c3d2035d03bee.mockapi.io/users`);
  console.log(users)
  dispatch({ type: "SET-USER", payload:users.data});
}


useEffect(() => {

    getData()
  
}, []);



console.log(state.state)
  const peoples = [
    ...state.state
  ];

  let search = () => {
    setSearchParams("city=newyork&country=america")
  }

  
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1> 
        <Link
          to={"/portal/create-user"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      - {userData.username}
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <input type="text" className="form-control" />
        <button onClick={search} className="btn btn-warning">Search</button>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {peoples.map((people) => {
                  return (
                    <tr>
                      <td>{people.name}</td>
                      <td>{people.email}</td>
                      <td>{people.mobile}</td>
                      <td>{people.country}</td>
                      <td>{people.state}</td>
                      <td>{people.city}</td>
                      <td>
                        <Link
                          to={`/user/view/${people.id}`}
                          className="btn btn-info btn-sm mr-2"
                        >
                          View
                        </Link>
                        <button className="btn btn-primary btn-sm mr-2">
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm mr-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
