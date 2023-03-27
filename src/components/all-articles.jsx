import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { allArticles } from "../api";

import theme from "../theme";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [err, setErr] = useState(null);

  const [sortBy, setSortBy] = useState("created_at");

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    allArticles(topic, sortBy)
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      });
  }, [topic, sortBy]);

  if (err) {
    return (
      <section>
        <p> 404 - article not found</p>
      </section>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography>All Articles</Typography>
    </Container>
  );
};

export default AllArticles;
