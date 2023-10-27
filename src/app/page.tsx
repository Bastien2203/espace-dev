import { TrendyArticles } from "@/components/organisms/TrendyArticles";
import { Suspense } from "react";
import { LoadingIcon } from "@/components/atoms/LoadingIcon";
import { ChartNumberArticlePerDay } from "@/components/organisms/ChartNumberArticlePerDay";
import prisma from "@/db";

export default async function Home() {
  const articles = await prisma.article.findMany({});

  return (
    <>
      <div className="flex justify-around">
        <div className="w-full px-10">
          <h2>Articles Tendances</h2>
          <div className="flex flex-col justify-center items-center mt-4">
            <Suspense fallback={<LoadingIcon />}>
              <TrendyArticles />
            </Suspense>
          </div>
        </div>

        <div className="w-full px-10">
          <h2>Nombres d&apos;articles par jour</h2>
          <div className="mt-4">
            <ChartNumberArticlePerDay articles={articles} />
          </div>
        </div>
      </div>
    </>
  );
}
