// 开发环境
// const Host = 'http://localhost:8082/dmp/';
const ip = 'http://172.10.10.232'

// 测试环境ip
// const ip = 'http://172.10.10.231';

// 生产环境ip
// const ip = 'http://172.16.117.70';

// 外网演示环境ip
// const ip = 'http://111.85.152.226:17180';

// 网络爬虫的ip
const spiderIp = 'http://172.10.10.183'

// 数据安全的ip
const dataSafeIp = 'http://172.16.117.78'

// 数据共享开发的ip
const dataOpenIp = 'http://172.10.10.231'

// 文件服务地址
const FILE = ip + ':8084/fileServes/'//文件服务器地址

// 数据管理后台
const Host = ip + '/dmp/'

export default {
	test: {
		testRQ: Host + 'element/list', // 数据源列表
	},
	// 任务列表
	task:{
		downloadFile: FILE + 'file/downloadFile'//下载导出文件
	},
	// 爬虫api
	spider: {
		dashboard: spiderIp + ':5000/#/dashboard'
	},
	// 数据共享开放平台
	dataOpen: {
		index: dataOpenIp + ':8080/city/index.htm'
	},
	// 数据安全
	dataSafe: {
		index: dataSafeIp + ':50000'
	}
}
