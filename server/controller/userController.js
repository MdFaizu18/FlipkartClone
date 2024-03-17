import User from "../model/userSchema.js";


export const userSignup = async (req, res) => {
    try {
        const exist = await User.findOne({userame:req.body.username});
        if(exist){
            return res.status(401).json({message:'user already exist'})
        }

        const newUser = await User.create(req.body);
        console.log(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const userLogin = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username, password: req.body.password });
        if (user) {
            return res.status(200).json({data:user});
        } else {
            return res.status(401).json('Invalid Login');
        }

    } catch (error) {
        res.json('Error: ', error.message);
    }
}
