let ROOT_PATH = 'http://127.0.0.1:8848/zl-charts';
let qsDom = document.getElementById('qs');
let myqs = echarts.init(qsDom);
let qsOption;
$.get(ROOT_PATH + '/data/beijing.json', function(data) {
	
	myqs.setOption(
		(qsOption = {
			title: {
				text: '全国新增趋势',
				left: '1%'
			},
			tooltip: {
				trigger: 'axis'
			},
			grid: {
				left: '10%',
				right: '15%',
				bottom: '10%'
			},
			xAxis: {
				data: data.map(function(item) {
					return item[0];
				})
			},
			yAxis: {},
			toolbox: {
				right: 10,
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			dataZoom: [{
					startValue: '2020-01-23'
				},
				{
					type: 'inside'
				}
			],
			visualMap: {
				bottom: 40,
				right: 0,
				pieces: [{
						gt: 1,
						lte: 9,
						color: '#93CE07',
					},
					{
						gt: 10,
						lte: 99,
						color: '#FBDB0F'
					},
					{
						gt: 100,
						lte: 499,
						color: '#FC7D02'
					},
					{
						gt: 500,
						lte: 999,
						color: '#FD0100'
					},
					{
						gt: 1000,
						lte: 4999,
						color: '#AA069F'
					},
					{
						gt: 5000,
						color: '#AC3B2A'
					}
				],
				outOfRange: {
					color: '#999'
				}
			},
			series: {
				name: 'Beijing AQI',
				type: 'line',
				data: data.map(function(item) {
					return item[1];
				}),
				markLine: {
					silent: true,
					lineStyle: {
						color: '#333'
					},
					// data: [{
					// 		yAxis: 2
					// 	},
					// 	{
					// 		yAxis: 100
					// 	},
					// 	{
					// 		yAxis: 150
					// 	},
					// 	{
					// 		yAxis: 200
					// 	},
					// 	{
					// 		yAxis: 300
					// 	}
					// ]
				}
			}
		})
	);
});

qsOption && myqs.setOption(qsOption);
