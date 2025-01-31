import User from "../models/user.model.js"; // Ensure correct import

export const registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body); // Use `User`, not `userModel`
    await newUser.save();
    res.status(201).send({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(400).send({ message: "Error registering user", error: error.message });
  }
};
