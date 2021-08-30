import React from 'react';
import type { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/layout';
import type { IndexPageQuery } from '../../types/graphql-types';

interface PageProps {
  data: IndexPageQuery;
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <div className="article-list">
      {data.allMarkdownRemark.edges.map(edge => {
        if (!edge.node.frontmatter?.slug) return null;

        const slug = edge.node.frontmatter.slug;

        return (
          <>
            <Link key={slug} className="article-list-item" to={slug}>
              {edge.node.frontmatter.date && (
                <p className="article-list-item-date">
                  {edge.node.frontmatter.date}
                </p>
              )}
              <h1>{edge.node.frontmatter.title ?? '(無題)'}</h1>
              {edge.node.excerpt && (
                <p className="article-list-item-excerpt">{edge.node.excerpt}</p>
              )}
            </Link>
            <hr />
          </>
        );
      })}
    </div>
  </Layout>
);
export default Page;

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "YYYY/MM/DD", locale: "ja-JP")
            slug
            title
          }
        }
      }
    }
  }
`;