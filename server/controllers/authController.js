/**
 * The login function in this JavaScript code handles user authentication by checking the email and
 * password, generating a JWT token, and returning user information if successful.
 * @param req - The `req` parameter in the `login` function stands for the request object. It contains
 * information about the HTTP request that is being made, such as the request headers, body,
 * parameters, and more. In this case, `req.body` is used to extract the `email` and `
 * @param res - The `res` parameter in the `login` function is the response object that will be used to
 * send the response back to the client making the request. It is typically an instance of the Express
 * response object, which provides methods for sending various types of responses (e.g., JSON, HTML,
 * etc
 * @returns The `login` function is being exported as an object with the key `login`. This function
 * handles user login by checking the provided email and password against the database, generating a
 * JWT token if the credentials are correct, and returning a success response with the token and user
 * information. If there are any errors during the process, it will return an error response with the
 * appropriate message.
 */
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ success: false, error: "Wrong password" });
    }
    
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );

    res.status(200).json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, role: user.role },
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export default { login };
