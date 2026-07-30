import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

const GQL = "http://localhost:4000/graphql";

async function helloQuery() {
  const res = await fetch(GQL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `query { hello(name: "Luffy") }`,
    }),
  });
  const json = (await res.json()) as { data?: { hello: string } };
  return json.data?.hello ?? "(API offline — suba api/ com npm run dev)";
}

function Home() {
  const [msg, setMsg] = useState("…");

  useEffect(() => {
    void helloQuery().then(setMsg);
  }, []);

  return (
    <main>
      <h1>One Piece Wiki</h1>
      <p>Drill · Portfolio Boost · GraphQL desde o dia 1</p>
      <p>
        <code>{msg}</code>
      </p>
      <p>
        <Link to="/characters">Personagens (em breve)</Link>
      </p>
    </main>
  );
}

function CharactersPlaceholder() {
  return (
    <main>
      <h1>Personagens</h1>
      <p>Nível 1 — lista via GraphQL (próxima fatia).</p>
      <Link to="/">← Home</Link>
    </main>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<CharactersPlaceholder />} />
    </Routes>
  );
}
