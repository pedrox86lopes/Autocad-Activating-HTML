//=======================================================================
// State, Region, and Province Information
//=======================================================================

// Country State/Province Info
var ATStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="B">Burgenland </option>' +
						'<option value="K">Kärnten </option>' +
						'<option value="NÖ">Niederösterreich </option>' +
						'<option value="OÖ">Oberösterreich </option>' +
						'<option value="S">Salzburg </option>' +
						'<option value="ST">Steiermark </option>' +
						'<option value="T">Tirol </option>' +
						'<option value="V">Vorarlberg </option>' +
						'<option value="W">Wien </option>' +
						'</select>';

var AUStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="ACT">Aust Capital Terr </option>' +
						'<option value="NSW">New South Wales </option>' +
						'<option value="NT">Northern Territory </option>' +
						'<option value="QLD">Queensland </option>' +
						'<option value="SA">South Australia </option>' +
						'<option value="TAS">Tasmania </option>' +
						'<option value="VIC">Victoria </option>' +
						'<option value="WA">Western Australia </option>' +
						'</select>';

var USStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="AL">Alabama </option>' +
						'<option value="AK">Alaska </option>' +
						'<option value="AZ">Arizona </option>' +
						'<option value="AR">Arkansas </option>' +
						'<option value="CA">California </option>' +
						'<option value="CO">Colorado </option>' +
						'<option value="CT">Connecticut </option>' +
						'<option value="DE">Delaware </option>' +
						'<option value="DC">District of Columbia </option>' +
						'<option value="FL">Florida </option>' +
						'<option value="GA">Georgia </option>' +
						'<option value="HI">Hawaii </option>' +
						'<option value="ID">Idaho </option>' +
						'<option value="IL">Illinois </option>' +
						'<option value="IN">Indiana </option>' +
						'<option value="IA">Iowa </option>' +
						'<option value="KS">Kansas </option>' +
						'<option value="KY">Kentucky </option>' +
						'<option value="LA">Louisiana </option>' +
						'<option value="ME">Maine </option>' +
						'<option value="MD">Maryland </option>' +
						'<option value="MA">Massachusetts </option>' +
						'<option value="MI">Michigan </option>' +
						'<option value="MN">Minnesota </option>' +
						'<option value="MS">Mississippi </option>' +
						'<option value="MO">Missouri </option>' +
						'<option value="MT">Montana </option>' +
						'<option value="NE">Nebraska </option>' +
						'<option value="NV">Nevada </option>' +
						'<option value="NH">New Hampshire </option>' +
						'<option value="NJ">New Jersey </option>' +
						'<option value="NM">New Mexico </option>' +
						'<option value="NY">New York </option>' +
						'<option value="NC">North Carolina </option>' +
						'<option value="ND">North Dakota </option>' +
						'<option value="OH">Ohio </option>' +
						'<option value="OK">Oklahoma </option>' +
						'<option value="OR">Oregon </option>' +
						'<option value="PA">Pennsylvania </option>' +
						'<option value="RI">Rhode Island </option>' +
						'<option value="SC">South Carolina </option>' +
						'<option value="SD">South Dakota </option>' +
						'<option value="TN">Tennessee </option>' +
						'<option value="TX">Texas </option>' +
						'<option value="UT">Utah </option>' +
						'<option value="VT">Vermont </option>' +
						'<option value="VA">Virginia </option>' +
						'<option value="VI">Virgin Islands</option>' +
						'<option value="WA">Washington </option>' +
						'<option value="WV">West Virginia </option>' +
						'<option value="WI">Wisconsin </option>' +
						'<option value="WY">Wyoming </option>' +
						'<option value="AA">APOAmerica</option>' +
						'<option value="AE">APOEurope</option>' +
						'<option value="AP">APOPacific</option>' +
						'</select>';//<div id="stateError" style="width:60px;color:red;"> 2008-01-07

var BRStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="AC">Acre </option>' +	
						'<option value="AL">Alagoas </option>' +	
						'<option value="AP">Amapa </option>' +	
						'<option value="AM">Amazonas </option>' +	
						'<option value="BA">Bahia </option>' +	
						'<option value="CE">Ceara </option>' +	
						'<option value="DF">Distrito Federal </option>' +	
						'<option value="ES">Espirito Santo </option>' +	
						'<option value="GO">Goias </option>' +	
						'<option value="MA">Maranhao </option>' +	
						'<option value="MT">Mato Grosso </option>' +	
						'<option value="MG">Minas Gerais </option>' +	
						'<option value="PA">Para </option>' +	
						'<option value="PB">Paraiba </option>' +	
						'<option value="PR">Parana </option>' +	
						'<option value="PE">Pernambuco </option>' +	
						'<option value="PI">Piaui </option>' +	
						'<option value="RJ">Rio de Janeiro </option>' +	
						'<option value="RN">Rio Grande do Norte </option>' +	
						'<option value="RS">Rio Grande do Sul </option>' +	
						'<option value="RO">Rondonia </option>' +	
						'<option value="RR">Roraima </option>' +	
						'<option value="SC">Santa Catarina </option>' +	
						'<option value="SP">Sao Paulo </option>' +	
						'<option value="SE">Sergipe </option>' +	
						'<option value="TO">Tocantins </option>' +	
						'</select></div>';
						
var CAStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="AB">Alberta </option>' +
						'<option value="BC">British Columbia </option>' +
						'<option value="MB">Manitoba </option>' +
						'<option value="NB">New Brunswick </option>' +
						'<option value="NF">Newfoundland </option>' +
						'<option value="NT">Northwest Territories </option>' +
						'<option value="NS">Nova Scotia </option>' +
						'<option value="NU">Nunavut </option>' +
						'<option value="ON">Ontario </option>' +
						'<option value="PE">Prince Edward Island </option>' +
						'<option value="QC">Quebec </option>' +
						'<option value="SK">Saskatchewan </option>' +
						'<option value="YT">Yukon </option>' +
						'</select>';

var CHStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="AG">Aargau </option>' +
						'<option value="AI">Appenzell Innerrhoden </option>' +
						'<option value="AR">Appenzell Ausserrhoden </option>' +
						'<option value="BE">Bern </option>' +
						'<option value="BL">Basel-Landschaft </option>' +
						'<option value="BS">Basel-Stadt </option>' +
						'<option value="FR">Fribourg </option>' +
						'<option value="GE">Genève </option>' +
						'<option value="GL">Glarus </option>' +
						'<option value="GR">Graubüenden </option>' +
						'<option value="JU">Jura </option>' +
						'<option value="LU">Luzern </option>' +
						'<option value="NE">Neuchâtel </option>' +
						'<option value="NW">Nidwalden </option>' +
						'<option value="OW">Obwalden </option>' +
						'<option value="SG">St.Gallen </option>' +
						'<option value="SH">Schaffhausen </option>' +
						'<option value="SO">Solothurn </option>' +
						'<option value="SZ">Schwyz </option>' +
						'<option value="TG">Thurgau </option>' +
						'<option value="TI">Ticino </option>' +
						'<option value="UR">Uri </option>' +
						'<option value="VD">Vaud </option>' +
						'<option value="VS">Valais </option>' +
						'<option value="ZG">Zug </option>' +
						'<option value="ZH">Zürich </option>' +
						'</select>';

var CNStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="110">Anhui </option>' +
						'<option value="010">Beijing </option>' +
						'<option value="320">Chongqing </option>' +
						'<option value="150">Fujian </option>' +
						'<option value="260">Gansu </option>' +
						'<option value="190">Guangdong </option>' +
						'<option value="210">Guangxi </option>' +
						'<option value="220">Guizhou </option>' +
						'<option value="200">Hainan </option>' +
						'<option value="060">Hebei </option>' +
						'<option value="090">Heilongjiang </option>' +
						'<option value="180">Henan </option>' +
						'<option value="170">Hubei </option>' +
						'<option value="160">Hunan </option>' +
						'<option value="100">Jiangsu </option>' +
						'<option value="140">Jiangxi </option>' +
						'<option value="080">Jilin </option>' +
						'<option value="070">Liaoning </option>' +
						'<option value="040">NeiMongol </option>' +
						'<option value="270">Ningxia </option>' +
						'<option value="280">Qinghai </option>' +
						'<option value="250">Shaanxi </option>' +
						'<option value="120">Shandong </option>' +
						'<option value="020">Shanghai </option>' +
						'<option value="050">Shanxi </option>' +
						'<option value="230">Sichuan </option>' +
						'<option value="030">Tianjin </option>' +
						'<option value="290">Xinjiang </option>' +
						'<option value="300">Xizang </option>' +
						'<option value="240">Yunnan </option>' +
						'<option value="130">Zhejiang </option>' +
						'</select>';

var DEStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="08">Baden-Württemberg </option>' +
						'<option value="09">Bayern </option>' +
						'<option value="11">Berlin </option>' +
						'<option value="12">Brandenburg </option>' +
						'<option value="04">Bremen </option>' +
						'<option value="02">Hamburg </option>' +
						'<option value="06">Hessen </option>' +
						'<option value="13">Mecklenburg-Vorpommern </option>' +
						'<option value="03">Niedersachsen </option>' +
						'<option value="05">Nordrhein-Westfalen </option>' +
						'<option value="07">Rheinland-Pfalz </option>' +
						'<option value="10">Saarland </option>' +
						'<option value="14">Sachsen </option>' +
						'<option value="15">Sachsen-Anhalt</option>' +
						'<option value="01">Schleswig-Holstein </option>' +
						'<option value="16">Thüringen </option>' +
						'</select>';

var ESStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="01">Álava </option>' +
						'<option value="02">Albacete </option>' +
						'<option value="03">Alicante </option>' +
						'<option value="04">Almería </option>' +
						'<option value="33">Asturias </option>' +
						'<option value="05">Ávila </option>' +
						'<option value="06">Badajoz </option>' +
						'<option value="07">Baleares </option>' +
						'<option value="08">Barcelona </option>' +
						'<option value="09">Burgos </option>' +
						'<option value="10">Cáceres </option>' +
						'<option value="11">Cádiz </option>' +
						'<option value="39">Cantabria </option>' +
						'<option value="12">Castellón </option>' +
						'<option value="13">CiudadReal </option>' +
						'<option value="14">Córdoba </option>' +
						'<option value="16">Cuenca </option>' +
						'<option value="17">Gerona </option>' +
						'<option value="18">Granada </option>' +
						'<option value="19">Guadalajara </option>' +
						'<option value="20">Guipúzcoa </option>' +
						'<option value="21">Huelva </option>' +
						'<option value="22">Huesca </option>' +
						'<option value="23">Jaén </option>' +
						'<option value="15">La Coruña </option>' +
						'<option value="26">La Rioja </option>' +
						'<option value="35">Las Palmas </option>' +
						'<option value="24">León </option>' +
						'<option value="25">Lérida </option>' +
						'<option value="27">Lugo </option>' +
						'<option value="28">Madrid </option>' +
						'<option value="29">Málaga </option>' +
						'<option value="30">Murcia </option>' +
						'<option value="31">Navarra </option>' +
						'<option value="32">Orense </option>' +
						'<option value="34">Palencia </option>' +
						'<option value="36">Pontevedra </option>' +
						'<option value="37">Salamanca </option>' +
						'<option value="38">Santa Cruz de Tenerife </option>' +
						'<option value="40">Segovia </option>' +
						'<option value="41">Sevilla </option>' +
						'<option value="42">Soria </option>' +
						'<option value="43">Tarragona </option>' +
						'<option value="44">Teruel </option>' +
						'<option value="45">Toledo </option>' +
						'<option value="46">Valencia </option>' +
						'<option value="47">Valladolid </option>' +
						'<option value="48">Vizcaya </option>' +
						'<option value="49">Zamora </option>' +
						'<option value="50">Zaragoza </option>' +
						'</select>';

var HKStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="HK">Hong Kong Island </option>' +
						'<option value="KLN">Kowloon </option>' +
						'<option value="NT">New Territories </option>' +
						'</select>';

var IEStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="CW">Carlow </option>' +
						'<option value="KV">Cavan </option>' +
						'<option value="CL">Clare </option>' +
						'<option value="CK">Cork </option>' +
						'<option value="DG">Donegal </option>' +						
						'<option value="DB">Dublin </option>' +
						'<option value="GW">Galway </option>' +
						'<option value="KY">Kerry </option>' +
						'<option value="KD">Kildare </option>' +
						'<option value="KK">Kilkenny </option>' +
						'<option value="LS">Laois </option>' +
						'<option value="LM">Leitrim </option>' +
						'<option value="LI">Limerick </option>' +
						'<option value="LF">Longford </option>' +
						'<option value="LT">Louth </option>' +
						'<option value="MY">Mayo </option>' +
						'<option value="MT">Meath </option>' +
						'<option value="MH">Monaghan </option>' +
						'<option value="OS">Offaly </option>' +
						'<option value="RC">Rosscommon </option>' +
						'<option value="SG">Sligo </option>' +
						'<option value="TP">Tipperary </option>' +
						'<option value="WF">Waterford </option>' +
						'<option value="WM">Westmeath </option>' +
						'<option value="WX">Wexford </option>' +
						'<option value="WK">Wicklow </option>' +
						'</select>';

var ITStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="AG">Agrigento </option>' +
						'<option value="AL">Alessandria </option>' +
						'<option value="AN">Ancona </option>' +
						'<option value="AO">Aosta </option>' +
						'<option value="AR">Arezzo </option>' +
						'<option value="AP">Ascoli Piceno </option>' +
						'<option value="AT">Asti </option>' +
						'<option value="AV">Avellino </option>' +
						'<option value="BA">Bari </option>' +
						'<option value="BL">Belluno </option>' +
						'<option value="BN">Benevento </option>' +
						'<option value="BG">Bergamo </option>' +
						'<option value="BI">Biella </option>' +
						'<option value="BO">Bologna </option>' +
						'<option value="BZ">Bolzano </option>' +
						'<option value="BS">Brescia </option>' +
						'<option value="BR">Brindisi </option>' +
						'<option value="CA">Cagliari </option>' +
						'<option value="CL">Caltanissetta </option>' +
						'<option value="CB">Campobasso </option>' +
						'<option value="CE">Caserta </option>' +
						'<option value="CT">Catania </option>' +
						'<option value="CZ">Catanzaro </option>' +
						'<option value="CH">Chieti </option>' +
						'<option value="CO">Como </option>' +
						'<option value="CS">Cosenza </option>' +
						'<option value="CR">Cremona </option>' +
						'<option value="KR">Crotone </option>' +
						'<option value="CN">Cuneo </option>' +
						'<option value="EN">Enna </option>' +
						'<option value="FE">Ferrara </option>' +
						'<option value="FI">Firenze </option>' +
						'<option value="FG">Foggia </option>' +
						'<option value="FO">Forlì </option>' +
						'<option value="FR">Frosinone </option>' +
						'<option value="GE">Genova </option>' +
						'<option value="GO">Gorizia </option>' +
						'<option value="GR">Grosseto </option>' +
						'<option value="IM">Imperia </option>' +
						'<option value="IS">Isernia </option>' +
						'<option value="AQ">L`Aquila </option>' +
						'<option value="SP">LaSpezia </option>' +
						'<option value="LT">Latina </option>' +
						'<option value="LE">Lecce </option>' +
						'<option value="LC">Lecco </option>' +
						'<option value="LI">Livorno </option>' +
						'<option value="LO">Lodi </option>' +
						'<option value="LU">Lucca </option>' +
						'<option value="MC">Macerata </option>' +
						'<option value="MN">Mantova </option>' +
						'<option value="MS">Massa Carrara </option>' +
						'<option value="MT">Matera </option>' +
						'<option value="ME">Messina </option>' +
						'<option value="MI">Milano </option>' +
						'<option value="MO">Modena </option>' +
						'<option value="NA">Napoli </option>' +
						'<option value="NO">Novara </option>' +
						'<option value="NU">Nuoro </option>' +
						'<option value="OR">Oristano </option>' +
						'<option value="PD">Padova </option>' +
						'<option value="PA">Palermo </option>' +
						'<option value="PR">Parma </option>' +
						'<option value="PV">Pavia </option>' +
						'<option value="PG">Perugia </option>' +
						'<option value="PS">Pesaro e Urbino </option>' +
						'<option value="PE">Pescara </option>' +
						'<option value="PC">Piacenza </option>' +
						'<option value="PI">Pisa </option>' +
						'<option value="PT">Pistoia </option>' +
						'<option value="PN">Pordenone </option>' +
						'<option value="PZ">Potenza </option>' +
						'<option value="PO">Prato </option>' +
						'<option value="RG">Ragusa </option>' +
						'<option value="RA">Ravenna </option>' +
						'<option value="RC">Reggio Calabria </option>' +
						'<option value="RE">Reggio Emilia </option>' +
						'<option value="RI">Rieti </option>' +
						'<option value="RN">Rimini </option>' +
						'<option value="RM">Roma </option>' +
						'<option value="RO">Rovigo </option>' +
						'<option value="SA">Salerno </option>' +
						'<option value="SS">Sassari </option>' +
						'<option value="SV">Savona </option>' +
						'<option value="SI">Siena </option>' +
						'<option value="SR">Siracusa </option>' +
						'<option value="SO">Sondrio </option>' +
						'<option value="TA">Taranto </option>' +
						'<option value="TE">Teramo </option>' +
						'<option value="TR">Terni </option>' +
						'<option value="TP">Trapani </option>' +
						'<option value="TN">Trento </option>' +
						'<option value="TV">Treviso </option>' +
						'<option value="TS">Trieste </option>' +
						'<option value="TO">Torino </option>' +
						'<option value="UD">Udine </option>' +
						'<option value="VA">Varese </option>' +
						'<option value="VE">Venice </option>' +
						'<option value="VB">Verbano-Cusio-Ossola </option>' +
						'<option value="VC">Vercelli </option>' +
						'<option value="VR">Verona </option>' +
						'<option value="VV">Vibo Valentia </option>' +
						'<option value="VI">Vicenza </option>' +
						'<option value="VT">Viterbo </option>' +
						'</select>';


var JPStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +					
						'<option value="01">Hokkaido </option>' +
						'<option value="02">Aomori </option>' +
						'<option value="03">Iwate </option>' +
						'<option value="04">Miyagi </option>' +
						'<option value="05">Akita </option>' +
						'<option value="06">Yamagata </option>' +
						'<option value="07">Fukushima </option>' +
						'<option value="08">Ibaraki </option>' +
						'<option value="09">Tochigi </option>' +
						'<option value="10">Gunma </option>' +
						'<option value="11">Saitama </option>' +
						'<option value="12">Chiba </option>' +
						'<option value="13">Tokyo </option>' +
						'<option value="14">Kanagawa </option>' +
						'<option value="15">Niigata </option>' +
						'<option value="16">Toyama </option>' +
						'<option value="17">Ishikawa </option>' +
						'<option value="18">Fukui </option>' +
						'<option value="19">Yamanashi </option>' +
						'<option value="42">Nagano </option>' +
						'<option value="21">Gifu </option>' +
						'<option value="22">Shizuoka </option>' +
						'<option value="23">Aichi </option>' +
						'<option value="24">Mie </option>' +
						'<option value="25">Shiga </option>' +
						'<option value="26">Kyoto </option>' +
						'<option value="27">Osaka </option>' +
						'<option value="28">Hyogo </option>' +
						'<option value="29">Nara </option>' +
						'<option value="30">Wakayama </option>' +
						'<option value="31">Tottori </option>' +
						'<option value="32">Shimane </option>' +
						'<option value="33">Okayama </option>' +
						'<option value="34">Hiroshima </option>' +
						'<option value="35">Yamaguchi </option>' +
						'<option value="36">Tokushima </option>' +
						'<option value="37">Kagawa </option>' +
						'<option value="38">Ehime </option>' +
						'<option value="39">Kochi </option>' +
						'<option value="40">Fukuoka </option>' +
						'<option value="41">Saga </option>' +
						'<option value="20">Nagasaki </option>' +
						'<option value="43">Kumamoto </option>' +
						'<option value="44">Oita </option>' +
						'<option value="45">Miyazaki </option>' +
						'<option value="46">Kagoshima </option>' +
						'<option value="47">Okinawa </option>' +
						'</select>';

var MXStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="AGS">Aguascalientes </option>' +
						'<option value="BCN">Baja CaliforniaN </option>' +
						'<option value="BCS">Baja CaliforniaS </option>' +
						'<option value="CMP">Campeche </option>' +
						'<option value="CHS">Chiapas </option>' +
						'<option value="CHI">Chihuahua </option>' +
						'<option value="COA">Coahuila </option>' +
						'<option value="COL">Colima </option>' +
						'<option value="DF">Distrito Federal </option>' +
						'<option value="DGO">Durango </option>' +
						'<option value="MEX">Estado de México </option>' +
						'<option value="GTO">Guanajuato </option>' +
						'<option value="GRO">Guerrero </option>' +
						'<option value="HGO">Hidalgo </option>' +
						'<option value="JAL">Jalisco </option>' +
						'<option value="MCH">Michoacán </option>' +
						'<option value="MOR">Morelos </option>' +
						'<option value="NL">NuevoLéon </option>' +
						'<option value="OAX">Oaxaca </option>' +
						'<option value="PUE">Puebla </option>' +
						'<option value="QRO">Querétaro </option>' +
						'<option value="QR">Quintana Roo </option>' +
						'<option value="SLP">San Luis Potosí </option>' +
						'<option value="SIN">Sinaloa </option>' +
						'<option value="SON">Sonora </option>' +
						'<option value="TAB">Tabasco </option>' +
						'<option value="TMS">Tamaulipas </option>' +
						'<option value="TLX">Tlaxcala </option>' +
						'<option value="VER">Veracruz </option>' +
						'<option value="YUC">Yucatán </option>' +
						'<option value="ZAC">Zacatecas </option>' +
						'</select>';

var MYStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="JOH">Johor </option>' +
						'<option value="KED">Kedah </option>' +
						'<option value="KEL">Kelantan </option>' +
						'<option value="KUL">Kuala Lumpur, Wilayah Persekutuan </option>' +
						'<option value="LAB">Labuan, Wilayah Persekutuan </option>' +
						'<option value="MEL">Melaka </option>' +
						'<option value="PAH">Pahang </option>' +
						'<option value="PEL">Perlis </option>' +
						'<option value="PER">Perak </option>' +
						'<option value="PIN">PulauPinang </option>' +
						'<option value="PUT">Putrajaya, Wilayah Persekutuan </option>' +
						'<option value="SAB">Sabah </option>' +
						'<option value="SAR">Sarawak </option>' +
						'<option value="SEL">Selangor </option>' +
						'<option value="SER">NegeriSembilan </option>' +
						'<option value="TRE">Terengganu </option>' +
						'<option value="WP">Wilayah Persekutuan </option>' +
						'</select>';

var PTStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="40">Alentejo </option>' +
						'<option value="50">Algarve </option>' +
						'<option value="24">Beira Interior </option>' +
						'<option value="15">Beira Litoral </option>' +
						'<option value="10">Entre Douro e Minho </option>' +
						'<option value="22">Estremadura e Ribatejo </option>' +
						'<option value="31">Lisboa e Setúbal </option>' +
						'<option value="70">Reg. Aut. da Madeira </option>' +
						'<option value="60">Reg. Aut. dos Açores </option>' +
						'<option value="16">Trás-os-Montes e Alto Douro </option>' +
						'</select>';

var TWStPrRegHTML = '<select name="state" size="1">' +
						'<option value="select">'+xmsgPleaseSelect+'</option>' +
						'<option value="KSH">Kaoshung City </option>' +
						'<option value="TPE">Taipei City </option>' +
						'<option value="TWN">Taiwan Prov. </option>' +
						'</select>';



//=======================================================================
// Country Long Name Information
//=======================================================================

