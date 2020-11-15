import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css'


import TeacherItem , {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Inputs';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList(){
  const [teachers , setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeacher(event : FormEvent) {
    event.preventDefault();

   const response = await api.get('classes', {
      params : {
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
  }

        return (
           <div id="page-teacher-list" className = 'container'>
              <PageHeader title ='Estes são os proffys disponíveis'>
                <form id ='search-teachers' onSubmit ={searchTeacher}>

                    <Select
                          name="subject" 
                          label = 'Matéria'
                          value ={subject}
                          onChange ={e => { setSubject(e.target.value)}}
                          options = {[
                            {value : "Artes" , label : "Artes"},
                            {value : "Matemática" , label : "Matemática"},
                            {value : "Ciência" , label : "Ciência"},
                            {value : "Biológia" , label : "Biológia"},
                       ]} 
                    />
                    <Select
                          name="week_day" 
                          label = 'Dia da semana'
                          value ={week_day}
                          onChange ={e => { setWeekDay(e.target.value)}}
                          options = {[
                            {value : "0" , label : "Domingo"},
                            {value : "1" , label : "Segunda-feira"},
                            {value : "2" , label : "Terça-feira"},
                            {value : "3" , label : "Quarta-feira"},
                            {value : "4" , label : "Quinta-feira"},
                            {value : "5" , label : "Sexta-feita"},
                            {value : "6" , label : "Sábado"},
                       ]} 
                    />

                  <Input
                   name = 'time'
                   label = 'Hora'
                   type ='time'
                   value ={time}
                   onChange ={e => { 
                     setTime(e.target.value)}}
                     />
                     <button type ='submit'>
                       Buscar
                     </button>
                </form>
              </PageHeader>
              <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem  teacher = {teacher} />;
                })}
              </main>
           </div>
        )
}
export default TeacherList;