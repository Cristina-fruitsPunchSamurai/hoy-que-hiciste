
import Image from 'next/image';
import miEscuela from 'public/mi-escuela-icon.png';
import panel from 'public/panel-icon.png';
import dinamicas from 'public/dinamicas-icon.png';
import tablon from 'public/tablon-icon.png';
import buzon from 'public/buzon-icon.png';

export default function BreadcrumbsAdmin() {
    return (
        <div className="tabs tabs-bordered bg-green-light justify-center items-center p-3 text-xs fixed bottom-0 w-full">
            <ul className="flex">
                <li className="flex flex-col justify-center items-center">
                <Image src={miEscuela} alt='' width={30} height={30}/>
                <a className="tab text-blue-dark text-xs">Mi escuela</a>
                </li>
                <li className="flex flex-col justify-center items-center">
                <Image src={panel} alt='' width={30} height={30}/>
                <a className="tab tab-active text-blue-dark text-xs">Panel</a>
                </li>
                <li className="flex flex-col justify-center items-center">
                <Image src={dinamicas} alt='' width={30} height={30}/>
                <a className="tab text-blue-dark text-xs">Dinámicas</a>
                </li>
                <li className="flex flex-col justify-center items-center">
                <Image src={tablon} alt='' width={30} height={30}/>
                <a className="tab text-blue-dark text-xs">Tablón</a>
                </li>
                <li className="flex flex-col justify-center items-center">
                <Image src={buzon} alt='' width={30} height={30}/>
                <a className="tab text-blue-dark text-xs">Buzón</a>
                </li>
            </ul>
        </div>
    )
};
