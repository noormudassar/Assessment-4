let fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A lifetime of happiness lies ahead of you.",
  "A smooth long journey! Great expectations.",
  "An acquaintance of the past will affect you in the near future.",
  "The harder you work, the luckier you get",
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  createCustomFortune: (req, res) => {
    const input = req.body.input;
    fortunes.push(input);
    res.sendStatus(200);
  },

  deleteFortune: (req, res) => {
    if (fortunes.length > 5) {
      fortunes.splice(-1);
      console.log(fortunes);
      res.sendStatus(200);
    }
    res.sendStatus(400);
  },
};
