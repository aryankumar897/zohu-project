import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Employee from './models/user.js'; 


const app = express();

 const  database ='mongodb://localhost:27017/zohu'

// db
mongoose
  .connect(database, {
  
 
    useUnifiedTopology: true,
  
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR => ", err));

// middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);



// POST route to save employee details to the database
app.post('/api/add-employee', async (req, res) => {
  try {
    const { employeeId, insuranceType, department, typeOfLeave, startDate, endDate, carNumber, insuranceCompany, premium, grossPremium, reason } = req.body;

    // Create a new Employee instance
    const newEmployee = new Employee({
      employeeId,
      insuranceType,
      department,
      typeOfLeave,
      startDate,
      endDate,
      carNumber,
      insuranceCompany,
      premium,
      grossPremium,
      reason
    });

    // Save the employee to the database
    const savedEmployee = await newEmployee.save();
    console.log("saved success");
    res.status(201).json({
      message: 'Employee details saved successfully',
      employee: savedEmployee
    });
  } catch (error) {
    console.error('Error saving employee details:', error);
    res.status(500).json({ error: 'Failed to save employee details' });
  }
});





app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    console.log("employees")
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching employees', error });
  }
});













const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));