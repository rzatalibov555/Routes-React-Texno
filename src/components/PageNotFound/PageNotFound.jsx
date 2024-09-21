import './PageNotFound.css'
import { Link } from 'react-router-dom';
function PageNotFound() {
    return ( 
        <div>PageNotFound page! Go to <Link to="/">Home</Link></div>
     );
}

export default PageNotFound;