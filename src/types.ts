export interface PollResults {
  pollId: number;
  optionA: number;
  optionB: number;
  total: number;
}

export interface VoterStats {
  totalVotes: number;
}

export interface VoterPollStats {
  pollId: number;
  votesA: number;
  votesB: number;
}

export interface PollInfo {
  id: number;
  optionA: string;
  optionB: string;
}

export interface VoteBattleConfig {
  contractAddress: string;
  contractName: string;
  network?: "mainnet" | "testnet";
}

export const POLLS: PollInfo[] = [
  { id: 1, optionA: "BMW", optionB: "Mercedes" },
  { id: 2, optionA: "iPhone", optionB: "Android" },
  { id: 3, optionA: "PlayStation", optionB: "Xbox" },
  { id: 4, optionA: "Coca-Cola", optionB: "Pepsi" },
  { id: 5, optionA: "Marvel", optionB: "DC" },
  { id: 6, optionA: "McDonald's", optionB: "Burger King" },
  { id: 7, optionA: "Nike", optionB: "Adidas" },
  { id: 8, optionA: "Cat", optionB: "Dog" },
  { id: 9, optionA: "Summer", optionB: "Winter" },
  { id: 10, optionA: "Coffee", optionB: "Tea" },
  { id: 11, optionA: "Netflix", optionB: "YouTube" },
  { id: 12, optionA: "Bitcoin", optionB: "Ethereum" },
  { id: 13, optionA: "Morning", optionB: "Night" },
  { id: 14, optionA: "Book", optionB: "Movie" },
  { id: 15, optionA: "Pizza", optionB: "Sushi" },
  { id: 16, optionA: "Rock", optionB: "Hip-Hop" },
  { id: 17, optionA: "Twitter/X", optionB: "Telegram" },
  { id: 18, optionA: "PC", optionB: "Console" },
  { id: 19, optionA: "Gym", optionB: "Calisthenics" },
  { id: 20, optionA: "React", optionB: "Vue" },
];
