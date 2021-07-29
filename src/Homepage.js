import React from "react";
import "./Homepage.css";
import HomepageMainContent from "./HomepageMainContent";

export default function Homepage() {
  return (
    <div>
      <div className="container-fullwidth">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand icon" href="/">
            Clinical Nutrition Calc
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav subpages">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Calculators
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Food Analysis
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="hero">
        <hi>Hello There</hi>
      </div>
      <HomepageMainContent />
    </div>
  );
}
