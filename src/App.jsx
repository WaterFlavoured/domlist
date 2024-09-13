import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar  from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import './App.css'
import AddCard from './components/AddCard.jsx'
import EnterCard from './components/EnterCard.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [showGenerate, setShowGenerate] = useState(false);
  const title = "Card Title";
  const date = "10-10-2021";
  const priority = "High";
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas, quod consequuntur commodi vel voluptatem rerum optio molestias possimus ipsam.";

  const handleClick = () => {
    setShowGenerate(!showGenerate);
  }
  return (
    <>
      <Navbar />
      <main>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        <Card title={title} date={date} priority={priority} description={description}/>
        {showGenerate && <EnterCard />}
        <EnterCard />
        <AddCard handleClick={handleClick} showGenerate={showGenerate}/>
      </main> 
    </>
  )
}

export default App
