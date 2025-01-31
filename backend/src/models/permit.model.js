import mongoose from 'mongoose';

const PermitSchema = new mongoose.Schema({
  applicantCitizenship: String,
  id_doc_number: Number,
  passport: String,
  firstName: String,
  lastName: String,
  nationality: String,
  phone: String,
  email: String,
  location: String,
  businessType: String,
  companyName: String,
  tinNumber: String,
  registrationDate: Date,
  businessLocation: String,
  purposeOfImport: String,
  specifyPurposeOfImport: String,
  prodCategory: String,
  productName: String,
  weight: String,
  descriptions: String,
  unitOfMeasure: String,
  quantity: String,
});

export default mongoose.model('Permit', PermitSchema);