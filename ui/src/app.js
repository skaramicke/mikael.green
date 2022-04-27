import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import Post from './post'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`

const FilmStrip = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  --background: rgba(0, 0, 0, 0.35);
  --size: 0.25vw;
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

  height: 100vh;
  width: 4vw;
  color: white;
  margin: 0 auto;
`

const App = () => {
  const [posts, setPosts] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [next, setNext] = React.useState(`/posts/page-${page}.json`)

  React.useEffect(() => {
    document.body.style.backgroundColor = '#333'
    return () => {
      document.body.style.backgroundColor = 'white'
    }
  }, [])

  const checkScrollPosition = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      // you're at the bottom of the page
      setPage(page + 1)
    }
  }

  React.useEffect(() => {
    fetch(next)
      .then((res) => res.json())
      .then((data) => {
        setPosts(posts.concat(data.posts))
        setNext(data.next)
        if (data.next) {
          checkScrollPosition()
          window.onscroll = checkScrollPosition
        } else {
          window.onscroll = null
        }
      })
  }, [page])

  return (
    <div>
      <FilmStrip />
      <Container>
        {posts.map((post, index) => (
          <Post post={post} key={index} index={index} />
        ))}
      </Container>
    </div>
  )
}

render(<App />, document.getElementById('app'))
