import React from "react";
import { Link } from "react-scroll";
import "../styles/index.css";
import { Link as RouteLink } from "react-router-dom";
import routes from "../routes";

function NavBar() {
  return (
    <div className="navbar">
      <body className="lg:px-16 px-6 flex  justify-end items-center flex-wrap py-4">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
          <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg
              class="fill-current text-white-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />
          <div
            class="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          />
          <nav className="sm:flex justify-end items-center justify-between">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:flex sm:items-center sm:w-auto  md:flex md:items-center md:w-auto">
                About
              </button>
            </Link>
            <div>
              <Link
                activeClass="active"
                // to="/home"
                to="home-big-return"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Home
                </button>
              </Link>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <RouteLink to="/login">Log in</RouteLink>
            </button>
          </nav>
        </div>
      </body>
    </div>
  );
}

export default NavBar;

// import React, { Component } from "react";
// import axios from "axios";

// export default class Header extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: "",
//       isAdmin: false
//     };
//     this.register = this.register.bind(this);
//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//   }

//   handleUsernameInput(value) {
//     this.setState({ username: value });
//   }
//   handlePasswordInput(value) {
//     this.setState({ password: value });
//   }
//   handleFirstnameInput(value) {
//     this.setState({ firstName: value });
//   }
//   handleLastnameInput(value) {
//     this.setState({ lastName: value });
//   }

//   toggleAdmin() {
//     const { isAdmin } = this.state;
//     this.setState({ isAdmin: !isAdmin });
//   }

//   register() {
//     const { firstName, lastName, username, password, isAdmin } = this.state;
//     axios
//       .post("/auth/register", {
//         firstName,
//         lastName,
//         username,
//         password,
//         isAdmin
//       })
//       .then(user => {
//         this.setState({
//           username: "",
//           password: "",
//           firstName: "",
//           lastName: ""
//         });
//         this.props.updateUser(user.data);
//       })
//       .catch(err => {
//         this.setState({
//           username: "",
//           password: "",
//           firstName: "",
//           lastName: ""
//         });
//         alert(err.response.request.response);
//       });
//   }

//   login() {
//     const { username, password } = this.state;
//     axios
//       .post("/auth/login", { username, password })
//       .then(user => {
//         this.props.updateUser(user.data);
//         this.setState({ username: "", password: "" });
//       })
//       .catch(err => alert(err.response.request.response));
//   }

//   logout() {
//     axios
//       .get("/auth/logout")
//       .then(() => {
//         this.props.updateUser({});
//       })
//       .catch(err => console.log(err));
//   }

//   render() {
//     const { username, password } = this.state;
//     const { user } = this.props;
//     return (
//       <div className="Header">
//         <div className="title">Fitness Guru's</div>
//         {user.username ? (
//           <div className="welcomeMessage">
//             <h4>{user.username}, welcome</h4>
//             <button type="submit" onClick={this.logout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="loginContainer">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={e => this.handleUsernameInput(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={e => this.handlePasswordInput(e.target.value)}
//             />
//             <div className="adminCheck">
//               <input
//                 type="checkbox"
//                 id="adminCheckbox"
//                 onChange={() => this.toggleAdmin()}
//               />{" "}
//               <span> Admin </span>
//             </div>
//             <button onClick={this.login}>Log In</button>
//             <button onClick={this.register} id="reg">
//               Register
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
