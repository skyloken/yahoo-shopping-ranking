import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export default function Nav({ categories, onClick }) {

    const to = category => (
        category.id === '1' ? '/all' : `/category/${category.id}`
    );

    return (
        <Drawer variant='permanent'>
            <List>
                {categories.map(category => (
                    <ListItem button key={`nav-item-${category.id}`} onClick={() => onClick(to(category))}>
                        <ListItemText primary={category.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

}

Nav.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
};