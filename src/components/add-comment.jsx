import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { addComment } from "../api";

const AddComment = ({ article_id, setComments }) => {
  const username = "grumpy19";
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.length >= 1) {
      addComment(article_id, newComment, username).then((comment) => {
        setComments((currentComments) => {
          console.log(comment);
          console.log(currentComments);
          return [comment, ...currentComments];
        });
        setNewComment("");
      });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <br></br>
        <TextField
          value={newComment}
          variant="outlined"
          size="small"
          placeholder="Leave a comment..."
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          id="body"
        ></TextField>
        <Button size="large" variant="contained">
          Submit Comment!
        </Button>
      </form>
    </section>
  );
};
export default AddComment;
