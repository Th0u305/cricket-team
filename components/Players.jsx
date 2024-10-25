import { useEffect } from "react";
import { useState } from "react";
import '../components/css/Button.css'
import Selected from "./Selected";

const Players = ({choosePlayer,buttonActiveState, active, visible, visible2, visible3, click, click2, click3, selectedPlayers,deletePlayers}) => {
   
    const [player, setPlayer] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayer(data.players))
    })

    
    return (
        
        <section className="mt-12">
            <div className="flex justify-between mt-12">

                {
                    visible2 && <h1 className="text-3xl font-semibold ">Available Players</h1>
                }
                
                {
                   visible && <h1 className="text-3xl font-semibold ">Selected Players ({selectedPlayers.length}/6)</h1>
                }
   
                <div className="space-x-5">
                    <button  onClick={()=>{ buttonActiveState("available"); click2()}} className={`${active.available?" btn btn-xs text-lg sm:btn-sm md:btn-md lg:btn-lg bg-active bg-active:hover":"btn btn-xs text-lg sm:btn-sm md:btn-md lg:btn-lg"}`} >Available</button>
                    <button onClick={()=>{ buttonActiveState("selected"); click()}} className={`${active.available?"btn btn-xs text-lg sm:btn-sm md:btn-md lg:btn-lg bg-active:hover":"btn btn-xs text-lg sm:btn-sm md:btn-md lg:btn-lg bg-active"}`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            <div className="grid grid-cols-3 my-12 gap-16">
                { visible2 &&
                    player.map(player => (

                        <div key={player.playerId} className="card card-compact bg-base-100 shadow-xl">
                          <figure>
                            <img src={player.image} alt="cricket players" />
                          </figure>
                          <div className="card-body">
                            <h1 className="card-title"><i className="fa-solid fa-user text-gray-500"></i>{player.name}</h1>
                            <h2 className="text-gray-400"><i className="fa-solid fa-flag fa-xl text-gray-500 mr-5"></i>{player.country}</h2>
                            <hr />
                            <div className="flex justify-between items-center mt-2">
                                <h2 className="text-lg font-semibold">Rating</h2>
                                <h2 className="bg-gray-200 rounded-xl px-5 py-2">{player.role}</h2>
                            </div>
                            
                            <div className="">
                                <div className="flex">
                                    <p className="font-semibold">{player.battingType}</p>
                                    <p className="text-right text-gray-500">{player.battingType}</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold">Price: <i className="fa-solid fa-bangladeshi-taka-sign"></i> {player.price}BDT</p>
                                    <button onClick={()=> {choosePlayer(player)}} className="btn mt-3">Choose Player</button>
                                </div>

                            </div>
                            
                            <div className="card-actions justify-end">
                            
                            </div>
                          </div>
                        </div>
                    ))
                }
               
            </div>
            { visible &&
                <div>
                    <Selected deletePlayers={deletePlayers} selectedPlayers={selectedPlayers} ></Selected>
                    { visible3 &&
                        <button onClick={()=> click3()} className="btn btn-xs text-lg sm:btn-sm md:btn-md lg:btn-lg bg-active">Add More Player</button>
                    }
                    
                </div>
            }

            
        </section>
    );
};

export default Players;