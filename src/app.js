import React from 'react'
import { render } from 'react-dom'
import { FilmStrip, Container } from './styled-markup/app-elements'
import Post from './post'
import FilmCartridge from './FilmCartridge'

const colors = {
  'red': '#a63d40',
  'green': '#6a8d73',
  'blue': '#0b4f6c',
}

const App = () => {
  const [posts, setPosts] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [next, setNext] = React.useState(`/posts/page-${page}.json`)

  // Check if any of the colors are in the url
  const color = Object.keys(colors).find(key => {
    return window.location.href.includes(key)
  })

  React.useEffect(() => {
    document.body.style.backgroundColor = color ? colors[color] : '#333'
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
      <FilmCartridge />
      <Container>
        {posts.map((post, index) => (
          <Post post={post} key={index} index={index} />
        ))}
      </Container>
    </div>
  )
}

render(<App />, document.getElementById('app'))
