/*==============================================================================================
   HTML Parsing Blocks. The following vars contain HTML code to be inserted in the Register
   Today HTML pages based on the business logic, e.g., whether the registration is for a company
   or individual, whether an old serial number is needed, whether State/Region/Province is 
   required, etc.

   (C) Copyright 2004 by Autodesk, Inc.  All rights reserved.
  ==============================================================================================*/

/////////////////////////////////////////////
// LOCALIZATION RESOURCES HERE:
/////////////////////////////////////////////

/////////////////////////////////////////////
// Product Language: 
//
// NOTE TO LOCALIZATION: The list below was inserted on 29 Jan 2001 and it was up to date at that point.
// You may use the codes detailed below if you are sure that these have not changed (they generally don't change), otherwise, 
// please check these before inserting the language code.
/////////////////////////////////////////////
//
//English - US and International:  (en-us)
//German:  (de)
//French:   (fr)
//Italian:   (it)
//Spanish:   (es)
//Czech:   (cs)             
//Hungarian:   (hu)
//Polish:   (pl)
//Russian:   (ru)
//Japanese:   (ja)
//Korean:   (ko)
//Traditional Chinese (Taiwan) :   (zh-tw)
//Simplified Chinese (PRC) :   (zh-cn)
//Brazilian Portuguese (pt-br)
//
/////////////////////////////////////////////

//////////////////////////////////////////////
///// Add as ECO17 Direct Addition to the Privacy Policy 
/////
var xmsgGatherInfoDuringInstall= "Observe que todos os dados coletados durante as ativações do produto são usados de acordo com a ";
var xmsgOfflinePrivacyWarning= "Se não estiver conectado à Internet, ative a codificação Seleção automática no seu navegador Internet Explorer (R) para visualizar a política de privacidade. Caso possa acessar a Internet, a política de privacidade também está disponível on-line em autodesk.com."
////////////////////////////////////////////////////

var xmsgProductLanguage=	"pt-br";

/////////////////////////////////////////////
// Disable field color
/////////////////////////////////////////////
var xmsgDisableColor=		"#7f7f7f";

var xmsgNavigationBGColor=	"#f4f4f4";
var xmsgNavigationDisableColor=	"#808080";

/////////////////////////////////////////////
// HTML FILE TITLE STRINGS
/////////////////////////////////////////////
var xmsgRTAuthConfirmed=				"Ativação completada";
var xmsgRTActLicFound=                  "Licença ativada encontrada";
var xmsgRTActLicFoundError=            "Erro de ativação de registro"; 
var xmsgRTAuthEntryError=				"Erro de entrada de ativação";
var xmsgRTAuthError=					"Erro de ativação";
var xmsgRTAuthNow=						"Autorizar agora";
var xmsgRTBeginReg=						"Opções de ativação";
var xmsgRTBuyInformation=				"Informações sobre a compra";
var xmsgRTConfirm=						"Confirmação do usuário";
var xmsgRTConnect=						"Necessária a conexão à Internet";
var xmsgRTConnectFail=					"Erro de conexão";
var xmsgRTContactAutodesk=				"Entrar em contato com a Autodesk";
var xmsgRTOfflineActivationRequest=     "Solicitação de ativação off-line"
var xmsgRTCountryPage=					"País";
var xmsgRTEmail=						"E-mail";
var xmsgRTFaxUS=						"Fax do usuário para os EUA";
var xmsgRTMailUS=						"Correspondência do usuário para os EUA";
var xmsgRTPurchaseOffline=				"Comprar off-line";
var xmsgRTRegConfirmed=					"Registro confirmado";
var xmsgRTExportConfirm=                "Confirmação da exportação da licença";
var xmsgRTImportConfirm=                "Confirmação da importação da licença"; 
var xmsgRTRegVol=						"Registro do produto";
var xmsgRTSUNDataConfirm=				"Confirmações de dados SUN";
var xmsgRTSUNServer=					"Servidor SUN";
var xmsgRTSUNSubmit=					"Confirmação do usuário/Enviar SUN";
var xmsgRTUserInfo=						"Informações sobre o usuário";
var xmsgRTLicFileSaveError=				"Erro ao salvar o arquivo de licença Flexlm";
var xmsgRTProductInfo=                   "Necessárias as informações do produto";
var xmsgRTProductInfo2=                   "Opções de ativação";
var xmsgNSARTBegin=						"Obter Licença de Rede";
var xmsgNSARTLocateLicense=				"Localizar Arquivo da Licença";
var xmsgNSARTEditServerAndSeat=			"Inserir ou Modificar Informação de Servidor";
var xmsgNSARTConfirmServerAndSeat=		"Confirmar Informação de Servidor";
var xmsgNSARTEnterSN=					"Inserir Número de Série";
var xmsgProcessingError=				"Erro de processamento";
var xmsgTimeout=        				"Esta sessão expirou";
var xmsgLicenseActivation=        		"Ativando";
var xmsgLicenseTransfer=        		"Transferência de licença";

/////////////////////////////////////////////
// Software Information RESOURCES HERE:
/////////////////////////////////////////////
var xmsgActivationFor=	"Ativação para:";
var xmsgPurchase=       "Compra:";
var xmsgRegistrationFor=       "Registro para:";
var xmsgProduct=	"Produto: ";
var xmsgsernum=		"Número de série: ";
var xmsgsernumWGID=	"Número de série: ";//modify by joyce.min on 2007-8-16
var xmsgprokeyWGID=  "Chave do produto: "; // add by  joyce.min on 2007-8-16
var xmsgOsernum=	"Número de série anterior: ";
//var xmsgOprokey=      "Previous product key: "; // add by joyce.min on 2007-8-17
var xmsgOldSerialNum=	"Número de série anterior:*";
var xmsgNewSernum1=	"Insira o número de série ou o ID de grupo:"; //???
//var xmsgNewProkey1=
var xmsgRequestCode=	"Código da solicitação: ";
var xmsgRegAuthCode=	"Código de ativação: ";
var xmsgApplicationKey=	"Chave do aplicativo: ";
var xmsgRTHostID=				"ID do host:";
var xmsgRTFlexlmLicenseFile=	"Arquivo de licença:";

/////////////////////////////////////////////
// Primary Rolodex RESOURCES HERE:
/////////////////////////////////////////////
var xmsgSalutation=	"Saudação:";
var xmsgNone=		"(nenhum)";
var xmsgNotEntered=	"(não inserido)";
var xmsgFirstname=	"Nome:";
//var xmsgFirstname= langCode+label.fname;
var xmsgFirstnameKanji=	"Nome (Kanji):";
var xmsgFirstnameFurigana=	"Nome (Zenkaku Kana):";
var xmsgLastname=	"Sobrenome:";
var xmsgLastnameKanji=	"Sobrenome (Kanji):";
var xmsgLastnameFurigana=	"Sobrenome (Zenkaku Kana):";
var xmsgCompanyName=	"Nome da empresa:*";
var xmsgCompanyName2=	"Nome da empresa:";
var xmsgCompanyNameJP=	"Nome da empresa (Kanji):";
var xmsgPhone=		"Telefone:";
var xmsgArea=		"Área:";
var xmsgNumber=		"Número:";
var xmsgExt=		"Ramal:";
var xmsgFax=		"Fax:";
var xmsgFaxTo=		"Fax para ";
var xmsgEmail=		"E-mail:";
var xmsgEmailTo=	"E-mail para ";
var xmsgAddress=	"Endereço:";
var xmsgAddress2=	"Endereço 2:";
var xmsgAddress3=	"Endereço 3:";
var xmsgJPAddress=	"Cidade:";
var xmsgJPAddress2=	"Endereço:";
var xmsgJPAddress3=	"Nome do prédio (e número do conjunto):";
var xmsgCity=		"Cidade:";
var xmsgSRP=		"Estado/região/município:";
var xmsgStText=		"Estado:";
var xmsgPrText=		"Município:";
var xmsgRegText=	"Região:";
var xmsgPrefectureText=	"Divisão administrativa:";
var xmsgCountyText=	"Condado:";
var xmsgCantonText=	"Cantão:";
var xmsgZipCode=	"CEP:";
var xmsgPostCode=	"Código postal:";
var xmsgCountry=	"País ou região:";
var xmsgDealer=		"Nome do revendedor Autodesk autorizado:";
var xmsgMailTo=		"Mensagem para ";
var xmsgAnEmail=	"um endereço de e-mail";
var xmsgAFax=		"um número de fax";
var xmsgAMailAddress=	"um endereço para correspondência";
var xmsgPostalMail=		"Correio postal";

///////////////////////////////////////////////
// Button RESOURCES HERE:
///////////////////////////////////////////////
var xmsgBack=			"Voltar";
var xmsgCancel=			"Cancelar";
var xmsgNext=			"Avançar";
var xmsgPrint=			"Imprimir";
var xmsgPrintForm=		"Abrir formulário de solicitação de ativação";
var xmsgNo=				"Não";
var xmsgYes=			"Sim";
var xmsgBrowse=			"Procurar";
var xmsgDone=			"Pronto";
var xmsgOK=				"OK";
var xmsgClose=			"Fechar";
var xmsgSubmit=			"Enviar";
var xmsgFinish=			"Concluir";
var xmsgReset=			"Limpar todos";

