import { Link } from "react-router-dom";
const blogList = () => {
  const blogs = props.blogs;
    return (
      <div className="BlogList">
        {blogs.map(blog=>(
            <div className='blogReview' key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                </Link>
            </div>
        ))}
      </div>
      );
}
 
export default blogPost;