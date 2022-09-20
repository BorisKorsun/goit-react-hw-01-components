import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendCatalogue } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendCatalogue className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (<FriendListItem key={(id)} avatar={avatar} name={name} isOnline={isOnline} />)
            })}
        </FriendCatalogue>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};