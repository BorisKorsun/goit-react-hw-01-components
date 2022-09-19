import { Profile } from 'components/Profile/Profile'

import user from 'data/user.json';

const { username, tag, location, avatar, stats } = user;

export const App = ({ children }) => {
  return (
    <div>
    <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
    </div>
  );
};
