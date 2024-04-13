import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Favorites from './components/Favorites';
import addFavorite from './components/Add';

const fetchPosts = (subreddit) => {
  return fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`)
    .then(response => response.json())
    .then(data => data.data.children.map(post => post.data))
    .catch(error => console.error('Error fetching posts:', error));
};


function App() {
  const [subreddit, setSubreddit] = useState('webdev');
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetchedPosts = await fetchPosts(subreddit);
    setPosts(fetchedPosts);
  };

  return (
    <div className="App">
      <h1>Subreddit</h1>
      <header className="App-header p-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            value={subreddit}
            onChange={e => setSubreddit(e.target.value)}
            placeholder="Enter subreddit"
          />
          <button type="submit" className="btn btn-primary">Load Posts</button>
        </form>
      </header>

      <div className="articles">
        {posts.map(post => (
          <div key={post.id} className="card my-2">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">Posted by {post.author}</p>
              <button className="btn btn-info" onClick={() => addFavorite(post)}>Add to Favorites</button>
            </div>
          </div>
        ))}
      </div>

      <Favorites />
    </div>
  );
}



export default App;
