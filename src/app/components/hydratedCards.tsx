// import {Sup} from "@/app/components/Sup";
// import {getAllCredit} from "@/app/services/getAllCredit";
// import getQueryClient from "@/utils/getQueryClient";
// import { dehydrate, Hydrate } from '@tanstack/react-query'
//
// export default async function HydratedPosts() {
// 	const queryClient = getQueryClient()
// 	await queryClient.prefetchQuery(['getCards'], getAllCredit)
// 	const dehydratedState = dehydrate(queryClient)
//
// 	return (
// 		<Hydrate state={dehydratedState}>
// 			<Sup />
// 		</Hydrate>
// 	)
// }
