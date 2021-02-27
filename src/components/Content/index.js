import marked from "marked";
import React from "react";

const Content = ({ markdown = "" }) => (
  <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
);

export default Content;
