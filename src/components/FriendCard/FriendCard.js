import React from "react";
import { Bin, FilledStar, OutlineStar } from "../../assets/Action.svg";
import classes from './FriendCard.module.css';

const FriendCard = function ({
    name, isFav = false,
    toggleFav, removeFriend
}) {
    return <div className={classes.friendCard}>

        <div className={classes.infoContainer}>
            <div className={classes.title}>{name}</div>
            <div className={classes.desc}>is your friend</div>
        </div>
        <div className={classes.actionContainer}>
            <button onClick={toggleFav}
                className={classes.actionButton}>
                {isFav ? <FilledStar /> : <OutlineStar />}
            </button>
            <button className={classes.actionButton}
                onClick={removeFriend}>
                <Bin />
            </button>
        </div>
    </div>
};

export default FriendCard;