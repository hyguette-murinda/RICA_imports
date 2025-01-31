import Permit from "../models/permit.model.js"; // Ensure correct import

export const registerPermit = async (req, res) => {
  try {
    const newPermit = new Permit(req.body); // Use `User`, not `userModel`
    await newPermit.save();
    res.status(201).send({ message: "Permit registered successfully", permit: newPermit });
  } catch (error) {
    res.status(400).send({ message: "Error registering permit", error: error.message });
  }
};
