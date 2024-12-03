import { isBot } from "@/utils/detectBots";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const isVisitorBot = await isBot(request);
  return NextResponse.json({ isBot: isVisitorBot });
}
