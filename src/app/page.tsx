import { ArticleList } from "@/components/organisms/ArticleList";
import { Suspense } from "react";
import { LoadingIcon } from "@/components/atoms/LoadingIcon";

export default async function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <Suspense fallback={<LoadingIcon />}>
            <ArticleList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
