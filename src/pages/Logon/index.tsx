import React, { useState, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Logo, Content, Button } from './styles';

import api from '../../services/api';

import Input from '../../components/Input';

interface ISubmitProps {
  email: string;
  password: string;
}

const Logon: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Informe um email válido.')
      .required('Informe um email'),
    password: Yup.string().min(6, 'Mínimo de 6 caracteres.'),
  });

  const history = useHistory();
  const [btnClicked, setBtnClicked] = useState(false);

  async function handleSubmit({
    email,
    password,
  }: ISubmitProps): Promise<void> {
    // setTimeout(() => {
    //   history.push('/dashboard');
    // }, 1000);

    try {
      formRef.current?.setErrors({});

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        },
      );
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // basicamente fiz uma interface inline para o errors...
        const errors: { [key: string]: string } = {};
        // percorri cada erro q esta contido em inner e peguei a chave e valor
        err.inner.forEach((element) => {
          errors[element.path] = element.message;
        });
        // seta os erros para a variavel erros dos inputs
        formRef.current?.setErrors(errors);
        setBtnClicked(false);
      }
    }
  }
  return (
    <Container>
      <Logo>
        <svg
          viewBox="0 0 133 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8691 9.26172C12.8691 10.6094 12.6543 11.778 12.2246 12.7676C11.8014 13.7507 11.2057 14.5319 10.4375 15.1113L12.8789 17.0156L11.2773 18.4609L8.25 16.0684C7.85286 16.153 7.42643 16.1953 6.9707 16.1953C5.82487 16.1953 4.79948 15.9154 3.89453 15.3555C2.99609 14.7891 2.29948 13.985 1.80469 12.9434C1.31641 11.9017 1.06901 10.7005 1.0625 9.33984V8.53906C1.0625 7.15234 1.30664 5.92839 1.79492 4.86719C2.28971 3.80599 2.98307 2.99544 3.875 2.43555C4.77344 1.86914 5.79883 1.58594 6.95117 1.58594C8.12305 1.58594 9.15495 1.86589 10.0469 2.42578C10.9453 2.97917 11.6387 3.77995 12.127 4.82812C12.6152 5.86979 12.8626 7.08398 12.8691 8.4707V9.26172ZM10.3887 8.51953C10.3887 6.91797 10.0892 5.70378 9.49023 4.87695C8.89128 4.05013 8.04492 3.63672 6.95117 3.63672C5.88997 3.63672 5.05664 4.05664 4.45117 4.89648C3.85221 5.72982 3.54622 6.9082 3.5332 8.43164V9.26172C3.5332 10.7982 3.83268 11.9993 4.43164 12.8652C5.03711 13.7311 5.88346 14.1641 6.9707 14.1641C8.07096 14.1641 8.91406 13.7474 9.5 12.9141C10.0924 12.0807 10.3887 10.8633 10.3887 9.26172V8.51953Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M28.7793 1.78125V11.2832C28.7793 12.7936 28.2943 13.9915 27.3242 14.877C26.3607 15.7559 25.0749 16.1953 23.4668 16.1953C21.8392 16.1953 20.5469 15.7624 19.5898 14.8965C18.6328 14.0241 18.1543 12.8164 18.1543 11.2734V1.78125H20.6152V11.293C20.6152 12.2435 20.8561 12.9694 21.3379 13.4707C21.8197 13.972 22.5293 14.2227 23.4668 14.2227C25.3678 14.2227 26.3184 13.2201 26.3184 11.2148V1.78125H28.7793Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M45.7734 9.26172C45.7734 10.6549 45.5326 11.8789 45.0508 12.9336C44.569 13.9818 43.8789 14.7891 42.9805 15.3555C42.0885 15.9154 41.0599 16.1953 39.8945 16.1953C38.7422 16.1953 37.7135 15.9154 36.8086 15.3555C35.9102 14.7891 35.2135 13.985 34.7188 12.9434C34.2305 11.9017 33.9831 10.7005 33.9766 9.33984V8.53906C33.9766 7.15234 34.2207 5.92839 34.709 4.86719C35.2038 3.80599 35.8971 2.99544 36.7891 2.43555C37.6875 1.86914 38.7161 1.58594 39.875 1.58594C41.0339 1.58594 42.0592 1.86589 42.9512 2.42578C43.8496 2.97917 44.543 3.77995 45.0312 4.82812C45.5195 5.86979 45.7669 7.08398 45.7734 8.4707V9.26172ZM43.3027 8.51953C43.3027 6.94401 43.0033 5.73633 42.4043 4.89648C41.8118 4.05664 40.9688 3.63672 39.875 3.63672C38.8073 3.63672 37.9707 4.05664 37.3652 4.89648C36.7663 5.72982 36.4603 6.91146 36.4473 8.44141V9.26172C36.4473 10.8242 36.75 12.0319 37.3555 12.8848C37.9674 13.7376 38.8138 14.1641 39.8945 14.1641C40.9883 14.1641 41.8281 13.7474 42.4141 12.9141C43.0065 12.0807 43.3027 10.8633 43.3027 9.26172V8.51953Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M60.668 3.77344H56.2344V16H53.7832V3.77344H49.3887V1.78125H60.668V3.77344Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M72.3301 12.6895H66.8223L65.6699 16H63.1016L68.4727 1.78125H70.6895L76.0703 16H73.4922L72.3301 12.6895ZM67.5156 10.6973H71.6367L69.5762 4.79883L67.5156 10.6973Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M89.793 3.77344H85.3594V16H82.9082V3.77344H78.5137V1.78125H89.793V3.77344Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M97.2754 16H94.8145V1.78125H97.2754V16Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M114.66 9.26172C114.66 10.6549 114.419 11.8789 113.938 12.9336C113.456 13.9818 112.766 14.7891 111.867 15.3555C110.975 15.9154 109.947 16.1953 108.781 16.1953C107.629 16.1953 106.6 15.9154 105.695 15.3555C104.797 14.7891 104.1 13.985 103.605 12.9434C103.117 11.9017 102.87 10.7005 102.863 9.33984V8.53906C102.863 7.15234 103.107 5.92839 103.596 4.86719C104.09 3.80599 104.784 2.99544 105.676 2.43555C106.574 1.86914 107.603 1.58594 108.762 1.58594C109.921 1.58594 110.946 1.86589 111.838 2.42578C112.736 2.97917 113.43 3.77995 113.918 4.82812C114.406 5.86979 114.654 7.08398 114.66 8.4707V9.26172ZM112.189 8.51953C112.189 6.94401 111.89 5.73633 111.291 4.89648C110.699 4.05664 109.855 3.63672 108.762 3.63672C107.694 3.63672 106.857 4.05664 106.252 4.89648C105.653 5.72982 105.347 6.91146 105.334 8.44141V9.26172C105.334 10.8242 105.637 12.0319 106.242 12.8848C106.854 13.7376 107.701 14.1641 108.781 14.1641C109.875 14.1641 110.715 13.7474 111.301 12.9141C111.893 12.0807 112.189 10.8633 112.189 9.26172V8.51953Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M131.4 16H128.93L122.592 5.91211V16H120.121V1.78125H122.592L128.949 11.9082V1.78125H131.4V16Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
        </svg>
      </Logo>
      <Content>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email">Email</Input>
          <Input name="password" type="password">
            Senha
          </Input>
          <Button
            type="submit"
            onClick={() => setBtnClicked(true)}
            isClicked={btnClicked}
          >
            Logon
            <span>
              <svg
                width="333"
                height="174"
                viewBox="0 0 333 174"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="172" cy="151" r="23" fill="black" />
                <circle cx="315.5" cy="156.5" r="17.5" fill="black" />
                <line
                  x1="321.876"
                  y1="155.886"
                  x2="171.904"
                  y2="152.999"
                  stroke="black"
                  strokeWidth="10"
                />
                <line
                  x1="172.974"
                  y1="99.4899"
                  x2="176.974"
                  y2="138.49"
                  stroke="black"
                  strokeWidth="10"
                />
                <line
                  x1="311.246"
                  y1="93.9939"
                  x2="169.246"
                  y2="100.994"
                  stroke="black"
                  strokeWidth="10"
                />
                <line
                  x1="173.337"
                  y1="103.689"
                  x2="140.294"
                  y2="11.6901"
                  stroke="black"
                  strokeWidth="10"
                />
                <line
                  x1="306.139"
                  y1="96.8287"
                  x2="326.139"
                  y2="13.8287"
                  stroke="black"
                  strokeWidth="10"
                />
                <line
                  x1="322.826"
                  y1="20.498"
                  x2="109.825"
                  y2="15.5609"
                  stroke="black"
                  strokeWidth="15"
                />
                <ellipse cx="111" cy="11.5" rx="12" ry="11.5" fill="black" />
                <rect
                  className="top"
                  x="11"
                  y="37"
                  width="99"
                  height="12"
                  rx="6"
                  fill="black"
                />
                <rect
                  className="mid"
                  x="31"
                  y="61"
                  width="99"
                  height="12"
                  rx="6"
                  fill="black"
                />
                <rect
                  className="bot"
                  y="85"
                  width="99"
                  height="12"
                  rx="6"
                  fill="black"
                />
                <rect x="170" y="18" width="138" height="79" fill="black" />
                <path
                  d="M155.5 18.4999L179 82"
                  stroke="black"
                  strokeWidth="30"
                />
                <line
                  x1="314.8"
                  y1="18.8779"
                  x2="291.8"
                  y2="72.8779"
                  stroke="black"
                  strokeWidth="30"
                />
              </svg>
            </span>
          </Button>

          <Link to="signup">Inscrever-se</Link>
        </Form>
      </Content>
    </Container>
  );
};

export default Logon;
