import "./App.css";
import AllArticles from "./components/all-articles";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<AllArticles />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
