import React from 'react';
import type { FC } from 'react';
import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../styles/index.scss';

export const Layout: FC = ({ children }) => (
  <div className="wrapper">
    <Sidebar />
    <div className="main">
        <Header />
        <div className="content">{children}</div>
        <Footer />
    </div>
  </div>
);