<?php
/**
 * Created by PhpStorm.
 * User: halu
 * Date: 西元2018/3/1
 * Time: 下午12:06
 */


require_once('phpinit.php');
error_reporting(E_ERROR | E_PARSE);

require('psw.php');
$MARKNO = "IPSA";
$data = json_decode(file_get_contents('php://input'), true);
//echo file_get_contents('php://input');
//echo $_POST['data'];
//var_dump($data);
//echo gettype(file_get_contents('php://input'));
//$MAKEUP_URL = $data["MAKEUP_URL"];
//$SKIN_WATER_URL = $data["SKIN_WATER_URL"];
//echo $MAKEUP_URL ;

function getName($data){

    try{


        $dsn = "mysql:host=203.69.42.12;dbname=DBL03612;port=3306;charset=utf8";
        $user = "L89809816";
        $password = "27733766";
        $options = array( PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
        // 使用PDO物件的方法,PDO::ATTR_ERRMODE(鍵值)要傳回錯誤訊息,並用ERRMODE_EXCEPTION(資料)記錄下來

        $pdo = new PDO($dsn, $user, $password, $options);
        $pdo->beginTransaction();
        $sql = "INSERT INTO ImgMackup (i_name , i_ext , i_c_a_no) VALUE(:name,:png,:admin)";
        $imgRow = $pdo->prepare( $sql );
        $imgRow->bindValue(":name", $data["VIPIDS"]);
        $imgRow->bindValue(":png", "png");
        $imgRow->bindValue(":admin", "1");
        if ($imgRow->execute() === TRUE) {
            $last_table_id = $pdo->lastInsertId();
            $pdo->commit();
//            echo "New record created successfully. Last inserted ID is:";
//            echo $last_id,"\n";

        } else {
            echo "Error: " . $sql . "<br>" . $pdo->error;
        }


    } catch (PDOException $e) {
        $pdo->rollBack();
        echo "錯誤原因 : " , $e->getMessage(),"<br>";
        echo "行號 : " , $e->getLine(),"<br>";
        //發生錯誤時顯示出錯誤訊息
    }

    return $last_table_id ;
}

$last_id=getName($data);




function getmackupImg($data,$last_id){


    $img_data = $data["MAKEUP_URL"];
    list($type, $img_data) = explode(';', $img_data);

    list(, $img_data) = explode(',', $img_data);
    $img_data = base64_decode($img_data); //將圖片的base64做decode的動作
    $ymd =  explode('-', date("Y-m-d"));
    $filedata = $ymd[0].$ymd[1] . $ymd[2];
    $year=$ymd[0];
    $parh='image/mackup/';//圖片儲存路徑
    $dir='image/mackup/'.$year; //圖片儲存路徑
    $fileName=$filedata.$last_id."a";     //圖片檔名


    /**********產生目錄*********/
    if(!is_dir($dir)){
//chmod($dir, 0777);
        $yearInt = (int)$year;
        $nextYear = $yearInt+1;
        $dirNext = $parh.'/'.$nextYear;
        mkdir($dirNext, 0777, TRUE);
        $dirNext= $dirNext.'/'.$fileName;
        file_put_contents("$dirNext.png", $img_data);

    }else{
        /**********產生目錄*********/
        $thisyear=$dir.'/'.$fileName;

        file_put_contents("$thisyear.png", $img_data);
    }


    return $fileName;

}

function skinImg($data,$last_id){


    $img_data = $data["SKIN_URL"];
    list($type, $img_data) = explode(';', $img_data);

    list(, $img_data) = explode(',', $img_data);
    $img_data = base64_decode($img_data); //將圖片的base64做decode的動作
    $ymd =  explode('-', date("Y-m-d"));
    $filedata = $ymd[0].$ymd[1] . $ymd[2];
    $year=$ymd[0];
    $parh='image/mackup/';//圖片儲存路徑
    $dir='image/mackup/'.$year; //圖片儲存路徑
    $fileName=$filedata.$last_id."b";     //圖片檔名


    /**********產生目錄*********/
    if(!is_dir($dir)){
//chmod($dir, 0777);
        $yearInt = (int)$year;
        $nextYear = $yearInt+1;
        $dirNext = $parh.'/'.$nextYear;
        mkdir($dirNext, 0777, TRUE);
        $dirNext= $dirNext.'/'.$fileName;
        file_put_contents("$dirNext.png", $img_data);

    }else{
        /**********產生目錄*********/
        $thisyear=$dir.'/'.$fileName;

        file_put_contents("$thisyear.png", $img_data);

    }

    return $fileName;

}

function skinWaterImg($data,$last_id){



    $img_data = $data["SKIN_WATER_URL"];
    list($type, $img_data) = explode(';', $img_data);

    list(, $img_data) = explode(',', $img_data);
    $img_data = base64_decode($img_data); //將圖片的base64做decode的動作
    $ymd =  explode('-', date("Y-m-d"));
    $filedata = $ymd[0].$ymd[1] . $ymd[2];
    $year=$ymd[0];
    $parh='image/mackup/';//圖片儲存路徑
    $dir='image/mackup/'.$year; //圖片儲存路徑
    $fileName=$filedata.$last_id."c";     //圖片檔名


    /**********產生目錄*********/
    if(!is_dir($dir)){
//chmod($dir, 0777);
        $yearInt = (int)$year;
        $nextYear = $yearInt+1;
        $dirNext = $parh.'/'.$nextYear;
        mkdir($dirNext, 0777, TRUE);
        $dirNext= $dirNext.'/'.$fileName;
        file_put_contents("$dirNext.png", $img_data);

    }else{
        /**********產生目錄*********/
        $thisyear=$dir.'/'.$fileName;

        file_put_contents("$thisyear.png", $img_data);

    }

    return $fileName;

}


$makeupName = getmackupImg($data,$last_id);
$skinName = skinImg($data,$last_id);
$skinWaterName = skinWaterImg($data,$last_id);



function array2xml($data, $tag = ''){
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


if(isset($data)) {

    $XmlData = array(


        "COLLECTION" => array(
            "LOGIN" => array(
                "ROW" => array(
                    "VENIDS" => $UserID,
                    "VENPWD" => $Pwd)),
            "REQUEST" => array(
                "ROW" => array(
                    "MARKNO" => $MARKNO,
                    "VIPIDS" => $data["VIPIDS"],
                    "DATE" => "",//系統自動帶入
                    "BCID" => $data["BCID"],
                    "CUSTNO" => $data["CUSTNO"],
                    "DRY" => $data["DRY"],
                    "OIL" => $data["OIL"],
                    "PORES" => $data["PORES"],
                    "ACEN" => $data["ACEN"],
                    "DULL" => $data["DULL"],
                    "CB" => $data["CB"],
                    "SPOTS" => $data["SPOTS"],
                    "DARK_CIRCLES" => $data["DARK_CIRCLES"],
                    "TE" => $data["TE"],
                    "WRINKLE" => $data["WRINKLE"],
                    "SENSITIVE" => $data["SENSITIVE"],
                    "EYE_EDEMA" => $data["EYE_EDEMA"],
                    "EYE_DULL" => $data["EYE_DULL"],
                    "LIP_DULL" => $data["LIP_DULL"],
                    "MELLOW" => $data["MELLOW"],
                    "DIMENSION" => $data["DIMENSION"],
                    "REFLECTION_N" => $data["REFLECTION_N"],
                    "REFLECTION_B" => $data["REFLECTION_B"],
                    "REFLECTION_O" => $data["REFLECTION_O"],
                    "CREAM_F" => $data["CREAM_F"],
                    "COSMETICS_F" => $data["COSMETICS_F"],
                    "WATER_F" => $data["WATER_F"],
                    "POWDER_F" => $data["POWDER_F"],
                    "FOUNDATION_F" => $data["FOUNDATION_F"],
                    "PRESSED_F" => $data["PRESSED_F"],
                    "SUBJECT" => $data["SUBJECT"],
                    "SKIN_COLOR_C" => $data["SKIN_COLOR_C"],
                    "SKIN_LIGHT_C" => $data["SKIN_LIGHT_C"],
                    "SKIN_LIGHT_O" => $data["SKIN_LIGHT_O"],
                    "CHEEK_COLOR" => $data["CHEEK_COLOR"],
                    "NATURAL_C" => $data["NATURAL_C"],
                    "ACQUIRED_C" => $data["ACQUIRED_C"],
                    "MOISTURE" => $data["MOISTURE"],
                    "SEBUM" => $data["SEBUM"],
                    "TENSION" => $data["TENSION"],
                    "ELASTICITY" => $data["ELASTICITY"],
                    "SG" => $data["SG"],
                    "TRANSPARENCY" => $data["TRANSPARENCY"],
                    "TRANSPARENCY_C" => $data["TRANSPARENCY_C"],
                    "HORNY" => $data["HORNY"],
                    "SKIN_LEVEL" => $data["SKIN_LEVEL"],
                    "EYEBROW_TC" => $data["EYEBROW_TC"],
                    "SHADOW" => $data["SHADOW"],
                    "SHADOW_S" => $data["SHADOW_S"],
                    "SHADOW_COLOR_C" => $data["SHADOW_COLOR_C"],
                    "LIP_O" => $data["LIP_O"],
                    "LIP_SC" => $data["LIP_SC"],
                    "LIP_COLOR" => $data["LIP_COLOR"],
                    "MAKUP_TXT_1" => $data["MAKUP_TXT_1"],
                    "MAKUP_TXT_2" => $data["MAKUP_TXT_2"],
                    "MAKUP_TXT_3" => $data["MAKUP_TXT_3"],
                    "MAKUP_TXT_4" => $data["MAKUP_TXT_4"],
                    "MAKUP_TXT_5" => $data["MAKUP_TXT_5"],
                    "MAKUP_TXT_6" => $data["MAKUP_TXT_6"],
                    "MAKUP_TXT_7" => $data["MAKUP_TXT_7"],
                    "MAKUP_TXT_8" => $data["MAKUP_TXT_8"],
                    "MAKUP_TXT_9" => $data["MAKUP_TXT_9"],
                    "MAKUP_TXT_10" => $data["MAKUP_TXT_10"],
                    "MAKUP_TXT_C" => $data["MAKUP_TXT_C"],
                    "MAKEUP_URL" => $makeupName,
                    "SKIN_URL" => $skinName,
                    "SKIN_WATER_URL" => $skinWaterName
                ))
        )
    );

}

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

    $result = $client->__soapCall("WS_CREIPSAMACKUP",

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



//    printf('Result = %s' , $result->WS_CREIPSAMACKUPResult);

    $bcXml = simplexml_load_string($result->WS_CREIPSAMACKUPResult);

    $RTNCODE = (int)$bcXml->WSTATUS->ROW->RTNCODE;

    $ROWLEN = count($bcXml->RTNDATA->ROW);

//        echo $ROWLEN;

    if($RTNCODE === 0){

        if(savePDFImg($data) === true){

            if(sendMail($data) === true){

                delFile($data);
                header("content-type:text/xml");
                echo "<MSG>新增成功，信件已送出</MSG>";

            }else{
                header("content-type:text/xml");
                echo "<MSG>MAIL無法發送</MSG>";
            }

        }else{
            header("content-type:text/xml");
            echo "<MSG>PDF檔案無法存取</MSG>>";

        }

    }else{

            header("content-type:text/xml");

            $xml = $bcXml->WSTATUS->ROW->RTNCODE;
            $msg = $bcXml->WSTATUS->ROW->RTNMSG;

            echo "錯誤代碼".$xml;
            echo "錯誤訊息".$msg;

        }


    }catch(Exception $e){

        printf("Message = %s",$e->__toString());

        }







function savePDFImg($data){

    require('fpdf/fpdf.php');
    $img_data = $data["PDFImage"];
    $pdfimg = explode(',', $img_data);
    $encodedImg = $pdfimg[1];
    $decodedImg = base64_decode($encodedImg);

    $parh='image/mackup/pdf/';//pdf儲存路徑
    $vipids =$data["VIPIDS"];
    $fileName=$parh. $vipids;     //pdf檔名
    file_put_contents("$fileName.png",$decodedImg);
    //  Save image to a temporary location

    //  Open new PDF document and print image
    $pdf = new FPDF('L','pt',array(574.56,481.32));
    $pdf->AddPage();
    $pdf->Image("$fileName.png",0,0,574.56,481.32,'png');
    $pdf->Output($fileName.".pdf",'F');

    return true;
}




function sendMail($data){

    require_once 'lib/swiftmailer/swift_required.php';
    $pdf = "image/mackup/pdf/".$data["VIPIDS"].".pdf";
    $vipMail = $data["MAIL"];
    $vipName = $data["VIPNM"];


// 採用預設的mail()數函發email
// $transport = Swift_MailTransport::newInstance();

// 使用SMTP的方式來發送gmail
    $transport = Swift_SmtpTransport::newInstance('smtp.hibox.biz', 25)
        ->setUsername('admin@ipsa.com.tw')
        ->setPassword('27733766')
    ;

// 填寫email的主旨、內容、寄件者、收件者
    $message = Swift_Message::newInstance();

    $message->setTo(array(
        $vipMail => $vipName
        //,"abc@yahoo.com" => "Mike.Porter"
//        "forchang0120@gmail.com" => "Halu"
    ));
    $message->setSubject("專屬您的IPSA 電子處方箋");
    $message->setBody("親愛的貴賓您好：感謝您蒞臨IPSA專櫃進行肌膚檢測，隨信附上您本次電子處方箋。");
    $message->setFrom("admin@ipsa.com.tw", "IPSA");

//attachment(附件)
    $attachment = Swift_Attachment::fromPath($pdf);
    $message->attach($attachment);

// Send the email
    $mailer = Swift_Mailer::newInstance($transport);
    $mailer->send($message);

    return true;

}


function delFile($data){

    $pdf = "image/mackup/pdf/".$data["VIPIDS"].".pdf";
    $png = "image/mackup/pdf/".$data["VIPIDS"].".png";
    unlink($pdf);
    unlink($png);

}

//savePDFImg($data);
//sendMail($data);
//delFile($data);




?>