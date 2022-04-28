import React from 'react'
import {
  Polaroid,
  MarkerLeft,
  MarkerRight,
  PhotoContainer,
  Image,
  TextContainer
} from './styled-markup/post-elements'

const Post = ({ post, index = 0 }) => {
  const [visiblePhoto, setVisiblePhoto] = React.useState(0)
  return (
    <Polaroid>
      {index % 2 == 0 ? <MarkerLeft /> : <MarkerRight />}
      <PhotoContainer>
        {post.images.map(
          (image, index) =>
            visiblePhoto == index && (
              <Image key={index} src={`${image.replace('.jpg', '-square.jpg')}`} />
            )
        )}
      </PhotoContainer>
      <TextContainer>{post.title}</TextContainer>
    </Polaroid>
  )
}

export default Post
