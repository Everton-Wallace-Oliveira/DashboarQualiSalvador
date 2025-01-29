/** @format */

import { useEffect, useState, useCallback } from 'react'
import PieChart from '../components/charts/PieChart'
import Loading from '../components/Loading'
import Divider from '../components/Divider'
import Grid from '@mui/material/Grid2'
import HeadedCard from '../components/Dashboard/HeadedCard'

export default function DataByGender() {
	const [chartData, setChartData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	const fetchData = useCallback(async () => {
		try {
			setIsLoading(true)
			const data = {
				genero: [
					{ id: 'Masculino', label: 'Masculino', value: 60 },
					{ id: 'Feminino', label: 'Feminino', value: 40 },
				],
				inscritosPorMes: [
					{ x: 'Jan', y: 50 },
					{ x: 'Fev', y: 75 },
					{ x: 'Mar', y: 100 },
					{ x: 'Abr', y: 125 },
				],
			}
			setChartData(data)
		} catch (error) {
			console.error('Erro ao carregar dados:', error)
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return (
		<>
			<div className='content w-screen'>
				{isLoading ? (
					<Loading />
				) : (
					<Grid className='flex flex-col gap-8 pb-20'>
						<Divider>
							<h2 className='w-max'>Geral</h2>
						</Divider>

						<Grid className='grid grid-cols-5 gap-4'>
							<HeadedCard
								header={'Responsável Familia'}
								className='col-span-2'
							>
								pizza
							</HeadedCard>
							<HeadedCard
								header={'Renda do Responsável Familia'}
								className='col-span-3'
							>
								barra vertical
							</HeadedCard>
						</Grid>

						<Divider>
							<h2>Educação e Trabalho</h2>
						</Divider>
						<HeadedCard header={'Escolaridade'}>
							<div className='grid grid-cols-2 w-full'>
								{chartData?.genero && (
									<PieChart
										data={chartData.genero}
										height={300}
									/>
								)}
							</div>
						</HeadedCard>

						<Grid className='grid grid-cols-5 gap-4'>
							<HeadedCard
								header={'Trabalho (setor('}
								className='grid col-span-3 grid-cols-1'
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
								className='grid col-span-2 grid-cols-1'
							>
								barra composta horizontal
								{/* <BarChart
									series={chartData.genero}
								data={chartData.genero}
								height={300}
							/> */}
							</HeadedCard>
						</Grid>

						<div className='grid grid-cols-5 gap-4'>
							<HeadedCard
								header={'Fonte de renda'}
								className='grid col-span-2'
							>
								barra simples horizontal
							</HeadedCard>
							<HeadedCard
								header={'Faixa de renda'}
								className='col-span-3'
							>
								barra simples horizontal
							</HeadedCard>
						</div>

						<Divider>
							<h2>Saúde e Segurança</h2>
						</Divider>
						<Grid className='grid grid-cols-5 gap-4'>
							<HeadedCard
								header={'Doença cronica na familia'}
								className='col-span-3'
							>
								barra horizontal
							</HeadedCard>
							<HeadedCard
								header={'EBIA'}
								className='col-span-2'
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
						</Grid>
					</Grid>
				)}
			</div>
		</>
	)
}
