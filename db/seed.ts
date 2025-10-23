import { db } from "astro:db";
import { NewsletterPeeps } from './config'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(NewsletterPeeps).values([
    {
      email: "email@email.com",
    },
  ]);
}