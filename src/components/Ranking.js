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
        const { category, ranking, error } = this.props;

        return (
            <div>
                <h2>{typeof category !== 'undefined' ? `${category.name} Ranking` : ''}</h2>
                {(() => {
                    if (error) {
                        // エラー表示
                        return <p>Error has occured, please reload.</p>;
                    } else if (typeof ranking === 'undefined') {
                        // リクエスト前
                        return <p>Now Loading...</p>
                    } else {
                        // ランキング表示
                        return (
                            <ol>
                                {ranking.map(item => (
                                    <li key={`ranking-item-${item.code}`}>
                                        <img alt={item.name} src={item.imageUrl} />
                                        <a href={item.url} target='_blank' rel='noreferrer noopener'>{item.name}</a>
                                    </li>
                                ))}
                            </ol>
                        );
                    }
                })()}
            </div>
        );
    }
}

Ranking.propTypes = {
    // from props
    categoryId: PropTypes.string,

    // from dispatch
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,

    // from state
    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    ranking: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ),
    error: PropTypes.bool.isRequired
}

Ranking.defaultProps = {
    categoryId: '1'
}