///////////////////////////////////////////////
// Registration User Prompt RESOURCES HERE:
///////////////////////////////////////////////
var xmsgPleaseSelect=		"Selecione ";
var xmsgPleaseSelect2=		"Para ativar imediatamente sua licença %1, selecione \"Conectar agora e ativar!\” novamente. Se ainda tiver problemas durante a ativação, e você solicitou e recebeu um código de ativação da Autodesk, selecione \"Tenho um código de ativação da Autodesk\".";
var xmsgSelectCountry=		"Selecione o país ou a região em que o produto será usado:";
var xmsgSelectCountry2=		"País/Região:";
var xmsgInformation=		"Informações";
var xmsgCompanyInfo=		"Informações sobre a empresa";
var xmsgContactInfo=		"Informações de contato";
var xmsgResponseMethodInfo=	"Método de resposta:"; //modify as the Spec. recommond by joyce.min on 2007-8-17
var xmsgFormSubmitMethodInfo=	"Método de envio de formulário:";
var xmsgConfirmInfo=		"Confirmar informações";
var xmsgConfirmInfoTxt=		"Confirme as informações a seguir. Clique em 'Enviar' para enviar as informações, ou em 'Voltar' para efetuar alterações.";
var xmsgConfirmCustIDInfoTxt=		"Confirme as informações a seguir. Clique em 'Avançar' para continuar, ou em 'Voltar' para efetuar alterações.";
var xmsgCountryHdr=			"Iniciar registro - ativação";
var xmsgCountryRegTo=		"Este produto será registrado para:";
var xmsgCountryComp=		"Empresa";
var xmsgCountryIndiv=		"Indivíduo";
var xmsgCountryUpgrade=		"Isto é uma atualização";
var xmsgCountryUpgDetail=	"(Se você tiver uma Subscription, clique o número)";
var xmsgConnectHdr1=		"Conectando";
var xmsgConnectHdr2 = "Ativando sua licença do produto...";
var xmsgConnectHdr = "Necessária a conexão à Internet";
var xmsgConnectMsg=		"Conexão";
var xmsgConnectTxt=		"Nenhuma conexão com a Internet foi detectada. Para ativar uma solicitação on-line, conecte-se à Internet agora. Após estabelecer uma conexão, clique em Avançar.";
var xmsgConnectTxtOLT=    "Não foi detectada nenhuma conexão à Internet. Para transferir a licença, conecte-se à Internet agora.";
var xmsgConnectTxt2=	"Quando a conexão à Internet estiver estabelecida, clique em 'Avançar'.";
var xmsgConnectTxt2a=	"Após estar conectado à Internet, clique em Avançar.";
var xmsgConnectTxt3=	"Caso não consiga estabelecer uma conexão com a Internet, você pode enviar sua solicitação para a Autodesk utilizando um método alternativo.";
var xmsgConnectTxt4=	"Parece que você não está conectado à Internet. Para poder comprar uma licença deste produto, é necessária uma conexão à Internet.";
var xmsgConnectTxt4a=	"Parece que você não está conectado à Internet. Para poder ativar ou comprar uma licença para %1, é necessária uma conexão à Internet.";
var xmsgConnectWarming=	"O envio destas informações pode demorar alguns minutos. Aguarde.";
var xmsgTryAgain=		"Tentar novamente";
var xmsgReEnterOld=		"Insira novamente o número de série anterior";
var xmsgNewSernum3=		"Insira o novo número de série e clique em 'Avançar'.";
var xmsgNewSernum4=		"O software de avaliação está instalado com um número de série (000-00000000) que não pode ser registrado. Se você tiver comprado uma cópia desse software, receberá um novo número de série. É necessário usar esse número de série para ativar e habilitar o produto para uso.";
var xmsgNewSernum5=		"Novo número de série:"; //modify by joyce.min on 2007-8-16
var xmsgProductKey=      "Insira a chave do produto:"; //modify by joyce.min on 2007-8-16
var xmsgNewSernum6=		"Confirmar novo número de série:";
var xmsgNewSernum8=		"Insira novamente o novo número de série";
var xmsgUseOtherMethod=		"Usar outro método de registro";
var xmsgContactAutodesk=	"Entrar em contato com a Autodesk";
var xmsgContactAutodeskLink="Para contactar a Autodesk, clique no seguinte link:";
var xmsgContactOptions=		"as opções de contato estão exibidas a seguir.";

var xmsgPuchaseInfo1=		"Informações sobre a compra";
var xmsgPuchaseInfo2=		"Você optou pela compra on-line."; //modify as the LF1_Spec_SCV commend on p99 by joyce.min
var xmsgPuchaseInfo3=		"Clique em Avançar para continuar, ou em Cancelar para encerrar o processamento."; //modify as the LF1_Spec_SCV commend on p99 by joyce.min

var xmsgRegTitle=		"Registro - Ativação";
var xmsgRegTitleBuy=		"Comprar produtos da Autodesk on-line";
var xmsgRegTitleNSA=		"Ativação de licença de rede";
var xmsgRegInfo=		"Informações do cliente";
var xmsgRegInfo2=		"Método de registro";
var xmsgRegInfo3=		"Selecione um método de registro e clique em 'Avançar'.";
var xmsgRegmethod1=		"Conectar-se diretamente via Internet";
var xmsgRegmethod3=		"Gostaria de receber meu código de ativação por:";
var xmsgRegmethod5=		"Correio";
var xmsgRegmethod6=		"Clique em 'Imprimir' a seguir e envie este formulário por correio para:";
var xmsgRegmethod7=		"Fax";
var xmsgRegmethod8=		"Para imprimir um formulário e enviá-lo por fax a Autodesk em %1, primeiro escolha o método pelo qual deseja receber o código de ativação. A seguir, clique em 'Imprimir'. Poderá então enviar o formulário.";
var xmsgRegmethod9=		"E-mail";
var xmsgRegmethod10NSA=		"As informações de registro e licença de servidor a seguir foram automaticamente salvas em um arquivo.";
var xmsgRegmethod10=		"As informações de registro foram salvas no arquivo a seguir, que será usado para concluir o processo de e-mail (não modifique este arquivo):";
var xmsgRegmethod11NSA=		"Envie a informação do arquivo de registro e licença de servidor por e-mail %1 a %2.";
var xmsgRegmethod11=		"Envie por email o arquivo de informação de registro %1 a %2.";
var xmsgRegmethod12=		"Não altere o arquivo. <p>Recomendável imprimir uma cópia desta página e guardar. As informações contidas serão necessárias para concluir manualmente o processamento do e-mail.<p>Pode-se imprimir uma cópia destas informações para arquivar. Clicar em 'Pronto' para fechar a aplicação.";
var xmsgRegmethod13=		"Para anexar e enviar %1 automaticamente para Autodesk, clique no link abaixo.";
var xmsgRegmethod14=		"Anexar e enviar e-mail";
var xmsgRegmethod15=		"Observação: o endereço de e-mail é automatizado. Não envie comunicações de e-mail para este endereço.";
var xmsgRegmethod16=		"Para registrar-se por fax ou e-mail, clique em um dos links a seguir:";
var xmsgRegmethod17=		"Erro ao Enviar E-mail";
var xmsgRegmethod18NSA=		"Ocorreu um erro quando o sistema tentou enviar as informações de registro e licença de servidor automaticamente.";
var xmsgRegmethod18=		"Ocorreu um erro quando o sistema tentou enviar as informações de registro automaticamente.";
var xmsgRegmethod19=		"Envio manual do arquivo via E-mail:";
var xmsgRegmethod20NSA=		"Envie a informação do arquivo de registro e licença de servidor por e-mail %1 a %2.";
var xmsgRegmethod20=		"Envie o arquivo de informação de registro por email %1 to %2.";
var xmsgRegmethod21=		"Não altere o arquivo. <p>É recomendável imprimir uma cópia desta página e guardar. As informações contidas serão necessárias para concluir manualmente o processamento do e-mail.<p>Pode imprimir uma cópia destas informações para arquivar. Clicar em 'Pronto' para fechar a aplicação.";
var xmsgRegAuthInfo=		"Opções de ativação da licença do produto";
var xmsgRegAuthInfo1=		"Confirmação do registro";
var xmsgRegExpConfirm=      "Confirmação da exportação da licença";
var xmsgRegImpConfirm=      "Confirmação da importação da licença";
var xmsgRegAuthInfo2 =      "Conectar agora e ativar! (Recomendado)";
var xmsgRegAuthInfo2Hover = "Conecte-se com a Autodesk e ative imediatamente sua licença do produto (requer uma conexão à Internet)";
var xmsgRegAuthInfo3=		"Inserir código de ativação"; 
var xmsgRegAuthInfo4=		"Selecione uma opção abaixo:";
var xmsgRegAuthInfo4A =     "Tenho um código de ativação da Autodesk";
var xmsgRegAuthInfo4AHoverA = "Digite o código de ativação que você solicitou e recebeu da Autodesk.<br>Para simplificar esta etapa, cole todo seu código de ativação na primeira caixa. As caixas remanescentes são automaticamente preenchidas.";
var xmsgRegAuthInfo4AHoverB = "Insira o caminho do arquivo e nome ou procure pelo arquivo de ativação fornecido pela Autodesk em resposta a sua solicitação por e-mail.";
var xmsgRegAuthInfo4B=		"Inserir código de ativação:"; 
var xmsgRegAuthInfo5=		"Selecione um país ou uma região, insira o código de ativação e clique 'Avançar'.";
var xmsgRegAuthInfo6=		"Ativação da licença do produto";	
var xmsgRegAuthInfo6a=		"Obrigado por sua ativação";	
var xmsgRegAuthInfo7=		"%1 foi ativado com êxito.";
var xmsgRegAuthInfo8=		"Confirmação de Registro";		
var xmsgRegAuthInfo9=		"Obrigado por registrar o seu produto da Autodesk. Isso nos ajudará a atendê-lo melhor no futuro.";
var xmsgRegAuthInfo10=		"Uma cópia de sua informações de ativação foi salva em:";		
var xmsgRegAuthInfo10B=		"Uma cópia de sua informações de ativação foi salva em:";
var xmsgRegAuthInfo14=		"Parabéns pela compra do %1. Sob os termos de sua licença ativada, um ou mais produtos têm permissão para serem executados em seu computador.";
var xmsgRegAuthInfo14a=		"Sob os termos de sua licença ativada, um ou mais produtos são permitidos para serem executados em seu computador.";
var xmsgRegAuthInfo15=		"A desinstalação do %1 não remove a licença.";
var xmsgRegAuthInfo16=		"Licença ativa";
var xmsgRegAuthInfo17=		"Parabéns!";
var xmsgRegActLicInfo=      "Licença ativada encontrada";
var xmsgRegActLicInfoError=      "Erro de ativação de registro";
var xmsgRegActiveInfo=        "Digite ou procure o Arquivo de ativação:";
var xmsgRegActLicInfo1=       "Foi encontrada uma licença registrada e ativada anteriormente para seu produto neste computador e agora está em uso."
var xmsgRegActLicInfo1Error= "Foi encontrada uma licença registrada e ativada anteriormente para seu produto neste computador.\n No entanto, ocorreu um erro inesperado (%1). Feche o aplicativo e tente novamente. Se este problema persistir, entre em contato com o administrador do sistema ou com o revendedor autorizado do produto da Autodesk";

