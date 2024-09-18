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
    author: "Julie zhuo",
    readnumber: "2 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },
];

function App() {
  //App.state.posts = data;
  //${App.state.posts.map((item) => Post(item)).join("")}
  return `
  <div class="container">
    ${data.map((item) => Post(item)).join("")} 
    </div>`;
}

//(App.state = {
//posts: undefined,
//addClap: (id) => {
//const post = App.state.posts.find((item) => item.id == id);
//post.claps = post.claps + 1;
//document.getElementById(`claps-counter-${id}`).innerHTML = post.claps;
//}),
function Post(props) {
  //const [message, SetMessage] = stateCreator(`le post ${props.id}`);
  //const handlers = () => SetMessage(`le post modifier numero ${props.id}`);
  //eventHandlers.push({
  // id: `click-on-me${props.id}`,
  // type: "click",
  // handlers,
  //});

  // const [clap, SetClap] = root.useState(props.claps);
  const handlers = () => SetClap(clap + 1);

  const [post, setPost] = root.useState(props);
  const handPost = () => {
    //setPost({ ...post, claps: post.claps + 1 });
    setPost((prevState) => {
      return { ...prevState, claps: prevState.claps + 1 };
    });
  };

  root.registerEventHander({
    elementId: `click-on-me-${props.id}`,
    type: "click",
    handlers: handPost,
  });

  //<button id="click-on-me${props.id}" >click to me!</button>
  //    <div>${message}</div>

  // onclick="App.state.addClap(${props.id})
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
            <div class="claps-button"  id="click-on-me-${props.id}" >
              <img
                src="assets/icons/hands-clapping-thin.svg"
                height="24px"
                width="24px"
              />
            </div>
            <div class="claps-counter" id="claps-counter-${props.id}">${post.claps}</div>
          </div>
        </div>
      </div>
    `;
}

function createRoot(container) {
  let rootContainer = container;
  let rootNode;
  const hooks = [];
  let hookPointer = 0;
  let eventHandlers = [];

  // cette fonction permet de creer un state
  const useState = (initialvalue) => {
    const currentIndex = hookPointer;
    if (!hooks[currentIndex]) {
      hooks[currentIndex] = initialvalue;
    }

    const state = hooks[currentIndex];
    //cette fonction permet de modifier un state
    const setState = (newState) => {
      if (typeof newState === "function") {
        hooks[currentIndex] = newState(hooks[currentIndex]);
      } else {
        hooks[currentIndex] = newState;
      }
      render();
    };
    hookPointer++;
    return [state, setState];
  };

  const registerEventHander = (eventHandler) => {
    eventHandlers.push(eventHandler);
  };

  const render = (node) => {
    eventHandlers = [];
    hookPointer = 0;
    if (!rootNode && node) {
      rootNode = node;
    }
    rootContainer.innerHTML = rootNode?.();
    // document.getElementById("app").innerHTML = App();
    eventHandlers.forEach((item) =>
      document
        .getElementById(item.elementId)
        .addEventListener(item.type, item.handlers)
    );
  };

  return { useState, registerEventHander, render };
}

function newApp() {
  const [like, setLike] = root.useState(0);
  const handLike = () => {
    setLike(like + 1);
  };
  root.registerEventHander({
    elementId: `click-on-me`,
    type: "click",
    handlers: handLike,
  });

  return `
    <div class= "container"> 
    <div class="title"> Bienvenue au journal de l'Universite de Dschang</div>
    <div class= "subtitle"> Formation a l'entreprise Uni2grow</div>
    <button id="click-on-me" >click to me!</button>
    <div id ="">${like}</div>
    </div>
  `;
}

const root = createRoot(document.getElementById("app"));
//root.render(App);
root.render(newApp);
