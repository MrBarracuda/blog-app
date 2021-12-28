import {useParams} from "react-router-dom";
import useFetch from "../useFetch";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const BlogDetails = () => {
    const {id} = useParams()
    const url = 'http://localhost:8000/blogs/'
    const navigate = useNavigate()
    const {data: blog, error, isPending} = useFetch(url + id)
    const handleDelete = () => {
        axios.delete(url + id).then(() => navigate('/'))
    }
    return (
        <div className='blog-preview'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Written by{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete blog</button>
                </article>
            )}
        </div>
    )

}
export default BlogDetails