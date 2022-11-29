import './App.css';
import TopCommentsBox from './Components/CommentsBox/TopCommentsBox/TopCommentsBox';
import { ContextProvider } from './context/Context';
import MessageScroll from './MessageScroll';

function App() {
  return (
    <ContextProvider>
      <div className="colHolder">
        <TopCommentsBox autoFocus={false} />
        <MessageScroll />
      </div>
    </ContextProvider>
  );
}

export default App;
