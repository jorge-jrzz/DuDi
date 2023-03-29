const pdfjs = require("pdfjs-dist/build/pdf")

var pdfURL = "./PDF_file.pdf";
// var pdfURL = "./Codigo-de-Etica-corporativo.pdf";
var pdf = pdfjs.getDocument(pdfURL);

var textoCompleto = ""; // Definimos la variable donde se guardará el contenido

pdf.promise.then(function(pdfDocument) {
  var pages = [];
  for (var i = 1; i <= pdfDocument.numPages; i++) {
    pages.push(i);
  }
  return Promise.all(pages.map(function(pageNumber) {
    return pdfDocument.getPage(pageNumber).then(function(page) {
      return page.getTextContent();
    });
  }));
}).then(function(textContents) {
  textContents.forEach(function(textContent) {
    textContent.items.forEach(function(item) {
      textoCompleto += item.str + " "; // Concatenamos el texto en la variable
    });
  });
  console.log(textoCompleto); // Mostramos el contenido completo del PDF
});

// OpenAI para la validacion de los datos del archivo

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

var content =  "Eres un excelente agente de compliance, que revisara codigos de conducta de empresas farmaceuticas. Te proporcionare un código de ética de una empresa farmacéutica para que en una palabra contestes si es que:"
var question = "¿Esta empresa cuenta con igualdad de oportunidades para hombres y mujeres? Si o no. El siguiente es el código de conducta:"
var prompt = content + question + textoCompleto;

async function start() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt, 
    temperature: 0,
    max_tokens: 100, 
  });

  console.log("Pregunta 1: " + response.data.choices[0].text);
}
start()

question = "¿Promueve el respeto y la armonia?"
prompt = content + question + textoCompleto;

async function start1() {
  response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt, 
    temperature: 0,
    max_tokens: 100, 
  });

  console.log("Pregunta 2: " + response.data.choices[0].text);
}
start1()

question = "¿El trato a su personal esta basado y/o fundamentado en los principios que este codigo establece y el los Derechos Humanos?"
prompt = content + question + textoCompleto;

async function start2() {
  response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt, 
    temperature: 0,
    max_tokens: 100, 
  });

  console.log("Pregunta 3: " + response.data.choices[0].text);
}
start2()

question = "¿Promueve la no discriminacion, diversidad e inclusion?"
prompt = content + question + textoCompleto;

async function start3() {
  response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt, 
    temperature: 0,
    max_tokens: 100, 
  });

  console.log("Pregunta 4: " + response.data.choices[0].text);
}
start3()

question = "¿Contiene campañas de capacitacion en materia de integridad a su personal?"
prompt = content + question + textoCompleto;

async function start4() {
  response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt, 
    temperature: 0,
    max_tokens: 100, 
  });

  console.log("Pregunta 5: " + response.data.choices[0].text);
}
start4()