/////////////////////////////////////////////
// OLT Confirmation
/////////////////////////////////////////////
var xmsgExportSuccess=        "Exportação bem-sucedida"; //2008-01-16
var xmsgExportFail=           "Falha na solicitação de exportação" ; //2008-01-16
var xmsgRegErrRef=            "Referência do erro:"; //2008-01-17
var xmsgImportSuccess=        "Importação bem-sucedida"; //2008-01-16
var xmsgImportFail=           "Falha na solicitação de importação"; //2008-01-16
var xmsgExpSucessInfo=        "A licença foi exportada com êxito e está agora no servidor da Autodesk."; //2008-01-16
var xmsgExpSuccessInfoHowtoImport=    "Como importar a licença";
var xmsgExpSucessInfo1=        "Antes de iniciar o produto no computador de destino, use o utilitário Transferência de licença a fim de importar esta licença para tal computador e esteja preparado para inserir sua senha e seu ID de usuário da Autodesk.";  //2008-01-16
var xmsgImpSucessInfo=         "A licença foi importada com êxito. Agora o produto pode ser usado. "; //2008-01-16
var xmsgImpRemindInfo=         "Lembre-me de exportar."; //2008-01-16
var xmsgImpRemindInfo1=        "Se esta caixa for marcada, sempre que você sair será exibida uma caixa de diálogo que lembra você de exportar a licença.";//copy mockup 2008-01-16
var xmsgImpRemindInfo2=        "Isso é útil se você importar a licença temporariamente para este computador e precisar transferi-la de volta.";//copy mockup 2008-01-16
var xmsgImpRemindInfo3=        "Há a opção \"não mostre este diálogo novamente\" no lembrete.";//copy mockup 2008-01-16
var xmsgOltTryAgain=           "Clique no link \"Tente novamente\" para enviar a solicitação novamente. ";
var xmsgImpFailMsg=            "Se o problema persistir, você deve ativar a licença, em vez de importá-la.";

var xmsgReqfilelocMsg=       "O arquivo de solicitação está em:";	//add by joyce.min on 2007-9-10 as Licensing Spec. recommend 	
var xmsgRegAuthInfo11=		"Obrigado por se registrar. Seu produto já está ativado e o arquivo de licença foi salvo. Clique em 'Imprimir' para manter um registro dessas informações.";
var xmsgRegAuthInfo12=		"Cole o código de ativação.";
var xmsgRegAuthInfo13=		"Digite o código de ativação.";
var xmsgRegErrorActiveCode=    "<FONT color=red>Insira o código de ativação para continuar.</FONT>";
var xmsgRegErrorActiveCode1=    "<FONT color=red>O código de ativação é inválido.  Verifique o código em busca de erros.</FONT>";
var xmsgRegErrorActiveFile=    "<FONT color=red>Insira o caminho e o nome de um arquivo de ativação para continuar.</FONT>";
var xmsgRegErrorSernum=      "<FONT color=red>Insira um número de série para continuar.</FONT>"; //add by joyce.min on 2007-8-29
var xmsgRegErrorSernum1=      "<FONT color=red>O número de série é muito curto.</FONT>"; //add by joyce.min on 2007-9-7
var xmsgRegErrorProkey=      "<FONT color=red>Insira a chave do produto para continuar.</FONT>"; //add by joyce.min on 2007-8-29
var xmsgRegErrorProkey1=     "<FONT color=red>A chave do produto é muito curta.</FONT>"; //add by joyce.min on 2007-9-7
var xmsgRegErrorHdr=		"Erro de registro - ativação";
var xmsgRegErrorSystem=		"Problema temporário no sistema está causando erros no registro. Clique em um dos links a seguir."
var xmsgRegErrorPrevReg=	"O número de série fornecido já está registrado.";
var xmsgRegErrorMaxAuth=	"Você excedeu o número de ativações permitidas para este produto.";
var xmsgRegErrorMaxAuth2=	"Você excedeu o número de licenças permitidas para este produto.";
var xmsgRegErrorInvalidOld=	"O número de série fornecido para o produto anterior não é válido. Verificar se o número de série anterior exibido acima está correto. Clique em um dos links a seguir.";
var xmsgRegErrorData=		"Há um problema com as informações de registro fornecidas. Selecione 'Tentar Novamente' para rever e corrigir as informações fornecidas, usar um método diferente para registro, ou entrar em contato com a Autodesk para continuar.";
var xmsgRegErrorNetwork=	"O produto que você está tentando registrar é um produto autorizado para redes e deve ser instalado de acordo. É necessário desinstalar o software e selecionar \"Rede\" para o tipo de instalação.<p>Consulte a seção de instalação em rede do guia de instalação para conhecer os procedimentos corretos de instalação e autorização para a Versão de rede.";
var xmsgRegNoResponse=		"Um problema temporário está causando erros no registro on-line. Clique em um dos links a seguir.";
var xmsgRegErrorAuthEntry=	"Há um problema com o código de ativação inserido. Clique em um dos links a seguir.";
var xmsgRegErrorAuthPermission = "Para ativar este produto da Autodesk, você precisa ter permissões de administrador ou ter recebido permissões do administrador do sistema. Procure o administrador do sistema para obter mais informações sobre permissões de administrador ou quem pode defini-las.";							
var xmsgRegErrorAuth=		"Há um problema com o código de ativação. Clique em um dos links a seguir.";
var xmsgRegErrorFlex=		"Há um problema com a licença. Clique em um dos links a seguir.";
var xmsgRegConnError=		"Erro de conexão";
var xmsgRegConnErrorTxt=	"Há um problema na conexão com a Internet. Clique em um dos links a seguir.";
var xmsgRegPurchError3=		"Usar outro método de compra";
//modified as LFSpec_SCV commend by joyce.min
var xmsgRegPurchError5=		 "Obrigado por optar pela compra de um software da Autodesk.<p>No momento, não existe uma conexão disponível para a conclusão deste processo, possivelmente devido às configurações do seu sistema.<p>Clicar em um dos links a seguir abrirá o navegador e talvez permita uma conexão com êxito.<p>";

var xmsgAuthResellerMsg1=	"Faça compras com o revendedor local. Entre em contato com o revendedor local para concluir as suas compras.";

var xmsgLicSaveErrInfo=		"Erro ao salvar o arquivo de licença. Clique em um dos links a seguir.";

var xmsgOnlineStoreMsg1=	"Faça compras na loja on-line da Autodesk. Se você não encontrar o produto procurado nessa loja, entre em contato com um Revendedor autorizado.";
var xmsgOnlineStoreMsg2=    "Loja on-line";
var xmsgAuthResellerMsg2=	"Revendedor autorizado";
var xmsgLocateLicenseMsg1=	"Localizar Arquivo da Licença";
var xmsgLocateLicenseMsg2=	"Insira o local do arquivo de licença ou use 'Procurar' para localizar onde está e clique em 'Avançar' para continuar.";
var xmsgLocateLicenseMsg3=	"Arquivo de licença existente:";
var xmsgUserContactMsg=		"Você deve inserir ao menos um dos seguintes:";
var xmsgFailureMsg=		    "Não foi possível processar sua solicitação de ativação on-line.";

/////////////////////////////////////////////
// Default Ereg returned error messages
/////////////////////////////////////////////
var xmsgDefaultEregReturnedErrMsg=  "Sua solicitação de ativação on-line retornou um erro (%1) " +
                            "que não está permitindo que sua solicitação seja processada usando" +
                            " nossos sistemas automatizados.";
var xmsgRegErrorOnline=		"Clique no link \"Usar outro método\" abaixo para completar "+
                            "os formulário necessários e envie sua solicitação para o "+
                            "Autodesk Business Center para sua área.  Um Representante de Serviço ao Cliente "+
                            "irá responder dentro de dois dias úteis.";
var xmsgAnotherFormSubmitMethod=    "Usar outro método";
var xmsgOfflineRegistrationMethod=    "Solicite um código de ativação usando<br />um método off-line";
var xmsgOfflineRegistrationMethodHover= "Faça uma solicitação de código de ativação para sua licença de produto a partir de um computador conectado à Internet";

/////////////////////////////////////////////
// Timeout message
/////////////////////////////////////////////
var xmsgTimeoutMsg1=    "Sua solicitação de ativação on-line expirou."
var xmsgTimeoutMsg2=    "Clique no link \"Tentar novamente\" para reenviar a solicitação on-line. "+
                        "Se o problema persistir, clique no link \"Usar outro método\" "+
                        "para preencher os formulários necessários e enviar a solicitação usando "+
                        "e-mail, fax ou outras opções.";
var xmsgTimeoutMsg2a=    "Clique no link \"Tentar novamente\" para reenviar sua solicitação on-line. "+
                        "Se o problema persistir, pode ser necessário fechar o aplicativo e tentar a ativação em outro momento.";

/////////////////////////////////////////////
// Single User Network RESOURCES HERE:
/////////////////////////////////////////////
var xmsgRegSunData1=		"Dados de registro salvos";
var xmsgRegSunData2=		"Os dados de registro necessários para a operação do cliente foram salvos em ";
var xmsgRegSunData3=		"O número de série anterior fornecido para registrar esta atualização não é válido. Entre em contato com o administrador.";
var xmsgRegSunData4=		"Este software deve ser reinstalado com um número de série anterior válido.";
var xmsgRegSunData5=		"Implantação de múltiplas licenças independentes";
var xmsgRegSunData6=		"Para concluir a implantação de estações múltiplas independentes, são necessárias algumas informações de registro. As páginas a seguir irão:";
var xmsgRegSunData7=		"Reunir informações obrigatórias.";
var xmsgRegSunData8=		"Permitir entrada do número de série anterior se necessário para uma atualização.";
var xmsgRegSunData9=		"Armazenar estas informações no servidor para operação em todas as instalações de clientes.";
var xmsgRegSunData10=		"Este software será registrado com o uso das informações a seguir. Clique em 'Avançar' para continuar.";

/////////////////////////////////////////////
// Voluntary RESOURCES HERE:
/////////////////////////////////////////////
var xmsgRegVol1=	"Registro - autorização do produto";
var xmsgRegVol2=	"Selecione uma das opções a seguir e clique em 'Avançar':";
var xmsgRegVol3=	"Registrar agora - selecione essa opção para iniciar o registro on-line";
var xmsgRegVol4=	"Registrar mais tarde - selecione essa opção para executar o software agora";
var xmsgRegVol5=	"Não mostrar novamente";
var xmsgRegVol6=	"(Se você quiser se registrar mais tarde, poderá selecionar a opção de registro na caixa de diálogo 'Ajuda/Sobre')";

