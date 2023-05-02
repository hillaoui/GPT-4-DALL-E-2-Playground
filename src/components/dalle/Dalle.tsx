/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import axios from "axios";

type Result = {
  url: string;
}

export default function Dalle() {
  const [token, setToken] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [number, setNumber] = useState<number>(9);
  const [results, setResults] = useState<Array<Result>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  function getImages() {
    if (token !== "" && prompt !== "") {
      setError(false);
      setLoading(true);
      axios
        .post(`/api/images?t=${token}&p=${prompt}&n=${number}`)
        .then((res) => {
          setResults(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else {
      setError(true);
    }
  }

  const [type, setType] = useState<string>("webp");

  function download(url: string) {
    axios
      .post(`/api/download`, { url: url, type: type })
      .then((res) => {
        const link = document.createElement("a");
        link.href = res.data.result;
        link.download = `${prompt}.${type.toLowerCase()}`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>DALLE 2 Playgroung</title>
      </Head>

      <main className={styles.main} style={{ height: "100%", width: "120%" }}>
        <h1 className={styles.title}>
          Create images with <span className={styles.titleColor}>DALLE 2</span>
        </h1>
        <p className={styles.description}>
          <input
            id="token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Bearer Token (sk-...)"
          />
          <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Prompt"
          />
          <input
            id="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            placeholder="Number of images"
            max="10"
          />
          {"  "}
          <button onClick={getImages}>Get {number} Images</button>
        </p>
        <small>
          Download as:{" "}
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="webp">Webp</option>
            <option value="png">Png</option>
            <option value="jpg">Jpg</option>
            <option value="gif">Gif</option>
            <option value="avif">Avif</option>
          </select>
          {" "}
          Click the image below and save.
        </small>
        <br />
        {error ? (<div className={styles.error}>Something went wrong. Try again.</div>) : (<></>)}
        {loading && <p>Loading...</p>}
        <div className={styles.grid}>
          {results.map((result) => {
            return (
              // eslint-disable-next-line react/jsx-key, react/jsx-no-comment-textnodes
              <div className={styles.card}>
                <img
                  className={styles.imgPreview}
                  src={result.url}
                  onClick={() => download(result.url)}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div >
  );
}
