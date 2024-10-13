// import { Card, Text, Spacer, Link } from "@nextui-org/react";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

const trendingData = [
  {
    category: "TRENDING IN INDONESIA",
    trends: [
      { hashtag: "#Minions", tweets: "97.7k Tweets" },
      { hashtag: "#SeninBarokah", tweets: "87.2k Tweets" },
    ],
  },
  { category: "NFT", trends: [{ hashtag: "#Texos", tweets: "122.7k Tweets" }] },
  {
    category: "FOOTBALL",
    trends: [
      { hashtag: "#MUFC", tweets: "97.2k Tweets" },
      { hashtag: "#Rangnick", tweets: "77.2k Tweets" },
      { hashtag: "#ThxOle", tweets: "54.2k Tweets" },
    ],
  },
];

const TrendingCard = () => {
  return (
    <Card className="max-w-sm bg-light-card dark:bg-dark-background shadow-2xl text-white">
      <CardHeader className="flex items-center justify-between">
        <h4 className="ml-3 text-lg">Trending for you</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </CardHeader>

      <Divider className="my-2" />

      <CardBody className="p-4">
        {trendingData.map((section, idx) => (
          <div key={idx}>
            <p className="text-xs text-light-text dark:text-dark-text mb-1">
              {section.category}
            </p>
            {section.trends.map((trend, trendIdx) => (
              <div
                key={trendIdx}
                className="flex justify-between items-center mb-3"
              >
                <p className="text-sm text-light-text dark:text-dark-text">
                  {trend.hashtag}
                </p>
                <p className="text-xs text-light-text dark:text-dark-text">
                  {trend.tweets}
                </p>
              </div>
            ))}
            {idx < trendingData.length - 1 && <div className="h-2" />}
          </div>
        ))}
      </CardBody>

      <Divider className="my-2" />

      <CardFooter className="flex justify-center">
        <Button variant="light" className="text-blue-400">
          Show More...
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TrendingCard;
