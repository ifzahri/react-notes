import { initTRPC } from "@trpc/server";
import { type } from "os";
import superjson from 'superjson'
import { CreateNoteController, deleteNoteController, findAllNotesController, findNoteController, updateNoteController } from "./note.controller";
import { createNoteSchema, filterQuery, params, updateNoteSchema } from "./note.schema";

const t = initTRPC.create({
    transformer: superjson
});

export const appRouter = t.router({
    getHello: t.procedure.query((req) => {
        return {message : "Welcome brotha"};
    }),
    createNote: t.procedure.input(createNoteSchema).mutation(({input})=>CreateNoteController({input})),
    updateNote: t.procedure.input(updateNoteSchema).mutation(({input})=>updateNoteController({paramsInput: input.params, input: input.body})),
    deleteNote: t.procedure.input(params).mutation(({input})=>deleteNoteController({paramsInput: input})),
    getNotes: t.procedure.input(filterQuery).query(({ input }) => findAllNotesController({ filterQuery: input })),
});

export type appRouter = typeof appRouter;