/** @format */

import { useEffect, useState, useCallback } from 'react'
import Loading from '../components/Loading'
import MainTable from '../components/MainTable'


export default function FullTable() {
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
      <div className='content'>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <MainTable />
          </div>
        )}
      </div>
    </>
  )
}