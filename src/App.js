import './App.css';
import TopCommentsBox from './Components/CommentsBox/TopCommentsBox/TopCommentsBox';

function App() {
  return (
    <div className="colHolder">
      <TopCommentsBox autoFocus={false} />
    </div>
  );
}

export default App;
