import React from 'react';

// import components
import Header from '../header/Header';
import Footer from '../footer/Footer';

const PageTemplate: React.FC<{}> = ({ children }) => (
    <>
        <Header />

        <main>{children}</main>

        <Footer />
    </>
);

export default PageTemplate;
