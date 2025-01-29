import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importă useNavigate
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const [formData, setFormData] = useState({
    fromAddress: "",
    toAddress: "",
    journeyDate: "",
    journeyTime: "",
    carType: "ac",
  });

  const navigate = useNavigate(); // Hook pentru navigare

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Poți adăuga validare sau logica de salvare aici
    console.log("Form data:", formData);

    // Navighează la pagina CarListing
    navigate("/CarListing", { state: formData });
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            name="fromAddress"
            placeholder="From address"
            value={formData.fromAddress}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="toAddress"
            placeholder="To address"
            value={formData.toAddress}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            name="journeyDate"
            placeholder="Journey date"
            value={formData.journeyDate}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            name="journeyTime"
            placeholder="Journey time"
            value={formData.journeyTime}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
          >
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;


