class Engine {

	number

	previousNumber

	previousInput

	OperationEnum = {addition: '+', equal: '='}

	constructor(){
		
		this.number = ''

		this.previousInput = null

		this.previousNumber = null

	}

	calculate(input){

		if(this.isDigit(input)){

			if(this.isOperation(this.previousInput)){

				this.number = ''

			}

			this.number += input

			this.previousInput = input

			return this.number

		};

		if(this.isOperation(input)){

			if(this.previousNumber == null){

				this.previousNumber = this.number
				this.previousInput = input	

				return this.number

			} else {

				if(this.number !== ''){

					this.previousInput = input

					if(input === this.OperationEnum.addition || this.OperationEnum.equal){

						return this.add(this.previousNumber, this.number)

					}

				} else {

					this.previousInput = input

					return this.previousNumber

				}

			}

		    this.previousNumber = input

		}

		return "Error"

	}

	isDigit(input){

		return !isNaN(input)

	}

	isOperation(input){

		return Object.values(this.OperationEnum).includes(input)

	}

	add(previousNumber, number){

		return (parseFloat(previousNumber) + parseFloat(number)).toString()

	}

}

export default Engine;