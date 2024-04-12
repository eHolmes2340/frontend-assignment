const addFavorite = (post) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    localStorage.setItem('favorites', JSON.stringify([...favorites, post]));
  };


  export default addFavorite; 