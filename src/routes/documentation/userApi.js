exports.addUserSchema = {
  description: "Create a new user",
  tags: ["users"],
  summary: "Creates new user with given values",
  body: {
    type: "object",
    properties: {
      // title: { type: "string" },
      // brand: { type: "string" },
      // price: { type: "string" },
      // age: { type: "number" },
      // services: { type: "object" },
      username: { type: "string" },
      gender: { type: "string" },
      email: { type: "string" },
      dob: { type: "date" },
      accountcreated: { type: "date" },
      mobilenumber: { type: "number" },
      googleid: { type: "number" }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        username: { type: "string" },
        gender: { type: "string" },
        email: { type: "string" },
        dob: { type: "date" },
        accountcreated: { type: "date" },
        mobilenumber: { type: "number" },
        googleid: { type: "number" },
        __v: { type: "number" }
      }
    }
  }
};
