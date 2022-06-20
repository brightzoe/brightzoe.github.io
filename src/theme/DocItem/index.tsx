import React, { ComponentProps } from "react";
import DocItem from "@theme-original/DocItem";
import type DocItemType from "@theme/DocItem";
import { DiscussionEmbed } from "disqus-react";

type Props = ComponentProps<typeof DocItemType>;
type DocProps = Props & {
  content: {
    metadata: {
      disqus: boolean;
    };
  };
};

export default function DocItemWrapper(props: DocProps): JSX.Element {
  const {
    content: { metadata },
  } = props;
  const { slug, title, description, permalink, disqus } = metadata;
  // console.log("props", props);
  const fmtId = permalink.replace(/^\//, "").replaceAll(/[\s\/]/gi, "-");
  const disqusId = fmtId == "" ? "main" : fmtId;
  return (
    <>
      <DocItem {...props} />
      {disqus && (
        <DiscussionEmbed
          shortname="brightzoe"
          config={{
            url: "https://brightzoe.top" + permalink, //完整网址
            identifier: disqusId, //识别符
            title: title,
          }}
        />
      )}
    </>
  );
}
