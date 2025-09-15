import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { pipe } from 'fp-ts/lib/function'
import * as E from 'fp-ts/lib/Either'
import * as O from 'fp-ts/lib/Option'
import { CreatePlayerRequest, PlayerResponse } from '../types'
import { createPlayer, getTournament } from '../storage'

// TODO for interviewee: Implement player routes using fp-ts patterns

export async function playerRoutes(fastify: FastifyInstance) {
  
  // TODO: Implement POST /tournaments/:tournamentId/players endpoint
  // Steps:
  // 1. Extract tournamentId from route params and player name from body
  // 2. Use createPlayer from storage module (it already validates tournament exists)
  // 3. Handle Either result using fp-ts patterns
  // 4. Return appropriate response (201 for success, 400/404 for errors)
  
  fastify.post<{ 
    Params: { tournamentId: string }, 
    Body: CreatePlayerRequest 
  }>('/tournaments/:tournamentId/players', async (request, reply) => {
    
    // TODO: Extract data from request
    // const { tournamentId } = request.params
    // const { name } = request.body
    
    // EXAMPLE: Here's how you could chain fp-ts operations
    // const result = pipe(
    //   createPlayer(name, tournamentId),
    //   E.fold(
    //     (error) => {
    //       // Handle different error cases
    //       if (error === 'Tournament not found') {
    //         reply.status(404).send({ error })
    //       } else {
    //         reply.status(400).send({ error })
    //       }
    //       return null
    //     },
    //     (player) => {
    //       const response: PlayerResponse = {
    //         id: player.id,
    //         name: player.name,
    //         tournamentId: player.tournamentId
    //       }
    //       reply.status(201).send(response)
    //       return response
    //     }
    //   )
    // )
    
    // TODO: Implement the actual logic here using the pattern above
    
    reply.status(501).send({ error: 'Not implemented yet' })
  })
  
  // BONUS TODO: Implement GET /tournaments/:tournamentId/players 
  // This would use getPlayersByTournament and Option patterns
  // HINT: You might want to first check if tournament exists using getTournament
  // and use O.fold to handle Some/None cases
  
}