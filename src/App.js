import Section from './components/Section/Section';
import user from './json/user.json';
import Profile from './components/Profile/Profile';
import statisticalData from './json/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './json/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './json/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div className="container">
      <Section>
        <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>
      <Section>
        <Statistics stats={statisticalData} />
      </Section>
      <Section>
        <FriendList items={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />;
      </Section>
    </div>
  );
}
