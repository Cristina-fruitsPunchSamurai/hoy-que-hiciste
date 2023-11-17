import Menubar from "@/app/components/BreadcrumbsAdmin";
import data from '../../../data/menuAdmin.json'
import Image from 'next/image';

export default function AdminProfile() {

    return (
        <main className="min-h-screen bg-purple-light ">
                <h2 className="bg-green-apple text-center text-white text-bold font-bold text-base pt-5">
                    Panel de control
                </h2>
            {/* <section className="mb-5">
                <p className="text-purple font-bold m-5 pt-2 text-xs"> Mi perfil de escuela : </p>
                <div className="menu rounded-box bg-white mr-5 ml-5">
                    <div className="flex text-sm h-10">
                        Escuela
                    </div>
                </div>
                <p className="text-purple font-bold m-5 text-xs"> Configuración de escuela : </p>
                <div className="menu rounded-box bg-white mr-5 ml-5">
                    {data.map((e : any) => (
                        <div className="flex text-sm border-b-2 h-10" key={e.key}>
                            <Image src={`${e.image}`} alt="" width={30} height={25}/> {e.title}
                        </div>
                    ))}
                </div>
            </section> */}
            <Menubar/>
        </main>
    )
}
