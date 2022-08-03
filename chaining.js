const friends = ["Udhas", "Mahbub", "Shaba", "Niloy", "Faisal"];
// array destructuring
const [name1, name2] = friends;

const company = {
  company_name: "GP",
  ceo: { id: 1, name: "abc", salary: 200000 },
  web: { 
  department: "web", 
  framework: "react", 
  team: 22, 
  tech: {
    backend: 'java',
    frontend: 'angular',
    database: 'mongodb'
  } 
},
  IT: { dep: "server", ip: 6, server: "super" },
};

const {IT} = company.IT;
const {tech} = company.web;
const {backend} = company.web.tech;
console.log(backend)
console.log("tech", tech);

