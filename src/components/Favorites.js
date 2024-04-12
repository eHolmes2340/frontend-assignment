import React,{useEffect,useState} from "react"
import "../Styles/Favourite.css"
import "../Styles/App.css"

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
      setFavorites(storedFavorites || []);
    }, []);
  
    return (
      <div className="favorites">
        <h2>Favorites</h2>
        {favorites.map(post => (
          <div key={post.id} className="card my-2">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <button className="btn btn-danger" onClick={() => removeFavorite(post.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    );
  };


  


  const removeFavorite = (postId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const filteredFavorites = favorites.filter(post => post.id !== postId);
    localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
  };


  export default Favorites; 