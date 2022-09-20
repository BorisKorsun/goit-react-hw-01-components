import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import { Container } from './App.styled';


import user from 'data/user.json';
import data from 'data/data.json';

const { username, tag, location, avatar, stats } = user;

export const App = ({ children }) => {
  return (
    <Container>
    <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
      />
      <Statistics title='Upload stats' stats={data} />

      <Statistics stats={data} />
    </Container>
  );
};
