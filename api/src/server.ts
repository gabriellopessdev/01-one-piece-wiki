import Fastify from "fastify";
import mercurius from "mercurius";

const schema = `
  type Query {
    health: String!
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    health: () => "ok",
    hello: (_: unknown, { name }: { name?: string | null }) =>
      `Mugiwara, ${name ?? "nakama"}!`,
  },
};

const app = Fastify({ logger: true });

await app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

app.get("/health", async () => ({ ok: true }));

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "0.0.0.0";

try {
  await app.listen({ port, host });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
