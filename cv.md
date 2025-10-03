# [rsschool-cv](https://DaniilGK.github.io/rsschool-cv/cv)
# Daniil Gerasimyonok
## Frontend Developer
### Contact information: 
 __Telegram:__ @Raz_poliva
 __Email:__ gerasimenokd638@gmail.com
 __Git:__ [DaniilGK](https://github.com/DaniilGK)
[Linkedin](https://www.linkedin.com/in/daniilgk/)


``` 
function sortByBit(arr) {

	const countBits = num => num.toString(2).split("").filter(bit => bit === "1").length;

	return arr.sort((a, b) => {
		const countA = countBits(a);
		const countB = countBits(b);

		if(countA === countB) {
			return a - b
		}

		return countA - countB
	})
}
sortByBit()
```
