import ResultSection from './components/ResultSection'
import SummarySection from './components/SummarySection'

function App() {
  return (
    <div className='flex h-screen items-center justify-center font-hanken-grotesk'>
      <div className='-mt-10 flex flex-col items-center justify-center gap-1 md:mt-0 md:h-4/5 md:w-4/5 md:flex-row md:py-10'>
        <ResultSection />
        <SummarySection />
      </div>
    </div>
  )
}

export default App
