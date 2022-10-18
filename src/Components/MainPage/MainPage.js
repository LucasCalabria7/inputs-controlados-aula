import React from 'react'
import {MainContainer, Form, Input} from './styles'
import {useState} from 'react'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  function onChangeName (event) {
    setNome(event.target.value)
  }

  function onChangeIdade (event) {
    setIdade(event.target.value)
  }

  function onChangeEmail (event) {
    setEmail(event.target.value)
  }

function gravarDados () {
  let dadosUsuario = {
    nome: nome,
    idade: idade,
    email: email
  }
  console.log(dadosUsuario)
  setNome("")
  setIdade("")
  setEmail("")
}

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={onChangeName} type={"text"} value={nome} placeholder={"Nome"} />
        </label>
        <label>
          Idade:
          <Input onChange={onChangeIdade} type={"number"} value={idade} placeholder={"Idade"} />
        </label>
        <label>
          E-mail:
          <Input onChange={onChangeEmail} type={"email"} value={email} placeholder={"Email"} />
        </label>
      <button onClick={gravarDados} >Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage