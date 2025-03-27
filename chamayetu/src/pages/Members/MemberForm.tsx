import "./Members.css";
import MemberDetails from "./MemberDetails";
import React, { useEffect, useState } from "react";

type Member = {
  first_name: string;
  last_name: string;
  member_id: string;
  phone_number: string;
  email: string;
  password: string;
  confirm_password: string;
  is_admin: boolean;
  is_active: boolean;
};

const MemberForm: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [formData, setFormData] = useState<Member>({
    first_name: "",
    last_name: "",
    member_id: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
    is_admin: false,
    is_active: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "is_admin" ? value === "true" : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.member_id ||
      !formData.phone_number ||
      !formData.email
    ) {
      alert("All fields are required!");
      return;
    }
    console.log(formData);
    RegisterMember();
    setMembers([...members, formData]);
    setFormData({
      first_name: "",
      last_name: "",
      member_id: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: "",
      is_admin: false,
      is_active: true,
    });
  };
  const RegisterMember = () => {
    useEffect(() => {
      const registerMember = async () => {
        try {
          const response = await fetch(
            "http://localhost:8080/rest/members/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log("Registration successful:", data);
        } catch (error) {
          console.error("Error registering member:", error);
        }
      };

      registerMember();
    }, []);

    return null;
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          value={formData.first_name}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          value={formData.last_name}
          onChange={handleChange}
        />

        <label htmlFor="memberId">Member ID</label>
        <input
          type="text"
          placeholder="Enter Member ID"
          name="memberId"
          value={formData.member_id}
          onChange={handleChange}
        />

        <label htmlFor="contact">Phone Number</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="contact"
          value={formData.phone_number}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          name="email"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="text"
          placeholder="Confirm Password"
          name="email"
          value={formData.confirm_password}
          onChange={handleChange}
        />
        <label htmlFor="isAdmin">Is Admin?</label>
        <select
          name="isAdmin"
          value={String(formData.is_admin)}
          onChange={handleChange}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

type SidePageProps = {
  onClose: () => void;
};

const SidePage: React.FC<SidePageProps> = ({ onClose }) => {
  return (
    <div className="side-page">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <MemberForm />
    </div>
  );
};

export default SidePage;
