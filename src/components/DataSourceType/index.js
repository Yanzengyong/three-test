import React from 'react'
import './scss/index.scss'

export default class DataSourceType extends React.Component {
	constructor (props) {
		super(props)
	}
	
	render () {
		console.log(this.props)
		return (
			<div className="dataSourceType">
				<div className='title'>
					{this.props.dept} - 数据概况
				</div>
				{this.props.dept === '本平台所有数据' ? (
					<div className='content'>
						<p>平台共接入2993个数据集，其中市本级996个，区县级1997个</p>
						<p>数据涉及社会发展、经济建设、劳动人事、教育科技、文体休闲、三农服务等领域，</p>
						<p>包含综合政务、经济管理、国土资源、信息产业等主题，</p>
						<p>跨越采矿业、制造业、供应业、建筑业等行业，</p>
						<p>提供惠民服务、政府资源管理等数据应用服务</p>
					</div>
				):null}
				{this.props.dept === '工商局' ? (
					<div className='content'>
						<p>平台共接入20个数据集，72份文件</p>
						<p>数据来自于OA办公系统、财务系统、安全许可经营管理系统、企业信息管理系统等数据来源，</p>
						<p>主要涉及工商局所管辖领域信息系统数据与文件的接入</p>
					</div>
				):null}
				{this.props.dept === '发改委' ? (
					<div className='content'>
						<p>平台共接入15个数据集，10000份文件</p>
						<p>数据来自于物价管理系统、重大项目库管理系统等数据来源，</p>
						<p>主要涉及发改委所管辖各行业、各企业收费定价标准、建设规划、编制考核信息、经费预算信息等方面</p>
					</div>
				):null}
				{this.props.dept === '安监局' ? (
					<div className='content'>
						<p>平台共接入31个数据集，114份文件</p>
						<p>数据来自于威胁品生产管理系统、安全许可经营管理系统等数据来源，</p>
						<p>主要涉及安监局所管辖领域安全许可证颁发信息、生产安全死亡事故信息、相关管辖企业信息、煤矿信息等</p>
					</div>
				):null}
				{this.props.dept === '气象局' ? (
					<div className='content'>
						<p>平台共接入12个数据集，55份文件</p>
						<p>数据来自于空气质量监测设备管理系统、水文监测站数据采集系统等数据来源，</p>
						<p>主要涉及气象观察、气象预警等方面的信息</p>
					</div>
				):null}
				{this.props.dept === '旅发委' ? (
					<div className='content'>
						<p>平台共接入20个数据集，110份文件</p>
						<p>数据来自于旅行社登记管理系统、出入境游客大数据平台、导游管理系统等数据来源，</p>
						<p>主要涉及旅游发展方面的旅行社、节假日统计、出入境游客、旅游团体、旅游饭店花费等数据</p>
					</div>
				):null}
				{this.props.dept === '住建局' ? (
					<div className='content'>
						<p>平台共接入16个数据集，61份文件</p>
						<p>数据来自于物业管理企业管理系统、装修施工许可证登记系统等数据来源，</p>
						<p>主要涉及住建局所管理的房屋预售许可证信息、装修施工许可证信息、保障房等信息</p>
					</div>
				):null}
				{this.props.dept === '食药监局' ? (
					<div className='content'>
						<p>平台共接入15个数据集，56份文件</p>
						<p>数据来自于药品零售门店管理系统、医疗企业生产许可证管理系统、 食品生产许可证管理系统等数据来源，</p>
						<p>主要涉及食药监局对于食品药品的监督管理信息接入</p>
					</div>
				):null}
				{this.props.dept === '民政局' ? (
					<div className='content'>
						<p>平台共接入21个数据集，113份文件</p>
						<p>数据来自于养老服务机构管理系统、出生登记管理系统、结婚登记管理系统等数据来源，</p>
						<p>主要涉及民政局所管辖领域信息系统数据与文件的接入</p>
					</div>
				):null}
			</div>
		)
	}
}
