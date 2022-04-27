import styled from 'styled-components';

const breakpoint = 768;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${breakpoint}px) {
    width: 70%;
  }
  margin: 0 auto;
`;

export const FilmStrip = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  --background: rgba(0, 0, 0, 0.35);
  height: 100vh;

  width: 30vw;
  --size: 1.875vw;
  @media (min-width: ${breakpoint}px) {
    width: 4vw;
    --size: 0.25vw;
  }
  background-image: linear-gradient(
      to bottom,
      var(--background) var(--size),
      transparent var(--size)
    ),
    linear-gradient(
      to right,
      var(--background) var(--size),
      transparent var(--size)
    ),
    linear-gradient(
      to bottom,
      var(--background) var(--size),
      transparent var(--size)
    ),
    linear-gradient(
      to right,
      var(--background) var(--size),
      transparent var(--size)
    ),
    linear-gradient(
      to right,
      transparent var(--size),
      var(--background) var(--size)
    );
  background-size: var(--size) calc(var(--size) * 2),
    var(--size) calc(var(--size) * 2), var(--size) calc(var(--size) * 2),
    var(--size) calc(var(--size) * 2), calc(100% - var(--size) * 3) 100%;
  background-repeat: repeat-y;
  background-position: var(--size) 0, top left, calc(100% - var(--size)) 0,
    top right, var(--size) 0;

  color: white;
  margin: 0 auto;
`;
