import articleData from "../article-data";

const Articles = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto px-10 lg:px-25 mt-5 py-30">
        <div>
          <h1 className="herotxt text-3xl my-5">Latest Articles</h1>
        </div>
        <div className="flex justify-between px-0 gap-10 mt-20 md:mt-5 flex-col md:flex-row md:flex-wrap lg:flex-row">
          {articleData.map((data) => {
            return (
              <div className="w-10/10 md:w-2/9 shadow-sm rounded-sm" id={data.id}>
                <img className="rounded-sm w-full h-80 object-cover brightness-50" src={data.image} alt="" />
                <p className="text-xl mt-3 p-2 myp">{data.author}</p>
                <h2 className="text-lg my-3 p-2 myp">{data.title}</h2>
                <p className="my-2 p-2 herotxt">{data.intro}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
