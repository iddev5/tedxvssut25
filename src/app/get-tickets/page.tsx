import { Stars } from "lucide-react";
import Link from "next/link";
import { TbShirtFilled } from "react-icons/tb";

const InfoElem = ({text, info, icon}: any) => {
    return <div className='w-full flex items-center justify-between bg-[#2a2a2a] p-4 rounded-lg hover:bg-[#4a4a4a] hover:scale-105 transition-all'>
        {icon}
        <div className='text-right'>
            <h1 className='text-xl text-red-500'>{text}</h1>
            <p>{info}</p>
        </div>
    </div>;
}

const linksCN = "text-red-500 hover:text-red-300"

const Index = () => {
    return (
        <div className="flex justify-center bg-black h-[80vh] py-30">
            <div className="pt-20 flex flex-col gap-5 items-center">
                <h1 className="text-5xl text-red-500 text-center">Book your Tickets now!</h1>
                <p className="text-xl p-4 text-center text-gray-200">Just a little more wait...Ticket booking will be live soon!</p>

                <InfoElem text="T-Shirt" info="Get exclusive TEDxVSSUT themed T-Shirt" icon={<TbShirtFilled size={36} />} />
                <InfoElem text="Goodies" info="TEDxVSSUT Premium goodies" icon={<Stars size={36} />} />

                <div className='flex gap-4'>
                    <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/refund" target='_blank' className={linksCN}>Refund Policy</Link> |
                    <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/terms" target='_blank' className={linksCN}>Terms and Conditions</Link> |
                    <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/shipping" target='_blank' className={linksCN}>Shipping Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Index;