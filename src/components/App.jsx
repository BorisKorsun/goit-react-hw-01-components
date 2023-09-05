import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';

import userData from 'data/user.json';
import statisticsData from 'data/data';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics title={"Upload stats"} stats={statisticsData}/>
    </div>
  );
};
