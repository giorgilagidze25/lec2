import './App.css'
import Card from './Components/Card/Card'
import Header from './Components/Header/Header'
function App() {

    



  return (
      <div>
            <Header/>
         
        <Card
         name={'giorgi'}
          age={21} 
          desc={'desc1'} 
          bg={'red'}
          />
        <Card 
        name={'sofo'}
         age={23}
          desc={'desc2'} 
          bg={'blue'}
          />


        <Card 
        name={'aka'}
         age={11}  
         desc={'desc3'}
         bg={'green'}
          />

        <Card 
        name={'luka'}
         age={22} 
         bg={'aqua'}  
         />
      
      </div>
  )
}

export default App
