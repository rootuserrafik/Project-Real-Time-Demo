const field = document.querySelector('items')
const li = Array.from(field.children)
const select = document.getElementById('select')
const ar = []

for (let i of li){
	const last = i.lastElementChild;
	const x = last.textContent.trim();
	const y = Number(x.substring(1));
	i.setAttribute('data-price', y)
	ar.push(i);
}

select.onchange = sortingValue;
function sortingValue(){
	if (this.value === 'default'){
		while (field.firstChild) {
			field.removeChild(field.firstChild)
		}
	field.append(...ar);
	} if (this.value === 'lowtohigh') {
		sortElem(field, li, true);
	} if (this.value === 'hightolow') {
		sortElem(field, li, false);
	}
}


function sortElem(field, li, asc){
	const dm, sortLi;
	dm = asc ? 1 : -1;
	sortLi = li.sort((a, b) => {
		const ax = a.getAttribute('data-price');
		const bx = b.getAttribute('data-price');

		return ax > bx ? (1*dm) : (-1*dm);
	})
	while (field.firstChild) {
		field.removeChild(field.firstChild)
	}
	field.append(...sortLi);
}