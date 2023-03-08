import Nav from './components/Nav';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Friends from './components/Friends';

function App() {
  return (
   <>
   <Nav/>
   <div className='App-Body'>
      <Profile username="John Wick" handle="@boogeyman"/>
      <Feed/>
      <Friends/>
   </div>
   </>
  );
}

export default App;
