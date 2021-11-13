import classes from './Header.module.css';

const Header = function ({ search, onSearch }) {

    const handleSearchChange = function (event) {
        const value = event?.target?.value;
        onSearch(value);
    }

    return <header className={classes.header}>
        <h2 className={classes.mainTitle}>
            Friends List
        </h2>
        <input className={classes.searchInput}
            type='text'
            placeholder='Search Friends...'
            value={search}
            onChange={handleSearchChange} />
    </header>
};

export default Header;