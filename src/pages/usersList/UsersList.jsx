import React from 'react';
import './usersList.scss';
import { Success } from './components/Success';
import { Users } from './components/users/index.jsx';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('error ');
      })
      .finally(() => setIsLoading(false));
  }, []);
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  const onClickSendInvites = () => {
    setSuccess(true)
  };
  return (
    <div className="body_users">
      <div className="users">
        {success ? (
          <Success count={invites.length}/>
        ) : (
          <Users
            onChangeSearchValue={onChangeSearchValue}
            searchValue={searchValue}
            items={users}
            isLoading={isLoading}
            onClickInvite={onClickInvite}
            invites={invites}
            onClickSendInvites={onClickSendInvites}
          />
        )}
      </div>
    </div>
  );
}

export default App;