/////////////////////////////////////////////
// Japan RESOURCES HERE:
/////////////////////////////////////////////
var xmsgCustIDMainTitle=	"Identificação do cliente";
var xmsgKatakana=		    "Nome de empresa (Zenkaku Kana):";
var xmsgDepartment=		    "Departamento:";
var xmsgDepartment2=		"Departamento:";

/////////////////////////////////////////////
// Autodesk Contact RESOURCES HERE:
/////////////////////////////////////////////
var xmsgFormWebHdr=	"Na Internet:";
var xmsgFormWebDataMsg1 = "Você também pode solicitar um código de ativação ao visitar:&nbsp;&nbsp;";
var xmsgFormEmailHdr=	"E-mail";
var xmsgFormEmailData=	"";
var xmsgFormEmailDataBlock= "";
var xmsgFormEmailXMLData=	"";
var xmsgFormEmailXMLDataBlock= "";
var xmsgFormFaxHdr=		"Por fax:";
var xmsgFormFaxHdrLocal=	"Enviar fax para o escritório local:";
var xmsgFormFaxHdrReg=	"Enviar registro por fax";
var xmsgFormFaxData=	"";
var xmsgFormFaxDataRegister=	"";
var xmsgFormCallHdr=	"Por telefone:";
var xmsgFormCallData=	"";
var xmsgFormMailHdr=	"Enviar por correio:";
var xmsgFormMailHdrLocal=	"Enviar por correio para o escritório local:";
var xmsgFormMailHdrReg=	"Enviar registro por correio";
var xmsgFormMailData=	"";
var xmsgFormMailDataRegister=   "";
var xmsgFormPurchHdr=	"Comprar software";
var xmsgFormInternetMsg=    "Para usar seu navegador da Web para solicitar um código de ativação, clique no link."
var xmsgFormEmailMsg=       "Correspondência de e-mail e solicitações de ativação para:"

/////////////////////////////////////////////
// Privacy Statement RESOURCES HERE:
/////////////////////////////////////////////

var JPprivacystatement = "As informações fornecidas por você serão usadas pela Autodesk para registrar e/ou emitir o código de ativação. O registro confirma que você permite que a Autodesk envie informações sobre você para parceiros comerciais autorizados para o propósito de verificação de direito e gerenciamento da licença do produto. Entre em contato com a Autodesk em <a href=mailto:information@autodesk.jp>information@autodesk.jp</a> se preferir que a Autodesk não compartilhe suas informações com parceiros comerciais autorizados para esse propósito limitado. Se desejar corrigir ou atualizar os dados de registro, clique <a %1>AQUI</a> para contatar a Autodesk ou contate o escritório local da Autodesk.";
			
var privacystatement = "As informações fornecidas por você serão usadas pela Autodesk para registrar e/ou emitir o código de ativação, a fim de manter você informado sobre nossos produtos e serviços, além de garantir que você tire vantagem de ser um usuário autorizado da Autodesk. A Autodesk não vende nem fornece suas informações a quem não esteja ligado à Autodesk ou a seus parceiros comerciais autorizados. Se desejar corrigir ou atualizar as informações de cliente registradas anteriormente, clique <a %1>AQUI</a> para contatar a Autodesk ou contate o escritório local da Autodesk.";
				
			
/////////////////////////////////////////////
// Privacy Policy
/////////////////////////////////////////////
var xmsgPrivacyPolicy="Política de privacidade da Autodesk";

/////////////////////////////////////////////
// Copyright
/////////////////////////////////////////////
var xmsgCopyright="Copyright 2014 Autodesk, Inc. All rights reserved.";

/////////////////////////////////////////////
// Rebranding Message
/////////////////////////////////////////////
var xmsgRebranding="Na maiorias dos casos, o novo número de série não será exibido antes de você fechar o programa e"+ 
                   "reiniciá-lo com direitos de administrador.";
var xmsgRebranding2="Consulte a documentação do sistema operacional para obter informações sobre como iniciar programas com direitos de administrador.";
/////////////////////////////////////////////
//  Note to Localization :
//
//	"Fields marked in <FONT color=red>red</FONT> and with an asterisk (<FONT 
//	color=red>*</FONT>) are required to process your registration. Complete the form 
//	and click Next."
//
/////////////////////////////////////////////
var xmsgRegInfoMsg1= "Os campos marcados com (<FONT color=red>*</FONT>) são obrigatórios.";
var xmsgRegInfoMsg2= "As informações inseridas nesta página são armazenadas com a licença. São usadas para reativação e atualizações do produto. Forneça informações válidas aqui para evitar demoras na utilização do produto.";

var xmsgLicLocationText1 = "Salvar arquivo de licença para <b>%1</b> para:";

// Set Registration Info Header
var InsertRegInfo =     "<p><b>"+xmsgRegInfo+"</b></p>" +
			  "<p>" + xmsgRegInfoMsg1 + "</p>";


//=======================================================================
// Application Usage Information
//=======================================================================
var xmsgAppUsage=	"Perguntas:";

var xmsgAppUsageQ1=	"Para ajudar a Autodesk a entender melhor as necessidades da sua indústria, queira responder a algumas perguntas breves.";
var xmsgAppUsageQ2=	"Qual dos seguintes itens descreve melhor o mercado em que você atua?";

var xmsgAppUsageOption51=	"Ensino e aprendizagem ";
var xmsgAppUsageOption52=	"Engenharia de telecomunicações ";
var xmsgAppUsageOption53=	"Projeto de ferramentas de moldes ";
var xmsgAppUsageOption54=	"Efeitos visuais ";
var xmsgAppUsageOption55=	"Edição e publicação de vídeos na Web ";
var xmsgAppUsageOption56=	"Fabricação de equipamentos de construção ";
var xmsgAppUsageOption57=	"Engenharia civil / Planejamento agrário ";
var xmsgAppUsageOption58=	"Computador / Medicina / Design de equipamento para escritório ";
var xmsgAppUsageOption67=	"Produtos de consumo ";
var xmsgAppUsageOption59=	"Outro ";
var xmsgAppUsageOption92=	"Defesa ";
var xmsgAppUsageOption93=	"Design de controles elétricos ";
var xmsgAppUsageOption94=	"Engenharia de sistemas elétricos ";
var xmsgAppUsageOption72=	"Ambiental ";
var xmsgAppUsageOption95=	"Produtos de metal fabricado ";
var xmsgAppUsageOption96=	"Design interior ";
var xmsgAppUsageOption97=	"Design de maquinaria ";
var xmsgAppUsageOption98=	"Aquisição manufatureira / Vendas / Marketing ";
var xmsgAppUsageOption40=	"Análise de fabricação ";
var xmsgAppUsageOption41=	"Mapeamento ";
var xmsgAppUsageOption42=	"Operações e arrendamentos ";
var xmsgAppUsageOption43=	"Planejamento ";
var xmsgAppUsageOption44=	"Gerenciamento de fábricas ";
var xmsgAppUsageOption45=	"Projeto de operações e usinas de força ";
var xmsgAppUsageOption87=	"Telecomunicações ";
var xmsgAppUsageOption46=	"Aquisição e compras ";
var xmsgAppUsageOption47=	"Design de produtos ";
var xmsgAppUsageOption48=	"Gerenciamento de projetos ";
var xmsgAppUsageOption49=	"Vendas e marketing ";
var xmsgAppUsageOption99=	"Outro ";

var xmsgWrongCountryCodeMsg=	"Erro: Nenhuma entrada conhecida de código de país!";

/////////////////////////////////////////////
// Version RESOURCES HERE:
/////////////////////////////////////////////
var xmsgVersion = "Versão:"

/////////////////////////////////////////////
// Access RTFax or RTMail through RTEmail
/////////////////////////////////////////////
var xmsgAccessFaxMsg=		"Registrar por fax ou por telefone"; //modify by joyce.min on 2007-10-18 as Licensing_Framework Spec_Frozen.doc recommend 
var xmsgAccessMailMsg=		"Registre pelo correio.";
var xmsgAccessHereMsg=		"aqui.";

/////////////////////////////////////////////
// Receive code by
/////////////////////////////////////////////
var xmsgReceiveCodeMsg=     "Eu gostaria de obter o código por:";
var xmsgReceiveCodeMsg1=     "Receberei o arquivo de ativação por e-mail"; //add by joyce.min on 2007-8-20
/////////////////////////////////////////////
// Messages for Ease of reauth or multi-seat client registration
/////////////////////////////////////////////
var xmsgNoDialogHdrMsg=		"Aguarde enquanto estamos verificando <br>sua licença";
/////////////////////////////////////////////
//Resource for RTProductInfo
/////////////////////////////////////////////
var xmsgRTProductInfoTitle=      "Necessárias as informações do produto"; //add by joyce.min on 2007-8-14
var xmsgRTProductInfoTitle2=      "Insira o número de série e a chave do produto"; // Project Coooper Design
var xmsgOnlineStoreDefaultURLForProductInfo = "http://www.autodesk.com/estore/usa/index.htm";
var xmsgRTProductInfoMsg1=        "Para ativar sua licença %1, insira nos campos abaixo o número de série e a chave do produto que você recebeu no momento da compra. Estas informações podem ser encontradas no pacote do produto, em seu e-mail de \"Informações de licenciamento e atualização da Autodesk\, ou em um e-mail similar de confirmação do ponto de compra, por exemplo, a loja on-line.";
var xmsgRTProductInfoMsg2=        "Se você não tem um número de série e uma chave de produto e deseja comprá-los agora, <a href="+ xmsgOnlineStoreDefaultURLForProductInfo +" target=\"_blank\">clique aqui</a>.";
/////////////////////////////////////////////
//Error for RTProductInfo
/////////////////////////////////////////////
//var xmsgsernumError=        "Enter a serial number to proceed."; //add by joyce.min on 2007-8-17
//var xmsgprokeyError=        "Enter a product key to proceed." ; //add by joyce.min on 2007-8-17
/////////////////////////////////////////////
// Resource for NSA_RTBegin.html
/////////////////////////////////////////////
var xmsgNSARTBeginTitle=	"Obter uma Licença de Rede";
var xmsgNSARTBeginMsg1=		"Solicitar um arquivo de ativação de licença de rede por:";
var xmsgNSARTBeginMsg2=		"Conexão direta (pela Internet)";
var xmsgNSARTBeginMsg3=		"Por E-mail, fax, telefone, ou enviar a solicitação por correio postal";
var xmsgNSARTBeginNoInternet=	"";

