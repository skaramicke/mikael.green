import React from 'react'

import styled from 'styled-components'

const breakpoint = 768;

const dims = {
  topWidth: 11.21,
  topHeight: 5,
  filmTopPadding: 3.42,
  filmBottomPadding: 3.58,
  bodyHeight: 40.37,
  outerDiameter: 24.26,
  filmWidth: 33.37,
  borderRadius: 1
}

export const filmViewWidth = {
  mobile: 30,
  desktop: 4
}

const mult = {
  mobile: filmViewWidth.mobile / dims.filmWidth,
  desktop: filmViewWidth.desktop / dims.filmWidth
}

export const s = {
  m: {
    topDiameter: dims.topWidth * mult.mobile,
    topHeight: dims.topHeight * mult.mobile,
    filmTopPadding: dims.filmTopPadding * mult.mobile,
    filmBottomPadding: dims.filmBottomPadding * mult.mobile,
    bodyHeight: dims.bodyHeight * mult.mobile,
    outerDiameter: dims.outerDiameter * mult.mobile,
    filmWidth: dims.filmWidth * mult.mobile,
    borderRadius: dims.borderRadius * mult.mobile
  },
  d: {
    topDiameter: dims.topWidth * mult.desktop,
    topHeight: dims.topHeight * mult.desktop,
    filmTopPadding: dims.filmTopPadding * mult.desktop,
    filmBottomPadding: dims.filmBottomPadding * mult.desktop,
    bodyHeight: dims.bodyHeight * mult.desktop,
    outerDiameter: dims.outerDiameter * mult.desktop,
    filmWidth: dims.filmWidth * mult.desktop,
    borderRadius: dims.borderRadius * mult.desktop
  }
}

const FilmCartridgeContainer = styled.div`
  position: relative;
  top: 0;
  margin: 0 auto;
  width: ${s.m.bodyHeight + s.m.topHeight * 2}vw;
  height: ${s.m.outerDiameter}vw;
  @media (min-width: ${breakpoint}px) {
    width: ${s.d.bodyHeight + s.d.topHeight * 2}vw;
    height: ${s.d.outerDiameter}vw;
  }
`
const FilmCartdigeTop = styled.div`
  position: absolute;
  right: 0;
  background-color: #000;
  top: ${s.m.outerDiameter / 2 - s.m.topDiameter / 2}vw;
  width: ${s.m.topHeight}vw;
  height: ${s.m.topDiameter}vw;
  border-radius: 0 ${s.m.borderRadius}vw ${s.m.borderRadius}vw 0;
  @media (min-width: ${breakpoint}px) {
    top: ${s.d.outerDiameter / 2 - s.d.topDiameter / 2}vw;
    width: ${s.d.topHeight}vw;
    height: ${s.d.topDiameter}vw;
    border-radius: 0 ${s.d.borderRadius}vw ${s.d.borderRadius}vw 0;
  }
`

const FilmCartridgeBody = styled.div`
  position: absolute;
  top: 0;
  background: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1;
  align-items: center;
  overflow: hidden;
  right: ${s.m.topHeight}vw;
  width: ${s.m.bodyHeight}vw;
  height: ${s.m.outerDiameter}vw;
  border-radius: ${s.m.borderRadius}vw;
  @media (min-width: ${breakpoint}px) {
    right: ${s.d.topHeight*1.1}vw;
    width: ${s.d.bodyHeight}vw;
    height: ${s.d.outerDiameter}vw;
    border-radius: ${s.d.borderRadius}vw;
  }
`

const Color = styled.a`
  height: 100%;
  width: 30%;
  flex-grow: 1;
`

const gradient =
  'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent, rgba(0, 0, 0, 0.5))'

const Red = (props) => {
  return (
    <Color {...props}
      style={{
        background: `#a63d40 ${gradient}`,
      }}
    />
  )
}

const Green = (props) => {
  return (
    <Color {...props}
      style={{
        background: `#6a8d73 ${gradient}`
      }}
    />
  )
}

const Blue = (props) => {
  return (
    <Color {...props}
      style={{
        background: `#0b4f6c ${gradient}`,
      }}
    />
  )
}

const FilmCartridge = () => {
  return (
    <FilmCartridgeContainer>
      <FilmCartridgeBody>
        <Red href="https://mikael.red" />
        <Green href="https://mikael.green" />
        <Blue href="https://mikael.blue" />
      </FilmCartridgeBody>
      <FilmCartdigeTop />
    </FilmCartridgeContainer>
  )
}

export default FilmCartridge
