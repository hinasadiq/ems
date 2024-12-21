// import  Jwt from "jsonwebtoken";
//  import User from "../models/User.js";

// const verifyUser =  async (req,res) => {
//     try{
//         const token  = req.headers.authorization.split(' ')[1];

//         if(!token){
//             return res.status(404).json({success:false,error:"token not provided"})
//         }
//          const decoded =  await Jwt.verify(token,process.env.jwt_key)
//          if(!decoded){
//             return res.status(404).json({success:false,error:"token not valid"})
//          }
//        const user = await User.findById({_id:decoded._id}).select('-password')
//        if(!user){
//         return res.status(404).json({success:false,error:"User not found"})
//        }
//        req.user = user
//        next()
//     }
//     catch(error){
//         return res.status(404).json({success:false,error:"servor error"})
//     }

// }
// export default verifyUser
// import Jwt from "jsonwebtoken";
// import User from "../models/User.js";  // Ensure the correct file extension

// const verifyUser = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;
//         if (!authHeader) {
//             return res.status(404).json({ success: false, error: "Token not provided" });
//         }

//         const token = authHeader.split(' ')[1];  // Corrected split method
//         const decoded = await Jwt.verify(token, process.env.JWT_KEY);  // Ensure the correct environment variable name

//         if (!decoded) {
//             return res.status(404).json({ success: false, error: "Token not valid" });
//         }

//         const user = await User.findById({ _id: decoded._id }).select('-password');  // Corrected field exclusion
//         if (!user) {
//             return res.status(404).json({ success: false, error: "User not found" });
//         }

//         req.user = user;
//         next();  // Call next to proceed to the next middleware or route handler
//     } catch (error) {
//         return res.status(500).json({ success: false, error: "Server error" });  // Corrected status code
//     }
// }

// export default verifyUser;
// import Jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const verifyUser = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         if (!authHeader || !authHeader.startsWith("Bearer ")) {
//             return res.status(401).json({ success: false, error: "Token not provided or invalid format" });
//         }

//         const token = authHeader.split(' ')[1];
//         const decoded = await Jwt.verify(token, process.env.JWT_KEY);

//         const user = await User.findById(decoded._id).select('-password');
//         if (!user) {
//             return res.status(404).json({ success: false, error: "User not found" });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         if (error.name === "TokenExpiredError") {
//             return res.status(401).json({ success: false, error: "Token has expired" });
//         } else if (error.name === "JsonWebTokenError") {
//             return res.status(401).json({ success: false, error: "Invalid token" });
//         } else {
//             return res.status(500).json({ success: false, error: "Server error" });
//         }
//     }
// };

//     export default verifyUser;
import Jwt from "jsonwebtoken";
import User from "../models/User.js";

const verifyUser = async (req, res, next) => {
    console.log('middleware triggered for token verification')
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, error: "Token not provided or invalid format" });
        }

        const token = authHeader.split(' ')[1];
        console.log('Token recived:',token);
        const decoded = Jwt.verify(token, process.env.JWT_KEY);
        console.log('Token decoded successfully:',decoded);
        const user = await User.findById(decoded._id).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ success: false, error: "Token has expired" });
        } else if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ success: false, error: "Invalid token" });
        } else {
            return res.status(500).json({ success: false, error: "Server error" });
        }
    }
};

export default verifyUser;