var CountryCollection = 
				'<option selected value="select">'+xmsgPleaseSelect+'</option>' +
				'<option value="BR">Brasil </option>' +
				'<option value="AF">Afeganistão </option>' +
				'<option value="ZA">África do Sul </option>' +
				'<option value="AL">Albânia </option>' +
				'<option value="DE">Alemanha </option>' +
				'<option value="DZ">Algéria </option>' +
				'<option value="AD">Andorra </option>' +
				'<option value="AO">Angola </option>' +
				'<option value="AI">Anguilla </option>' +
				'<option value="AG">Antígua e Barbuda </option>' +
				'<option value="AN">Antilhas Holandesas </option>' +
				'<option value="AR">Argentina </option>' +
				'<option value="SA">Arábia Saudita </option>' +
				'<option value="AM">Armênia </option>' +
				'<option value="AW">Aruba </option>' +
				'<option value="AU">Austrália </option>' +
				'<option value="AT">Áustria </option>' +
				'<option value="AZ">Azerbaijão </option>' +
				'<option value="BS">Bahamas </option>' +
				'<option value="BD">Bangladesh </option>' +
				'<option value="BH">Barein </option>' +
				'<option value="BB">Barbados </option>' +
				'<option value="BY">Belarus </option>' +
				'<option value="BE">Bélgica </option>' +
				'<option value="BZ">Belize </option>' +
				'<option value="BJ">Benin </option>' +
				'<option value="BM">Bermuda </option>' +
				'<option value="BO">Bolívia </option>' +
				'<option value="BA">Bósnia e Herzegovina </option>' +
				'<option value="BW">Botsuana </option>' +
				'<option value="BR">Brasil </option>' +
				'<option value="BN">Brunei Darussalam </option>' +
				'<option value="BG">Bulgária </option>' +
				'<option value="BF">Burkina Fasso </option>' +
				'<option value="BI">Burundi </option>' +
				'<option value="BT">Butão </option>' +
				'<option value="CV">Cabo Verde </option>' +
				'<option value="CM">Camarões </option>' +
				'<option value="KH">Camboja </option>' +
				'<option value="CA">Canadá </option>' +
				'<option value="QA">Catar </option>' +
				'<option value="KZ">Cazaquistão </option>' +
				'<option value="TD">Chade </option>' +
				'<option value="CL">Chile </option>' +
				'<option value="CN">China </option>' +
				'<option value="CY">Chipre </option>' +
				'<option value="CO">Colômbia </option>' +
				'<option value="VA">Cidade do Vaticano </option>' +
				'<option value="SG">Cingapura </option>' +
				'<option value="KM">Comores </option>' +
				'<option value="CG">Congo </option>' +
				'<option value="CD">Congo, República Democrática do </option>' +	
				'<option value="CK">Cook Islands (New Zealand) </option>' +
				'<option value="KR">Coréia do Sul </option>' +
				'<option value="CR">Costa Rica </option>' +
				'<option value="CI">Costa do Marfim </option>' +
				'<option value="HR">Croácia (Hrvatska) </option>' +		
				'<option value="DK">Dinamarca </option>' +
				'<option value="DJ">Djibuti </option>' +
				'<option value="DM">Dominica </option>' +
				'<option value="EG">Egito </option>' +
				'<option value="SV">El Salvador </option>' +
				'<option value="AE">Emirados Árabes Unidos </option>' +
				'<option value="EC">Equador </option>' +
				'<option value="ER">Eritréia </option>' +
				'<option value="SI">Eslovênia </option>' +
				'<option value="ES">Espanha </option>' +
				'<option value="US">Estados Unidos </option>' +
				'<option value="EE">Estônia </option>' +
				'<option value="ET">Etiópia </option>' +
				'<option value="RU">Federação Russa </option>' +
				'<option value="FJ">Fiji </option>' +
				'<option value="PH">Filipinas </option>' +
				'<option value="FI">Finlândia </option>' +
				'<option value="FR">França </option>' +
				'<option value="GA">Gabão </option>' +
				'<option value="GM">Gâmbia </option>' +
				'<option value="GH">Gana </option>' +
				'<option value="GE">Geórgia </option>' +
				'<option value="GI">Gibraltar </option>' +
				'<option value="GD">Granada </option>' +
				'<option value="GR">Grécia </option>' +
				'<option value="GL">Groenlândia </option>' +
				'<option value="GP">Guadalupe </option>' +
				'<option value="GU">Guam </option>' +
				'<option value="GT">Guatemala </option>' +
				'<option value="GN">Guiné </option>' +
				'<option value="GW">Guiné-Bissau </option>' +
				'<option value="GQ">Guiné Equatorial </option>' +	
				'<option value="GY">Guiana </option>' +
				'<option value="GF">Guiana Francesa </option>' +
				'<option value="HT">Haiti </option>' +
				'<option value="NL">Holanda </option>' +
				'<option value="HN">Honduras </option>' +
				'<option value="HK">Hong Kong </option>' +
				'<option value="HU">Hungria </option>' +
				'<option value="YE">Iêmen </option>' +
				'<option value="BV">Ilha Bouvet </option>' +
				'<option value="NF">Ilha Norfolk </option>' +
				'<option value="KY">Ilhas Cayman </option>' +
				'<option value="CX">Ilhas Christmas (Austrália) </option>' +
				'<option value="CC">Ilhas Cocos (Keeling) </option>' +
				'<option value="FK">Ilhas Falkland </option>' +
				'<option value="FO">Ilhas Faroe </option>' +
				'<option value="SB">Ilhas Salomão </option>' +
				'<option value="VC">Ilhas São Vicente </option>' +
				'<option value="MP">Ilhas Marianas do Norte </option>' +
				'<option value="MH">Ilhas Marshall </option>' +
				'<option value="SJ">Ilhas Svalbard e Jan Mayen </option>' +
				'<option value="TC">Ilhas Turks e Caicos </option>' +
				'<option value="VG">Ilhas Virgens (Britânicas) </option>' +
				'<option value="VI">Ilhas Virgens (Americanas) </option>' +
				'<option value="WF">Ilhas Wallis e Futuna </option>' +
				'<option value="IN">Índia </option>' +
				'<option value="ID">Indonésia </option>' +
				'<option value="IQ">Iraque </option>' +
				'<option value="IE">Irlanda </option>' +
				'<option value="IS">Islândia </option>' +
				'<option value="IL">Israel </option>' +
				'<option value="IT">Itália </option>' +
				'<option value="JM">Jamaica </option>' +
				'<option value="JP">Japão </option>' +
				'<option value="JO">Jordânia </option>' +
				'<option value="KI">Kiribati </option>' +
				'<option value="KW">Kuwait </option>' +
				'<option value="LA">Laos </option>' +
				'<option value="LS">Lesoto </option>' +
				'<option value="LV">Letônia </option>' +
				'<option value="LB">Líbano </option>' +
				'<option value="LR">Libéria </option>' +
				'<option value="LY">Líbia </option>' +
				'<option value="LI">Liechtenstein </option>' +
				'<option value="LT">Lituânia </option>' +
				'<option value="LU">Luxemburgo </option>' +
				'<option value="MO">Macau </option>' +
				'<option value="MK">Macedônia </option>' +
				'<option value="MG">Madagascar </option>' +
				'<option value="MW">Malavi </option>' +
				'<option value="MY">Malásia </option>' +
				'<option value="MV">Maldivas </option>' +
				'<option value="ML">Mali </option>' +
				'<option value="MT">Malta </option>' +
				'<option value="MQ">Martinica </option>' +
				'<option value="MR">Mauritânia </option>' +
				'<option value="MU">Maurício </option>' +
				'<option value="YT">Mayotte </option>' +
				'<option value="MX">México </option>' +
				'<option value="FM">Micronésia </option>' +
				'<option value="MZ">Moçambique </option>' +
				'<option value="MD">Moldávia </option>' +
				'<option value="MC">Mônaco </option>' +
				'<option value="MN">Mongólia </option>' +
				'<option value="MS">Montserrat </option>' +
				'<option value="MA">Marrocos </option>' +
				'<option value="MM">Myanma </option>' +
				'<option value="NA">Namíbia </option>' +
				'<option value="NR">Nauru </option>' +
				'<option value="NP">Nepal </option>' +
				'<option value="NI">Nicarágua </option>' +
				'<option value="NE">Níger </option>' +
				'<option value="NG">Nigéria </option>' +
				'<option value="NU">Niue </option>' +
				'<option value="NO">Noruega </option>' +
				'<option value="NC">Nova Caledônia </option>' +
				'<option value="NZ">Nova Zelândia </option>' +
				'<option value="OM">Omã </option>' +
				'<option value="PW">Palau </option>' +
				'<option value="PA">Panamá </option>' +
				'<option value="PG">Papua-Nova Guiné </option>' +
				'<option value="PK">Paquistão </option>' +
				'<option value="PY">Paraguai </option>' +
				'<option value="PE">Peru </option>' +
				'<option value="PN">Pitcairn Islands </option>' +
				'<option value="PF">Polinésia Francesa </option>' +
				'<option value="PL">Polônia </option>' +
				'<option value="PT">Portugal </option>' +
				'<option value="PR">Porto Rico </option>' +
				'<option value="KE">Quênia </option>' +
				'<option value="KG">Quirguistão </option>' +
				'<option value="GB">Reino Unido </option>' +
				'<option value="CF">República Centro-Africana </option>' +
				'<option value="DO">República Dominicana </option>' +
				'<option value="SK">República Eslovaca </option>' +
				'<option value="CZ">República Tcheca </option>' +
				'<option value="RE">Reunião </option>' +
				'<option value="RO">Romênia </option>' +
				'<option value="RW">Ruanda </option>' +
				'<option value="EH">Saara Ocidental </option>' +
				'<option value="PM">Saint-Pierre e Miquelon </option>' +
				'<option value="AS">Samoa Americana </option>' +
				'<option value="WS">Samoa Oeste</option>' +
				'<option value="SM">San Marino </option>' +
				'<option value="SH">Santa Helena </option>' +
				'<option value="LC">Santa Lúcia </option>' +
				'<option value="VC">Saint Vincent and the Grenadines </option>' +
				'<option value="ST">São Tomé e Príncipe </option>' +
				'<option value="RS">Serbia </option>' +
				'<option value="SN">Senegal </option>' +
				'<option value="SC">Seychelles </option>' +
				'<option value="SL">Serra Leoa </option>' +
				'<option value="SY">Siria </option>' +
				'<option value="SO">Somália </option>' +
				'<option value="LK">Sri Lanka </option>' +
				'<option value="KN">St. Kitts e Navis </option>' +
				'<option value="SZ">Suazilândia </option>' +
				'<option value="SE">Suécia </option>' +
				'<option value="CH">Suíça </option>' +
				'<option value="SR">Suriname </option>' +
 				'<option value="TH">Tailândia </option>' +
				'<option value="TW">Taiwan </option>' +
				'<option value="TJ">Tajikistão </option>' +
				'<option value="TZ">Tanzânia, República Unida da </option>' +
				'<option value="IO">Território Britânico do Oceano Índico </option>' +
				'<option value="UM">Territórios Insulares dos EUA </option>' +
				'<option value="TP">Timor Leste</option>' +
				'<option value="TG">Togo </option>' +
				'<option value="TK">Tokelau </option>' +
				'<option value="TO">Tonga </option>' +
				'<option value="TT">Trinidad e Tobago </option>' +
				'<option value="TN">Tunísia </option>' +
				'<option value="TR">Turquia </option>' +
				'<option value="TM">Turcomenistão </option>' +
				'<option value="TV">Tuvalu </option>' +
				'<option value="UA">Ucrânia </option>' +
				'<option value="UG">Uganda </option>' +
				'<option value="UY">Uruguai </option>' +
				'<option value="UZ">Uzbequistão </option>' +
				'<option value="VU">Vanuatu </option>' +
				'<option value="VE">Venezuela </option>' +
				'<option value="VN">Vietnã </option>' +
				'<option value="ZM">Zâmbia </option>' +
				'<option value="ZW">Zimbábue </option>' +
				'</select>';
				
