import { Input } from '../../../components/ui/input/input'
import { SignInContainer, SignInContent, LinktoSignUp } from './styles'
import apalogo from '../../../assets/apalogo.svg'
import { Button } from '../../../components/ui/button/button'

export function SignIn() {
    return (
      <SignInContainer>
        <SignInContent>
          <h2>APA São Ludgero</h2>
          <img src={apalogo} />
          <Input placeholder='E-mail' type='email'/>
          <Input placeholder='Senha' type='password' />
          <Button text='Entrar'/>
          <LinktoSignUp>
            <a href="">Cadastrar</a>
          </LinktoSignUp>
        </SignInContent>
      </SignInContainer>
    )
  }
  