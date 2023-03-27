import "./App.css";
import AllArticles from "./components/all-articles";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import TopicsNav from "./components/topics-nav";
import SingleArticle from "./components/single-article";

function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <TopicsNav />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<AllArticles />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
          <Route path="/topics/:topic" element={<AllArticles />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
