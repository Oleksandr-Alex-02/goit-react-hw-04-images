import React, { Component } from 'react'
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        searchName: '',
    };
    handleNameChange = e => {
        this.setState({ searchName: e.currentTarget.value.toLowerCase() });
    };
    handleSearch = e => {
        e.preventDefault();
    };



    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchbar__form}>
                    <button className={css.searchbar__submit} type="submit">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className={css.searchbar__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchName}
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;