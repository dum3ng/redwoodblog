import { Link, routes } from '@redwoodjs/router'

const truncate = (body: string, length: number) => {
  return body.substring(0, length) + '...'
}

const BlogPost = ({ post, summary = false }) => {
  return (
    <article className="mb-1 border rounded-sm">
      <header className="text-lg underline text-red-600">
        <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
      </header>
      <main className="p-2">
        {summary ? truncate(post.body, 80) : post.body}
      </main>
    </article>
  )
}

export default BlogPost
