import {Application} from "../Application";
import prompt from "prompt-sync";


jest.mock("prompt-sync");

describe("Application class", () => {
  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  const prompter = jest.fn();
  (prompt as jest.Mock).mockReturnValue(prompter);


  describe("main()", () => {
    beforeEach(() => {
      prompter.mockReset();
    });

    it("should log possible moves for given piece", () => {
      const logSpy = jest.spyOn(console, "log").mockImplementation();
      prompter.mockReturnValue("Pawn, A2");

      Application.main();

      expect(logSpy).toHaveBeenCalledWith("Possible moves: A3");
    });
  });
});
