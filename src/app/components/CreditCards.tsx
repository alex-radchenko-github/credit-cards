import React from 'react';

export enum CardTypes {
	VISA = 'VISA',
	MASTERCARD = 'MASTERCARD',
	PAYPAL = 'PAYPAL',
}

interface CreditCardProps {
	id: string;
	type: string;
	isDefault?: boolean;
	isActive?: boolean;
	card_number?: string;
	expiration_date?: string;
	
}

export const VisaLogo = () => (
	<svg width="15%" height="15%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<g>
			<path d="M0 0h24v24H0z" fill="none"/>
			<path
				d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z"
				fill="#0000FF"/>
		</g>
	</svg>
);

const PaypalLogo = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" preserveAspectRatio="xMidYMid"
	     viewBox="0 0 256 302" id="paypal">
		<path fill="#27346A"
		      d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221.366-1.873.683-3.696.957-5.477-1.556-.824-1.556-.824 0 0 3.671-23.407-.025-39.34-12.686-53.765"></path>
		<path fill="#27346A"
		      d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182 89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287 3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74z"></path>
		<path fill="#2790C3"
		      d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48 9.173-58.136.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55 4.503-23.15 2.173-42.478-9.739-56.054-3.613-4.112-8.1-7.508-13.327-10.28-.283 1.79-.59 3.604-.957 5.477z"></path>
		<path fill="#1F264F"
		      d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49 109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149 11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221.367-1.873.675-3.688.958-5.477-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865"></path>
	</svg>
)

const MastercardLogo = () => (
	<svg width="17%" height="17%" viewBox="0 0 41 26" version="1.1" xmlns="http://www.w3.org/2000/svg"
	>
		<desc>Created with Sketch.</desc>
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="Artboard" transform="translate(-1601.000000, -1029.000000)" fillRule="nonzero">
				<g id="logo-for-twitter" transform="translate(1601.000000, 1029.000000)">
					<rect id="Rectangle-path" fill="#F16022" x="14.8555565" y="3.20546585" width="10.9738588"
					      height="19.720337"></rect>
					<path
						d="M15.552378,13.0656343 C15.552378,9.06494954 17.4255622,5.50185835 20.3425211,3.20546488 C18.2092385,1.52608104 15.5175418,0.524081902 12.5919082,0.524081902 C5.6659065,0.524081902 0.0512633756,6.13910836 0.0512633756,13.0656362 C0.0512633756,19.9920565 5.6659065,25.6071867 12.5919082,25.6071867 C15.5175419,25.6071867 18.2092386,24.6051894 20.3425211,22.9258018 C17.4255622,20.6293066 15.552378,17.0663191 15.552378,13.0656343 Z"
						id="XMLID_107_" fill="#E91D25"></path>
					<path
						d="M40.6337788,13.0656343 C40.6337788,19.9920565 35.0191339,25.6071868 28.0931302,25.6071868 C25.1675002,25.6071868 22.4758035,24.6051895 20.3425211,22.9258019 C23.2595466,20.6293066 25.1326272,17.0663192 25.1326272,13.0656343 C25.1326272,9.06494944 23.2595466,5.50185835 20.3425211,3.20546488 C22.4758036,1.52608104 25.1675003,0.524081902 28.0931302,0.524081902 C35.0191339,0.524081902 40.6337788,6.13910846 40.6337788,13.0656343 Z M39.4372441,20.8371118 L39.4372441,20.43338 L39.6000384,20.43338 L39.6000384,20.3511291 L39.1854354,20.3511291 L39.1854354,20.43338 L39.3483075,20.43338 L39.3483075,20.8371118 L39.4372441,20.8371118 Z M40.2421703,20.8371118 L40.2421703,20.3503291 L40.1150825,20.3503291 L39.9689044,20.6851518 L39.8226854,20.3503291 L39.6955311,20.3503291 L39.6955311,20.8371118 L39.7852751,20.8371118 L39.7852751,20.4699236 L39.9223599,20.7864966 L40.0154117,20.7864966 L40.1524965,20.4691236 L40.1524965,20.8371118 L40.2421703,20.8371118 Z"
						id="Shape" fill="#F69E1E"></path>
				</g>
			</g>
		</g>
	</svg>
);

const CreditCard: React.FC<CreditCardProps> = (
	{
		id,
		type,
		isDefault,
		isActive,
		card_number,
		expiration_date
	}) => {
	
	const renderLogo = () => {
		switch (type) {
			case CardTypes.VISA:
				return <VisaLogo/>;
			case CardTypes.MASTERCARD:
				return <MastercardLogo/>;
			case CardTypes.PAYPAL:
				return <PaypalLogo/>;
			default:
				return null;
		}
	};
	// bg-gradient-to-b from-purple-950 via-red-500 to-red-400
	return (
		<div
			className={`rounded-xl h-[119px] flex justify-between px-[30px]  cursor-pointer ${isActive ? 'border-4 border-purple-600' : 'border-gray-custom border-2'}`}
			onClick={() => {
				console.log({id})}}
		>
			<div className="py-5">
				<div className="flex items-center mb-2">
					{renderLogo()}
					<span className="ml-5 text-xl tracking-tighter">XXXX XXXX XXXX {card_number?.slice(-4)}</span>
				</div>
				<div className="flex space-x-4">
					<span>Expires {expiration_date}</span>
					<span>{isDefault && (
						<div className="px-20 flex items-center">
							<span className="font-bold tracking-tighter">Default</span>
						</div>
					)}</span>
				</div>
			</div>
			
			<div className="flex items-center justify-center">
				<div
					className={`w-5 h-5 rounded-full ${isActive ? 'bg-gradient-to-b from-purple-950 via-red-900 to-red-400' : 'bg-gray-500'} flex items-center justify-center p`}>
					<svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 24 24" fill="none"
					     stroke="white"
					     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
				</div>
			</div>
		</div>
	
	)
	
};

export default CreditCard;
