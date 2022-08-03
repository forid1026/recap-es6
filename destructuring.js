const company = {
  company_name: "GP",
  ceo: { id: 1, name: "abc", salary: 200000 },
  web: { department: "web", framework: "react", team: 22 },
};

const { company_name } = company;
const { id, name, salary } = company.ceo;
console.log(company_name, name, salary);
