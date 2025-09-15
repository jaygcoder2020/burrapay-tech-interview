# Tournament API - Technical Interview

A TypeScript Fastify API for managing tournaments and players, demonstrating functional programming patterns with `fp-ts`.

## 📋 Interview Requirements

You need to complete the implementation of a basic tournament management API with the following features:

### Core Endpoints
1. `POST /tournaments` - Create a new tournament
2. `POST /tournaments/:tournamentId/players` - Add a player to a tournament

### 🎯 Special Requirement: Pokemon-Only Players
As part of this technical assessment, **ONLY Pokemon can be added as players**. Integrate with the [PokeAPI](https://pokeapi.co/) to enforce this:

- When adding a player, the `name` provided MUST be a valid Pokemon name
- Fetch Pokemon data from PokeAPI to validate and enhance the player
- **REJECT any requests where the name is not a valid Pokemon** (return 400 error)
- Store the Pokemon's name, type(s), and other relevant information
- Handle API failures gracefully using `fp-ts` patterns

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PNPM

### Installation
```bash
# Install dependencies (already done)
pnpm install

# Development with auto-reload
pnpm dev:watch

# Or run once
pnpm dev

# Build and run production
pnpm build
pnpm start
```

## 📁 Project Structure

```
src/
├── types/index.ts        # TypeScript interfaces and types
├── storage/index.ts      # In-memory storage with fp-ts patterns
├── routes/
│   ├── tournaments.ts    # Tournament endpoints (TODO)
│   └── players.ts        # Player endpoints (TODO)
├── server.ts            # Main server setup (TODO)
└── index.ts             # Entry point (TODO)
```

## ✅ Implementation Tasks

### Task 1: Complete Tournament Routes (`src/routes/tournaments.ts`)
- [ ] Implement `POST /tournaments` endpoint
- [ ] Use the provided `fp-ts Either` pattern example
- [ ] Return appropriate HTTP status codes (201 for success, 400 for errors)
- [ ] Transform response to match `TournamentResponse` interface

### Task 2: Complete Player Routes (`src/routes/players.ts`)
- [ ] Implement `POST /tournaments/:tournamentId/players` endpoint
- [ ] Validate tournament exists before adding player
- [ ] **Pokemon Validation**: Verify player name is a valid Pokemon using PokeAPI
- [ ] **REJECT non-Pokemon names** with 400 Bad Request error
- [ ] Use `fp-ts` patterns for async operations and error handling
- [ ] Return appropriate HTTP status codes (201/400/404)

### Task 3: Complete Server Setup (`src/server.ts`)
- [ ] Create Fastify instance with logging
- [ ] Register tournament and player routes
- [ ] Start server on port 3000
- [ ] Handle startup errors appropriately

### Task 4: Complete Entry Point (`src/index.ts`)
- [ ] Import and call the start function

## 🔧 Pokemon Integration Details

### PokeAPI Integration Requirements:
1. **Endpoint**: `https://pokeapi.co/api/v2/pokemon/{name}`
2. **Validation**: ALL player names MUST be valid Pokemon names
3. **Rejection**: Return 400 Bad Request if name is not a Pokemon
4. **Data Storage**: Store Pokemon information as player data:
   - Pokemon ID
   - Types (fire, water, etc.)
   - Height/Weight
5. **Error Handling**: Use `fp-ts TaskEither` for async API calls
6. **No Fallback**: Unlike regular apps, there's no fallback for non-Pokemon names

### Pokemon Player Object:
```typescript
interface PokemonPlayer extends Player {
  pokemonData: {
    id: number
    types: string[]
    height: number
    weight: number
  }
}
```

## 📖 fp-ts Patterns to Demonstrate

### Either Pattern (Error Handling)
```typescript
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'

const result = pipe(
  createTournament(name),
  E.fold(
    (error) => handleError(error),
    (success) => handleSuccess(success)
  )
)
```

### TaskEither Pattern (Async Operations)
```typescript
import * as TE from 'fp-ts/lib/TaskEither'

const fetchPokemon = (name: string): TE.TaskEither<string, Pokemon> =>
  TE.tryCatch(
    () => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(r => r.json()),
    (error) => `Failed to fetch Pokemon: ${error}`
  )
```

### Option Pattern (Nullable Values)
```typescript
import * as O from 'fp-ts/lib/Option'

const tournament = pipe(
  getTournament(id),
  O.fold(
    () => 'Tournament not found',
    (tournament) => `Found: ${tournament.name}`
  )
)
```

## 🧪 Testing Your Implementation

### Manual Testing Commands:

1. **Create a Tournament:**
```bash
curl -X POST http://localhost:3000/tournaments \
  -H "Content-Type: application/json" \
  -d '{"name": "Pokemon Championship"}'
```

2. **Add a Pokemon Player:**
```bash
curl -X POST http://localhost:3000/tournaments/{tournamentId}/players \
  -H "Content-Type: application/json" \
  -d '{"name": "pikachu"}'
```

3. **Try Adding Invalid Player (should fail):**
```bash
curl -X POST http://localhost:3000/tournaments/{tournamentId}/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Ash Ketchum"}'
# Expected: 400 Bad Request - "Name is not a valid Pokemon"
```

4. **Health Check:**
```bash
curl http://localhost:3000/health
```

## 📊 Evaluation Criteria

You will be evaluated on:

1. **Code Quality**: Clean, readable TypeScript code
2. **fp-ts Usage**: Proper use of Either, Option, and TaskEither patterns
3. **Error Handling**: Graceful handling of various error scenarios
4. **API Design**: RESTful endpoints with appropriate status codes
5. **Pokemon Integration**: Creative and robust integration with PokeAPI
6. **Functional Programming**: Demonstrating FP principles and composition

## 🎉 Bonus Points

- Implement GET endpoints to retrieve tournaments and players
- Add input validation using `io-ts` (another fp-ts ecosystem library)
- Implement proper logging with structured data
- Add rate limiting for PokeAPI calls
- Cache Pokemon data to avoid repeated API calls

## 🚨 Important Notes

- **No validation required**: Focus on fp-ts patterns and API integration
- **Keep it simple**: Don't over-engineer, focus on clean implementation
- **Ask questions**: If anything is unclear, please ask for clarification
- **Time management**: Focus on core functionality first, then Pokemon integration

Good luck! 🚀