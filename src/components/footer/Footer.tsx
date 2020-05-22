import React from 'react';

interface Props {}

const Footer: React.FC<Props> = () => (
    <footer className="alert alert-secondary mx-0 my-4 py-4">
        <span className="">Also visit my: </span> 
        <a className="link text-center pl-3" href="https://github.com/iMykhailychenko?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="link text-center pl-3" href="https://ihor-mykhailychenko.netlify.app/" target="_blank" rel="noopener noreferrer">Resume page</a>
    </footer>
);

export default Footer;
