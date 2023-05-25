"use client";

import React from "react";
import {
  FaSkiing,
  FaUmbrellaBeach,
  FaVolleyballBall,
  FaTree,
  FaParachuteBox,
  FaMountain,
  FaFire,
  FaSpaceShuttle,
  FaCity,
  FaPalette,
} from "react-icons/fa";
import Container from "@/app/components/container";
import Category from "@/app/components/navbar/categories/Category";

export const categories = [
  {
    label: "Beach",
    icon: FaUmbrellaBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing facilities!",
  },
  {
    label: "Sport",
    icon: FaVolleyballBall,
    description: "This property has sports facilities!",
  },
  {
    label: "Nature",
    icon: FaTree,
    description: "This property is close to a national park!",
  },
  {
    label: "FaParachuteBox",
    icon: FaParachuteBox,
    description: "This property has extreme sports facilities",
  },
  {
    label: "Mountains",
    icon: FaMountain,
    description: "This property is in the mountains!",
  },
  {
    label: "Trending",
    icon: FaFire,
    description: "This property is trending!",
  },
  {
    label: "OMG!",
    icon: FaSpaceShuttle,
    description: "This property will amaze you!",
  },
  {
    label: "City",
    icon: FaCity,
    description: "This property is in a big city!",
  },
  {
    label: "Creative spaces",
    icon: FaPalette,
    description: "This property will amaze you!",
  },
];
const Categories = () => {
  return (
    <Container>
      <div className={"flex justify-between overflow-x-auto pt-8"}>
        {categories.map(({ label, icon }) => (
          <Category key={label} icon={icon} label={label} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
