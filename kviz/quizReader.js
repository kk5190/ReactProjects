// write a function to red file
function extractQuestionAnswer(input) {
  let question = input.substring(0, input.indexOf("<details><summary><b>Answer</b></summary>"));
  let answer = input.substring(input.indexOf("<details><summary><b>Answer</b></summary>"));
  return { question, answer };
}

function extractAnswer(str) {
  const answerRegex = /Answer: (\w+)\n/;
  const answerMatch = str.match(answerRegex);
  const answer = answerMatch ? answerMatch[1] : null;

  const explanationRegex = /#### Answer: \w+\n([\s\S]+)\n<\/p>/;
  const explanationMatch = str.match(explanationRegex);
  const explanation = explanationMatch ? explanationMatch[1] : null;

  return { answer, explanation };
}

function extractQuestion(str) {
  const questionRegex = /^###### (.+)$/m;
  const questionMatch = str.match(questionRegex);
  const question = questionMatch ? questionMatch[1] : null;

  const codeRegex = /```javascript\n([\s\S]+)\n```/;
  const codeMatch = str.match(codeRegex);
  const code = codeMatch ? codeMatch[1] : null;
  
  const optionsRegex = /- (.+)\n/g;
  const optionsMatch = str.match(optionsRegex);
  const options = optionsMatch ? optionsMatch.map(option => option.slice(2)) : null;

  const optionsObject = {};
  if (options) {
    options.forEach((option) => {
      optionsObject[option[0]] = option.slice(2);
    });
  }

  return { question, code, options: optionsObject };
}

function createJson(markdown) {
  const { question: questionPart, answer: answerPart } = extractQuestionAnswer(markdown);
  const { question, code, options } = extractQuestion(questionPart);
  const { answer, explanation } = extractAnswer(answerPart)
  return {
    question,
    code,
    options,
    answer,
    explanation
  }
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = event => {
      resolve(event.target.result);
    };
    reader.onerror = error => {
      reject(error);
    };
    reader.readAsText(file);
  });
}
const questionBank = [];

const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', async function() {
  const file = this.files[0];
  const content = await readFile(file);
  const rawQuestions = content.split('---')
  console.log({rawQuestions})
  rawQuestions.map((question)=>{
    if (question.length > 0){
      questionBank.push(createJson(question))
    }
  })
console.log({questionBank})
});


