import './App.css'
import Company from './components/Company'
import Edit from './components/Edit'
import About from './components/about'
import Openings from './components/opening'
import Skills from './components/skills'

function App() {

  return (<div>
    
    <div className='grid grid-cols-4'>
      <div className='col-span-3 border-r border-gray border-r-2'>
        <Openings></Openings>
        <Skills></Skills>
        <About></About>
        <Company></Company>
      </div>
      <div>
      <Edit></Edit>
      </div>
    </div>
    
  </div>
  )
}

export default App
