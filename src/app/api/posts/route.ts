import { NextResponse } from "next/server";
import posts from '../posts.json'

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const newPost = await req.json();
  posts.push(newPost);
  return NextResponse.json(
    { message: "Post added successfully" },
    { status: 201 }
  );
}
