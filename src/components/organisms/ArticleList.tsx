import { Article } from "@prisma/client";
import prisma from "@/db";

export const ArticleList = async () => {
  const articles = await prisma.article.findMany({});

  return (
    <div className="flex flex-col gap-4 w-full">
      {articles.map((_article: Article) => (
        <a
          href=""
          className="shadow py-2 px-4 rounded-lg flex flex-col hover:shadow-lg "
          key={_article.id}
        >
          <h2>{_article.title}</h2>
          <span>{_article.description}</span>
          <i className="self-end text-gray-400 text-sm">
            {_article.posted_at.toDateString()}
          </i>
        </a>
      ))}
    </div>
  );
};
