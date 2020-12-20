import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock({ source, language }) {
  console.log(source, language);
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {source}
    </SyntaxHighlighter>
  );
}

CodeBlock.defaultProps = {
  language: "markdown",
};
CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
