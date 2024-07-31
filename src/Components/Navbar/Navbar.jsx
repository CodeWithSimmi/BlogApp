import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const user = false;

  return (
    <div className="nav"  >
      <div className="nav-left">
        {/* <i className="navicon fab fa-facebook-square"></i>
        <i className="navicon fab fa-instagram-square"></i>
        <i className="navicon fab fa-pinterest-square"></i>
        <i className="navicon fab fa-twitter-square"></i> */}
        <h1>BlogApp</h1>
      </div>

      <div className="nav-center">
        <ul className="nav-List">
          <li className='navlist-item'>
            <Link className='link' to="/">HOME</Link>
          </li>
          {/* <li className='navlist-item'><Link className='link' to="/">ABOUT</Link></li> */}
          {/* <li className='navlist-item'><Link className='link' to="/">CONTACT</Link></li> */}
          <li className='navlist-item'><Link className='link' to="/write">WRITE</Link></li>
          <li className='navlist-item'>
          {user && "LOGOUT"}
          </li>
        </ul>
      </div>

<div className="nav-right">
        {
          user ? (
          <Link className="link" to="/settings">
            <img
              className="nav-img"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="nav-List">
            <li className="navlist-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navlist-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}


        
        {/* <i className="nav-searchcon fas fa-search"></i> */}
      </div>
    </div>
  );
}

export default Navbar;

