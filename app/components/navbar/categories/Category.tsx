"use client";

import React, { FC, useCallback } from "react";
import { IconType } from "react-icons";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface CategoryProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}
const Category: FC<CategoryProps> = ({ icon: Icon, label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleCategorySelect = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [params, label, router]);

  return (
    <div
      className={clsx(
        "min-w-[100px] flex flex-col items-center space-y-1.5 cursor-pointer hover:text-neutral-800 transition border-b-2 hover:border-neutral-300 pb-3",
        selected
          ? "border-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      )}
      onClick={handleCategorySelect}
    >
      <Icon size={20} />
      <div className={"text-xs"}>{label}</div>
    </div>
  );
};

export default Category;
