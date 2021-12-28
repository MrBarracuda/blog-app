import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const url = 'http://localhost:8000/blogs/'
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const blog = {title, body, author}
        axios.post(url, blog).then(() => navigate('/'))
    }

    return (
        <div className='create'>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input required type="text" value={title}
                       onChange={e => setTitle(e.target.value)}/>
                <label>Blog body</label>
                <textarea required value={body}
                          onChange={e => setBody(e.target.value)}/>
                <label>Blog author</label>
                <select onChange={e => setAuthor(e.target.value)}>
                    <option value="yoshi">yoshi</option>
                    <option value="mario">mario</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )

}
export default Create