enum TypeCreditCard {
	VISA = 'VISA',
	MASTERCARD = 'MASTERCARD',
	AMEX = 'AMEX',
	DISCOVER = 'DISCOVER',
}

export interface ICreditCards {
	id: string
	first_name: string
	last_name: string
	card_number: string
	type_credit_card: string
	created_at: string
	cvv_number: number
	default_card: boolean
	expiration_date: string
}
