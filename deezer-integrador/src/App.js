// import "../public/assets/css/styles.css"
import Formulario from "./components/Formulario/Formulario"
import TarjetasSection from "./components/TarjetasSection/TarjetasSection"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className = "wrapper">
      <header>
        <h1>MusicCenter</h1>
        <section>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <Formulario/>
        </section>
    </header>
    <main>
      <TarjetasSection/>
      <Footer/>
    </main>
    </div>
  );
}

export default App;
