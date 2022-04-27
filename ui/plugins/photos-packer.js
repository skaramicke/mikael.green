const fs = require('fs')
const path = require('path')
var im = require('imagemagick')

function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n)
  }
}

const targetWidth = 470*2
const targetHeight = 460*2


class PhotosPacker {
  apply(compiler) {
    compiler.hooks.done.tap('PhotosPacker', (stats) => {
      fs.mkdirSync(path.resolve(compiler.options.output.path, 'photos'), {
        recursive: true
      })

      // Clear the photos folder
      fs.readdirSync(path.resolve(compiler.options.output.path, 'photos')).forEach(file => {
        fs.unlinkSync(path.resolve(compiler.options.output.path, 'photos', file))
      })

      const posts = fs
        .readdirSync(path.resolve('./', 'src', 'posts'))
        .filter((file) => file.endsWith('.json'))

      let sourcePhotos = []
      for (const post of posts) {
        const postData = JSON.parse(
          fs.readFileSync(path.resolve('./', 'src', 'posts', post), 'utf8')
        )
        for (const image of postData.images) {
          sourcePhotos.push(`${image}.jpg`)
        }
      }
      
      sourcePhotos = [...new Set(sourcePhotos)]

      sourcePhotos.forEach((filename) => {

        const source = path.resolve('./', 'src', 'photos', filename)

        const destination = path.resolve(
          compiler.options.output.path,
          'photos',
          filename.replace('.jpg', '-square.jpg')
        )

        const opts = {
          quality: 0.8,
          progressive: true,
          strip: true,
          srcPath: source,
          dstPath: destination,
          width: targetWidth,
          height: targetHeight,
          background: "none",
          customArgs: [
            "-background", "#101010",
            "-gravity", "center",
            "-extent", `${targetWidth}x${targetHeight}`,
          ]
        }

        im.resize(opts, (err, stdout, stderr) => {
          if (err) {
            throw err
          }
        })
      })

    })
  }
}

module.exports = PhotosPacker
