import z from "zod";

const initMessage =  z.object({
    name: z.string(),
    userId: z.string(),
    roomId: z.string(),
})