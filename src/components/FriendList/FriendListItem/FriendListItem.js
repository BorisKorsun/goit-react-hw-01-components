import PropTypes from 'prop-types';

import { ListItem, OnlineStatus, FriendAvatar } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
    <ListItem className="item">
        <OnlineStatus isOnline={isOnline} className="status"></OnlineStatus>
        <FriendAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </ListItem>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};