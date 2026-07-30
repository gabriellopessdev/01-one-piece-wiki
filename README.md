# 01 — One Piece Wiki (fans)

Wiki de personagens de **One Piece** — Projeto 02 do Portfolio Boost Program (níveis 1–3 + GraphQL).

| Pasta | Papel |
|-------|--------|
| `api/` | Node/TS · Fastify · **GraphQL** (Mercurius) · Postgres/Prisma (próximas fatias) |
| `web/` | React · Vite · TS · React Router · cliente GraphQL |

Front e API **dissociados** (briefing). Tema/animações = nível 3.

Plano-mãe das bandeiras: `Dev/project-template/docs/PORTFOLIO.md`. Isto é **drill**, não pin.

---

## Rodar (skeleton)

```bash
# API
cd api
cp .env.example .env
npm install
npm run dev
# GraphiQL: http://localhost:4000/graphiql

# Web (outro terminal)
cd web
npm install
npm run dev
```

---

## Escopo do briefing

| Nível | Status |
|-------|--------|
| 1 — lista de personagens via API | ⬜ |
| 2 — página dinâmica `/characters/:id` | ⬜ |
| 3 — visual/animações do universo | ⬜ |
| GraphQL (milha extra → MVP desde o dia 1) | 🟡 schema hello |
| Seed a partir de API pública One Piece + DB | ⬜ |

Detalhe: [`docs/ROADMAP.md`](docs/ROADMAP.md)
