"use client";
import React, { useRef} from "react";
import { useScroll } from "framer-motion";
import Card from "./Card";

const data = [
  {
    title: "Development",
    description:
      "I have experience of more than 2 years in web development. I have worked on various projects and have a good understanding of how to structure a project.",
    img: "https://i.pinimg.com/236x/7b/ba/9b/7bba9b580e91d931d2a3b0c0a052f833.jpg",
    color: "#B43F3F",
  },
  {
    title: "Design",
    description:
      "I have experience of more than 2 years in UI/UX design. I have worked on various projects and have a good understanding of how to make a responsive and user friendly design.",
    img: "https://i.pinimg.com/236x/81/57/0e/81570e03bd2b620a995722521ac7b992.jpg",
    color: "#DAD4B5",
  },
  {
    title: "SEO",
    description:
      "I have experience of more than 2 years in SEO. I have worked on various projects and have a good understanding of how to optimize a website for search engine.",
    img: "https://i.pinimg.com/236x/95/a6/84/95a684a0ad59bee7f9267503d9048a4d.jpg",
    color: "#A6B37D",
  },
  {
    title: "Digital Marketing",
    description:
      "I have experience of more than 2 years in digital marketing. I have worked on various projects and have a good understanding of how to make a marketing strategy.",
    img: "https://i.pinimg.com/236x/08/c6/b5/08c6b5674dfeb6b842ad66e2c3e3b6b3.jpg",
    color: "#7C93C3",
  },
  {
    title: "Data Analysis",
    description:
      "I have experience of more than 2 years in data analysis. I have worked on various projects and have a good understanding of how to make a data analysis.",
    img: "https://i.pinimg.com/474x/32/f4/65/32f4655c42b146d2bfbf94be13273979.jpg",
    color: "#C63C51",
  },
  {
    title: "Cloud Computing",
    description:
      "I have experience of more than 2 years in cloud computing. I have worked on various projects and have a good understanding of how to make a cloud computing.",
    img: "https://i.pinimg.com/236x/a0/73/b4/a073b4c1a09bb68f0c7621efe447d4f0.jpg",
    color: "#EEDF7A",
  },
];


const page = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className={"my-[50vh]"}>
      {data.map((item, index) => {
        const ta =  1 -(( data.length - index )*0.05)
        return (
          <Card key={index} item={item} i={index} progress={scrollYProgress} range={[index*0.025, 1]} targetScale={ta} />
        );
      })}
    </div>
  );
};

export default page;
