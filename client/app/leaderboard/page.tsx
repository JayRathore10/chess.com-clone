export default function Leaderboard() {
  const players = [
    { rank: 1, name: "Magnus", rating: 2450, wins: 42, losses: 5 },
    { rank: 2, name: "ChessMaster", rating: 2380, wins: 38, losses: 8 },
    { rank: 3, name: "KnightKing", rating: 2310, wins: 35, losses: 10 },
    { rank: 4, name: "RookStar", rating: 2240, wins: 31, losses: 12 },
    { rank: 5, name: "PawnStorm", rating: 2180, wins: 28, losses: 15 },
  ];

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Leaderboard
          </h1>

          <p className="mt-2 text-foreground/60">
            Top players ranked by rating
          </p>
        </div>

        {/* Leaderboard Card */}
        <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface-card shadow-xl">

          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-surface-border px-6 py-4 text-sm font-medium text-foreground/50">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Player</div>
            <div className="col-span-2 text-center">Rating</div>
            <div className="col-span-2 text-center">Wins</div>
            <div className="col-span-2 text-center">Losses</div>
          </div>

          {/* Players */}
          {players.map((player) => (
            <div
              key={player.rank}
              className={`grid grid-cols-12 items-center px-6 py-5 transition hover:bg-surface-card-hover ${
                player.rank !== players.length
                  ? "border-b border-surface-border"
                  : ""
              }`}
            >
              {/* Rank */}
              <div className="col-span-1">
                <span
                  className={`font-bold ${
                    player.rank === 1
                      ? "text-game-bullet"
                      : player.rank === 2
                      ? "text-primary"
                      : player.rank === 3
                      ? "text-game-rapid"
                      : "text-foreground/50"
                  }`}
                >
                  {player.rank}
                </span>
              </div>

              {/* Player */}
              <div className="col-span-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-muted font-bold text-primary">
                  {player.name.charAt(0)}
                </div>

                <span className="font-medium text-foreground">
                  {player.name}
                </span>
              </div>

              {/* Rating */}
              <div className="col-span-2 text-center">
                <span className="font-bold text-primary">
                  {player.rating}
                </span>
              </div>

              {/* Wins */}
              <div className="col-span-2 text-center text-success">
                {player.wins}
              </div>

              {/* Losses */}
              <div className="col-span-2 text-center text-danger">
                {player.losses}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}