import { Card, CardActions, CardContent, Link, Typography } from "@mui/material"

export const Article = ({article}) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {article.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                    href={article.url}
                    target="_blank"
                    variant="button"
                    width="100%"
                    >
                    Read More
                    </Link>
                </CardActions>
            </Card>
        </>
      )
}
