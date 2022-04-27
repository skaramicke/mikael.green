const fs = require('fs')
const path = require('path')

function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n)
  }
}

class DataPacker {
  apply(compiler) {
    compiler.hooks.done.tap(
      'DataPacker',
      (stats) => {
        fs.mkdirSync(path.join(compiler.options.output.path, 'posts'), {
          recursive: true
        })

        // Clear the posts directory
        fs.readdirSync(path.join(compiler.options.output.path, 'posts')).forEach(
          (file) => {
            fs.unlinkSync(path.join(compiler.options.output.path, 'posts', file))
          }
        )

        const files = fs
          .readdirSync('./src/posts')
          .filter((file) => file.endsWith('.json'))
          .sort((a, b) => {
            return (
              new Date(b.replace('.json', '')) -
              new Date(a.replace('.json', ''))
            )
          })

        const posts = files.map((file) => {
          const data = fs.readFileSync(`./src/posts/${file}`)
          let post = JSON.parse(data)
          post.date = new Date(file.replace('.json', ''))
          return post
        })

        const pages = [...chunks(posts, 10)]

        if (pages.length == 0) {
          pages.push([])
        }

        pages.forEach((page, index) => {
          let data = {
            posts: page,
            page: index + 1,
            totalPages: pages.length,
            next:
              index + 1 < pages.length ? `/posts/page-${index + 2}.json` : null
          }
          const filename = path.resolve(
            compiler.options.output.path,
            'posts',
            `page-${index + 1}.json`
          )
          fs.writeFileSync(filename, JSON.stringify(data))
        })
      }
    )
  }
}

module.exports = DataPacker
