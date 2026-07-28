import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch("https://jobfit-api-1zdv.onrender.com/health")
      .then((r) => r.json())
      .then((d) => setStatus(`${d.service} is ${d.status} (v${d.version})`))
      .catch(() => setStatus("backend unreachable"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h1>JobFit</h1>
      <p>Backend: {status}</p>
    </div>
  );
}

export default App;