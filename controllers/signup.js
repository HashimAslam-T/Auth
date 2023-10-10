const {User} = require('../sequelizeModels/userModel')

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.create({ username, password });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    if (error instanceof Sequelize.ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Sequelize.UniqueConstraintError) {
      res.status(409).json({ message: 'Username already exists' });
    } else {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
};

module.exports = {signUp}
