function logger(str) { console.log(str); }
var barcode = new Ean();

var vm = new Vue({
	el: '#vm',
	data: {
		howAdding: "addEntered",
		eanIn: "",
		quantityIn : "",
		nameIn: "",
		validEAN: false,
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
		}
	}
});