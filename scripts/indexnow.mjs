const INDEXNOW_KEY = "b5eb4bbaa3624a1e867c7316a34cbb9d";
const SITE_URL = "https://santesso.vercel.app";

const body = {
  host: new URL(SITE_URL).host,
  key: INDEXNOW_KEY,
  keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  urlList: [SITE_URL],
};

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow: ${res.status} ${res.ok ? "OK" : "FAIL"}`);
} catch (e) {
  console.log(`IndexNow: skipped (${e.message})`);
}
