function logger(str) { console.log(str); }

var numPL = function(vaule) {
	if (!vaule) return '';
	vaule = vaule.toString();
	return vaule.replace('.', ',');
}

var barcode = new Ean();

var vm = new Vue({
	el: '#vm',
	data: {
		howAdding: "addEntered",
		eanIn: "",
		quantityIn : "",
		nameIn: "",
		validEAN: false,
		zoomFactor: 1,
		barHeight: 50,
		labelContent: {},
		articlesList: [
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			},
			{
				id: 6619878,
				ean: 5902768214666,
				name: 'QWERTYUIOP ASDFGHJKL ZXCVBNM QWERTYUIOP ASDFGHJKL ZXCVBNM',
				quantity: 2.4,
				copies: 1
			}
		]
	},
	methods: {
		logInput: function() {
			logger(this.articlesList);
		},
		scrollToEnd: function() {    	
      let container = this.$el.querySelector(".content");
      container.scrollTop = container.scrollHeight;
    },
		checkValidEAN: function () {
			barcode.setEan = this.eanIn;
			if (barcode.isValid) {
				this.validEAN= true;
				if (this.eanIn.length === 13) {
					this.$refs.inputQuantity.focus();
					if (this.howAdding === 'addOne') this.addArticle();
				}
			} else {
				this.validEAN = false;
			}
			logger(`validEAN = ${this.validEAN}`);
		},
		inputEanLimit: function(event) {
			if (
				!(
				(event.keyCode >= 48 && event.keyCode <= 57)
				||
				(event.keyCode >= 96 && event.keyCode <= 105)
				||
				(event.keyCode >= 37 && event.keyCode <= 40)
				||
				event.keyCode == 8 || event.keyCode <= 46
				)
			) {
				event.preventDefault();
			}
		},
		checkOnline: function(ean) {
			let url = 'https://api.bazaarvoice.com/data/batch.json?passkey=caPteScZRHieWdpEI1TjJ8EJJj4wAeTgrSB2F6SvXLqAA&apiversion=5.5&displaycode=17414-pl_pl&resource.q0=products&filter.q0=ean%3Aeq%3A___PRODUCTEANTOKEN___',
			apiResults;

			url = url.replace( '___PRODUCTEANTOKEN___', ean.toString() );
			axios
  			.get(url)
  			.then(
					(response) => {
						if (response.data.BatchedResults.q0.TotalResults > 0) {
							apiResults = response.data.BatchedResults.q0.Results[0];
							vm.articlesList.forEach((element) => {
								if ( element.ean == ean ) {
									element.id = apiResults.Id;
									element.name = apiResults.Name;
								}
							});
						}
					}
				)
  			.catch(error => console.log(error));
		},
		addArticle: function () {
			logger('<<< start funkcji addArticle >>>');

			if (this.validEAN) {
				let newAdd = function(q) {
					vm.articlesList.push(
						{
							id: null,
							ean: vm.eanIn,
							quantity: q ? q : vm.quantityIn,
							copies: 1,
							name: vm.nameIn
						});
					vm.scrollToEnd();
					vm.checkOnline(vm.eanIn);
				}

				if ( vm.howAdding != 'noAdd' ) {
					// Czy istnieje już taki artykuł
					let i = -1;
					vm.articlesList.forEach((element, index) => {
						logger('start forEach dla articlesList');
						if ( element.ean == vm.eanIn ) {
							i = index;
							logger(`Istnieje na liście, index = ${index}`);
						}
					});

					if ( i > -1 ) { // jeżeli istnieje
						vm.articlesList[i].quantity += vm.howAdding == 'addEntered' ? vm.quantityIn : 1;
					} else { // jeżeli nie istnieje
						newAdd( vm.howAdding == 'addOne' ? 1 : null );
					}
				} else newAdd(); // bez dodawania
			}

			this.eanIn = "";
			this.quantityIn = "";
			this.nameIn = "";
			this.validEAN = false;
			this.$refs.inputEan.focus();
			
			logger('>>> stop addArticle <<<');
		},
		deleteItem: function(index) {
			this.articlesList.splice(index,1);
		},
		cleanList: function() {
			if (confirm('Wyczyścić listę?')) {
				this.articlesList = [];
			}
		},

		// KOPIUJ - WKLEJ !!!

		getLabels: function(lenghtStr = 0) {
			let labels = [],
				nameStr = "";

			vm.articlesList.forEach( (item) => {
				for (let i = 1; i <= item.copies; i++){
					barcode.setEan = item.ean;
					nameStr = lenghtStr > 0 ? item.name.slice(0, lenghtStr) : item.name;
					labels.push([
						{
							text: item.ean.toString().slice(0, 9),
							style: "ean1"
						},
						{
							text: item.ean.toString().slice(9, 13),
							style: "ean2"
						},
						{
							margin: 0,
							columns: [
								{
									canvas: barcode.getCanvas,
									style: "barcode",
									width: "auto"
								},
								[
									{
										text: "OBI: " + item.id,
										style: "id"
									},
									{
										text: (numPL(item.quantity) + " j"),
										style: "quantity",
										width: "*"
									}
								]
							]
						},
						{
							text: item.name ? item.name.slice(0, lenghtStr - 1) : '.',
							// text: item.name ? item.name : '.',
							// text: nameStr,
							style: "name",
							width: 10,
							height: 5
						}
					]);
				}
			});
		
			return labels;
		},
		
		printLabelsA4: function() {
			
			barcode.zoom = 3;
			barcode.height = 0;

			vm.labelContent = {
				pageSize: "A4",
				pageOrientation: "landscape",
				pageMargins: [0, 0, 0, 0],
				styles: {
					ean1: {
						margin: [0, 0, 0, 0],
						fontSize: 140,
						alignment: "center"
					},
					ean2: {
						margin: [0, -40, 0, 0],
						fontSize: 250,
						bold: true,
						alignment: "center"
					},
					barcode: {
						margin: [20, -30, 0, 0]
					},
					name: {
						margin: [20, 0, 20, 0],
						fontSize: 40,
						alignment: "left"
					},
					quantity: {
						margin: [0, 0, 20, 0],
						fontSize: 110,
						alignment: "right"
					},
					id: {
						margin: [20, -40, 20, 0],
						fontSize: 30,
						alignment: "right"
					}
				},
				defaultStyle: {},
				content: vm.getLabels(32)
			}

			vm.print();
		},
		
		printLabelsA6: function() {

			barcode.zoom = 1.5;
			barcode.height = 60;

			let labels = vm.getLabels(32),
					column0 = [],
					column1 = [];
		
			labels.forEach((item, index) => {
				if (index % 4 < 2) {
					column0.push(item);
				} else {
					column1.push(item);
				}	
			});
		
			vm.labelContent = {
				pageSize: "A4",
				pageOrientation: "landscape",
				pageMargins: [0, 0, 0, 0],
				styles: {
					ean1: {
						margin: [0, 0, 0, 0],
						fontSize: 70,
						alignment: "center"
					},
					ean2: {
						margin: [0, -20, 0, 0],
						fontSize: 135, 
						bold: true,
						alignment: "center"
					},
					barcode: {
							margin: [10, -15, 0, 0],
					},
					id: {
						margin: [20, -20, 20, 0],
						fontSize: 15,
						alignment: "right"
					},
					quantity: {
						margin: [0, 0, 10, 0],
						fontSize: 50,
						alignment: "right"
					},
					name: {
							margin: [10, -10, 10, 0],
						fontSize: 20,
						alignment: "left"
					}
				},
				defaultStyle: {},
				content: [
					{
						columns: [
							column1,
							column0
						]
					}
				]
			};
		
			vm.print();
		},

		printList: function() {
			barcode.zoom = 1;
			barcode.height = 38;

			let dateTime = () => {
				let now = new Date;
				return now.toLocaleDateString() + ', ' + now.toLocaleTimeString();
			}

			vm.labelContent = {
				pageSize: "A4",
				pageOrientation: "portrait",
				pageMargins: 54,
				styles: {
					mainTable: {
						fontSize: 12
					},
					mtHeaderLp: {
						alignment: 'right',
						bold: true
					},
					mtHeader: {
						bold: true
					},
					mtHeaderQuan: {
						alignment: 'right',
						bold: true
					},
					mtCellLp: {
						margin: [0, 8],
						alignment: 'right'
					},
					mtCell: {
						margin: [0, 8]
					},
					mtCellQuan: {
						margin: [0, 8],
						alignment: 'right'
					},
					mtCellBarcode: {
						margin: [0, 3],
					},
					headerTable: {
						margin: [36, 18],
						fontSize: 10
					},
					htLeft: { //ht = headerTable
						margin: 0,
					},
					htCenter: {
						margin: 0,
						alignment: 'center',
						bold: true
					},
					htRight: {
						margin: 0,
						alignment: 'right',
						italics: true
					}
				},
		
				header:	function(page, pages) {
					return {
						style: 'headerTable',
						table: {
							widths: [180, '*', 180],
							body: [
								[
									{
										text: dateTime(),
										style: 'htLeft'
									},
									{
										text: 'Lista zbiorcza',
										style: 'htCenter'
									},
									{
										text: page.toString() + ' z ' + pages.toString(),
										style: 'htRight'
									}
								]
							]
						},
						layout: {
							hLineWidth: function (i, node) {
								return (i === node.table.body.length) ? 1 : 0;
							},
							vLineWidth: function (i, node) {
								return 0;
							}
						}
					};
				},
				
				content: []
			}
		
			let art,
				pdfContent = [],
				items = vm.articlesList.length,
				p = 0,
				itemsOnPage = 14;
		
			while (p < items) {
				pdfContent = [];
		
				pdfContent.push([
					{
						text: '\nlp.',
						style: 'mtHeaderLp'
					},
					{
						text: '\nNazwa',
						style: 'mtHeader'
					},
					{
						text: '\nIlość',
						style: 'mtHeader'
					},
					{
						text: 'OBI\nEAN',
						style: 'mtHeader'
					},
					{
						text: '\n[kod kreskowy]',
						style: 'mtHeader'
					}
				]);
		
				for (let i = 0; i < itemsOnPage; i++) {
		
					art = vm.articlesList[p];
					
					barcode.setEan = art.ean;

					pdfContent.push([
						{
							text: (p + 1) + '.',
							style: 'mtCellLp'
						},
						{
							text: art.name.slice(0, 41),
							style: 'mtCell'
						},
						{
							text: numPL(art.quantity),
							style: 'mtCellQuan'
						},
						{
							text: art.id + '\n' + art.ean,
							style: 'mtCell'
						},
						{
							canvas: barcode.getCanvas,
							style: 'mtCellBarcode'
						}
					]);
					p++;
					if (p == items) break;
				}
		
				pdfContent.push(['', '', '', '', '']);
		
				vm.labelContent.content.push({
					layout: 'lightHorizontalLines',
					style: 'mainTable',
		
					table: {
						widths: [25, '*', 35, 90, 110],
						headerRows: 1,
		
						body: pdfContent
					}
				});
		
				if ((items - p) > 0) {
					vm.labelContent.content.push([
						{
							text: '',
							pageBreak: 'after'
						}
					]);
				}
		
			}
		console.log(vm.labelContent)
			vm.print();
		},

		print: () => {
			if (!!window.chrome) {
				pdfMake.createPdf(vm.labelContent).print();
			} else {
				pdfMake.createPdf(vm.labelContent).download('Etykiety A4.pdf');
			}
		}
	}
});