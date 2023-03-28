import { useState, useEffect } from "react";
import { singleArticle } from "../api";
import { useParams } from "react-router-dom";
import Comments from "./comments";
import dayjs from "dayjs";
import { Container } from "@mui/material";

// import Votes from "./change-vote";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    singleArticle(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      });
  }, []);

  const date = dayjs(article.created_at).format("DD-MM-YYYY");

  if (err) {
    return (
      <section>
        <p> 404 - article not found</p>
      </section>
    );
  }

  if (isLoading) return <p>Loading...</p>;
  else
    return (
      <section className="article-layout">
        <h1>{article.title}</h1>
        <br></br>
        <br></br>
        <img className="image" src={article.article_img_url} alt=""></img>

        <br></br>
        <br></br>
        <h2>Date: {date}</h2>
        <h2>Author: {article.author}</h2>

        <section className="article">{article.body}</section>

        <br></br>
        {/* <Votes votes={article.votes} article_id={article_id} /> */}
        <br></br>

        {/* <Comments /> */}
      </section>
    );
};
export default SingleArticle;
