// import Image from 'next/image';
// import logo from '/public/logo.png';
import Button from './components/Button';
import Link from 'next/link';
import Banner from './components/Banner';


export default function Home() {
  return (
    <main >
      <div className="max-h-screen p-24 mt-2 md:m-0">
        <Banner />
      </div>
      <section className='h-4/5 bg-gray-50 w-[100%] mb-0 pl-16 pr-16 pt-10 text-center h-screen'>
        <h4 className='font-extrabold text-purple text-xl leading-tight mb-5'>
          ¡Te damos la bienvenida al mundo de la escuela presente!
        </h4>
        <p className='text-xs leading-tight text-purple mb-5'>
          Conéctate con tu usuario y contraseña y construye una comunidad en tu escuela.
        </p>
        <Link href='/login'>
          <button className='font-semibold bg-purple text-gray p-3 text-gray-50 w-64 rounded-xl text-sm mb-5'> Crear cuenta de administrador</button>
        </Link>
        <Link href='/login'>
          <button className='font-semibold bg-gray-50 text-purple p-3 text-gray-50 w-54 border border-gray-500 rounded-xl text-sm'> Ya tengo cuenta</button>
        </Link>
      </section>
    </main>
  )
}
