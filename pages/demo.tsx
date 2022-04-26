import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Color,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import * as Utils from '@/lib/utils';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const DATA_COUNT = 8;
const labels = [];

Utils.srand(8);

for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push('' + i);
}

const conf = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Line 1',
                backgroundColor: Utils.color(0),
                borderColor: Utils.color(0),
                data: Utils.numbers({
                    count: DATA_COUNT,
                    min: 0,
                    max: 100,
                }),
                datalabels: {
                    align: 'start' as const,
                    anchor: 'start' as const,
                },
            },
            {
                label: 'Line 2',
                backgroundColor: Utils.color(1),
                borderColor: Utils.color(1),
                data: Utils.numbers({
                    count: DATA_COUNT,
                    min: 0,
                    max: 100,
                }),
            },
            {
                label: 'Line 3',
                backgroundColor: Utils.color(2),
                borderColor: Utils.color(2),
                data: Utils.numbers({
                    count: DATA_COUNT,
                    min: 0,
                    max: 100,
                }),
                datalabels: {
                    align: 'end' as const,
                    anchor: 'end' as const,
                },
            },
        ],
    },
    options: {
        plugins: {
            datalabels: {
                backgroundColor: function (context: Context) {
                    return context.dataset.backgroundColor as Color;
                },
                borderRadius: 4,
                color: 'white',
                font: {
                    weight: 'bold' as const,
                },
                formatter: Math.round,
                padding: 6,
            },
        },

        // Core options
        maintainAspectRatio: false,
        responsive: true,
        // aspectRatio: 5 / 3,
        // layout: {
        //     padding: {
        //         top: 32,
        //         right: 16,
        //         bottom: 16,
        //         left: 8,
        //     },
        // },
        elements: {
            line: {
                fill: false,
                tension: 0.4,
            },
        },
        scales: {
            y: {
                stacked: true,
            },
        },
    },
};

export default function Demo() {
    return <Line data={conf.data} options={conf.options} />;
}
