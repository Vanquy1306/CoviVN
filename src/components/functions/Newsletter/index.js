import React from "react";
import styled from "styled-components";
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import {SideImage} from "./sideimage"

const url = process.env.REACT_APP_MAILCHIMP_URL;
const CustormForm = ({ status, message, onValidated }) => {

  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });


  return (

    <CardContainer>
    <Container>
      <InnerContainer>
        <Header>Subscribe to our newsletter!</Header>
        <Paragraph>
          You will never miss the latest news and highlights about Covid-19 in Vietnam!
        </Paragraph>
        <Form>
          <EmailInput type="email" placeholder="example@email.com" ref={(node) => (email = node)} />
          <SubscribeButton onClick={submit}>Subscribe</SubscribeButton>
        </Form>
      </InnerContainer>
      <div className="mailchimp-alerts">
        {status === "sending" && (
          <div className="mailchimp-submitting" color="white">sending...</div>
        )}
        {status === "error" && (
          <div
            className="mailchimp-error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
          className="mailchimp-success"
          dangerouslySetInnerHTML={{ __html: message }}
          />
          )}
      </div>
    </Container>
<SideImage />
          </CardContainer>
  );
}


export default function MailchimpForm() {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustormForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
  const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
  `;
  
  const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;
  `;
  
  const Header = styled.h1`
    margin: 0;
    color: #01bf71;
    font-weight: 700;
    font-size: 45px;
  `;
  
  
  const Paragraph = styled.p`
    color: #ffffff;
    font-weight: 500;
    font-size: 20px;
  `;
  
  const Form = styled.div`
    display: flex;
    position: relative;
    height: 53px;
    margin-top: 1em;
  `;
  
  const EmailInput = styled.input`
    outline: none;
    border: none;
    background-color: #fff;
    padding-left: 1.5em;
    padding-right: 3em;
    border-radius: 17px;
    font-size: 20px;
    color: #000;
    height: 100%;
  
    &::placeholder {
      color: #272727;
    }
  `;
  
  const SubscribeButton = styled.button`
    position: absolute;
    left: 300px;
    right: 1px;
    top: 0;
    height: 100%;
    border: none;
    outline: none;
    color: #000000;
    background-color: #01bf71;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    padding: 0 10px;
  
  `;
  const CardContainer = styled.div`
  width: 1100px;
  height: 500px;
  display: flex;
  border-radius: 26px;
  position: relative;
  border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  `;
