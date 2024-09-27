import { Input } from '../../../components/ui/input/input';
import { SignInContainer, SignInContent, LinktoSignUp } from './styles';
import apalogo from '../../../assets/apalogo.svg';
import { Button } from '../../../components/ui/button/button';
import { useState } from 'react';
import { signIn } from '../../../api/sign-in';
import { Link, useNavigate } from 'react-router-dom';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSignIn = async () => {
    try {
      const token = await signIn({ email, password });
      console.log('Sign-in successful:', token);
      navigate('/admin'); // Redirect to admin page
    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };

  return (
    <SignInContainer>
      <SignInContent>
        <h2>APA São Ludgero</h2>
        <img src={apalogo} alt="APA Logo" />
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
        <Button text='Entrar' onClick={handleSignIn} />
        <LinktoSignUp>
          <Link to='/sign-up'>
            <a href="#">Cadastrar</a>
          </Link>
        </LinktoSignUp>
      </SignInContent>
    </SignInContainer>
  );
}
