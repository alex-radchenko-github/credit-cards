import {AddPaymentMethod} from "@/app/components/AddPaymentMethod";
import {ButtonSubmit} from "@/app/components/ButtonSubmit";
import {CreditCards} from "@/app/components/CreditCards";
import {PaymentMethods} from "@/app/components/PaymentMethods";
import {Title} from "@/app/components/Title";
import styles from './page.module.scss'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className={styles.mainWrapper}>
      <div className={styles.divWrapper}>
	      <PaymentMethods/>
	      <Title/>
	      <CreditCards/>
	      <AddPaymentMethod/>
	      <ButtonSubmit/>
	      
      
      </div>
    </main>
  )
}

// width: 605-61=544
// height: 390+474=864
// 605-540=65
///126-61=75
// 390-346=44
// 346-279=67
// 249-130=119
// 99+20=119
// 320-201=119
// 77-46
// 202-173=29
