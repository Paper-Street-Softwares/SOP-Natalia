import { useColorMode } from '../assets/context/ColorModeContext'
import HeroTemplateNovo from '../components/sections/HeroTemplateNovo'
import FeaturesNovaTemplate from '../components/sections/FeaturesNovaTemplate'
import AboutNovoTemplate from '../components/sections/AboutNovoTemplate'
import SocialMediaTemplate from '../components/sections/SocialMediaTemplate'
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import RegionsSectionTemplate from '../components/sections/RegionsSectionTemplate'
import TeamNovoTemplate from '../components/sections/TeamNovoTemplate'
import StepsNovoTemplate from '../components/sections/StepsNovoTemplate'
import CtaNovoTemplate from '../components/sections/CtaNovoTemplate'
import FaqNovoTemplate from '../components/sections/FaqNovoTemplate'
import FooterNovoTemplate from '../components/sections/FooterNovoTemplate'
import WhatsappAnimated from '../components/interactives/WhatsAppAnimated'

export default function Index() {
  const showUnderConstruction = false

  const { colorMode, setColorMode } = useColorMode()

  return (
    <>
      <NavbarNovaTemplate />
      <HeroTemplateNovo />
      <FeaturesNovaTemplate />
      <AboutNovoTemplate />
      <SocialMediaTemplate />
      {/* <RegionsSectionTemplate /> */}
      {/* <TeamNovoTemplate /> */}
      <StepsNovoTemplate />
      <CtaNovoTemplate />
      <FaqNovoTemplate />
      <FooterNovoTemplate mapa={false} />
      <WhatsappAnimated />
    </>
  )
}
