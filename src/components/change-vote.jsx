import { useState } from "react";
import { changeVote } from "../api";
import { Button } from "@mui/material";

const Votes = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const incVote = (votes) => {
    setVoteChange((currChange) => currChange + votes);

    changeVote(article_id, votes);
  };

  const decVote = (votes) => {
    setVoteChange((currChange) => currChange - votes);

    changeVote(article_id, -votes);
  };
  return (
    <section>
      <h2>{votes + voteChange}votes</h2>
      <Button
        variant="contained"
        disabled={voteChange === 1}
        onClick={() => incVote(1)}
      >
        Upvote!
      </Button>
      <Button
        variant="contained"
        disabled={voteChange === -1}
        onClick={() => decVote(1)}
      >
        Downvote!
      </Button>
    </section>
  );
};
export default Votes;
