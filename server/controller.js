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

  getLyrics: (req, res) => {
    let lyrics = [
      "The rest of the world was black and white, but we were in screaming color.",
      "I'm so in love that I might stop breathing.",
      "Darling, I fancy you",
      "He was sunshine, I was midnight rain.",
      "Did you think we'd be fine? Still got scars in my back from your knives.",
      "He's so obsessed with me and, boy, I understand.",
      "Welcome to New York, it's been waitin' for you.",
    ];
    let randomIndex = Math.floor(Math.random() * lyrics.length);
    let randomLyric = lyrics[randomIndex];

    res.status(200).send(randomLyric);
  },
};
