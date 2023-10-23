'use client'
import CreditCard from "@/app/components/CreditCards";
import {getAllCredit} from "@/app/services/getAllCredit";
import {useQuery} from "@tanstack/react-query";
import React from 'react';


export function Sup() {
	const {data, isLoading} = useQuery({
		queryKey: ["getCards"],
		queryFn: getAllCredit
	});
	
	return (
		
		<div className="space-y-6">
			
			{
				data?.map((card: any) => (
					<div key={card.id}>
						<CreditCard
							id={card.id}
							type={card.type_credit_card}
							isDefault={card.default_card}
							card_number={card.card_number}
							expiration_date={card.expiration_date}
						/>
					</div>
				))}
		</div>
	);
}

