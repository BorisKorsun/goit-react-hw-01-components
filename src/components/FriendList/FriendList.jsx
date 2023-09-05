import PropTypes, { arrayOf } from 'prop-types';

import {
  FriendCatalogue,
  Friend,
  OnlineStatus,
  FriendAvatar,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendCatalogue>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id}>
            <OnlineStatus isOnline={isOnline}></OnlineStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </Friend>
        );
      })}
    </FriendCatalogue>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
