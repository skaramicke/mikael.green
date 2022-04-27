import styled from 'styled-components'

const breakpoint = 768

const eoSide = 28
const eoConstant = eoSide / 53.9
const eoContainerWidth = eoConstant * 53.9
const eoContainerHeight = eoConstant * 66.6
const eoPhotoWidth = eoConstant * 46
const eoPhotoHeight = eoConstant * 47
const eoPhotoBorderThickness = 0.075
const eoPolaroidPatternScale = 0.04

const ccSide = 90
const ccConstant = ccSide / 53.9
const ccContainerWidth = ccConstant * 53.9
const ccContainerHeight = ccConstant * 66.6
const ccPhotoWidth = ccConstant * 46
const ccPhotoHeight = ccConstant * 47
const ccPhotoBorderThickness = 0.075
const ccPolaroidPatternScale = 0.04

const Marker = styled.div`
  position: relative;
  top: 2.5vw;
  width: 0;
  height: 0;
  border-top: 0.5vw solid transparent;
  border-left: 1vw solid #fff8;
  border-bottom: 0.5vw solid transparent;
  display: none;
  @media (min-width: ${breakpoint}px) {
    display: block;
  }
  background: transparent; // rgba(0, 0, 0, 0.35);
`

export const MarkerLeft = styled(Marker)`
  margin: 0 0 0 auto;
  right: -1vw;
`

export const MarkerRight = styled(Marker)`
  left: -1vw;
  transform: rotate(180deg);
`

export const Polaroid = styled.div`
  background: #eee;
  border-radius: 0.2vw;
  box-shadow: 0.2vw 0.2vw 0.2vw 0.1vw #0004,
    inset 0.15vw 0.15vw 0.2vw 0.2vw #fff;
  margin: 2vw;
  width: ${ccContainerWidth}vw;
  height: ${ccContainerHeight}vw;
  align-self: center;
  @media (min-width: ${breakpoint}px) {
    &:nth-child(odd) {
      align-self: flex-start;
    }
    &:nth-child(even) {
      align-self: flex-end;
    }
    margin-bottom: -${eoContainerHeight * 0.5}vw;
    width: ${eoContainerWidth}vw;
    height: ${eoContainerHeight}vw;
  }
  background-color: #f0f0f0;
  opacity: 1;
  background-image: linear-gradient(
      30deg,
      #ededed 12%,
      transparent 12.5%,
      transparent 87%,
      #ededed 87.5%,
      #ededed
    ),
    linear-gradient(
      150deg,
      #ededed 12%,
      transparent 12.5%,
      transparent 87%,
      #ededed 87.5%,
      #ededed
    ),
    linear-gradient(
      30deg,
      #ededed 12%,
      transparent 12.5%,
      transparent 87%,
      #ededed 87.5%,
      #ededed
    ),
    linear-gradient(
      150deg,
      #ededed 12%,
      transparent 12.5%,
      transparent 87%,
      #ededed 87.5%,
      #ededed
    ),
    linear-gradient(
      60deg,
      #ededed77 25%,
      transparent 25.5%,
      transparent 75%,
      #ededed77 75%,
      #ededed77
    ),
    linear-gradient(
      60deg,
      #ededed77 25%,
      transparent 25.5%,
      transparent 75%,
      #ededed77 75%,
      #ededed77
    );
  background-size: ${20 * ccPolaroidPatternScale}vw
    ${35 * ccPolaroidPatternScale}vw;
  background-position: 0 0, 0 0,
    ${10 * ccPolaroidPatternScale}vw ${18 * ccPolaroidPatternScale}vw,
    ${10 * ccPolaroidPatternScale}vw ${18 * ccPolaroidPatternScale}vw, 0 0,
    ${10 * ccPolaroidPatternScale}vw ${18 * ccPolaroidPatternScale}vw;

  @media (min-width: ${breakpoint}px) {
    background-size: ${20 * eoPolaroidPatternScale}vw
      ${35 * eoPolaroidPatternScale}vw;
    background-position: 0 0, 0 0,
      ${10 * eoPolaroidPatternScale}vw ${18 * eoPolaroidPatternScale}vw,
      ${10 * eoPolaroidPatternScale}vw ${18 * eoPolaroidPatternScale}vw, 0 0,
      ${10 * eoPolaroidPatternScale}vw ${18 * eoPolaroidPatternScale}vw;
  }
`

export const PhotoContainer = styled.div`
  padding: ${(ccContainerWidth - ccPhotoWidth) / 2 - ccPhotoBorderThickness}vw;
  @media (min-width: ${breakpoint}px) {
    padding: ${(eoContainerWidth - eoPhotoWidth) / 2 -
    eoPhotoBorderThickness}vw;
  }
`

export const Image = styled.img`
  width: ${ccPhotoWidth}vw;
  height: ${ccPhotoHeight}vw;
  border: ${ccPhotoBorderThickness}vw solid #000e;
  @media (min-width: ${breakpoint}px) {
    width: ${eoPhotoWidth}vw;
    height: ${eoPhotoHeight}vw;
    border: ${eoPhotoBorderThickness}vw solid #000e;
  }
  border-radius: 0.1vw;
  background-color: #000e;
`

export const TextContainer = styled.p`
  margin: 0;
  padding: 0 ${(ccContainerWidth - ccPhotoWidth) / 2}vw;
  @media (min-width: ${breakpoint}px) {
    padding: 0 ${(eoContainerWidth - eoPhotoWidth) / 2}vw;
  }
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: ${ccSide/24}vw;
  @media (min-width: ${breakpoint}px) {
    font-size: ${eoSide/24}vw;
  }
  color: #444;
`
