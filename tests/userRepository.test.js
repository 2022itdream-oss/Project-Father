const userRepository = require("../src/data/userRepository");

describe("User Repository Suite", () => {
  beforeEach(() => {
    userRepository.clear();
  });

  test("should save and retrieve user by ID", () => {
    const dummyUser = { id: "usr_1", name: "Alice", email: "alice@example.com" };
    userRepository.save(dummyUser);

    const found = userRepository.findById("usr_1");
    expect(found).toEqual(dummyUser);
  });

  test("should return empty list when no users exist", () => {
    expect(userRepository.findAll()).toEqual([]);
  });
});