
import './css/Button.css'
import PropTypes from "prop-types";
const Footer = ({inputButton}) => {
    return (
        <section className="relative mt-52 lg:mt-6">
            <div id='card' className="p-4 w-[90%] xl:w-[85%] 2xl:w-[80%] md:w-[95%] bg-image bg-cover flex gap-5 flex-col justify-center items-center text-center absolute  bg-[#faf5ee] rounded-2xl h-[35vh] top-0 bottom-full left-0 right-0 m-auto">
                <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
                <p className="text-gray-400 w-[80%]">Get the latest updates and news right in your inbox!</p>
                <div className="flex justify-center items-center gap-3 md:w-[80%] xl:w-[60%]">
                <form action="" id='formId' className='flex w-full gap-3'>
                    <input id='inputValue' type="email" placeholder="Enter Your Email" className="md:h-[4em] focus:outline-none input input-bordered w-full"/>
                    <input onClick={() => inputButton()} type="submit" name="" id="" 
                            className="text-lg btn bg-gradient-to-r from-purple-400 via-yellow-400 to-yellow-400 md:h-16 md:w-[10em] 
                            transition-all duration-300 ease-in-out hover:scale-110"
                    />
                </form>
                 
                </div>
            </div>

            <div className="bg-[#06091A] text-white flex flex-col justify-center items-center mt-28 pt-48 space-y-8">
                <img src="./assets/logo-footer.png" alt="" />
                <div id='card3' className="flex flex-col justify-between items-center xl:items-end w-[90%] xl:w-[77%] space-y-8 xl:flex-row">
                    <div className="flex justify-between items-top xl:w-[54%]">
                        <div className="text-left items-center w-1/2 ">
                            <h1 className="text-lg mb-3">About Us</h1>
                            <p className="text-gray-400 w-[70%]">We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                    
                        <ul className="text-right xl:text-center">
                            <h1 className="text-lg">Quick Links</h1>
                            <li className="text-sm text-gray-400">Home</li>
                            <li className="text-sm text-gray-400">Service</li>
                            <li className="text-sm text-gray-400">About</li>
                            <li className="text-sm text-gray-400">Contact</li>
                        </ul>
                    </div>

                    <div className="text-center space-y-5">
                        <h1 className="text-lg">Subscribe</h1>
                        <p className="text-sm text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                        <form action="" id='formId' className='flex w-full gap-3'>
                            <input id='inputValue' type="email" placeholder="Enter Your Email" className=" focus:outline-none input input-bordered"/>
                            <input onClick={() => inputButton()} type="submit" name="" id="" 
                            className="text-lg btn bg-gradient-to-r from-purple-400 via-yellow-400 to-yellow-400 w-[7em] 
                            transition-all duration-300 ease-in-out hover:scale-110"
                        />
                </form>
                    </div>
                </div>
                <div className="border-[1px] w-[90%] mb-5"></div>
                <p className="text-sm text-gray-400 mb-5">@2024 Your Company All Rights Reserved.</p>
            </div>
        </section>
    );
};

Footer.propTypes={
    inputButton: PropTypes.func.isRequired,
}


export default Footer;
