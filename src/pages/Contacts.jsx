import React from "react";
import SectionTitle from "../components/SectionTitle";

const Contacts = () => {
  return (
    <div className="mt-10">
      <SectionTitle title="Contacts"></SectionTitle>
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
