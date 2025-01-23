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

    it.each([
      {userInput: "", expectedErrorMessage: "Invalid input"},
      {userInput: "Pawn A1", expectedErrorMessage: "Invalid input"},
      {userInput: "Pawn", expectedErrorMessage: "Invalid input"},
      {userInput: ",A2", expectedErrorMessage: "Invalid input"},
      {userInput: "pawn,", expectedErrorMessage: "Invalid input"},
      {userInput: "A1, Pawn", expectedErrorMessage: "Invalid cell name: Pawn"},
      {userInput: "Pawn, Z9", expectedErrorMessage: "Invalid cell name: Z9"},
      {userInput: "Elephant, A2", expectedErrorMessage: "Invalid piece type: Elephant"},
    ])
    (
      "should log error for incorrect input",
      ({userInput, expectedErrorMessage}) => {
        const logSpy = jest.spyOn(console, "log").mockImplementation();
        prompter.mockReturnValue(userInput);

        Application.main();

        expect(logSpy).toHaveBeenCalledWith(expectedErrorMessage);
      },
    );
  });
});
