import React from "react";
import DocItem from "@theme-original/DocItem";
import { DiscussionEmbed } from "disqus-react";

export default function DocItemWrapper(props) {
  const {
    content: { metadata },
  } = props;
  const { slug, title, description, nextItem, prevItem, permalink } = metadata;
  // console.log("props", props);
  const fmtId = permalink.replace(/^\//, "").replaceAll(/[\s\/]/gi, "-");
  const disqusId = fmtId == "" ? "main" : fmtId;
  return (
    <>
      <DocItem {...props} />
      <DiscussionEmbed
        shortname="brightzoe"
        config={{
          url: "https://brightzoe.top" + permalink, //完整网址
          identifier: disqusId, //识别符
          title: title,
        }}
      />
    </>
  );
}
