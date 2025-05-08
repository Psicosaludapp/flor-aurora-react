import React from "react";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="FlorAurora Salud" className="logo" />
        <h1>FlorAurora Salud</h1>
        <p className="tagline">Cuidamos el bienestar de las personas, desde la raíz</p>
      </header>
      <main>
        <section>
          <h2>¿Qué es FlorAurora?</h2>
          <p>Una plataforma de salud integral para agendar consultas con profesionales.</p>
        </section>
        <section>
          <h2>Contacto</h2>
          <form action="https://formspree.io/f/movdwnve" method="POST">
            <input type="text" name="nombre" placeholder="Tu nombre" required /><br />
            <input type="email" name="correo" placeholder="Tu correo" required /><br />
            <textarea name="mensaje" placeholder="Tu mensaje" required></textarea><br />
            <button type="submit">Enviar mensaje</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
