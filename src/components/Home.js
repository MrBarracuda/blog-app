import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const {data, error, isPending} = useFetch('http://localhost:8000/blogs')

    return (
        <div className='home'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && <BlogList blogs={data} />}
        </div>
    )



}
export default Home