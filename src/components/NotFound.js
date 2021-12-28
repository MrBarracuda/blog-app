import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='not-found'>
            <h4>Sorry... The Page Cannot be Found</h4>
            <Link to='/'>go to homepage</Link>
        </div>
    )
}
export default NotFound