import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

type InputFieldProps<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  placeholder: string;
  isPassword?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  placeholder,
  isPassword,
  ...rest
}: InputFieldProps<TFieldValues>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController<TFieldValues>({
    name,
    control,
    defaultValue: (rest.value as any) || "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[#252C48] dark:text-[#c5c2c2] text-sm xl:text-base leading-[1.5] font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          placeholder={placeholder}
          value={value}
          type={
            isPassword ? `${passwordVisible ? "text" : "password"}` : "text"
          }
          onChange={onChange}
          className="border text-[#252C48] leading-[1.5] xl:text-sm text-xs border-[#C8CBD0] focus:outline focus:outline-[#5B96F7] bg-transparent p-[15px] h-[40px] rounded-md w-full mt-[6px]"
          {...rest}
        />
        {isPassword && (
          <Image
            onClick={() => setPasswordVisible(!passwordVisible)}
            className={classNames(
              passwordVisible && "top-[18px]",
              "right-[15px] absolute top-[16px] w-[19px] h-[19px] cursor-pointer"
            )}
            src={
              passwordVisible ? "/icons/visible.svg" : "/icons/invisible.svg"
            }
            alt="eye icon"
            width={20}
            height={20}
          />
        )}
      </div>
      {error && (
        <span className="text-[#FC6C62] text-[12px] leading-[16px] font-normal">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
