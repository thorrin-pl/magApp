class Ean {
  constructor() {
		this._ean = [];
		this._eanStr = "";
		this._bin = [];
		this._code = [];
		this._checksum = null;
		this._valid = false;
		this._withNumbers = false;
		this._zoom = 1;
		this._height = 0;
  }

  toArray(data) {
    let
      result = [];
    
    data.split("").forEach(
      (value) => {
        result.push(
          parseInt(value)
        );
      }
    );

    return result;
  }

  toBinCode() {
    const 
      codingTable = [
        //Table A:
        [0, 0, 0, 1, 1, 0, 1], //[00] A0
        [0, 0, 1, 1, 0, 0, 1], //[01] A1
        [0, 0, 1, 0, 0, 1, 1], //[02] A2
        [0, 1, 1, 1, 1, 0, 1], //[03] A3
        [0, 1, 0, 0, 0, 1, 1], //[04] A4
        [0, 1, 1, 0, 0, 0, 1], //[05] A5	
        [0, 1, 0, 1, 1, 1, 1], //[06] A6	
        [0, 1, 1, 1, 0, 1, 1], //[07] A7	
        [0, 1, 1, 0, 1, 1, 1], //[08] A8
        [0, 0, 0, 1, 0, 1, 1], //[09] A9
        //Table B:
        [0, 1, 0, 0, 1, 1, 1], //[10] B1
        [0, 1, 1, 0, 0, 1, 1], //[11] B1
        [0, 0, 1, 1, 0, 1, 1], //[12] B2
        [0, 1, 0, 0, 0, 0, 1], //[13] B3
        [0, 0, 1, 1, 1, 0, 1], //[14] B4
        [1, 1, 1, 1, 0, 0, 1], //[15] B5
        [0, 0, 0, 0, 1, 0, 1], //[16] B6
        [0, 0, 1, 0, 0, 0, 1], //[17] B7	
        [0, 0, 0, 1, 0, 0, 1], //[18] B8	
        [0, 0, 1, 0, 1, 1, 1], //[19] B9
        //Table C:
        [1, 1, 1, 0, 0, 1, 0], //[20] C1
        [1, 1, 0, 0, 1, 1, 0], //[21] C1
        [1, 1, 0, 1, 1, 0, 0], //[22] C2
        [1, 0, 0, 0, 0, 1, 0], //[23] C3
        [1, 0, 1, 1, 1, 0, 0], //[24] C4
        [1, 0, 0, 1, 1, 1, 0], //[25] C5	
        [1, 0, 1, 0, 0, 0, 0], //[26] C6
        [1, 0, 0, 0, 1, 0, 0], //[27] C7
        [1, 0, 0, 1, 0, 0, 0], //[28] C8
        [1, 1, 1, 0, 1, 0, 0]  //[29] C9
      ], 
      patternTable = [ 
				//tablica wzorów kodowania zależna od pierwszej cyfry kodu EAN13
				[0, 0, 0, 0, 0, 0], 
				[0, 0, 1, 0, 1, 1], 
				[0, 0, 1, 1, 0, 1], 
				[0, 0, 1, 1, 1, 0], 
				[0, 1, 0, 0, 1, 1], 
				[0, 1, 1, 0, 0, 1], 
				[0, 1, 1, 1, 0, 0], 
				[0, 1, 0, 1, 0, 1], 
				[0, 1, 0, 1, 1, 0], 
				[0, 1, 1, 0, 1, 0]
      ], 
      markStart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 11 pustych i znacznik początku kodu EAN13
      markMiddle = [0, 1, 0, 1, 0], // znacznik środkowy kodu EAN13
      markEnd = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0]; // znacznik końcowy kodu EAN13 i 7 pustych
    
    let 
      elementID	= 0, 
			resultBin		= [], //wynik bin
			resultCode = [], //wynik code
      pattern 	= []; // zmienna pomocnicza określająca z której serii tabeli pobierać kodowanie liczby
    
		pattern = patternTable[this._ean[0]]; //wybór wzoru
    resultBin = resultBin.concat(markStart);
    for (let i = 1; i < 7; i++) { // kodowanie liczb od 2 do 7
        elementID = (pattern[i - 1] * 10) + this._ean[i];
        resultBin = resultBin.concat(codingTable[elementID]);
    }
    resultBin = resultBin.concat(markMiddle);
    for (let i = 7; i < 13; i++) { // kodowania liczb od 8 do 13
        elementID = 20 + this._ean[i];
        resultBin = resultBin.concat(codingTable[elementID]);
    }
    resultBin = resultBin.concat(markEnd);
		
		this._bin = resultBin;
		
		let
			i = 0,
			j = 1, 
			length = resultBin.length;

		resultCode.push(0);

		while (i < length) {
			j = 1;
			while (resultBin[i] === resultBin[i+j]) {
				j++;
			}
			resultCode.push(j);
			i += j;
		}

		this._code = resultCode;
  }

	sum() {
		let 
			i = 0, 
			result = 0;
		
		for (i = 1; i < 12; i += 2) {
				result += this._ean[i];
		}
		result *= 3;
		for (i = 0; i < 11; i += 2) {
				result += this._ean[i];
		}
		result = (Math.ceil(result / 10) * 10) - result;
		return result;
	}

  /**
	 * @param {Number | String} arg
	 * Numer EAN13 w formie liczby bądź ciągu znaków.
	 */
  set setEan(arg) {
		let
			length = 0;

		this._bin = [];

		(typeof (arg) === "number") ? this._eanStr = arg.toString() : this._eanStr = arg;
		
		this._ean = this.toArray(this._eanStr);
		
		length = this._ean.length;

		this._checksum = this.sum();

		if (length === 13 && this._checksum === this._ean[12]) {
				this._valid = true;
		}
		else if (length === 12) {
				this._ean[12] = this._checksum;
				this._eanStr += this._checksum.toString();
				this._valid = true;
		} else
			this._valid = false;
		
		if (this._valid === true) {
			this.toBinCode();
		}
	}
	
	/**
	 * @param {boolean} arg
	 */
	set setNumbers(arg) {
		typeof(arg) === "boolean" ? this._withNumbers = arg : console.log(`${arg} isn't boolean`);
		;
	}

	set zoom(arg) {
		this._zoom = arg;
	}

	set height(arg) {
		this._height = arg;
	}

	get getCode() {
		return this._code;
	}

	get getBinary() {
		return this._bin;
	}

	get isValid() {
		return this._valid;
	}

	get getChecksum() {
		return this._checksum;
	}

	get getSvg() {
		let
			height = 50;
		
		this._withNumbers ? height = 60 : height = 50;

		return `
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 113 ${height}"
			preserveAspectRatio="none"
		>
			<g 
				fill="none" 
				stroke="black" 
			>
				<path 
					stroke-width="50"
					stroke-dasharray="${this._code.toString()}" 
						d="M0 25 L113 25" 
				/>
				<path 
					stroke-width="7"
					stroke-dasharray="0,11,1,1,1,43,1,1,1,43,1,1,1,7"
					d="M0 52 L113 52" 
				/>
			</g>
			<text x="0" y="60" font-size="12" font-family="arial">
				<tspan x="0">${this._eanStr.slice(0,1)}</tspan>
				<tspan x="15" textLength="42">${this._eanStr.slice(1,7)}</tspan>
				<tspan x="61" textLength="42">${this._eanStr.slice(7,13)}</tspan>
			</text>
		</svg>`;

	}

	get getCanvas() {
		let
			bar = true,
			result = [],
			x = 0,
			barHeight = (this._height > 0) ? this._height : (50 * this._zoom);
		
		this._code.forEach(
			(value, index) => {
				if (bar && index != 0) {
					result.push(
						{
							type: 'rect',
							w: value * this._zoom,
							h: barHeight,
							x: x,
							y: 0,
							fill: true,
							color: 'black'
						}
					);
				}
				x = x + value * this._zoom;
				bar = !bar;
			}
		);

		return result;
	}
}