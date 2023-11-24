import { Grid, Typography } from '@mui/material';
import { Article } from './Article';
import { useContext } from 'react';
import ArticlesContext from '../context/ArticlesProvider';

export const Articles = () => {
    const { articles } = useContext(ArticlesContext);
    return (
        <>
            <Typography variant="h3" aling="center" marginY={5}>
                List Articles
            </Typography>
            <Grid container spacing={2}>
                {articles.map((article) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Article key={article.publishedAt} article={article} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
