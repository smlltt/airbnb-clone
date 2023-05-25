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
  FaGem,
  FaGlassMartini,
  FaCampground,
} from "react-icons/fa";
import Container from "@/app/components/container";
import Category from "@/app/components/navbar/categories/Category";
import { usePathname, useSearchParams } from "next/navigation";
import routes from "@/app/routes";

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
    label: "Extreme sports",
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
  {
    label: "Luxury",
    icon: FaGem,
    description: "This property will amaze you!",
  },
  {
    label: "Camping",
    icon: FaCampground,
    description: "This property will amaze you!",
  },
  {
    label: "Party",
    icon: FaGlassMartini,
    description: "This property will amaze you!",
  },
];
const Categories = () => {
  const params = useSearchParams();
  const selectedCategory = params?.get("category");
  const pathname = usePathname();
  const isHomePage = pathname === routes.home;

  if (!isHomePage) {
    return null;
  }

  return (
    <Container>
      <div className={"flex justify-between overflow-x-auto pt-8"}>
        {categories.map(({ label, icon }) => (
          <Category
            key={label}
            icon={icon}
            label={label}
            selected={label === selectedCategory}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
