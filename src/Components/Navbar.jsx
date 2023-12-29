import React from "react";

const Navbar = ({setcatagory}) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg check"
        style={{ backgroundColor: "rgb(169,169,169)", height: "80px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: "25px" }}>
            <span className="badge bg-light text-dark fs-3">NewFav</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <div className="nav-link" onClick={()=>setcatagory("entertainment")} style={{fontSize:'18px' ,fontWeight:'459',marginLeft:'20px'}}>Technology</div>
          </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setcatagory("business")} style={{fontSize:'18px' ,fontWeight:'459' ,marginLeft:'20px'}}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setcatagory("health")} style={{fontSize:'18px' ,fontWeight:'459' ,marginLeft:'20px'}}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setcatagory("sports")} style={{fontSize:'18px' ,fontWeight:'459' ,marginLeft:'20px'}}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={()=>setcatagory("entertainment")} style={{fontSize:'18px' ,fontWeight:'459',marginLeft:'20px'}}>Entertainment</div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