var CountryHTML= xmsgRedStar + xmsgSelectCountry +'<br>' +
				'<select name="country" size="1">' +
				CountryCollection;

function ChangeCountry() {
	if (document.RTForm.country.selectedIndex == 0) {
		document.RTForm.country.selectedIndex = 1;
	}
	country = document.RTForm.country.options[document.RTForm.country.selectedIndex].value;
	SetCountryContactInfo();
}

var CountryDHTML= xmsgSelectCountry2+
				'<select name="country" size="1" onchange="ChangeCountry()" onkeyup="ChangeCountry()">' +
				CountryCollection;
// SIG // Begin signature block
// SIG // MIIZewYJKoZIhvcNAQcCoIIZbDCCGWgCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFB6ctBTmrRC4
// SIG // A15TKJDvlL6AVJVZoIIUMDCCA+4wggNXoAMCAQICEH6T
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
// SIG // 9w0BCQQxFgQUpmHUnrdLq4NbP79vaDgvYg9n0VQwVAYK
// SIG // KwYBBAGCNwIBDDFGMESgJoAkAEEAdQB0AG8AZABlAHMA
// SIG // awAgAEMAbwBtAHAAbwBuAGUAbgB0oRqAGGh0dHA6Ly93
// SIG // d3cuYXV0b2Rlc2suY29tIDANBgkqhkiG9w0BAQEFAASC
// SIG // AQBzElmAG3PVWwkbYs57n5x39XAZyjA25SUws1EBaePI
// SIG // UxcVyGHxiMgBhyM3pzcPBK2eXOFE/sKNUEwpg7AN7pdK
// SIG // NyePE+WT5q+dne8uYwBELoXZlnprhJUK3er4aa8t3gad
// SIG // TYexLgE17+8XFQI+rKg8SakoBU/3IbvBe6PtqHNtdAsk
// SIG // DyfHWeCw3IgasfUWC7Wv4gBV+zjlhKMt8zZ8q/UmvkuO
// SIG // MlJv/A1Jq4mnD4y8lH6Ldn3iZRZ7JntqdmoVUkBqGjEG
// SIG // u0s96Tjh8+oZKt7D+d3EdaqfY/joWHxZO7L5zH1aREN5
// SIG // K7EwenNheRF4WCVMjRvFkxc3ASeQQN4S+2etoYICCzCC
// SIG // AgcGCSqGSIb3DQEJBjGCAfgwggH0AgEBMHIwXjELMAkG
// SIG // A1UEBhMCVVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBv
// SIG // cmF0aW9uMTAwLgYDVQQDEydTeW1hbnRlYyBUaW1lIFN0
// SIG // YW1waW5nIFNlcnZpY2VzIENBIC0gRzICEA7P9DjI/r81
// SIG // bgTYapgbGlAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJ
// SIG // AzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTEz
// SIG // MTEyMTEwNTUwM1owIwYJKoZIhvcNAQkEMRYEFIdEHf7h
// SIG // D3YhZmLYbm1+Ml0YuAXnMA0GCSqGSIb3DQEBAQUABIIB
// SIG // AGEOGpuEheQazOXc888dTiOnD4qXu8+hnh3H2uaBkcUk
// SIG // RXFWxn2V/SBF6MwrwOfjLFv7lxeyRpNWpTFXMEoFJPPR
// SIG // /DujhemWsHSKFN4KeSo68qZSdwnUFWdiy5ScGEI55F9T
// SIG // k5LBkbjtfnHV0EKj1YkttzOAat5z9v9siXG327iRLifI
// SIG // gMqtYDJN8CbLE420hEfp0gYXShBYol/SYYEcLnhOBl/z
// SIG // J2avWhkHRR1omTAVF402HzvjvU8b5DF/kcbd1PfsWTjU
// SIG // CZ+Xbh6u0S37JoZ9sDlvoua3FhG56frSpdB7QufQiAio
// SIG // /CYt0UcGtGdXAMSgRT/Y4OwvkFDUcUirkxo=
// SIG // End signature block

