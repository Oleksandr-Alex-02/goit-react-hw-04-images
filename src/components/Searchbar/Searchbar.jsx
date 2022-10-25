import React, { Component } from 'react'
import css from './Searchbar.module.css'

class Searchbar extends Component {
    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchbar__form}>
                    <button type="submit" className={css.searchbar__submit}>
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className={css.searchbar__input}
                        type="text"
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;