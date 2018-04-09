<?php
/**
 * Created by PhpStorm.
 * User: halu
 * Date: 西元2018/3/30
 * Time: 下午6:37
 */

require_once('phpinit.php');
require('psw.php');
$UserID="innity54395064";
$_REQUEST["TIMES"] = "1";
$_REQUEST["MARKNO"] = "IPSA";


//陣列轉XML function
function array2xml($data, $tag = '')
{
    $xml = '';

    foreach ($data as $key => $value) {
        if (is_numeric($key)) {
            if (is_array($value)) {
                $xml .= "<$tag>";
                $xml .= array2xml($value);
                $xml .= "</$tag>";
            } else {
                $xml .= "<$tag>$value</$tag>";
            }
        } else {
            if (is_array($value)) {
                $keys = array_keys($value);
                if (is_numeric($keys[0])) {
                    $xml .= array2xml($value, $key);
                } else {
                    $xml .= "<$key>";
                    $xml .= array2xml($value);
                    $xml .= "</$key>";
                }

            } else {
                $xml .= "<$key>$value</$key>";
            }
        }
    }
    return $xml;
}

if(isset($_REQUEST["VIPIDS"])){

    $XmlData = array(

        "COLLECTION" => array(
            "LOGIN" => array(
                "ROW" => array(
                    "VENIDS" => $UserID,
                    "VENPWD" => $Pwd)),
            "REQUEST" => array(
                "ROW" => array(
                    "MARKNO" => $_REQUEST["MARKNO"],
                    "VIPIDS" => $_REQUEST["VIPIDS"],
                    "TIMES" =>$_REQUEST["TIMES"]))
        )
    );



    $xml = array2xml($XmlData);

    $requestString = strval($xml);

//echo $requestString ,"\n";

    try{

        $options = [
            "soapaction" => "http://tempuri.org/",
            "soap_version" => SOAP_1_2,
            "trace" => 1,  //配合下面報錯，追蹤

//        配合抓包工具用，測完後可關閉
//        "proxy_host" => "localhost",
//        "proxy_port" => 8899,
//        "stream_context" => stream_context_create([
//            'ssl' => [
//                'cafile' => '/usr/local/etc/charles-ssl-proxying-certificate.cer',
//                'verify_peer' => false,
//                'verify_peer_name' => false,
//                'allow_self_signed' => true
//            ]
//        ])
        ];

        $url = $ip . '/WebService/wsSHISEIDO.asmx?wsdl';

        $client = new SoapClient($url,$options);

        $skinResult = $client->__soapCall("WS_GETIPSASKINCARE",

            [array("XmlData"=>$requestString)]

        );

        $makeupResult = $client->__soapCall("WS_GETIPSAMACKUP",

            [array("XmlData"=>$requestString)]

        );

//    var_dump($client->__getFunctions());//打印暴露的方法
//    print("<br/>");
//    var_dump($client->__getTypes());//打印對應方法的參數和參數類型
//    print("<br/>");
//    echo("\nDumping request headers:\n");
//    var_dump($client->__getLastRequestHeaders());
//    echo "<br>";
//    echo("\nDumping request:\n");
//    var_dump(html_entity_decode($client->__getLastRequest(),ENT_QUOTES | ENT_XML1, 'UTF-8'));
//    echo "<br>";
//    echo("\nDumping response headers:\n");
//    var_dump($client->__getLastResponseHeaders());
//    echo "<br>";
//    echo("\nDumping response:\n");
//    var_dump($client->__getLastResponse());



//    printf('Result = %s' , $result->WS_UPDVIPBASEResult);

        $sResult = $skinResult->WS_GETIPSASKINCAREResult;

        $mResult = $makeupResult->WS_GETIPSAMACKUPResult;


        $skinXml = simplexml_load_string($sResult);

        $makeupXml = simplexml_load_string($mResult);

//        print_r($skinXml); //check date

        if(isset($skinXml->RTNDATA->ROW->DATE) && !isset($makeupXml->RTNDATA->ROW->DATE)){

            $RTNCODE = (int)$skinXml->WSTATUS->ROW->RTNCODE;

            $ROWLEN = count($skinXml->RTNDATA->ROW);

            if($RTNCODE === 0){


                    header("content-type:text/xml");

                    echo '<?xml version="1.0" encoding="utf-8"?>';

                    echo $sResult;


            }else{

                header("content-type:text/xml");

                $xml =  $skinXml->WSTATUS->ROW->RTNCODE;

                echo $xml;

            }

        }

        if(isset($makeupXml->RTNDATA->ROW->DATE) && !isset($skinXml->RTNDATA->ROW->DATE)){

            $mDate = (string)$makeupXml->RTNDATA->ROW->DATE;

            $RTNCODE = (int)$makeupXml->WSTATUS->ROW->RTNCODE;

            $ROWLEN = count($bcXml->RTNDATA->ROW);


            if($RTNCODE === 0){


                    header("content-type:text/xml");

                    echo '<?xml version="1.0" encoding="utf-8"?>';

                    echo $mResult;


            }else{

                header("content-type:text/xml");

                $xml = $makeupXml->WSTATUS->ROW->RTNCODE;

                echo $xml;

            }


        }


        if(isset($skinXml->RTNDATA->ROW->DATE) && isset($makeupXml->RTNDATA->ROW->DATE)){

            $sDate = (string)$skinXml->RTNDATA->ROW->DATE;
            $mDate = (string)$makeupXml->RTNDATA->ROW->DATE;

            if(strtotime($sDate) > strtotime($mDate))  {

                $testData = $sResult;

                $testXml = $skinXml;

            }else{

                $testData = $mResult;

                $testXml = $makeupXml;

            }

            $RTNCODE = (int)$testXml->WSTATUS->ROW->RTNCODE;

            $ROWLEN = count($testXml->RTNDATA->ROW);

            if($RTNCODE === 0){


                    header("content-type:text/xml");

                    echo '<?xml version="1.0" encoding="utf-8"?>';

                    echo $testData;


            }else{

                header("content-type:text/xml");

                $xml = $testXml->WSTATUS->ROW->RTNCODE;

                echo $xml;

            }

        }

        if(!isset($skinXml->RTNDATA->ROW->DATE) && !isset($makeupXml->RTNDATA->ROW->DATE)){

            header("content-type:text/xml");

            echo '<?xml version="1.0" encoding="utf-8"?>';

            echo"<RTNMSG>查無檢驗資料</RTNMSG>";

        }


    }catch(Exception $e){

        printf("Message = %s",$e->__toString());

    }

}else{

    echo "VIPID錯誤";

}

?>



