import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import Button from "@mui/material/Button";
import AllArticles from "./all-articles";

const TopicsNav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics);
    });
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            sx={{
              display: { textAlign: "center" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <FilterListOutlinedIcon
              fontSize="large"
              key="filter-icon"
            ></FilterListOutlinedIcon>
            <Button
              key="all-articles"
              size="large"
              color="inherit"
              onClick={() => {}}
              variant="outlined"
              component={Link}
              to={"/"}
            >
              ALL ARTICLES
            </Button>
            {topics.map((topic) => (
              <Button
                key="topic"
                size="large"
                color="inherit"
                onClick={() => {
                  <AllArticles />;
                }}
                variant="outlined"
                component={Link}
                to={`/topics/${topic.slug}`}
              >
                {topic.slug}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopicsNav;
