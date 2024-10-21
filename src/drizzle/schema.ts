import {
  date,
  pgTable,
  serial,
  text,
  decimal,
  integer,
} from "drizzle-orm/pg-core";

export const Product = pgTable("products", {
  id: serial("ID").primaryKey(),
  ProductID: integer("PID").unique(),
  ProductName: text("Product").notNull(),
  Price: decimal("Price").notNull(),
  Seller: text("Seller").notNull(),
  Date: date("Upload Date").defaultNow(),
});

export const Feedbacks = pgTable("feedbacks", {
  id: serial("ID").primaryKey(),
  ProductID: integer("PID").unique(),
  feedback: text("Feedback").notNull(),
  Date: date("Date").defaultNow(),
});

export type InsertProduct = typeof Product.$inferInsert;
export type SelectProduct = typeof Product.$inferSelect;

export type InsertComment = typeof Feedbacks.$inferInsert;
export type SelectComment = typeof Feedbacks.$inferSelect;
