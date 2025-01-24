/** @format */

import { useEffect, useState, useCallback } from 'react'

import Loading from '../components/Loading'
import Grid from '@mui/material/Grid2'
import DashCard from '../components/DashCard'
import {
    AcademicCapIcon,
	BriefcaseIcon,
	BuildingOffice2Icon,
	HeartIcon,
	MapIcon,
	UsersIcon,
} from '@heroicons/react/24/outline'
import { Typography } from '@mui/material'

export default function Home() {
	// eslint-disable-next-line no-unused-vars
    const [chartData, setChartData] = useState({})
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
			<Typography
				variant='h1'
				className='py-4 text-8xl text-center leading-tight font-[900] text-red-500'
			>
				Alto das Pombas
			</Typography>
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
							className='w-full text-center text-2xl font-[700] text-orange-600'
						>
							Introdução ao projeto
						</Typography>

                            <Typography variant='p' className='paragraph'>
                                
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nihil rem adipisci aliquid mollitia perspiciatis impedit libero, nesciunt eos, similique exercitationem assumenda placeat architecto quam ea tempore sunt fuga ex!
                                <br/>
                                <br/>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo minus non vero, perferendis dolore blanditiis et voluptate deserunt dolorem porro repudiandae exercitationem. Aperiam veniam omnis, voluptatibus ipsa ex quae quod!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo minus non vero, perferendis dolore blanditiis et voluptate deserunt dolorem porro repudiandae exercitationem. Aperiam veniam omnis, voluptatibus ipsa ex quae quod!
                                <br/>
                                <br/>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo minus non vero, perferendis dolore blanditiis et voluptate deserunt dolorem porro repudiandae exercitationem. Aperiam veniam omnis, voluptatibus ipsa ex quae quod!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo minus non vero, perferendis dolore blanditiis et voluptate deserunt dolorem porro repudiandae exercitationem. Aperiam veniam omnis, voluptatibus ipsa ex quae quod!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo minus non vero, perferendis dolore blanditiis et voluptate deserunt dolorem porro repudiandae exercitationem. Aperiam veniam omnis, voluptatibus ipsa ex quae quod!
                        </Typography>

						<Grid className='grid lg:grid-cols-4=1 lg:w-full gap-4'>
						<Typography
							variant='h2'
								className='w-full text-center text-2xl font-[700] text-orange-600'
						>
								Navegue pelo conteúdo
						</Typography>

						<Grid
							container
							spacing={2}
								className='grid lg:grid-cols-3 lg:w-full'
						>
							<DashCard
									icon={<AcademicCapIcon height={72} />}
									title='Dados por Gênero'
									main='Educação'
							/>

							<DashCard
									icon={<BriefcaseIcon height={72} />}
									title='Dados por Etnia'
									main='Trabalho'
							/>
							<DashCard
									icon={<HeartIcon height={72} />}
									title='Dados por Gênero'
									main='Saúde e Segurança'
								/>
							<DashCard
									icon={<AcademicCapIcon height={72} />}
									title='Dados por Etnia'
									main='Educação'
							/>
							<DashCard
									icon={<BriefcaseIcon height={72} />}
									title='Dados por Etnia'
									main='Trabalho'
							/>
							<DashCard
									icon={<HeartIcon height={72} />}
									title='Dados por Etnia'
									main='Saúde e Segurança'
							/>
                            </Grid>
						</Grid>
					</Grid>
				)}
			</div>
		</>
	)
}
