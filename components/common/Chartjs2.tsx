import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { NAMED_COLORS, CHART_COLORS, COLORS } from '@/lib/utils';

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
);

export const barOpt = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        // title: {
        //     display: true,
        //     text: 'Chart.js Bar Chart',
        // },
    },
};

export const lineOpt = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};

export const pieOpt = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'right' as const,
        },
    },
};

export default function RChart2({
    title,
    data: oData,
    type,
    indexAxis,
    xAxisKey,
    yAxisKey,
    chartContainerStyle,
}: {
    title: string;
    data: Record<string, any>[];
    type: 'line' | 'pie' | 'col';
    indexAxis?: 'x' | 'y';
    xAxisKey: string;
    yAxisKey: string;
    chartContainerStyle?: React.CSSProperties;
    height?: number;
}) {
    const labels = oData.map((it) => it[xAxisKey]);
    const data = oData.map((it) => it[yAxisKey]);
    const render = () => {
        switch (type) {
            case 'col':
                return (
                    <Bar
                        options={{ ...barOpt, indexAxis }}
                        data={{
                            labels,
                            datasets: [
                                {
                                    data,
                                    // borderColor: COLORS[0],
                                    backgroundColor: CHART_COLORS.blue,
                                    // borderWidth: 1,
                                },
                            ],
                        }}
                    />
                );
            case 'line':
                return (
                    <Line
                        options={lineOpt}
                        data={{
                            labels,
                            datasets: [
                                {
                                    data,
                                    borderColor: CHART_COLORS.blue,
                                    backgroundColor: COLORS[0],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                    />
                );
            case 'pie':
                return (
                    <Pie
                        options={pieOpt}
                        data={{
                            labels,
                            datasets: [
                                {
                                    data,
                                    backgroundColor: NAMED_COLORS,
                                },
                            ],
                        }}
                    />
                );
        }
    };
    return (
        <div className="bg-white rounded shadow p-10 pt-4 m-4">
            <h3 className="mb-4">{title}</h3>
            <div className="h-96" style={chartContainerStyle}>
                {render()}
            </div>
        </div>
    );
}
