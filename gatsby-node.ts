import { resolve } from 'path';
import type { GatsbyNode } from 'gatsby';
import type { CreatePagesQuery } from 'graphql-types';

export interface ArticlePageContext {
  slug: string;
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const data = await graphql<CreatePagesQuery>(`
    query CreatePages {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.data?.allMarkdownRemark.nodes.forEach(
    (node: CreatePagesQuery['allMarkdownRemark']['nodes'][0]) => {
      const slug = node.frontmatter?.slug;
      if (slug) {
        actions.createPage({
          path: slug,
          component: resolve(__dirname, 'src', 'templates', 'article.tsx'),
          context: { slug }
        });
      }
    }
  );
};