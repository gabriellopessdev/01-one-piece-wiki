# Decisions

## ADR-001 — GraphQL desde o dia 1 (Mercurius + Fastify)

**Status:** accepted  
**Contexto:** briefing pede REST e sugere GraphQL como milha extra; pedido explícito de já começar com GraphQL.  
**Decisão:** API GraphQL com Mercurius no Fastify; sem REST de domínio no MVP do drill (só `/health` HTTP se útil).  
**Consequências:** front fala GraphQL; reforço de schema/types; menos “duas APIs”.  
**Alternativas:** REST-only; REST + GraphQL juntos (mais superfície).

## ADR-002 — Dados: seed de API pública → Postgres

**Status:** accepted (desenho)  
**Decisão:** banco próprio (Prisma); popular com fetch de API One Piece pública; wiki não depende da API externa em runtime.  
**Alternativas:** front → API externa direto (fura o briefing de back dono dos dados).
