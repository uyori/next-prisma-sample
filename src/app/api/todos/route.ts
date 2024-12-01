import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const todos = await prisma.todos.findMany({
		select: {
			id: true,
			title: true,
			completed: true,
		},
	});
	return NextResponse.json(todos);
}
