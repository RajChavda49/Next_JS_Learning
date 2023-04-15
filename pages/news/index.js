const ListOfNews = ({ news }) => {
  return (
    <>
      {news.map((article) => (
        <div key={article?.id}>
          <h1>
            {article?.title} | {article?.description} | {article?.category}{" "}
          </h1>
        </div>
      ))}
    </>
  );
};

export default ListOfNews;

export async function getServerSideProps() {
  const resposne = await fetch("http://localhost:4000/news");
  const news = await resposne.json();
  return {
    props: { news },
  };
}
