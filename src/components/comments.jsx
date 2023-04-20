import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { commentsFunc } from "../api";
import dayjs from "dayjs";
import AddComment from "./add-comment";
import { Container } from "@mui/system";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    commentsFunc(article_id).then((data) => {
      setComments(data);
    });
  }, [comments]);

  return (
    <section>
      <h1>COMMENTS</h1>
      <AddComment
        article_id={article_id}
        setComments={setComments}
        key="add-comment"
      />
      <br></br>
      <ul>
        {comments.map((comment) => {
          const date = dayjs(comment.created_at).format("DD-MM-YYYY");

          return (
            <Container>
              <Grid key="gridd" item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 20 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Username: {comment.author}
                    </Typography>

                    <Typography variant="body2" sx={{ fontsize: 16 }}>
                      {comment.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Container>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
