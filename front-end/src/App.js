
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div className="container">
     <Header />
     <Form />
     <PostList />
    </div>
  );
}

export default App;
