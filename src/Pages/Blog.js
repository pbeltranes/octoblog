import logo from "./logo.svg";
import "./App.css";
import { React, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../utils/CodeBlock"
import { useLocation } from "react-router-dom";

function Blog(props) {
  const location = useLocation();
  const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;
  useEffect(() => {});
  return (
    <div>
      <h1>{location}</h1>
      <ReactMarkdown plugins={[gfm]} renderers={{ code: CodeBlock }} />
      <h2>subtitle</h2>
    </div>
  );
}

export default Blog;
