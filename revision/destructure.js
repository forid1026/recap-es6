const student = 
  {
    id: 1,
    name: "john",
    class: "ten",
    address: {
      state: "Uttara",
      zipcode: 1230,
      upazila: "Uttara",
      district: "Dhaka",
    },
  };


const {state, district }= student.address;
console.log(state, district)