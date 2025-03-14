import React from "react";
import { motion } from "framer-motion";
// import crew1 from "../../assets/management_crew1.png";
// import crew2 from "../../assets/management_crew2.png";
// import crew3 from "../../assets/management_crew3.png";

const crewMembers = [
  {
    id: 1,
    name: "Harry Larson",
    role: "Yacht Officer",
    image: "./management_crew1.png",
    size: "full",
  },
  {
    id: 2,
    name: "Arnold Morris",
    role: "Captain",
    image: "./management_crew2.png",
    size: "square",
  },
  {
    id: 3,
    name: "Tomas Finn",
    role: "2nd Officer",
    image: "./management_crew3.png",
    size: "full",
  },
  {
    id: 4,
    name: "David Taylor",
    role: "Engineer",
    image: "./management_crew1.png",
    size: "half",
  },
  {
    id: 5,
    name: "Arnold Morris",
    role: "Captain",
    image: "./management_crew2.png",
    size: "half",
  },
  {
    id: 6,
    name: "Arnold Morris",
    role: "Captain",
    image: "./management_crew3.png",
    size: "full",
  },
];

const Card = () => {
  return (
    <div className="flex flex-wrap gap-y-10  gap-x-6 ">
      {crewMembers.map((member) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          key={member.id}
          className={`relative z-10 rounded-[8px] overflow-hidden w-[384px] ${
            member.size === "full"
              ? "h-[480x]"
              : member.size === "half"
              ? " h-[400px]"
              : "h-[325px]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="overlay w-full h-full absolute left-0 top-0 bg-no-repeat bg-cover bg-top -z-10"
            style={{ backgroundImage: `url(${member.image})` }}
          ></motion.div>
          <div className="absolute left-5 bottom-5">
            <h3 className="quick_sand font-bold text-xl mb-2 text-white capitalize">
              {member.name}
            </h3>
            <h4 className="uppercase nunito font-medium text-white">
              {member.role}
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
