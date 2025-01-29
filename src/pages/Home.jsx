/** @format */

import { useEffect, useState, useCallback } from 'react'

import Loading from '../components/Loading'
import dashboard01 from '../assets/dashboard01.jpg'
import dashboard02 from '../assets/dashboard02.png'
import dashboard03 from '../assets/dashboard03.jpg'
import Article from '../components/Article'

export default function Home() {
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
			<div className='content'>
				{isLoading ? (
					<Loading />
				) : (
					
						<Article author={'EAUFBA'}  title01={'Introdução ao Projeto'} content01={`Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae.	Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae. 							

							Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae. 										Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae.
							
							Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae. 										Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae. 										Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae. 										Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae. 										Lorem ipsum dolor sit amet consectetur adipisicing elit.
							
							Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit adipisci ullam fugiat quas.Eligendi, optio aspernatur nostrum consequatur illum in rerum mollitia nesciunt quis sit ex libero enim unde vitae.`} image01={dashboard01} image02={dashboard02}  image03={dashboard03}badge01={'UFBA'} badge02={'GruMAP'} badge03={'QualiSalvador'} />
				)}
			</div>
		</>
	)
}
