import InputField from "../components/InputField";
import Link from "next/link";
import Image from "next/image";
import star from "/public/star.png";
import barre from "/public/barre.png";

export default function Signup() {
    return (
        <main className="bg-purple-light min-h-screen flex flex-col items-center">
            <Image src={barre} alt="" className="mt-5"/>
            <Image src={star} alt="estrella" className="mt-8"/>
            <div className="pl-10 pr-10 pt-8 text-center">
                <p className="font-extrabold text-blue-dark text-xl pr-10 pl-10">
                    Configura tu cuenta de administrad@r
                </p>
                <form className="mt-8 mb-2 max-w-screen-lg">
                    <div className="mb-4 flex flex-col gap-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <InputField
                                type="text"

                                label="Nombre"
                                name="firstname"
                                placeholder="Su nombre"
                            />
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <InputField
                                type="text"

                                label="Primer apellido"
                                name="paternal_last_name"
                                placeholder="Su apellido paterno"
                            />
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <InputField
                                type="text"

                                label="Segundo apellido"
                                name="maternal_last_name"
                                placeholder="Su apellido materno"
                            />
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <InputField
                                type="text"
                                label="Puesto"
                                name="position"
                                placeholder="El puesto que ocupa"
                            />
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <InputField
                                type="email"
                                label="Email"
                                name="email"
                                placeholder="ejemplo@ejemplo.com"
                            />
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <InputField
                                type="password"
                                label="Contraseña"
                                name="password"
                                placeholder="Contraseña"
                            />
                        </div>
                        <p className="text-xs text-purple-medium">
                            Tu contraseña debe tener al menos 8 caracteres, una letra en mayúscula y un signo especial.
                        </p>

                        <div className="leading-none mb-3 flex justify-center text-left">
                            <input type="checkbox" name="rgpd"/>
                            <label htmlFor="rgpd" className="text-xs text-purple-medium ml-3">
                                Estoy de acuerdo con la <span className="font-bold">política de privacidad </span> y <span className="font-bold">términos del servicio.</span>
                            </label>
                        </div>
                    </div>
                        <div className="flex w-full items-center justify-between">
                            <Link href='/' className="text-sm underline text-purple-medium">
                                Cancelar
                            </Link>
                            <button
                            className="rounded-lg bg-purple py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                                Crear cuenta
                            </button>
                        </div>
                </form>
            </div>
        </main>
    )
}
