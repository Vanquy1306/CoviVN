import React, {useState} from 'react';
import Newsletter from '../components/functions/Newsletter/index';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styled from "styled-components";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

`;

const NewsletterPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <AppContainer>
      <Newsletter />
    </AppContainer>

    <Footer />
    </>
  );
};

export default NewsletterPage;


