// import "../public/assets/css/styles.css"
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
        </section>
    </header>
    <main>
      <TarjetasSection/>

    </main>
      <Footer/>
    </div>
  );
}

export default App;
