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
			Dados por
			<div className='container mx-auto p-4'>
				{isLoading ? (
					<Loading />
				) : (
					<Grid
						container
						spacing={4}
					>
						<Typography
							variant='h2'
							className='w-full text-center text-2xl font-[700] text-orange-800'
						>
							Sobre o bairro
						</Typography>

						<Grid
							container
							spacing={2}
							columns={{ xs: 1, sm: 2 }}
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
								icon={<BuildingOffice2Icon height={72} />}
								title='Densidade Populacional'
								main='2.584'
								detail='habitantes / km2'
							/>

							<DashCard
								title='Prefeitura-bairro'
								other='Barra-Pituba'
							/>
						</Grid>

						<Typography
							variant='h2'
							className='w-full text-center text-2xl font-[700] text-orange-800'
						>
							Panorama demográfico
						</Typography>

						<Grid
							container
							spacing={2}
							columns={{ xs: 1, sm: 2 }}
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
								icon={<BuildingOffice2Icon height={72} />}
								title='Faixa Etária'
							/>
						</Grid>

						<Typography
							variant='h2'
							className='w-full text-center text-2xl font-[700] text-orange-800'
						>
							Trabalho & Renda
						</Typography>

						<Grid
							container
							spacing={2}
							columns={{ xs: 1, sm: 2 }}
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
