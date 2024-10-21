import { Header } from "../../../components/header/header"
import { Container, Title, Section, Text, List, ListItem } from './styles.ts'

export default function Sobre() {
  return (
    <>
      <Header />

      <Container>
        <Title>Sobre Nós</Title>
        <Section>
          <Text>
            Somos uma sociedade civil sem fins lucrativos, formada por um grupo de voluntários engajados na causa animal no município de São Ludgero.
          </Text>
          <Text>
            A associação foi criada em 2011 por pessoas com interesse na proteção e defesa dos animais, hoje contamos com outra equipe, mas o mesmo objetivo!
          </Text>
          <Text>
            Quem aí lembra do SOS ANIMAIS? Eram 2 grupos envolvidos na causa animal, mas resolvemos unir as forças e trabalhar juntos.
          </Text>

          <Text>O que fazemos?</Text>
          <List>
            <ListItem> Divulgamos animais para adoção;</ListItem>
            <ListItem> Realizamos feiras de adoção a cada 30 a 60 dias, em parceria com a prefeitura do nosso município;</ListItem>
            <ListItem> Abrigamos atualmente 31 animais em nossas casas, que são chamados lares temporários – todos decorrentes de resgates e todos para adoção;</ListItem>
            <ListItem> Cuidamos de alguns animais de rua dando-lhes vacinas, cuidando de sua saúde e promovendo adoções;</ListItem>
            <ListItem> Recebemos diariamente pedidos de ajuda com animais de rua ou animais de tutores carentes que precisam de suporte como: medicação, ração, casinha;</ListItem>
            <ListItem> Auxiliamos em conjunto com órgãos públicos, a resolver questões que envolvam animais em maus tratos ou animais em situação de rua;</ListItem>
            <ListItem> Orientamos dúvidas questionadas no direct pois, entendemos que muitas pessoas não sabem o segmento ao verem uma situação de maus tratos ou um animal ferido;</ListItem>
            <ListItem> Ninguém é remunerado na associação - É um trabalho voluntário, diário, fazemos o que podemos, no tempo e com os recursos que temos.</ListItem>
          </List>
          <Text>
            Tudo o que podemos fazer por animal, você também pode! Se você quiser se juntar ao nosso grupo de voluntários, nos chame no direct com seu número de telefone que direcionaremos ao nosso grupo.
          </Text>
        </Section>
      </Container>
    </>
  )
}
