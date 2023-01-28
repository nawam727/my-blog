import ArticlesList from '../components/ArticlesList';
import articles from './ArticleContent';

const ArticleList = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticleList;