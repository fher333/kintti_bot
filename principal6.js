var TelegramBot = require('node-telegram-bot-api'); //se invoca la libreria de none-telegram-bot-api

/*
Monitor 717550092  iphone fher 3166323179
martin garcia       790663322
mauricio combustion 1145750748
jessica tobar       1250187130
maryury venezolana  1204215559
luisa fernanda diaz 1115398938
nayibe daza         1135835787
huawei fher         933443152
victoria mmira      1115689097
huwei p9 ingstudio  1042597637
*/

//547539239 antonio huete
//1101516190 johnn edwar
//969529351 mauro rojas
//1150742077 sandra niño
//921828190 alejandro diaz
//1239779819 daniela rionegro amiga sandra niño
//var room1 = {name:"Chat Room 1 prueba", token: '1119763048:AAF7lGV8AN2lcRLQMGBjHRjThNeOGcTCAyM', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/chatfherbot"};
// este es el verdadero 
// room desde celular fher 3166323179

var chatMonitor = {name:"Monitor Kintti", token: '1293249756:AAGqocPSvjdPfcNZ3RZDY48Hj1jaKBsVS74', used: true, userOk: false, girlOK: false, link: "t.me/monitor_kintti_bot"}; //monitor
var kintti = {name:"Kintti", token: '1167735604:AAGc6sKPNUVQyBl3-3STWqeHvpcQcVQoDac', used: true, userOk: false, girlOK: false, link: "t.me/kintti_bot"}; //bot_principal

// el usuario monitor es mi el numero de fher iphoneX
var monitor = {name:"monitor", code: 0, ID: 717550092, city: "cali", age: 19, category: "cita", numberPhone: 321457889,  chatOnline: false};// fher iphonex
var girl11 = {name:"Jeka", code: 11, ID: 933443152, city: "cali", age: 28, category: "amistad", numberPhone: 3212215487,  chatOnline: false};//fher huawei Y9
//var girl11 = {name:"Jeka", code: 11, ID: 1250187130, city: "cali", age: 28, category: "amistad", numberPhone: 3212215487,  chatOnline: false};
//var girl12 = {name:"maryu", code: 12, ID: 1204215559, city: "cali", age: 22, category: "cita", numberPhone: 3155584525,  chatOnline: false};
//girl 12 numero ingstudio
var girl12 = {name:"maryu", code: 12, ID: 1042597637, city: "cali", age: 22, category: "cita", numberPhone: 3155584525,  chatOnline: false};// fher huawei P9
//var girl13 = {name:"luisa", code: 13, ID: 1115398938, city: "cali", age: 18, category: "amistad", numberPhone: 3187895847,  chatOnline: false};
// girl 13 numero de  fher
var girl13 = {name:"luisa", code: 13, ID: 717550092, city: "cali", age: 18, category: "amistad", numberPhone: 3187895847,  chatOnline: false};// fher iphoneX
//var girl14 = {name:"nayi", code: 14, ID: 1135835787, city: "cali", age: 30, category: "amistad", numberPhone: 3217896587,  chatOnline: false};
//girl 14 numero de vicky
var girl14 = {name:"nayi", code: 14, ID: 1115689097, city: "cali", age: 30, category: "amistad", numberPhone: 3217896587,  chatOnline: false};// vicky xiaomi
// girl 15 huawei y9
var girl15 = {name:"La Gata", code: 15, ID: 933443152, city: "cali", age: 18, category: "cita", numberPhone: 3202235689,  chatOnline: false};// fher huawei Y9


var girl16 = {name:"Jeka", code: 16, ID: 933443152, city: "cali", age: 28, category: "amistad", numberPhone: 3212215487,  chatOnline: false};//fher huawei Y9
var girl17 = {name:"maryu", code: 17, ID: 1042597637, city: "cali", age: 22, category: "cita", numberPhone: 3155584525,  chatOnline: false};// fher huawei P9
var girl18 = {name:"luisa", code: 18, ID: 717550092, city: "cali", age: 18, category: "amistad", numberPhone: 3187895847,  chatOnline: false};// fher iphoneX
var girl19 = {name:"nayi", code: 19, ID: 1115689097, city: "cali", age: 30, category: "amistad", numberPhone: 3217896587,  chatOnline: false};// vicky xiaomi
var girl20 = {name:"20-Juliana Valdiri", code: 20, ID: 933443152, city: "Rionegro", age: 22, category: "Cita", numberPhone: 3202235689,  chatOnline: false};// fher huawei Y9
var girl21 = {name:"21-Samantha Aguilar", code: 21, ID: 933443152, city: "La Ceja", age: 20, category: "Cita", numberPhone: 3212215487,  chatOnline: false};//fher huawei Y9
var girl22 = {name:"22-Ashley Velez", code: 22, ID: 1042597637, city: "Rionegro", age: 19, category: "Amistad", numberPhone: 3155584525,  chatOnline: false};// fher huawei P9
var girl23 = {name:"23-Sofia Henao", code: 23, ID: 717550092, city: "Marinilla", age: 26, category: "Amistad", numberPhone: 3187895847,  chatOnline: false};// fher iphoneX
var girl24 = {name:"24-Catalina Londoño", code: 24, ID: 1115689097, city: "Medellin", age: 18, category: "Amistad", numberPhone: 3217896587,  chatOnline: false};// vicky xiaomi
var girl25 = {name:"25-Karol Bedoya", code: 25, ID: 933443152, city: "Rionegro", age: 19, category: "Cita", numberPhone: 3202235689,  chatOnline: false};// fher huawei Y9
var girl26 = {name:"26-Angie Vallejo", code: 26, ID: 933443152, city: "Rionegro", age: 26, category: "Cita", numberPhone: 3212215487,  chatOnline: false};//fher huawei Y9
var girl27 = {name:"27-Katerine Cruz", code: 27, ID: 1042597637, city: "El Carmen", age: 27, category: "Cita", numberPhone: 3155584525,  chatOnline: false};// fher huawei P9
var girl28 = {name:"28-Melissa Roldan", code: 28, ID: 717550092, city: "Marinilla", age: 19, category: "Amistad", numberPhone: 3187895847,  chatOnline: false};// fher iphoneX
var girl29 = {name:"29-Angelina Gutierrez", code: 29, ID: 1115689097, city: "Medellin", age: 20, category: "Amistad", price:"$60.000", numberPhone: 3217896587,  chatOnline: false};// vicky xiaomi
var girl30 = {name:"30-Antonia Palacios", code: 30, ID: 933443152, city: "La Ceja", age: 26, category: "Cita", price:"$60.000", numberPhone: 3202235689,  chatOnline: false};// fher huawei Y9
var girl31 = {name:"31-Sofia Saldarriaga", code: 31, ID: 933443152, city: "Medellin", age: 22, category: "Amistad", price:"$60.000", numberPhone: 3212215487,  chatOnline: false};//fher huawei Y9

