import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PrimemedIstanbul from './screens/PrimemedIstanbul'
import TopNavbar from './components/TopNavbar'
import { Heading, Text } from './components/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNavbar/>
    {/* <PrimemedIstanbul/> */}


    <div className="min-h-screen flex flex-col">
      <TopNavbar />
      
      <main className="flex-grow p-8">
        <Heading as="h1">Heading 1 (56px Extra Bold)</Heading>
        <Heading as="h2">Heading 2 (46px Extra Bold)</Heading>
        <Heading as="h3">Heading 3 (34px Regular)</Heading>
        
        <Text variant="body1">Body 1 text (18px Regular)</Text>
        <Text variant="body2">Body 2 text (16px Regular)</Text>
        
        <div className="mt-6">
          <Text variant="tag" className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Product Tag
          </Text>
          <Text variant="small" className="mt-2 block">Small text (14px)</Text>
        </div>
      </main>
    </div>

    </>
  )
}

export default App
