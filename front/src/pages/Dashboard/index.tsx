import React, { useRef, useCallback, useState, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { Container } from './styles'
import api from '../../services/api';

interface NewFormData {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

const Dashboard: React.FC = () => {
  const [showDetails, setShowDetails] = useState<NewFormData[]>([]);

  useEffect(() => {
    api.get('/events').then(m =>  {

      setShowDetails(m.data )

    })
  }, [])

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: NewFormData) => {
if(data.diasemana == '' || data.horario == ''|| data.local == ''|| data.nomeevento == ''){
  return window.alert('Você deve preencher todos os campos!')
}



      formRef.current?.reset()
     await api.post('events', data)

   api.get('/events').then( m =>  {

       setShowDetails(m.data)


    })

  }, []);


  return (
    <Container>
      <div>
      <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name='nomeevento' placeholder='Nome do Evento' />
      <Input name='local' placeholder='Local do Evento' />
      <Input name='diasemana' placeholder='Dia da Semana' />
      <Input name="horario" placeholder="Horário" />
      <button type="submit">Salvar</button>
    </Form>
</div>
     {showDetails &&(


      <ul>
      {showDetails.map((info, index) => (


        <>

        <li key={index.toString()}>

        <b>Nome do Evento:</b> {info.nomeevento}

        </li>
        <li>

        <b>Local:</b>{info.local}

          </li>
          <li>

          <b>Dia da Semana:</b> {info.diasemana}

          </li>
          <li>

          <b>Horario:</b> {info.horario}

          </li>
          <li>

          <b>Likes:</b> {info.like == null ? '0' : info.like}

          </li>
          <li>

          <b>Deslikes:</b> {info.dislike == null ? '0' : info.dislike}

          </li>

          <button onClick={(async () => {
            await api.post(`/events/like/${info.id}`)
             api.get('/events').then( m =>  {
              setShowDetails(m.data)
           })
          })}>LIKE</button>

          <button onClick={(async () => {
            await api.post(`/events/dislike/${info.id}`)
             api.get('/events').then( m =>  {
              setShowDetails(m.data)
           })
          })}>DESLIKE</button>

           <button onClick={(async () => {
           await api.delete(`/events/${info.id}`)
           api.get('/events').then( m =>  {
               setShowDetails(m.data)
            })
          })}>DELETE</button>

          <div className='blank'></div>

          </>

      ))}
    </ul>

)
    }
    </Container>
  )
}

export default Dashboard
