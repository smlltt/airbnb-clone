"use client";

import React from "react";
import Container from "@/app/components/container";
import Category from "@/app/components/navbar/categories/Category";
import { usePathname, useSearchParams } from "next/navigation";
import routes from "@/app/routes";
import { CATEGORIES } from "@/app/constants";
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
        {CATEGORIES.map(({ label, icon }) => (
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
