import { LanguageProvider } from "./components/context/LanguajeContext";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <LanguageProvider>
        <Inicio />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
