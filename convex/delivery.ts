import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createDelivery = mutation({
    args: {
        date: v.string(),
        staffName: v.string(),
        totalBox: v.number()
    },
    handler: async (ctx, args) => {
        const newDeliveryId = await ctx.db.insert("deliveries", {
            date: args.date,
            staffName: args.staffName,
            totalBox: args.totalBox,
            createdAt: Date.now()
        })

        return newDeliveryId
    }
})