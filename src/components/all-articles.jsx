import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { allArticles } from "../api";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

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
  if (isLoading) return <p>Loading...</p>;
  else
    return (
      <Container maxWidth="lg">
        <p className="sort-by">
          Sort by:
          <Button onClick={() => setSortBy("author")}>Author</Button>
          <Button onClick={() => setSortBy("votes")}>Votes</Button>
          <Button onClick={() => setSortBy("comment_count")}>
            Number of Comments
          </Button>
        </p>
        <Grid container spacing={3}>
          {articles.map((article) => {
            const date = dayjs(article.created_at).format("DD-MM-YYYY");
            return (
              <Grid key="gridd" item xs={12} sm={6} md={4}>
                <Card
                  key={article.article_id}
                  sx={{ maxWidth: 345 }}
                  component={Link}
                  to={`/articles/${article.article_id}`}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={article.article_img_url}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Topic: {article.topic}
                      <br></br>
                      Votes: {article.votes}
                      <br></br>
                      Date Added: {date}
                      <br></br>
                      Comments: {article.comment_count}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
};

export default AllArticles;
