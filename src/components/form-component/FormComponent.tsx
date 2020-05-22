import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postUser } from '../../redux/postUser/postUserOperations';
import { putUser } from '../../redux/putUser/putUserOperations';
import IState from '../../redux/rootState';

interface IValues {
    name: string;
    surname: string;
    desc: string;
}

interface Props {
    values: IValues;
    id?: number;
    update: boolean;
}

interface Errors {
    name?: string;
    surname?: string;
    desc?: string;
}

const FormComponent: React.FC<Props> = ({ values, id, update }) => {
    const loadingPost = useSelector((state: IState) => state.postUser.success);
    const loadingPut = useSelector((state: IState) => state.putUser.success);
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={values}
            validate={(values: IValues): Errors => {
                const errors: Errors = {};
                if (!values.name) errors.name = 'This is a required field';
                if (!values.surname) errors.surname = 'This is a required field';
                if (!values.desc) errors.desc = 'This is a required field';

                return errors;
            }}
            onSubmit={({ name, surname, desc }, actions) => {
                if (update) {
                    putUser(dispatch, id!, name, surname, desc);
                    // method resetForm will return initial props value, so this may confuse users
                    actions.setValues({ name, surname, desc });
                } else {
                    postUser(dispatch, name, surname, desc);
                    actions.resetForm();
                }
            }}
        >
            {() => (
                <Form className="my-4">
                    {loadingPost && <p className="alert alert-primary">User created successfully!</p>}
                    {loadingPut && <p className="alert alert-primary">User updated successfully!</p>}

                    <div className="input-wrp">
                        <Field className="form-control my-4" type="text" name="name" placeholder="User name ..." />
                        <ErrorMessage name="name" render={(msg) => <span className="form-err">{msg}</span>} />
                    </div>

                    <div className="input-wrp">
                        <Field
                            className="form-control my-4"
                            type="text"
                            name="surname"
                            placeholder="User surname ..."
                        />
                        <ErrorMessage name="surname" render={(msg) => <span className="form-err">{msg}</span>} />
                    </div>

                    <div className="input-wrp">
                        <Field
                            as="textarea"
                            name="desc"
                            className="form-control my-4"
                            rows={5}
                            cols={45}
                            placeholder="Enter your text ..."
                        />
                        <ErrorMessage name="desc" render={(msg) => <span className="form-err">{msg}</span>} />
                    </div>

                    <button className="btn btn-info mb-4 mt-2 p-3" type="submit">
                        {update ? 'Update user information' : 'Create new user'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormComponent;
