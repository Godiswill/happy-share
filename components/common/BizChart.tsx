// import Chart from 'bizcharts/es/components/Chart';
// import Tooltip from 'bizcharts/es/components/Tooltip';
// import Interval from 'bizcharts/es/geometry/Interval';
// import Line from 'bizcharts/es/geometry/Line';
// import PieChart from 'bizcharts/es/plots/PieChart';
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
//             return (
//                 <Chart
//                     height={333}
//                     autoFit
//                     data={data}
//                     interactions={['active-region']}
//                     padding="auto"
//                 >
//                     <Interval position={`${labelKey}*${valKey}`} />
//                     <Tooltip shared />
//                 </Chart>
//             );
//         case 'line':
//             return (
//                 <Chart
//                     scale={{ value: { min: 0 } }}
//                     padding={[10, 20, 50, 40]}
//                     autoFit
//                     height={333}
//                     data={data}
//                 >
//                     <Line
//                         shape="smooth"
//                         position={`${labelKey}*${valKey}`}
//                         color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
//                     />
//                 </Chart>
//             );
//         case 'pie':
//             return (
//                 <PieChart
//                     data={data}
//                     title={{
//                         visible: true,
//                         text: '饼图-外部图形标签(outer label)',
//                     }}
//                     description={{
//                         visible: true,
//                         text: '当把饼图label的类型设置为outer时，标签在切片外部拉线显示。设置offset控制标签的偏移值。',
//                     }}
//                     radius={0.5}
//                     angleField={valKey}
//                     colorField={labelKey}
//                     label={{
//                         visible: true,
//                         type: 'spider',
//                         labelHeight: 28,
//                         content: (v) => `${v[labelKey]}\n${v[valKey]}`,
//                     }}
//                 />
//             );
//     }
// }
export {};
