const {User} = require('../sequelizeModels/userModel')
const {secret} = require('../controllers/login')
const jwt = require('jsonwebtoken');

const profile = async (req, res) => {
    try 
    {
      const token = req.headers['authorization'];
  
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }
  
      const decoded = jwt.verify(token, secret);
  
      const userId = decoded.id;
  
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ user });
    } 

    catch (error) 
    {
      console.error(error);
      if (error instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ message: error.message });
      } 
      else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  };

  module.exports={profile};