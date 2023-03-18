import Promise from "bluebird";


function ask(question) {
  console.log(question);
  return new Promise(function (resolve, reject) {
    process.stdin.once('data', function (data) {
      const ans = data.toString().trim();
      if (ans == 'Yes') {
        resolve(ans);
      } else {
        reject(ans);
      }
    });
  });
}

describe("A suite", function() {
  it("contains spec with an expectation", function() {
      expect(true).toBe(true);
  });
});

describe("A suite", function() {
  it("contains spec with an expectation", async function() {
    return await ask()
      .then(data => console.log(data))
      .catch(data => console.error(data));
  });
});

