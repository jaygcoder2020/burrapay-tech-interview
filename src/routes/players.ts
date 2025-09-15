import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { pipe } from 'fp-ts/lib/function'
import * as E from 'fp-ts/lib/Either'
import * as O from 'fp-ts/lib/Option'
import * as TE from 'fp-ts/lib/TaskEither'
import { CreatePlayerRequest, PlayerResponse, PokemonApiResponse } from '../types'
import { createPlayer, getTournament } from '../storage'

// TODO for interviewee: Implement player routes using fp-ts patterns
// CRITICAL REQUIREMENT: ONLY Pokemon can be added as players - reject all non-Pokemon names!

// TODO: Implement Pokemon API validation function
// HINT: Create a function that validates Pokemon using TaskEither
// const validatePokemon = (name: string): TE.TaskEither<string, PokemonApiResponse> =>
//   TE.tryCatch(
//     () => fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Not a valid Pokemon name')
//         }
//         return res.json()
//       }),
//     (error) => `Invalid Pokemon: ${error}`
//   )

export async function playerRoutes(fastify: FastifyInstance) {
  
  // TODO: Implement POST /tournaments/:tournamentId/players endpoint
  // CRITICAL STEPS:
  // 1. Extract tournamentId from route params and player name from body
  // 2. VALIDATE the name is a Pokemon using PokeAPI (REQUIRED!)
  // 3. If NOT a Pokemon, return 400 Bad Request with error message
  // 4. If valid Pokemon, extract Pokemon data and create player
  // 5. Use createPlayer from storage with Pokemon data
  // 6. Return appropriate response (201 for success, 400/404 for errors)
  
  fastify.post<{ 
    Params: { tournamentId: string }, 
    Body: CreatePlayerRequest 
  }>('/tournaments/:tournamentId/players', async (request, reply) => {
    
    // TODO: Extract data from request
    // const { tournamentId } = request.params
    // const { name } = request.body
    
    // TODO: POKEMON VALIDATION - This is REQUIRED, not optional!
    // 1. Call validatePokemon function with the name
    // 2. If validation fails, return 400 error immediately
    // 3. If validation succeeds, extract Pokemon data
    // 4. Create player with Pokemon data
    
    // EXAMPLE: Here's the required flow using fp-ts TaskEither
    // const result = await pipe(
    //   validatePokemon(name),
    //   TE.chain((pokemon) =>
    //     TE.fromEither(
    //       createPlayer(name, tournamentId, {
    //         id: pokemon.id,
    //         types: pokemon.types.map(t => t.type.name),
    //         height: pokemon.height,
    //         weight: pokemon.weight
    //       })
    //     )
    //   ),
    //   TE.fold(
    //     (error) => async () => {
    //       if (error.includes('Tournament not found')) {
    //         reply.status(404).send({ error: 'Tournament not found' })
    //       } else {
    //         reply.status(400).send({ error: 'Name is not a valid Pokemon' })
    //       }
    //       return null
    //     },
    //     (player) => async () => {
    //       const response: PlayerResponse = {
    //         id: player.id,
    //         name: player.name,
    //         tournamentId: player.tournamentId
    //       }
    //       reply.status(201).send(response)
    //       return response
    //     }
    //   )
    // )()
    
    // TODO: Implement the actual logic here using the pattern above
    // Remember: ONLY Pokemon names are allowed!
    
    reply.status(501).send({ error: 'Not implemented yet - Pokemon validation required!' })
  })
  
  // BONUS TODO: Implement GET /tournaments/:tournamentId/players 
  // This would return all Pokemon players for a tournament
  // Include Pokemon data in the response
  
}