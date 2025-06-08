import AdminSeeker from "./AdminSeekerList"
import AdminRecruiter from "./AdminRecruiterList"
import React, { useState } from "react";

const Dasboard = () => {
  const [recruiterLoading, setrecruiter] = useState(true);
  const [seekerLoading, setSeeker] = useState(true);

  const isLoading = recruiterLoading || seekerLoading;

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Admin Dashboard</h3>

      <AdminRecruiter setLoading={setrecruiter} />
      <hr />
      <AdminSeeker setLoading={setSeeker} />

      {isLoading && (
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-white bg-opacity-100" style={{ zIndex: 999 }}>
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Loading all data...</p>
        </div>
      )}
    </div>
  );
};

export default Dasboard;