var girls = [girl11, girl12, girl13, girl14, girl15, girl16, girl17, girl18, girl19, girl20, girl21, girl22, girl23, girl24, girl25 ,girl26, girl27, girl28, girl29, girl30, girl31];
 


var room1 = {name:"Chat Room 1", token: '1214211400:AAEpxCew-CPwZotWVIrtOAVgGK731UNhUlA', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_1_bot"};
var room2 = {name:"Chat Room 2", token: '838906383:AAGAyVvkVQL1bKkw4DZ9K5KQ08HY_pkILvM',  used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_2_bot"};
var room3 = {name:"Chat Room 3", token: '1223414025:AAGxl_XNZOA0IVl4ZEkWvCpoIL-A2e9MwzM', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/romm_3_bot"};
var room4 = {name:"Chat Room 4", token: '1234970132:AAGRdMLWE9R7_9Ovjwi0ZfcKTnTURTn5mgQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_4_bot"};
var room5 = {name:"Chat Room 5", token: '1198020310:AAF_YUAQTIBCGHcK8MPUAA_FupGUim-EpKc', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_5_bot"};
var room6 = {name:"Chat Room 6", token: '1170692133:AAGUVL7iyrcG6Xo4SnWfAEJslS_cF_InWI4', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_6_bot"};
var room7 = {name:"Chat Room 7", token: '1182303392:AAEaegNRGhPYetdS47HKX4u8SRIrq15a1sY', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_7_bot"};
var room8 = {name:"Chat Room 8", token: '1233121699:AAE9CemaMDH4kk9BXjVUbBQ_A4fDQb7S8LQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_8_bot"};
var room9 = {name:"Chat Room 9", token: '1254923484:AAHJqFDGK_quk5TbrAwdZO2bdNJjh0uncEg', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_9_bot"};
var room10 = {name:"Chat Room 10", token: '1199652007:AAFpaqtTnsZB4PRd-iITzSJToiz_BfX-3i0', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_10_bot"};
var room11 = {name:"Chat Room 11", token: '1235801656:AAFxoIRKT4nOXAyn0Cru-4lYkZhxGD_oZRI', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_11_bot"};
var room12 = {name:"Chat Room 12", token: '1296006885:AAG2ZZu8tSSNEKkgcMo8z8DlWEPKvSp015M', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_12_bot"};
var room13 = {name:"Chat Room 13", token: '1181777678:AAERYfw39Jsj9vl9dhXzLe0s5A15X5htrxY', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_13_bot"};
var room14 = {name:"Chat Room 14", token: '927248869:AAGdALnEMdGjebHUTceA29nl2k7tc3hMLwY', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_14_bot"};
var room15 = {name:"Chat Room 15", token: '1017804642:AAGVgeeItd_MGxY7n3CO7IAxUHwMTQi62tQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_15_bot"};
var room16 = {name:"Chat Room 16", token: '1162575859:AAGpiI92C0AhZ1SYUD1CoGPKBXLFNlN0jts', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_16_bot"};
var room17 = {name:"Chat Room 17", token: '1227344495:AAEblIJGbs9FdoH75oPxAE7bzv-q4tn1bbc', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_17_bot"};
var room18 = {name:"Chat Room 18", token: '1217696636:AAGM3u_zt6HqIW5o4yU7am3BXWH2IIc3JRc', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_18_bot"};
var room19 = {name:"Chat Room 19", token: '1280718231:AAE7kDf-7ZvpBxuumI4hNzr8uJ7U2Mlw-Yg', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_19_bot"};
//39-58 celular chicas rionegro 3203520661 huawei y9
var room20 = {name:"Chat Room 20", token: '1144425573:AAEDPUJBB3RHKModS1-phFRPRi-SERqvHyM', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_20_bot"};
var room21 = {name:"Chat Room 21", token: '1193099755:AAFNNZ-bdJ0R-OwUfm9dOpCVurGJHfL-3Z4', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_21_bot"};
var room22 = {name:"Chat Room 22", token: '1114139170:AAGo064i0fBemvaOz_CQteQWCOKOaZVUl8U', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_22_bot"};
var room23 = {name:"Chat Room 23", token: '1203029347:AAH8B_kzM3n9sObuo1cAKcqF7U_-_vfxWTc', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_23_bot"};
var room24 = {name:"Chat Room 24", token: '1188601604:AAEYJi-YmIyKNZpHeRbpe_AGFs3lXPi3S6o', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_24_bot"};
var room25 = {name:"Chat Room 25", token: '1109790541:AAFUciQNiUEjBUd_nXH8SeTGwvl1K3QWYjI', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_25_bot"};
var room26 = {name:"Chat Room 26", token: '1278065518:AAEhxKv0h6i6Ffvw3VenHPxrMfvaNR_-wJA', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_26_bot"};
var room27 = {name:"Chat Room 27", token: '1003873009:AAFMYMexC562eft_FM3FoU-srFoVj0K-dSQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_27_bot"};
var room28 = {name:"Chat Room 28", token: '1232312853:AAHWlZc4hwPOXSX6iCi0g5MBMSiMc4kk6aU', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_28_bot"};
var room29 = {name:"Chat Room 29", token: '1199495393:AAFMJEgjW5c-Di55zbeX4cmPe88lHcw45CA', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_29_bot"};
var room30 = {name:"Chat Room 30", token: '1088466257:AAGj7TmpN2QSTQdPh4cUS9GuX3xaGBIYJWE', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_30_bot"};
var room31 = {name:"Chat Room 31", token: '1292195034:AAGLC2vd6kI9psDyTkOYvpbfcj-0a39BhJk', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_31_bot"};
var room32 = {name:"Chat Room 32", token: '1131866516:AAGntHHZKcp8OmkSsQqn0fQa-9WsJ6f15UA', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_32_bot"};
var room33 = {name:"Chat Room 33", token: '1218760629:AAGCvtNcWCW609GkvnM-i0ALEdv_2lMnrgM', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_33a_bot"};
var room34 = {name:"Chat Room 34", token: '1168171928:AAH8RoYiCPzoyJLgXlfTZrbmo3QpODWDfs4', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_34_bot"};
var room35 = {name:"Chat Room 35", token: '1024915582:AAGqiSSugiybKQjWZcnCqjlaCgnULMaPG84', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_35_bot"};
var room36 = {name:"Chat Room 36", token: '1181991207:AAFlScvJui0u4f1Y8gDPGIHYLDEvalQM4bg', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_36_bot"};
var room37 = {name:"Chat Room 37", token: '1135704014:AAGLf3al8NnwUuOajz-tPJKQAAEVjIfat-Q', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_37_bot"};
var room38 = {name:"Chat Room 38", token: '1157965581:AAF3BTwZBc9fZs4beBpiRlESfGd701PKx68', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_38_bot"};
//39-58 celular ingstudio 3188669764 huawei p9
var room39 = {name:"Chat Room 39", token: '1177860983:AAGzd7p_FMkudj727ZDK0m5wHrF-QyBn-UQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_39_bot"};
var room40 = {name:"Chat Room 40", token: '1292360861:AAG4nlYmILTXGziyMVEBn5T913JTSDw3DNg', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_40_bot"};
var room41 = {name:"Chat Room 41", token: '1093114644:AAHERDAgtOIJ-ggEsfJuGqcfmKtBpu3D6V8', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_41_bot"};
var room42 = {name:"Chat Room 42", token: '1194013418:AAH-N_--diw3xz5GqO6zvenpsFGI61wdVcI', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_42_bot"};
var room43 = {name:"Chat Room 43", token: '1132115671:AAG7vgYr7vWdRbAsc0SLK3df7FDYwlohHGw', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_43_bot"};
var room44 = {name:"Chat Room 44", token: '903323746:AAGVTFHOj7CW2JdhPLHxhKveoSRU96T3BFE', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_44_bot"};
var room45 = {name:"Chat Room 45", token: '1220270806:AAGp91LdbeSeXiBNFL_azUt6GNeJVY5g6yM', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_45_bot"};
var room46 = {name:"Chat Room 46", token: '1276127130:AAFGt49dbdySUibVXMIDE1YsQLV6Jdopvy0', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_46_bot"};
var room47 = {name:"Chat Room 47", token: '1234614968:AAFlhi8W64ck4aiNbQMFOxfiMQy4ZAM2uA0', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_47_bot"};
var room48 = {name:"Chat Room 48", token: '1189945298:AAHm9Vrgc1dpWMMpZ3RtBg_l43pmN2dHYOA', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_48_bot"};
var room49 = {name:"Chat Room 49", token: '1267742162:AAHQaAU4JognTsmqlQ_AcA_zLqW6vSw9ehk', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_49_bot"};
var room50 = {name:"Chat Room 50", token: '1159744394:AAE9D5HErrCRCaehqnyByndDTHFxlmoVKZU', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_50_bot"};
var room51 = {name:"Chat Room 51", token: '1214308411:AAGSjtg8cjNpqzYlGPO3luy03IoKHkgVNEk', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_51_bot"};
var room52 = {name:"Chat Room 52", token: '1126008847:AAE08uF6_uGvUMPqLefZjUhFFsb6syS9hEM', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_52_bot"};
var room53 = {name:"Chat Room 53", token: '1239458060:AAEQXWYefrvLeID6FpLa7xCThMfItYwSxeQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_53_bot"};
var room54 = {name:"Chat Room 54", token: '1169074663:AAEu1V_Mc5kpLzpKVvuyjeV8F5j_4j2e7aQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_54_bot"};
var room55 = {name:"Chat Room 55", token: '1154250811:AAEpeLNKSsfyumEKgh3s3Z7DAFLLb3qL4Ew', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_55_bot"};
var room56 = {name:"Chat Room 56", token: '1216067830:AAFOwAFMh4ZArWRNZ-Fzy9Dbctp16GZit-A', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_56_bot"};
var room57 = {name:"Chat Room 57", token: '1087334755:AAHQB6ZEu-6w2vA1BfZtEkQAm3CzVgVgLqQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_57_bot"};
var room58 = {name:"Chat Room 25", token: '987192235:AAF-C1eBo0ij2yqFgJ4-S-wNsqzoN2GCFs4', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_58_bot"};
// 59-79 celular victoria 3178497621  xiaomi 
var room59 = {name:"Chat Room 59", token: '1228085053:AAF6krnnrphCRrbmbkv-rOnA9lY7S4qMP9k', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_59_bot"};
var room60 = {name:"Chat Room 60", token: '1275090810:AAHROJkV9d_0eaoJMP48QIM48nz6nkqE0sk', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_60_bot"};
var room61 = {name:"Chat Room 61", token: '1249298038:AAFRGE-cQ0y3W1sUUwODB5u1q1lzeAY9fBA', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_61_bot"};
var room62 = {name:"Chat Room 62", token: '1142355044:AAFpfatzjmHqe4NXt6wckGrbLxZ-RVQEZSA', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_62_bot"};
var room63 = {name:"Chat Room 63", token: '1132684703:AAEF2gAeeISYRQDnOKU3Cmcyy7U8CMvYk0Y', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_63_bot"};
var room64 = {name:"Chat Room 64", token: '1242951354:AAGgCwvuzF8w1TmhYRtm4NiVN2VZV0tgNCw', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_64_bot"};
var room65 = {name:"Chat Room 65", token: '1210884541:AAFTbtH1QSfA7tiz_fUCGaP8zO1p2B3Rslc', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_65_bot"};
var room66 = {name:"Chat Room 66", token: '1244347328:AAEXaO5gm_pb1vuTB9Zyq8zj1FuPPSB1fr8', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_66_bot"};
var room67 = {name:"Chat Room 67", token: '1233519665:AAGWskNt8bx0Z14X7cAzj4V6Ob4lS7OpKhg', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_67_bot"};
var room68 = {name:"Chat Room 68", token: '937805612:AAE7pT5p4ryrntwsZiB_ANE6HGnh7bKH8k0', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_68_bot"};
var room69 = {name:"Chat Room 69", token: '1200374399:AAEhVh8rAys5Z0ww6o850jYtWMKjBXoXvhU', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_69_bot"};
var room70 = {name:"Chat Room 70", token: '1181418013:AAErU5tpamFG4nNPMMCgLEGizTwZ1Xu4RCE', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_70_bot"};
var room71 = {name:"Chat Room 71", token: '1040261559:AAGj4BNQIdkB0t9Oj24MsP331eoJ_47lhY4', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_71_bot"};
var room72 = {name:"Chat Room 72", token: '1230198987:AAFdN21XNKwNEMhiwiigvvIM9bPplAzpqkg', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_72_bot"};
var room73 = {name:"Chat Room 73", token: '1038518866:AAF10knH51JWwLfnmW24asP7p4VFs7WZFI8', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_73_bot"};
var room74 = {name:"Chat Room 74", token: '1091847391:AAGcFyA4bJwiCW6r9-fOVin0rOAIlz18uKw', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_74_bot"};
var room75 = {name:"Chat Room 75", token: '1262749949:AAHmF18yWOC0-1_5guDJsUt87P60vVB8IAQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_75_bot"};
var room76 = {name:"Chat Room 76", token: '929847815:AAEBD5l0ch909_yKzZZhRr7mIVoveOyM_hw', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_76_bot"};
var room77 = {name:"Chat Room 77", token: '1195893083:AAF7ydOsyu4JAC1wtrvrjbZeKGAcXy-_4kw', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_77_bot"};
var room78 = {name:"Chat Room 78", token: '1094745797:AAG4VFqkmHZfShmR1TeX6QxjRRjqtGAs7JY', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_78_bot"};


var rooms = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15, room16, room17, room18,
room19, room20, room21, room22, room23, room24, room25, room26, room27, room28, room29, room30, room31, room32, room33, room34, room35, room36,
room37, room38, room39, room40, room41, room42, room43, room44, room45, room46, room47, room48, room49, room50, room51, room52, room53,
room54, room55, room56, room57, room58, room59, room60, room61, room62, room63, room64, room65, room66, room67, room68, room69, room70,
room71, room72, room73, room74, room75, room76, room77, room78 ];

//var userBaned = [ {name: 'david', id: 1115689097} ]; // in this array push the user baned for used no accept words
var userBaned = []; // in this array push the user baned for used no accept words

var users = [
    {name: 'david', id: 851567315}, 
    {name: 'alejandro', id: 921828190}
    ]; // in this array push the each user into the principal bot chat 1115689097 vicky

var keywords = ["email", "gmail", "hotmail","yahoo", "outlook", "msn", "google", "instagram", "whatsapp","mail","snapchat","tik", "tok","tango","facebook","face","book",
"http","@","arroba",".com",".co",".net",".org","www","telegram", "numero","celular","celu","300","301","302","303","304","305","306","307","308","310","311","312","313",
"314","315","316","317","318","319","320","321","322","323","carrera","cra","calle","cll","ave","avenida","autopista","buscame","llamame","#","movistar","tres"];

//var tokenPrincipal = '1167735604:AAGc6sKPNUVQyBl3-3STWqeHvpcQcVQoDac'; //  t.me/kintti_bot  bot principal
var tokenPrincipal = kintti.token;
var tokenMonitor = chatMonitor.token;
var userMonitor =  monitor.ID;
var idBot0 = "";


var botMonitor = new TelegramBot(tokenMonitor, {polling:true}); 
var botPrincipal = new TelegramBot(tokenPrincipal, {polling:true}); 

var botRoom1 = new TelegramBot(room1.token, {polling:true}); 
var botRoom2 = new TelegramBot(room2.token, {polling:true}); 
var botRoom3 = new TelegramBot(room3.token, {polling:true}); 
var botRoom4 = new TelegramBot(room4.token, {polling:true}); 
var botRoom5 = new TelegramBot(room5.token, {polling:true}); 
var botRoom6 = new TelegramBot(room6.token, {polling:true}); 
var botRoom7 = new TelegramBot(room7.token, {polling:true}); 
var botRoom8 = new TelegramBot(room8.token, {polling:true}); 
var botRoom9 = new TelegramBot(room9.token, {polling:true}); 
var botRoom10 = new TelegramBot(room10.token, {polling:true}); 
var botRoom11 = new TelegramBot(room11.token, {polling:true}); 
var botRoom12 = new TelegramBot(room12.token, {polling:true}); 
var botRoom13 = new TelegramBot(room13.token, {polling:true}); 
var botRoom14 = new TelegramBot(room14.token, {polling:true}); 
var botRoom15 = new TelegramBot(room15.token, {polling:true}); 
var botRoom16 = new TelegramBot(room16.token, {polling:true}); 
var botRoom17 = new TelegramBot(room17.token, {polling:true}); 
var botRoom18 = new TelegramBot(room18.token, {polling:true}); 
var botRoom19 = new TelegramBot(room19.token, {polling:true}); 
var botRoom20 = new TelegramBot(room20.token, {polling:true}); 
var botRoom21 = new TelegramBot(room21.token, {polling:true}); 
var botRoom22 = new TelegramBot(room22.token, {polling:true}); 
var botRoom23 = new TelegramBot(room23.token, {polling:true}); 
var botRoom24 = new TelegramBot(room24.token, {polling:true}); 
var botRoom25 = new TelegramBot(room25.token, {polling:true}); 
var botRoom26 = new TelegramBot(room26.token, {polling:true}); 
var botRoom27 = new TelegramBot(room27.token, {polling:true}); 
var botRoom28 = new TelegramBot(room28.token, {polling:true}); 
var botRoom29 = new TelegramBot(room29.token, {polling:true}); 
var botRoom30 = new TelegramBot(room30.token, {polling:true}); 
var botRoom31 = new TelegramBot(room31.token, {polling:true}); 
var botRoom32 = new TelegramBot(room32.token, {polling:true}); 
var botRoom33 = new TelegramBot(room33.token, {polling:true}); 
var botRoom34 = new TelegramBot(room34.token, {polling:true}); 
var botRoom35 = new TelegramBot(room35.token, {polling:true}); 
var botRoom36 = new TelegramBot(room36.token, {polling:true}); 
var botRoom37 = new TelegramBot(room37.token, {polling:true}); 
var botRoom38 = new TelegramBot(room38.token, {polling:true}); 
var botRoom39 = new TelegramBot(room39.token, {polling:true}); 
var botRoom40 = new TelegramBot(room40.token, {polling:true}); 
var botRoom41 = new TelegramBot(room41.token, {polling:true}); 
var botRoom42 = new TelegramBot(room42.token, {polling:true}); 
var botRoom43 = new TelegramBot(room43.token, {polling:true}); 
var botRoom44 = new TelegramBot(room44.token, {polling:true}); 
var botRoom45 = new TelegramBot(room45.token, {polling:true}); 
var botRoom46 = new TelegramBot(room46.token, {polling:true}); 
var botRoom47 = new TelegramBot(room47.token, {polling:true}); 
var botRoom48 = new TelegramBot(room48.token, {polling:true}); 
var botRoom49 = new TelegramBot(room49.token, {polling:true}); 
var botRoom50 = new TelegramBot(room50.token, {polling:true}); 
var botRoom51 = new TelegramBot(room51.token, {polling:true}); 
var botRoom52 = new TelegramBot(room52.token, {polling:true}); 
var botRoom53 = new TelegramBot(room53.token, {polling:true}); 
var botRoom54 = new TelegramBot(room54.token, {polling:true}); 
var botRoom55 = new TelegramBot(room55.token, {polling:true}); 
var botRoom56 = new TelegramBot(room56.token, {polling:true}); 
var botRoom57 = new TelegramBot(room57.token, {polling:true}); 
var botRoom58 = new TelegramBot(room58.token, {polling:true}); 
var botRoom59 = new TelegramBot(room59.token, {polling:true}); 
var botRoom60 = new TelegramBot(room60.token, {polling:true}); 
var botRoom61 = new TelegramBot(room61.token, {polling:true}); 
var botRoom62 = new TelegramBot(room62.token, {polling:true}); 
var botRoom63 = new TelegramBot(room63.token, {polling:true}); 
var botRoom64 = new TelegramBot(room64.token, {polling:true}); 
var botRoom65 = new TelegramBot(room65.token, {polling:true}); 
var botRoom66 = new TelegramBot(room66.token, {polling:true}); 
var botRoom67 = new TelegramBot(room67.token, {polling:true}); 
var botRoom68 = new TelegramBot(room68.token, {polling:true}); 
var botRoom69 = new TelegramBot(room69.token, {polling:true}); 
var botRoom70 = new TelegramBot(room70.token, {polling:true}); 
var botRoom71 = new TelegramBot(room71.token, {polling:true}); 
var botRoom72 = new TelegramBot(room72.token, {polling:true}); 
var botRoom73 = new TelegramBot(room73.token, {polling:true}); 
var botRoom74 = new TelegramBot(room74.token, {polling:true}); 
var botRoom75 = new TelegramBot(room75.token, {polling:true}); 
var botRoom76 = new TelegramBot(room76.token, {polling:true}); 
var botRoom77 = new TelegramBot(room77.token, {polling:true}); 
var botRoom78 = new TelegramBot(room78.token, {polling:true}); 


var textNoAccept = "Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!";
var textNoAcceptToUser = " esta tratando de escribirte texto no aceptado";
var textNoAcceptToGirl = " esta tratando de escribirte texto no aceptado";
/* 
function sendMessageRoom(msgText,roomSelect,userChat,girlChat,typeAnswer,nameUser,nameGirl)
this function let send message between user and girl inside to Room selected, also send error message for No accept words
the parameters are: msgText= message to send, roomSelect= choice tehe room to send message, userChat & girlChat are the code id for each one, 
typeAnswer is the type of answer do you need who send  "textNoAcceptUser", "textNoAcceptGirl", "toUser", "toGirl"
nameUser and nameGirl are the first name get in from telegram chat register who write.
Also send all message to userMonitor indicate who write.
*/

function sendMessageRoom(msgText,roomSelect,userChat,girlChat,typeAnswer,nameUser,nameGirl) {

console.log(typeAnswer);

    switch (roomSelect) {
            case 1:

                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {    
                    botRoom1.sendChatAction(userChat, 'upload_photo');        
                    botRoom1.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom1.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 1: '+ nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom1.sendChatAction(girlChat, 'upload_photo');
                    botRoom1.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom1.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 1: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom1.sendChatAction(userChat, 'upload_photo');
                    botRoom1.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 1: '+ nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom1.sendChatAction(girlChat, 'upload_photo');
                    botRoom1.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 1: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
                
            
            
            break;
            case 2:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom2.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom2.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 2: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom2.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom2.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 2: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom2.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 2: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom2.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 2: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 3:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom3.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom3.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 3: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom3.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom3.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 3: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom3.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 3: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom3.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 3: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 4:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom4.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom4.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 4: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom4.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom4.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 4: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom4.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 4: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom4.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 4: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;

            case 5:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom5.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom5.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 5: '+ nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom5.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom5.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 5: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom5.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 5: '+ nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom5.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 5: '+ nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 6:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom6.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom6.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 6: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom6.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom6.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 6: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom6.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 6: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom6.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 6: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 7:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom7.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom7.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 7: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom7.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom7.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 7: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom7.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 7: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom7.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 7: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 8:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom8.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom8.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 8: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom8.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom8.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 8: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom8.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 8: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom8.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 8: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 9:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom9.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom9.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 9: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom9.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom9.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 9: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom9.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 9: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom9.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 9: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 10:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom10.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom10.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 10: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom10.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom10.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 10: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom10.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 10: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom10.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 10: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 11:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom11.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom11.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 11: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom11.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom11.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 11: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom11.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 11: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom11.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 11: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 12:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom12.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom12.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 12: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom12.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom12.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 12: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom12.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 12: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom12.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 12: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
        default:
            break;
    }
    
}

function sendMessageUserGirl(msgText,whoWriteId,userChat,girlChat,nameUser,nameGirl,roomSel) {
    
    var wordUser = -1;
    var wordGirl = -1;
    var Upos=-1;
    var Gpos=-1;
    
    if (whoWriteId==userChat)
    {
        
            echoRev = msgText.toLowerCase();
            echoRev = echoRev.replace(/ /g, "");
            //uso foreach para recorrer cada elemento del array
            keywords.forEach(function(element) 
            {
                //En caso de existir se asigna la posición en pos
                wordUser = echoRev.indexOf(element.toString());
       
                if (wordUser!=-1)
                {
                    Upos=1;
    
                }

            });
                    
            if (Upos==1)
            {
                sendMessageRoom(msgText,roomSel,userChat,girlChat,"textNoAcceptUser",nameUser,nameGirl);
                //botRoom5.sendMessage(userChat,"Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!");
                //botRoom5.sendMessage(girlChat,"El usuario esta tratando de escribirte texto no aceptado");
                //botMonitor.sendMessage(monitor.ID, nameUser+' intenta enviar texto no aceptado '+msgText);
                
                Upos=-1;
                
            } else {
                //console.log(msgText);console.log(whoWriteId);console.log(userChat);console.log(girlChat);
                sendMessageRoom(msgText,roomSel,userChat,girlChat,"toGirl",nameUser,nameGirl);
                        //botRoom5.sendMessage(girlChat,"usuario#1 dice: "+msgText); //933443152 es el numero identificador de la chica   
                        //botMonitor.sendMessage(monitor.ID, "usuario#1 dice: "+msgText);
                        
                        
                       // console.log(msgText);
                        
                    }
      } else if (whoWriteId==girlChat)
                {

                echoRev = msgText.toLowerCase();
                echoRev = echoRev.replace(/ /g, "");
                //uso foreach para recorrer cada elemento del array
                keywords.forEach(function(element) {
                //En caso de existir se asigna la posición en pos
                wordGirl = echoRev.indexOf(element.toString());
            
                    if (wordGirl!=-1){
                        Gpos=1;
            
                    }

        });
       
            if (Gpos==1){

                sendMessageRoom(msgText,roomSel,userChat,girlChat,'textNoAcceptGirl',nameUser,nameGirl);

                // botRoom5.sendMessage(girlChat,"Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!");
                // botRoom5.sendMessage(userChat,"La chica esta tratando de escribirte texto no aceptado");
                // botMonitor.sendMessage(monitor.ID, 'La chica intenta enviar texto no aceptado '+msgText);
        
                Gpos=-1;
            }else{
                sendMessageRoom(msgText,roomSel,userChat,girlChat,"toUser",nameUser,nameGirl);
            // botRoom5.sendMessage(userChat,"chica#1 dice: "+msgText);
            // botMonitor.sendMessage(monitor.ID, "chica#1 dice: "+msgText);
            // console.log(msgText);
            }
       
    }

}

function roomSelect(){

    var encontrado=false;
    var cont = 0;
    var sizeRooms = rooms.length;

    while (encontrado==false) {
    
        if (cont<sizeRooms){

            if(rooms[cont].used==false){
                encontrado=true
                console.log('final de la funcion var cont: '+cont);
                console.log('estatus de la variable encontrado '+encontrado);
                return cont;
            }else {
               cont ++
            }

        }

        if (cont==sizeRooms){
            encontrado=true;
            return -1;
            
        }
        
        

    }

   
}

botPrincipal.onText(/^\/start/, function(msg){
  console.log(msg.text);
  let chatId = msg.chat.id;
  console.log(msg.chat.id);
  idBot0 = msg.chat.id;
  let username = msg.from.username;
  botPrincipal.sendMessage(chatId, "Bienvenido al Bot de kintti.com, " + username + " al chat de citas, escribe el codigo de la chica:");

});

botPrincipal.on('message', function(msg){
    
    let chatId = msg.chat.id;
    let mensaje_principal = msg.text;
    let username = msg.from.first_name;
    console.log(msg);

    userPos=users.findIndex(usuarioE =>{
        return usuarioE.id==chatId;
    });

    banedPos=userBaned.findIndex(usuario =>{
        return usuario.id==chatId;
    });
    
if (banedPos != -1) {
    console.log('usuario baneado')
    botPrincipal.sendMessage(chatId, "Hola, " + userBaned[banedPos].name + " estas en la lista de Baneados, debes esperar 8 dias para poder ingresar de nuevo");
    botMonitor.sendMessage(monitor.ID, 'el usuario '+ userBaned[banedPos].name +' con codigo: '+userBaned[banedPos].id+' esta baneado y esta tratando de escribir');
}   else{

   
    switch(mensaje_principal){
        case '11':
            g=0;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica11a.jpg?v=1588561384170';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });

                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;
        
        case '12':
            g=1;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica12a.jpg?v=1588561402612';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;
        case '13':
            g=2;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
               
               var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica13a.jpg?v=1588561409545';
               // var photo = 'chica13a.jpg';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                    
                    botPrincipal.sendChatAction(chatId, 'upload_photo');
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
              
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;
        case '14':
            g=3;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica14a.jpg?v=1588561414582';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;     
        case '15':
                g=4;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica11a.jpg?v=1588561384170';
                
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                botPrincipal.sendChatAction(chatId, 'load_photo');
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;   

        case '16':
                    g=5;
                    roomSelected=roomSelect();
                    if (roomSelected==-1){
                        console.log('todas las salas ocupadas');
                        botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                        botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                    }else {
                        var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica14a.jpg?v=1588561414582';
                        rooms[roomSelected].used=true; 
                        rooms[roomSelected].user=chatId;  
                        rooms[roomSelected].girl=girls[g].ID; 
                        rooms[roomSelected].girlName=girls[g].name; 
                        rooms[roomSelected].userName=username;
                        console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                        // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                        botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                            reply_markup: {
                              inline_keyboard: [[
                                {
                                  text: 'Ingresa al '+rooms[roomSelected].name,
                                  url: rooms[roomSelected].link
                                }
                              ]]
                            }
                            });
                        botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                        botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                            reply_markup: {
                              inline_keyboard: [[
                                {
                                  text: 'Ingresa al '+rooms[roomSelected].name,
                                  url: rooms[roomSelected].link
                                }
                              ]]
                            }
                          });
                          botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
          
        
                    }
                    break;

        case '17':
                        g=6;
                            roomSelected=roomSelect();
                            if (roomSelected==-1){
                                console.log('todas las salas ocupadas');
                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                            }else {
                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica14a.jpg?v=1588561414582';
                                rooms[roomSelected].used=true; 
                                rooms[roomSelected].user=chatId;  
                                rooms[roomSelected].girl=girls[g].ID; 
                                rooms[roomSelected].girlName=girls[g].name; 
                                rooms[roomSelected].userName=username;
                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                    reply_markup: {
                                      inline_keyboard: [[
                                        {
                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                          url: rooms[roomSelected].link
                                        }
                                      ]]
                                    }
                                    });
                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                    reply_markup: {
                                      inline_keyboard: [[
                                        {
                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                          url: rooms[roomSelected].link
                                        }
                                      ]]
                                    }
                                  });
                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                  
                
                            }
                            break;
        case '18':
                g=7;
                                        roomSelected=roomSelect();
                                        if (roomSelected==-1){
                                            console.log('todas las salas ocupadas');
                                            botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                            botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                        }else {
                                            var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica14a.jpg?v=1588561414582';
                                            rooms[roomSelected].used=true; 
                                            rooms[roomSelected].user=chatId;  
                                            rooms[roomSelected].girl=girls[g].ID; 
                                            rooms[roomSelected].girlName=girls[g].name; 
                                            rooms[roomSelected].userName=username;
                                            console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                            // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                            botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                reply_markup: {
                                                inline_keyboard: [[
                                                    {
                                                    text: 'Ingresa al '+rooms[roomSelected].name,
                                                    url: rooms[roomSelected].link
                                                    }
                                                ]]
                                                }
                                                });
                                            botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                            botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                reply_markup: {
                                                inline_keyboard: [[
                                                    {
                                                    text: 'Ingresa al '+rooms[roomSelected].name,
                                                    url: rooms[roomSelected].link
                                                    }
                                                ]]
                                                }
                                            });
                                            botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                            
                            
                                        }
                                    break;

 case '19':
                                        g=8;
                                        roomSelected=roomSelect();
                                        if (roomSelected==-1){
                                            console.log('todas las salas ocupadas');
                                            botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                            botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                        }else {
                                            var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2Fchica11a.jpg?v=1588561384170';
                                            rooms[roomSelected].used=true; 
                                            rooms[roomSelected].user=chatId;  
                                            rooms[roomSelected].girl=girls[g].ID; 
                                            rooms[roomSelected].girlName=girls[g].name; 
                                            rooms[roomSelected].userName=username;
                                            console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                            // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                            botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                reply_markup: {
                                                  inline_keyboard: [[
                                                    {
                                                      text: 'Ingresa al '+rooms[roomSelected].name,
                                                      url: rooms[roomSelected].link
                                                    }
                                                  ]]
                                                }
                                                });
                            
                                            botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                            botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                reply_markup: {
                                                  inline_keyboard: [[
                                                    {
                                                      text: 'Ingresa al '+rooms[roomSelected].name,
                                                      url: rooms[roomSelected].link
                                                    }
                                                  ]]
                                                }
                                              });
                                              
                                              botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                              
                            
                                        }
                                        break;
case '20':
                                            g=9;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0020-0.jpg?v=1593369745236';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;

case '21':
                                            g=10;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0021-0.jpg?v=1593369852343';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '22':
                                            g=11;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0022-0.jpg?v=1593369857883';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '23':
                                            g=12;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0023-0.jpg?v=1593370024405';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '24':
                                            g=13;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0024-0.jpg?v=1593370076387';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '25':
                                            g=14;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0025-0.jpg?v=1593369937710';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '26':
                                            g=15;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0026-0.jpeg?v=1593369986770';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '27':
                                            g=16;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0027-0.jpg?v=1593369933895';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '28':
                                            g=17;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0028-0.jpeg?v=1593369955752';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '29':
                                            g=18;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0029-0.jpeg?v=1593369963509';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '30':
                                            g=19;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0030-0.jpeg?v=1593369979866';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
case '31':
                                            g=20;
                                            roomSelected=roomSelect();
                                            if (roomSelected==-1){
                                                console.log('todas las salas ocupadas');
                                                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                                                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
                                            }else {
                                                var photo = 'https://cdn.glitch.com/506175b6-94d1-4447-a1c5-991d571a4476%2F0031-0.jpeg?v=1593369986327';
                                                rooms[roomSelected].used=true; 
                                                rooms[roomSelected].user=chatId;  
                                                rooms[roomSelected].girl=girls[g].ID; 
                                                rooms[roomSelected].girlName=girls[g].name; 
                                                rooms[roomSelected].userName=username;
                                                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                                                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                                                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                    });
                                
                                                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name+", Edad: "+girls[g].age+", Ciudad: "+girls[g].city+", Busca: "+girls[g].category});
                                                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                                                    reply_markup: {
                                                      inline_keyboard: [[
                                                        {
                                                          text: 'Ingresa al '+rooms[roomSelected].name,
                                                          url: rooms[roomSelected].link
                                                        }
                                                      ]]
                                                    }
                                                  });
                                        
                                                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
                                  
                                
                                            }
break;
        default:
            if (userPos == -1) {  //eres usuario nuevo
                console.log("eres nuevo "+username)
                    botPrincipal.sendMessage(chatId, "Bienvenido, " + username + " al chat de citas de kintti.com, escribe el codigo SKU de la chica:");
                    users.push({name: username, id: chatId});
                    botMonitor.sendMessage(monitor.ID, 'NUEVO usuario '+msg.from.first_name+' con codigo id: '+chatId);
            } else {
               console.log("ya eres usuario "+username)
                    botPrincipal.sendMessage(chatId, 'Has ingresado un codigo errado, vuelve a escribir el codigo de la chica:  ');
            }
            
       
    }
    console.log(users);
}


});

// Room 1  ==>>
botRoom1.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=1;
    let userRoom=rooms[numRoom-1].user;

    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    
    //botRoom1.setChatTitle(chatId, 'titulo del chat');
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 2  ==>>
botRoom2.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=2;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 3  ==>>
botRoom3.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=3;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 4  ==>>
botRoom4.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=4;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 5  ==>>
botRoom5.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=5;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 6  ==>>
botRoom6.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=6;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 7  ==>>
botRoom7.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=7;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 8  ==>>
botRoom8.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=8;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 9  ==>>
botRoom9.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=9;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 10  ==>>
botRoom10.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=10;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 11  ==>>
botRoom11.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=11;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 12  ==>>
botRoom12.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=12;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 13  ==>>
botRoom13.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=13;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 14  ==>>
botRoom14.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=14;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 15  ==>>
botRoom15.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=15;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 16  ==>>
botRoom16.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=16;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 17  ==>>
botRoom17.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=17;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 18  ==>>
botRoom18.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=18;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 19  ==>>
botRoom19.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=19;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 20  ==>>
botRoom20.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=20;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 21  ==>>
botRoom21.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=21;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 22  ==>>
botRoom22.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=22;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 23  ==>>
botRoom23.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=23;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 24  ==>>
botRoom24.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=24;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 25  ==>>
botRoom25.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=25;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 26  ==>>
botRoom26.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=26;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 27  ==>>
botRoom27.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=27;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 28  ==>>
botRoom28.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=28;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 29  ==>>
botRoom29.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=29;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 30  ==>>
botRoom30.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=30;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 31  ==>>
botRoom31.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=31;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 32  ==>>
botRoom32.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=32;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 33  ==>>
botRoom33.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=33;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 34  ==>>
botRoom34.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=34;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 35  ==>>
botRoom35.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=35;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 36  ==>>
botRoom36.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=36;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 37  ==>>
botRoom37.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=37;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 38  ==>>
botRoom38.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=38;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 39  ==>>
botRoom39.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=39;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 40  ==>>

botRoom40.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=40;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});

// Room 41  ==>>
botRoom41.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=41;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 42  ==>>
botRoom42.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=42;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 43  ==>>
botRoom43.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=43;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 44  ==>>
botRoom44.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=44;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 45  ==>>
botRoom45.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=45;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 46  ==>>
botRoom46.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=46;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 47  ==>>
botRoom47.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=47;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 48  ==>>
botRoom48.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=48;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 49  ==>>
botRoom49.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=49;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 50  ==>>
botRoom50.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=50;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 51  ==>>
botRoom51.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=51;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 52  ==>>
botRoom52.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=52;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 53  ==>>
botRoom53.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=53;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 54  ==>>
botRoom54.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=54;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 55  ==>>
botRoom55.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=55;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 56  ==>>
botRoom56.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=56;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 57  ==>>
botRoom57.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=57;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 58  ==>>
botRoom58.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=58;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 59  ==>>
botRoom59.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=59;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 60  ==>>

botRoom60.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=60;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});

// Room 61  ==>>
botRoom61.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=61;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 62 ==>>
botRoom62.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=62;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 63  ==>>
botRoom63.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=63;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 64  ==>>
botRoom64.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=64;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 65  ==>>
botRoom65.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=65;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 66  ==>>
botRoom66.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=66;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 67  ==>>
botRoom67.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=67;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 68  ==>>
botRoom68.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=68;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 69  ==>>
botRoom69.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=69;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 70  ==>>
botRoom70.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=70;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 71  ==>>
botRoom71.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=71;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 72  ==>>
botRoom72.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=72;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 73  ==>>
botRoom73.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=73;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 74  ==>>
botRoom74.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=74;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 75  ==>>
botRoom75.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=75;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 76  ==>>
botRoom76.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=76;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 77  ==>>
botRoom77.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=77;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 78  ==>>
botRoom78.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=78;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});




// Room 5 ==>>
// botRoom5.on('message', function(msg){   //la funcion onText permite recibir los textos e ID de quien ingresa al Bot
    
//     let chatId = msg.chat.id; // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
//     //let username1 = msg.from.first_name;
//     let echo = msg.text;
//     console.log("texto: "+echo);
//     let userRoom=rooms[4].user;
//     let girlRoom=rooms[4].girl;
//     let girlName=rooms[4].girlName;
//     let userName=rooms[4].userName;

//     // if (username1==girlName15){
//     //     username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
//     // }else{
//     //     username="sin nombre";
//     // }

//     // if (username1==girlRoom){
//     //     username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
//     // }else{
//     //     username="sin nombre";
//     // }
//     sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,5);
//     //sendMessageUserGirl(msgText,whoWriteId,userChat,girlChat,nameUser,nameGirl) 
// });



  
    botMonitor.on('message', function(msg){console.log("estamos dentro del bot monitor") });


  


    
  


    