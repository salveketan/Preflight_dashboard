import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJs.register(
    Tooltip, Title, ArcElement,
    //  Legend
)


export function PieChart() {
    const data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'rgb(76, 171, 243)',
                'rgb(9, 6, 229)',
                'rgb(3, 8, 111)'
            ]
        }],

        backgroundColor: [
            'rgb(76, 171, 243)',
            'rgb(9, 6, 229)',
            'rgb(3, 8, 111)'
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
            <Pie data={data}></Pie>
        </>
    );
}
