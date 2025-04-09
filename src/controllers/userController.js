const getUsers = (req, res) => {
    res.json({ message: 'All users route working' });
  };
  
  module.exports = { getUsers };
  

const registerUser = asyncHandler(async(req,res)=>{
    //destructure of req.body
    const {name,email,password,phone}=req.body;
    if (!name || !email || !password || !phone) {
        throw new ApiErrors(400, "All fields are required");
    }
    const existedUser= await User.findOne({
        $or:[{ email}, { phone }]
    })
    if(existedUser){
        throw new ApiErrors(409, "User already exists with the same email or phone.");
    }
        const user=await User.create({
            name,
            phone,
            email,
            role,
            password,
        })
        const userCreated= await User.findById(user._id).select(
            "-password -refreshToken"   
        )
        if(!userCreated){
            throw new ApiErrors(500,"something went wrong while registering the user");
        }
        return res.status(201).json(
            new ApiResponse(200,userCreated,"user was registered successfully")
        );
})