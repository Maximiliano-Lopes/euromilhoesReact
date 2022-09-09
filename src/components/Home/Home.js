import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { Navigate, Link } from 'react-router-dom';
import { useState } from "react"


class Home extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      primeironumero: "",
      segundonumero: "",
      terceironumero: "",
      quartonumero: "",
      quintonumero: "",
      sextonumero: "",
      setimonumero: "",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event, key) {
    let temp = {}
    temp[key] = event.target.value
    this.setState(temp);
  }

  onSubmit(event) {
    this.setState({ submitted: true })
    event.preventDefault()

  }



  render() {
    let { primeironumero, segundonumero, terceironumero, quartonumero, quintonumero, sextonumero, setimonumero, submitted } = this.state;
    return (
      <body id="bodyprincipal">
        <div className="Home">
          <p id="tituloPagina">Euro Milhões</p>
          <form id="formDeJogo" onSubmit={(event) => this.onSubmit(event)}>
            <div id="areaDeEscolhaNormal">
              <table id="table-normais">
                <tbody>
                  <tr>
                    <td id="titulo-apostas"><p>Números Normais</p><p>Escolha cinco números entre 1 e 50.</p></td>
                  </tr>
                  <tr>
                    <td className="espaco">
                      1º
                      <input type="number" placeholder="1" id="primeironumero" value={primeironumero} onChange={(event) => this.handleChange(event, "primeironumero")} min="1" max="50" />
                    </td>
                    <td className="espaco">
                      2º
                      <input type="number" placeholder="1" id="segundonumero" value={segundonumero} onChange={(event) => this.handleChange(event, "segundonumero")} min="1" max="50" />
                    </td>
                    <td className="espaco">
                      3º
                      <input type="number" placeholder="1" id="terceironumero" value={terceironumero} onChange={(event) => this.handleChange(event, "terceironumero")} min="1" max="50" />
                    </td>
                    <td className="espaco">
                      4º
                      <input type="number" placeholder="1" id="quartonumero" value={quartonumero} onChange={(event) => this.handleChange(event, "quartonumero")} min="1" max="50" />
                    </td>
                    <td className="espaco">
                      5º
                      <input type="number" placeholder="1" id="quintonumero" value={quintonumero} onChange={(event) => this.handleChange(event, "quintonumero")} min="1" max="50" />
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div id="areaDeEscolhaEstrela">

              <table id="table-estrela">
                <tbody>
                  <tr>
                    <td  id="thSpace"> <p>Números Estrela</p><p>Escolha dois números entre 1 e 12.</p></td>
                  </tr>
                  <tr id="opcoesEstrela">
                    <td>
                      6º
                      <input type="number" placeholder="1" id="sextonumero" value={sextonumero} onChange={(event) => this.handleChange(event, "sextonumero")} min="1" max="12" />
                    </td>
                    <td>
                      7º
                      <input type="number" placeholder="1" id="setimonumero" value={setimonumero} onChange={(event) => this.handleChange(event, "setimonumero")} min="1" max="12" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button id='btnSubmit'>Submeter Aposta</button>
          </form>
          {submitted && (
            <Navigate to="/resultado" state={this.state} />)
          }
        </div>
      </body>
    )

  }
}
export default Home