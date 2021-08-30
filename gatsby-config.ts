import { resolve } from 'path';
import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Tarra Reba',
        author: 'hatatouille',
        description: 'Example blog using GatsbyJS',
        email: 'hatatouille@example.com'
      },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-graphql-codegen',
            options: {
              fileName: 'types/graphql-types.d.ts',
              documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'articles',
              path: resolve(__dirname, 'articles')
            }
        },
        'gatsby-transformer-remark'
    ]
};
export default config;