/////////////////////////////////////////////
// Edit server and seat information
/////////////////////////////////////////////
var xmsgEditServerHdrMsg1=	"Informações do Servidor";
var xmsgEditServerHdrMsg2=	"Modelo do servidor da licença*";
var xmsgEditServerMsg1=		"Insira as informações do servidor da licença.<br>Clique no botão 'Procurar' para preencher o campo ID do host do servidor.<p>";
var xmsgEditServerMsg2=		"Começar com os dados de host de servidor dos arquivos de licença existentes.";
var xmsgEditServerRemove=	"Remover";
var xmsgEditServerHostName=	"Nome do host do servidor*";
var xmsgEditServerHostID=	"ID do Host*";
var xmsgEditServerSeat=		"Licenças*";
var xmsgEditServerSingle=	"Servidor Único";
var xmsgEditServerDistributed=	"Servidor Distribuído";
var xmsgEditServerRedundant=	"Servidor Redundante";
var xmsgEditServerDots=		"...";
var xmsgEditServerLookup=	"Procurar";
var xmsgEditServerAddServer=	"Adicionar";
var xmsgEditServerRemoveServer=	"Remover";
var xmsgEditServerTotal=	"Total:";
var xmsgEditServerExceedMaxServer=	"Nota: Você pode licenciar até 20 servidores distribuídos ao mesmo tempo. Se precisar licenciar mais de 20 servidores, entre em contato com a Autodesk.";
var xmsgEditServerSeatError=	"As licenças devem conter somente valores numéricos.";

var xmsgConfirmServerMsg=	"Revise as informações a seguir. Clique em 'Avançar' para continuar ou 'Voltar' para efetuar alterações.";
var xmsgConfirmServerMsg2=	"Quando você clica em 'Avançar', estas informações serão enviadas para a Autodesk através da Internet.";
var xmsgConfirmServerHdr2=	"Modelo do servidor da licença:";
var xmsgConfirmServerHostName=	"Nome do host do servidor";
var xmsgConfirmServerHostID=	"ID do Host";
var xmsgConfirmServerSeat=		"Licenças";
var xmsgConfirmServerTotal=		"Total de licenças:";

var xmsgLicErrorHdr=			"Erro de Licenciamento"; 
var xmsgLicErrorInvalidSN=		"O Número de Série fornecido é inválido. Verifique se o número de série exibido acima está correto. Clique em um dos links a seguir.";
var xmsgLicReEnterSN=			"Insira novamente o número de série e tente novamente.";

var xmsgLic113Msg2=				"O número total de licenças que foram alocadas para os servidores distribuídos excedem aquele número.";
var xmsgLic113ModifySeats=		"Modificar distribuição de licença.";

var xmsgSaveLicenseHdr=			"Licença(s) Recebida(s)";
var xmsgSaveLicenseMsg1=		"Seus arquivos foram recebidos pela Autodesk. Agora você precisa salvá-los em arquivos de licença.<p> <b>Salvar a(s) Licença(s) em Arquivos de Licença</b><p><LI>O <b>local recomendado</b> para o(s) arquivo(s) de licença é em uma pasta \"License\" onde foi instalado o Gerenciador de Licença de Rede da Autodesk no seu servidor.&nbsp;&nbsp;";
var xmsgSaveLicenseMsg6=		"<LI>Se você tiver um <b>arquivo de licença existente</b>, <b>insira</b> a nova licença nele.<br>Quando clicar em 'Avançar', o sistema automaticamente insere a informação da licença no local apropriado no arquivo existente.</LI>";
var xmsgSaveLicenseMsg2=		"Se o arquivo especificado acima for um arquivo de licença existente:";
var xmsgSaveLicenseMsg3=		"Inserir as informações da nova licença.";
var xmsgSaveLicenseMsg4=		"Substitua o arquivo de licença existente.";
var xmsgSaveLicenseMsg5=		"Corrigir os erros a seguir:";

var xmsgSaveErrorFileNameTooLong=  "ERRO: O nome de arquivo inserido é muito longo.<br>" +
								"Altere o nome de arquivo e continue.";
var xmsgSaveErrorNoPermission=	"ERRO: Você não tem permissão para salvar o arquivo no local especificado.<br>Você pode salvar o arquivo em um local temporário, obter a permissão apropriada, e mover o arquivo mais tarde.";
var xmsgSaveErrorNoDiskSpace=	"ERRO: Você não tem espaço em disco suficiente para salvar o arquivo no local especificado.<br>Você pode salvar o arquivo em um local temporário, liberar espaço, e mover o arquivo mais tarde.";
var xmsgSaveErrorInvalidFile=	"ERRO: A nova licença não pode ser anexada ao arquivo especificado sem perda de dados. O arquivo especificado pode pertencer a máquinas diferentes ou diferentes modelos de servidor.<BR>Você pode salvar  o novo arquivo de licença com um nome ou local diferente e anexar ao arquivo mais tarde.";															
var xmsgSaveErrorPathNotExit=	"ERRO: O caminho especificado não existe.<BR>Clique em 'Procurar' para localizar um caminho existente ou crie o caminho.";
var xmsgSaveErrorPathBlank=		"ERRO: Você precisa especificar um campo válido e nome de arquivo de licença. Especifique o caminho e o nome do arquivo no campo abaixo ou procure para localizar o caminho e arquivo.";

var xmsgLicAuthConfirmHdr1=		"Ativação de licença concluída com êxito!";
var xmsgLicAuthConfirmHdr2=		"Informação de Host de Servidor de Licença";
var xmsgLicAuthConfirmMsg1=		"Obrigado por registrar seu produto. Você pode imprimir um registro destas informações.";
var xmsgLicAuthConfirmDate=		"Data:";

var xmsgLicPathMsg1=			"As licenças a seguir foram salvas:";
var xmsgLicPathMsg2=			"Os arquivos de licença foram salvos em:";

var xmsgOtherMethodMsg1NSA=		"Usar outro método para obter uma licença autorizada.";
var xmsgOtherMethodMsg1=		"Usar outro método.";

var xmsgContactAutodeskMsg1=	"Entre em contato com a Autodesk usando um dos métodos abaixo:";
var xmsgOfflineActReqMsg=       "A partir de um computador conectado à Internet, solicite um código de ativação para a licença do produto, preenchendo o seguinte formulário de solicitação. Esteja preparado para fornecer o produto, o número de série, a chave do produto, e o código da solicitação (acima)."								
/////////////////////////////////////////////
// Email Options
/////////////////////////////////////////////
var xmsgEmailOptionNSATitle=	"Obter arquivo de licença por E-mail";
var xmsgEmailOptionTitle=		"Registrar por E-mail";
var xmsgEmailOptionNSAMsg=		"Informações de registro e licença de servidor foram automaticamente salvas em um arquivo que deve ser enviado por e-mail para o centro automatizado de processamento de registro da Autodesk.<p>Após o envio do arquivo por e-mail, você receberá uma resposta automática, um arquivo de licença autorizado, e instruções para concluir o processo.";
var xmsgEmailOptionMsg=			"Informações de registro foram automaticamente salvas em um arquivo que deve ser enviado por e-mail para o centro automatizado de processamento de registro da Autodesk.<p>Após o envio do arquivo por e-mail, você receberá uma resposta automática e instruções para concluir o processo.";
var xmsgEmailOptionMsg2=		"Se o sistema usado para envio de e-mail está habilitado via Internet, clique 'Enviar Arquivo Agora' e 'Avançar'. O arquivo será enviado automaticamente.<p>Se não possuir acesso para enviar e-mail, clique 'Enviar Arquivo Depois'. Serão fornecidas instruções para enviar manualmente o arquivo.";
var xmsgEmailOptionInfo1=		"Enviar arquivo agora.";
var xmsgEmailOptionInfo2=		"Enviar arquivo mais tarde, manualmente.";
var xmsgEmailOptionInfo3=		"Enviar cópia do e-mail para o e-mail fornecido.";

/////////////////////////////////////////////
// Email Error
/////////////////////////////////////////////
var xmsgEmailErrorHdr=			"Não é possível criar e-mail";
var xmsgEmailErrorMsg1=			"Para concluir o registro por e-mail, anexe o seguinte arquivo a um e-mail:";
var xmsgEmailErrorMsg2=			"Enviar o e-mail para %1.";
var xmsgEmailErrorMsg3=			"O arquivo encontra-se no seguinte local:";

/////////////////////////////////////////////
// Local HERE customer information URLs
/////////////////////////////////////////////
var xmsgLocalHERETitle=			"Alterar informações de cliente";
var xmsgLocalHEREInfo=			"Para alterar informações de cliente, contate o revendedor autorizado da Autodesk ou navegue até um link abaixo que se aplique a seu país ou a sua região.";
var xmsgLocalHEREUS=			"Américas";
var xmsgLocalHEREEMEA=			"Europa, Oriente Médio, África";
var xmsgLocalHEREAPAC=			"Ásia/Pacífico";

/////////////////////////////////////////////
// Help
/////////////////////////////////////////////
var xmsgHelpTitle=				"Ajuda";
var xmsgHelpUpgradeMsg=			"Se estiver registrando ou ativando uma atualização de uma versão anterior, marque esta caixa, e será solicitado a fornecer o número de série da versão a partir da qual está atualizando.";
var xmsgHelpUpgradeRequiredTitle=	"Insira o número de série do produto anterior (necessário para a atualização)";
var xmsgHelpUpgradeRequiredMsg=	"Este é o número de série da versão anterior do software. O número de série encontra-se na caixa de diálogo Ajuda > Sobre no software ou na embalagem do produto anterior.";

//	Fax or email error message
var xmsgNotEnterErrorMsg=		"Você não inseriu %1. Use o botão 'Voltar' para voltar e inseri-lo, se desejar receber a ativação por este método.";								

