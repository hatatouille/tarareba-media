import React from 'react';
import type { FC } from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import type { AboutPageQuery } from '../../types/graphql-types';

interface PageProps {
  data: AboutPageQuery;
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <h1>About {data.site?.siteMetadata?.title ?? '(無題)'}</h1>
    <p>GatsbyJSでできたブログ!</p>
    <Link to="/">Home</Link>
  </Layout>
);
export default Page;

export const query = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;