import Fastify from 'fastify'
import { tournamentRoutes } from './routes/tournaments'
import { playerRoutes } from './routes/players'

// TODO for interviewee: Set up the main Fastify server

async function buildServer() {
  // TODO: Create Fastify instance with proper configuration
  // HINT: const fastify = Fastify({ logger: true })
  
  // TODO: Register routes
  // HINT: Use fastify.register() to register the route modules
  // Example:
  // await fastify.register(tournamentRoutes)
  // await fastify.register(playerRoutes)
  
  // PLACEHOLDER: Remove this when implementing
  const fastify = Fastify({ logger: true })
  
  // Basic health check endpoint (already implemented)
  fastify.get('/health', async (request, reply) => {
    return { status: 'OK', timestamp: new Date().toISOString() }
  })
  
  return fastify
}

async function start() {
  try {
    // TODO: Build the server
    const fastify = await buildServer()
    
    // TODO: Start the server on port 3000
    // HINT: Use fastify.listen() method
    // Example: await fastify.listen({ port: 3000, host: '0.0.0.0' })
    
    console.log('🚀 Server setup complete! Implement the TODOs to start the server.')
    console.log('📝 Tasks for the interviewee:')
    console.log('   1. Complete buildServer() function')
    console.log('   2. Register the tournament and player routes')
    console.log('   3. Implement the route handlers in tournaments.ts and players.ts')
    console.log('   4. Start the server on port 3000')
    
  } catch (err) {
    console.error('❌ Error starting server:', err)
    process.exit(1)
  }
}


export { buildServer, start }