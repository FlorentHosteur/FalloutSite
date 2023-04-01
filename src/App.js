import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="https://fallout.s3.hosteur.io/sites/Fallout-final-logo-2014-inv.png" alt="Fallout" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/fallout.metal.band">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
            <li>
              <a href="https://www.youtube.com/">Youtube</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Titre de la page</h1>
          <p>Description du groupe de musique</p>
        </div>
      </section>
      <section className="two-columns">
        <div className="column">
          <img src="https://fallout.s3.hosteur.io/sites/Photo-gallery-6.jpg" alt="Image 1" />
          <p>Texte explicatif pour l'image 1</p>
        </div>
        <div className="column">
          <img src="https://fallout.s3.hosteur.io/sites/singer3.jpg" alt="Image 2" />
          <p>Texte explicatif pour l'image 2</p>
        </div>
      </section>
      <section className="three-rows">
        <div className="row">
          <img src="https://fallout.s3.hosteur.io/sites/Photo-gallery-1.jpg" alt="Image 3" />
        </div>
        <div className="row">
          <img src="https://fallout.s3.hosteur.io/sites/Photo-gallery-3.jpg" alt="Image 4" />
        </div>
        <div className="row">
          <img src="https://fallout.s3.hosteur.io/sites/Photo-gallery-2.jpg" alt="Image 5" />
        </div>
      </section>
      <footer className="footer">
        <nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
            <li>
              <a href="https://www.youtube.com/">Youtube</a>
            </li>
            <li>
              <a href="mailto:infos@fallout-band.com">Contact</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;