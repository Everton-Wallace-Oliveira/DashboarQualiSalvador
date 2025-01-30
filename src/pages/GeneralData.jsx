/** @format */

import AppStats from '../components/Dashboard/AppStats'
import {
  BuildingOffice2Icon,
  MapIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import HeadedCard from '../components/Dashboard/HeadedCard'

export default function GeneralData() {

  return (
    <>
          <div>
            {/* STATS */}
            <div className='grid container md:grid-cols-1 lg:grid-cols-1'>
              <AppStats
                icon={<UsersIcon />}
                title={'População'}
                value={'habitantes'}
              />
            </div>

            <div className='w-full grid lg:grid-cols-2'>
              <div className='grid col-span-1 gap-4'>
                <h4>Sobre o bairro</h4>

                <div className='grid lg:grid-cols-2'>
                  <HeadedCard
                    icon={<UsersIcon height={72} />}
                    header='População'
                  >
                    <h2>2.584</h2>
                    <h6>habitantes</h6>
                  </HeadedCard>

                  <HeadedCard
                    icon={<MapIcon height={72} />}
                    title='Área'
                    >
                    <h2>2.584</h2>
                    <h6>km2</h6>

                  </HeadedCard>
                  <HeadedCard
                    icon={<BuildingOffice2Icon height={72} />}
                    header='Densidade Populacional'
                  >
                    2.584 habitantes / km2
                  </HeadedCard>

                  <HeadedCard header='Prefeitura-bairro'>
                    Barra-Pituba
                  </HeadedCard>
                </div>
              </div>
            </div>

          </div>
    </>
  )
}