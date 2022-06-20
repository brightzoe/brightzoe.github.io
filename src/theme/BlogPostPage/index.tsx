import React from "react";
import clsx from "clsx";
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import TOC from "@theme/TOC";
import type { Props } from "@theme/BlogPostPage";
import { DiscussionEmbed } from "disqus-react";

type Meta = {
  metadata: Props["content"]["metadata"];
};
function Discussion({ metadata }: Meta): JSX.Element {
  const { title, description, date, tags, permalink } = metadata;
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
function BlogPostPageMetadata(props: Props): JSX.Element {
  const { content: BlogPostContents } = props;
  const { assets, metadata } = BlogPostContents;
  const { title, description, date, tags, authors, frontMatter } = metadata;
  const { keywords } = frontMatter;
  const image = assets.image ?? frontMatter.image;

  return (
    <PageMetadata title={title} description={description} keywords={keywords} image={image}>
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />
      {/* TODO double check those article meta array syntaxes, see https://ogp.me/#array */}
      {authors.some((author) => author.url) && (
        <meta
          property="article:author"
          content={authors
            .map((author) => author.url)
            .filter(Boolean)
            .join(",")}
        />
      )}
      {tags.length > 0 && <meta property="article:tag" content={tags.map((tag) => tag.label).join(",")} />}
    </PageMetadata>
  );
}

function BlogPostPageContent(props: Props): JSX.Element {
  const { content: BlogPostContents, sidebar } = props;
  const { assets, metadata } = BlogPostContents;
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
        !hideTableOfContents && BlogPostContents.toc && BlogPostContents.toc.length > 0 ? (
          <TOC toc={BlogPostContents.toc} minHeadingLevel={tocMinHeadingLevel} maxHeadingLevel={tocMaxHeadingLevel} />
        ) : undefined
      }
    >
      <BlogPostItem frontMatter={frontMatter} assets={assets} metadata={metadata} isBlogPostPage>
        <BlogPostContents />
      </BlogPostItem>

      {(nextItem || prevItem) && <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />}
      <Discussion metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogPostPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogPostPage)}>
      <BlogPostPageMetadata {...props} />
      <BlogPostPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
