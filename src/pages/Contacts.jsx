import React from "react";
import SectionTitle from "../components/SectionTitle";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const Contacts = () => {
  const API = useAxios();

  return (
    <div>
      <SectionTitle title="Contacts"></SectionTitle>
      <Link to="/addContact">
        <div className="text-end">
          <button className="w-52 py-1 px-5 border-2 border-blue-500 uppercase font-medium hover:bg-blue-500 cursor-pointer hover:text-white mb-5">
            Add New Contact
          </button>
        </div>
      </Link>
      <div className="overflow-x-auto max-w-3xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
