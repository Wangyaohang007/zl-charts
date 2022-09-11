var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
option = {
	title: {
		text: '全国累计趋势'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['累计确诊', '现有疑似', '累计治愈', '累计死亡']
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		}
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['2020-01-23', '2020-09-08', '2021-04-25', '2021-12-10', '2022-07-27']
	},
	yAxis: {
		type: 'value'
	},
	series: [{
			name: '累计确诊',
			type: 'line',
			stack: 'Total',
			data: [835, 90582, 103463, 128776, 5054504],
		},
		{
			name: '现有疑似',
			type: 'line',
			stack: 'Total',
			data: [1072, 1, 6, 4, 5]
		},
		{
			name: '累计治愈',
			type: 'line',
			stack: 'Total',
			data: [34, 85411, 98078, 119634, 305843]
		},
		{
			name: '累计死亡',
			type: 'line',
			stack: 'Total',
			data: [25, 4740, 4856, 5697, 23396]
		},
	]
};
option && myChart.setOption(option);
