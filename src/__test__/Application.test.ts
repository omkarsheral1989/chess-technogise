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
      prompter.mockReturnValue("Pawn, A2, white");

      Application.main();

      expect(logSpy).toHaveBeenCalledWith("Possible moves: A3");
    });

    it.each([
      {userInput: "", expectedErrorMessage: "Invalid input: "},
      {userInput: "Pawn A1", expectedErrorMessage: "Invalid input: Pawn A1"},
      {userInput: "Pawn", expectedErrorMessage: "Invalid input: Pawn"},
      {userInput: ",A2", expectedErrorMessage: "Invalid input: ,A2"},
      {userInput: "pawn,", expectedErrorMessage: "Invalid input: pawn,"},
      {userInput: "A1, Pawn, black", expectedErrorMessage: "Invalid cell name: Pawn"},
      {userInput: "Pawn, Z9, white", expectedErrorMessage: "Invalid cell name: Z9"},
      {userInput: "Elephant, A2, white", expectedErrorMessage: "Invalid piece type: Elephant"},
      {userInput: "Pawn, A2, red", expectedErrorMessage: "Invalid color: red"},
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
