import React from 'react'
import { render } from 'react-dom'
import { FilmStrip, Container } from './styled-markup/app-elements'
import Post from './post'

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
