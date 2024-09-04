import { Input } from '../../../components/ui/input/input'
import { SignInContainer, SignInContent, LinktoSignUp } from './styles'
import { useNavigate } from 'react-router-dom';
import apalogo from '../../../assets/apalogo.svg'
import { Button } from '../../../components/ui/button/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signUp } from '../../../api/sign-up'

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSignUp = async () => {
    try {
      const data = await signUp({ name, email, password });
      console.log('Sign-up successful:', data)
      navigate('/sign-in');
  } catch (error) {
      console.error('Sign-up failed:', error);
    }
  }
  
    return (
      <SignInContainer>
        <SignInContent>
          <h2>APA São Ludgero</h2>
          <img src={apalogo} />
          <Input 
            placeholder='Nome' 
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input 
            placeholder='E-mail' 
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            placeholder='Senha' 
            type='password'
            value={password}  
            onChange={e => setPassword(e.target.value)} 
          />
          <Button text='Cadastrar' onClick={handleSignUp}/>
          <LinktoSignUp>
            <Link to='/sign-in'>
              <a href="">Voltar para Login</a>
            </Link>
          </LinktoSignUp>
        </SignInContent>
      </SignInContainer>
    )
  }
  