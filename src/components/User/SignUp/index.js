import React, {useState} from 'react'
import { FormButton, FormLabel, Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, BtnLink, Alert} from './SignUpElements';
import { signup, isAuthenticated, authenticate } from '../Auth/index'
import { Redirect } from 'react-router-dom';

const SignUp = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false

    });
    const { name, email, password, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();


    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    
    // const showError = () => (
    //     <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
    //         {error}
    //     </div>
    // );

    // const showSuccess = () => (
    //     <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
    //         New account is created. Please Signin
    //     </div>
    // );

    

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">CoviVN</Icon>
                <FormContent>
                    <Form action="#"> 
                    {error && <Alert>{error}</Alert>}
                        <FormH1>Sign up an account</FormH1>
                        <FormLabel htmlFor="for">Name</FormLabel>
                        <FormInput required onChange={handleChange('name')} type="text" className="form-control" value={name}  />
                        <FormLabel htmlFor="for">E-mail</FormLabel>
                        <FormInput required onChange={handleChange('email')} type="email" className="form-control" value={email} />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput required onChange={handleChange('password')} type="password" className="form-control" value={password}  />
                        <FormButton onClick={clickSubmit}>Continue</FormButton>
                        <BtnLink to="/signin">Already have an account? Sign in instead.</BtnLink>
                        {redirectUser()};
                    </Form> 
                </FormContent>
            </FormWrap>
        </Container>
        </>
    );
    



};

export default SignUp