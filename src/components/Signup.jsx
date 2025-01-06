


import React, { useState } from "react";
import { TextField, Button, Stepper, Step, StepLabel } from "@mui/material";
import * as yup from "yup";
import { toast } from "react-toastify";


const stepSchemas = [
  yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    state: yup.string().required("State is required"),
  }),
  yup.object().shape({
    physics: yup.number().min(0).max(100).required("Physics marks are required"),
    chemistry: yup.number().min(0).max(100).required("Chemistry marks are required"),
    maths: yup.number().min(0).max(100).required("Maths marks are required"),
    percentage: yup.number().min(0).max(100).required("Percentage is required"),
  }),
  yup.object().shape({
    collegeName: yup.string().required("College name is required"),
    collegeCity: yup.string().required("College city is required"),
    admissionYear: yup.number().min(1900).max(new Date().getFullYear()).required("Admission year is required"),
    graduationYear: yup.number().min(1900).max(new Date().getFullYear()+5).required("Graduation year is required"),
    semester1: yup.number().min(0).max(10).required("Semester 1 SGPA is required"),
    semester2: yup.number().min(0).max(10).required("Semester 2 SGPA is required"),
  }),
];

const steps = ["Personal Information", "School Details", "Institute Marks"];

const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    state: "",
    physics: "",
    chemistry: "",
    maths: "",
    percentage: "",
    collegeName: "",
    collegeCity: "",
    admissionYear: "",
    graduationYear: "",
    semester1: "",
    semester2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = async () => {
    try {
      await stepSchemas[activeStep].validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const handleNextStep = async () => {
    const isValid = await validateStep();
    if (isValid) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const isValid = await validateStep();
    if (isValid) {
      console.log("FormData is here:", formData);
      toast.success("Form submitted successfully");
    }
  };

  return (
    <div className="p-4 bg-gray-100">
    
    <h1 className="text-black text-[25px] font-[600]">Task Name</h1>
    <p className="text-gray-600 text-[15px] font-[400]">
    Build a form with multiple steps or sections, with validation for each step.</p>
   
    <div className="flex flex-col items-center p-6 mt-5">
      <Stepper activeStep={activeStep} alternativeLabel className="w-full max-w-2xl">
        {steps.map((elm) => (
          <Step key={elm}>
            <StepLabel>{elm}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form className="w-full max-w-2xl mt-6 bg-white shadow-md rounded-lg p-6 space-y-4">
 
        {activeStep === 0 && (
          <>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              error={errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              error={errors.phone}
              helperText={errors.phone}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              error={errors.email}
              helperText={errors.email}
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              error={errors.password}
              helperText={errors.password}
            />
            <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              fullWidth
              error={errors.state}
              helperText={errors.state}
            />
          </>
        )}

    
        {activeStep === 1 && (
          <>

            <TextField
              label="Physics"
              name="physics"
              value={formData.physics}
              onChange={handleChange}
              fullWidth
              error={errors.physics}
              helperText={errors.physics}
            />
            <TextField
              label="Chemistry"
              name="chemistry"
              value={formData.chemistry}
              onChange={handleChange}
              fullWidth
              error={errors.chemistry}
              helperText={errors.chemistry}
            />
            <TextField
              label="Maths"
              name="maths"
              value={formData.maths}
              onChange={handleChange}
              fullWidth
              error={errors.maths}
              helperText={errors.maths}
            />
            <TextField
              label="Percentage"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              fullWidth
              error={errors.percentage}
              helperText={errors.percentage}
            />
          </>
        )}

        {activeStep === 2 && (
          <>
            <TextField
              label="College Name"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              fullWidth
              error={errors.collegeName}
              helperText={errors.collegeName}
            />
            <TextField
              label="College City"
              name="collegeCity"
              value={formData.collegeCity}
              onChange={handleChange}
              fullWidth
              error={errors.collegeCity}
              helperText={errors.collegeCity}
            />
            <TextField
              label="Admission Year"
              name="admissionYear"
              value={formData.admissionYear}
              onChange={handleChange}
              fullWidth
              error={errors.admissionYear}
              helperText={errors.admissionYear}
            />
            <TextField
              label="Graduation Year"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              fullWidth
              error={errors.graduationYear}
              helperText={errors.graduationYear}
            />
            <TextField
              label="Semester 1 SGPA"
              name="semester1"
              value={formData.semester1}
              onChange={handleChange}
              fullWidth
              error={errors.semester1}
              helperText={errors.semester1}
            />
            <TextField
              label="Semester 2 SGPA"
              name="semester2"
              value={formData.semester2}
              onChange={handleChange}
              fullWidth
              error={errors.semester2}
              helperText={errors.semester2}
            />
          </>
        )}

   
        <div className="flex justify-between mt-6">
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            variant="outlined"
            className="text-gray-700"
          >
            Back
          </Button>
          {activeStep < steps.length - 1 ? (
            <Button onClick={handleNextStep} variant="contained" className="bg-blue-500">
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} variant="contained" className="bg-green-500">
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;

