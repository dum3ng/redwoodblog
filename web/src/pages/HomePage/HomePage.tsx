import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>HomePage</h1>
      <div>
        links:
        {Object.keys(routes).map((r) => (
          <Link key={routes[r]()} to={routes[r]()}>
            {r}
          </Link>
        ))}
      </div>
      <BlogPostsCell />
    </>
  )
}

export default HomePage
