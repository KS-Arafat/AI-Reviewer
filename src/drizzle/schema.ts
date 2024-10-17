import {
  date,
  pgTable,
  serial,
  text,
  decimal,
  integer,
} from "drizzle-orm/pg-core";

export const product = pgTable("products", {
  id: serial("ID").primaryKey(),
  PrductID: integer("PID").unique(),
  ProductName: text("Product").notNull(),
  Price: decimal("Price").notNull(),
  Seller: text("Seller").notNull(),
  Date: date("Upload Date").defaultNow(),
});

export const Feedbacks = pgTable("feedbacks", {
  id: serial("ID").primaryKey(),
  PrductID: integer("PID").unique(),
  feedback: text("Feedback").notNull(),
  Date: date("Date").defaultNow(),
});
