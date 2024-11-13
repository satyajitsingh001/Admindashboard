import React from 'react'
import Mainlayout from '../Layout/Mainlayout'
import Cards from '../components/cards/Cards'
import Chart from '../components/Chart/Chart'

const Home = () => {
    return (
        <Mainlayout>
            <div>
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="./">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </div>

                <div >
                    <Cards />
                </div>

                <div>
                    <Chart />
                </div>

            </div>

        </Mainlayout>
    )
}

export default Home