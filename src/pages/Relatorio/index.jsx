import React, { useState, useEffect } from 'react';
import { getValorTotalVendido } from '../../services/api';

export function Relatorio() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getValorTotalVendido();
        setDados(response.data); // Define o valor retornado pela requisição no estado
        console.log(response.data); // Exibe os dados recebidos no console
      } catch (error) {
        console.error('Erro ao buscar o valor total vendido:', error);
      }
    };
    fetchData();
  }, []);

  const TabelaDados = ({ dados }) => {
    if (!Array.isArray(dados)) {
      return <p>Dados inválidos</p>;
    }
    return (
      <>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
      <caption style={{ padding:'30px', fontSize:'40px'}}>Relatorio</caption>
      <thead>
        <tr >          
          <th style={{ backgroundColor: '#f2f2f2',textAlign:'center', border: '1px solid #000000', padding: '8px' }}>Nome</th>
          <th style={{ backgroundColor: '#f2f2f2', textAlign:'center',border: '1px solid #000000', padding: '8px' }}>Preço</th>
          <th style={{ backgroundColor: '#f2f2f2', textAlign:'center',border: '1px solid #000000', padding: '8px' }}>Quantidade</th>
          <th style={{ backgroundColor: '#f2f2f2', textAlign:'center',border: '1px solid #000000', padding: '8px' }}>Total</th>
          <th style={{ backgroundColor: '#f2f2f2', textAlign:'center',border: '1px solid #000000', padding: '8px' }}>Data</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            {item.map((valor, i) => (
              <td key={i} style={{ border: '1px solid #363636', padding: '8px', borderBottom: index === dados.length ? 'none' : '1px solid #363636',textAlign:'center' }}>{valor}</td>
            ))}
          </tr>
        ))}        
      </tbody>
    </table>
    </>
    );
  };

  return (
       
        <TabelaDados dados={dados} />
   
  );
}
