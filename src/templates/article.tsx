import React from 'react';
import type { FC } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import type { ArticlePageContext } from '../../gatsby-node';
import type { ArticleTemplateQuery } from '../../types/graphql-types';

interface PageProps {
  data: ArticleTemplateQuery;
  pageContext: ArticlePageContext;
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <h1 className="article-title">
      {data.markdownRemark?.frontmatter?.title ?? '(無題)'}
    </h1>
    {data.markdownRemark?.frontmatter?.date && (
      <p className="article-date">
        {data.markdownRemark.frontmatter.date} 投稿
      </p>
    )}
    <hr />
    <div
      className="article-body"
      dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html ?? '' }}
    />
  </Layout>
);
export default Page;

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD", locale: "ja-JP")
      }
    }
  }
`;