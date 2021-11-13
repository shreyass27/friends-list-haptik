import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight, FilledStar, OutlineStar } from "../../assets/Action.svg";
import { PAGE_SIZE, friendSortFunc } from "../../utlis/helper";
import FriendCard from "../FriendCard/FriendCard";
import classes from './FriendList.module.css';

const FriendList = function ({
    list, search,
    sortFav, onSortFav,
    updateFav, removeFriend
}) {
    const [page, setPage] = useState(0);

    const { filteredList, noPages } = useMemo(function () {
        const searchTerm = search.trim().toLowerCase();

        const filteredList = searchTerm ?
            list.filter(friend => friend.name.includes(searchTerm)) :
            list.slice();

        if (sortFav) {
            filteredList.sort(friendSortFunc)
        };

        return {
            filteredList,
            noPages: Math.ceil(filteredList.length / PAGE_SIZE)
        };

    }, [list, search, sortFav]);

    useEffect(function () {
        if (page >= noPages) {
            setPage(Math.max(noPages - 1, 0));
        }
    }, [setPage, page, noPages]);

    useEffect(function () {
        setPage(0);
    }, [sortFav, search]);

    return <div id='friends-list'>
        {list.length ?
            filteredList.length ? <>
                <div className={`${classes.sectionCard} ${classes.pageActions}`}>
                    <button className={classes.pageActionButton}
                        onClick={onSortFav.bind(this, !sortFav)}>
                        Sort By {sortFav ? <FilledStar /> : <OutlineStar />}
                    </button>
                    {
                        noPages > 1 ? <div>
                            <button className={classes.pageActionButton}
                                disabled={page < 1}
                                onClick={setPage.bind(this, page - 1)}>
                                <ChevronLeft />
                            </button>
                            {page + 1}
                            <button className={classes.pageActionButton}
                                disabled={page > (noPages - 2)}
                                onClick={setPage.bind(this, page + 1)}>
                                <ChevronRight />
                            </button>
                        </div> : null
                    }
                </div>
                {
                    filteredList
                        .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
                        .map(({ name, isFav }) =>
                            <FriendCard key={name}
                                name={name}
                                isFav={isFav}
                                toggleFav={updateFav.bind(this, name)}
                                removeFriend={removeFriend.bind(this, name)}
                            />
                        )
                }
            </> :
                <div className={classes.sectionCard}>
                    Friend not found. Add new friend to the list.
                </div> :
            <div className={classes.sectionCard}>
                Friends List Empty. Please add your friends.
            </div>
        }
    </div>
}

export default FriendList;