import PropTypes from 'prop-types';

import {
  ProfileBox,
  ProfileDesc,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsItems,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats
}) => {
  return (
    <ProfileBox>
      <ProfileDesc>
        <UserAvatar src={avatar} alt="User avatar"/>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileDesc>

      <UserStats>
        <StatsItems>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{stats.followers}</UserQuantity>
        </StatsItems>
        <StatsItems>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{stats.views}</UserQuantity>
        </StatsItems>
        <StatsItems>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{stats.likes}</UserQuantity>
        </StatsItems>
      </UserStats>
    </ProfileBox>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
};
