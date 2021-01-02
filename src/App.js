import friends from './json/friends.json';
import FriendList from './components/FriendList';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="Header">
        <FriendList items={friends} />
      </Section>
      <Section />
    </div>
  );
}
