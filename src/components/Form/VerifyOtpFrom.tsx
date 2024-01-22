"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReusableButton from "../Shared/ReusableButton";

interface OTPType {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
}

const schema = yup.object({
  code1: yup.string().required("Code is required"),
  code2: yup.string().required("Code is required"),
  code3: yup.string().required("Code is required"),
  code4: yup.string().required("Code is required"),
  code5: yup.string().required("Code is required"),
  code6: yup.string().required("Code is required"),
});

const VerifyOtpFrom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OTPType>({
    resolver: yupResolver(schema) as any,
  });

  const getErrorMessage = (index: number): string | undefined => {
    const key = `code${index}` as keyof FieldErrors<OTPType>;
    return errors[key]?.message;
  };
  const onSubmit = async (data: OTPType) => {
    console.log(data);
    try {
      setIsLoading(true);

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      const err = error.response ? error.response.data.messages : error.message;
      toast.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex mb-[15px] justify-center">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index}>
            <Controller
              name={`code${index}` as `code${1 | 2 | 3 | 4 | 5 | 6}`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    maxLength={1}
                    className="w-10 h-10 border border-gray-300 rounded mr-2 text-center focus:outline focus:outline-blue-600"
                    onKeyUp={(e) => {
                      if (e.key !== "Backspace" && e.key !== "Delete") {
                        // Move to the next input field on key press
                        const nextIndex = (index % 6) + 1;
                        const nextInput = document.querySelector(
                          `input[name="code${nextIndex}"]`
                        ) as HTMLInputElement;
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                  />
                </div>
              )}
            />
            {getErrorMessage(index) && (
              <p className="mt-2 text-sm first-letter:capitalize text-error">
                {getErrorMessage(index)}
              </p>
            )}
          </div>
        ))}
      </div>
      <ReusableButton title="Verify" loading={isLoading} />
    </form>
  );
};

export default VerifyOtpFrom;
