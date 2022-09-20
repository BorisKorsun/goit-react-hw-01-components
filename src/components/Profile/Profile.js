import PropTypes from 'prop-types';

import { ProfileBox, ProfileDesc, UserAvatar, UserName, UserTag, UserStats, UserLocation, StatsItems, UserLabel, UserQuantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <ProfileBox>
            <ProfileDesc>
                <UserAvatar src={avatar} alt="User avatar"></UserAvatar>
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </ProfileDesc>

            <UserStats>
                <StatsItems>
                    <UserLabel>Followers:</UserLabel>
                    <UserQuantity>{followers}</UserQuantity>
                </StatsItems>
                <StatsItems>
                    <UserLabel>Views:</UserLabel>
                    <UserQuantity>{views}</UserQuantity>
                </StatsItems>
                <StatsItems>
                    <UserLabel>Likes:</UserLabel>
                    <UserQuantity>{likes}</UserQuantity>
                </StatsItems>
            </UserStats>
        </ProfileBox>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}