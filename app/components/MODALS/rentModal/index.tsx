"use client";

import React, { FC, useState } from "react";
import Modal from "../modal";

import { useRentModal } from "@/app/hooks";
import Button from "@/app/components/button";
import Heading from "@/app/components/heading";
import { CATEGORIES } from "@/app/constants";
import Category from "@/app/components/MODALS/rentModal/Category";
import { FieldValues, useForm } from "react-hook-form";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal: FC = () => {
  const { open, toggleRentModal } = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    if (step === STEPS.CATEGORY) {
      return;
    }
    setStep(step - 1);
  };

  const onNext = () => {
    if (step === STEPS.PRICE) {
      return;
    }
    setStep(step + 1);
  };

  const onCreate = () => {
    console.log("create");
  };

  return (
    <Modal open={open} onClose={toggleRentModal} title={"Airbnb your home"}>
      <Heading
        title={"Which of these best describes your place?"}
        subtitle={"Pick a category"}
      />
      {step === STEPS.CATEGORY && (
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 gap-3 my-4 justify-between px-4 max-h-[50vh] overflow-y-auto"
          }
        >
          {CATEGORIES.map(({ label, icon }) => (
            <Category
              label={label}
              icon={icon}
              selected={category === label}
              key={label}
              onClick={() => setCustomValue("category", label)}
            />
          ))}
        </div>
      )}
      {step === STEPS.PRICE ? (
        <Button onClick={onCreate} fullWidth>
          Create
        </Button>
      ) : (
        <Button onClick={onNext} fullWidth>
          Next
        </Button>
      )}
      {step !== STEPS.CATEGORY && (
        <Button
          onClick={onBack}
          fullWidth
          intent={"secondary"}
          className={"mt-2"}
        >
          Back
        </Button>
      )}
    </Modal>
  );
};

export default RentModal;
