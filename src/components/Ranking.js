import PropTypes from "prop-types";
import React from 'react';

export default function Ranking({ categoryId }) {
    return (
        <div>
            <h2>Ranking Component</h2>
            <p>Category ID: {categoryId}</p>
        </div>
    )
}

Ranking.propTypes = {
    categoryId: PropTypes.string
}

Ranking.defaultProps = {
    categoryId: '1'
}