import React from "react";
import Article from "../components/Article";

const article = [
  {
    id: 1,
    title: "What?",
    author: "XYZ",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quod nobis iusto fuga, ad reiciendis reprehenderit nam sunt perferendis blanditiis quasi laboriosam, quisquam numquam architecto eveniet praesentium expedita. Modi, corrupti.",
  },
  {
    id: 2,
    title: "Who?",
    author: "XYZ",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quod nobis iusto fuga, ad reiciendis reprehenderit nam sunt perferendis blanditiis quasi laboriosam, quisquam numquam architecto eveniet praesentium expedita. Modi, corrupti.",
  },
  {
    id: 3,
    title: "Which?",
    author: "XYZ",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quod nobis iusto fuga, ad reiciendis reprehenderit nam sunt perferendis blanditiis quasi laboriosam, quisquam numquam architecto eveniet praesentium expedita. Modi, corrupti.",
  },
];

const HomePage = () => {
  const artList = article.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