//  Help for serial number
var xmsgHelpSerialNumberTitle=  "Número de série"; ////modify by joyce.min on 2007-8-16
var xmsgHelpSerialNumberMsg=    "Seu número de série está localizado na embalagem do produto ou no e-mail  de Informações de Atualização e Licenciamento da Autodesk."; // ECO19

//  Help for ProductInfo serial number & Product Key //modify by joyce.min on 2007-8-16
var xmsgHelpProductKeyTitle=   "Chave do produto";
var xmsgHelpProductKeyMsg=    "A chave do produto está ao lado do número de série no pacote do produto ou no e-mail de informação de licença e atualização da Autodesk."; // ECO19

/////////////////////////////////////////////
// The following strings are added back for backward competibility reason
/////////////////////////////////////////////
var xmsgRT0015TempSysErr=				"Erro de conexão (0.15)";
var xmsgRT010203071213CannotCompErrA=	"Erro de registro (1.2.3.7.12.13)";
var xmsgRT09AlreadyReg=					"Já registrado (9)";
var xmsgRT10ExceededAuths=				"Excesso de autorizações (10)";
var xmsgRT12StolenSN=					"Número de série roubado (12)";
var xmsgRT18OldSNInvalid=				"Número de série antigo inválido (18)";
var xmsgRT20DataError=					"Erro de dados (20)";
var xmsgRT21CustIDTelErr=				"Erro de ID do cliente/Telefone (21)";
var xmsgRT22NetworkInstallation=		"Erro de instalação em rede (22)";
var xmsgRT900SystemNotResponding=		"Sistema sem resposta (900)";
var xmsgRTCustID=						"ID do cliente";
var xmsgRTCustIDConfirm=				"Confirmar identificação";
var xmsgRTNewSerialNumber=				"Informações sobre o novo número de série";
var xmsgRTNoNewSN=						"Erro na transação de compra";
var xmsgRTPurchAuthFailed=				"Erro de ativação";
var xmsgRTPurchConfirmOther=			"Confirmação de compra";
var xmsgRTPurchConfirmPerm=				"Confirmação de compra - Registrado e Ativado";
var xmsgRTPurchConfirmReg=				"Confirmação de compra - Registrado, mas não ativado";
var xmsgRTPurchConfirmRegVol=			"Confirmação de compra - Registrado";
var xmsgRTPurchConfirmRent=				"Confirmação de compra - Registrado e locação ativa";
var xmsgRTPurchConfirmUnReg=			"Confirmação de compra - Não registrado nem ativado";
var xmsgRTPurchConnectionFailed=		"Falha na conexão para compra";
var xmsgRTPurchaseError=				"Erro de compra";
var xmsgRTSNMismatch=					"Erro na transação de compra - Incompatibilidade de números de série";
var xmsgRTSUNOldSNInvalid=				"Número de série anterior inválido - SUN";

var szRTEmail =         "RTEmail.html";

var xmsgExit=			"Sair";

var xmsgCustIDMainTitle=	"Identificação do cliente";
var xmsgCustIDTitle1=		"ID do cliente:";
var xmsgCustIDText2=		"Insira o ID do cliente  e o telefone abaixo . Se você não possui um ID do cliente, deixe os dois campos em branco.<p> ";
var xmsgCustIDText3=		"Nota: Se estiver reativando seu produto, precisa fornecer um ID do Cliente.";
var xmsgCustIDText3NSA=		"Nota: Se estiver autorizando novamente seu produto, precisa fornecer um ID do Cliente.";
var xmsgCustIDTitle2=		"Telefone:";
var xmsgCustIDTelEx4=		"(exemplo: 03-111-1234)";
var xmsgRegCustIDTel=		"O ID do Cliente e o Telefone fornecidos não correspondem aos nossos registros. Clique em um dos links a seguir.";

/////////////////////////////////////////////
//  Note to Localization :
//
//	"xmsgRT113SeatMsg1" appears in NSA_RT113TooManySeats.html.  The full sentence in English is
//
//	"Our records indicate that you have [Max allowed seats] valid [product name] seats available." 
/////////////////////////////////////////////
var xmsgRT113SeatMsg1=	"Nossos registros indicam que você tem %1 válido %2 seções disponíveis.<br>";

/////////////////////////////////////////////
// Error 12
/////////////////////////////////////////////
var xmsgErr12Hdr=				"O número de série inserido é inválido";
var xmsgErr12APAC=				"<p>Este número de série é inválido e não pode ser ativado. Entre em contato conosco em <a href=mailto:apacpl@listproc.autodesk.com target=\"_blank\">apacpl@listproc.autodesk.com</a></p>";
var xmsgErr12EMEA=				"<p>Prezado senhor/prezada senhora</p><p>Obrigado por tentar registrar o produto de software Autodesk&#0174; ou Discreet&#0153; com a Autodesk.</p><p>Lamentavelmente, nossos registros indicam que o número de série do produto de software Autodesk&#0174; ou Discreet&#0153; que tentou registrar conosco não é um número de série válido ou é o número de série de uma cópia pirata conhecida do produto de software e portanto o produto de software Autodesk&#0174; ou Discreet&#0153; que está usando não é autorizado.</p><p>Licenças para usar os produtos de software Autodesk&#0174; podem ser adquiridas junto aos revendedores autorizados da Autodesk. Por favor, visite <a href=\"http://www.autodesk.com\" target=\"_blank\">www.autodesk.com</a> para obter uma lista dos revendedores autorizados da Autodesk ou um escritório da Autodesk em sua área. O uso do software legal é a única forma de assegurar que receba o máximo benefício da utilização do software E evitar um processo civil e possivelmente criminal potenciais, se verificar-se o uso e/ou a reprodução do software ilegalmente.</p><p>Licenças para usar os produtos de software Discreet&#0153; podem ser adquiridas junto aos revendedores autorizados da Discreet. Por favor, visite <a href=\"http://www.discreet.com.br\" target=\"_blank\">www.discreet.com.br</a> para obter uma lista dos revendedores autorizados da Discreet ou de um escritório da Discreet em sua área. O uso do software legal é a única forma de assegurar que receba o máximo benefício da utilização do software E evitar um processo civil e possivelmente criminal potencial, se verificar-se a uso e/ou a reprodução do software ilegalmente.</p><p>Assim, é favor interromper imediatamente a utilização do produto de software não-autorizado que tentou registrar conosco, remover todas as cópias armazenadas no hardware do computador e destruir todos os meios que contém o produto de software. Embora confiemos que atenderá voluntariamente nosso pedido, a Autodesk reserva-se direitos em relação a este assunto e poderá comunicar seus dados à Business Software Alliance (“BSA”).</p><p>Se tiver alguma dúvida ou acreditar que recebeu esta mensagem por engano, por favor, entre em contato conosco em: <a href=mailto:emea.register@activation.autodesk.com target=\"_blank\">emea.register@activation.autodesk.com</a></p><p>Se desejar fornecer informações sobre o uso ou a venda de software ilegal, entre em contato com o escritório local da Autodesk ou contate a BSA ao visitar <a href=\"http://www.bsa.org/brazil/\" target=\"_blank\">http://www.bsa.org/brazil/</a></p><p>Obrigado</p>";
var xmsgErr12US=				"<p>Prezado senhor/Prezada senhora</p><p>Recentemente você tentou registrar o produto de software com a Autodesk ou Discreet.</p><p>Lamentavelmente, nossos registros indicam que o número de série do produto de software Autodesk&#0174; ou Discreet&#0153; que tentou registrar conosco não é um número de série válido ou é o número de série de uma cópia pirata conhecida do produto de software e portanto o produto de software Autodesk&#0174; ou Discreet&#0153; não é autorizado.</p><p>Para usuários da Autodesk, licenças para usar os produtos de software Autodesk&#0174; podem ser adquiridas junto aos revendedores autorizados da Autodesk. Por favor, visite <a href=\"http://www.autodesk.com\" target=\"_blank\">www.autodesk.com</a> para obter uma lista dos revendedores autorizados da Autodesk. O uso do software legal é a única forma de assegurar que receba o máximo benefício da utilização do software E evitar um processo civil e possivelmente criminal, se verificar-se o uso e/ou a reprodução do software ilegalmente.</p><p>Para usuários da  Discreet&#0153;, licenças para usar os produtos de software Discreet&#0153; podem ser adquiridas junto aos revendedores autorizados da Discreet. Por favor, visite <a href=\"http://www.discreet.com.br\" target=\"_blank\">www.discreet.com.br</a> para obter uma lista dos revendedores autorizados da Discreet ou um escritório da Discreet em sua área. O uso do software legal é a única forma de assegurar que receba o máximo benefício da utilização do software E evitar um processo civil e possivelmente criminal potencial, se verificar-se a uso e/ou a reprodução do software ilegalmente.</p><p>Interrompa imediatamente a utilização do produto de software não-autorizado que tentou registrar conosco, remova todas as cópias armazenadas no hardware do computador e destrua todos os meios que contém o produto de software. Embora confiemos que atenderá voluntariamente nosso pedido, a Autodesk reserva-se direitos em relação a este assunto e poderá comunicar seus dados à Business Software Alliance (“BSA”).</p><p>Se tiver alguma dúvida ou acreditar que recebeu esta mensagem por engano, por favor, entre em contato conosco em: <a href=mailto:ProductActivation@activation.autodesk.com target=\"_blank\">ProductActivation@activation.autodesk.com</a></p><p>Se desejar fornecer informações sobre o uso ou a venda de software ilegal, entre em contato com o escritório local ou contate a BSA ao visitar <a href=\"http://www.bsa.org/brazil/\" target=\"_blank\">http://www.bsa.org/brazil/</a></p><p>Obrigado</p>";






