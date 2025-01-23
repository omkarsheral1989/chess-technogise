import {Application} from "../Application";


jest.mock("../Application");

describe("index", () => {
  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it("should call Application.main()", () => {
    require("../index");

    expect(Application.main).toHaveBeenCalled();
  });
});
