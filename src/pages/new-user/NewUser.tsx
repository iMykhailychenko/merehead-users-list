import React from 'react';
import { Link } from 'react-router-dom';

// components
import Jumbotron from '../../components/jumbotron/Jumbotron';
import FormComponent from '../../components/form-component/FormComponent';

interface Props {}

const NewUser: React.FC<Props> = () => (
    <>
        <Jumbotron>
            <h1 className="display-4">Create new user! &#128583;</h1>
            <hr className="my-4" />
            <p className="lead mb-4">On this page you can create a new user. Attention! All fields are required.</p>
            <Link to="/" className="btn btn-link pl-0">
                Back to home page
            </Link>
        </Jumbotron>

        <FormComponent values={{ name: '', surname: '', desc: '' }} update={false} />
    </>
);

export default NewUser;
