import {sql} from "drizzle-orm";
import {integer,sqliteTable,text} from "drizzle-orm/sqlite-core";
export const rsvps=sqliteTable("rsvps",{id:integer("id").primaryKey({autoIncrement:true}),name:text("name").notNull(),email:text("email").notNull().unique(),dietary:text("dietary").notNull().default(""),createdAt:text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`)});
