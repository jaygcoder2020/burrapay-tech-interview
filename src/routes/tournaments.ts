import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { pipe } from 'fp-ts/lib/function'
import * as E from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import { CreateTournamentRequest, TournamentResponse } from '../types'
import { createTournament } from '../storage'

// TODO for interviewee: Implement tournament routes using fp-ts patterns

export async function tournamentRoutes(fastify: FastifyInstance) {
  
  // TODO: Implement POST /tournaments endpoint
  // Steps:
  // 1. Extract request body and validate it has 'name' property
  // 2. Use createTournament from storage module 
  // 3. Handle Either result using fp-ts patterns
  // 4. Return appropriate response (201 for success, 400 for error)
  
  fastify.post<{ Body: CreateTournamentRequest }>('/tournaments', async (request, reply) => {
    // EXAMPLE: Here's how to use fp-ts Either pattern
    // const result = pipe(
    //   createTournament(request.body.name),
    //   E.fold(
    //     (error) => {
    //       reply.status(400).send({ error })
    //       return null
    //     },
    //     (tournament) => {
    //       const response: TournamentResponse = {
    //         id: tournament.id,
    //         name: tournament.name,
    //         createdAt: tournament.createdAt.toISOString()
    //       }
    //       reply.status(201).send(response)
    //       return response
    //     }
    //   )
    // )
    
    // TODO: Implement the actual logic here
    // Hint: Use the pattern shown in the example above
    
    reply.status(501).send({ error: 'Not implemented yet' })
  })
  
  // BONUS TODO: Implement GET /tournaments endpoint to list all tournaments
  // This would use Array.from(storage.tournaments.values()) and fp-ts Array operations
  
}