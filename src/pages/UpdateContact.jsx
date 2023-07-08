import React from "react";
import SectionTitle from "../components/SectionTitle";
import useAxios from "../hooks/useAxios";
import { useForm } from "react-hook-form";

const UpdateContact = () => {
  const API = useAxios();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { name, phone, email } = data;

    const contactInfo = { name, phone, email };

    API.put(`/contacts/${phone}`, contactInfo).then((data) => {
      console.log(data.data);
    });
  };

  return (
    <div>
      <SectionTitle title="Update Contact"></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 bg-white rounded shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name", { required: true })}
            id="name"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400"
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            {...register("phone", { required: true })}
            id="phone"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400"
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            id="email"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              Please enter a valid email address
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateContact;
