import { useParams } from "react-router-dom";
import articles from "./ArticleContent";

const Article = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map(paragraph => (
            <p>{paragraph}</p>
        ))}
        </>
    );
}

export default Article;