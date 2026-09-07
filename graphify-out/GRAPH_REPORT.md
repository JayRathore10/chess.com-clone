# Graph Report - chess-lords  (2026-09-07)

## Corpus Check
- 53 files · ~60,077 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 301 nodes · 360 edges · 34 communities (16 shown, 18 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 31
- Community 32
- Community 33

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `useAuth()` - 11 edges
3. `ChessLords Project` - 9 edges
4. `include` - 7 edges
5. `compilerOptions` - 7 edges
6. `createChessGame()` - 6 edges
7. `apiFetch()` - 5 edges
8. `scripts` - 5 edges
9. `userModel` - 5 edges
10. `authRequest` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Elo Rating System` --semantically_similar_to--> `ELO/Glicko Rating Calculation`  [INFERRED] [semantically similar]
  AGY.md → taskList.md
- `Friendship & Social System` --semantically_similar_to--> `Friendship System Implementation`  [INFERRED] [semantically similar]
  AGY.md → taskList.md
- `Pawn Promotion Selection Modal` --semantically_similar_to--> `Pawn Promotion Not Supported`  [INFERRED] [semantically similar]
  taskList.md → AGY.md
- `Socket Authentication & Security` --semantically_similar_to--> `Unauthenticated Socket Connections`  [INFERRED] [semantically similar]
  taskList.md → AGY.md
- `White Queen Chess Piece` --semantically_similar_to--> `White Rook Chess Piece`  [INFERRED] [semantically similar]
  client/public/images/white-queen.png → client/public/images/white-rk.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Authentication Bug Cluster** — agy_cookie_parser_missing, agy_jwt_email_mismatch, agy_route_shadowing, agy_unauthenticated_sockets [EXTRACTED 1.00]
- **Chess Piece Image Assets** — client_public_images_white_queen, client_public_images_white_rk, client_public_images_black_2, client_public_images_black_hr_2 [EXTRACTED 1.00]
- **Core ChessLords Feature Set** — agy_jwt_cookie_authentication, agy_realtime_multiplayer_chess, agy_socketio_event_layer, agy_elo_rating_system, agy_matchmaking_system, agy_clock_timer_system [EXTRACTED 1.00]
- **Gameplay Bug Cluster** — agy_disconnected_chessboard, agy_pawn_promotion_missing, agy_inmemory_state_loss, agy_socket_joingame_mismatch [EXTRACTED 1.00]
- **Next.js Boilerplate Assets** — client_public_file, client_public_globe, client_public_next, client_public_vercel, client_public_window [INFERRED 0.85]

## Communities (34 total, 18 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (37): bcrypt, cookie-parser, cors, dotenv, jest, jsonwebtoken, nodemon, prettier (+29 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (23): connectDB(), createGame(), generateInviteCode(), getGameById(), getGameByInviteCode(), getLobbyStats(), joinGame(), GameInterface (+15 more)

### Community 2 - "Community 2"
Cohesion: 0.14
Nodes (22): changePassword(), loginUser(), logoutUser(), me(), registerNewUser(), deleteUser(), getAllUsers(), getMyProfile() (+14 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (28): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+20 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (25): axios, dependencies, axios, chess.js, lucide-react, next, react, react-chessboard (+17 more)

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (17): GameLobbyPage(), TIME_CONTROLS, TimeControlOption, geistMono, geistSans, metadata, HomePage(), ProfilePage() (+9 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (22): ChessLords Project, Clock & Timer System, Missing cookie-parser Middleware, Database Connection Never Initialized, Disconnected Frontend Chessboard, Elo Rating System, Friendship & Social System, In-Memory State Loss & Default Position Bug (+14 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (18): express, mongoose, dependencies, chess.js, express, mongoose, socket.io, zod (+10 more)

### Community 8 - "Community 8"
Cohesion: 0.14
Nodes (15): formatTime(), GameOverData, GamePage(), GamePageProps, GameState, materialDiff(), MoveData, parseCaptured() (+7 more)

### Community 9 - "Community 9"
Cohesion: 0.12
Nodes (17): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+9 more)

### Community 10 - "Community 10"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, module, outDir, rootDir, strict, target

### Community 11 - "Community 11"
Cohesion: 0.50
Nodes (3): FriendshipInterface, friendshipModel, friendshipSchema

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): RefreshTokenInterface, refreshTokenModel, refreshTokenSchema

## Knowledge Gaps
- **140 isolated node(s):** `GameState`, `MoveData`, `GameOverData`, `GamePageProps`, `PIECE_VALUES` (+135 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 0` to `Community 7`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 9` to `Community 4`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `GameState`, `MoveData`, `GameOverData` to the rest of the system?**
  _140 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.1028225806451613 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13548387096774195 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._