/** @format */

function numberToWord() {
	const display = document.getElementById("display");
	const inputValue =parseInt(document.getElementById("inputValue").value);
	display.innerHTML = inputValue;

    function numberToWordCalculate(number) {
        const oneToNineteen = [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];

        const tenth = [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];
        
        if (number < 0) {
            display.style.color = "red";
            return "You have to pass Intiger Number";
        }

        else if (number === 0) {
            display.style.color = "green";
            return "Zero";
        }


        else {

            display.style.color = "blue";

            // > 20 
            if (number < 20) {
				return oneToNineteen[number].toUpperCase();
			}

			// 20 - 99
			else if (number < 100) {
				if (number % 10 === 0) {
					return tenth[number / 10];
				} else {
					return (
						tenth[Math.floor(number / 10)] +
						" " +
						oneToNineteen[number % 10]
					);
				}
			}

			// 100 - 999
			else if (number < 1000) {
				if (number % 100 === 0) {
					return oneToNineteen[number / 100] + " hundred ";
				} else {
					return (
						oneToNineteen[Math.floor(number / 100)] +
						" hundred and " +
						numberToWordCalculate(number % 100)
					);
				}
			}

			// 1000 - 9999
			else if (number < 10000) {
				if (number % 1000 === 0) {
					return oneToNineteen[number / 1000] + " thousand ";
				} else {
					return (
						oneToNineteen[Math.floor(number / 1000)] +
						" thousand and " +
						numberToWordCalculate(number % 1000)
					);
				}
			}

			// 10000 - 99999
			else if (number < 100000) {
                if (number % 1000 === 0) {
                    if (number / 1000 < 20) {
                        return oneToNineteen[number / 1000] + " thousand ";
                    }
                    else {
                        return tenth[Math.floor(number / 10000)] +" "+ numberToWordCalculate(number % 10000) 
                    }
                } else {
                    if (number / 1000 < 20) {
                        return (
                            oneToNineteen[Math.floor(number / 1000)] +
                            " thousand and " +
                            numberToWordCalculate(number % 1000)
                        );
                    }

                    else {
                        return (tenth[Math.floor(number / 10000)]) + " " + numberToWordCalculate(number % 10000)

                    }
				}
			}
        }
	}

	const getValue = numberToWordCalculate(inputValue).toUpperCase();
	display.innerHTML = getValue;
}
