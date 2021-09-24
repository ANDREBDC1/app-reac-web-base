import React, {useCallback, useRef} from 'react';
import  {AiFillLock} from 'react-icons/ai'
import {Form} from '@unform/web'
import  * as Yup from 'yup'
import { FormHandles } from '@unform/core';
import  { useLocation } from 'react-router-dom'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErros'
import { useToast } from '../../Contexts/ToastContext'
import api from '../../services/api';

interface DataResetPassword {
    [key : string] : string | number
}

const ResetPassword: React.FC = () => {

    const formRef = useRef<FormHandles>(null)

    const { addToast } = useToast()

    const location = useLocation()

    const handleSubmit = useCallback(async (data : DataResetPassword) => {
        try{
            formRef.current?.setErrors({});
            const  schema = Yup.object().shape({
                password: Yup.string().required('Senha obrigatória'),
                password_confirmation: Yup.string().oneOf([Yup.ref('password'), undefined],
                'Senha não conrespode')
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            const {password} = data;
            const token = location.search.replace('?token=', '');
            if(!token){
                throw new Error()
            }


            await api.post('/users/resetpassword', {
                password,
                token
            })

            addToast({
                title: 'Senha alterada com sucesso!',
                type: 'success',
                duration: 5000
              })

        }catch(err) {

            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return
            }

            addToast({
                title: 'Erro resetar senha',
                type: 'error',
                description: 'Ocorreu um erro ao resetar sua senha, tente novamente.'
              })

        }
    }, [addToast, location])
    return (
        <Container>
            <Content>
                <h2>Resetar Senha</h2>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input
                      name="password"
                      type="password"
                      placeholder="nova senha"
                      icon={AiFillLock}
                    />
                    <Input
                      name="password_confirmation"
                      type="password"
                      placeholder="Confimação da senha"
                      icon={AiFillLock}
                    />
                    <Button type="submit">Resetar Senha</Button>
                </Form>
            </Content>
        </Container>
    );
};

export default ResetPassword;
