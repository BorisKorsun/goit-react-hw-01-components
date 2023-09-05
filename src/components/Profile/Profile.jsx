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
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileBox className="profile">
      <ProfileDesc>
        <UserAvatar src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserTag className="tag">@{tag}</UserTag>
        <UserLocation className="location">{location}</UserLocation>
      </ProfileDesc>

      <UserStats className="stats">
        <StatsItems>
          <UserLabel className="label">Followers</UserLabel>
          <UserQuantity className="quantity">{followers}</UserQuantity>
        </StatsItems>
        <StatsItems>
          <UserLabel className="label">Views</UserLabel>
          <UserQuantity className="quantity">{views}</UserQuantity>
        </StatsItems>
        <StatsItems>
          <UserLabel className="label">Likes</UserLabel>
          <UserQuantity className="quantity">{likes}</UserQuantity>
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
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
