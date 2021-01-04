// import user from './json/user.json';
// import Profile from './components/Profile/Profile';
import statisticalData from './json/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
// import friends from './json/friends.json';
// import FriendList from './components/FriendList/FriendList';

export default function App() {
  return (
    <div className="container">
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      {/* <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} /> */}
      {/* <FriendList items={friends} /> */}
    </div>
  );
}
