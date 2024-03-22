
// import PropTypes from 'prop-types';
import SingleNav from './SingleNav';
import { BiAlignLeft } from "react-icons/bi";
const NavBar = () => {
    const routes = [
        {
          id: 1,
          path: '/',
          name: 'Home',
        },
        {
          id: 2,
          path: '/about',
          name: 'About',
        },
        {
          id: 3,
          path: '/blog',
          name: 'Blog',
        },
        {
          id: 4,
          path: '/contact',
          name: 'Contact',
        },
        {
          id: 5,
          path: '/services',
          name: 'Services',
        }
        
      ];
    return (
        <div>
            <BiAlignLeft className='text-4xl font-bold '/>
           <div className='flex justify-center items-center gap-4 text-2xl font-bold '>
           {
                routes.map(item=><SingleNav key={item.id} item={item}></SingleNav>)
            }
           </div>
        </div>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;