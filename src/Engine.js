class Engine {

	number

	previousNumber

	repeatNumber

	previousInput

	previousOperation

	repeatOperation

	clearable

	OperationEnum = {
		addition: '+', 
		subtraction: '-', 
		multiplication: 'x', 
		division: '\u00F7',
		percentage: '%',
		sign: '+/-', 
		equal: '=',
		allClear: 'AC',
		clear: 'C'
	}

	constructor(){
		
		this.number = ''

		this.previousInput = null

		this.previousNumber = null

		this.previousOperation = null

		this.repeatNumber = null

		this.repeatOperation = null

		this.clearable = false

	}

	calculate(input){

		if(this.isDigit(input)){

			this.clearable = true

			if(this.isOperation(this.previousInput)){

				this.number = ''

			}

			if(input === '.' && this.containDecimalPoint(this.number)){

				return this.number

			}

			if(input === '.' && this.number === ''){

				this.number = '0.'

				return this.number

			}

			this.number += input

			this.previousInput = input

			return this.removeZero(this.number)

		};

		if(this.isOperation(input)){
			
			if(input === this.OperationEnum.addition) {

				this.repeatNumber = null
				this.repeatOperation = null

				if(this.previousNumber == null){
					this.previousNumber = this.number
					this.previousInput = input	
					this.previousOperation = input
					return this.number
				} else {
					let temp = this.previousInput
					this.previousInput = input

					if(input === this.OperationEnum.addition && temp !== input && this.previousOperation !== this.OperationEnum.equal && temp !== '='){
						if(this.previousOperation === this.OperationEnum.addition){
							this.number = this.add(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.subtraction){
							this.number = this.subtract(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.multiplication){
							this.number = this.muliply(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.division){
							this.number = this.divide(this.previousNumber, this.number);
						}
						this.previousNumber = this.number
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					} else {
						this.previousNumber = this.number
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					}
				}

			}

			if(input === this.OperationEnum.subtraction) {

				this.repeatNumber = null
				this.repeatOperation = null

				if(this.previousNumber == null){
					this.previousNumber = this.number
					this.previousInput = input	
					this.previousOperation = input
					return this.number
				} else {
					let temp = this.previousInput
					this.previousInput = input
					if(input === this.OperationEnum.subtraction && temp !== input && this.previousOperation !== this.OperationEnum.equal && temp !== '='){
						if(this.previousOperation === this.OperationEnum.addition){
							this.number = this.add(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.subtraction){
							this.number = this.subtract(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.multiplication){
							this.number = this.muliply(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.division){
							this.number = this.divide(this.previousNumber, this.number);
						}
						this.previousNumber = this.number
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					} else {
						this.previousNumber = this.number
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					}
				}

			}

			if(input === this.OperationEnum.multiplication) {

				this.repeatNumber = null
				this.repeatOperation = null

				if(this.previousNumber == null){
					this.previousNumber = this.number
					this.previousInput = input	
					this.previousOperation = input
					return this.number
				} else {
					let temp = this.previousInput
					this.previousInput = input
					if(input === this.OperationEnum.multiplication && temp !== input && this.previousOperation !== this.OperationEnum.equal && temp !== '='){
						if(this.previousOperation === this.OperationEnum.addition){
							this.number = this.add(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.subtraction){
							this.number = this.subtract(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.multiplication){
							this.number = this.muliply(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.division){
							this.number = this.divide(this.previousNumber, this.number);
						}
						this.previousNumber = this.number
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					} else {
						this.previousNumber = this.number
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					}
				}

			}

			if(input === this.OperationEnum.division) {

				this.repeatNumber = null
				this.repeatOperation = null

				if(this.previousNumber == null){
					this.previousNumber = this.number
					this.previousInput = input	
					this.previousOperation = input
					return this.number
				} else {
					let temp = this.previousInput
					this.previousInput = input
					if(input === this.OperationEnum.division && temp !== input && this.previousOperation !== this.OperationEnum.equal && temp !== '='){
						if(this.previousOperation === this.OperationEnum.addition){
							this.number = this.add(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.subtraction){
							this.number = this.subtract(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.multiplication){
							this.number = this.muliply(this.previousNumber, this.number);
						}
						if(this.previousOperation === this.OperationEnum.division){
							this.number = this.divide(this.previousNumber, this.number);
						}
						this.previousNumber = this.number
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					} else {
						this.previousNumber = this.number
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					}
				}

			}

			if(input === this.OperationEnum.percentage){

				if(this.number === ''){
					this.number = '0'
				}

				this.number = this.percentage(this.number)

				return this.number

			}

			if(input === this.OperationEnum.sign){

				if(this.number === ''){
					this.number = '0'
				}

				this.number = this.changeSign(this.number)

				return this.number

			}

			if(input === this.OperationEnum.allClear){

				return this.allClear()

			}

			if(input === this.OperationEnum.clear){

				return this.clear()

			}

			if(input === this.OperationEnum.equal) {

				if(this.previousNumber == null){
					this.previousNumber = this.number
					this.previousInput = input	
					this.previousOperation = input
					return this.number
				} else {
					
					this.previousInput = input
					if(this.previousOperation !== this.OperationEnum.equal && input === this.OperationEnum.equal){	
						let temp = this.number
						if(this.previousOperation === this.OperationEnum.addition){
							if(this.repeatNumber !== null){
								this.number = this.add(this.number, this.repeatNumber);	
							} else {
								this.repeatNumber = this.number	
								this.number = this.add(this.previousNumber, this.number);
							}
						}
						if(this.previousOperation === this.OperationEnum.subtraction){
							if(this.repeatNumber !== null){
								this.number = this.subtract(this.number, this.repeatNumber);	
							} else {
								this.repeatNumber = this.number	
								this.number = this.subtract(this.previousNumber, this.number);
							}
						}
						if(this.previousOperation === this.OperationEnum.multiplication){
							if(this.repeatNumber !== null){
								this.number = this.muliply(this.number, this.repeatNumber);	
							} else {
								this.repeatNumber = this.number	
								this.number = this.muliply(this.previousNumber, this.number);
							}
						}
						if(this.previousOperation === this.OperationEnum.division){
							if(this.repeatNumber !== null){
								this.number = this.divide(this.number, this.repeatNumber);	
							} else {
								this.repeatNumber = this.number	
								this.number = this.divide(this.previousNumber, this.number);
							}
						}
						this.repeatNumber = temp
						this.repeatOperation = this.previousOperation
						this.previousInput = input	
						this.previousOperation = input
						return this.number

					} else {

						let temp = this.number

						if(this.repeatNumber != null){

							if(this.repeatOperation === this.OperationEnum.addition){
								this.number = this.add(this.number, this.repeatNumber);	
							}
							if(this.repeatOperation === this.OperationEnum.subtraction){
								this.number = this.subtract(this.number, this.repeatNumber);	
							}
							if(this.repeatOperation === this.OperationEnum.multiplication){
								this.number = this.muliply(this.number, this.repeatNumber);	
							}
							if(this.repeatOperation === this.OperationEnum.division){
								this.number = this.divide(this.number, this.repeatNumber);	
							}

						}

						this.previousNumber = temp
						this.previousInput = input	
						this.previousOperation = input
						return this.number
					}
				}

			}

		}

		return "Error"

	}

	isDigit(input){

		return !isNaN(input) || input === '.'

	}

	isOperation(input){

		return Object.values(this.OperationEnum).includes(input)

	}

	add(previousNumber, number){

		return (parseFloat(previousNumber) + parseFloat(number)).toString()

	}

	subtract(previousNumber, number){

		return (parseFloat(previousNumber) - parseFloat(number)).toString()

	}

	muliply(previousNumber, number){

		return (parseFloat(previousNumber) * parseFloat(number)).toString()

	}

	divide(previousNumber, number){

		return (parseFloat(previousNumber) / parseFloat(number)).toString()

	}

	percentage(number){

		return (parseFloat(number) / 100).toString()

	}

	changeSign(number){

		return parseFloat(number) === 0 ? '0' : (parseFloat(number) * -1).toString()

	}

	clear(){

		this.previousInput = null

		this.previousNumber = null

		this.previousOperation = null

		this.repeatNumber = null

		this.repeatOperation = null

		this.clearable = false

		return this.number

	}

	allClear(){

		this.number = ''

		this.previousInput = null

		this.previousNumber = null

		this.previousOperation = null

		this.repeatNumber = null

		this.repeatOperation = null

		this.clearable = false

		return '0'

	}

	removeZero(number){

		if(number.length > 1 && number[0] === '0' && number[1] !== '.'){

			return this.removeZero(number.substr(1, number.length))

		}

		return number

	}

	containDecimalPoint(number){

		return number.includes('.')

	}

}

export default Engine;