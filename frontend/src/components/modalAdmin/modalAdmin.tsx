import { useState } from "react";
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
  Close,
  StyledInput,
  StyledTextArea
} from "./style";
import { useNavigate } from "react-router-dom";

export function ModalAdmin() {
  // exemplos de infos
  const [petName, setPetName] = useState("Nome Pet");
  const [species, setSpecies] = useState("Cachorro");
  const [age, setAge] = useState("1 ano");
  const [breed, setBreed] = useState("Golden Retriever");
  const [neutered, setNeutered] = useState("Sim");
  const [size, setSize] = useState("Grande");
  const [vaccinated, setVaccinated] = useState("Sim");
  const [about, setAbout] = useState(
    "Elizabeta é um pouco tímida com pessoas novas, mas ADORA carinho, fica toda feliz. Convive bem com outros gatos."
  );

  const navigate = useNavigate()

  const close = () => {
    navigate("/admin");
  }

  return (
    <ContainerMain>
      <BlurDiv />

      <ContainerCenter>
        <ModalSection>
          <PetImage src="src/assets/imgDonate.jpg" alt="pet-image" />

          <Close onClick={close}>X</Close>

          <DetailsSection>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <StyledInput
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
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
                { label: "Espécie", value: species, setter: setSpecies },
                { label: "Idade", value: age, setter: setAge },
                { label: "Raça", value: breed, setter: setBreed },
                { label: "Castrado", value: neutered, setter: setNeutered },
                { label: "Tamanho", value: size, setter: setSize },
                { label: "Vacinado", value: vaccinated, setter: setVaccinated },
              ].map(({ label, value, setter }) => (
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
                    <p>{label}</p>
                    <StyledInput
                      type="text"
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                    />
                  </InfoDiv>
                </section>
              ))}
            </div>

            <InfoDiv style={{ textAlign: "justify" }}>
              <p>Sobre mim</p>
              <StyledTextArea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
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
              <Button text="Salvar Alterações" />
            </div>
          </DetailsSection>
        </ModalSection>
      </ContainerCenter>
    </ContainerMain>
  );
}
