import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdOutlineImageSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';


export default function Searchbar({ onSubmit }) {
    const [searchName, setSearchName] = useState('');

    const handleNameChange = evt => {
        setSearchName(evt.currentTarget.value.toLowerCase());
    };

    const onSubmitVeleu = evt => {
        evt.preventDefault();

        if (searchName.trim('') === '') {
            toast.error('Please select an image', {
                theme: " "
            });
            return;
        }
        onSubmit(searchName);
    };

    return (
        <header className={css.searchbar}>
            <form className={css.searchForm} onSubmit={onSubmitVeleu}>
                <input
                    className={css.searchForm__input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchName}
                    onChange={handleNameChange}
                />
                <button type="submit" className={css.searchForm__button}>
                    <MdOutlineImageSearch />
                </button>
            </form>
        </header>
    );
}


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
