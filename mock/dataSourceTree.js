module.exports = {
	'GET /api/dataSourceTree': (req, res) => {
		res.send(
			// { 'msg':'成功', 'result':{ 'uuid':'1', 'name':'数据资源目录管理', 'value':0, 'children':[{ 'uuid':'73da27a56b2e4db7b2fd268bb1992a15', 'name':'三级目录111', 'value':67, 'children':[{ 'uuid':'967e0acaacb348ed88f945bb5c1eaeb0', 'name':'三级目录111', 'value':0, 'children':[{ 'uuid':'a8577dcd87a34e6798204c3a20fc139e', 'name':'四级目录1111', 'value':0, 'children':null }] }, { 'uuid':'60349da358874689a41af5dc22cf7888', 'name':'三级目录112', 'value':0, 'children':null }, { 'uuid':'19430f77828b41349da508746091010f', 'name':'三级目录111', 'value':0, 'children':[{ 'uuid':'14ba94ef07b14832a058d6db9c9e58d4', 'name':'四级目录1211', 'value':0, 'children':null }] }, { 'uuid':'45c8e6e565614b6cb570c32d4336f4f1', 'name':'三级目录122', 'value':0, 'children':[{ 'uuid':'395ca20c3b4c422da5b7c98339aae415', 'name':'四级目录1222', 'value':0, 'children':null }] }] }, { 'uuid':'ab4faec080a14aae82fb51b0e7282412', 'name':'33test', 'value':0, 'children':[{ 'uuid':'c3331b50990d4e5dbac2b84df69a1735', 'name':'11111', 'value':0, 'children':null }] }, { 'uuid':'fb27ec900c6840abaa823cd7b7977fdb', 'name':'111', 'value':0, 'children':[{ 'uuid':'812a26752a114a70a7d3a4156f7841ba', 'name':'示例1', 'value':0, 'children':[{ 'uuid':'c69c6b8ae7f341b099d16fd2e065790f', 'name':'示例11', 'value':0, 'children':[{ 'uuid':'cdab7faade1c466791bd628baf3fab45', 'name':'示例111', 'value':0, 'children':[{ 'uuid':'665f2d00277648ec985dc3dec42371d7', 'name':'示例1111', 'value':0, 'children':null }, { 'uuid':'91a12f82de524227aa6013c018582283', 'name':'示例1112', 'value':0, 'children':null }] }, { 'uuid':'f099952fed974575820256c63e8711dc', 'name':'示例112', 'value':0, 'children':[{ 'uuid':'edd8afb5b1844fb8a07a2f948f129da4', 'name':'示例1121', 'value':0, 'children':null }, { 'uuid':'5ce7d458f4ca415cb72ce58339a1dc05', 'name':'示例1122', 'value':0, 'children':null }] }] }, { 'uuid':'79dd2f1b12c34b4994a9447d8b1407ae', 'name':'示例12', 'value':0, 'children':[{ 'uuid':'3df5de3e47fe4e9bb1557ff5c8853a57', 'name':'示例121', 'value':0, 'children':[{ 'uuid':'b66fc0acea2243a394a9b4e452104284', 'name':'示例1211', 'value':0, 'children':null }] }, { 'uuid':'e5174414860b4ef7b11979b0f1d06fa7', 'name':'示例122', 'value':0, 'children':[{ 'uuid':'2d483c1156894273b38035d81ebfb3f1', 'name':'示例1222', 'value':0, 'children':[{ 'uuid':'ea3ff731cca54c288c679a289e4e6b4d', 'name':'<', 'value':0, 'children':null }] }] }] }] }] }, { 'uuid':'910abfdd483543108dddb3f4644685e7', 'name':'d', 'value':9, 'children':[{ 'uuid':'b593c2266f8943a2a3e69a041618431c', 'name':'对对对', 'value':0, 'children':null }] }] }, 'code':10000 }
			{
				msg: '成功',
				data: {
					uuid: '0',
					name: '数据源目录管理',
					value: 0,
					children: [
						{
							uuid: 'c033443554f2433f8cf9ae5474ce7851',
							name: '三级目录1211',
							value: 3,
							children: [
								{
									uuid: '3d59100599df461e89c2332173f23111',
									name: 'ytyey',
									value: 0,
									children: null
								},
								{
									uuid: '01ab44baf5624908ad39fc09fb9e597a',
									name: '111111',
									value: 0,
									children: [
										{
											uuid: '8f905764e63449b9adb1ad771609adbd',
											name: '0',
											value: 0,
											children: null
										},
										{
											uuid: '6343b2c2d084440682ff80d7e8fa06cf',
											name: 'try',
											value: 0,
											children: null
										}
									]
								},
								{
									uuid: 'a1d8efd560a442f09d0aa750ed8fb990',
									name: 'try',
									value: 0,
									children: null
								},
								{
									uuid: '635a8727b52d49dfb3363f49e2f18ccc',
									name: '222',
									value: 0,
									children: null
								},
								{
									uuid: 'd42f54ab6e3342febee94087f2efc778',
									name: '2222222',
									value: 0,
									children: [
										{
											uuid: '8163bf23de0f464f9c598ecf357f8b54',
											name: '测试是否卡顿1',
											value: 0,
											children: [
												{
													uuid: 'f3f59801a26748c999ced2809107ccf0',
													name: '测试是否卡顿11',
													value: 0,
													children: [
														{
															uuid: 'b6269b6e586545e3a8e4765d7ace7e30',
															name: '测试是否卡顿111',
															value: 0,
															children: [
																{
																	uuid: 'dba82b501ea14be49ce9a4bc1c09aad2',
																	name: '测试是否卡顿1111',
																	value: 0,
																	children: [
																		{
																			uuid: 'd02fd1fbaf574e1182d7b24617471804',
																			name: '测试是否卡顿11111',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: 'c6691a6abe8e4e5e8172495e93678d15',
																			name: '测试是否卡顿11112',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '1c19f3fc2cac4654b31945a0c71db84f',
																			name: '测试是否卡顿11113',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: 'fb135dbe8b1149c191c9c61610148433',
																			name: '测试是否卡顿11114',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '0de20dea6e82436c8cd738e60766a174',
																			name: '测试是否卡顿11115',
																			value: 0,
																			children: null
																		}
																	]
																},
																{
																	uuid: '90de96a128ef41d9870e7bdad52ac28e',
																	name: '测试是否卡顿1112',
																	value: 0,
																	children: [
																		{
																			uuid: 'ff8f7d3ade354de8a7e9b3408cbdecd6',
																			name: '测试是否卡顿11121',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: 'f1e01be99e3a47b6985d40f0913cc8cd',
																			name: '测试是否卡顿11122',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '3b866873cac249a49ff5596eccd364ac',
																			name: '测试是否卡顿11123',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: 'a50124db051a479a80f401e5d326ed45',
																			name: '测试是否卡顿11124',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '13dc41ac34de439abba5a85f9d51002f',
																			name: '测试是否卡顿11125',
																			value: 0,
																			children: null
																		}
																	]
																}
															]
														},
														{
															uuid: 'b2a98a6cdf0d45949493facae5e1d3bb',
															name: '测试是否卡顿112',
															value: 0,
															children: [
																{
																	uuid: '36ce01b5f86644f4864716bdf8f176f7',
																	name: '测试是否卡顿1121',
																	value: 0,
																	children: [
																		{
																			uuid: '90b2c98289aa4d96af7f4a648f8f88cb',
																			name: '测试是否卡顿11211',
																			value: 0,
																			children: null
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											uuid: 'f39ba2f78b7b42188e8831ff1c85d2a2',
											name: '测试是否卡顿2',
											value: 0,
											children: [
												{
													uuid: 'b11d641a2e6c4801880138cf47522e50',
													name: '测试是否卡顿21',
													value: 0,
													children: [
														{
															uuid: '032ecf9d140e48abb5b4ad68bdac2ec6',
															name: '测试是否卡顿211',
															value: 0,
															children: [
																{
																	uuid: '629607b2df1640009c44788a1a50357e',
																	name: '测试是否卡顿2111',
																	value: 0,
																	children: [
																		{
																			uuid: '3df70b12920940aa96c4a27be80fa221',
																			name: '测试是否卡顿21111',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: 'fc540dcdf5334929acecc93cd85d7090',
																			name: '测试是否卡顿21112',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: 'ac5a18fcce6c42b48a807e88dab6584d',
																			name: '测试是否卡顿21113',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '5d7b4b719a8e4c1d937313c53b340ab7',
																			name: '测试是否卡顿21114',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '9be0ed6764024d67b5db90507a255dc9',
																			name: '测试是否卡顿21115',
																			value: 0,
																			children: null
																		}
																	]
																},
																{
																	uuid: 'bb3cd0da93a144e5a9f3dbfbc8a8fb92',
																	name: '测试是否卡顿2112',
																	value: 0,
																	children: [
																		{
																			uuid: '8e15d5cad26b49168b994256a8fda146',
																			name: '测试是否卡顿21121',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '5f59a4bfe49a4ba8aec6c841eb6a80a7',
																			name: '测试是否卡顿21122',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: 'a3ec87e124434e41a497f67c42a11d00',
																			name: '测试是否卡顿21123',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '02fb28cbcd714136b612d85fcc48cbea',
																			name: '测试是否卡顿21124',
																			value: 0,
																			children: null
																		},
																		{
																			uuid: '6f1825da81eb4dfb98117f3aab98a6e5',
																			name: '测试是否卡顿21125',
																			value: 0,
																			children: null
																		}
																	]
																}
															]
														},
														{
															uuid: 'cad482950143495098f912e763824d05',
															name: '测试是否卡顿212',
															value: 0,
															children: [
																{
																	uuid: 'c4c0f2c098d34081b64599fe3fffc54e',
																	name: '测试是否卡顿2121',
																	value: 0,
																	children: [
																		{
																			uuid: '950938b5d46f4139a7018d272be27376',
																			name: '测试是否卡顿21211',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'65bb2444028a4d05a2c9d77e114fe452',
																					name: '测试是否卡顿1',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'34a42a4893a04149ab9ad9b18001bbe1',
																							name: '测试是否卡顿11',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'6e9d991d8de34d618b385c43f8927865',
																									name: '测试是否卡顿111',
																									value: 0,
																									children: [
																										{
																											uuid:
																												'243ee7ce015543c4ab218f8498db7e91',
																											name: '测试是否卡顿1111',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'188db673d9674dada27f6dc6fa715197',
																													name:
																														'测试是否卡顿11111',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'124453cc83374d948102c956cfb00128',
																													name:
																														'测试是否卡顿11112',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'0a07be8f0295497685dcb7af97a3ad3d',
																													name:
																														'测试是否卡顿11113',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'72cba93d5b124079bb7243a029c3374b',
																													name:
																														'测试是否卡顿11114',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'20e6edf220184c6d95d73d56e3aac290',
																													name:
																														'测试是否卡顿11115',
																													value: 0,
																													children: null
																												}
																											]
																										},
																										{
																											uuid:
																												'9344906259f54c00aa47ab7ebcb51fe3',
																											name: '测试是否卡顿1112',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'f90a0bfc7cd6421b867a259c81dc9f6e',
																													name:
																														'测试是否卡顿11121',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'f722cca9719f44669a8839e82991f91b',
																													name:
																														'测试是否卡顿11122',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'502dfbf646b84615993c3aab069dd523',
																													name:
																														'测试是否卡顿11123',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'b111b8b0d5d4485a9e4c8e4a31cda7f4',
																													name:
																														'测试是否卡顿11124',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'237fa5fefa0a49d9ba6e11d4d13c96e5',
																													name:
																														'测试是否卡顿11125',
																													value: 0,
																													children: null
																												}
																											]
																										}
																									]
																								},
																								{
																									uuid:
																										'befff448d59640eaba5c9d0de7e59b24',
																									name: '测试是否卡顿112',
																									value: 0,
																									children: [
																										{
																											uuid:
																												'fe0cfa96597c4c7bb674d252c4417b25',
																											name: '测试是否卡顿1121',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'e2ffebf78b60454b94994159befd440b',
																													name:
																														'测试是否卡顿11211',
																													value: 0,
																													children: null
																												}
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					uuid:
																						'7c561a6a99e44584977ae7b55b659311',
																					name: '测试是否卡顿2',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'13ce009700ee4d07be34ece86b96779b',
																							name: '测试是否卡顿21',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'9b41523cd7824f608250b2c195f45fb0',
																									name: '测试是否卡顿211',
																									value: 0,
																									children: [
																										{
																											uuid:
																												'f44b24a380b2460d9412036a80ef7589',
																											name: '测试是否卡顿2111',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'9f17a33449594a1a808abbc9f4428790',
																													name:
																														'测试是否卡顿21111',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'f49bd427ed294143bb8a5ec5d31d7726',
																													name:
																														'测试是否卡顿21112',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'ba480b24f1414d549010643d28747509',
																													name:
																														'测试是否卡顿21113',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'ebbdcde961e044aeadd5de18d69b4bef',
																													name:
																														'测试是否卡顿21114',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'c492f9aa5727413d973567d7babd0db3',
																													name:
																														'测试是否卡顿21115',
																													value: 0,
																													children: null
																												}
																											]
																										},
																										{
																											uuid:
																												'ca46feefdc5f4569a1d47fda809dc440',
																											name: '测试是否卡顿2112',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'1868f879e3344e9385863671d73a2c34',
																													name:
																														'测试是否卡顿21121',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'883a2ad7577443a59f8555f99339cc96',
																													name:
																														'测试是否卡顿21122',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'6e2aa80a9f134c829ed52df542af604f',
																													name:
																														'测试是否卡顿21123',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'12af5a85f51044888a88970bdb13eadf',
																													name:
																														'测试是否卡顿21124',
																													value: 0,
																													children: null
																												},
																												{
																													uuid:
																														'b28a670c0c3249258af07a1a65852cd9',
																													name:
																														'测试是否卡顿21125',
																													value: 0,
																													children: null
																												}
																											]
																										}
																									]
																								},
																								{
																									uuid:
																										'b9be334c132c404a978d145568ed78ac',
																									name: '测试是否卡顿212',
																									value: 0,
																									children: [
																										{
																											uuid:
																												'693b5a3ce6b44c23b8b54612cb0808b2',
																											name: '测试是否卡顿2121',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'2d1d30127f8f4026b247c1aca3f8a0c5',
																													name:
																														'测试是否卡顿21211',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'02d4d82148244e8eb8b6d8e436e3b242',
																															name:
																																'测试是否卡顿1',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'8edade33547346aa87cf5f7a092dedc2',
																																	name:
																																		'测试是否卡顿11',
																																	value: 0,
																																	children: [
																																		{
																																			uuid:
																																				'd6e226c922764d659d5dc9f3c42f23c9',
																																			name:
																																				'测试是否卡顿111',
																																			value: 0,
																																			children: [
																																				{
																																					uuid:
																																						'1a0ca4bec2644190aed3e725aee74635',
																																					name:
																																						'测试是否卡顿1111',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'84c3cbd1392e45c4b8516d7cc0935458',
																																							name:
																																								'测试是否卡顿11111',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'3d2a7fe1f0dd401686862647fdfff5c5',
																																							name:
																																								'测试是否卡顿11112',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'eae18549d4464123902fb9dea4fcf2a8',
																																							name:
																																								'测试是否卡顿11113',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'108707c0d48a4875989e0d85871fab9e',
																																							name:
																																								'测试是否卡顿11114',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'65b6a32c1cad4d4dbb718d367f8f26d9',
																																							name:
																																								'测试是否卡顿11115',
																																							value: 0,
																																							children: null
																																						}
																																					]
																																				},
																																				{
																																					uuid:
																																						'7183e05f3be7479da7524bbcbf980fbb',
																																					name:
																																						'测试是否卡顿1112',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'e24a32ff663c49ca89a6441ca20d8902',
																																							name:
																																								'测试是否卡顿11121',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'c773151bee664501aba790806e05cc91',
																																							name:
																																								'测试是否卡顿11122',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'e90290c4be77408b9f511fe41d607f9f',
																																							name:
																																								'测试是否卡顿11123',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'a1662ff342bb476b932f23b997889793',
																																							name:
																																								'测试是否卡顿11124',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'4fecd5f0533c4332afc5fbf3a1beec30',
																																							name:
																																								'测试是否卡顿11125',
																																							value: 0,
																																							children: null
																																						}
																																					]
																																				}
																																			]
																																		},
																																		{
																																			uuid:
																																				'862e1f69543b48948c076764b023aa4b',
																																			name:
																																				'测试是否卡顿112',
																																			value: 0,
																																			children: [
																																				{
																																					uuid:
																																						'255913439df94dc0893965b4eb49f1f7',
																																					name:
																																						'测试是否卡顿1121',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'f41df84d642044a1be3a8ebf34f6a8a7',
																																							name:
																																								'测试是否卡顿11211',
																																							value: 0,
																																							children: null
																																						}
																																					]
																																				}
																																			]
																																		}
																																	]
																																}
																															]
																														},
																														{
																															uuid:
																																'e17c0592bb874aa0ad12da5e1cfd26a6',
																															name:
																																'测试是否卡顿2',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'3bfce55b5acb46e19b4abb824da7aa73',
																																	name:
																																		'测试是否卡顿21',
																																	value: 0,
																																	children: [
																																		{
																																			uuid:
																																				'a0d03d164a2b49dda2fe57dacb16f6c3',
																																			name:
																																				'测试是否卡顿211',
																																			value: 0,
																																			children: [
																																				{
																																					uuid:
																																						'bafa766217244561b84796a137b39465',
																																					name:
																																						'测试是否卡顿2111',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'6aaae1c92d6146bf9c404e2ebd6f17a2',
																																							name:
																																								'测试是否卡顿21111',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'7d84bbe66f9e4b0db7a9d296ec21ca98',
																																							name:
																																								'测试是否卡顿21112',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'078e321868e64e26acfddbce899b202d',
																																							name:
																																								'测试是否卡顿21113',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'707a70960627498c88eabdc83412fbca',
																																							name:
																																								'测试是否卡顿21114',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'ea8f47a0cf5c464688aee305c10ed570',
																																							name:
																																								'测试是否卡顿21115',
																																							value: 0,
																																							children: null
																																						}
																																					]
																																				},
																																				{
																																					uuid:
																																						'227d893518284fb6b8568da74f4c8f99',
																																					name:
																																						'测试是否卡顿2112',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'6c6e0debd1994c8c97d6bb42ef1df96b',
																																							name:
																																								'测试是否卡顿21121',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'd93b48602e464238a23886f195b715d3',
																																							name:
																																								'测试是否卡顿21122',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'd9d03bc6bcfb47d3926de8c4995d50dd',
																																							name:
																																								'测试是否卡顿21123',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'7494832115d3428185c3de8d97593e5b',
																																							name:
																																								'测试是否卡顿21124',
																																							value: 0,
																																							children: null
																																						},
																																						{
																																							uuid:
																																								'78386d25fdad408ca47b31202af22f92',
																																							name:
																																								'测试是否卡顿21125',
																																							value: 0,
																																							children: null
																																						}
																																					]
																																				}
																																			]
																																		},
																																		{
																																			uuid:
																																				'11af7c82f48c493fb27f261a42e8f20d',
																																			name:
																																				'测试是否卡顿212',
																																			value: 0,
																																			children: [
																																				{
																																					uuid:
																																						'68cc2e982d274643bfa56a7f7d5852ab',
																																					name:
																																						'测试是否卡顿2121',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'576353ca95f24f1da5e03113ea08d775',
																																							name:
																																								'测试是否卡顿21211',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'f9c14e6dca504fa8b110cad02d4ac1b5',
																																									name:
																																										'测试是否卡顿1',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'2792dbb569f24f12a154d0150d636bf1',
																																											name:
																																												'测试是否卡顿11',
																																											value: 0,
																																											children: [
																																												{
																																													uuid:
																																														'4e0b1bc142764c03a97beec6e1423f42',
																																													name:
																																														'测试是否卡顿111',
																																													value: 0,
																																													children: [
																																														{
																																															uuid:
																																																'19ccb8fbe2bd44dc9de5f55956622fad',
																																															name:
																																																'测试是否卡顿1111',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'63a0312717f747b8a1c8ef9919597e19',
																																																	name:
																																																		'测试是否卡顿11111',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'b4a3b35536134c978b8ddf70d715397c',
																																																	name:
																																																		'测试是否卡顿11112',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'f94ad62df77f43819ac4c81c99631fcc',
																																																	name:
																																																		'测试是否卡顿11113',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'd058c78ebf4949b2baef08ad30754c40',
																																																	name:
																																																		'测试是否卡顿11114',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'2e59beb4fba049b0b7510c7627cd2181',
																																																	name:
																																																		'测试是否卡顿11115',
																																																	value: 0,
																																																	children: null
																																																}
																																															]
																																														},
																																														{
																																															uuid:
																																																'636c2413f48e4da0a359ab26f3f34a21',
																																															name:
																																																'测试是否卡顿1112',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'83be82d07f8747b48043f70fbd86c5a7',
																																																	name:
																																																		'测试是否卡顿11121',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'735a29a3342f42d4b60d5d20a2a3eb1d',
																																																	name:
																																																		'测试是否卡顿11122',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'51224c60254142cb91eac270996d0f73',
																																																	name:
																																																		'测试是否卡顿11123',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'044d43ea17dc4ee389659132edda8636',
																																																	name:
																																																		'测试是否卡顿11124',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'157aac3e0e2249af9e50988044e948b0',
																																																	name:
																																																		'测试是否卡顿11125',
																																																	value: 0,
																																																	children: null
																																																}
																																															]
																																														}
																																													]
																																												},
																																												{
																																													uuid:
																																														'a9c7914fecfe4e7eb8fc33abd18a24bc',
																																													name:
																																														'测试是否卡顿112',
																																													value: 0,
																																													children: [
																																														{
																																															uuid:
																																																'1d1e046a33fa4484a30d1d2fc012feda',
																																															name:
																																																'测试是否卡顿1121',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'08c35e57f7ec467a812b99e2425e765f',
																																																	name:
																																																		'测试是否卡顿11211',
																																																	value: 0,
																																																	children: null
																																																}
																																															]
																																														}
																																													]
																																												}
																																											]
																																										}
																																									]
																																								},
																																								{
																																									uuid:
																																										'874e91832c4c4a9f864d003d0c9af719',
																																									name:
																																										'测试是否卡顿2',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'8097695ca62e4d6db535ac287b9bac6f',
																																											name:
																																												'测试是否卡顿21',
																																											value: 0,
																																											children: [
																																												{
																																													uuid:
																																														'7bfbb2ac70fb4463b86cd0674c263d3e',
																																													name:
																																														'测试是否卡顿211',
																																													value: 0,
																																													children: [
																																														{
																																															uuid:
																																																'decde9aadf2843c1a164f4e648863f2e',
																																															name:
																																																'测试是否卡顿2111',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'a475220ff8de4c7b840844c3d69e7978',
																																																	name:
																																																		'测试是否卡顿21111',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'1f61c247d65f440b9f41b02ca8980cbe',
																																																	name:
																																																		'测试是否卡顿21112',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'7b6ba300e98444b2a62b41461b5dcd47',
																																																	name:
																																																		'测试是否卡顿21113',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'6f668efa992a49718fdb8e265a3598e2',
																																																	name:
																																																		'测试是否卡顿21114',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'2ae46665b65541ab80bd625e93ca8a05',
																																																	name:
																																																		'测试是否卡顿21115',
																																																	value: 0,
																																																	children: null
																																																}
																																															]
																																														},
																																														{
																																															uuid:
																																																'7cf5cf458d094fe983beb2294c484165',
																																															name:
																																																'测试是否卡顿2112',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'e8f0403816614ddd83db6e76bf85b72c',
																																																	name:
																																																		'测试是否卡顿21121',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'5a6b2704db214b8a9a2b06ab1b353c06',
																																																	name:
																																																		'测试是否卡顿21122',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'11beeeff9f2147669e0b308fc5a8fd0f',
																																																	name:
																																																		'测试是否卡顿21123',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'4db46646db12483eafbeadb333c8bfc2',
																																																	name:
																																																		'测试是否卡顿21124',
																																																	value: 0,
																																																	children: null
																																																},
																																																{
																																																	uuid:
																																																		'bafc6b1689e747598daad65eba2667ee',
																																																	name:
																																																		'测试是否卡顿21125',
																																																	value: 0,
																																																	children: null
																																																}
																																															]
																																														}
																																													]
																																												},
																																												{
																																													uuid:
																																														'b5a06753afb04fdbacedfbf89d66b704',
																																													name:
																																														'测试是否卡顿212',
																																													value: 0,
																																													children: [
																																														{
																																															uuid:
																																																'4b0231ff7cc5429c9089bec07880a939',
																																															name:
																																																'测试是否卡顿2121',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'9da57dad33fa4b9f9bbfa7fd8d125ff6',
																																																	name:
																																																		'测试是否卡顿21211',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'46a7132cc2cc45a2b8276856416a382c',
																																																			name:
																																																				'测试是否卡顿1',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'efa6d8e5021442d7b1d81ac95929e0ed',
																																																					name:
																																																						'测试是否卡顿11',
																																																					value: 0,
																																																					children: [
																																																						{
																																																							uuid:
																																																								'05721ac9d0d94ef091c19306b589b40c',
																																																							name:
																																																								'测试是否卡顿111',
																																																							value: 0,
																																																							children: [
																																																								{
																																																									uuid:
																																																										'6dd6c3cf5a3f4bf7b190ff39e5dbf539',
																																																									name:
																																																										'测试是否卡顿1111',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'05c575bdbec5438094c81779d28e2831',
																																																											name:
																																																												'测试是否卡顿11111',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'fc91d5a5c7de40669892f28fe24316f6',
																																																											name:
																																																												'测试是否卡顿11112',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'dcfa9aabfb744cecabbe97c500d50b4b',
																																																											name:
																																																												'测试是否卡顿11113',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'0373b9db19ff4b1f887892a57e7088f3',
																																																											name:
																																																												'测试是否卡顿11114',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'fe5b204c2a364364ac4a667283a498a9',
																																																											name:
																																																												'测试是否卡顿11115',
																																																											value: 0,
																																																											children: null
																																																										}
																																																									]
																																																								},
																																																								{
																																																									uuid:
																																																										'749a3fd475c446b989110db423874194',
																																																									name:
																																																										'测试是否卡顿1112',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'a094800284a04aa791ef2275998035ee',
																																																											name:
																																																												'测试是否卡顿11121',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'26048eb4356b4f1d9c19b793e0a88973',
																																																											name:
																																																												'测试是否卡顿11122',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'51f05248e3d040c6b54002a45ea5ad9f',
																																																											name:
																																																												'测试是否卡顿11123',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'ffebe28df874447bbf55103686934ca9',
																																																											name:
																																																												'测试是否卡顿11124',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'0d1cd20610c34962968eccf9ce6c1d10',
																																																											name:
																																																												'测试是否卡顿11125',
																																																											value: 0,
																																																											children: null
																																																										}
																																																									]
																																																								}
																																																							]
																																																						},
																																																						{
																																																							uuid:
																																																								'34c48b2033744902bdf2ea46679d89f4',
																																																							name:
																																																								'测试是否卡顿112',
																																																							value: 0,
																																																							children: [
																																																								{
																																																									uuid:
																																																										'f070dd3b6dfd481a9b5445b6a9051566',
																																																									name:
																																																										'测试是否卡顿1121',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'4c7588ca99a44658b8899c430794af24',
																																																											name:
																																																												'测试是否卡顿11211',
																																																											value: 0,
																																																											children: null
																																																										}
																																																									]
																																																								}
																																																							]
																																																						}
																																																					]
																																																				}
																																																			]
																																																		},
																																																		{
																																																			uuid:
																																																				'1566f99071e04638b9534e3d2342f60f',
																																																			name:
																																																				'测试是否卡顿2',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'f4a31a4b77a640148bbc8b03a6526b2d',
																																																					name:
																																																						'测试是否卡顿21',
																																																					value: 0,
																																																					children: [
																																																						{
																																																							uuid:
																																																								'cabdc6e4a676423c8ff2b8f5367d6cea',
																																																							name:
																																																								'测试是否卡顿211',
																																																							value: 0,
																																																							children: [
																																																								{
																																																									uuid:
																																																										'9b3e81169e83427092ceb341d7c36487',
																																																									name:
																																																										'测试是否卡顿2111',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'bc88703f51ca421db799436d72486628',
																																																											name:
																																																												'测试是否卡顿21111',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'15889eebed8d4a49a8aa61949bb4637a',
																																																											name:
																																																												'测试是否卡顿21112',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'a9d09145d15a485686e557c50dcf2332',
																																																											name:
																																																												'测试是否卡顿21113',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'e5aeaea7546b462c91f997b5110a4e8b',
																																																											name:
																																																												'测试是否卡顿21114',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'0269287010654865a7b94a07595e069f',
																																																											name:
																																																												'测试是否卡顿21115',
																																																											value: 0,
																																																											children: null
																																																										}
																																																									]
																																																								},
																																																								{
																																																									uuid:
																																																										'3c992a2f89004885891ead3fcb5e588c',
																																																									name:
																																																										'测试是否卡顿2112',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'1c7cf05cba3c407781547b3cf6ed75df',
																																																											name:
																																																												'测试是否卡顿21121',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'0ebf17fd6b864e01ad081f5c9f2c67f2',
																																																											name:
																																																												'测试是否卡顿21122',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'd10218687018486bbef5d920afe8f3c2',
																																																											name:
																																																												'测试是否卡顿21123',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'fe22b84e9bd940158a2d74964e6618ed',
																																																											name:
																																																												'测试是否卡顿21124',
																																																											value: 0,
																																																											children: null
																																																										},
																																																										{
																																																											uuid:
																																																												'f1f793eecbd44e08a63767b99174afab',
																																																											name:
																																																												'测试是否卡顿21125',
																																																											value: 0,
																																																											children: null
																																																										}
																																																									]
																																																								}
																																																							]
																																																						},
																																																						{
																																																							uuid:
																																																								'c0288a6730464fbaba15331bf8ac8d0b',
																																																							name:
																																																								'测试是否卡顿212',
																																																							value: 0,
																																																							children: [
																																																								{
																																																									uuid:
																																																										'521c2d3f00dc44f3a3565b09f9230ff5',
																																																									name:
																																																										'测试是否卡顿2121',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'd6c8a744174541f78d241beb44b6568c',
																																																											name:
																																																												'测试是否卡顿21211',
																																																											value: 0,
																																																											children: [
																																																												{
																																																													uuid:
																																																														'6e6124fca4d74df090d08302f7cbb781',
																																																													name:
																																																														'测试是否卡顿1',
																																																													value: 0,
																																																													children: [
																																																														{
																																																															uuid:
																																																																'c758120d6ab94c2d880dfa4a279e11d9',
																																																															name:
																																																																'测试是否卡顿11',
																																																															value: 0,
																																																															children: [
																																																																{
																																																																	uuid:
																																																																		'de588ea2718543e0915764f01003cdac',
																																																																	name:
																																																																		'测试是否卡顿111',
																																																																	value: 0,
																																																																	children: [
																																																																		{
																																																																			uuid:
																																																																				'7aa1b22dddcd4e6ebb2a36b2fa1b6a2d',
																																																																			name:
																																																																				'测试是否卡顿1111',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'2ae33b109398427483f25cd0e8471ea9',
																																																																					name:
																																																																						'测试是否卡顿11111',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'3059ffdb88464a6c8ddcb5f46e5155ff',
																																																																					name:
																																																																						'测试是否卡顿11112',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'ab79794beaa747a7b993305376f1eb77',
																																																																					name:
																																																																						'测试是否卡顿11113',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'34b339bb68f946ffb9e9f3a385227587',
																																																																					name:
																																																																						'测试是否卡顿11114',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'4001b08c11bf4a3cbb4b13dd56cb691a',
																																																																					name:
																																																																						'测试是否卡顿11115',
																																																																					value: 0,
																																																																					children: null
																																																																				}
																																																																			]
																																																																		},
																																																																		{
																																																																			uuid:
																																																																				'829eca65547c44fd8c3811ccfb5cfa6b',
																																																																			name:
																																																																				'测试是否卡顿1112',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'053e4dc86e6445148ed4ec173dbd7f4f',
																																																																					name:
																																																																						'测试是否卡顿11121',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'6bbd53fbb89d4508801c6157e80c198b',
																																																																					name:
																																																																						'测试是否卡顿11122',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'd07d2747c2294871b19893f428f612d8',
																																																																					name:
																																																																						'测试是否卡顿11123',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'b7aa8955503643a189a27b062e83107f',
																																																																					name:
																																																																						'测试是否卡顿11124',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'f940ba138b7342109d1591e43d715414',
																																																																					name:
																																																																						'测试是否卡顿11125',
																																																																					value: 0,
																																																																					children: null
																																																																				}
																																																																			]
																																																																		}
																																																																	]
																																																																},
																																																																{
																																																																	uuid:
																																																																		'0d23830659004f16918aa96fa3bb808b',
																																																																	name:
																																																																		'测试是否卡顿112',
																																																																	value: 0,
																																																																	children: [
																																																																		{
																																																																			uuid:
																																																																				'fb92f251c79b48808c43a5096a66011a',
																																																																			name:
																																																																				'测试是否卡顿1121',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'76c6610c778c48a2b57e9105fb4144a5',
																																																																					name:
																																																																						'测试是否卡顿11211',
																																																																					value: 0,
																																																																					children: null
																																																																				}
																																																																			]
																																																																		}
																																																																	]
																																																																}
																																																															]
																																																														}
																																																													]
																																																												},
																																																												{
																																																													uuid:
																																																														'7702c06d625e454eb6a2dd5f4d791cc4',
																																																													name:
																																																														'测试是否卡顿2',
																																																													value: 0,
																																																													children: [
																																																														{
																																																															uuid:
																																																																'53ca2c9722764f0087babc1162fd51e2',
																																																															name:
																																																																'测试是否卡顿21',
																																																															value: 0,
																																																															children: [
																																																																{
																																																																	uuid:
																																																																		'3412e824e6bc40199b8816c1922ffb97',
																																																																	name:
																																																																		'测试是否卡顿211',
																																																																	value: 0,
																																																																	children: [
																																																																		{
																																																																			uuid:
																																																																				'ab3d21a95fa54b7697f5bf1bde49265a',
																																																																			name:
																																																																				'测试是否卡顿2111',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'0f4bc21d21dd4cc5ae68048796957cc5',
																																																																					name:
																																																																						'测试是否卡顿21111',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'0cc6d0e80d8a4206875d0cfc7b05e162',
																																																																					name:
																																																																						'测试是否卡顿21112',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'fdd92950c5b543e3aedbd4d74006d460',
																																																																					name:
																																																																						'测试是否卡顿21113',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'5abc993b93924354ae9d9866cfcf45c2',
																																																																					name:
																																																																						'测试是否卡顿21114',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'983991718864468388fc3b9b1d04639f',
																																																																					name:
																																																																						'测试是否卡顿21115',
																																																																					value: 0,
																																																																					children: null
																																																																				}
																																																																			]
																																																																		},
																																																																		{
																																																																			uuid:
																																																																				'958a68f683874233911cf9ec4cb776ff',
																																																																			name:
																																																																				'测试是否卡顿2112',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'57c4cc1adb1342f0b5bd1068b14050a3',
																																																																					name:
																																																																						'测试是否卡顿21121',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'6a83b25ff348438bab7bfdfe310a3132',
																																																																					name:
																																																																						'测试是否卡顿21122',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'14bc6685d88b4961a65cdf144b4b48e9',
																																																																					name:
																																																																						'测试是否卡顿21123',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'83100ea77a7f44f290fce982e2524da9',
																																																																					name:
																																																																						'测试是否卡顿21124',
																																																																					value: 0,
																																																																					children: null
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'cfe77410c1db495aacd39df27f329ad4',
																																																																					name:
																																																																						'测试是否卡顿21125',
																																																																					value: 0,
																																																																					children: null
																																																																				}
																																																																			]
																																																																		}
																																																																	]
																																																																},
																																																																{
																																																																	uuid:
																																																																		'429cba3cfd6845d3980b69f49a2b3ac6',
																																																																	name:
																																																																		'测试是否卡顿212',
																																																																	value: 0,
																																																																	children: [
																																																																		{
																																																																			uuid:
																																																																				'fa266b77270e41c4a96a9274cbe29947',
																																																																			name:
																																																																				'测试是否卡顿2121',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'a5389da209b042fa9699dc3cbbfac24d',
																																																																					name:
																																																																						'测试是否卡顿21211',
																																																																					value: 0,
																																																																					children: [
																																																																						{
																																																																							uuid:
																																																																								'c721f40ebe3141a19c88e2279b5681d7',
																																																																							name:
																																																																								'测试小数点',
																																																																							value: 0,
																																																																							children: null
																																																																						}
																																																																					]
																																																																				}
																																																																			]
																																																																		}
																																																																	]
																																																																}
																																																															]
																																																														}
																																																													]
																																																												}
																																																											]
																																																										}
																																																									]
																																																								}
																																																							]
																																																						}
																																																					]
																																																				}
																																																			]
																																																		}
																																																	]
																																																}
																																															]
																																														}
																																													]
																																												}
																																											]
																																										}
																																									]
																																								}
																																							]
																																						}
																																					]
																																				}
																																			]
																																		}
																																	]
																																}
																															]
																														}
																													]
																												}
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							uuid: '02266af7f62848059c824a2cb115b7dc',
							name: '三级目录122',
							value: 0,
							children: [
								{
									uuid: '4cdc61a1fe44499abd63e0e8bb48419e',
									name: '1231241542135132',
									value: 0,
									children: null
								},
								{
									uuid: '5e26840f69364b74aed4a4a853166d36',
									name: 'fvsdbsdbdsfbfds',
									value: 0,
									children: null
								}
							]
						},
						{
							uuid: '7d2c429e15074844a0d1f8ce9240dcc0',
							name: '热热热热1234',
							value: 0,
							children: [
								{
									uuid: '7776d1ea8bd5456f8597a2e902692ae5',
									name: 'testewr',
									value: 0,
									children: null
								},
								{
									uuid: '0d31d1a1c06c48cf9c6514b4259d1a22',
									name: 'dddd',
									value: 0,
									children: null
								},
								{
									uuid: 'ce1ce1a5b47a4eb6926d02ca91a3560e',
									name: 'fefefefefefefeefeefefef',
									value: 0,
									children: null
								},
								{
									uuid: 'f4d1eff3a275470ca7826549f4184461',
									name: 'ffff',
									value: 0,
									children: [
										{
											uuid: '89f70922a71743eb8d9a83dcabf2d86e',
											name: '1',
											value: 0,
											children: [
												{
													uuid: '4d1f92accc524e2f9aaeb0f9d89e5b44',
													name: '2',
													value: 0,
													children: [
														{
															uuid: '3b6589f8a3924bd2b6f391d575654676',
															name: '3',
															value: 0,
															children: [
																{
																	uuid: 'adf2065bfa1944549655fb95a6a0dde2',
																	name: '4',
																	value: 0,
																	children: [
																		{
																			uuid: 'e8155db413af4878b873de01ed69385f',
																			name: '5',
																			value: 0,
																			children: null
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											uuid: 'ea5089a4ab6b4c09aa8a15c1ccd2e223',
											name: '11',
											value: 0,
											children: [
												{
													uuid: 'b30b7d15169c4716b771d39a63ad4e46',
													name: '11',
													value: 0,
													children: [
														{
															uuid: '62f991c817fa4fbaae6c7c7cc44db2c4',
															name: '11',
															value: 0,
															children: [
																{
																	uuid: '490c08c7acfa488e87ede09c81542261',
																	name: '11',
																	value: 0,
																	children: [
																		{
																			uuid: '83ed1c88a8164ce9b0acc2a85c1704f8',
																			name: '11',
																			value: 0,
																			children: null
																		}
																	]
																}
															]
														}
													]
												},
												{
													uuid: 'ff5aaf7931ac41289209256d1a8b9592',
													name: '12',
													value: 0,
													children: null
												}
											]
										},
										{
											uuid: '387b70a4bcd1491aa22894df1a850bfe',
											name: '12',
											value: 0,
											children: null
										},
										{
											uuid: '8fbf0d405dbb4984bce1762a3b317f8c',
											name: '13',
											value: 0,
											children: null
										},
										{
											uuid: '6125ef6973b14844ad7e1e00a1d1d933',
											name: '14',
											value: 0,
											children: null
										},
										{
											uuid: '9ddbcacd88c54ecd99b27edf98e992fa',
											name: '56',
											value: 0,
											children: [
												{
													uuid: '45c8aafbb8ac448a9da2974d48140867',
													name: '测试是否卡顿1',
													value: 0,
													children: [
														{
															uuid: '5ddf268641014c34b8e438240d186b8c',
															name: '测试是否卡顿11',
															value: 0,
															children: [
																{
																	uuid: '7a0830dbcd714ff4a6718b0c52601aad',
																	name: '测试是否卡顿111',
																	value: 0,
																	children: [
																		{
																			uuid: '19ec3419331e4d749c52ecef561f84af',
																			name: '测试是否卡顿1111',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'5146b7c58454407ca5c2fc786dc172c4',
																					name: '测试是否卡顿11111',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'df52bb3c386f44c3a0ffa00ae512a041',
																					name: '测试是否卡顿11112',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'c99af7ed3c334b3ab0ce16b23d1f06c4',
																					name: '测试是否卡顿11113',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'0260be501e914686a8b1fdbc07a2bb7a',
																					name: '测试是否卡顿11114',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'2c4515892e87440e9251a4ee57cdd941',
																					name: '测试是否卡顿11115',
																					value: 0,
																					children: null
																				}
																			]
																		},
																		{
																			uuid: 'eedae1df5331424bbfb10089b6c8e81e',
																			name: '测试是否卡顿1112',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'6ce2db9d2da147d79fecd05373743379',
																					name: '测试是否卡顿11121',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'76c8bcdb87034f3bb97d038a611534fd',
																					name: '测试是否卡顿11122',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'd42a10deb3b34325a28a71b4ec50ba52',
																					name: '测试是否卡顿11123',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'14cca779648548a6bc478d30ddbdeb47',
																					name: '测试是否卡顿11124',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'58b8a5acc7e9485db5bf3c488af19a43',
																					name: '测试是否卡顿11125',
																					value: 0,
																					children: null
																				}
																			]
																		}
																	]
																},
																{
																	uuid: 'b507788f6f8a42388fe90217db1286dc',
																	name: '测试是否卡顿112',
																	value: 0,
																	children: [
																		{
																			uuid: '6740ddd33afd44d9ab1b758212720fc0',
																			name: '测试是否卡顿1121',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'2d3600fa94784d0591ff8314af0cece3',
																					name: '测试是否卡顿11211',
																					value: 0,
																					children: null
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													uuid: '4be73aeaf8544c9ea4269b763d4b6dab',
													name: '测试是否卡顿2',
													value: 0,
													children: [
														{
															uuid: 'a802e8e905f24b2cb1130fed52d143da',
															name: '测试是否卡顿21',
															value: 0,
															children: [
																{
																	uuid: 'ffe45be0e6fc4c388758051fa46f145e',
																	name: '测试是否卡顿211',
																	value: 0,
																	children: [
																		{
																			uuid: 'dfc53245fadc410bb28eccb0625891c6',
																			name: '测试是否卡顿2111',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'7448c97537de45a193be3d6f0f692c48',
																					name: '测试是否卡顿21111',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'139d2332699c493d971dcb8b3533933b',
																					name: '测试是否卡顿21112',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'c4d47a1df487482c9a40ebf19a9c169c',
																					name: '测试是否卡顿21113',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'dc8db6adfd0f47f585334610fb9d2eb5',
																					name: '测试是否卡顿21114',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'f5457769ed0442c988677e1749b54e47',
																					name: '测试是否卡顿21115',
																					value: 0,
																					children: null
																				}
																			]
																		},
																		{
																			uuid: '548036d80769490087d7e64aebd000ff',
																			name: '测试是否卡顿2112',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'36df399e98f142d59a1ce21ea7b15176',
																					name: '测试是否卡顿21121',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'cc72f87973a2498db69d851d2543af08',
																					name: '测试是否卡顿21122',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'91f8ec91f91d405a898d8b52df24f4e7',
																					name: '测试是否卡顿21123',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'99b4ab2a22d046f191a0a8ebcbc63429',
																					name: '测试是否卡顿21124',
																					value: 0,
																					children: null
																				},
																				{
																					uuid:
																						'c601bcdae82143c69b9761546e23eeed',
																					name: '测试是否卡顿21125',
																					value: 0,
																					children: null
																				}
																			]
																		}
																	]
																},
																{
																	uuid: 'f9f720822a49413097417935f81a685b',
																	name: '测试是否卡顿212',
																	value: 0,
																	children: [
																		{
																			uuid: '0fab2125647b4fcfb9ee72c6c6a6976c',
																			name: '测试是否卡顿2121',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'3cdcce492f4845f8b8cf55cd956a4f78',
																					name: '测试是否卡顿21211',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'16bca55ba48b4b4985f077a9ba04d307',
																							name: '测试是否卡顿1',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'c731a3eb0873441c87455b60ef33a8dd',
																									name: '测试是否卡顿11',
																									value: 0,
																									children: [
																										{
																											uuid:
																												'137913672b404325adeaa67eec274f58',
																											name: '测试是否卡顿111',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'02a7593386b74901ade3fd6e33358ada',
																													name:
																														'测试是否卡顿1111',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'df84e58d4d924dc0ac263ae8e8db55e9',
																															name:
																																'测试是否卡顿11111',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'b8e3e315bd5344969a0b8f021e339e04',
																															name:
																																'测试是否卡顿11112',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'2b143e47406e431bb0bd382729bd18ef',
																															name:
																																'测试是否卡顿11113',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'1042eec605c74a73aedae434d25de1c8',
																															name:
																																'测试是否卡顿11114',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'78a183eea8d845299c03069bc3793259',
																															name:
																																'测试是否卡顿11115',
																															value: 0,
																															children: null
																														}
																													]
																												},
																												{
																													uuid:
																														'87a75b3e61c14ef0a2d4a0c51747631c',
																													name:
																														'测试是否卡顿1112',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'023967cb4e024d41ab937776a3acd317',
																															name:
																																'测试是否卡顿11121',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'cb678687bdbc47068899d436ebbf5a4f',
																															name:
																																'测试是否卡顿11122',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'ab90935ce805405aa0416e8e9a109f79',
																															name:
																																'测试是否卡顿11123',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'0dca3a74a1d343c7b426ae22303e4e37',
																															name:
																																'测试是否卡顿11124',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'79610113dec84d72a0b779ebfcb900ba',
																															name:
																																'测试是否卡顿11125',
																															value: 0,
																															children: null
																														}
																													]
																												}
																											]
																										},
																										{
																											uuid:
																												'327fc2c758c8486794a08998a2587c64',
																											name: '测试是否卡顿112',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'99cd33d827254de98b9984e21f35a93e',
																													name:
																														'测试是否卡顿1121',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'31eff0a28e2847b0bd32f7acfdc2594b',
																															name:
																																'测试是否卡顿11211',
																															value: 0,
																															children: null
																														}
																													]
																												}
																											]
																										}
																									]
																								}
																							]
																						},
																						{
																							uuid:
																								'1ee1439f2112432f96593a63ed5ab8e3',
																							name: '测试是否卡顿2',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'674736c60c5840c79ec79efc329c5c69',
																									name: '测试是否卡顿21',
																									value: 0,
																									children: [
																										{
																											uuid:
																												'ddee429162e3464e8035d38a68073111',
																											name: '测试是否卡顿211',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'44e728d878804c07bda33434ddbb44d4',
																													name:
																														'测试是否卡顿2111',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'3533a4f814dc43e2863c2618170c186e',
																															name:
																																'测试是否卡顿21111',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'd4fea64c8d05458fbc9cfed9dbdf6bb6',
																															name:
																																'测试是否卡顿21112',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'efe84110740a4daa8864ad6bcf1bcf88',
																															name:
																																'测试是否卡顿21113',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'6d86a2d5cf8a4416a84d5174cce4143e',
																															name:
																																'测试是否卡顿21114',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'59667ea5e91f4ba3bdda0136573fd55d',
																															name:
																																'测试是否卡顿21115',
																															value: 0,
																															children: null
																														}
																													]
																												},
																												{
																													uuid:
																														'49c5b11e70804931b661dc65907fa6a7',
																													name:
																														'测试是否卡顿2112',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'89ff2b7da7f946419084439032ed8738',
																															name:
																																'测试是否卡顿21121',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'0dd6d67e3411403d8c57dc07b641da5d',
																															name:
																																'测试是否卡顿21122',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'be605f25338743a3b671af7df6a3d89a',
																															name:
																																'测试是否卡顿21123',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'115f3a69d97c42daaba4a13b55f61f02',
																															name:
																																'测试是否卡顿21124',
																															value: 0,
																															children: null
																														},
																														{
																															uuid:
																																'43ad43afb80247668f6abc5225917fae',
																															name:
																																'测试是否卡顿21125',
																															value: 0,
																															children: null
																														}
																													]
																												}
																											]
																										},
																										{
																											uuid:
																												'be451053f3d14c29b9e3ad7f648263b5',
																											name: '测试是否卡顿212',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'761f23465b0f4f9a8d03d27c3ebdc102',
																													name:
																														'测试是否卡顿2121',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'315c744866fd4a6ea9a3c0d5cc95872f',
																															name:
																																'测试是否卡顿21211',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'1cbb451f2d464ea393e8bace3e200f46',
																																	name:
																																		'测试是否卡顿1',
																																	value: 0,
																																	children: [
																																		{
																																			uuid:
																																				'3ab3af39968541c08744654e1ec4c5b0',
																																			name:
																																				'测试是否卡顿11',
																																			value: 0,
																																			children: [
																																				{
																																					uuid:
																																						'8bae4015d8a54415b3103fdd48d56cdd',
																																					name:
																																						'测试是否卡顿111',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'7b9608048b18499686224a02f27733d2',
																																							name:
																																								'测试是否卡顿1111',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'7e475910fbdd4b3a895063d026a4b80d',
																																									name:
																																										'测试是否卡顿11111',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'7af08e5e404c4b2787839b6c10a3a4c8',
																																									name:
																																										'测试是否卡顿11112',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'e6cd28b597244cf2bd50a2acc54a9e0b',
																																									name:
																																										'测试是否卡顿11113',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'61506167b4f844ccaa5de46eba824fef',
																																									name:
																																										'测试是否卡顿11114',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'd9c91b1a3ee040078068bbd9b7d047c0',
																																									name:
																																										'测试是否卡顿11115',
																																									value: 0,
																																									children: null
																																								}
																																							]
																																						},
																																						{
																																							uuid:
																																								'c7e6d0fc3a594ae6b8509f62585a471e',
																																							name:
																																								'测试是否卡顿1112',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'5c4ff17486d94bd98f5c4db89abcb673',
																																									name:
																																										'测试是否卡顿11121',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'191b86053e7c46348a11493fab9a4f78',
																																									name:
																																										'测试是否卡顿11122',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'485a9cee4e404ec88e18707867e0b812',
																																									name:
																																										'测试是否卡顿11123',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'c29ba418dd334b8e816a00234a88e00c',
																																									name:
																																										'测试是否卡顿11124',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'7d6ce60584904df19d3c35166960256e',
																																									name:
																																										'测试是否卡顿11125',
																																									value: 0,
																																									children: null
																																								}
																																							]
																																						}
																																					]
																																				},
																																				{
																																					uuid:
																																						'b6c78d30ad1d46a49165b7004e541edd',
																																					name:
																																						'测试是否卡顿112',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'3d9cfdb0d0384528a958adcba6150d88',
																																							name:
																																								'测试是否卡顿1121',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'56d5946eed3c4016a2fd9a4d221c83cd',
																																									name:
																																										'测试是否卡顿11211',
																																									value: 0,
																																									children: null
																																								}
																																							]
																																						}
																																					]
																																				}
																																			]
																																		}
																																	]
																																},
																																{
																																	uuid:
																																		'b038876b9a3647f5bde4e19a8a9fbca2',
																																	name:
																																		'测试是否卡顿2',
																																	value: 0,
																																	children: [
																																		{
																																			uuid:
																																				'1381af87b4b04b9fa0958008c84e58d7',
																																			name:
																																				'测试是否卡顿21',
																																			value: 0,
																																			children: [
																																				{
																																					uuid:
																																						'68e211a00d9340f8952dede337c2198a',
																																					name:
																																						'测试是否卡顿211',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'2c057737e2f841e6b53adb5283b9f035',
																																							name:
																																								'测试是否卡顿2111',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'e6e0d70d19bc47c9b4fee904f0360656',
																																									name:
																																										'测试是否卡顿21111',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'1885b4b8f06a47f591729aa8cfa0959a',
																																									name:
																																										'测试是否卡顿21112',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'03c9c3b0e9784a62b767277dcb13286c',
																																									name:
																																										'测试是否卡顿21113',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'541c4189fc02432a9f572fa0e3df7af1',
																																									name:
																																										'测试是否卡顿21114',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'd9b04aea222d41d799f5c5fc1ce6318d',
																																									name:
																																										'测试是否卡顿21115',
																																									value: 0,
																																									children: null
																																								}
																																							]
																																						},
																																						{
																																							uuid:
																																								'36c17ef5c8d5429fb61f7c7b456b5644',
																																							name:
																																								'测试是否卡顿2112',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'6e82ab79b674449a9c825440df2b68e0',
																																									name:
																																										'测试是否卡顿21121',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'b4dd30ce0e7e48719023c28790919a5b',
																																									name:
																																										'测试是否卡顿21122',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'342bdfe6cf5947ccafb889c796449578',
																																									name:
																																										'测试是否卡顿21123',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'3e11e58929b047b4b724468a9ce00d25',
																																									name:
																																										'测试是否卡顿21124',
																																									value: 0,
																																									children: null
																																								},
																																								{
																																									uuid:
																																										'4cc841bb540746658d7157203a3f74b8',
																																									name:
																																										'测试是否卡顿21125',
																																									value: 0,
																																									children: null
																																								}
																																							]
																																						}
																																					]
																																				},
																																				{
																																					uuid:
																																						'a1ac2fbe59bd404fb6dc00bbe894fbdf',
																																					name:
																																						'测试是否卡顿212',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'3f8b358059984a90abd1bebbead6639c',
																																							name:
																																								'测试是否卡顿2121',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'3822e7304f5c4190b54928af8f4984a7',
																																									name:
																																										'测试是否卡顿21211',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'6bfb4c8cc31140abad6b44d46c7091ed',
																																											name:
																																												'测试是否卡顿1',
																																											value: 0,
																																											children: [
																																												{
																																													uuid:
																																														'541e3c1b89634927968634285b366b01',
																																													name:
																																														'测试是否卡顿11',
																																													value: 0,
																																													children: [
																																														{
																																															uuid:
																																																'f85f795939bb46e09fed5155aa095432',
																																															name:
																																																'测试是否卡顿111',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'1fbf6f90cd4243848c25207221eccba7',
																																																	name:
																																																		'测试是否卡顿1111',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'fa644daf9fca4e4a95cf16f268367278',
																																																			name:
																																																				'测试是否卡顿11111',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'f05ccd6ee9194a90ad0bd110cc6c530c',
																																																			name:
																																																				'测试是否卡顿11112',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'9d493720d8a647b09055378e3eb50c98',
																																																			name:
																																																				'测试是否卡顿11113',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'6cbb5283abb64d1a851376aec349cee1',
																																																			name:
																																																				'测试是否卡顿11114',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'6739e781c4c743eab3badbcfbd8d28f9',
																																																			name:
																																																				'测试是否卡顿11115',
																																																			value: 0,
																																																			children: null
																																																		}
																																																	]
																																																},
																																																{
																																																	uuid:
																																																		'3c4035c2bfc94e679f61df6f35e364d2',
																																																	name:
																																																		'测试是否卡顿1112',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'fc0f170599c1452894a5775af8fb36bf',
																																																			name:
																																																				'测试是否卡顿11121',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'28cc242924bd4f468a92fc34fa52fa44',
																																																			name:
																																																				'测试是否卡顿11122',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'4f7e0e57d47a45c1b3761824ad174e93',
																																																			name:
																																																				'测试是否卡顿11123',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'0e78ef4c201041df885ef09634530ce3',
																																																			name:
																																																				'测试是否卡顿11124',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'5b6a694985904fc8b10b687a09be723b',
																																																			name:
																																																				'测试是否卡顿11125',
																																																			value: 0,
																																																			children: null
																																																		}
																																																	]
																																																}
																																															]
																																														},
																																														{
																																															uuid:
																																																'1085fc3e4d5142dea5aa0097ccf1477b',
																																															name:
																																																'测试是否卡顿112',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'dcbd6204437248dfb152540641ec3eac',
																																																	name:
																																																		'测试是否卡顿1121',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'7120e694dcba4fa1a3dd78fc22d5ed97',
																																																			name:
																																																				'测试是否卡顿11211',
																																																			value: 0,
																																																			children: null
																																																		}
																																																	]
																																																}
																																															]
																																														}
																																													]
																																												}
																																											]
																																										},
																																										{
																																											uuid:
																																												'e1478ef0a0bf49d1a3ead0d426e34574',
																																											name:
																																												'测试是否卡顿2',
																																											value: 0,
																																											children: [
																																												{
																																													uuid:
																																														'28543adc3ba04f6396aba04e83ae99e9',
																																													name:
																																														'测试是否卡顿21',
																																													value: 0,
																																													children: [
																																														{
																																															uuid:
																																																'36b7363949964b4db074140f527deb51',
																																															name:
																																																'测试是否卡顿211',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'2d3ca035497c49df89c6ec460d72f00b',
																																																	name:
																																																		'测试是否卡顿2111',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'b8f86feed1ba4ace85534f252358705d',
																																																			name:
																																																				'测试是否卡顿21111',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'89cf4f1021da4ba1be26b8aff6f73e2d',
																																																			name:
																																																				'测试是否卡顿21112',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'482dcae0323344789aa42a6cc88670ed',
																																																			name:
																																																				'测试是否卡顿21113',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'0f928fd335c54929b9f985a1cfdc0ffb',
																																																			name:
																																																				'测试是否卡顿21114',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'b2ffe2932e2a4b58919b679d1323b07b',
																																																			name:
																																																				'测试是否卡顿21115',
																																																			value: 0,
																																																			children: null
																																																		}
																																																	]
																																																},
																																																{
																																																	uuid:
																																																		'f082e9c34fd343748cec9efede6c03b6',
																																																	name:
																																																		'测试是否卡顿2112',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'8b836c27f7ee4e2eae8f29d85aafe2dd',
																																																			name:
																																																				'测试是否卡顿21121',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'04fbe8068824429b8c5fb245731fc82d',
																																																			name:
																																																				'测试是否卡顿21122',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'50b5d4e08c374ab88c7000521054e015',
																																																			name:
																																																				'测试是否卡顿21123',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'6bffedd84ef6451db1bc85548d0bf697',
																																																			name:
																																																				'测试是否卡顿21124',
																																																			value: 0,
																																																			children: null
																																																		},
																																																		{
																																																			uuid:
																																																				'7d7dd07f5d3f4c8e92dc1c81cec116c4',
																																																			name:
																																																				'测试是否卡顿21125',
																																																			value: 0,
																																																			children: null
																																																		}
																																																	]
																																																}
																																															]
																																														},
																																														{
																																															uuid:
																																																'986122586ff34ba884c2fcb7d52cc00b',
																																															name:
																																																'测试是否卡顿212',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'ff5c2d7ab714481c89bca3c012244949',
																																																	name:
																																																		'测试是否卡顿2121',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'57b5af1584f94808b3e14d3b7ac2dbf9',
																																																			name:
																																																				'测试是否卡顿21211',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'424f5332475f4b1fa5c80b1096bcefba',
																																																					name:
																																																						'测试是否卡顿1',
																																																					value: 0,
																																																					children: [
																																																						{
																																																							uuid:
																																																								'fc6ce43a835f4c37897490ac9da6ba85',
																																																							name:
																																																								'测试是否卡顿11',
																																																							value: 0,
																																																							children: [
																																																								{
																																																									uuid:
																																																										'3fc86b875d3a4edfbce29fbad6918226',
																																																									name:
																																																										'测试是否卡顿111',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'24a093eec068468ba8974dc8e436947b',
																																																											name:
																																																												'测试是否卡顿1111',
																																																											value: 0,
																																																											children: [
																																																												{
																																																													uuid:
																																																														'93829648b0014b168b6dc5dee3d8ba1e',
																																																													name:
																																																														'测试是否卡顿11111',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'4a03cdc058a24633bef6f140198f7a3f',
																																																													name:
																																																														'测试是否卡顿11112',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'ccb59bf27823423b92c7e1c5396043cf',
																																																													name:
																																																														'测试是否卡顿11113',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'559b9a28c9c84915b5c0ea1850ca1695',
																																																													name:
																																																														'测试是否卡顿11114',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'eb3702deba094c32b751a353e3b72f22',
																																																													name:
																																																														'测试是否卡顿11115',
																																																													value: 0,
																																																													children: null
																																																												}
																																																											]
																																																										},
																																																										{
																																																											uuid:
																																																												'7c6c02f4335742c38e810e5773384718',
																																																											name:
																																																												'测试是否卡顿1112',
																																																											value: 0,
																																																											children: [
																																																												{
																																																													uuid:
																																																														'6e69b0dbde1547859e2987524da34850',
																																																													name:
																																																														'测试是否卡顿11121',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'e431dd7b74364d2e8b8b8155a09675f3',
																																																													name:
																																																														'测试是否卡顿11122',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'a544b1afefe54f74b6927868eaf7135e',
																																																													name:
																																																														'测试是否卡顿11123',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'bb0aec95a8034952b4429171e8745f47',
																																																													name:
																																																														'测试是否卡顿11124',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'8586f8c6c0504e3c9a5b6813e58b0d8b',
																																																													name:
																																																														'测试是否卡顿11125',
																																																													value: 0,
																																																													children: null
																																																												}
																																																											]
																																																										}
																																																									]
																																																								},
																																																								{
																																																									uuid:
																																																										'1fb1f4b348bf4381a461be5dc7eb187d',
																																																									name:
																																																										'测试是否卡顿112',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'83b0ad8915464e9d8e1ad9d89e71f0cb',
																																																											name:
																																																												'测试是否卡顿1121',
																																																											value: 0,
																																																											children: [
																																																												{
																																																													uuid:
																																																														'b027f62a1e284856a64514067f4f9745',
																																																													name:
																																																														'测试是否卡顿11211',
																																																													value: 0,
																																																													children: null
																																																												}
																																																											]
																																																										}
																																																									]
																																																								}
																																																							]
																																																						}
																																																					]
																																																				},
																																																				{
																																																					uuid:
																																																						'55f17c70df884d959a48f875b49043d3',
																																																					name:
																																																						'测试是否卡顿2',
																																																					value: 0,
																																																					children: [
																																																						{
																																																							uuid:
																																																								'2f840da3d383443aa0408515d1c0e96c',
																																																							name:
																																																								'测试是否卡顿21',
																																																							value: 0,
																																																							children: [
																																																								{
																																																									uuid:
																																																										'7d9e2f5964784c29b11f2c4357a00185',
																																																									name:
																																																										'测试是否卡顿211',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'd495e3a347a44813b73275a9f08e7b88',
																																																											name:
																																																												'测试是否卡顿2111',
																																																											value: 0,
																																																											children: [
																																																												{
																																																													uuid:
																																																														'392c97fa4efb407685127454d93ec3c7',
																																																													name:
																																																														'测试是否卡顿21111',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'd8a156c7adde44abac3dbb497a5f1cb9',
																																																													name:
																																																														'测试是否卡顿21112',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'0ddf1a759fff45ccbe7bb55adb40b194',
																																																													name:
																																																														'测试是否卡顿21113',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'2579f300351c4af3a3c4b64cb0633b8f',
																																																													name:
																																																														'测试是否卡顿21114',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'219423d5bd7045aa91dd7054094fcf8c',
																																																													name:
																																																														'测试是否卡顿21115',
																																																													value: 0,
																																																													children: null
																																																												}
																																																											]
																																																										},
																																																										{
																																																											uuid:
																																																												'52f768abbcae4215a621ae6683aa80e7',
																																																											name:
																																																												'测试是否卡顿2112',
																																																											value: 0,
																																																											children: [
																																																												{
																																																													uuid:
																																																														'394c7e2994644d65a821521713efbfc3',
																																																													name:
																																																														'测试是否卡顿21121',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'df03d8b71e694b81ad282698eed63360',
																																																													name:
																																																														'测试是否卡顿21122',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'a0a75faec2f648c59f2f7f4f6b5efafd',
																																																													name:
																																																														'测试是否卡顿21123',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'06bbfb0841594ffa91ee951136d56653',
																																																													name:
																																																														'测试是否卡顿21124',
																																																													value: 0,
																																																													children: null
																																																												},
																																																												{
																																																													uuid:
																																																														'0ebd048c59e44786a6dccde6f4cc7796',
																																																													name:
																																																														'测试是否卡顿21125',
																																																													value: 0,
																																																													children: null
																																																												}
																																																											]
																																																										}
																																																									]
																																																								},
																																																								{
																																																									uuid:
																																																										'43c3e0652b3f40f495db21442e517bf6',
																																																									name:
																																																										'测试是否卡顿212',
																																																									value: 0,
																																																									children: [
																																																										{
																																																											uuid:
																																																												'157ce16afa1f4358b0254b5dd4d5a8bb',
																																																											name:
																																																												'测试是否卡顿2121',
																																																											value: 0,
																																																											children: [
																																																												{
																																																													uuid:
																																																														'ba454b1da48541c29ee97cb8f84ee101',
																																																													name:
																																																														'测试是否卡顿21211',
																																																													value: 0,
																																																													children: [
																																																														{
																																																															uuid:
																																																																'fa944ae855944a79a5d4de9d2cb8b656',
																																																															name:
																																																																'测试是否卡顿1',
																																																															value: 0,
																																																															children: [
																																																																{
																																																																	uuid:
																																																																		'6df3a0a5e5074409b8160f84b68c1a49',
																																																																	name:
																																																																		'测试是否卡顿11',
																																																																	value: 0,
																																																																	children: [
																																																																		{
																																																																			uuid:
																																																																				'd014fa6c21314ffa93c24f61c1501dca',
																																																																			name:
																																																																				'测试是否卡顿111',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'05e1bcb69a4f48c7b9e870737cc0ed1c',
																																																																					name:
																																																																						'测试是否卡顿1111',
																																																																					value: 0,
																																																																					children: [
																																																																						{
																																																																							uuid:
																																																																								'19124654af254e0298260d6e00892d5a',
																																																																							name:
																																																																								'测试是否卡顿11111',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'a89e480b30df4958a83761a1895089e6',
																																																																							name:
																																																																								'测试是否卡顿11112',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'246632fa8cc649809da4d2d42cc7bce0',
																																																																							name:
																																																																								'测试是否卡顿11113',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'687e16ba726c48c2a2a1443cbcdb1142',
																																																																							name:
																																																																								'测试是否卡顿11114',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'a279b43c25ae433a9579dd8ca9d2c535',
																																																																							name:
																																																																								'测试是否卡顿11115',
																																																																							value: 0,
																																																																							children: null
																																																																						}
																																																																					]
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'bc04f0b7eec44039bce027ce25fd6a10',
																																																																					name:
																																																																						'测试是否卡顿1112',
																																																																					value: 0,
																																																																					children: [
																																																																						{
																																																																							uuid:
																																																																								'f28c5be3edf74bada55d05a076d6295e',
																																																																							name:
																																																																								'测试是否卡顿11121',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'b668c67a603041e18ed0220dcad82a90',
																																																																							name:
																																																																								'测试是否卡顿11122',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'f11365b3e4224b6c9608efd5a54e6e4d',
																																																																							name:
																																																																								'测试是否卡顿11123',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'531c5530ba484a31ba8994b48a507b40',
																																																																							name:
																																																																								'测试是否卡顿11124',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'b681349cf5da4cd2bca16b18b416233a',
																																																																							name:
																																																																								'测试是否卡顿11125',
																																																																							value: 0,
																																																																							children: null
																																																																						}
																																																																					]
																																																																				}
																																																																			]
																																																																		},
																																																																		{
																																																																			uuid:
																																																																				'726d794d3f944d2a9c5c7cf1457b5f67',
																																																																			name:
																																																																				'测试是否卡顿112',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'f75bb4762def4b55bfab15cee53eefad',
																																																																					name:
																																																																						'测试是否卡顿1121',
																																																																					value: 0,
																																																																					children: [
																																																																						{
																																																																							uuid:
																																																																								'f419bbcdc37643a2b6efea388607fb9e',
																																																																							name:
																																																																								'测试是否卡顿11211',
																																																																							value: 0,
																																																																							children: null
																																																																						}
																																																																					]
																																																																				}
																																																																			]
																																																																		}
																																																																	]
																																																																}
																																																															]
																																																														},
																																																														{
																																																															uuid:
																																																																'276d9c0474414c6fa52f3691935b87d0',
																																																															name:
																																																																'测试是否卡顿2',
																																																															value: 0,
																																																															children: [
																																																																{
																																																																	uuid:
																																																																		'54de771adffe4668af41c326e350a891',
																																																																	name:
																																																																		'测试是否卡顿21',
																																																																	value: 0,
																																																																	children: [
																																																																		{
																																																																			uuid:
																																																																				'72140e0a178f431f9db2bb81a4e949c7',
																																																																			name:
																																																																				'测试是否卡顿211',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'73f63b0a309e4db399d3a164a1e0fd81',
																																																																					name:
																																																																						'测试是否卡顿2111',
																																																																					value: 0,
																																																																					children: [
																																																																						{
																																																																							uuid:
																																																																								'b4204f56380449a39b756f30c4b84653',
																																																																							name:
																																																																								'测试是否卡顿21111',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'2e6c1905b02640e689523bc643270feb',
																																																																							name:
																																																																								'测试是否卡顿21112',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'7a11d688223f449489f90c8d93bd231b',
																																																																							name:
																																																																								'测试是否卡顿21113',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'658c1ea169c14451affc6b13efa41ada',
																																																																							name:
																																																																								'测试是否卡顿21114',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'8b0cec0acfa342b1b3b7c83b71555b3b',
																																																																							name:
																																																																								'测试是否卡顿21115',
																																																																							value: 0,
																																																																							children: null
																																																																						}
																																																																					]
																																																																				},
																																																																				{
																																																																					uuid:
																																																																						'efc35ea2d520413ebe50836aa90391af',
																																																																					name:
																																																																						'测试是否卡顿2112',
																																																																					value: 0,
																																																																					children: [
																																																																						{
																																																																							uuid:
																																																																								'48d60ac36dbe47d3be51c7094fcf9bed',
																																																																							name:
																																																																								'测试是否卡顿21121',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'51366591817343e1a2f84e64b12ffb01',
																																																																							name:
																																																																								'测试是否卡顿21122',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'b39d9ec343434321bb471fbef2ee865a',
																																																																							name:
																																																																								'测试是否卡顿21123',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'5218e94be89549e2a84b7970f800531e',
																																																																							name:
																																																																								'测试是否卡顿21124',
																																																																							value: 0,
																																																																							children: null
																																																																						},
																																																																						{
																																																																							uuid:
																																																																								'15ccf11ffb2e4e85a5853c59b01b9d70',
																																																																							name:
																																																																								'测试是否卡顿21125',
																																																																							value: 0,
																																																																							children: null
																																																																						}
																																																																					]
																																																																				}
																																																																			]
																																																																		},
																																																																		{
																																																																			uuid:
																																																																				'8e1bdc63e90b4264bd2e3d949432a364',
																																																																			name:
																																																																				'测试是否卡顿212',
																																																																			value: 0,
																																																																			children: [
																																																																				{
																																																																					uuid:
																																																																						'0340ecc3861740f186164e8977612e08',
																																																																					name:
																																																																						'测试是否卡顿2121',
																																																																					value: 0,
																																																																					children: [
																																																																						{
																																																																							uuid:
																																																																								'ac3a0d1bee414e458bcb79ad8ec697c2',
																																																																							name:
																																																																								'测试是否卡顿21211',
																																																																							value: 0,
																																																																							children: null
																																																																						}
																																																																					]
																																																																				}
																																																																			]
																																																																		}
																																																																	]
																																																																}
																																																															]
																																																														}
																																																													]
																																																												}
																																																											]
																																																										}
																																																									]
																																																								}
																																																							]
																																																						}
																																																					]
																																																				}
																																																			]
																																																		}
																																																	]
																																																}
																																															]
																																														}
																																													]
																																												}
																																											]
																																										}
																																									]
																																								}
																																							]
																																						}
																																					]
																																				}
																																			]
																																		}
																																	]
																																}
																															]
																														}
																													]
																												}
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							uuid: 'aa2aacee9f8041d29f9bc1f1ac6641b5',
							name: '热热热热1',
							value: 0,
							children: [
								{
									uuid: 'd9ff07d9e1d44e17a3169fed61ba3f13',
									name: 'dddd',
									value: 0,
									children: null
								}
							]
						},
						{
							uuid: '936f605f8e224606976b560c476acab4',
							name: '热热热热2221',
							value: 0,
							children: null
						},
						{
							uuid: 'aa2a68b52fda4c2a8ac5f3ae802cfadf',
							name: 'test',
							value: 0,
							children: [
								{
									uuid: 'e6ca4a54b6864fa9a9eb03e6bbbf4db0',
									name: 'ggrrgr',
									value: 0,
									children: [
										{
											uuid: '14c536afcca742498569ea58e2559498',
											name: 'gergwg',
											value: 0,
											children: null
										},
										{
											uuid: '758550a9821d46a9bf9692284dfba121',
											name: 'oooo',
											value: 0,
											children: null
										}
									]
								}
							]
						},
						{
							uuid: '8564bf4a8696478b9cb1c2c868fe9ddb',
							name: '<]',
							value: 0,
							children: [
								{
									uuid: 'f94825bf71dd43369f16b7a0a46fb5ad',
									name: 'uerhgfiuwehfieqw',
									value: 0,
									children: null
								}
							]
						},
						{
							uuid: '7617f01a70614f82b70ef4261b5d0422',
							name: '<>',
							value: 0,
							children: null
						},
						{
							uuid: 'b7139078038a4e29985d0fc50cb8bee7',
							name: '\\\\',
							value: 0,
							children: null
						},
						{
							uuid: '98054d999ce84bf18200d05f7cc63356',
							name: '\\n',
							value: 0,
							children: null
						},
						{
							uuid: '96620f8f883d491f8d7f50caa1533b2d',
							name: 'zq1',
							value: 0,
							children: null
						},
						{
							uuid: '6b524234a5e44d5f8c3226522cad19e8',
							name: 'tttttttttttttttttttttttttttttt',
							value: 0,
							children: null
						},
						{
							uuid: '7a73ed84592e40c293bc030343b05548',
							name: 'string如来识家花',
							value: 0,
							children: null
						},
						{
							uuid: '1e6e1a0cf0504d02ad704fe8b85442a4',
							name: 'string们门红你育',
							value: 0,
							children: null
						},
						{
							uuid: '0ffdf134726e4bd18544f467a22d95e3',
							name: '计机书里支',
							value: 0,
							children: null
						},
						{
							uuid: '7888a97532dd4fe18b693233ef95e05f',
							name: '及离不府青',
							value: 0,
							children: null
						},
						{
							uuid: 'b0af0172999640b3a5a3eea5f925b712',
							name: '东声些民',
							value: 0,
							children: null
						},
						{
							uuid: '904bb1c913fb4ee1865200eae37ff5c4',
							name: '件光实矿水持',
							value: 0,
							children: null
						},
						{
							uuid: '8aee8c6aeb404f0498a6268072664c46',
							name: '眼周手层',
							value: 0,
							children: null
						},
						{
							uuid: '0dd1017dca48456893e3afadeb7d5325',
							name: '斯时步究内',
							value: 0,
							children: null
						},
						{
							uuid: '75a990c7a063418480bcf9da6a0d581b',
							name: '间性义义',
							value: 0,
							children: null
						},
						{
							uuid: '241078d4ed184cbca62881bef291304f',
							name: '周程非信使根造',
							value: 0,
							children: null
						},
						{
							uuid: '84baccdda18f4939bfee3a07a5bd8034',
							name: 'string3333',
							value: 0,
							children: null
						},
						{
							uuid: 'e43c21e2fbf141d887ee65b3c8f52d67',
							name: 'string',
							value: 0,
							children: null
						},
						{
							uuid: 'c89c691c24164d369be6a54ffdfc90a4',
							name: '/',
							value: 0,
							children: null
						},
						{
							uuid: '3405e5dfdf81456cabf5c43fe28fd223',
							name: '\\',
							value: 0,
							children: null
						},
						{
							uuid: '2317df53d9934b6181e390b0db018e8e',
							name: 'add',
							value: 0,
							children: null
						},
						{
							uuid: 'b6217bafee694de79aba5ef063ffcaad',
							name: 'add2',
							value: 0,
							children: [
								{
									uuid: 'dab5a01904cc41ea8e1e4f2ee2097dca',
									name: 'efef',
									value: 0,
									children: null
								}
							]
						},
						{
							uuid: '961e661815124357be58ec610f276381',
							name: 'y',
							value: 0,
							children: null
						},
						{
							uuid: 'a3e47eca55ac48e483fc7c7cf0376373',
							name: 'cwedfeawsfaffas、',
							value: 0,
							children: null
						},
						{
							uuid: '38aee46ce94041ecb53c9603b3544ab2',
							name: '示例1',
							value: 0,
							children: [
								{
									uuid: 'c053a9ac6e894cd7941de81ad666c8cb',
									name: '示例11',
									value: 0,
									children: [
										{
											uuid: '48f7e02c402b436687166903837fbf5f',
											name: '示例111',
											value: 0,
											children: [
												{
													uuid: '2d7c7e5aafb94d008ff617903534aeeb',
													name: '示例1111',
													value: 0,
													children: null
												},
												{
													uuid: '06d3ca66bec8492984fd677c43e296cc',
													name: '示例1112',
													value: 0,
													children: null
												}
											]
										},
										{
											uuid: '277817b7f512433e9620f7f60969d6db',
											name: '示例112',
											value: 0,
											children: [
												{
													uuid: '1506005ffddc427dbe5b63f5caf2a1ad',
													name: '示例1121',
													value: 0,
													children: null
												},
												{
													uuid: '9bea99c2b5b744b4b3a6c81dde3b4ced',
													name: '示例1122',
													value: 0,
													children: null
												}
											]
										}
									]
								},
								{
									uuid: 'b1ec5e48ec8348caa986c1d8f4117646',
									name: '示例12',
									value: 0,
									children: [
										{
											uuid: 'dc2f83d7550149e5810299b43a45fa0a',
											name: '示例121',
											value: 0,
											children: [
												{
													uuid: 'b1d7d1b7b9794d7c90ba34b29fe5d2b9',
													name: '示例1211',
													value: 0,
													children: null
												}
											]
										},
										{
											uuid: '7aa12036213e432b8b6dc0022066888a',
											name: '示例122',
											value: 0,
											children: [
												{
													uuid: '8c9ef0893dc9473fa42feaec1265fab5',
													name: '示例1222',
													value: 0,
													children: null
												}
											]
										}
									]
								}
							]
						},
						{
							uuid: 'a4f1c87865a84232ba296c07a1a15881',
							name: 'uerhgfiuwehfieqw',
							value: 0,
							children: null
						},
						{
							uuid: '59f446d6b54c4c88ba15352fbfee219d',
							name: 'uerhgfiuwe',
							value: 0,
							children: null
						},
						{
							uuid: 'e4bdb09ba64440a0ad4a02615ea60fea',
							name: 'uerhg',
							value: 0,
							children: null
						},
						{
							uuid: '368dde73ebd54fea8c31018edd751785',
							name: 'try',
							value: 0,
							children: null
						},
						{
							uuid: '3de7f36874d04c77b3dfe4ea08cab880',
							name: 'fff',
							value: 0,
							children: null
						},
						{
							uuid: '57667f530c14427693e93d4dc0d5cd8c',
							name: 'gggg',
							value: 0,
							children: null
						},
						{
							uuid: 'a6a8a96c13d846419914b2667dc4dee2',
							name: '测试是否卡顿1',
							value: 0,
							children: [
								{
									uuid: '23ca94440bec41c3bdb17f3a8ecbfee7',
									name: '测试是否卡顿11',
									value: 0,
									children: [
										{
											uuid: '882ec60f8df64d5bb3947505f3e91685',
											name: '测试是否卡顿111',
											value: 0,
											children: [
												{
													uuid: '719bbf4fd1584d3484ba586ef275dcb9',
													name: '测试是否卡顿1111',
													value: 0,
													children: [
														{
															uuid: 'fc74f5c878fa47e4a4414808a79fc8cf',
															name: '测试是否卡顿11111',
															value: 0,
															children: null
														},
														{
															uuid: 'bb4abd40f9ed4ddf90873e964ddd1414',
															name: '测试是否卡顿11112',
															value: 0,
															children: null
														},
														{
															uuid: '2b2bcfd2c9e648d4b5d52306a39c243a',
															name: '测试是否卡顿11113',
															value: 0,
															children: null
														},
														{
															uuid: '1025b8c922c74e3c90d5f3304d7b8745',
															name: '测试是否卡顿11114',
															value: 0,
															children: null
														},
														{
															uuid: 'ad31639b581b45b2aaef5e8a5859d20d',
															name: '测试是否卡顿11115',
															value: 0,
															children: null
														}
													]
												},
												{
													uuid: 'd6f9ec3548504ee6b5493becd2d0ec8b',
													name: '测试是否卡顿1112',
													value: 0,
													children: [
														{
															uuid: 'dbc9265d3bf545258a7ca0bae9bad066',
															name: '测试是否卡顿11121',
															value: 0,
															children: null
														},
														{
															uuid: '11d0f399aa194269b538db2089521467',
															name: '测试是否卡顿11122',
															value: 0,
															children: null
														},
														{
															uuid: '8e2e007e02854d278a89ea9aa5e19a0f',
															name: '测试是否卡顿11123',
															value: 0,
															children: null
														},
														{
															uuid: 'eddb479109594227b05388bb705c8b6a',
															name: '测试是否卡顿11124',
															value: 0,
															children: null
														},
														{
															uuid: '112a06acead149259a8c0984c85a5315',
															name: '测试是否卡顿11125',
															value: 0,
															children: null
														}
													]
												}
											]
										},
										{
											uuid: '4e525ca580654859ac66cd13519772cd',
											name: '测试是否卡顿112',
											value: 0,
											children: [
												{
													uuid: '8c27609ec9e641648fd877910b0836ed',
													name: '测试是否卡顿1121',
													value: 0,
													children: [
														{
															uuid: 'de54246210de4e59a8f51da5a31e2a95',
															name: '测试是否卡顿11211',
															value: 0,
															children: null
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							uuid: '67bb80fb3e474f1da1491bfe07adfb0c',
							name: '测试是否卡顿2',
							value: 0,
							children: [
								{
									uuid: '092205bfa3ff40d99ae1bff2f6d091c9',
									name: '测试是否卡顿21',
									value: 0,
									children: [
										{
											uuid: '7c38915f350f4be69d4f183c31ceb226',
											name: '测试是否卡顿211',
											value: 0,
											children: [
												{
													uuid: 'dd831e0a9f92473bb121f8657ab6cecf',
													name: '测试是否卡顿2111',
													value: 0,
													children: [
														{
															uuid: '18015b748d4c42c0ab0c942b034b4b8b',
															name: '测试是否卡顿21111',
															value: 0,
															children: null
														},
														{
															uuid: 'fa903cb3d4714dcab33eb552886c4a82',
															name: '测试是否卡顿21112',
															value: 0,
															children: null
														},
														{
															uuid: 'ce22772231e64ab290cca52fb168b428',
															name: '测试是否卡顿21113',
															value: 0,
															children: null
														},
														{
															uuid: '73ca1e5e77834cdfb07b30f2be547eb8',
															name: '测试是否卡顿21114',
															value: 0,
															children: null
														},
														{
															uuid: '38442a0bb8ad493890bed3f6e7eae586',
															name: '测试是否卡顿21115',
															value: 0,
															children: null
														}
													]
												},
												{
													uuid: 'fffc0ba2b4b547c7b33eb37abed6d010',
													name: '测试是否卡顿2112',
													value: 0,
													children: [
														{
															uuid: 'a1db7de3eb5d4ed28bfda052432cee89',
															name: '测试是否卡顿21121',
															value: 0,
															children: null
														},
														{
															uuid: '3fa5dd403fe74920bbf6f19d6098775e',
															name: '测试是否卡顿21122',
															value: 0,
															children: null
														},
														{
															uuid: '1953182a8c0846f799e33012a140f4de',
															name: '测试是否卡顿21123',
															value: 0,
															children: null
														},
														{
															uuid: '260b5286322440df944e3ac14d7a9458',
															name: '测试是否卡顿21124',
															value: 0,
															children: null
														},
														{
															uuid: '9b10440d43f54b69ad552a0b6b3ad608',
															name: '测试是否卡顿21125',
															value: 0,
															children: [
																{
																	uuid: 'a8431d330a404284acc1d75965dd76ec',
																	name: '测试是否卡顿1',
																	value: 0,
																	children: [
																		{
																			uuid: '99c1e67928184cc1a9b0886423f1ac1c',
																			name: '测试是否卡顿11',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'7fdb400463b24be9b723f04735623e24',
																					name: '测试是否卡顿111',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'a626df62c6f84247ab2d8fb3c58c9e50',
																							name: '测试是否卡顿1111',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'5c1a0077af624ceea04a1a2697fb3a06',
																									name: '测试是否卡顿11111',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'c520981f5fd5486f9f759f5e86197eb0',
																									name: '测试是否卡顿11112',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'3df3b4fc79824ce5ad50e81ae2c1855b',
																									name: '测试是否卡顿11113',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'39a8971781c1451881434fd14feecd02',
																									name: '测试是否卡顿11114',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'3a96e169de454e9ba9a1d6c12cd24b58',
																									name: '测试是否卡顿11115',
																									value: 0,
																									children: null
																								}
																							]
																						},
																						{
																							uuid:
																								'875ef2a0ab3148e4bbb159f1842a6673',
																							name: '测试是否卡顿1112',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'2020f6c3a51a4e92bb4fbe8d786451d2',
																									name: '测试是否卡顿11121',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'e77ee1368af345caac86f6520e9214c0',
																									name: '测试是否卡顿11122',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'727e85db3b45431b9e44498d49a1763b',
																									name: '测试是否卡顿11123',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'23f5b787e79542cca795eabcc93e0064',
																									name: '测试是否卡顿11124',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'863648f21fc146eebae2e3434c8c0889',
																									name: '测试是否卡顿11125',
																									value: 0,
																									children: null
																								}
																							]
																						}
																					]
																				},
																				{
																					uuid:
																						'87ef06f69e9946af8c8b213f1ce5fa35',
																					name: '测试是否卡顿112',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'79ab0d23ce87482bbe7a363f7148f731',
																							name: '测试是否卡顿1121',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'2aba974dee03474e9b2e1ea98d7d1935',
																									name: '测试是否卡顿11211',
																									value: 0,
																									children: null
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	uuid: '43c7096c1f9c43c9beff970ac953eec6',
																	name: '测试是否卡顿2',
																	value: 0,
																	children: [
																		{
																			uuid: '853ba8acd4894ea1a2a66a5f3b353e12',
																			name: '测试是否卡顿21',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'6aa5aa5261e0459aacd38eeed044f97f',
																					name: '测试是否卡顿211',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'c151f303f2d147e9a88fbf0abd2ae7aa',
																							name: '测试是否卡顿2111',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'10b767b74ea04231a51dd0c719910de0',
																									name: '测试是否卡顿21111',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'0fd3997706dd4f7f8f92a2e513e3eb38',
																									name: '测试是否卡顿21112',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'1318350e33f5474e9b8f98e61752fa0f',
																									name: '测试是否卡顿21113',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'4d24aebc6dda4db3975dd28b7ed1d546',
																									name: '测试是否卡顿21114',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'26062d8ed6dd4acea248fac5e8ab50ec',
																									name: '测试是否卡顿21115',
																									value: 0,
																									children: null
																								}
																							]
																						},
																						{
																							uuid:
																								'e7ac4f47b64245879333cf9b26e7351e',
																							name: '测试是否卡顿2112',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'8f0fb75180fe48af90dff6a6a2db1af6',
																									name: '测试是否卡顿21121',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'22f8c6033b9d447d8f0f1c4aa9698dc7',
																									name: '测试是否卡顿21122',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'd4dc3a94ae434c66aa2a5df532b25a0f',
																									name: '测试是否卡顿21123',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'0dd80763a4544b8bbeae3872581b10a9',
																									name: '测试是否卡顿21124',
																									value: 0,
																									children: null
																								},
																								{
																									uuid:
																										'6d92e7785c4c4ca1aa739fcc6161d5ba',
																									name: '测试是否卡顿21125',
																									value: 0,
																									children: null
																								}
																							]
																						}
																					]
																				},
																				{
																					uuid:
																						'b2a52034cf8b4456abe9b306ea096567',
																					name: '测试是否卡顿212',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'd9d0cb1d638d471995e4500ddabdc5e8',
																							name: '测试是否卡顿2121',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'fe9b9c5182384f5698e5e1200691e3d7',
																									name: '测试是否卡顿21211',
																									value: 0,
																									children: null
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	uuid: '6f5a83366efc4df799f2a80877ac16d5',
																	name: 'a',
																	value: 0,
																	children: [
																		{
																			uuid: '67215bc3e0d84621a82858f31fa7b8c1',
																			name: 'b',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'98645556d45048d6a8dfa0857d1cf478',
																					name: 'c',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'c5a45d4d93d74cad9b7d5f8928768532',
																							name: 'd3',
																							value: 0,
																							children: null
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															uuid: '993f1dd238584a85ae16e89cd2a4c788',
															name: 'a',
															value: 0,
															children: [
																{
																	uuid: '73890e16641e40c3a9af2964eb90fe99',
																	name: 'b',
																	value: 0,
																	children: [
																		{
																			uuid: '5ba91e2e0d3147ac82089607bce4cbd7',
																			name: 'c',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'82349de78a2542678ebab6b92d24614d',
																					name: 'd3',
																					value: 0,
																					children: null
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											uuid: '4050ec140d2e4b8c880cdcf016c59e90',
											name: '测试是否卡顿212',
											value: 0,
											children: [
												{
													uuid: '13c0de27d7294c6d85a6400dbc5dcc77',
													name: '测试是否卡顿2121',
													value: 0,
													children: [
														{
															uuid: '4092c978aead4fa4b449b5358ae07f59',
															name: '测试是否卡顿21211',
															value: 0,
															children: null
														},
														{
															uuid: '6b854663928746ae9b75f245a95e51ef',
															name: '测试是否卡顿1',
															value: 0,
															children: [
																{
																	uuid: '8b77781e1999469ead9fd8803a568e02',
																	name: '测试是否卡顿11',
																	value: 0,
																	children: [
																		{
																			uuid: 'a818798ee7184274b6c34937231b0df7',
																			name: '测试是否卡顿111',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'b18b594dfe704c55a35d32e3fe752331',
																					name: '测试是否卡顿1111',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'8c4a7ed0c66c4ef99b71a4b1052cce2b',
																							name: '测试是否卡顿11111',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'7810fc9e2cea4624ba2b2700a5b05b95',
																							name: '测试是否卡顿11112',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'c849c2154c2345689d075003acd376d2',
																							name: '测试是否卡顿11113',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'c182c0223520448f8231ae9e82296b08',
																							name: '测试是否卡顿11114',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'c5b7cefa06d244b8ad7de5b9f73f694c',
																							name: '测试是否卡顿11115',
																							value: 0,
																							children: null
																						}
																					]
																				},
																				{
																					uuid:
																						'fa330a2dd8d44f1ea812d71fe8f40e96',
																					name: '测试是否卡顿1112',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'9ed7042e0a304a1d804412618bdf8b81',
																							name: '测试是否卡顿11121',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'62b0976abf7041139c0fc490b9354fa9',
																							name: '测试是否卡顿11122',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'dbbae7a7c014409eabb3b5c2f480ccd6',
																							name: '测试是否卡顿11123',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'739e38b9ec9f497eb8756c3a21931367',
																							name: '测试是否卡顿11124',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'd770a4b5d6e248979a83edffb0f311fb',
																							name: '测试是否卡顿11125',
																							value: 0,
																							children: null
																						}
																					]
																				}
																			]
																		},
																		{
																			uuid: '3c174ccb1edd4345a7894cdc88a28cc6',
																			name: '测试是否卡顿112',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'729aa85c500a499292c22da416702693',
																					name: '测试是否卡顿1121',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'b22b53b4ea38466bb4eea5ba927d54a8',
																							name: '测试是否卡顿11211',
																							value: 0,
																							children: null
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															uuid: 'ff5c913d2106477c95ac7c8d3f4b2e25',
															name: '测试是否卡顿2',
															value: 0,
															children: [
																{
																	uuid: 'a28dcaa201bf4d72b8ce24ca59c35336',
																	name: '测试是否卡顿21',
																	value: 0,
																	children: [
																		{
																			uuid: '3051c8de424244d19b08e1285937bf92',
																			name: '测试是否卡顿211',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'c8b38617e3154ebf8067db6b45c84c8f',
																					name: '测试是否卡顿2111',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'942a01d3ba894cf08925e886639ee37a',
																							name: '测试是否卡顿21111',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'6fcf644b1bf8429998310e0cdcb45603',
																							name: '测试是否卡顿21112',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'a8a09317204d467aaa575fe659026f7d',
																							name: '测试是否卡顿21113',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'52c20a45e0234faaae314db1c47b8e46',
																							name: '测试是否卡顿21114',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'112d7003900b48d3ab6f65f81d85876d',
																							name: '测试是否卡顿21115',
																							value: 0,
																							children: null
																						}
																					]
																				},
																				{
																					uuid:
																						'35850a7364a84b678b1871c5623f17cf',
																					name: '测试是否卡顿2112',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'463c2a14e9ae44b7ad11b0dd144f7296',
																							name: '测试是否卡顿21121',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'306a63d04c15450bb1dbc2017b98d8ff',
																							name: '测试是否卡顿21122',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'd3c3dec6504e45e0be4b1fc04f65d606',
																							name: '测试是否卡顿21123',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'aaabcae9b92f4c969fde12ffddd4eb70',
																							name: '测试是否卡顿21124',
																							value: 0,
																							children: null
																						},
																						{
																							uuid:
																								'5d82d12901264bb099f0428660656a2f',
																							name: '测试是否卡顿21125',
																							value: 0,
																							children: null
																						}
																					]
																				}
																			]
																		},
																		{
																			uuid: '892798dd1d5146069ee9e2bf3c9f2b43',
																			name: '测试是否卡顿212',
																			value: 0,
																			children: [
																				{
																					uuid:
																						'0e0690a895fc4e3dbdca5b17ed15418d',
																					name: '测试是否卡顿2121',
																					value: 0,
																					children: [
																						{
																							uuid:
																								'83ed566583eb42b88c310bed1cc0a86a',
																							name: '测试是否卡顿21211',
																							value: 0,
																							children: [
																								{
																									uuid:
																										'37fe9a3544274493850161704913ae2a',
																									name: '测试是否卡顿1',
																									value: 0,
																									children: [
																										{
																											uuid:
																												'313bc68859c443efb966fc678cc18080',
																											name: '测试是否卡顿11',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'3dca4456943d4dcda85f823097816db1',
																													name:
																														'测试是否卡顿111',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'9796e9c16c7e46cb8227beb3522e76b0',
																															name:
																																'测试是否卡顿1111',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'17c495affd93478495fdbe470a08f8e8',
																																	name:
																																		'测试是否卡顿11111',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'2b6478d5de84436fb3efe4f9fe067892',
																																	name:
																																		'测试是否卡顿11112',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'c4494759c13f489cb63b6a6b57b94ba1',
																																	name:
																																		'测试是否卡顿11113',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'98d14a6b86ea4106a0c7d7d795e27ebd',
																																	name:
																																		'测试是否卡顿11114',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'd236e498a9134a6ca08d08f9866a1d1b',
																																	name:
																																		'测试是否卡顿11115',
																																	value: 0,
																																	children: null
																																}
																															]
																														},
																														{
																															uuid:
																																'6eed9e1922e146238e0f44311d7f8c8c',
																															name:
																																'测试是否卡顿1112',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'fa2c467eb0374158b6c596e500c8f9ea',
																																	name:
																																		'测试是否卡顿11121',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'e859a40cccf24fb9b1af0dc8b58757f8',
																																	name:
																																		'测试是否卡顿11122',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'31f5a7fb38f1445a9e6a9299e3590b52',
																																	name:
																																		'测试是否卡顿11123',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'0f66dc1f8eb244bfb07e9c1d1a6806c0',
																																	name:
																																		'测试是否卡顿11124',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'1848616fdb2a47d1a23bb176fa04a9f1',
																																	name:
																																		'测试是否卡顿11125',
																																	value: 0,
																																	children: null
																																}
																															]
																														}
																													]
																												},
																												{
																													uuid:
																														'4f0dcc82007943a09ad5d6dac069805b',
																													name:
																														'测试是否卡顿112',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'b1d83c1c4cb246d5b5305297abb07728',
																															name:
																																'测试是否卡顿1121',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'72142ff4e01c45a79af44dc154fae717',
																																	name:
																																		'测试是否卡顿11211',
																																	value: 0,
																																	children: null
																																}
																															]
																														}
																													]
																												}
																											]
																										}
																									]
																								},
																								{
																									uuid:
																										'98b64c8dc37f475e85f4c9c65411e0f8',
																									name: '测试是否卡顿2',
																									value: 0,
																									children: [
																										{
																											uuid:
																												'3958d02245384234adc43ac7367a5ea5',
																											name: '测试是否卡顿21',
																											value: 0,
																											children: [
																												{
																													uuid:
																														'1ee9578bc27e47829fa544465faa8fad',
																													name:
																														'测试是否卡顿211',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'6206549cb69d4dbcbe0ae2e3acc9fbaf',
																															name:
																																'测试是否卡顿2111',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'bab6df6c0c004a2d8ac434de1e8531db',
																																	name:
																																		'测试是否卡顿21111',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'fa6eba3026844b8cba70f49668a43fdb',
																																	name:
																																		'测试是否卡顿21112',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'0b8efb6269f84f42bbec4b618842f279',
																																	name:
																																		'测试是否卡顿21113',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'1a1fd61893e0473abf06850b519f9224',
																																	name:
																																		'测试是否卡顿21114',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'217e34099c634ca8acc9836a86289715',
																																	name:
																																		'测试是否卡顿21115',
																																	value: 0,
																																	children: null
																																}
																															]
																														},
																														{
																															uuid:
																																'8d8d049d31bd4c0b802c472015e8c451',
																															name:
																																'测试是否卡顿2112',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'09fb7f7013cc483da9d10fb0946f047c',
																																	name:
																																		'测试是否卡顿21121',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'a8d6d494c0cd474aaef8ff2d6085c7af',
																																	name:
																																		'测试是否卡顿21122',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'ae7e9473ece044c3b93a935e02f72f00',
																																	name:
																																		'测试是否卡顿21123',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'94e5739843ab4680a53053da11449027',
																																	name:
																																		'测试是否卡顿21124',
																																	value: 0,
																																	children: null
																																},
																																{
																																	uuid:
																																		'92ebf5610a1c48b8b8c525be2891a253',
																																	name:
																																		'测试是否卡顿21125',
																																	value: 0,
																																	children: null
																																}
																															]
																														}
																													]
																												},
																												{
																													uuid:
																														'1b38d8dac2164758bfa3ba9702cb13c9',
																													name:
																														'测试是否卡顿212',
																													value: 0,
																													children: [
																														{
																															uuid:
																																'1beda38aeebe417da632682ef386d84a',
																															name:
																																'测试是否卡顿2121',
																															value: 0,
																															children: [
																																{
																																	uuid:
																																		'3b7fe09781614aa8bf7d8e5a0f31039b',
																																	name:
																																		'测试是否卡顿21211',
																																	value: 0,
																																	children: [
																																		{
																																			uuid:
																																				'093c6b10dfef4a7fa6e4e27328c24a4a',
																																			name:
																																				'测试是否卡顿1',
																																			value: 0,
																																			children: [
																																				{
																																					uuid:
																																						'8f28f337fb09442d8d0d77a09f26b4a4',
																																					name:
																																						'测试是否卡顿11',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'609a7b853a29490e8df46ada353bead0',
																																							name:
																																								'测试是否卡顿111',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'6d37c414f31d44f6a82aad76b03af926',
																																									name:
																																										'测试是否卡顿1111',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'1201405abcf54938ad50540c1780a930',
																																											name:
																																												'测试是否卡顿11111',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'7c08b3bb7b6a44f297d7f2fe7167cf40',
																																											name:
																																												'测试是否卡顿11112',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'6f45de33ffd14913a602f52510b39930',
																																											name:
																																												'测试是否卡顿11113',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'e233cefbaadd4fa687f2a23d3bf239b7',
																																											name:
																																												'测试是否卡顿11114',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'986eb8fc3d594c4b95e009485acfa89c',
																																											name:
																																												'测试是否卡顿11115',
																																											value: 0,
																																											children: null
																																										}
																																									]
																																								},
																																								{
																																									uuid:
																																										'fdfe06a25e884914b3a63a3ef588f3ad',
																																									name:
																																										'测试是否卡顿1112',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'fb3f78e1a84d42b48a12922e135145b2',
																																											name:
																																												'测试是否卡顿11121',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'48d5c6df62194309832e8ff1bd517544',
																																											name:
																																												'测试是否卡顿11122',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'ea60195a278d4551883f117a680c2f3e',
																																											name:
																																												'测试是否卡顿11123',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'54197973a77d4163aaa073268614cdec',
																																											name:
																																												'测试是否卡顿11124',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'f224df80ff9044cbbfb02766fe8dd66d',
																																											name:
																																												'测试是否卡顿11125',
																																											value: 0,
																																											children: null
																																										}
																																									]
																																								}
																																							]
																																						},
																																						{
																																							uuid:
																																								'7daf7e5bcea64c238304509c5fb1a3c3',
																																							name:
																																								'测试是否卡顿112',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'35e817fa7f934af7a973af80a6914649',
																																									name:
																																										'测试是否卡顿1121',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'35b2f8fda4714a9ab888dc93b9ca6658',
																																											name:
																																												'测试是否卡顿11211',
																																											value: 0,
																																											children: null
																																										}
																																									]
																																								}
																																							]
																																						}
																																					]
																																				}
																																			]
																																		},
																																		{
																																			uuid:
																																				'5ab9bbcbfa244365a7945d68b17a57fe',
																																			name:
																																				'测试是否卡顿2',
																																			value: 0,
																																			children: [
																																				{
																																					uuid:
																																						'eee66c163a2a49e59ee07a120e9dd62d',
																																					name:
																																						'测试是否卡顿21',
																																					value: 0,
																																					children: [
																																						{
																																							uuid:
																																								'9d49be65ad474f50b74b9fc394f61f34',
																																							name:
																																								'测试是否卡顿211',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'548b84e439bc4355b9da94555d9d44fa',
																																									name:
																																										'测试是否卡顿2111',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'240b3e128dfb41dbb62cf0179979dcca',
																																											name:
																																												'测试是否卡顿21111',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'25e6129ed1c241bf877a3727be8d8f5a',
																																											name:
																																												'测试是否卡顿21112',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'bfaa27ee1d5643c6833e832ea89fe9d2',
																																											name:
																																												'测试是否卡顿21113',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'3d2fe40876114680b9ad7f7bab362a1e',
																																											name:
																																												'测试是否卡顿21114',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'683e5e3afb6b4656ae6a601d21042f05',
																																											name:
																																												'测试是否卡顿21115',
																																											value: 0,
																																											children: null
																																										}
																																									]
																																								},
																																								{
																																									uuid:
																																										'5f8a82dcc1394978abf2e0b61a005446',
																																									name:
																																										'测试是否卡顿2112',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'ffbd0a75bdc34530b517509c38432469',
																																											name:
																																												'测试是否卡顿21121',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'49b7921cb3f840d0b954f453a2e96b70',
																																											name:
																																												'测试是否卡顿21122',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'797d92765525423ead1b28fc78bb3fc0',
																																											name:
																																												'测试是否卡顿21123',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'44bb15299236494aa4d2714f76726237',
																																											name:
																																												'测试是否卡顿21124',
																																											value: 0,
																																											children: null
																																										},
																																										{
																																											uuid:
																																												'61a59ea40da64d819b383ed2b2cf4df0',
																																											name:
																																												'测试是否卡顿21125',
																																											value: 0,
																																											children: null
																																										}
																																									]
																																								}
																																							]
																																						},
																																						{
																																							uuid:
																																								'6d391331f09d402cb2e9803a512f9eaa',
																																							name:
																																								'测试是否卡顿212',
																																							value: 0,
																																							children: [
																																								{
																																									uuid:
																																										'8ee4ec7464eb4d9183f1e598e21f39a6',
																																									name:
																																										'测试是否卡顿2121',
																																									value: 0,
																																									children: [
																																										{
																																											uuid:
																																												'fa19357a9a804d8080bd2aa792548511',
																																											name:
																																												'测试是否卡顿21211',
																																											value: 0,
																																											children: [
																																												{
																																													uuid:
																																														'136c9eb1f558403f9fbd25f6f86e09a6',
																																													name:
																																														'测试是否卡顿1',
																																													value: 0,
																																													children: [
																																														{
																																															uuid:
																																																'76b4b0ac2e7c4da381f07fd6450dcea0',
																																															name:
																																																'测试是否卡顿11',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'c7068adc397141c9bc2ead92732faed1',
																																																	name:
																																																		'测试是否卡顿111',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'5eb5e940b6344706b42b361b157f855c',
																																																			name:
																																																				'测试是否卡顿1111',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'd81c33147ad742afbecc074c9e7aa43c',
																																																					name:
																																																						'测试是否卡顿11111',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'3bcc45b0102843c5887a72b521b12899',
																																																					name:
																																																						'测试是否卡顿11112',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'3d695468ffe149d8917980cb8babd278',
																																																					name:
																																																						'测试是否卡顿11113',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'49fc82389947407b9392c32d1a37a281',
																																																					name:
																																																						'测试是否卡顿11114',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'a4ec6af655f147f28270febb65bcffe3',
																																																					name:
																																																						'测试是否卡顿11115',
																																																					value: 0,
																																																					children: null
																																																				}
																																																			]
																																																		},
																																																		{
																																																			uuid:
																																																				'15201f7bde2c47e5b04df63f0340da1a',
																																																			name:
																																																				'测试是否卡顿1112',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'82ef94935cd94fe7a2a3f495e1d12c77',
																																																					name:
																																																						'测试是否卡顿11121',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'ecc779ac4ebc4183a9cefb9480072d18',
																																																					name:
																																																						'测试是否卡顿11122',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'ca0da313e0b644e7a1cfe4e21c54c03c',
																																																					name:
																																																						'测试是否卡顿11123',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'b0dce7e3188e47119e42012f7718d392',
																																																					name:
																																																						'测试是否卡顿11124',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'5e705fe9939241bb9017f88a0bac3b70',
																																																					name:
																																																						'测试是否卡顿11125',
																																																					value: 0,
																																																					children: null
																																																				}
																																																			]
																																																		}
																																																	]
																																																},
																																																{
																																																	uuid:
																																																		'3322db35cabc454d861986ac9ae8d437',
																																																	name:
																																																		'测试是否卡顿112',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'68e3dff948384854a6bc64f0854827a2',
																																																			name:
																																																				'测试是否卡顿1121',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'015a9ea96ca348ad8124adee93b02d12',
																																																					name:
																																																						'测试是否卡顿11211',
																																																					value: 0,
																																																					children: null
																																																				}
																																																			]
																																																		}
																																																	]
																																																}
																																															]
																																														}
																																													]
																																												},
																																												{
																																													uuid:
																																														'ddebd8da22dd4dbcaee59d3c45a77128',
																																													name:
																																														'测试是否卡顿2',
																																													value: 0,
																																													children: [
																																														{
																																															uuid:
																																																'4dcf54d37fb64ff09b597e9f0baa9f74',
																																															name:
																																																'测试是否卡顿21',
																																															value: 0,
																																															children: [
																																																{
																																																	uuid:
																																																		'9f0007f8996e4a79a1e3b45e24f6580e',
																																																	name:
																																																		'测试是否卡顿211',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'c1a674d4125d475e8caa53a074426a27',
																																																			name:
																																																				'测试是否卡顿2111',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'3b2645a3d2054258ad2ab11bed428ada',
																																																					name:
																																																						'测试是否卡顿21111',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'68bacba8f2ef4762931782d6f1fd67e4',
																																																					name:
																																																						'测试是否卡顿21112',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'7ea893a44ddb498884ec8f176d08bab2',
																																																					name:
																																																						'测试是否卡顿21113',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'0fcb12201a314ebd8f251dd31da238e7',
																																																					name:
																																																						'测试是否卡顿21114',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'9d3e766a0a124d7e9e00c23a1ca3e045',
																																																					name:
																																																						'测试是否卡顿21115',
																																																					value: 0,
																																																					children: null
																																																				}
																																																			]
																																																		},
																																																		{
																																																			uuid:
																																																				'39ff7218e2cf4e42a89683b621a377e4',
																																																			name:
																																																				'测试是否卡顿2112',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'9f681640336649de8df81a13fb80524c',
																																																					name:
																																																						'测试是否卡顿21121',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'd197f83517854cdf93e15ef4945a3e57',
																																																					name:
																																																						'测试是否卡顿21122',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'a646c86c85a54428a89cae6cf541d6d5',
																																																					name:
																																																						'测试是否卡顿21123',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'79de54b5b6aa4b7eba9af41b6133c6fb',
																																																					name:
																																																						'测试是否卡顿21124',
																																																					value: 0,
																																																					children: null
																																																				},
																																																				{
																																																					uuid:
																																																						'1739eef7abec4e598b7738ca3639aedd',
																																																					name:
																																																						'测试是否卡顿21125',
																																																					value: 0,
																																																					children: null
																																																				}
																																																			]
																																																		}
																																																	]
																																																},
																																																{
																																																	uuid:
																																																		'7ba014ad20d845e7b1cecd2a42bdd098',
																																																	name:
																																																		'测试是否卡顿212',
																																																	value: 0,
																																																	children: [
																																																		{
																																																			uuid:
																																																				'0e368d6e9f3248d9b0b4d3d79999b871',
																																																			name:
																																																				'测试是否卡顿2121',
																																																			value: 0,
																																																			children: [
																																																				{
																																																					uuid:
																																																						'129413601166479285e46aa8441baebd',
																																																					name:
																																																						'测试是否卡顿21211',
																																																					value: 0,
																																																					children: null
																																																				}
																																																			]
																																																		}
																																																	]
																																																}
																																															]
																																														}
																																													]
																																												}
																																											]
																																										}
																																									]
																																								}
																																							]
																																						}
																																					]
																																				}
																																			]
																																		}
																																	]
																																}
																															]
																														}
																													]
																												}
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				code: 10000
			}
			//   {
			// 	status: 200,
			// 	message: 'success',
			// 	data: {
			// 		name: 'flare',
			// 		children: [
			// 			{
			// 				name: 'analytics',
			// 				children: [
			// 					{
			// 						name: 'cluster',
			// 						children: [
			// 							{ name: 'AgglomerativeCluster', value: 3938 },
			// 							{ name: 'CommunityStructure', value: 3812 },
			// 							{ name: 'HierarchicalCluster', value: 6714 },
			// 							{ name: 'MergeEdge', value: 743 }
			// 						]
			// 					},
			// 					{
			// 						name: 'graph',
			// 						children: [
			// 							{ name: 'BetweennessCentrality', value: 3534 },
			// 							{ name: 'LinkDistance', value: 5731 },
			// 							{ name: 'MaxFlowMinCut', value: 7840 },
			// 							{ name: 'ShortestPaths', value: 5914 },
			// 							{ name: 'SpanningTree', value: 3416 }
			// 						]
			// 					},
			// 					{
			// 						name: 'optimization',
			// 						children: [{ name: 'AspectRatioBanker', value: 7074 }]
			// 					}
			// 				]
			// 			},
			// 			{
			// 				name: 'animate',
			// 				children: [
			// 					{ name: 'Easing', value: 17010 },
			// 					{ name: 'FunctionSequence', value: 5842 },
			// 					{
			// 						name: 'interpolate',
			// 						children: [
			// 							{ name: 'ArrayInterpolator', value: 1983 },
			// 							{ name: 'ColorInterpolator', value: 2047 },
			// 							{ name: 'DateInterpolator', value: 1375 },
			// 							{ name: 'Interpolator', value: 8746 },
			// 							{ name: 'MatrixInterpolator', value: 2202 },
			// 							{ name: 'NumberInterpolator', value: 1382 },
			// 							{ name: 'ObjectInterpolator', value: 1629 },
			// 							{ name: 'PointInterpolator', value: 1675 },
			// 							{ name: 'RectangleInterpolator', value: 2042 }
			// 						]
			// 					},
			// 					{ name: 'ISchedulable', value: 1041 },
			// 					{ name: 'Parallel', value: 5176 },
			// 					{ name: 'Pause', value: 449 },
			// 					{ name: 'Scheduler', value: 5593 },
			// 					{ name: 'Sequence', value: 5534 },
			// 					{ name: 'Transition', value: 9201 },
			// 					{ name: 'Transitioner', value: 19975 },
			// 					{ name: 'TransitionEvent', value: 1116 },
			// 					{ name: 'Tween', value: 6006 }
			// 				]
			// 			},
			// 			{
			// 				name: 'data',
			// 				children: [
			// 					{
			// 						name: 'converters',
			// 						children: [
			// 							{ name: 'Converters', value: 721 },
			// 							{ name: 'DelimitedTextConverter', value: 4294 },
			// 							{ name: 'GraphMLConverter', value: 9800 },
			// 							{ name: 'IDataConverter', value: 1314 },
			// 							{ name: 'JSONConverter', value: 2220 }
			// 						]
			// 					},
			// 					{ name: 'DataField', value: 1759 },
			// 					{ name: 'DataSchema', value: 2165 },
			// 					{ name: 'DataSet', value: 586 },
			// 					{ name: 'DataSource', value: 3331 },
			// 					{ name: 'DataTable', value: 772 },
			// 					{ name: 'DataUtil', value: 3322 }
			// 				]
			// 			},
			// 			{
			// 				name: 'display',
			// 				children: [
			// 					{ name: 'DirtySprite', value: 8833 },
			// 					{ name: 'LineSprite', value: 1732 },
			// 					{ name: 'RectSprite', value: 3623 },
			// 					{ name: 'TextSprite', value: 10066 }
			// 				]
			// 			},
			// 			{
			// 				name: 'flex',
			// 				children: [{ name: 'FlareVis', value: 4116 }]
			// 			},
			// 			{
			// 				name: 'physics',
			// 				children: [
			// 					{ name: 'DragForce', value: 1082 },
			// 					{ name: 'GravityForce', value: 1336 },
			// 					{ name: 'IForce', value: 319 },
			// 					{ name: 'NBodyForce', value: 10498 },
			// 					{ name: 'Particle', value: 2822 },
			// 					{ name: 'Simulation', value: 9983 },
			// 					{ name: 'Spring', value: 2213 },
			// 					{ name: 'SpringForce', value: 1681 }
			// 				]
			// 			},
			// 			{
			// 				name: 'query',
			// 				children: [
			// 					{ name: 'AggregateExpression', value: 1616 },
			// 					{ name: 'And', value: 1027 },
			// 					{ name: 'Arithmetic', value: 3891 },
			// 					{ name: 'Average', value: 891 },
			// 					{ name: 'BinaryExpression', value: 2893 },
			// 					{ name: 'Comparison', value: 5103 },
			// 					{ name: 'CompositeExpression', value: 3677 },
			// 					{ name: 'Count', value: 781 },
			// 					{ name: 'DateUtil', value: 4141 },
			// 					{ name: 'Distinct', value: 933 },
			// 					{ name: 'Expression', value: 5130 },
			// 					{ name: 'ExpressionIterator', value: 3617 },
			// 					{ name: 'Fn', value: 3240 },
			// 					{ name: 'If', value: 2732 },
			// 					{ name: 'IsA', value: 2039 },
			// 					{ name: 'Literal', value: 1214 },
			// 					{ name: 'Match', value: 3748 },
			// 					{ name: 'Maximum', value: 843 },
			// 					{
			// 						name: 'methods',
			// 						children: [
			// 							{ name: 'add', value: 593 },
			// 							{ name: 'and', value: 330 },
			// 							{ name: 'average', value: 287 },
			// 							{ name: 'count', value: 277 },
			// 							{ name: 'distinct', value: 292 },
			// 							{ name: 'div', value: 595 },
			// 							{ name: 'eq', value: 594 },
			// 							{ name: 'fn', value: 460 },
			// 							{ name: 'gt', value: 603 },
			// 							{ name: 'gte', value: 625 },
			// 							{ name: 'iff', value: 748 },
			// 							{ name: 'isa', value: 461 },
			// 							{ name: 'lt', value: 597 },
			// 							{ name: 'lte', value: 619 },
			// 							{ name: 'max', value: 283 },
			// 							{ name: 'min', value: 283 },
			// 							{ name: 'mod', value: 591 },
			// 							{ name: 'mul', value: 603 },
			// 							{ name: 'neq', value: 599 },
			// 							{ name: 'not', value: 386 },
			// 							{ name: 'or', value: 323 },
			// 							{ name: 'orderby', value: 307 },
			// 							{ name: 'range', value: 772 },
			// 							{ name: 'select', value: 296 },
			// 							{ name: 'stddev', value: 363 },
			// 							{ name: 'sub', value: 600 },
			// 							{ name: 'sum', value: 280 },
			// 							{ name: 'update', value: 307 },
			// 							{ name: 'variance', value: 335 },
			// 							{ name: 'where', value: 299 },
			// 							{ name: 'xor', value: 354 },
			// 							{ name: '-', value: 264 }
			// 						]
			// 					},
			// 					{ name: 'Minimum', value: 843 },
			// 					{ name: 'Not', value: 1554 },
			// 					{ name: 'Or', value: 970 },
			// 					{ name: 'Query', value: 13896 },
			// 					{ name: 'Range', value: 1594 },
			// 					{ name: 'StringUtil', value: 4130 },
			// 					{ name: 'Sum', value: 791 },
			// 					{ name: 'Variable', value: 1124 },
			// 					{ name: 'Variance', value: 1876 },
			// 					{ name: 'Xor', value: 1101 }
			// 				]
			// 			},
			// 			{
			// 				name: 'scale',
			// 				children: [
			// 					{ name: 'IScaleMap', value: 2105 },
			// 					{ name: 'LinearScale', value: 1316 },
			// 					{ name: 'LogScale', value: 3151 },
			// 					{ name: 'OrdinalScale', value: 3770 },
			// 					{ name: 'QuantileScale', value: 2435 },
			// 					{ name: 'QuantitativeScale', value: 4839 },
			// 					{ name: 'RootScale', value: 1756 },
			// 					{ name: 'Scale', value: 4268 },
			// 					{ name: 'ScaleType', value: 1821 },
			// 					{ name: 'TimeScale', value: 5833 }
			// 				]
			// 			},
			// 			{
			// 				name: 'util',
			// 				children: [
			// 					{ name: 'Arrays', value: 8258 },
			// 					{ name: 'Colors', value: 10001 },
			// 					{ name: 'Dates', value: 8217 },
			// 					{ name: 'Displays', value: 12555 },
			// 					{ name: 'Filter', value: 2324 },
			// 					{ name: 'Geometry', value: 10993 },
			// 					{
			// 						name: 'heap',
			// 						children: [
			// 							{ name: 'FibonacciHeap', value: 9354 },
			// 							{ name: 'HeapNode', value: 1233 }
			// 						]
			// 					},
			// 					{ name: 'IEvaluable', value: 335 },
			// 					{ name: 'IPredicate', value: 383 },
			// 					{ name: 'IValueProxy', value: 874 },
			// 					{
			// 						name: 'math',
			// 						children: [
			// 							{ name: 'DenseMatrix', value: 3165 },
			// 							{ name: 'IMatrix', value: 2815 },
			// 							{ name: 'SparseMatrix', value: 3366 }
			// 						]
			// 					},
			// 					{ name: 'Maths', value: 17705 },
			// 					{ name: 'Orientation', value: 1486 },
			// 					{
			// 						name: 'palette',
			// 						children: [
			// 							{ name: 'ColorPalette', value: 6367 },
			// 							{ name: 'Palette', value: 1229 },
			// 							{ name: 'ShapePalette', value: 2059 },
			// 							{ name: 'SizePalette', value: 2291 }
			// 						]
			// 					},
			// 					{ name: 'Property', value: 5559 },
			// 					{ name: 'Shapes', value: 19118 },
			// 					{ name: 'Sort', value: 6887 },
			// 					{ name: 'Stats', value: 6557 },
			// 					{ name: 'Strings', value: 22026 }
			// 				]
			// 			},
			// 			{
			// 				name: 'vis',
			// 				children: [
			// 					{
			// 						name: 'axis',
			// 						children: [
			// 							{ name: 'Axes', value: 1302 },
			// 							{ name: 'Axis', value: 24593 },
			// 							{ name: 'AxisGridLine', value: 652 },
			// 							{ name: 'AxisLabel', value: 636 },
			// 							{ name: 'CartesianAxes', value: 6703 }
			// 						]
			// 					},
			// 					{
			// 						name: 'controls',
			// 						children: [
			// 							{ name: 'AnchorControl', value: 2138 },
			// 							{ name: 'ClickControl', value: 3824 },
			// 							{ name: 'Control', value: 1353 },
			// 							{ name: 'ControlList', value: 4665 },
			// 							{ name: 'DragControl', value: 2649 },
			// 							{ name: 'ExpandControl', value: 2832 },
			// 							{ name: 'HoverControl', value: 4896 },
			// 							{ name: 'IControl', value: 763 },
			// 							{ name: 'PanZoomControl', value: 5222 },
			// 							{ name: 'SelectionControl', value: 7862 },
			// 							{ name: 'TooltipControl', value: 8435 }
			// 						]
			// 					},
			// 					{
			// 						name: 'data',
			// 						children: [
			// 							{ name: 'Data', value: 20544 },
			// 							{ name: 'DataList', value: 19788 },
			// 							{ name: 'DataSprite', value: 10349 },
			// 							{ name: 'EdgeSprite', value: 3301 },
			// 							{ name: 'NodeSprite', value: 19382 },
			// 							{
			// 								name: 'render',
			// 								children: [
			// 									{ name: 'ArrowType', value: 698 },
			// 									{ name: 'EdgeRenderer', value: 5569 },
			// 									{ name: 'IRenderer', value: 353 },
			// 									{ name: 'ShapeRenderer', value: 2247 }
			// 								]
			// 							},
			// 							{ name: 'ScaleBinding', value: 11275 },
			// 							{ name: 'Tree', value: 7147 },
			// 							{ name: 'TreeBuilder', value: 9930 }
			// 						]
			// 					},
			// 					{
			// 						name: 'events',
			// 						children: [
			// 							{ name: 'DataEvent', value: 2313 },
			// 							{ name: 'SelectionEvent', value: 1880 },
			// 							{ name: 'TooltipEvent', value: 1701 },
			// 							{ name: 'VisualizationEvent', value: 1117 }
			// 						]
			// 					},
			// 					{
			// 						name: 'legend',
			// 						children: [
			// 							{ name: 'Legend', value: 20859 },
			// 							{ name: 'LegendItem', value: 4614 },
			// 							{ name: 'LegendRange', value: 10530 }
			// 						]
			// 					},
			// 					{
			// 						name: 'operator',
			// 						children: [
			// 							{
			// 								name: 'distortion',
			// 								children: [
			// 									{ name: 'BifocalDistortion', value: 4461 },
			// 									{ name: 'Distortion', value: 6314 },
			// 									{ name: 'FisheyeDistortion', value: 3444 }
			// 								]
			// 							},
			// 							{
			// 								name: 'encoder',
			// 								children: [
			// 									{ name: 'ColorEncoder', value: 3179 },
			// 									{ name: 'Encoder', value: 4060 },
			// 									{ name: 'PropertyEncoder', value: 4138 },
			// 									{ name: 'ShapeEncoder', value: 1690 },
			// 									{ name: 'SizeEncoder', value: 1830 }
			// 								]
			// 							},
			// 							{
			// 								name: 'filter',
			// 								children: [
			// 									{ name: 'FisheyeTreeFilter', value: 5219 },
			// 									{ name: 'GraphDistanceFilter', value: 3165 },
			// 									{ name: 'VisibilityFilter', value: 3509 }
			// 								]
			// 							},
			// 							{ name: 'IOperator', value: 1286 },
			// 							{
			// 								name: 'label',
			// 								children: [
			// 									{ name: 'Labeler', value: 9956 },
			// 									{ name: 'RadialLabeler', value: 3899 },
			// 									{ name: 'StackedAreaLabeler', value: 3202 }
			// 								]
			// 							},
			// 							{
			// 								name: 'layout',
			// 								children: [
			// 									{ name: 'AxisLayout', value: 6725 },
			// 									{ name: 'BundledEdgeRouter', value: 3727 },
			// 									{ name: 'CircleLayout', value: 9317 },
			// 									{ name: 'CirclePackingLayout', value: 12003 },
			// 									{ name: 'DendrogramLayout', value: 4853 },
			// 									{ name: 'ForceDirectedLayout', value: 8411 },
			// 									{ name: 'IcicleTreeLayout', value: 4864 },
			// 									{ name: 'IndentedTreeLayout', value: 3174 },
			// 									{ name: 'Layout', value: 7881 },
			// 									{ name: 'NodeLinkTreeLayout', value: 12870 },
			// 									{ name: 'PieLayout', value: 2728 },
			// 									{ name: 'RadialTreeLayout', value: 12348 },
			// 									{ name: 'RandomLayout', value: 870 },
			// 									{ name: 'StackedAreaLayout', value: 9121 },
			// 									{ name: 'TreeMapLayout', value: 9191 }
			// 								]
			// 							},
			// 							{ name: 'Operator', value: 2490 },
			// 							{ name: 'OperatorList', value: 5248 },
			// 							{ name: 'OperatorSequence', value: 4190 },
			// 							{ name: 'OperatorSwitch', value: 2581 },
			// 							{ name: 'SortOperator', value: 2023 }
			// 						]
			// 					},
			// 					{ name: 'Visualization', value: 16540 }
			// 				]
			// 			}
			// 		]
			// 	}
			// }
		);
	}
};
