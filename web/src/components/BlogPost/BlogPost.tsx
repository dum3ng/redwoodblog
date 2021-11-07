import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <article style={{ marginBottom: '1rem' }}>
      <header>
        <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
      </header>
      <main>{post.body}</main>
    </article>
  )
}

export default BlogPost
