import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { X, MoveRight } from 'lucide-react'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import {
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Map,
} from 'lucide-react'
import content from '../../content/content'
import { Link } from 'react-scroll'
import FooterSocialIcons from '../sectionElements/footer/FooterSocialIcons'

function FooterNovoTemplate({ mapa }) {
  const labels = content.texts.navbar.menuItems
  const ids = content.texts.navbar.menuId
  const [visible, setVisible] = useState(false)
  const abrirModal = () => {
    setVisible(true)
  }

  const grid = mapa ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <SectionArea className="bg-primary">
      <SectionWrapper>
        <footer className="text-white">
          <div className="container mx-auto px-6">
            <div
              className={`grid md:grid-cols-2 ${grid} items-center gap-12 mb-16`}
            >
              <div className="space-y-6">
                <img
                  src={content.texts.navbar.logo.img}
                  alt={content.texts.navbar.logo.alt}
                  className="w-[60%] tablet1:w-[70%] desktop1:w-[50%]"
                />
                <p className="text-white/60 leading-relaxed font-secondFont font-light">
                  {content.texts.footer.footerText}
                </p>
                <div className="flex gap-4">
                  <FooterSocialIcons
                    instagram={true}
                    facebook={true}
                    linkedin={true}
                    tiktok={true}
                    x={true}
                    youtube={true}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-bold font-mainFont text-lg mb-6">
                  Links Rápidos
                </h4>
                <ul className="space-y-4 font-secondFont font-light">
                  {labels.map((item, index) => (
                    <li key={item}>
                      <Link
                        to={ids[index]}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className="cursor-pointer"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold font-mainFont text-lg mb-6">
                  Contato
                </h4>
                <ul className="space-y-4 text-white/60">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 shrink-0 text-white" />
                    <span className="font-secondFont font-light">
                      {content.texts.infos.adress}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-white" />
                    <span className="font-secondFont font-light">
                      {content.texts.infos.phone}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 shrink-0 text-white" />
                    <span className="font-secondFont font-light text-paragraph3">
                      {content.texts.infos.email}
                    </span>
                  </li>
                </ul>
              </div>

              {mapa && (
                <div className="h-64 rounded-xl overflow-hidden bg-white/5">
                  <iframe
                    src={content.texts.maps.embedsrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-8 text-center font-secondFont text-sm text-white/40">
              <p>&copy; {content.texts.footer.copyrightLine}</p>
              <br />
              <p className=" text-sm text-fontLighter/50 font-secondFont">
                {content.texts.footer.pontos.ponto1} •{' '}
                {content.texts.footer.pontos.ponto2} •{' '}
                {content.texts.footer.pontos.ponto3}
              </p>
              <div className="mt-4 text-sm text-fontLighter/50 font-secondFont ">
                <button
                  onClick={abrirModal}
                  aria-label="Abre um Modal com os termos da Política de privacidade"
                  className="underline cursor-pointer"
                >
                  Políticas de privacidade
                </button>{' '}
                - Desenvolvido com excelência por{' '}
                <a
                  target="_blank"
                  href="https://paperstreet.com.br"
                  className="underline"
                >
                  Paper Street
                </a>
              </div>
            </div>
          </div>
          <Dialog
            className="font-secondFont"
            closeIcon={<X size={20} />}
            // header={
            //   <span className="text-black">Políticas de privacidade</span>
            // }
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: '50vw' }}
            breakpoints={{
              '4000px': '641px',
              '1024px': '641px',
              '641px': '85vw',
            }}
          >
            {content.texts.footer.privacidade}
          </Dialog>
        </footer>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FooterNovoTemplate
