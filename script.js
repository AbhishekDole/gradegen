// Event Listener
const submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', (e)=>{
	// prevent the default action of action button
	e.preventDefault();

	// grab the marks
	const java = parseInt(document.querySelector('#java').value)
	const python = parseInt(document.querySelector('#python').value)
	const rdbms = parseInt(document.querySelector('#rdbms').value)
	const adj = parseInt(document.querySelector('#adj').value)
	const cgr = parseInt(document.querySelector('#cgr').value)

	// total marks 
	const totalMarks = document.querySelector('.total-marks').textContent = java+python+rdbms+adj+cgr

	// percentage
	const percentage = document.querySelector('.percentage').textContent = totalMarks / 5 + '%'

	// find grade
	const grade = document.querySelector('.grade').textContent = findGrade(totalMarks)

	document.querySelector('.marks-container').style.visibility = 'hidden'
	document.querySelector('.result-container').style.visibility = 'visible'	
})


// find the grade

function findGrade(marks) {
	if(marks <= 500 && marks > 450) return 'A+'
	else if(marks <= 449 && marks > 400) return 'A'
	else if(marks <= 399 && marks > 350) return 'B+'
	else if(marks <= 349 && marks > 300) return 'B'
	else if(marks <= 299 && marks > 250) return 'C'
	else if(marks <= 249 && marks > 200) return 'D'
	else if(marks <= 199 && marks > 150) return 'E'
	else if(marks <= 149) return 'fail'
}









