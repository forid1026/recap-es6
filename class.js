class TeamMember {
  name;
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support {
  name;
  designation = "Support Instructor";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "Start a new session");
  }
}

class SpecialCare extends TeamMember {
  sessionTime;
  designation = "Special Care Instructor";
  constructor(name,address, sessionTime) {
    super(name, address);
    this.sessionTime = sessionTime;
  }
  SpecialSession() {
    console.log(this.name, "Start a special care session");
  }
}

const aamir = new Support("aamir", "Uttara");
const farid = new Support("Farid", "Dakshin Khan");
console.log(aamir, farid);
aamir.startSession();
farid.startSession();

const nilima = new SpecialCare("nilima", "rangpur", 11);
console.log(nilima);
nilima.SpecialSession();
