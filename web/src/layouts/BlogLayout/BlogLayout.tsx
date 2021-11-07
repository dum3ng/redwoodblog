import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { logIn, isAuthenticated, logOut, currentUser } = useAuth()
  return (
    <>
      <header className="h-16 p-2 bg-red-600 text-white flex justify-between">
        <h1 className="text-2xl">
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul className="flex">
            <li className="p-1 mr-1">
              <Link to={routes.about()}>About</Link>
            </li>
            <li className="p-1 mr-1">
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li className="p-1 mr-1">
              <button onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </button>
            </li>
            {isAuthenticated && (
              <li className="p-1 mr-1">{currentUser.email}</li>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
