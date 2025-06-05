import './index.css';

function App() {
  return (
    <div>
      <header className="header">
        <div className="header-greeting">
          <p className="greeting-text">¡Hola! Es un gusto tenerte por aquí.</p>
          <img src="/icons/gato.png" alt="Gatito saludando" className="cat-greeting-icon" />
        </div>
        <nav>
          <a href="#sobre-mi-creativo">Sobre mí</a>
          <a href="#projects-section">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#contacto">Contacto</a>
          <a href="/documents/CV 25.pdf" target="_blank"                    
            rel="noopener noreferrer"           
            className="cv-link">Mi CV</a>
        </nav>
      </header>

      <main>
        <section id="sobre-mi-creativo" className="creative-about-section">
          <h2>Sobre mí</h2>
          <div className="about-grid">
            <div className="about-card intro-card">
              <div className='intro-content'>
                <img src="/icons/foto.jpg" alt="me" className="intro-photo circular"/>
                <h3 >Hola!, mi nombre es</h3>
                <p>Karen Pineda</p>
              </div>
            </div>
            <div className="about-card">
              <p>Soy una apasionada estudiante de desarrollo web con un enfoque en la creación de interfaces modernas y funcionales. Me encanta transformar ideas en aplicaciones web estéticamente atractivas y altamente utilizables. Mi objetivo es construir soluciones digitales que no solo se vean bien, sino que también ofrezcan una experiencia de usuario excepcional.</p>
            </div>
            <div className="about-card birthday-card">
              <h3>Edad</h3>
              <p>20 años</p>
              <img src="/icons/pastel.png" alt="cake" className="cake"/>
            </div>
            <div className="about-card favorites-card">
              <h3>Mis cosas favoritas</h3>
              <ul>
                <li>Desarrollar interfaces modernas y funcionales.</li>
                <li>Aprender nuevas tecnologías.</li>
                <li>Dar color y diseño a todo</li>
                <li>Comer pasta :]</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects-section">
          <h2 class="projects-title">Proyectos</h2>
          <div className="projects-grid">
            <div className="project-card">
            <h3 class="project-title">Dibujo con CSS</h3>
            <p class="project-description">Dibujo realizado con CSS</p>
            <a class="link" href="https://devng.online/231132/lab4/">Ver proyecto</a>
            </div>
          <div className="project-card">
            <h3 class="project-title">Juego de memoria</h3>
            <p class="project-description">Memoria bajo el mar</p>
            <a class="link" href="https://devng.online/231132/lab7/">Ver proyecto</a>
          </div>
          <div className="project-card">
            <h3 class="project-title">Web Chat</h3>
            <p class="project-description">Interfaz de un chat</p>
            <a class="link" href="https://devng.online/231132/lab5/">Ver proyecto</a>
          </div>
          <div className="project-card">
            <h3 class="project-title">Calculadora</h3>
            <p class="project-description">Calculadora especial que nunca antes habías visto</p>
            <a class="link" href="https://devng.online/231132/proyecto1/">Ver proyecto</a>
          </div>
        </div>
        </section>

        <section id="tecnologias">
  <h2>Tecnologías</h2>
  <div className="skills-section">
    <div className="skills-grid">
      <div className="skill">
        <img src="/icons/html.png" alt="HTML" />
        <p>HTML</p>
      </div>
      <div className="skill">
        <img src="/icons/css.png" alt="CSS" />
        <p>CSS</p>
      </div>
      <div className="skill">
        <img src="/icons/js.png" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="skill">
        <img src="/icons/vite.png" alt="Vite" />
        <p>Vite</p>
      </div>
      <div className="skill">
        <img src="/icons/vue.png" alt="Vue.js" />
        <p>Vue.js</p>
      </div>
      <div className="skill">
        <img src="/icons/node.png" alt="Node.js" />
        <p>Node.js</p>
      </div>
      <div className="skill">
        <img src="/icons/docker.png" alt="Docker" />
        <p>Docker</p>
      </div>
      <div className="skill">
        <img src="/icons/postgresql.png" alt="PostgreSQL" />
        <p>PostgreSQL</p>
      </div>
      <div className="skill">
        <img src="/icons/github.png" alt="GitHub" />
        <p>GitHub</p>
      </div>
      <div className="skill">
        <img src="/icons/react.png" alt="React" />
        <p>React</p>
      </div>
    </div>
  </div>
</section>


        <section id="contacto" className='contacto-especial'>
          <h2>¡Contáctame!</h2>
          <div className="contacto-cards">
          <div className="card">
            <div className="icon phone-icon"></div>
            <p><strong>Teléfono</strong><br /> +3412 2318</p>
          </div>
          <div className="card">
            <div className="icon mail-icon"></div>
            <p><strong>Correo</strong><br /> danielapineda.0520@gmail.com</p>
          </div>
        </div>
        </section>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} Karen Pineda. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;