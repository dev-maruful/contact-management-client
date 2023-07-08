import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import useAxios from "../hooks/useAxios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const UpdateContact = () => {
  const { id } = useParams();
  const API = useAxios();
  const [currentContact, setCurrentContact] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API(`/contacts/${id}`).then((data) => {
      setCurrentContact(data.data);
    });
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, phone, email } = data;

    const contactInfo = { name, phone, email };

    API.put(`/contacts/${id}`, contactInfo)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          reset();
          toast.success("Contact updated successfully");
          navigate("/");
        } else {
          toast.error("Update at least one field");
        }
      })
      .catch((err) => console.log(err));
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
            {...register("name")}
            id="name"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            {...register("phone")}
            id="phone"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            {...register("email", { pattern: /^\S+@\S+$/i })}
            id="email"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-400"
          />
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
