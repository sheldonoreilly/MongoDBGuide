const assert = require("assert");
//this is the User Model we created in user,js
const User = require("../src/user");

describe("Creating records", () => {
  it("saves a user.", (done) => {
    // from mongoose docs : Model constructor.
    // Provides the interface to MongoDB collections as
    // well as creates document instances.
    const joe = new User({ name: "Joe" });

    // Save the documASent to database
    joe.save().then(() => { 
      // has jow been saved correctly
      assert(!joe.isNew);
      done();
    });
  }); 
});
