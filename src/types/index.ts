import * as t from 'fp-ts/lib/struct'

// Tournament interface
export interface Tournament {
  id: string
  name: string
  createdAt: Date
}

// Player interface
export interface Player {
  id: string
  name: string
  tournamentId: string
}

// Request types for creating tournaments
export interface CreateTournamentRequest {
  name: string
}

// Request types for adding players
export interface CreatePlayerRequest {
  name: string
}

// Response types
export interface TournamentResponse {
  id: string
  name: string
  createdAt: string
}

export interface PlayerResponse {
  id: string
  name: string
  tournamentId: string
}