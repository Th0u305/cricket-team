import PropTypes from "prop-types";

const Header = ({price, freeMoney}) => {
  
    return (
        <section>
            <div className="flex justify-between items-center">
                <div className="">
                    <img src="assets/logo.png" alt="" />
                </div>
                <div className="">
                    <ul className="flex justify-between items-center gap-12 font-semibold">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                        <div className="border-2 rounded-2xl p-3 flex justify-center items-center gap-5">
                            <p>{price}</p>
                            <p>Coin</p>
                            <img className="w-[30px]" src="assets/dollar.png" alt="" />
                        </div>
                    </ul>
                </div>
            </div>
            <div className="bg-[#000000dc] bg-image bg-no-repeat bg-cover  rounded-2xl mt-12 flex flex-col justify-center items-center gap-12 py-12">
                <img src="../assets/banner-main.png" alt="" />
                <h1 className="text-3xl font-semibold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-gray-300 text-lg">Beyond Boundaries Beyond Limits</p>
                <button onClick={()=> freeMoney()} className="btn btn-xs text-lg sm:btn-sm md:btn-md lg:btn-lg bg-active">Claim Free Credit</button>
            </div>
        </section>
       
    );
};


Header.propTypes={

    price:PropTypes.number.isRequired,
    freeMoney:PropTypes.func.isRequired
}

export default Header;