import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/dashboard">Home</a>
              </li>
              <li>
                <a href="https://github.com/rafaelaandrews">Github</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://github.com/rafaelaandrews">
              Rafaela Andrews
            </a>
            , made with love for a better web
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
