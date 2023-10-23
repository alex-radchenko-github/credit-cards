import {addCard} from "@/app/services/getAllCredit";
import {useQueryClient} from "@tanstack/react-query";
import React, {useState} from "react";
import {useForm} from "react-hook-form";

interface ModalProps {
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({onClose, children}) => {
	
	const {register, handleSubmit, formState: {errors}} = useForm();
	const [isModalOpen, setModalOpen] = useState(true);
	
	
	const queryClient = useQueryClient()
	const onSubmit = (data: any) => {
		addCard({...data, type_credit_card: 'VISA'})
		setModalOpen(false)
		queryClient.invalidateQueries(["getCards"])
		
	}
	
	
	if (!isModalOpen) return null
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
		>
			<div
				className="rounded-b-2xl bg-white h-64 w-96"
				onClick={e => e.stopPropagation()}
			>
				<form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-wrap">
					<div className="w-1/2 pr-2">
						<div className="mb-4">
							<label className="block text-sm font-semibold mb-2" htmlFor="firstname">First Name</label>
							<input
								{...register("first_name", {required: true})}
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="first_name" type="text" placeholder="First Name"/>
							{errors.firstname && <span>This field is required</span>}
						</div>
						<div className="mb-4">
							<label className="block text-sm font-semibold mb-2" htmlFor="lastname">Last name</label>
							<input
								{...register("last_name", {required: true})}
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="last_name" type="text" placeholder="Last Name"/>
							{errors.lastname && <span>This field is required</span>}
						</div>
						<div className="mb-4">
							<label className="block text-sm font-semibold mb-2" htmlFor="cardNumber">Card Number</label>
							<input
								{...register("card_number", {required: true})}
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="cardNumber" type="text" placeholder="1234 5678 9012 3456"/>
							{errors.cardNumber && <span>This field is required</span>}
						</div>
					</div>
					<div className="w-1/2 pl-2">
						<div className="mb-4">
							<label className="block text-sm font-semibold mb-2" htmlFor="expiration">Expiration</label>
							<input
								{...register("expiration_date", {required: true})}
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="expiration" type="text" placeholder="MM/YY"/>
							{errors.expiration && <span>This field is required</span>}
						</div>
						<div className="mb-4">
							<label className="block text-sm font-semibold mb-2" htmlFor="cvv" >CVV</label>
							<input
								{...register("cvv_number", {required: true})}
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="cvv" type="password" placeholder="123"/>
							{errors.cvv && <span>This field is required</span>}
						</div>
					</div>
					<div className="w-full flex justify-between items-center mt-4">
						<button onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
						        type="button">Cancel
						</button>
						<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						        type="submit">Submit
						</button>
					</div>
				</form>
				{children}
			</div>
		</div>
	);
};

export default Modal;
