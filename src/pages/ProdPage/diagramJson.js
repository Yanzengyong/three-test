// 第一个
const ywtbdata={
	data:[
		{
			name: '一网通办',
			symbolSize: 120,
			category: 0,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#04f2a7',
					borderWidth: 6,
					shadowBlur: 20,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			}
		},
		{
			name: '浪潮业务系统',
			symbolSize: 100,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},
			category: 1
		},
		{
			name: '贵州省事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},
		},
		{
			name: '高新区事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},

		},
		{
			name: '政务公开数据',
			symbolSize:100,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},

		},
		{
			name: '高新区政务',
			symbolSize:80,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},

		},
		{
			name: '南明区政务',
			symbolSize:80,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
			category: 2,

		},
		{
			name: '贵阳市政务',
			symbolSize:80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
		}],
	links:[
		{
			source: '一网通办',
			target: '浪潮业务系统'

		},
		{
			source: '一网通办',
			target: '政务公开数据',
		},
		{
			source: '浪潮业务系统',
			target: '贵州省事项数据',
		},
		{
			source: '浪潮业务系统',
			target: '高新区事项数据',
			value: 'DNA'
		},
		{
			source: '一网通办',
			target: '政务公开数据',
		},
		{
			source: '政务公开数据',
			target: '贵阳市政务',
		},
		{
			source: '政务公开数据',
			target: '高新区政务',
		}, {
			source: '政务公开数据',
			target: '南明区政务'

		}
	],
}
// 第二个
const zwtdata={
	data:[
		{
			name: '政务通',
			symbolSize: 120,
			category: 0,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#04f2a7',
					borderWidth: 6,
					shadowBlur: 20,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			}
		},
		{
			name: '浪潮业务系统',
			symbolSize: 100,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},
			category: 1
		},
		{
			name: '贵州省事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},
		},
		{
			name: '高新区事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},

		},
		{
			name: '政务公开数据',
			symbolSize:100,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},

		},
		{
			name: '高新区政务',
			symbolSize:80,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},

		},
		{
			name: '南明区政务',
			symbolSize:80,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
			category: 2,

		},
		{
			name: '贵阳市政务',
			symbolSize:80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
		}],
	links:[
		{
			source: '政务通',
			target: '浪潮业务系统'

		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '浪潮业务系统',
			target: '贵州省事项数据',
		},
		{
			source: '浪潮业务系统',
			target: '高新区事项数据',
			value: 'DNA'
		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '政务公开数据',
			target: '贵阳市政务',
		},
		{
			source: '政务公开数据',
			target: '高新区政务',
		}, {
			source: '政务公开数据',
			target: '南明区政务'

		}
	],
}
// 第三个
const lyyltdata={
	data:[
		{
			name: '政务通',
			symbolSize: 120,
			category: 0,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#04f2a7',
					borderWidth: 6,
					shadowBlur: 20,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			}
		},
		{
			name: '浪潮业务系统',
			symbolSize: 100,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},
			category: 1
		},
		{
			name: '贵州省事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},
		},
		{
			name: '高新区事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},

		},
		{
			name: '政务公开数据',
			symbolSize:100,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},

		},
		{
			name: '高新区政务',
			symbolSize:80,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},

		},
		{
			name: '南明区政务',
			symbolSize:80,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
			category: 2,

		},
		{
			name: '贵阳市政务',
			symbolSize:80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
		}],
	links:[
		{
			source: '政务通',
			target: '浪潮业务系统'

		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '浪潮业务系统',
			target: '贵州省事项数据',
		},
		{
			source: '浪潮业务系统',
			target: '高新区事项数据',
			value: 'DNA'
		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '政务公开数据',
			target: '贵阳市政务',
		},
		{
			source: '政务公开数据',
			target: '高新区政务',
		}, {
			source: '政务公开数据',
			target: '南明区政务'

		}
	],
}
// 第四个
const ajxjldata={
	data:[
		{
			name: '政务通',
			symbolSize: 120,
			category: 0,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#04f2a7',
					borderWidth: 6,
					shadowBlur: 20,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			}
		},
		{
			name: '浪潮业务系统',
			symbolSize: 100,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},
			category: 1
		},
		{
			name: '贵州省事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},
		},
		{
			name: '高新区事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},

		},
		{
			name: '政务公开数据',
			symbolSize:100,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},

		},
		{
			name: '高新区政务',
			symbolSize:80,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},

		},
		{
			name: '南明区政务',
			symbolSize:80,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
			category: 2,

		},
		{
			name: '贵阳市政务',
			symbolSize:80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
		}],
	links:[
		{
			source: '政务通',
			target: '浪潮业务系统'

		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '浪潮业务系统',
			target: '贵州省事项数据',
		},
		{
			source: '浪潮业务系统',
			target: '高新区事项数据',
			value: 'DNA'
		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '政务公开数据',
			target: '贵阳市政务',
		},
		{
			source: '政务公开数据',
			target: '高新区政务',
		}, {
			source: '政务公开数据',
			target: '南明区政务'

		}
	],
}
// 第五个
const pacrjdata={
	data:[
		{
			name: '政务通',
			symbolSize: 120,
			category: 0,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#04f2a7',
					borderWidth: 6,
					shadowBlur: 20,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			}
		},
		{
			name: '浪潮业务系统',
			symbolSize: 100,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},
			category: 1
		},
		{
			name: '贵州省事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},
		},
		{
			name: '高新区事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},

		},
		{
			name: '政务公开数据',
			symbolSize:100,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},

		},
		{
			name: '高新区政务',
			symbolSize:80,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},

		},
		{
			name: '南明区政务',
			symbolSize:80,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
			category: 2,

		},
		{
			name: '贵阳市政务',
			symbolSize:80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
		}],
	links:[
		{
			source: '政务通',
			target: '浪潮业务系统'

		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '浪潮业务系统',
			target: '贵州省事项数据',
		},
		{
			source: '浪潮业务系统',
			target: '高新区事项数据',
			value: 'DNA'
		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '政务公开数据',
			target: '贵阳市政务',
		},
		{
			source: '政务公开数据',
			target: '高新区政务',
		}, {
			source: '政务公开数据',
			target: '南明区政务'

		}
	],
}
// 第六个
const ktqdata={
	data:[
		{
			name: '政务通',
			symbolSize: 120,
			category: 0,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#04f2a7',
					borderWidth: 6,
					shadowBlur: 20,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			}
		},
		{
			name: '浪潮业务系统',
			symbolSize: 100,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},
			category: 1
		},
		{
			name: '贵州省事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},
		},
		{
			name: '高新区事项数据',
			symbolSize: 80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43',
				}
			},

		},
		{
			name: '政务公开数据',
			symbolSize:100,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#82dffe',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#04f2a7',
					color: '#001c43',
				}
			},

		},
		{
			name: '高新区政务',
			symbolSize:80,
			category: 2,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},

		},
		{
			name: '南明区政务',
			symbolSize:80,
			draggable:true,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
			category: 2,

		},
		{
			name: '贵阳市政务',
			symbolSize:80,
			draggable:true,
			category: 2,
			itemStyle: {
				normal: {
					borderColor: '#b457ff',
					borderWidth: 4,
					shadowBlur: 10,
					shadowColor: '#b457ff',
					color: '#001c43'
				}
			},
		}],
	links:[
		{
			source: '政务通',
			target: '浪潮业务系统'

		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '浪潮业务系统',
			target: '贵州省事项数据',
		},
		{
			source: '浪潮业务系统',
			target: '高新区事项数据',
			value: 'DNA'
		},
		{
			source: '政务通',
			target: '政务公开数据',
		},
		{
			source: '政务公开数据',
			target: '贵阳市政务',
		},
		{
			source: '政务公开数据',
			target: '高新区政务',
		}, {
			source: '政务公开数据',
			target: '南明区政务'

		}
	],
}

export{
	ywtbdata,
	zwtdata,
	lyyltdata,
	ajxjldata,
	pacrjdata,
	ktqdata
}
