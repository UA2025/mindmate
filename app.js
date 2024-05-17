
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('./mongo');
const User = require('./Model');
const Diary = require('./Diaryscheme'); 
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
// Cookie
app.use(cookieParser());
app.get('/', (req,res) => {
    res.cookie('Cookie_token_name', 'encoding cookie strong value', {
        maxAge: 5000,
        expires: new Date(),
        secure: true,
        httpOnly: true,
        sameSite: 'Lax'
    }); 
    res.send('Welcome to simple HTTP cookie and cookie send successfully');
    console.log(req.cookies);
});
app.get('/deleteCookie', (req, res) => {
    res.clearCookie();
    res.send("cookies has been deleted successfully");
});


// Session
app.use(session({
  secret: "123",
  resave: true,
  saveUninitialized: true,
}));
app.get("/login", function(req,res){
  req.session.name = "WEB 6-B"
  return res.send("Session Set")
})
app.get("/session", function(req,res){
  var sessionName = req.session.name;
  console.log(req.session);
  return res.send(sessionName)
})


app.get('/getUsername', async (req, res) => {
  const email = req.query.email;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      res.json({ username: user.username });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post("/sig", async (req, res) => {
    try {
        const { username, email, password, action } = req.body;

        if (action === "signup") {
            const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });

            if (existingUser) {
                return res.json("exist");
            } else {
                const newUser = new User({
                    username: username,
                    email: email,
                    password: password
                });

                await newUser.save();
                return res.json("success");
            }
        } else if (action === "login") {
            try {
                const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
        console.log("uzerrr:",user)
                if (user) {
                    console.log("uzerpass:",password,user.password)
                   if(password===user.password){
                    
                    console.log("yayyy")

                    return res.json(user);
                   }
                   else {
                        console.log("whyyy")
                     return res.json("invalid");
                    }
                } else {
                    // User not found, return user not exist error
                    return res.json("notexist");
                }
            } catch (error) {
                // Catch any errors that occur during the database query
                console.error("Login error:", error);
                return res.status(500).json("fail");
            }
        }
        
        else if (action === "forgotpassword") {
            try {
                const user = await User.findOne({ email });

                if (!user) {
                    // User not found
                    return res.json("notexist");
                }

                // // Check if the provided password matches the confirm password
                // if (password !== confirmPassword) {
                //     return res.json("passwordsNotMatch");
                // }

                // Update the user's password in the database
                user.password = password;
                await user.save();

                // Optionally, you can notify the user that their password has been successfully reset
                return res.json("success");
            } catch (error) {
                console.error(error);
                return res.json("fail");
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("fail");
    }
}
);


  
app.post("/diary", async (req, res) => {
  try {
    const { userId, date, entry } = req.body;
    if (!userId || !date || !entry) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }
    const existingEntry = await Diary.findOne({ userId, date: new Date(date) });
    if (existingEntry) {
      existingEntry.entry = entry;
      await existingEntry.save();
      res.json(existingEntry);
    } else {
      const newDiaryEntry = new Diary({ userId, date: new Date(date), entry });
      await newDiaryEntry.save();
      res.json(newDiaryEntry);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
  app.get('/fetchdiary', async (req, res) => {
    const { date, userId } = req.query;
    try {
      const diaryEntry = await Diary.findOne({ date, userId });
      if (diaryEntry) {
        res.json({ entry: diaryEntry.entry });
      } else {
        res.json({ entry: '' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch diary entry' });
    }
  });  

app.get('/chatbot', async (req, res) => {
    console.log("Received POST request to /chatbot");
    console.log("Request body:", req.body);
    
    const { usernamee, editedPhone, editedProfession } = req.body;
  
    try {
    
      const user = await User.findOneAndUpdate(
        { $set: {username: usernamee }},
        { $set: { phone: editedPhone, profession: editedProfession } },
                { new: true } // This option returns the updated user
      );
  
      res.json(user); // Return the updated user as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });


 
app.listen(8000, () => {
    console.log("Server listening on port 8000");
});