import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import Select from "react-select";

export type InputFieldType = {
  title: string;
  members: [];
};

const schema = yup.object({
  title: yup.string().required("Title is required"),
  members: yup.array().min(2, "Must have at least 2 members"),
});

const CreateGroupFrom = () => {
  const Members: any = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputFieldType>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = (data: InputFieldType) => console.log(data);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[20px]"
      >
        <InputField
          label="Email"
          name="title"
          control={control}
          placeholder="Enter Your Email"
        />
        <div>
          <label className="block text-[#252C48] dark:text-[#c5c2c2] text-sm xl:text-base leading-[1.5] font-medium">
            Members
          </label>
          <Controller
            name="members"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={Members}
                className="mt-[5px] bg-transparent"
              />
            )}
          />
          {errors.members && (
            <span className="text-[#FC6C62] text-[12px] leading-[16px] font-normal">
              {errors?.members?.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex justify-end w-full">
          <button className="w-[118px] h-[48px] bg-[#3366FF] text-white text-[15px] font-medium rounded-[8px]">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroupFrom;
