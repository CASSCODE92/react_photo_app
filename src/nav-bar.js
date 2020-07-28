import React from "react";
import ReactDom from "react-dom";
import './styles.css';

// navigation bar set as a list
ReactDom.render(
<ul className = "navBar">
            <li className = "navList"><a href = "home.js">HOME</a></li>
            <li className = "navList"><a href = "profiles.js">PROFILES</a></li>
            <li className = "navList"><a href = "bookmarks.js">BOOKMARKS</a></li>
            <li className = "Login"><a href = "log_in.js">LOGIN</a></li>
</ul>,

// https://stackoverflow.com/questions/60575870/how-to-change-login-button-to-logout-button-in-react

class Login {
    render() {
        const { loggedIn } = this.state;
      
        if (loggedIn) {
          return (
            <div className="LOGIN">
              <button>Logout</button>
            </div>
          );
        }
      
        return (
          <a href='https://casscode92.github.io/react_photo_app/'>
            <button>Login</button>
          </a>
        );
      }


}



,document.getElementById("root")

);