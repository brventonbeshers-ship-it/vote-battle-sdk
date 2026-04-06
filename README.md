# vote-battle-sdk

TypeScript SDK for interacting with the Vote Battle smart contract on Stacks.

## Installation

```bash
npm install vote-battle-sdk
```

## Usage

```ts
import { VoteBattleClient } from "vote-battle-sdk";

const client = new VoteBattleClient({
  contractAddress: "SP...",
  contractName: "vote-dapp-stacks"
});

const leaderboard = await client.getLeaderboard();
console.log(leaderboard);
```

## Development

```bash
npm install
npm run build
```

## License

MIT
