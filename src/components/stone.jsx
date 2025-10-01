import { useState } from "react";

export const StonePaperScissors = () => {
  const choices = [
    { name: "Rock", emoji: "✊" },
    { name: "Paper", emoji: "🖐️" },
    { name: "Scissors", emoji: "✌️" },
  ];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const play = (choice) => {
    setUserChoice(choice);
    const comp = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(comp);

    if (choice.name === comp.name) setResult("It's a Draw!");
    else if (
      (choice.name === "Rock" && comp.name === "Scissors") ||
      (choice.name === "Paper" && comp.name === "Rock") ||
      (choice.name === "Scissors" && comp.name === "Paper")
    )
      setResult("You Win!");
    else setResult("You Lose!");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 bg-gray-800/40 border border-white/10 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-cyan-400 mb-2">🪨📄✂️ </h3>

      <div className="flex gap-6 text-8xl select-none cursor-pointer">
        {choices.map((c) => (
          <div
            key={c.name}
            onClick={() => play(c)}
            className="hover:scale-125 transition-transform"
          >
            {c.emoji}
          </div>
        ))}
      </div>

      <div className="text-gray-300 text-lg text-center">
        <p>
          <strong>You:</strong> {userChoice?.emoji || "❓"}
        </p>
        <p>
          <strong>Computer:</strong> {computerChoice?.emoji || "❓"}
        </p>
        <p className="text-xl font-semibold text-yellow-400">{result}</p>
      </div>
    </div>
  );
};
