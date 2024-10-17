import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const navigation = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container px-40 my-20 h-fit flex flex-wrap justify-center">
            <div className="w-1/2">
                <p className="font-merienda text-[#FB7A31] text-4xl font-bold pt-20">
                    Continue to Checkout
                </p>
                <p className="font-faustina hover:underline text-[#4B5563] cursor-pointer"
                    onClick={() => navigation('/shopping-cart')}
                >
                    Back to My Cart
                </p>
                <form>
                    <input className="w-2/3 font-worksans border-b-2 my-8 focus:outline-none"
                        placeholder="Enter your phone number"
                        type="text"
                    />
                    <input className="w-2/3 font-worksans border-b-2 focus:outline-none"
                        placeholder="Enter your address"
                        type="text"
                    />
                    <div className="w-full mt-10">
                        <button className="w-2/5 ml-20 py-3 bg-[#FB7A31] hover:bg-[#FF8C42] text-white text-lg font-merienda rounded-3xl"
                            type="submit"
                        >
                            Checkout
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-2/5 h-fit bg-[#F9FAFB] p-14 flex flex-wrap">
                <p className="font-faustina font-bold text-3xl">
                    Koi Purchase Summary
                </p>
                <div className="w-1/2 font-worksans text-[#4B5563]">
                    <p>Products in Basket</p>
                    <p>Total Payment Due</p>
                    <p>Delivery Charges</p>
                    <p>Subtotal for Order</p>
                    <p className="mt-32 font-bold text-black">
                        Estimated Final Amount
                    </p>
                </div>
                <div className="w-1/2 text-right font-worksans font-bold">
                    <p>20 Beautiful Koi</p>
                    <p>$2790 for Koi</p>
                    <p>$90 for Shipping</p>
                    <p>$3520 Total Cost</p>
                    <p className="mt-32 font-bold text-black">
                        $2900 Total Due
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Checkout