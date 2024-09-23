const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "TempKey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 60000 * 60 * 24 * 30 },
  })
);

let users = { antonrusich: "67", "John Doe": "48", Kant: "11" };

app.post("/api/sign-in", (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  if (name in users && users[name] === password) {
    req.session.user = { name };
    return res.status(200).json({ message: "Sign in successful" });
  } else {
    return res.status(401).json({ message: "Invalid username or password" });
  }
});

app.post("/api/sign-up", (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  if (!(name in users)) {
    users[name] = password;
    req.session.user = { name: name };
    return res.status(201).json({ message: "User created" });
  } else {
    return res.status(409).json({ message: "User already exists" });
  }
});

app.get("/api/user", (req, res) => {
  if (req.session.user) {
    return res.status(200).json({
      message: `Data has been sent for user ${req.session.user.name}`,
    });
  } else {
    return res.status(401).json({ message: "User is not authenticated" });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
