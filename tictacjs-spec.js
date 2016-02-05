/* Tests for Tic-Tac Javascript */


describe("Tic Tac JS", function () {

    it("should detect a full board as full", function () {
        board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        expect(isBoardFull()).toBeTruthy();
    });

    // STEP 2: Uncomment this out.

    it("should detect a non-full board as not full", function () {
       board = ["X", "X", null, "X", "X", "X", "X", "X", "X"];
       // Add a matcher for this test.
       expect(isBoardFull()).toBeFalsy();
    });
    
    it("should convert x, y to cell #", function () {
       var cellNumber1 = xyToCell(1, 1);
       var cellNumber2 = xyToCell(0, 0);
       // Add 2 matchers for this test, one for cellNumber1 and one for cellNumber2.
       expect(cellNumber1).toBe(4);
       expect(cellNumber2).toBe(0);
    });
    
    it("should make computer moves", function () {
       board = ["X", null, null, null, null, null, null, null, null];
       computerMove();
       // Add a matcher for this test.
       expect(board[1]).toBe("O");
    });

    // END STEP 2

    // Add the following tests, or think of some of your own.



    it("should update the board based on the table", function () {
        board = ["X", null, null, null, null, null, null, null, null];
        updateBoard();
        expect($("#cell-0").text()).toBe("X");
    });

    it("should not fill in occupied board slots", function () {
        board = ["X", null, null, null, null, null, null, null, null];
        computerMove();

        expect(board[0]).toBe("X");
    });

    it("should be able to determine a winner", function () {
        board = ["X", "O", "O", "X", null, null, "X", null, null];
        expect(findWinner()).toBe("X");
    });

    it("should be able to deduce the correct cell number", function () {
        var cellNumber = xyToCell(2, 1);
        expect(cellNumber).toBe(5);
    });

    it("should not determine a winner when there is a tie", function () {
        board = ["O", "X", "O", "O", "X", "X", "X", "O", "X"];
        expect(findWinner()).toBeFalsy();
    });

    it("should be able to declare a tie and end the game", function () {
        board = ["O", "X", "O", "O", "X", "X", "X", "O", "X"];
        checkGameOver();
        expect($("h1").text()).toBe("Tie!");
    });

});
