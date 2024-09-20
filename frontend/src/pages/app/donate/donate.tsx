import { Header } from "../../../components/header/header"
import { ContainerMain, ContainerDonate, Image, SectionPix } from "./style"
import img from './../../../assets/imgDonate.jpg';

export default function Donate() {
  return (
    <>
      <Header />

      <ContainerMain>
        <ContainerDonate>
          <Image src={img} alt="imgDonate" />

          <SectionPix>
            <h1>Faça seu pix!</h1>

            <section></section>

            <div>Simulando QRCode</div>

            <section></section>

            <p>Cada contribuição ajuda a fornecer abrigo, comida, vacinas e cuidados veterinários essenciais para animais resgatados. Juntos, podemos mudar vidas – uma adoção de cada vez.</p>
          </SectionPix>
        </ContainerDonate>
      </ContainerMain>
    </>
  )
}