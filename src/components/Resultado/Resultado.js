import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom"
import './Resultado.css';

function Resultado(props) {

    const { state } = useLocation()

    const { primeironumero, segundonumero, terceironumero, quartonumero, quintonumero, sextonumero, setimonumero } = state

    function aleatorioInteiro(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }



    const arrayNormais = [primeironumero, segundonumero, terceironumero, quartonumero, quintonumero]
    const arrayEstrelas = [sextonumero, setimonumero]
    var seusAcertosNormais = 0
    var seusAcertosEstrelas = 0
    var arraySorteadosNormais = [sorteado1, sorteado2, sorteado3, sorteado4, sorteado5]
    var arraySorteadosEstrelas = [sorteado6, sorteado7]

    var sorteado1 = aleatorioInteiro(1, 50)
    var sorteado2 = aleatorioInteiro(1, 50)
    var sorteado3 = aleatorioInteiro(1, 50)
    var sorteado4 = aleatorioInteiro(1, 50)
    var sorteado5 = aleatorioInteiro(1, 50)
    var sorteado6 = aleatorioInteiro(1, 12)
    var sorteado7 = aleatorioInteiro(1, 12)


    function SomarPonto() {

        arrayNormais.forEach((num) => {
            switch (parseInt(num)) {
                case num = sorteado1:
                    ++seusAcertosNormais
                    break
                case num = sorteado2:
                    ++seusAcertosNormais
                    break
                case num = sorteado3:
                    ++seusAcertosNormais
                    break
                case num = sorteado4:
                    ++seusAcertosNormais
                    break
                case num = sorteado5:
                    ++seusAcertosNormais
                    break
                default:
                    console.log("ERRO")
            }});

        arrayEstrelas.forEach((estrelas) => {
            switch (parseInt(estrelas)) {
                case estrelas = sorteado6:
                    ++seusAcertosEstrelas
                    break
                case estrelas = sorteado7:
                    ++seusAcertosEstrelas
                    break
                default:
                    console.log("ERRO")
            }});


    }

    if (1 == 1) {
        SomarPonto()
        console.log(seusAcertosNormais)
    }


    return (

        <div className="Resultado">
            <p id="titulo-segunda"> Resultado</p>

            <table id="tableResultados">
                <tbody>
                    <tr>
                        <td id="td-resultados">Números Normais Sorteados: </td>
                        <td><p id="campoResultado"> {sorteado1} | {sorteado2} | {sorteado3} | {sorteado4} | {sorteado5}</p></td>
                    </tr>
                    <tr>
                        <td id="td-apostadosDois">Números Normais Apostados: </td>
                        <td><p id="campoResultadoAposta"> {primeironumero} | {segundonumero} | {terceironumero} | {quartonumero} | {quintonumero} </p></td>
                    </tr>
                    <hr></hr>
                    <tr>
                        <td id="td-estrelassorteados">Números Estrelas Sorteados:</td>
                        <td><p id="campoResultadoEstrelas"></p>{sorteado6} | {sorteado7}</td>

                    </tr>
                    <tr>
                        <td id="td-estrelasapostados">Números Estrelas Apostados:</td>
                        <td><p id="campoResultadoEstrelasAposta">{sextonumero} | {setimonumero}</p></td>
                    </tr>
                </tbody>
            </table>
            <div id="AreaDePremios">
                <p id='TituloPremio'>Prêmios</p>
                <table id='TableDePremios'>
                    <tbody>
                        <tr>
                            <td className='Tabela'>Prêmio </td>
                            <td className='Tabela'>Acertos necessários </td>
                            <td className='Tabela'>Seus acertos </td>
                            <td className='Tabela'>Valor do prêmio</td>
                        </tr>
                        <tr>
                            <td>1º </td>
                            <td>5 & 2 </td>
                            <td>{seusAcertosNormais} & {seusAcertosEstrelas}</td>
                            <td>€130.000.000</td>
                        </tr>
                        <tr>
                            <td>2º </td>
                            <td>4 & 1 </td>
                            <td>{seusAcertosNormais} & {seusAcertosEstrelas} </td>
                            <td>€3.000.000</td>
                        </tr>
                        <tr>
                            <td>3º </td>
                            <td>3 & 0 </td>
                            <td>{seusAcertosNormais} & {seusAcertosEstrelas}</td>
                            <td>€63.000</td>
                        </tr>
                        <tr>
                            <td>4º </td>
                            <td>2 & 1 </td>
                            <td>{seusAcertosNormais} & {seusAcertosEstrelas}</td>
                            <td>€2.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <a id="btnVoltar" href="/">Voltar e tentar novamente</a>
        </div>
    )
};

export default Resultado;
