import { useCallback, useState } from 'react';
import FriendList from './components/FriendList/FriendList';
import AddInput from './components/AddInput/AddInput';
import Header from './components/Header/Header';
import { mockData, Friend, hasFriend, capitalizeAllFirst } from './utlis/helper'
import classes from './App.module.css';
import ConfirmModal from './components/ConfirmModal/ConfirmModal';


function App() {
  const [search, setSearch] = useState('');
  const [sortFav, setSortFav] = useState(false);
  const [friends, setFriends] = useState(mockData);
  const [alert, setAlert] = useState({});

  const handleAddFriend = function (nameVal) {
    const trimmedval = nameVal.trim().toLowerCase();

    if (trimmedval) {
      if (hasFriend(friends, trimmedval)) {
        setAlert({
          open: true,
          title: `${capitalizeAllFirst(trimmedval)} already exists in the list.`
        });
      } else {
        setFriends(currFriends => [new Friend(trimmedval), ...currFriends]);
      }
    }
  }

  const handleUpdateFav = useCallback(function (name) {
    const friendIdx = friends.findIndex(frnd => frnd.name === name);
    const friendsCopy = [...friends];
    friendsCopy[friendIdx].toggleFav();
    setFriends(friendsCopy);
  }, [setFriends, friends])

  const handleRemoveFriend = useCallback(function (name) {
    setAlert({
      open: true,
      title: `Do you want to remove ${capitalizeAllFirst(name)} from friends list ?`,
      canConfirm: true,
      payload: name
    })
  }, [setAlert]);

  const handleConfirmRemove = useCallback(function (name) {
    setFriends(currfrnds => currfrnds.filter(frnd => frnd.name !== name));
    setAlert({});
  }, [setFriends, setAlert]);


  return <div className={classes.mainContainer}>
    <Header
      search={search}
      onSearch={setSearch} />

    <main>
      <AddInput addFriend={handleAddFriend} />

      <FriendList
        search={search}
        list={friends}
        updateFav={handleUpdateFav}
        removeFriend={handleRemoveFriend}
        sortFav={sortFav}
        onSortFav={setSortFav} />
    </main>

    <ConfirmModal show={alert.open}
      title={alert.title}
      onCancel={setAlert.bind(this, {})}
      onConfirm={alert.canConfirm ? handleConfirmRemove.bind(this, alert.payload) : null}
    />
  </div>;
}

export default App;
