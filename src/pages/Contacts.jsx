import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Contacts = () => {
  const API = useAxios();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API("/contacts")
      .then((data) => {
        setContacts(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    API.delete(`/contacts/${id}`)
      .then((data) => {
        if (data?.data?.deletedCount) {
          toast.success("Contact deleted successfully");
          const existingContacts = contacts.filter(
            (contact) => contact._id !== id
          );
          setContacts(existingContacts);
        }
      })
      .catch((err) => console.log(err));
  };

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
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact._id}>
                <th>{index + 1}</th>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <Link to={`/updateContact/${contact._id}`}>
                    <button className="py-2 px-3 border-2 border-blue-500 hover:bg-blue-500 hover:text-white">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="py-2 px-3 border-2 border-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
