"use-client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ResetPassForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required("Email is required, must be a valid email"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
      // prevent default form submission
      console.log(data);
      
    reset();
  };

  return (
    <>
      <form
        className="flex flex-col space-y-4 w-full md:w-[400px] mt-4 bg-sky-400 bg-opacity-50 rounded-md p-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col space-y-1">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-500"
          >
            Email
          </label>
          <input
            className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm w-full bg-zinc-800 text-yellow-200 font-semibold text-base my-2 hover:bg-slate-500 hover:shadow-sm invalid:ring-2 invalid:ring-red-500 "
            type="email"
            placeholder="Your email Address"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm bg-sky-500
                    hover:bg-opacity-70 text-lg font-semibold text-white w-full"
        >
          Reset Password
        </button>
      </form>
    </>
  );
};

export default ResetPassForm;
