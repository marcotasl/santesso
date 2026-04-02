import { NextResponse } from "next/server";

const INDEXNOW_KEY = "b5eb4bbaa3624a1e867c7316a34cbb9d";
const SITE_URL = "https://santesso.vercel.app";

const URLS = [SITE_URL];

export async function GET() {
  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URLS,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return NextResponse.json({
    status: res.status,
    message: res.ok ? "URLs submitted to IndexNow" : "IndexNow submission failed",
    urls: URLS,
  });
}
