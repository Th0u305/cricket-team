import PropTypes from "prop-types";
const Header = ({price, freeMoney}) => {
  
    return (
        <section className="">
            <div className="space-y-5 flex flex-col justify-between items-center lg:flex-row">
                <div className="lg:w-full">
                    <img src="../assets/logo.png" alt="" />
                </div>
                <ul className="flex flex-row justify-between items-center gap-5 font-semibold text-xl">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className="lg:w-full flex justify-end items-center">
                    <div className="border-2 rounded-2xl p-3 flex justify-center items-center gap-5 w-fit text-xl">
                        <p>{price}</p>
                        <p>Coin</p>
                        <img className="w-[30px]" src="../assets/dollar.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[#000000dc] bg-image bg-no-repeat bg-cover rounded-2xl mt-12 flex flex-col justify-center items-center text-center gap-12 py-12">
                <img src="../assets/banner-main.png" alt="" />
                <h1 className="text-3xl font-semibold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-gray-300 text-lg">Beyond Boundaries Beyond Limits</p>
                <button onClick={()=> freeMoney()} className="btn btn-wide text-lg bg-active transition-all duration-300 ease-in-out hover:scale-110">Claim Free Credit</button>
            </div>
        </section>
       
    );
};


Header.propTypes={

    price:PropTypes.number.isRequired,
    freeMoney:PropTypes.func.isRequired
}

export default Header;