import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
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
                            ranking.map((item, i) => (
                                <Card
                                    key={`ranking-item-${item.code}`}
                                    style={{
                                        maxWidth: '500px', margin: '32px auto'
                                    }}>
                                    <CardMedia
                                        image={item.imageUrl}
                                        title={`No.${i + 1} ${item.name}`}
                                        style={{ height: '200px' }} />
                                    <CardContent>
                                        <Typography type='title'>
                                            {`No.${i + 1} ${item.name}`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant='contained' color='primary' fullWidth href={item.url}>
                                            Go to page
                                            </Button>
                                    </CardActions>
                                </Card>
                            ))
                        );
                    }
                })()}
            </div >
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