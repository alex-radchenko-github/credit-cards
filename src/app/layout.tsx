import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Urbanist} from 'next/font/google'
import Providers from '@/utils/providers'
import React from "react";

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})
const urbanist = Urbanist({subsets: ['latin'], variable: '--font-urbanist'})



export default function RootLayout({children}: any) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${urbanist.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
