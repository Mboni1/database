let articles = []

const ArticleController = {
    getAllArticles: (req, res) => {
        res.json(articles);
    },

    getArticleById: (req, res) => {
        const article = articles.find((a) => a.id === parseInt(req.params.id));
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.json(article);
    },

    createArticle: (req, res) => {
        const newArticle = {
            id: articles.length + 1,
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
        };
        articles.push(newArticle);
        res.status(201).json(newArticle);
    },

    updateArticle: (req, res) => {
        const article = articles.find((a) => a.id === parseInt(req.params.id));
        if (!article) return res.status(404).json({ message: "Article not found" });

        article.title = req.body.title || article.title;
        article.content = req.body.content || article.content;
        article.author = req.body.author || article.author;

        res.json(article);
    },

    deleteArticle: (req, res) => {
        articles = articles.filter((a) => a.id !== parseInt(req.params.id));
        res.status(204).send();
    },
};

export default ArticleController;