const fs = require('fs')
const path = require('path')

class StaticTemplateRenderer {
  apply(compiler) {
    compiler.hooks.done.tap(
      'StaticTemplateRenderer',
      (stats) => {
        const template_dir = path.resolve('.', 'src', 'static_templates')
        const target_dir = compiler.options.output.path

        const substitutions = {
          contenthash: stats.compilation.hash
        }

        fs.readdir(template_dir, (err, files) => {
          if (err) {
            console.error(err)
            return
          }
          files.forEach(file => {
            const file_path = path.resolve(template_dir, file)
            const target_path = path.resolve(target_dir, file)
            
            const template = fs.readFileSync(file_path, 'utf8')
            let output = template
            Object.keys(substitutions).forEach(key => {
              output = output.replace(`[${key}]`, substitutions[key])
            })
            fs.writeFileSync(target_path, output)
          })
        })

        // fs.mkdirSync(path.join(compiler.options.output.path, 'posts'), {
        //   recursive: true
        // })

        // // Clear the posts directory
        // fs.readdirSync(path.join(compiler.options.output.path, 'posts')).forEach(
        //   (file) => {
        //     fs.unlinkSync(path.join(compiler.options.output.path, 'posts', file))
        //   }
        // )

        // const files = fs
        //   .readdirSync('./src/posts')
        //   .filter((file) => file.endsWith('.json'))
        //   .sort((a, b) => {
        //     return (
        //       new Date(b.replace('.json', '')) -
        //       new Date(a.replace('.json', ''))
        //     )
        //   })

        // const posts = files.map((file) => {
        //   const data = fs.readFileSync(`./src/posts/${file}`)
        //   let post = JSON.parse(data)
        //   post.date = new Date(file.replace('.json', ''))
        //   return post
        // })

        // const pages = [...chunks(posts, 10)]

        // if (pages.length == 0) {
        //   pages.push([])
        // }

        // pages.forEach((page, index) => {
        //   let data = {
        //     posts: page,
        //     page: index + 1,
        //     totalPages: pages.length,
        //     next:
        //       index + 1 < pages.length ? `/posts/page-${index + 2}.json` : null
        //   }
        //   const filename = path.resolve(
        //     compiler.options.output.path,
        //     'posts',
        //     `page-${index + 1}.json`
        //   )
        //   fs.writeFileSync(filename, JSON.stringify(data))
        // })
      }
    )
  }
}

module.exports = StaticTemplateRenderer
