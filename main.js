
// the answers will stored in value in tags and all coorect answers are B and we compare with this
const CorrectAnswers = ["B", "B", "B", "B" ];
// first sumbit form chacking
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
// console.log(form);
// it gives to parameters 1- event and another callback function
form.addEventListener('submit', e =>{
    e.preventDefault();
    //create score for answers
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; // value is the text in the file not a and b answer
    console.log(userAnswers)

    // check answers using index of correct answers, if it is equal to correct answer we increase score

    userAnswers.forEach((answer, index) => {
        console.log(answer);
        console.log(CorrectAnswers[index]);// if without index it returns array.
        if(answer === CorrectAnswers[index]){
            score+=25;
        }

    });
    console.log(score);
    //show the result on page
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });

})

