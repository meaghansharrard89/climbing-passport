import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

// material ui components
import Container from "@mui/material/Container";

function About() {
  return (
    <>
      <Header />
      <NavBar />

      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <br />
        <h1>Welcome to 'Send It!'- Your Personal Climbing Passport</h1>
        <br />
        <p>
          Whether bouldering, sport climbing, or trad climbing, 'Send It!' is
          your go-to companion for tracking, sharing and celebrating your
          climbing adventures.
        </p>
        <p>
          Explore crags and add them to your badge collection to create a unique
          climbing passport to showcase your achievements. If a badge needs to
          be updated or deleted, this can be done with the click of a button.
        </p>
        <br />
        <h3>Let the ascent begin, and climb on.</h3>
      </Container>
    </>
  );
}

export default About;
