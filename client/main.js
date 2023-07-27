const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const customInput = document.getElementById("custom");
const deleteInput = document.getElementById("deleteButton");
const taylorSwiftLyrics = document.getElementById("taylorButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const createCustomFortune = (event) => {
  event.preventDefault();
  body = {
    input: customInput.value,
  };
  axios
    .post("http://localhost:4000/api/fortune/", body)
    .then((result) => {
      alert("Your fortune was successfully added");
    })
    .catch((error) => {
      console.log(error);
      alert("Error!");
    });
};

const deleteButton = () => {
  axios;
  preventDefaul()
    .delete("http://localhost:4000/api/fortune/")
    .then(() => {
      alert("Your fortune was successfully deleted!");
    })
    .catch((error) => {
      console.log(error);
      alert("Error!");
    });
};

const getLyrics = () => {
  axios.get("http://localhost:4000/api/lyrics/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
customInput.addEventListener("submit", createCustomFortune);
deleteInput.addEventListener("click", deleteButton);
taylorSwiftLyrics.addEventListener("click", getLyrics);
