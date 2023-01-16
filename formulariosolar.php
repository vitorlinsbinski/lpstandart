<?php
        if($_POST) {
            $curl = curl_init();
            curl_setopt_array($curl, [
                CURLOPT_URL => "https://www.google.com/recaptcha/api/siteverify",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => [
                    'secret' => '6LeHebkjAAAAAHnnra8zRecgD-kk6-w_NKXoEklz',
                    'response' => $_POST['g-recaptcha-response'] ?? ''
                ]

            ]);

            $response = curl_exec($curl);

            curl_close($curl);

            $responseArray = json_decode($response, true);

            $sucesso = $responseArray['success'] ?? false;

            if($sucesso == true) {
                $nome = $_POST['nome'];
                $email = $_POST['email'];
                $telefone = $_POST['telefone'];
                $cidade = $_POST['cidade'];
                $estado = $_POST['estado'];
                $tipoDeLocal = $_POST['tipo-de-local'];
                $consumoKWh = $_POST['valor-medio-consumo-de-energia'];
                $valorDaContaDeEnergia = $_POST['consumo-energia-eletrica-kwh'];
        
                $to = "contato@standart.eng.br";
                $subject = "Contato - Standart Engenharia Elétrica";
                $subject = '=?UTF-8?B?'.base64_encode($subject).'?=';
                
                $body = "Nome: ".$nome."\n".
                        "Email: ".$email."\n".
                        "Telefone: ".$telefone."\n".
                        "Cidade: ".$cidade."\n".
                        "Estado: ".$estado."\n".
                        "Tipo de Local : ".$tipoDeLocal."\n".
                        "Consumo em KWh : ".$consumoKWh."\n".
                        "Valor da conta de energia em R$ : ".$valorDaContaDeEnergia."\n";
                $header = "From: standart-no-reply-contato@standart.eng.br"."\r\n".
                        "Reply-To: ".$email."\r\n".
                        "X=Mailer:PHP".phpversion();
                        
                $mensagemParaCliente = "Olá! Agradecemos pelo contato. Iremos respondê-lo o mais breve possível";
                $mensagemParaCliente = '=?UTF-8?B?'.base64_encode($mensagemParaCliente).'?=';
                        
                $headerClient = "From: standart-no-reply-contato@standart.eng.br".
                                "Reply-To: no-reply-contato@standart.eng.br"."\r\n".
                                "X=Mailer:PHP".phpversion();
        
                mail($email, $subject, "Olá! agradecemos pelo contato. Responderemos o mais breve possível."."\n"."\n"."Standart Engenharia Elétrica"."\n"."contato@standart.eng.br"."\n"."(66) 99997-0463"."\n"."Rua Carini, N 590, Sala B, Sinop-MT, 78555-398, BR", $headerClient);
        
                if(mail($to, $subject, $body, $header)) {
                    header('Location: obrigado.php');
        
                } else {
                    header('Location: erro.php');
        
                }
            } else {
                echo 'Recaptcha inválido!'
            }
        }
        
    
    
?>