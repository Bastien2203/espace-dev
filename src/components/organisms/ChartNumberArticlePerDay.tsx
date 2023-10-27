"use client";

import "chart.js/auto";
import { useEffect, useState } from "react";
import { Article } from "@prisma/client";
import { Bar } from "react-chartjs-2";

export const ChartNumberArticlePerDay = (props: { articles: Article[] }) => {
  const [chartConfig, setChartConfig] = useState<{
    labels: number[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }[];
  }>();

  useEffect(() => {
    const dayCountMap = new Map<number, number>();

    props.articles.forEach((_article) => {
      const day = _article.posted_at.getDate();
      if (dayCountMap.has(day)) {
        dayCountMap.set(day, dayCountMap.get(day)! + 1);
      } else {
        dayCountMap.set(day, 1);
      }
    });

    setChartConfig({
      labels: Array.from(dayCountMap, ([key, value]) => key),
      datasets: [
        {
          label: "Nombres d'articles",
          data: Array.from(dayCountMap, ([key, value]) => value),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "&quot;#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [props.articles]);

  if (chartConfig === null) {
    return <></>;
  }

  return (
    <>
      {chartConfig && (
        <div className="chart-container">
          <Bar
            data={chartConfig}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      )}
    </>
  );
};
