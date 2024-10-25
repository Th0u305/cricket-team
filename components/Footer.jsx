
const Footer = () => {
    return (
        <section className="relative mt-60">
            <div className="bg-image flex gap-5 flex-col justify-center items-center absolute bottom-[70%] left-[25%] bg-[#faf5ee] rounded-2xl w-[100vh] h-[30vh]">

                <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
                <p className="text-gray-400">Get the latest updates and news right in your inbox!</p>
                <div className="flex justify-center items-center">
                    <input type="text" placeholder="Enter Your Email" className="focus:outline-none input input-bordered w-[30em] max-w-xs" />
                    <button className="btn bg-gradient-to-r from-purple-400 via-yellow-400 to-yellow-400 w-[10em]">Subscribe</button>

                </div>
              
            </div>

            <div className="bg-[#06091A] text-white flex flex-col justify-center items-center mt-28 pt-48">

                <img src="assets/logo.png" alt="" />
                <div className="flex justify-between items-center w-[90%] mb-12">
                    <div className="w-[30%]">
                        <h1 className="text-lg mb-3 w-fit">About Us</h1>
                        <p className="text-gray-400 w-1/2">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                
                    <ul className="w-auto">
                        <h1 className="text-lg">Quick Links</h1>
                        <li className="text-sm text-gray-400">Home</li>
                        <li className="text-sm text-gray-400">Service</li>
                        <li className="text-sm text-gray-400">About</li>
                        <li className="text-sm text-gray-400">Contact</li>
                    </ul>

                    <div className="text-center space-y-5">
                        <h1 className="text-lg">Subscribe</h1>
                        <p className="text-sm text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex">
                            <input type="text" placeholder="Enter Your Email" className="input input-bordered w-[30em] max-w-xs text-black" />
                            <button className="border-none btn bg-gradient-to-r from-purple-400 via-yellow-400 to-yellow-400 w-[10em]">Subscribe</button>
                        </div>  
                    </div>
                </div>
                <div className="border-[1px] w-[90%] mb-5"></div>
                <p className="text-sm text-gray-400 mb-5">@2024 Your Company All Rights Reserved.</p>

            </div>
        </section>
    );
};

export default Footer;