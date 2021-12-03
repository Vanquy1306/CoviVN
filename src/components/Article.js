import React from 'react'
import styled from "styled-components";
import moment from 'moment'
import 'moment/locale/vi'
moment.locale('vi')

function Article({ article }) {
  const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1)
  }
  return (
    <CardContainer>
        <Container >
      <Link className="flex" href={article.link}  target="_blank" rel="noreferrer">
        <Image src={article.image} alt="" />

        <Text>
        <h3 className="mb-4 font-bold text-xl hover:text-pink-800 text-black dark:text-gray-300">
            {article.title}
          </h3>
          <p className="mb-4 font-bold text-xl hover:text-pink-800 text-black dark:text-gray-300">
          {article.description}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {capitalize(moment(article.date).format('LLLL')) + ' (GMT+7)'}
          </p>
          <Button className="button" hover="green" >Read more</Button>
          </Text>
          </Link>

        </Container>
        </CardContainer>
  )
  
}

export default Article
  const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
  `;
  const CardContainer = styled.div`
  width: auto;
  padding: 10px;
  height: auto;
  display: flex;
  border-radius: 26px;
  position: relative;
  border: 2px solid #fff;
  border-color: gray;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  margin: 25px;
  `; 
    const Link = styled.a`
    color: black;
    background-color: transparent;
    text-decoration: none;
  `;
  const Text = styled.p`
  text-align: center;

  `;
const Image = styled.img`
width: 300px;
height: 200px;
display: block;
margin-left: auto;
margin-right: auto;`;
const Button = styled.button`
border: none;
text-decoration:underline;
background-color: rgba(255, 255, 255, 0.2);
transition-duration: 0.4s;
cursor: pointer;
`;