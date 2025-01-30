/** @format */

import { useEffect, useState, useCallback } from 'react'
import Loading from '../components/Loading'
import Divider from '../components/Divider'
import HeadedCard from '../components/Dashboard/HeadedCard'

export default function DataByGender() {
  // const [chartData, setChartData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // const fetchData = useCallback(async () => {
  // 	try {
  // 		setIsLoading(true)
  // 		const data = {
  // 			genero: [
  // 				{ id: 'Masculino', label: 'Masculino', value: 60 },
  // 				{ id: 'Feminino', label: 'Feminino', value: 40 },
  // 			],
  // 			inscritosPorMes: [
  // 				{ x: 'Jan', y: 50 },
  // 				{ x: 'Fev', y: 75 },
  // 				{ x: 'Mar', y: 100 },
  // 				{ x: 'Abr', y: 125 },
  // 			],
  // 		}
  // 		setChartData(data)
  // 	} catch (error) {
  // 		console.error('Erro ao carregar dados:', error)
  // 	} finally {
  // 		setIsLoading(false)
  // 	}
  // }, [])

  // useEffect(() => {
    // fetchData()
  // }, [fetchData])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='content grid grid-cols-1 gap-8'>
          <Divider>
            <h2>Geral</h2>
          </Divider>

          <div className='grid gap-4 lg:grid-cols-5'>
            <HeadedCard
              header={'Responsável Familia'}
              className='lg:col-span-2'
            >
              pizza
              pizza
            </HeadedCard>
            <HeadedCard
              header={'Renda do Responsável Familia'}
              className='lg:col-span-3'
            >
              barra vertical
            </HeadedCard>
          </div>

          <Divider>
            <h2>Educação e Trabalho</h2>
          </Divider>
          <HeadedCard header={'Escolaridade'}>
            <div className='grid gap-4 lg:grid-cols-2'>
              {chartData?.genero && (
                <PieChart
                  data={chartData.genero}
                  height={300}
                />
              )}
            </div>
          </HeadedCard>

          <div className='grid gap-4 lg:grid-cols-5'>
            <HeadedCard
              header={'Trabalho (setor('}
              className='grid gap-4 lg:col-span-3'
            >
              barra composta horizontal
              {/* <BarChart
                  series={chartData.genero}
                data={chartData.genero}
                height={300}
              /> */}
            </HeadedCard>
            <HeadedCard
              header={'Trabalho (vínculo)'}
              className='grid gap-4 lg:col-span-2 '
            >
              barra composta horizontal
              {/* <BarChart
                  series={chartData.genero}
                data={chartData.genero}
                height={300}
              /> */}
            </HeadedCard>
          </div>

          <div className='grid gap-4  lg:grid-cols-5'>
            <HeadedCard
              header={'Fonte de renda'}
              className='gap-4 col-span-2'
            >
              barra simples horizontal
            </HeadedCard>
            <HeadedCard
              header={'Faixa de renda'}
              className='gap-4 lg:col-span-3'
            >
              barra simples horizontal
            </HeadedCard>
          </div>

          <Divider>
            <h2>Saúde e Segurança</h2>
          </Divider>
          <div className='grid gap-4 lg:grid-cols-5 '>
            <HeadedCard
              header={'Doença cronica na familia'}
              className='gap-4 lg:col-span-3'
            >
              barra horizontal
            </HeadedCard>
            <HeadedCard
              header={'EBIA'}
              className='gap-4 lg:col-span-2'
            >
              barra vertical
            </HeadedCard>
            <HeadedCard
              header={'Segurança'}
              className='col-span-2'
            >
              pizza
            </HeadedCard>
            <HeadedCard
              header={'Solução segurança'}
              className='col-span-3'
            >
              barra vertical
            </HeadedCard>
          </div>

          <div className='h-10'></div>
        </div>
      )}
    </>
  )
}