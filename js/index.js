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
			{ ean: 2222222222222, quantity: 2.4, copies: 1, name: 'Vegetables' },
			{ ean: 4444444444444, quantity: 2.4, copies: 1, name: 'Cheese' },
			{ ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
			{ ean: 1234567890123, quantity: 5.987, copies: 1, name: "coś" },
			{ ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
			{ ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      { ean: 6666666666666, quantity: 2.4, copies: 1, name: 'Whatever' },
      
		]
	},
	/*filters: {
		numPL: function(vaule) {
			if (!vaule) return '';
			vaule = vaule.toString();
			return vaule.replace('.', ',');
		}
	},*/
	methods: {
		logInput: function() {
			logger(this.articlesList);
		},
		checkValidEAN: function () {
			barcode.setEan = this.eanIn;
			if (barcode.isValid) {
				this.validEAN= true;
				if (this.eanIn.length === 13) {
					this.$refs.inputQuantity.focus();
				}
			} else {
				this.validEAN = false;
			}
			logger(`validEAN = ${this.validEAN}`);
		},
		inputEanLimit: function(event) {
			// logger(`
			// 	event.charCode = ${event.charCode}
			// 	event.which    = ${event.which}
			// 	event.keyCode  = ${event.keyCode}
			// 	typeof(keyCode) = ${typeof(event.keyCode)}
			// 	event.keyCode > 65 = ${event.keyCode > 65}
			// 	event.keyCode < 90 = ${event.keyCode < 90}
			// 	(event.keyCode > 65 && event.keyCode < 90) = ${(event.keyCode > 65 && event.keyCode < 90)}
			// 	vm.eanIn.length = ${vm.eanIn.length}
			// 	(vm.eanIn.length >= 12) = ${vm.eanIn.length > 12}
			// 	( vm.eanIn.length >= 12 && event.keyCode >= 65 && event.keyCode <= 90 ) = ${( vm.eanIn.length >= 12 && event.keyCode >= 65 && event.keyCode <= 90 )}
			// 	`);

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
		addArticle: function () {
			logger('<<< start funkcji addArticle >>>');

			let newAdd = function(q) {
				vm.articlesList.push(
					{
						ean: vm.eanIn,
						quantity: q ? q : vm.quantityIn,
						copies: 1,
						name: vm.nameIn
					});
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

			this.eanIn = "";
			this.quantityIn = "";
			this.nameIn = "";
			this.validEAN = false;
			
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

		getLabels: function() {
			let labels = [];

			vm.articlesList.forEach( (item) => {
				for (let i = 1; i <= item.copies; i++){
					barcode.setEan = item.ean;
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
										text: item.name,
										style: "name"
									},
									{
										text: (numPL(item.quantity) + " j"),
										style: "quantity",
										width: "*"
									}
								]
							]
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
						fontSize: 280,
						bold: true,
						alignment: "center"
					},
					barcode: {
						margin: [20, -30, 0, 0]
					},
					name: {
						margin: [5, -50, 20, 0],
						fontSize: 30,
						alignment: "right"
					},
					quantity: {
						margin: [0, 0, 20, 0],
						fontSize: 110,
						alignment: "right"
					}
				},
				defaultStyle: {},
				content: vm.getLabels()
			}

			vm.print();
		},
		
		printLabelsA6: function() {

			barcode.zoom = 1.5;
			barcode.height = 0;

			let labels = vm.getLabels(),
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
						fontSize: 143, 
						bold: true,
						alignment: "center"
					},
					barcode: {
							margin: [10, -15, 0, 0],
					},
					name: {
						margin: [5, -25, 10, 0],
						fontSize: 15,
						alignment: "right"
					},
					quantity: {
						margin: [0, 3, 10, 0],
						fontSize: 55,
						alignment: "right"
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
			barcode.height = 24;

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
				itemsOnPage = 20;
		
			while (p < items) {
				pdfContent = [];
		
				pdfContent.push([
					{
						text: 'lp.',
						style: 'mtHeaderLp'
					},
					{
						text: '',
						style: 'mtHeader'
					},
					{
						text: 'Ilość',
						style: 'mtHeader'
					},
					{
						text: 'EAN',
						style: 'mtHeader'
					},
					{
						text: '',
						style: 'mtHeader'
					}
				]);
		
				for (let i = 0; i < itemsOnPage; i++) {
		
					art = vm.articlesList[p];
					
					barcode.setEan = art.ean;

					pdfContent.push([
						{
							text: (p + 101) + '.',
							style: 'mtCellLp'
						},
						{
							text: art.name,
							style: 'mtCell'
						},
						{
							text: numPL(art.quantity),
							style: 'mtCellQuan'
						},
						{
							text: art.ean,
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
		
			vm.print();
		},

		print: () => {
			if (!!window.chrome) {
				pdfMake.createPdf(vm.labelContent).open();
			} else {
				pdfMake.createPdf(vm.labelContent).download('Etykiety A4.pdf');
			}
		}
	}
});