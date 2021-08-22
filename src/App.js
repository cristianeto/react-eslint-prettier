import React, { useState } from 'react';
import styled from 'styled-components';
import { images } from './helpers/images';

function App() {
  const defaultDarkTheme =
    window.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
  const [isDarkMode, setIsDarkMode] = useState(defaultDarkTheme);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Page light={!isDarkMode}>
      <Container>
        <Heading>
          <H1 light={!isDarkMode}>Dynamic Styling with Styled-Components</H1>
          <P light={!isDarkMode}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            natus at vitae sint qui sapiente impedit rerum commodi fugit ullam
            repudiandae itaque, saepe fuga facere temporibus excepturi dolore
            officia?
          </P>
          <Toogle light={!isDarkMode} onClick={handleToggle}>
            <ThemeImage
              src={images(!isDarkMode ? `./moon.png` : `./sun.png`).default}
            />
          </Toogle>
        </Heading>
      </Container>
    </Page>
  );
}

export default App;

const Container = styled.div`
  padding: 2em;
`;

const Heading = styled.div`
  max-width: 80%;
  margin: auto;
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: ${(props) => (!props.light ? 'papayawhip' : '#000')};
`;

const P = styled.p`
  font-size: 2rem;
  color: ${(props) => (!props.light ? '#eee' : '#333')};
`;

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  background: ${(props) => (props.light ? '#eee' : '#333')};
`;

const ThemeImage = styled.img`
  max-width: 40px;
`;

const Toogle = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s all ease-ease-in-out;
  background: none;
  color: #000;
  position: absolute;
  top: 0;
  right: 0;
  &:hover {
    transition: 0.2s all ease-in-out;
  }
`;
