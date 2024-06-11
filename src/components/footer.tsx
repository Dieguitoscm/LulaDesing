import logo_lula from "/img/logo_lula.png";
import instagram from "/img/instagram.png";
import whatsapp from "/img/whatsapp.png";

export function Footer(){
    return <>
    <div className="contenedor_footer min-w-full bg-[#F5BE90] contacto md:flex row align-middle items-center justify-between px-[70px]">
        <div className="imagen flex justify-center align-middle">
            <img className="logo h-[130px] w-[200px]" src={logo_lula} alt="logo_lula" />
        </div>
        <div className="contacto flex row align-middle items-center justify-around w-80">
            <div className="contacto_texto">
                <h3 className="texto_contectanos  text-xl">Contáctanos</h3>
            </div>
            <div className="logos flex row w-32 justify-around">
                <a target="_blank" href="https://youtu.be/tYb7-KmMyRs?si=x1YWHRguf8ePuzEr&t=740">
                    <img className="logo_app h-[35px] w-[35px]" src={whatsapp} alt="logo_whatsapp" />
                </a>
                <a target="_blank" href="https://www.instagram.com/lula_crochet_/">
                    <img className="logo_app h-[35px] w-[35px]" src={instagram} alt="logo_instagram" />
                </a>
            </div>
        </div>
    </div>
    </>
}