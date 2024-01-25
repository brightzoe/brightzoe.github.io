import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageContent from '../components/HomepageContent';
import {
  useThemeConfig,
  isMultiColumnFooterLinks,
} from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        'hero hero--primary',
        styles.heroBanner,
        'text-gradient bg-gradient-to-r from-purple-500 to-indigo-600',
      )}
    >
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function RelatedBlogs() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { links } = footer;

  return isMultiColumnFooterLinks(links) ? null : (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4 color-primary">Related Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((blog, i) => (
          <div
            onClick={() => window.open(blog.href, '_blank')}
            key={blog.label}
            className="cursor-pointer p-6 rounded-lg shadow-lg flex items-start hover:shadow-xl transition-shadow duration-300 ease-in-out dark:shadow-gray-700/50"
          >
            <div className="text-2xl mr-4">{i % 2 === 0 ? '🌐 ' : '⚡'}</div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                {blog.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className="flex-grow">
        <HomepageContent />
      </main>
      <RelatedBlogs />
    </Layout>
  );
}
