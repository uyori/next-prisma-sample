import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Next Todo App",
	description: "A simple todo app built with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="max-w-2xl mx-auto p-8">{children}</div>
			</body>
		</html>
	);
}
