import Image, { StaticImageData } from "next/image";
import React from "react";
import blogIcon from "../../assets/blogIcon.png";
import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";

interface BlogCardProps {
  blog: {
    blogImg: StaticImageData | string;
    blogDate: string;
    blogTitle: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 md:max-w-[384px] w-full">
      <div className="w-full h-[350px] rounded-lg overflow-hidden">
        <Image
          src={blog?.blogImg}
          alt="Blog Image"
          className="w-full"
          unoptimized
        />
      </div>
      <div className="flex items-center gap-2">
        <Image src={blogIcon} alt="Blog Icon" />
        <h3 className="text-primary">{blog?.blogDate}</h3>
      </div>
      <h2 className="text-2xl austin font-medium">{blog?.blogTitle} </h2>
      <Link href="" className="flex gap-3 items-center text-customGray austin">
        Learn more <ImArrowRight2 className="text-customGray" />
      </Link>
    </div>
  );
};

export default BlogCard;
