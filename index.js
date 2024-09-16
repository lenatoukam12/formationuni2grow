function render() {
  document.getElementById("app").innerHTML = App();
}

//let compt = 0;
//function add() {
//compt = compt + 1;
//document.getElementById("btn").innerHTML = compt;
//}

const data = [
  {
    id: 1,
    title: "My 2024 MacBook Setup for Software Development",
    subtitle:
      "Optimizing Performance and Productivity with the Latest Tools and Technologies",
    author: "Mohammed Arshad",
    readingTime: "3 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },

  {
    id: 2,
    title: "Git + Bit: components",
    subtitle:
      "Keeping Git Branches and bit lanes in sync for seamless development",
    author: "Ashan fernando",
    readingTime: "6 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },

  {
    id: 3,
    title: "Average Manager Vs. Great Manager",
    subtitle:
      "Optimizing Performance and Productivity with the Latest Tools and Technologies",
    username: "Julie zhuo",
    readnumber: "2 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },
];

App.state = {
  posts: undefined,
  addClap: (id) => {
    const post = App.state.posts.find((item) => item.id == id);
    post.claps = post.claps + 1;
    document.getElementById(`claps-counter-${id}`).innerHTML = post.claps;
  },
};

function App() {
  App.state.posts = data;
  return `<div class="container">${App.state.posts
    .map((item) => Post(item))
    .join("")}
    </div>`;
}

function Post(props) {
  return `
      <div class="post-header">
        <div class="title">${props.title}</div>
        <div class="subtitle"> ${props.subtitle}
        </div>
        <div class="author-card">
          <div class="avatar">
            <img
              src="assets/images/profile-picture.jpg"
              height="44px"
              width="44px"
            />
          </div>
          <div class="column">
            <div class="row"> 
              <div>${props.author}</div>
              <div>.</div>
              <div class="rollow-button">Follow</div>
            </div>
            <div class="row secondary">
              <div>Published in Mac O’Clock</div>
              <div>.</div>
              <div>${props.readingTime}</div>
              <div>.</div>
              <div>${props.data}</div>
            </div>
          </div>
        </div>
        <div class="actions">
          <div class="claps">
            <div class="claps-button" onclick="App.state.addClap(${props.id})">
              <img
                src="assets/icons/hands-clapping-thin.svg"
                height="24px"
                width="24px"
              />
            </div>
            <div class="claps-counter" id="claps-counter-${props.id}">0</div>
          </div>
        </div>
      </div>
    </div>`;
}

render();
