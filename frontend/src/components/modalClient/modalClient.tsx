import { useNavigate } from "react-router-dom";
import { GenderIcon } from "../petCard/styles";
import { Button } from "../ui/button/button";
import {
  BlurDiv,
  ContainerMain,
  ContainerCenter,
  ModalSection,
  PetImage,
  DetailsSection,
  InfoDiv,
  Close
} from "./style";

export function ModalClient() {
  const navigate = useNavigate()

  const close = () => {
    navigate("/home");
  }

  return (
    <ContainerMain>
      <BlurDiv />

      <ContainerCenter>
        <ModalSection>
          <PetImage src="src\assets\imgDonate.jpg" alt="pet-image" />

          <Close onClick={close}>X</Close>

          <DetailsSection>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Nome Pet</h2>
              <GenderIcon>♂️</GenderIcon>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10% 0",
                gap: "20px",
              }}
            >
              {[
                { label: "Espécie", value: "Cachorro" },
                { label: "Idade", value: "1 ano" },
                { label: "Raça", value: "Golden Retriever" },
                { label: "Castrado", value: "Sim" },
                { label: "Tamanho", value: "Grande" },
                { label: "Vacinado", value: "Sim" },
              ].map(({ label, value }) => (
                <section
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <InfoDiv style={{ textAlign: "left" }}>
                    <p style={{ margin: 0 }}>{label}</p>
                    <h3 style={{ margin: 0 }}>{value}</h3>
                  </InfoDiv>
                </section>
              ))}
            </div>

            <InfoDiv style={{ textAlign: "justify" }}>
              <p>Sobre mim</p>
              <h3 style={{ margin: 0 }}>
                Elizabeta é um pouco tímida com pessoas novas, mas ADORA carinho, fica toda feliz. Convive bem com outros gatos.
              </h3>
            </InfoDiv>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "30px",
                gap: "15px",
              }}
            >
              <h5 style={{ textAlign: "center" }}>
                Curtiu o PET? Agora é sua chance de levar um amigo pra casa!
              </h5>
              <Button text="Quero adotar" />
            </div>
          </DetailsSection>
        </ModalSection>
      </ContainerCenter>
    </ContainerMain>
  );
}
