import { Link, routes } from '@redwoodjs/router'
const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <Link to={routes.home()}>
          <h1>Redwood Blog</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Redwood Blogs</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
