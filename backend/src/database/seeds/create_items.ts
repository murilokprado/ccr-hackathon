import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Banheiro", image: "banheiro.svg" },
    { title: "Posto de combustível", image: "posto.svg" },
  ]);
}
