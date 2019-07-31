import PropTypes from "prop-types";
import React from 'react';

export default class Ranking extends React.Component {

    // コンポーネントマウント前
    componentWillMount() {
        this.props.onMount(this.props.categoryId);
    }

    // コンポーネントのpropsが変更される前
    componentWillReceiveProps(nextProps) {
        if (this.props.categoryId !== nextProps.categoryId) {
            this.props.onUpdate(nextProps.categoryId);
        }
    }

    render() {
        return (
            <div>
                <h2>Ranking Component</h2>
                <p>Category ID: {this.props.categoryId}</p>
            </div>
        );
    }
}

Ranking.propTypes = {
    categoryId: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
}

Ranking.defaultProps = {
    categoryId: '1'
}