import About from '@/components/About'
import Counter from '@/components/Counter'
import Promo from '@/components/Promo'

export default function CounterPage() {
  return (
    <section className="font-inter">
      <Promo />
      <About />
      <Counter />
    </section>
  )
}
