import React, { Component } from 'react'
import { toast } from 'react-toastify';

import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        imageSearch: '',
    };
    handleNameChange = evt => {
        this.setState({ imageSearch: evt.target.value.toLowerCase() });
    };
    onSubmitForm = evt => {
        evt.preventDefault();
        if (this.state.imageSearch.trim() === '') {
            toast.error("Please enter what you want to search for", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
            })
            return;
        }
        this.setState({ imageSearch: '' });
        this.props.onSubmit(this.state.imageSearch)
    };

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchbar__form} onSubmit={this.onSubmitForm}>
                    <button className={css.searchbar__submit} type="submit">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className={css.searchbar__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.imageSearch}
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;