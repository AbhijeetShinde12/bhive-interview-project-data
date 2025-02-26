import Header from "./components/Header/header";
import "./App.scss";
import Home from "./pages/home";
import Footer from "./components/Footer/footer";
import { useMobileView } from "./hooks/useMobileView";
function App() {
  const isMobile = useMobileView();
  return (
    <div className={`main-container ${isMobile ? "mobile-view" : ""}`}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
