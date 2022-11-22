import './App.css';
import TopCommentsBox from './Components/CommentsBox/TopCommentsBox/TopCommentsBox';
import MessageScroll from './MessageScroll';

function App() {
  return (
    <div className="colHolder">
      <TopCommentsBox autoFocus={false} />
      <MessageScroll />
    </div>
  );
}

export default App;
