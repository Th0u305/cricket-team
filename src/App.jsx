import Header from '../components/Header'
import Players from '../components/Players'
import Footer from '../components/Footer'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  const [price, setPrice] = useState(0);


  const [active, setActive] = useState({
    available : true,
    status : "available"
  })


  const buttonActiveState = (status) =>{
    if(status == "available"){
      setActive({
        available : true,
        status : "available"
      })
    }
    else{
      setActive({
        available : false,
        status : "selected"
      })
    }
  }
  

  
  const freeMoney = () =>{
   
    const newBalance = price + 1000000
    toast.success("Credit Added To Your Account");
    setPrice(newBalance)
  }



  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const choosePlayer = (player) =>{ 
    
    const isExist = selectedPlayers.find((p)=> p.playerId === player.playerId)
    
    if (isExist) {
      return toast.error(`This Player already selected`);
    }
    else{
      
      if (selectedPlayers.length > 5) {
        return toast.error(`Maximum Players selected`);
        
      }    
      else{
        const newSelected = [...selectedPlayers, player];
        setSelectedPlayers(newSelected);
      }  
    }
    

    if(price === 0){
      setSelectedPlayers([])
     return toast.error("Not enough money to buy this player.Claim some credit");
    }

    else{
      const newBalance = price - parseFloat(player.price);
      if(player.price > price){
        setSelectedPlayers(selectedPlayers)
        return toast.error("Not enough money to buy this player. Claim some credit");
      }
      toast.success(`Congrats !! ${player.name} is now in your squad`);
      setPrice(newBalance)
      
    }
    
  }

 

  
  const [visible , setVisible] = useState(false)
  const [visible2, setVisible2] = useState(true);
  const [visible3, setVisible3] = useState(true);

  const click = () =>{

    setVisible(true)
    setVisible2(false)
    setVisible3(true)
  }

  const click2 =()=>{
    setVisible(false)
    setVisible2(true)
    setVisible3(true)
  }
 
  const click3 = () =>{
    setVisible3(false)
    setVisible(false)
    setVisible2(true)
  }

 



 const deletePlayers = (id) => {
    const customFilter = (arr, predicate) => {
      return arr.reduce((acc, item) => {
          if (predicate(item)) {
              acc.push(item);
          }
          return acc;
      }, []);
  };
  
  let filtered = customFilter(selectedPlayers, player => player.playerId != id);
  console.log(filtered); 
  setSelectedPlayers(filtered)
 }



  return (

    <section> 
      <div className='container mx-auto mt-12'>
        <Header price={price} freeMoney={freeMoney}></Header>
        
        <ToastContainer position="top-center" />
        
        <Players selectedPlayers={selectedPlayers} choosePlayer={choosePlayer} visible={visible} visible2={visible2} visible3={visible3} click={click} 
                 click2={click2} click3={click3} active={active} buttonActiveState={buttonActiveState} deletePlayers={deletePlayers}></Players>
      </div>
      <Footer></Footer>
    </section>
    
  )
}

export default App
