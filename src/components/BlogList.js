import {Link} from "react-router-dom";
import Search from "./Search";
import {useState} from "react";

const BlogList = ({blogs}) => {

    // const [search, setSearch] = useState('')
    // const [filteredBlogs, setFilteredBlogs] = useState('')


    return (
        <div className='blog-list'>
            {/*<Search filteredBlogs={filteredBlogs} setFilteredBlogs={setFilteredBlogs}*/}
            {/*        search={search} setSearch={setSearch} blogs={blogs}/>*/}
            {
                blogs.map(blog => (
                    <div className='blog-preview' key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>{blog.author}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default BlogList