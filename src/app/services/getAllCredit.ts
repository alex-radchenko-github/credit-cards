import { createClient } from "@supabase/supabase-js";
import axios from "axios";


// export async function getAllCredit() {
// 	let URL = 'https://kigxpkjsnrdkvbjjpemh.supabase.co/rest/v1/creditcards'
// 	let data = await axios.get(URL, {
// 		headers: {
// 			'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
// 			'Content-Type': 'application/json'
// 		}
// 	})
// 	return data.data
// }
export async function getAllCredit() {
	let url = process.env.NEXT_PUBLIC_SUPABASE_URL!
	let key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	const supabase = createClient(url, key);
	const {data}= await supabase.from("creditcards").select()
	return data
}

export async function addCard(cardData: any) {
	let url = process.env.NEXT_PUBLIC_SUPABASE_URL!
	let key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	const supabase = createClient(url, key);
	console.log(cardData)

	return supabase
		.from('creditcards')
		.insert(cardData)
}


export async function findByCreditNumber() {
	let url = process.env.NEXT_PUBLIC_SUPABASE_URL!
	let key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	const supabase = createClient(url, key);
	const {data}= await supabase.from("creditcards").select()
	return data
}
