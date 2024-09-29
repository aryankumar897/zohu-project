import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  insuranceType: { type: String, default: 'Not found' },
  department: { type: String, default: 'Not found' },
  typeOfLeave: { type: String, default: 'Not found' },
  startDate: { type: String, default: 'Not found' },
  endDate: { type: String, default: 'Not found' },
  carNumber: { type: String, default: 'Not found' },
  insuranceCompany: { type: String, default: 'Not found' },
  premium: { type: String, default: 'Not found' },
  grossPremium: { type: String, default: 'Not found' },
  reason: { type: String, default: 'Not found' }
});



export default mongoose.model('Employee', employeeSchema);