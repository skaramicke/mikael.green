const fs = require('fs')
const path = require('path')
var im = require('imagemagick')

const iconSizes = {
  'favicon.ico': 32,
  'apple-touch-icon.png': 180,
  'icon-192.png': 192,
  'icon-512.png': 512
}

class FaviconGenerator {
  apply(compiler) {
    compiler.hooks.done.tap('FaviconGenerator', (stats) => {

      const source_image = path.resolve('./', 'src', 'assets', 'camera-lens.png')
      const target_dir = path.resolve(compiler.options.output.path, 'icons')

      fs.mkdirSync(target_dir, {
        recursive: true
      })

      // Clear the photos folder
      fs.readdirSync(target_dir).forEach(file => {
        fs.unlinkSync(path.resolve(target_dir, file))
      })

      Object.entries(iconSizes).forEach((iconSize) => {

        const [filename, size] = iconSize

        const destination = path.resolve(
          target_dir,
          filename
        )

        const opts = {
          srcPath: source_image,
          dstPath: destination,
          width: size,
          height: size,
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

module.exports = FaviconGenerator
