import Image from 'next/image';
import logo from '/public/logo.png';

export default function Banner() {
    return (
            <div className="flex gap-2.5 ml-0 mr-0 mb-12 w-full content-center justify-center">
                <Image src={logo} alt='logo' className='mr-3' width={80}/>
                <h1 className='text-2xl font-bold text-gray-50'> hoy que hiciste ?</h1>
            </div>
    )
}
