'use client'
import { useState } from "react";

interface Address {
  regionCode: string;
  locality: string;
  addressLines: string[];
  // AIzaSyDoSHHtS0eU2-U3SLXiIzfNnnPkYlxASCQ
}

export default function UserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateAdress = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const addressLines = [formData.addressLine1, formData.addressLine2, formData.state, formData.country, formData.zipCode]

    const response = await fetch('https://addressvalidation.googleapis.com/v1:validateAddress?key=AIzaSyDoSHHtS0eU2-U3SLXiIzfNnnPkYlxASCQ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "address": {
          "addressLines": addressLines,
        }
      })
    })

    const data = await response.json()
    console.log(data)

    const isValid = data.result.verdict.addressComplete;

    if (isValid) {
      console.log('OK!')
    } else {
      console.log('NOT OK!')
    }

    setLoading(false)
  }

  return (
    <form className="form-control w-full p-3" onSubmit={validateAdress}>
      <div className="md:flex gap-3 w-full">
        <div className="w-full">
          <label htmlFor="first-name" className="label">
            <span className="label-text">First Name</span>
            <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
          </label>
          <input type="text" id="firstName" placeholder="Type here" value={formData.firstName} onChange={handleChange} className="input input-bordered input-sm md:input-md w-full" />
        </div>
        <div className="w-full">
          <label htmlFor="last-name" className="label">
            <span className="label-text">Last Name</span>
            <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
          </label>
          <input type="text" id="lastName" placeholder="Type here" value={formData.lastName} onChange={handleChange} className="input input-bordered input-sm md:input-md w-full" />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="address-line1" className="label">
          <span className="label-text">Address - Line 1</span>
          <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
        </label>
        <input type="text" id="addressLine1" placeholder="Type here" value={formData.addressLine1} onChange={handleChange}  className="input input-bordered input-sm md:input-md w-full" />
      </div>
      <div className="w-full">
        <label htmlFor="address-line2" className="label">
          <span className="label-text">Address - Line 2</span>
        </label>
        <input type="text" id="addressLine2" placeholder="Type here" value={formData.addressLine2} onChange={handleChange}   className="input input-bordered input-sm md:input-md w-full" />
      </div>
      <div className="md:flex gap-3 w-full">
        <div className="w-full">
          <label htmlFor="state" className="label">
            <span className="label-text">State</span>
            <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
          </label>
          <input type="text" id="state" placeholder="Type here" value={formData.state} onChange={handleChange} className="input input-bordered input-sm md:input-md w-full" />
        </div>
        <div className="w-full">
          <label htmlFor="zip-code" className="label">
            <span className="label-text">ZIP Code</span>
            <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
          </label>
          <input type="text" id="zipCode" placeholder="Type here" value={formData.zipCode} onChange={handleChange} className="input input-bordered input-sm md:input-md w-full" />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="country" className="label">
          <span className="label-text">Country</span>
          <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
        </label>
        <input type="text" id="country"value={formData.country} onChange={handleChange}  className="input input-bordered input-sm md:input-md w-full" placeholder="Type here" />
      </div>
      <button type="submit" className={`btn btn-primary btn-sm md:btn-md mt-3 ${loading ? 'btn-disabled' : ''}`}>
        {
          loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <span>Validate Adress</span>
          )
        }
      </button>
    </form>
  );
}
