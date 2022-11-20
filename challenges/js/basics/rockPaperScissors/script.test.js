import { test, describe, expect } from 'vitest';
import rockPaperScissors from './script.js';

describe("rockPaperScissors", () => {
  const getMessages = (p) => `Player ${p} won!`

  test("should return 'Player 1 won!' when player 1 chooses 'rock' and player 2 chooses 'scissors'", () => {
    expect(rockPaperScissors("rock", "scissors")).toBe(getMessages(1))
  })

  test("should return 'Player 1 won!' when player 1 chooses 'paper' and player 2 chooses 'rock'", () => {
    expect(rockPaperScissors("paper", "rock")).toBe(getMessages(1))
  })

  test("should return 'Player 1 won!' when player 1 chooses 'scissors' and player 2 chooses 'paper'", () => {
    expect(rockPaperScissors("scissors", "paper")).toBe(getMessages(1))
  })

  test("should return 'Player 2 won!' when player 1 chooses 'rock' and player 2 chooses 'paper'", () => {
    expect(rockPaperScissors("rock", "paper")).toBe(getMessages(2))
  })

  test("should return 'Player 2 won!' when player 1 chooses 'paper' and player 2 chooses 'scissors'", () => {
    expect(rockPaperScissors("paper", "scissors")).toBe(getMessages(2))
  })

  test("should return 'Player 2 won!' when player 1 chooses 'scissors' and player 2 chooses 'rock'", () => {
    expect(rockPaperScissors("scissors", "rock")).toBe(getMessages(2))
  })

  test("should return 'draw' when player 1 chooses 'rock' and player 2 chooses 'rock'", () => {
    expect(rockPaperScissors("rock", "rock")).toBe("draw")
  })

  test("should return 'draw' when player 1 chooses 'paper' and player 2 chooses 'paper'", () => {
    expect(rockPaperScissors("paper", "paper")).toBe("draw")
  })

  test("should return 'draw' when player 1 chooses 'scissors' and player 2 chooses 'scissors'", () => {
    expect(rockPaperScissors("scissors", "scissors")).toBe("draw")
  })

  test("should return 'Invalid input' when someone or both choosed 'gun'", () => {
    expect(rockPaperScissors("rock", "gun")).toBe("Invalid input")
    expect(rockPaperScissors("gun", "rock")).toBe("Invalid input")
    expect(rockPaperScissors("gun", "gun")).toBe("Invalid input")
  })

})
