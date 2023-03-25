import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
    Tooltip, Title, ArcElement
)


export function DoughnutChart() {
    const data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'rgb(200, 8, 8)',
                'rgb(3, 0, 154)',
                'rgb(25, 138, 5)'
            ]
        }],

        backgroundColor: [
            'rgb(200, 8, 8)',
            'rgb(3, 0, 154)',
            'rgb(25, 138, 5)'
        ],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };

    return (
        <>
            <Doughnut data={data}></Doughnut>
        </>
    );
}
