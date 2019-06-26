const mongoose = require("mongoose");

// called once before any tests are run
before(done => {
  // mongodb will create the db if dosen't exist
  mongoose.connect("mongodb://localhost/udemy_completeguide", {
    useNewUrlParser: true
  });
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    done();
  });
});

// called before each test
beforeEach(done => {
  mongoose.connection
    .dropCollection("users")
    .then(res => {
      console.log("Success");
      done();
    })
    .catch(rej => {
      console.log("error happened");
    });
});
