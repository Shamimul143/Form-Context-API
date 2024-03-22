
import PropTypes from 'prop-types';

const SingleNav = ({item}) => {
  
    return (
        <div>
            <ul>
                <li><a href="">{item.name}</a></li>
            </ul>
        </div>
    );
};

SingleNav.propTypes = {
    item:PropTypes.object
};

export default SingleNav;