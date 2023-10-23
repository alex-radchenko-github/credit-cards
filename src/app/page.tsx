import {Sup} from "@/app/components/Sup";
import {AddPaymentMethod} from "@/app/components/AddPaymentMethod";
import {ButtonSubmit} from "@/app/components/ButtonSubmit";
import {PaymentMethods} from "@/app/components/PaymentMethods";
import {Title} from "@/app/components/Title";
import React from "react";
import styles from './page.module.scss'


export default async function Home() {
	return (
		<main className={styles.mainWrapper}>
			<div className={styles.divWrapper}>
				<PaymentMethods/>
				<Title/>
				<Sup/>
				<AddPaymentMethod/>
				<ButtonSubmit/>
			</div>
		</main>
	)
}
