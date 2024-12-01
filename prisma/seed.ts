import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
	console.time("Seeding complete 🌱");

	await prisma.todos.createMany({
		skipDuplicates: true,
		data: [
			{
				title: "Buy milk",
				completed: false,
			},
			{
				title: "Buy bread",
				completed: false,
			},
			{
				title: "Buy eggs",
				completed: true,
			},
		],
	});

	console.timeEnd("Seeding complete 🌱");
};

main()
	.then(() => {
		console.log("Process completed");
	})
	.catch((e) => console.log(e));
