import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";

function App() {
  return (
    <div
      className="min-h-svh dark-bg-diagonal
     flex flex-col"
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
