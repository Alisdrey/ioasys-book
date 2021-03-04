import React from 'react';
import { Container, TextAlert } from './style';

export default function Alert({ text, setError }) {

  setTimeout(() => {
    setError(false)
  }, 3000)

  return (
    <>
      <Container>
        <TextAlert>{text}</TextAlert>
      </Container>
    </>
  );
}
