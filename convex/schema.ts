import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    deliveries: defineTable({
        date: v.string(), // format: dd/mm/yyyy
        staffName: v.string(),
        totalBox: v.number(),
        createdAt: v.number() // timestamp
    }),

    suppliers: defineTable({
        deliveryId: v.id("deliveries"),
        name: v.string(),
        boxCount: v.number()
    }),

    boxes: defineTable({
        supplierId: v.id("suppliers"),
        index: v.number(),
        received: v.boolean()
    })
})