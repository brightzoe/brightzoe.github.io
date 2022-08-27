import React, { ComponentProps } from "react";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import { DocProvider } from "@docusaurus/theme-common/internal";
import DocItemMetadata from "@theme/DocItem/Metadata";
import DocItemLayout from "@theme/DocItem/Layout";
import type DocItemType from "@theme/DocItem";
import type { Props } from "@theme/DocItem";
import { DiscussionEmbed } from "disqus-react";
type Props = ComponentProps<typeof DocItemType>;
type DocProps = Props & {
  content: {
    metadata: {
      disqus: boolean;
    };
  };
};

export default function DocItem(props: DocProps): JSX.Element {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  const MDXComponent = props.content;
  const {
    content: { metadata },
  } = props;
  const { slug, title, description, permalink, disqus } = metadata;
  // console.log("props", props);
  const fmtId = permalink.replace(/^\//, "").replaceAll(/[\s\/]/gi, "-");
  const disqusId = fmtId == "" ? "main" : fmtId;
  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>
        <DiscussionEmbed
          shortname="brightzoe"
          config={{
            url: "https://brightzoe.top" + permalink, //完整网址
            identifier: disqusId, //识别符
            title: title,
          }}
        />
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
