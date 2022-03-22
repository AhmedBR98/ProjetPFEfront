import react from 'react'
import { Link } from 'react-router-dom';
import Topbar from './topbar';





function Admin () {
    const checkposts = () => {
        {window.location.href='/admin/posts'}
      };
      const foundposts = () => {
        {window.location.href='/admin/confirmposts'}
      };


    return (
<>
<Topbar/>
<button onClick={checkposts}>Check Pending posts</button>
<button onClick={foundposts}>Confirm Found items</button>

</>
    );
}
export default Admin