// SIG // Begin signature block
// SIG // MIIZewYJKoZIhvcNAQcCoIIZbDCCGWgCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFEeY94UH40Wa
// SIG // aNoSrU0chOXBtJr8oIIUMDCCA+4wggNXoAMCAQICEH6T
// SIG // 6/t8xk5Z6kuad9QG/DswDQYJKoZIhvcNAQEFBQAwgYsx
// SIG // CzAJBgNVBAYTAlpBMRUwEwYDVQQIEwxXZXN0ZXJuIENh
// SIG // cGUxFDASBgNVBAcTC0R1cmJhbnZpbGxlMQ8wDQYDVQQK
// SIG // EwZUaGF3dGUxHTAbBgNVBAsTFFRoYXd0ZSBDZXJ0aWZp
// SIG // Y2F0aW9uMR8wHQYDVQQDExZUaGF3dGUgVGltZXN0YW1w
// SIG // aW5nIENBMB4XDTEyMTIyMTAwMDAwMFoXDTIwMTIzMDIz
// SIG // NTk1OVowXjELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMTAwLgYDVQQDEydTeW1h
// SIG // bnRlYyBUaW1lIFN0YW1waW5nIFNlcnZpY2VzIENBIC0g
// SIG // RzIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQCxrLNJVEuXHBIK2CV5kSJXKm/cuCbEQ3Nrwr8uUFr7
// SIG // FMJ2jkMBJUO0oeJF9Oi3e8N0zCLXtJQAAvdN7b+0t0Qk
// SIG // a81fRTvRRM5DEnMXgotptCvLmR6schsmTXEfsTHd+1Fh
// SIG // AlOmqvVJLAV4RaUvic7nmef+jOJXPz3GktxK+Hsz5HkK
// SIG // +/B1iEGc/8UDUZmq12yfk2mHZSmDhcJgFMTIyTsU2sCB
// SIG // 8B8NdN6SIqvK9/t0fCfm90obf6fDni2uiuqm5qonFn1h
// SIG // 95hxEbziUKFL5V365Q6nLJ+qZSDT2JboyHylTkhE/xni
// SIG // RAeSC9dohIBdanhkRc1gRn5UwRN8xXnxycFxAgMBAAGj
// SIG // gfowgfcwHQYDVR0OBBYEFF+a9W5czMx0mtTdfe8/2+xM
// SIG // gC7dMDIGCCsGAQUFBwEBBCYwJDAiBggrBgEFBQcwAYYW
// SIG // aHR0cDovL29jc3AudGhhd3RlLmNvbTASBgNVHRMBAf8E
// SIG // CDAGAQH/AgEAMD8GA1UdHwQ4MDYwNKAyoDCGLmh0dHA6
// SIG // Ly9jcmwudGhhd3RlLmNvbS9UaGF3dGVUaW1lc3RhbXBp
// SIG // bmdDQS5jcmwwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDgYD
// SIG // VR0PAQH/BAQDAgEGMCgGA1UdEQQhMB+kHTAbMRkwFwYD
// SIG // VQQDExBUaW1lU3RhbXAtMjA0OC0xMA0GCSqGSIb3DQEB
// SIG // BQUAA4GBAAMJm495739ZMKrvaLX64wkdu0+CBl03X6ZS
// SIG // nxaN6hySCURu9W3rWHww6PlpjSNzCxJvR6muORH4KrGb
// SIG // sBrDjutZlgCtzgxNstAxpghcKnr84nodV0yoZRjpeUBi
// SIG // JZZux8c3aoMhCI5B6t3ZVz8dd0mHKhYGXqY4aiISo1EZ
// SIG // g362MIIEozCCA4ugAwIBAgIQDs/0OMj+vzVuBNhqmBsa
// SIG // UDANBgkqhkiG9w0BAQUFADBeMQswCQYDVQQGEwJVUzEd
// SIG // MBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xMDAu
// SIG // BgNVBAMTJ1N5bWFudGVjIFRpbWUgU3RhbXBpbmcgU2Vy
// SIG // dmljZXMgQ0EgLSBHMjAeFw0xMjEwMTgwMDAwMDBaFw0y
// SIG // MDEyMjkyMzU5NTlaMGIxCzAJBgNVBAYTAlVTMR0wGwYD
// SIG // VQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjE0MDIGA1UE
// SIG // AxMrU3ltYW50ZWMgVGltZSBTdGFtcGluZyBTZXJ2aWNl
// SIG // cyBTaWduZXIgLSBHNDCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBAKJjCzlEuLsjp0RJuw7/ofBhClOT
// SIG // sJjbrSwPSsVu/4Y8U1UPFc4EPyv9qZaW2b5heQtbyUyG
// SIG // duXgQ0sile7CK0PBn9hotI5AT+6FOLkRxSPyZFjwFTJv
// SIG // TlehroikAtcqHs1L4d1j1ReJMluwXplaqJ0oUA4X7pbb
// SIG // YTtFUR3PElYLkkf8q672Zj1HrHBy55LnX80QucSDZJQZ
// SIG // vSWA4ejSIqXQugJ6oXeTW2XD7hd0vEGGKtwITIySjJEt
// SIG // nndEH2jWqHR32w5bMotWizO92WPISZ06xcXqMwvS8aMb
// SIG // 9Iu+2bNXizveBKd6IrIkri7HcMW+ToMmCPsLvalPmQjh
// SIG // EChyqs0CAwEAAaOCAVcwggFTMAwGA1UdEwEB/wQCMAAw
// SIG // FgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/
// SIG // BAQDAgeAMHMGCCsGAQUFBwEBBGcwZTAqBggrBgEFBQcw
// SIG // AYYeaHR0cDovL3RzLW9jc3Aud3Muc3ltYW50ZWMuY29t
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vdHMtYWlhLndzLnN5
// SIG // bWFudGVjLmNvbS90c3MtY2EtZzIuY2VyMDwGA1UdHwQ1
// SIG // MDMwMaAvoC2GK2h0dHA6Ly90cy1jcmwud3Muc3ltYW50
// SIG // ZWMuY29tL3Rzcy1jYS1nMi5jcmwwKAYDVR0RBCEwH6Qd
// SIG // MBsxGTAXBgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTIwHQYD
// SIG // VR0OBBYEFEbGaaMOShQe1UzaUmMXP142vA3mMB8GA1Ud
// SIG // IwQYMBaAFF+a9W5czMx0mtTdfe8/2+xMgC7dMA0GCSqG
// SIG // SIb3DQEBBQUAA4IBAQB4O7SRKgBM8I9iMDd4o4QnB28Y
// SIG // st4l3KDUlAOqhk4ln5pAAxzdzuN5yyFoBtq2MrRtv/Qs
// SIG // JmMz5ElkbQ3mw2cO9wWkNWx8iRbG6bLfsundIMZxD82V
// SIG // dNy2XN69Nx9DeOZ4tc0oBCCjqvFLxIgpkQ6A0RH83Vx2
// SIG // bk9eDkVGQW4NsOo4mrE62glxEPwcebSAe6xp9P2ctgwW
// SIG // K/F/Wwk9m1viFsoTgW0ALjgNqCmPLOGy9FqpAa8VnCwv
// SIG // SRvbIrvD/niUUcOGsYKIXfA9tFGheTMrLnu53CAJE3Hr
// SIG // ahlbz+ilMFcsiUk/uc9/yb8+ImhjU5q9aXSsxR08f5Lg
// SIG // w7wc2AR1MIIFhTCCBG2gAwIBAgIQKcFbP6rNUmpOZ708
// SIG // Tn4/8jANBgkqhkiG9w0BAQUFADCBtDELMAkGA1UEBhMC
// SIG // VVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYD
// SIG // VQQLExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTswOQYD
// SIG // VQQLEzJUZXJtcyBvZiB1c2UgYXQgaHR0cHM6Ly93d3cu
// SIG // dmVyaXNpZ24uY29tL3JwYSAoYykxMDEuMCwGA1UEAxMl
// SIG // VmVyaVNpZ24gQ2xhc3MgMyBDb2RlIFNpZ25pbmcgMjAx
// SIG // MCBDQTAeFw0xMjA3MjUwMDAwMDBaFw0xNTA5MjAyMzU5
// SIG // NTlaMIHIMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2Fs
// SIG // aWZvcm5pYTETMBEGA1UEBxMKU2FuIFJhZmFlbDEWMBQG
// SIG // A1UEChQNQXV0b2Rlc2ssIEluYzE+MDwGA1UECxM1RGln
// SIG // aXRhbCBJRCBDbGFzcyAzIC0gTWljcm9zb2Z0IFNvZnR3
// SIG // YXJlIFZhbGlkYXRpb24gdjIxHzAdBgNVBAsUFkRlc2ln
// SIG // biBTb2x1dGlvbnMgR3JvdXAxFjAUBgNVBAMUDUF1dG9k
// SIG // ZXNrLCBJbmMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQCoYmDrmd0Gq8ezSsDlfgaJFEFplNPNhWzM
// SIG // 2uFQaYAB/ggpQ11+N4B6ao+TqrNIWDIqt3JKhaU889nx
// SIG // l/7teWGwuOurstI2Z0bEDhXiXam/bicK2HVLyntliQ+6
// SIG // tT+nlgfN8tgB2NzM0BpE1YCnU2b6DwQw4V7BV+/F//83
// SIG // yGFOpePlumzXxNw9EKWkaq81slmmTxf7UxZgP9PGbLw8
// SIG // gLAPk4PTJI97+5BBqhkLb1YqSfWn3PNMfsNKhw/VwAN0
// SIG // dRKeM6H8SkOdz+osr+NyH86lsKQuics4fwK5uFSHQHsI
// SIG // t6Z0tqWvminRqceUi9ugRlGryh9X1ZqCqfL/ggdzYa3Z
// SIG // AgMBAAGjggF7MIIBdzAJBgNVHRMEAjAAMA4GA1UdDwEB
// SIG // /wQEAwIHgDBABgNVHR8EOTA3MDWgM6Axhi9odHRwOi8v
// SIG // Y3NjMy0yMDEwLWNybC52ZXJpc2lnbi5jb20vQ1NDMy0y
// SIG // MDEwLmNybDBEBgNVHSAEPTA7MDkGC2CGSAGG+EUBBxcD
// SIG // MCowKAYIKwYBBQUHAgEWHGh0dHBzOi8vd3d3LnZlcmlz
// SIG // aWduLmNvbS9ycGEwEwYDVR0lBAwwCgYIKwYBBQUHAwMw
// SIG // cQYIKwYBBQUHAQEEZTBjMCQGCCsGAQUFBzABhhhodHRw
// SIG // Oi8vb2NzcC52ZXJpc2lnbi5jb20wOwYIKwYBBQUHMAKG
// SIG // L2h0dHA6Ly9jc2MzLTIwMTAtYWlhLnZlcmlzaWduLmNv
// SIG // bS9DU0MzLTIwMTAuY2VyMB8GA1UdIwQYMBaAFM+Zqep7
// SIG // JvRLyY6P1/AFJu/j0qedMBEGCWCGSAGG+EIBAQQEAwIE
// SIG // EDAWBgorBgEEAYI3AgEbBAgwBgEBAAEB/zANBgkqhkiG
// SIG // 9w0BAQUFAAOCAQEA2OkGvuiY7TyI6yVTQAYmTO+MpOFG
// SIG // C8MflHSbofJiuLxrS1KXbkzsAPFPPsU1ouftFhsXFtDQ
// SIG // 8rMTq/jwugTpbJUREV0buEkLl8AKRhYQTKBKg1I/puBv
// SIG // bkJocDE0pRwtBz3xSlXXEwyYPcbCOnrM3OZ5bKx1Qiii
// SIG // vixlcGWhO3ws904ssutPFf4mV5PDi3U2Yp1HgbBK/Um/
// SIG // FLr6YAYeZaA8KY1CfQEisF3UKTwm72d7S+fJf++SOGea
// SIG // K0kumehVcbavQJTOVebuZ9V+qU0nk1lMrqve9BnQK69B
// SIG // QqNZu77vCO0wm81cfynAxkOYKZG3idY47qPJOgXKkwmI
// SIG // 2+92ozCCBgowggTyoAMCAQICEFIA5aolVvwahu2WydRL
// SIG // M8cwDQYJKoZIhvcNAQEFBQAwgcoxCzAJBgNVBAYTAlVT
// SIG // MRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEfMB0GA1UE
// SIG // CxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29yazE6MDgGA1UE
// SIG // CxMxKGMpIDIwMDYgVmVyaVNpZ24sIEluYy4gLSBGb3Ig
// SIG // YXV0aG9yaXplZCB1c2Ugb25seTFFMEMGA1UEAxM8VmVy
// SIG // aVNpZ24gQ2xhc3MgMyBQdWJsaWMgUHJpbWFyeSBDZXJ0
// SIG // aWZpY2F0aW9uIEF1dGhvcml0eSAtIEc1MB4XDTEwMDIw
// SIG // ODAwMDAwMFoXDTIwMDIwNzIzNTk1OVowgbQxCzAJBgNV
// SIG // BAYTAlVTMRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEf
// SIG // MB0GA1UECxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29yazE7
// SIG // MDkGA1UECxMyVGVybXMgb2YgdXNlIGF0IGh0dHBzOi8v
// SIG // d3d3LnZlcmlzaWduLmNvbS9ycGEgKGMpMTAxLjAsBgNV
// SIG // BAMTJVZlcmlTaWduIENsYXNzIDMgQ29kZSBTaWduaW5n
// SIG // IDIwMTAgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQD1I0tepdeKuzLp1Ff37+THJn6tGZj+qJ19
// SIG // lPY2axDXdYEwfwRof8srdR7NHQiM32mUpzejnHuA4Jnh
// SIG // 7jdNX847FO6G1ND1JzW8JQs4p4xjnRejCKWrsPvNamKC
// SIG // TNUh2hvZ8eOEO4oqT4VbkAFPyad2EH8nA3y+rn59wd35
// SIG // BbwbSJxp58CkPDxBAD7fluXF5JRx1lUBxwAmSkA8taEm
// SIG // qQynbYCOkCV7z78/HOsvlvrlh3fGtVayejtUMFMb32I0
// SIG // /x7R9FqTKIXlTBdOflv9pJOZf9/N76R17+8V9kfn+Bly
// SIG // 2C40Gqa0p0x+vbtPDD1X8TDWpjaO1oB21xkupc1+NC2J
// SIG // AgMBAAGjggH+MIIB+jASBgNVHRMBAf8ECDAGAQH/AgEA
// SIG // MHAGA1UdIARpMGcwZQYLYIZIAYb4RQEHFwMwVjAoBggr
// SIG // BgEFBQcCARYcaHR0cHM6Ly93d3cudmVyaXNpZ24uY29t
// SIG // L2NwczAqBggrBgEFBQcCAjAeGhxodHRwczovL3d3dy52
// SIG // ZXJpc2lnbi5jb20vcnBhMA4GA1UdDwEB/wQEAwIBBjBt
// SIG // BggrBgEFBQcBDARhMF+hXaBbMFkwVzBVFglpbWFnZS9n
// SIG // aWYwITAfMAcGBSsOAwIaBBSP5dMahqyNjmvDz4Bq1EgY
// SIG // LHsZLjAlFiNodHRwOi8vbG9nby52ZXJpc2lnbi5jb20v
// SIG // dnNsb2dvLmdpZjA0BgNVHR8ELTArMCmgJ6AlhiNodHRw
// SIG // Oi8vY3JsLnZlcmlzaWduLmNvbS9wY2EzLWc1LmNybDA0
// SIG // BggrBgEFBQcBAQQoMCYwJAYIKwYBBQUHMAGGGGh0dHA6
// SIG // Ly9vY3NwLnZlcmlzaWduLmNvbTAdBgNVHSUEFjAUBggr
// SIG // BgEFBQcDAgYIKwYBBQUHAwMwKAYDVR0RBCEwH6QdMBsx
// SIG // GTAXBgNVBAMTEFZlcmlTaWduTVBLSS0yLTgwHQYDVR0O
// SIG // BBYEFM+Zqep7JvRLyY6P1/AFJu/j0qedMB8GA1UdIwQY
// SIG // MBaAFH/TZafC3ey78DAJ80M5+gKvMzEzMA0GCSqGSIb3
// SIG // DQEBBQUAA4IBAQBWIuY0pMRhy0i5Aa1WqGQP2YyRxLvM
// SIG // DOWteqAif99HOEotbNF/cRp87HCpsfBP5A8MU/oVXv50
// SIG // mEkkhYEmHJEUR7BMY4y7oTTUxkXoDYUmcwPQqYxkbdxx
// SIG // kuZFBWAVWVE5/FgUa/7UpO15awgMQXLnNyIGCb4j6T9E
// SIG // mh7pYZ3MsZBc/D3SjaxCPWU21LQ9QCiPmxDPIybMSyDL
// SIG // kB9djEw0yjzY5TfWb6UgvTTrJtmuDefFmvehtCGRM2+G
// SIG // 6Fi7JXx0Dlj+dRtjP84xfJuPG5aexVN2hFucrZH6rO2T
// SIG // ul3IIVPCglNjrxINUIcRGz1UUpaKLJw9khoImgUux5Ol
// SIG // SJHTMYIEtzCCBLMCAQEwgckwgbQxCzAJBgNVBAYTAlVT
// SIG // MRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEfMB0GA1UE
// SIG // CxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29yazE7MDkGA1UE
// SIG // CxMyVGVybXMgb2YgdXNlIGF0IGh0dHBzOi8vd3d3LnZl
// SIG // cmlzaWduLmNvbS9ycGEgKGMpMTAxLjAsBgNVBAMTJVZl
// SIG // cmlTaWduIENsYXNzIDMgQ29kZSBTaWduaW5nIDIwMTAg
// SIG // Q0ECECnBWz+qzVJqTme9PE5+P/IwCQYFKw4DAhoFAKCB
// SIG // tDAZBgkqhkiG9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgor
// SIG // BgEEAYI3AgELMQ4wDAYKKwYBBAGCNwIBFTAjBgkqhkiG
// SIG // 9w0BCQQxFgQUWtwGjc+CaYXvvRHs81jILp5rOQMwVAYK
// SIG // KwYBBAGCNwIBDDFGMESgJoAkAEEAdQB0AG8AZABlAHMA
// SIG // awAgAEMAbwBtAHAAbwBuAGUAbgB0oRqAGGh0dHA6Ly93
// SIG // d3cuYXV0b2Rlc2suY29tIDANBgkqhkiG9w0BAQEFAASC
// SIG // AQB9XCL2ob/jMRnuZezXxmucQGWqGyhg9PSWyWomnV4p
// SIG // H3aFjRJBlodj5P0nGpqyleqA8SdQKsGGokUB6UqhTRHa
// SIG // bTpABUQpt0v4/k1iJJjNCCkHu19Wq1yWRENyFm0VYJRW
// SIG // qxxImpavIMQUwLQOsfNjW6AzXwzWsNOiyIzi57VYKT+g
// SIG // 4MsLPRrlmn+MEbtCPh5a5NOsX815kudPk0LJKJ8WE/of
// SIG // Dod8ixqL1Zh7lnoz8/5F401SXHI7L/M/sb660OoBkYNB
// SIG // BS/W/qzWxbW43H7MHJEOBPR4WkgqXBTu/mQKm8pg4CRg
// SIG // Mn0gOJZamJgnKSpIMsC/4928iHYXTg8A6VF/oYICCzCC
// SIG // AgcGCSqGSIb3DQEJBjGCAfgwggH0AgEBMHIwXjELMAkG
// SIG // A1UEBhMCVVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBv
// SIG // cmF0aW9uMTAwLgYDVQQDEydTeW1hbnRlYyBUaW1lIFN0
// SIG // YW1waW5nIFNlcnZpY2VzIENBIC0gRzICEA7P9DjI/r81
// SIG // bgTYapgbGlAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJ
// SIG // AzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTEz
// SIG // MTEyMTEwNTUwNFowIwYJKoZIhvcNAQkEMRYEFO5IcRLI
// SIG // 6SvivmGwdFze9X1QC2+LMA0GCSqGSIb3DQEBAQUABIIB
// SIG // AI+Zhcv1g3Nhhn2HTmmfPKpCx9ZCqp+XCoqV6R2L/Lbh
// SIG // 0Fi8po4PnH6jXUvq+n2hBLrFjQQk8BFN1k7kVS2F+vt7
// SIG // MesLuA1QCnTCfYjCyST/5xhCPgukutA4UA8i6p+tQzTB
// SIG // hNDgea9zSsQUr2Y9gthx6HUIjGXVpVVPtX1IgL543wV2
// SIG // kYXXZvIHl9XHU8ude1lRKKKBep8+9RaeO5AdPVNImdeB
// SIG // CIiG2c5NA8echCr3BGkZiMn3oLyocQtpLvR0WNWJ9KI5
// SIG // lGimTDtEolZluLlh5XDJpQRGF14RBJKXmaKd6H7lL+R2
// SIG // Wmexz9nrWLhNfCxioJXPs/9lCx58Wb8jMG4=
// SIG // End signature block

