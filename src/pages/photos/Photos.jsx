import React from 'react';
import './photos.scss';
import Collection from './components/Collection';
const categories = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];
function App() {
  const [collection, setCollection] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [categoryId, setCategoryId] = React.useState(0);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    setIsLoading(true)
    const category =  categoryId ? `category=${categoryId}` : '';
  
    fetch(
      `https://62ea7a82ad295463258d86d1.mockapi.io/city?page=${page}&limit=3&${category}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('error ');
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="body_photos">
      <div className="photos">
        <h1>Моя коллекция фотографий</h1>
        <div className="top">
          <ul className="tags">
            {categories.map((obj, i) => (
              <li
                onClick={() => setCategoryId(i)}
                className={categoryId === i ? 'active' : ''}
                key={obj.name}>
                {obj.name}
              </li>
            ))}
          </ul>
          <input
            value={searchValue}
            onChange={onChangeSearchValue}
            className="search-input"
            placeholder="Поиск по названию"
          />
        </div>
        <div className="content_photos">
          {isLoading ? (
            <h2>Идёт загрузка</h2>
          ) : (
            collection
              .filter((obj) => {
                return obj.name.toLowerCase().includes(searchValue.toLocaleLowerCase());
              })
              .map((obj, index) => <Collection key={index} name={obj.name} images={obj.photos} />)
          )}
        </div>
        <ul className="pagination">
         {[...Array(3)].map((_, i)=> <li  
         onClick={() => setPage(i+1)}
         className={page === i+1 ? 'active' : ''} >{i+1}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
