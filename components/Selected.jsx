import '../components/css/Button.css'

const Selected = ({selectedPlayers,deletePlayers,addDeletedPlayerMoney}) => {

    return (
        selectedPlayers.map(p =>(

        <section key={p.playerId} className="mb-8">
            <div className="flex flex-col justify-between items-center border-2 rounded-2xl p-5 space-y-8 md:flex-row">
                <div className="flex justify-center items-center gap-5">
                    <img className="w-[200px] rounded-2xl" src={p.image} alt="" />
                    <div className="space-y-4">
                        <h1 className="text-2xl font-semibold">{p.name}</h1>
                        <p className="text-gray-400">{p.battingType}</p>
                    </div>
                </div>
                <button onClick={()=> {deletePlayers(p.playerId); addDeletedPlayerMoney(p)}} className="btn btn-wide border-2 border-gray-500"><i className="fa-solid fa-delete-left fa-2xl"></i></button>
            </div>
        </section>
    
        ))      
    );
};

export default Selected;