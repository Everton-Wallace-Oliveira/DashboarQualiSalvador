/** @format */

import { useEffect, useState, useCallback } from 'react'
import MuiPieChart from '../components/charts/MuiPieChart'
import Loading from '../components/Loading'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import DashCard from '../components/DashCard'
import {
	BuildingOffice2Icon,
	MapIcon,
	UsersIcon,
} from '@heroicons/react/24/outline'

export default function GeneralData() {
	const [chartData, setChartData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	const fetchData = useCallback(async () => {
		try {
			setIsLoading(true)
			const data = {
				genero: [
					{ id: 'Masculino', label: 'Masculino', value: 225 },
					{ id: 'Feminino', label: 'Feminino', value: 115 },
				],
				// inscritosPorMes: [
				// 	{ x: 'Jan', y: 50 },
				// 	{ x: 'Fev', y: 75 },
				// 	{ x: 'Mar', y: 100 },
				// 	{ x: 'Abr', y: 125 },
				// ],
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
			<Typography
				variant='h1'
				className='py-4 text-8xl text-center leading-tight sm:leading-relaxed font-[900] text-red-500'
			>
				Panorama Geral{' '}
			</Typography>{' '}
			<div className='container mx-auto p-4'>
				{isLoading ? (
					<Loading />
				) : (
					<Grid
						container
						spacing={4}
					>
						<Grid
							container
							className='w-full grid lg:grid-cols-2'
						>
							<Grid className='grid col-span-1 gap-4'>
								<Typography
									variant='h2'
									className='w-full text-center text-2xl font-[700] text-orange-600'
								>
									Sobre o bairro
								</Typography>

								<Grid
									container
									spacing={2}
									className='grid lg:grid-cols-2'
								>
									<DashCard
										icon={<UsersIcon height={72} />}
										title='População'
										main='2.584'
										detail='habitantes'
									/>

									<DashCard
										icon={<MapIcon height={72} />}
										title='Área'
										main='2.584'
										detail='km2'
									/>
									<DashCard
										icon={
											<BuildingOffice2Icon height={72} />
										}
										title='Densidade Populacional'
										main='2.584'
										detail='habitantes / km2'
									/>

									<DashCard
										title='Prefeitura-bairro'
										other='Barra-Pituba'
									/>
								</Grid>
							</Grid>
							<Grid className='grid col-span-1 grid-cols-1 w-full md:h-full gap-4'>
								<Typography
									variant='h2'
									className='w-full text-center text-2xl font-[700] text-orange-600'
								>
									Panorama demográfico
								</Typography>

								<Grid
									container
									spacing={2}
									className='col-span-1 flex flex-col md:h-full lg:justify-between '
								>
									<DashCard
										title='%dd Genero'
										main={<MuiPieChart data={chartData} />}
									/>

									<DashCard
										icon={<MapIcon height={72} />}
										title='% Etnia'
										//ddd
									/>
									<DashCard
										icon={
											<BuildingOffice2Icon height={72} />
										}
										title='Faixa Etária'
									/>
									{/* <DashCard
										icon={
											<BuildingOffice2Icon height={72} />
										}
										title='Escolaridade'
									/>*/}
								</Grid>
							</Grid>
						</Grid>

						<Typography
							variant='h2'
							className='w-full text-center text-2xl font-[700] text-orange-600'
						>
							Trabalho & Renda
						</Typography>

						<Grid
							container
							spacing={2}
							className='grid lg:grid-cols-3 lg:w-full'
						>
							<DashCard
								icon={<UsersIcon height={72} />}
								title='Renda Familiar'
								//ddd
							/>

							<DashCard
								icon={<MapIcon height={72} />}
								title='Fonte de Renda'
								//ddd
							/>
							<DashCard
								icon={<BuildingOffice2Icon height={72} />}
								title='Vinculo Trabalhista'
							/>
						</Grid>

						<Box className='h-10'></Box>
					</Grid>
				)}
			</div>
		</>
	)
}
