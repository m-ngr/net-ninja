const box1 = Vue.createApp({
  // component state with initial values
  data() {
    return {
      title: "Frontend Developer",
      name: "Mahmoud Elnagar",
      age: 25,
      showAge: true,
      showTitle: true,
      fullName: false,
    };
  },
  // methods can reference the state using this
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleFullName() {
      this.fullName = !this.fullName;

      if (this.fullName) {
        this.name = "Mahmoud Adel Elnagar";
      } else {
        this.name = "Mahmoud Elnagar";
      }
    },
    toggleAge() {
      this.showAge = !this.showAge;
    },
    toggleTitle() {
      this.showTitle = !this.showTitle;
    },
  },
});

box1.mount("#box-1");

// =============================== BOX-2 ===========================

const box2 = Vue.createApp({
  // component state with initial values
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  // methods can reference the state using this
  methods: {
    handleEvent(e, data) {
      console.log("Event:", e.type);
      console.log("Data:", data);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

box2.mount("#box-2");

// =============================== BOX-3 ===========================

Vue.createApp({
  // component state with initial values
  data() {
    return {
      projects: [
        {
          title: "Askify",
          tech: "MERN",
          url: "https://askify-app.onrender.com",
          fav: true,
        },
        {
          title: "Space",
          tech: "MERN",
          url: "https://nasa-space.onrender.com",
          fav: false,
        },
        {
          title: "Memory Card",
          tech: "React",
          url: "https://ngr-memory-card.netlify.app/",
          fav: false,
        },
      ],
      newProject: { title: "", tech: "", url: "", fav: false },
      newProjectErrors: { title: "", tech: "", url: "" },
      showFavsOnly: false,
    };
  },
  // methods can reference the state using this
  methods: {
    toggleFav(project) {
      project.fav = !project.fav;
    },
    toggleShowFavs() {
      this.showFavsOnly = !this.showFavsOnly;
    },
    validateNewProject() {
      this.newProjectErrors.title = this.newProject.title
        ? ""
        : "Title is required";
      this.newProjectErrors.url = this.newProject.url ? "" : "URL is required";
      this.newProjectErrors.tech = this.newProject.tech
        ? ""
        : "Tech is required";

      return !(
        this.newProjectErrors.title ||
        this.newProjectErrors.url ||
        this.newProjectErrors.tech
      );
    },
    addProject() {
      if (this.validateNewProject()) {
        this.projects.push({
          title: this.newProject.title,
          url: this.newProject.url,
          fav: this.newProject.fav,
          tech: this.newProject.tech,
        });

        this.newProject.title = "";
        this.newProject.url = "";
        this.newProject.tech = "";
        this.newProject.fav = false;
      }
    },
  },
  // computed: are states that depends on other states
  computed: {
    favProjects() {
      return this.projects.filter((p) => p.fav);
    },
  },
}).mount("#box-3");
