const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

const data = {
  settings: {
    tokenimage:
      "https://cdn­images­1.medium.com/max/1200/1*W_PnVNciIrQvdvmQ­iyXzA.png"
  },
  items: [
    {
      title: "MyFax ­ Free Trail",
      tags: ["task", "free"],
      caption: "Complete a quick action",
      clickUrl: "http://www.yahoo.com",
      iconUrl:
        "https://pbs.twimg.com/profile_images/647177328552902656/20hSHqO7_400x400.png",
      numOfTokens: 23,
      howManyLeft: 1
    },
    {
      title: "SugarSync Free 30 Day Trail!",
      tags: ["task", "free"],
      caption:
        "Click on Appbounty net and earn at least 599 credits within Appbounty!",
      clickUrl: "http://www.yahoo.com",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/SugarSync_Logo.png",
      numOfTokens: 19,
      howManyLeft: 1
    },
    {
      title: "Appbounty Free Gift Cards",
      tags: ["task", "free"],
      caption: "Complete a quick action",
      clickUrl: "http://www.yahoo.com",
      iconUrl:
        "https://bestsurveysitesformakingmoney.com/wp­content/uploads/2017/05/AppBounty.png",
      numOfTokens: 16,
      howManyLeft: 1
    },
    {
      title: "Join Disney Movie Club!",
      tags: ["task"],
      caption:
        "Register with valid information and make purchase\nNEW USERS ONLY!",
      clickUrl: "http://www.yahoo.com",
      iconUrl:
        "https://pbs.twimg.com/profile_images/1040227555108892674/jyqjXlcY_bigger.jpg",
      numOfTokens: 211,
      howManyLeft: 0
    }
  ]
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
