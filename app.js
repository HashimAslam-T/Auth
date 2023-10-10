const express = require('express');
const router1 = require('./routers/signupRouter');
const router2 = require('./routers/loginRouter');
const router3 = require('./routers/profileRouter');


const app = express();

app.use(express.json());
app.use('/',router1);
app.use('/',router2);
app.use('/',router3);



const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
