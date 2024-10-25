import { useEffect } from "react";
import { useState } from "react";
import '../components/css/Button.css'
import Selected from "./Selected";
import PropTypes from "prop-types";

const Players = ({choosePlayer,buttonActiveState, active, visible, visible2, visible3, click, click2, click3, selectedPlayers,deletePlayers,addDeletedPlayerMoney}) => {
   
    const [player, setPlayer] = useState([]);
    useEffect(()=>{
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayer(data.players))
    })

    
    return (
        
        <section className="mt-12">
            <div className="flex flex-col justify-between items-center space-y-5 mb-12 md:flex-row">

                {
                    visible2 && <h1 className="text-3xl font-semibold ">Available Players</h1>
                }
                
                {
                   visible && <h1 className="text-3xl font-semibold ">Selected Players ({selectedPlayers.length}/6)</h1>
                }
   
                <div className="space-x-5 flex">
                    <button  onClick={()=>{ buttonActiveState("available"); click2()}} className={`${active.available?"btn btn-lg text-lg bg-active bg-active:hover transition-all duration-300 ease-in-out hover:scale-110":"btn btn-lg text-lg transition-all duration-300 ease-in-out hover:scale-110"}`} >Available</button>
                    <button onClick={()=>{ buttonActiveState("selected"); click()}} className={`${active.available?"btn btn-lg text-lg bg-active:hover transition-all duration-300 ease-in-out hover:scale-110":"btn btn-lg text-lg bg-active transition-all duration-300 ease-in-out hover:scale-110"}`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            <div id="card2" className="grid grid-cols-1 gap-14 md:grid-cols-2 xl:grid-cols-3 xl:mb-32">

                { visible2 &&
                    player.map(player => (

                        <div key={player.playerId} className="card card-compact bg-base-100 shadow-xl p-5 border-2">
                            <figure>
                              <img className="rounded-2xl" src={player.image} alt="cricket players" />
                            </figure>
                            <div className="card-body">
                                <h1 className="card-title"><i className="fa-solid fa-user text-gray-500"></i>{player.name}</h1>
                                <h2 className="text-gray-400"><i className="fa-solid fa-flag fa-xl text-gray-500 mr-5"></i>{player.country}</h2>
                                <hr />
                                <div className="flex justify-between items-center mt-2">
                                    <h2 className="text-lg font-semibold">Rating</h2>
                                    <h2 className="bg-gray-200 rounded-xl px-4 py-2">{player.role}</h2>
                                </div>
                              
                                <div className="space-y-5">
                                    <div className="flex">
                                        <p className="font-semibold">BattingType</p>
                                        <p className="text-right text-gray-600">{player.battingType}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="font-semibold">BowlingType</p>
                                        <p className="text-right text-gray-600">{player.bowlingType}</p>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <p className="font-semibold">Price: <i className="fa-solid fa-bangladeshi-taka-sign"></i>{player.price}BDT</p>
                                        <button onClick={()=> {choosePlayer(player)}} className="btn border-2 border-gray-500 transition-all duration-300 ease-in-out hover:scale-110">Choose Player</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                } 
            </div>
            { visible &&
                <div>
                    <Selected addDeletedPlayerMoney={addDeletedPlayerMoney} deletePlayers={deletePlayers} selectedPlayers={selectedPlayers} ></Selected>
                    { visible3 &&
                        <div className="lg:mb-20 2xl:mb-36 flex justify-center">
                            <button onClick={()=> click3()} className="btn w-[20em] h-[4em] text-lg bg-active transition-all duration-300 ease-in-out hover:scale-110">Add More Player</button>
                        </div>
                    }
                    
                </div>
            }
        </section>
    );
};

Players.propTypes={

    choosePlayer:PropTypes.func.isRequired,
    buttonActiveState: PropTypes.func.isRequired,
    active :PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    visible2:  PropTypes.bool.isRequired,
    visible3:  PropTypes.bool.isRequired,
    click:PropTypes.func.isRequired,
    click2: PropTypes.func.isRequired,
    click3: PropTypes.func.isRequired,
    selectedPlayers:PropTypes.array.isRequired,
    deletePlayers:PropTypes.func.isRequired,
    addDeletedPlayerMoney:PropTypes.func.isRequired,
}

export default Players;