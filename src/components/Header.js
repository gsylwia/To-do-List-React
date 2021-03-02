import React from 'react'
import AddItem from '../components/AddItem';

const Header = () => {
    return (
        <header>
            
            <AddItem />
            
            <h1>To-Do List</h1>

            <button className="todo-button" type="submit">
                <i className="fas fa-cog"></i>
            </button>

        </header>
    );
}

export default Header;