import { container } from 'tsyringe'

import { createTRPCRouter, publicProcedure } from '@/server/infra/trpc'
import { CreateSessionUseCase } from '@/server/domain/use-cases'
import { CreateSessionSchema } from '@/shared/schemas'

export const sessionsRouter = createTRPCRouter({
  create: publicProcedure
    .input(CreateSessionSchema)
    .mutation(async ({ input }) => {
      const createSessionUseCase = container.resolve(CreateSessionUseCase)
      const createdSession = await createSessionUseCase.create(input)
      return createdSession
    }),
})

export type SessionsRouter = typeof sessionsRouter
