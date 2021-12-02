import React, {useState} from 'react'
import { FormButton, FormLabel, Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput,TextLink, Alert } from './SigninElements';
import { signin, authenticate, isAuthenticated } from '../Auth';
import {  Redirect  } from 'react-router-dom';

const SignIn = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    });
    const { email, password, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();


    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signin({ email, password }).then(data => {
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
            if (user && user.role === 0) {
                return <Redirect to="/dashboard" />;
            } 
        }
        if (isAuthenticated()) {
            return <Redirect to="/dashboard" />;
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
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel >Email</FormLabel>
                        <FormInput required onChange={handleChange('email')} type="email" className="form-control" value={email}  />
                        <FormLabel >Password</FormLabel>
                        <FormInput required onChange={handleChange('password')} type="password" className="form-control" value={password} />
                        <FormButton onClick={clickSubmit} >Continue</FormButton>
                        <TextLink to="/signup">Don't have an account? Sign up now!</TextLink>
                    </Form> 
                </FormContent>
            </FormWrap>
        </Container>
        {redirectUser()}
        </>
    )
}

export default SignIn