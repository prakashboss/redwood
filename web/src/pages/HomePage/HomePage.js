import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <BlogPostsCell />
        <p>This is the Home page</p>
      </BlogLayout>
    </>
  )
}

export default HomePage
