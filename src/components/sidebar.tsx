import React from 'react';
import type { FC } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import type { SidebarComponentQuery } from '../../types/graphql-types';

export const Sidebar: FC = () => {
    const data = useStaticQuery<SidebarComponentQuery>(graphql`
        query SidebarComponent {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <aside>
            <ul>
                <li>
                    <Link to="/">{data.site?.siteMetadata?.title ?? '(無題)'}</Link>
                </li>
                <li>
                    <Link to="/">{data.site?.siteMetadata?.title ?? '(無題)'}</Link>
                </li>
                <li>
                    <Link to="/">{data.site?.siteMetadata?.title ?? '(無題)'}</Link>
                </li>
            </ul>
        </aside>
    );
};