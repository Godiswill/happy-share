// import Column from '@ant-design/plots/es/components/column';
// import Line from '@ant-design/plots/es/components/line';
// import Pie from '@ant-design/plots/es/components/pie';
//
// const colConf = {
//     xAxis: {
//         label: {
//             autoHide: true,
//             // formatter(v) {
//             //     return `第 ${v} 周`;
//             // },
//             autoRotate: false,
//         },
//     },
// };
// const lineConf = {
//     smooth: true,
// };
// const pieConf = {
//     appendPadding: 10,
//     radius: 0.75,
//     label: {
//         type: 'spider',
//         labelHeight: 28,
//         content: '{name}\n{percentage}',
//     },
//     interactions: [
//         {
//             type: 'element-selected',
//         },
//         {
//             type: 'element-active',
//         },
//     ],
// };
//
// export default function Charts({
//     data,
//     type,
//     labelKey,
//     valKey,
// }: {
//     data: Record<string, any>[];
//     type: 'line' | 'pie' | 'col';
//     labelKey: string;
//     valKey: string;
// }) {
//     switch (type) {
//         case 'col':
//             return <Column {...colConf} data={data} xField={labelKey} yField={valKey} />;
//         case 'line':
//             return <Line {...lineConf} data={data} xField={labelKey} yField={valKey} />;
//         case 'pie':
//             return <Pie {...pieConf} data={data} colorField={labelKey} angleField={valKey} />;
//     }
// }
export {};
