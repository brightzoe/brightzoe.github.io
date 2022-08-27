import React, { type ReactNode } from "react";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  BlogPostProvider,
  useBlogPost,
} from "@docusaurus/theme-common/internal";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import TOC from "@theme/TOC";
import type { Props } from "@theme/BlogPostPage";
import type { BlogSidebar } from "@docusaurus/plugin-content-blog";
import { DiscussionEmbed } from "disqus-react";

type Meta = {
  metadata: Props["content"]["metadata"];
};
function Discussion({ metadata }: Meta): JSX.Element {
  const { title, permalink } = metadata;
  const fmtId = permalink.replace(/^\//, "").replaceAll(/[\s\/]/gi, "-");
  const disqusId = fmtId == "" ? "main" : fmtId;

  return (
    <DiscussionEmbed
      shortname="brightzoe"
      config={{
        url: "https://brightzoe.top" + permalink, //完整网址
        identifier: disqusId, //识别符
        title: title,
      }}
    />
  );
}

function BlogPostPageContent({
  sidebar,
  children,
}: {
  sidebar: BlogSidebar;
  children: ReactNode;
}): JSX.Element {
  const { metadata, toc } = useBlogPost();
  const { nextItem, prevItem, frontMatter } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
      <Discussion metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogPostPage(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
