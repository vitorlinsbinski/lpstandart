// cadastrar mensagem no banco de dados
const formGetMessage = document.getElementById('form-teste');

if(formGetMessage) {
  formGetMessage.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const dataForm = new FormData(formGetMessage);

    const data = await fetch("cadastrar.php", {
      method: "POST",
      body: dataForm
    });

    const response = await data.json();

    console.log(response);


  });
};