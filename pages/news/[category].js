export default function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>
        Showing the news of <b>{category}</b>
      </h1>
      {articles.map((article) => (
        <div key={article?.id}>
          <h2>
            {article.id} | {article.title}
          </h2>
          <p>{article?.description} </p>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const resposne = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await resposne.json();
  return {
    props: { articles: data, category: params.category },
  };
}
