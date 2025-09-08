import express from 'express';

const app= express();   // creating express app instance
app.use(express.json());  // middleware to parse json data

//Middleware to log request method, Url and response status
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode}`);
  });
  next();
});

// Middelware for validating User credentials Post and Put Method
function validateUser(req, resp, next){
    const {firstName, lastName, hobby}= req.body;
    if(!firstName|| !lastName || !hobby){
        return resp.status(400).send({message: "All fields are required"});

    }
    next();
}


app.listen(3000,()=>{    // creating server at port 3000
    console.log("server started at port 3000"); //console message
});

// creating user array of object
const user=[
    {
        
"id": "1",
"firstName": "Anshika",
"lastName": "Agarwal",
"hobby":  "Teaching"
    },
]

// get request to fetch all users
app.get("/users",(req, resp)=>{
    resp.send(user);
}); 

// get request to fetch user by id
app.get("/users/:id",(req, resp)=>{
    const userId = req.params.id;
    const userData = user.find((u)=> u.id === userId);
    if(!userData){
        return resp.status(404).send({message: "User not found"});
    }
    resp.send(userData);
    });
    


// post request to create new user

app.post ("/user",(req, resp)=>{
    const {firstName, lastName, hobby} = req.body;
    const newUser ={
       id: Math.random()*10,
       firstName:firstName,
       lastName: lastName,
       hobby: hobby,
    };
    user.push(newUser);
    resp.status(201).send(newUser);
});

// put request to update user by id 

app.put ("/user/:id",(req, resp)=> {
    const userId = req.params.id;
    const userData = user.find((u)=> u.id == userId);
    if(!userData){
        return resp.status(404).send({message: "User not found"});
    };
    const keys = Object.keys(req.body);
    keys.forEach((key)=>{
        userData[key]= req.body[key];
    });
    resp.send(userData);
});

// delete request to delete user by id

app.delete("/user/:id", (req, resp)=>{
  const userId = req.params.id;
  const userData = user.find((u)=> u.id == userId);

  if(!userData){
    return resp.status(404).json({message:"user not found"});

  };
  const filteredUser = user.filter((u)=> u.id != userId);
  resp.send(filteredUser);


});


