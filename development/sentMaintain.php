<?php
/**
 * Created by PhpStorm.
 * User: halu
 * Date: 西元2018/2/28
 * Time: 下午3:38
 */

require_once('phpinit.php');
error_reporting(E_ERROR | E_PARSE);
require('psw.php');
$MARKNO = "IPSA";
$time = date("Y/m/d H:i:s");
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


        $dsn = "mysql:host=203.69.42.177;dbname=DBL03612;port=3306;charset=utf8";
        $user = "L89809816";
        $password = "27733766";
        $options = array( PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
        // 使用PDO物件的方法,PDO::ATTR_ERRMODE(鍵值)要傳回錯誤訊息,並用ERRMODE_EXCEPTION(資料)記錄下來

        $pdo = new PDO($dsn, $user, $password, $options);
        $pdo->beginTransaction();
        $sql = "INSERT INTO ImgMaintainTest (i_name , i_ext , i_c_a_no) VALUE(:name,:png,:admin)";
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
            $error =  $pdo->errorInfo();
            echo "Error: " . $sql . "<br>" . $error[2];

        }

        $pdo = null; //結束與資料庫連線
        return $last_table_id ;

    } catch (PDOException $e) {
        $pdo->rollBack();
        echo "錯誤原因 : " , $e->getMessage(),"<br>";
        echo "行號 : " , $e->getLine(),"<br>";
        //發生錯誤時顯示出錯誤訊息
    }
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
    $month = $ymd[1];
    $parh='image/skincare/';//圖片儲存路徑
    $dir='image/skincare/'.$year; //圖片儲存路徑
    $fileName=$filedata.$last_id."a";     //圖片檔名
    $dirMonth = 'image/skincare/'.$year .'/'. $month;

    /**********產生目錄*********/
    if(!is_dir($dir)){
  //chmod($dir, 0777);
      $oldmask = umask(0);
      mkdir($dir, 0777, TRUE);
      mkdir($dirMonth, 0777, TRUE);
      umask($oldmask);
      $dirNextYearMonthPath= $dirMonth.'/'.$fileName;
      file_put_contents("$dirNextYearMonthPath.png", $img_data);

    }else{
      /**********產生目錄*********/
        if(!is_dir($dirMonth)){
          $oldmask = umask(0);
          mkdir($dirMonth,0777,TRUE);
          umask($oldmask);
          $dirNextMonthName =  $dirMonth.'/'.$fileName;
          file_put_contents("$dirNextMonthName.png", $img_data);
        }else{
          $thisYearMonth=$dir.'/'.$month.'/'.$fileName;
          file_put_contents("$thisYearMonth.png", $img_data);

        }


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
    $month = $ymd[1];
    $parh='image/skincare/';//圖片儲存路徑
    $dir='image/skincare/'.$year; //圖片儲存路徑
    $fileName=$filedata.$last_id."b";     //圖片檔名
    $dirMonth = 'image/skincare/'.$year .'/'. $month;


    /**********產生目錄*********/
    if(!is_dir($dir)){
  //chmod($dir, 0777);
      $oldmask = umask(0);
      mkdir($dir, 0777, TRUE);
      mkdir($dirMonth, 0777, TRUE);
      umask($oldmask);
      $dirNextYearMonthPath= $dirMonth.'/'.$fileName;
      file_put_contents("$dirNextYearMonthPath.png", $img_data);


    }else{
      /**********產生目錄*********/
        if(!is_dir($dirMonth)){
          $oldmask = umask(0);
          mkdir($dirMonth,0777,TRUE);
          umask($oldmask);
          $dirNextMonthName =  $dirMonth.'/'.$fileName;
          file_put_contents("$dirNextMonthName.png", $img_data);

        }else{

          $thisYearMonth=$dir.'/'.$month.'/'.$fileName;

          file_put_contents("$thisYearMonth.png", $img_data);
        }


    }

    return $fileName;

}


$makeupName = getmackupImg($data,$last_id);
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
                    "DATE" => $time,
                    "BCID" => $data["BCID"],
                    "CUSTNO" => $data["CUSTNO"],
                    "DRY" => $data["DRY"],
                    "OIL" => $data["OIL"],
                    "PORES" => $data["PORES"],
                    "ACEN" => $data["ACEN"],
                    "DULL" => $data["DULL"],
                    "SPOTS" => $data["SPOTS"],
                    "CB" => $data["CB"],
                    "DARK_CIRCLES" => $data["DARK_CIRCLES"],
                    "TE" => $data["TE"],
                    "WRINKLE" => $data["WRINKLE"],
                    "SENSITIVE" => $data["SENSITIVE"],
                    "AIR_DRY" => $data["AIR_DRY"],
                    "DUST" => $data["DUST"],
                    "AIR" => $data["AIR"],
                    "UV_LUX" => $data["UV_LUX"],
                    "AGE" => $data["AGE"],
                    "FOOD" => $data["FOOD"],
                    "SLEEP_L" => $data["SLEEP_L"],
                    "PRESSURE" => $data["PRESSURE"],
                    "MOISTURIZING" => $data["MOISTURIZING"],
                    "WHITE" => $data["WHITE"],
                    "ANTI_AGE" => $data["ANTI_AGE"],
                    "REMOVER" => $data["REMOVER"],
                    "CLEAN" => $data["CLEAN"],
                    "ME" => $data["ME"],
                    "LOTION" => $data["LOTION"],
                    "EMULSION" => $data["EMULSION"],
                    "BEAUTY_FLUID" => $data["BEAUTY_FLUID"],
                    "CREAM" => $data["CREAM"],
                    "CREAM_PROTECTS" => $data["CREAM_PROTECTS"],
                    "CREAM_CONTROL" => $data["CREAM_CONTROL"],
                    "OTHER_M" => $data["OTHER_M"],
                    "OTHER_MC" => $data["OTHER_MC"],
                    "PASTE" => $data["PASTE"],
                    "PASTE_C" => $data["PASTE_C"],
                    "LIQUID" => $data["LIQUID"],
                    "LIQUID_C" => $data["LIQUID_C"],
                    "CREAMY" => $data["CREAMY"],
                    "CREAMY_C" => $data["CREAMY_C"],
                    "CAKE" => $data["CAKE"],
                    "CAKE_C" => $data["CAKE_C"],
                    "POWDER" => $data["POWDER"],
                    "POWDER_C" => $data["POWDER_C"],
                    "AIRB" => $data["AIRB"],
                    "AIRB_C" => $data["AIRB_C"],
                    "BB" => $data["BB"],
                    "BB_C" => $data["BB_C"],
                    "APPROVE_C" => $data["APPROVE_C"],
                    "SUBJECT" => $data["SUBJECT"],
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
                    "ACCUMULATION" => $data["ACCUMULATION"],
                    "SKIN_LEVEL" => $data["SKIN_LEVEL"],
                    "SEASON" => $data["SEASON"],
                    "SKIN_COLOR_C" => $data["SKIN_COLOR_C"],
                    "SKIN_LIGHT" => $data["SKIN_LIGHT"],
                    "SKIN_LIGHT_C" => $data["SKIN_LIGHT_C"],
                    "BASC" => $data["BASC"],
                    "BASC_REMOVER" => $data["BASC_REMOVER"],
                    "BASC_CLEAN" => $data["BASC_CLEAN"],
                    "BASC_WET" => $data["BASC_WET"],
                    "HORNY_C" => $data["HORNY_C"],
                    "HORNY_T" => $data["HORNY_T"],
                    "DRYING_C" => $data["DRYING_C"],
                    "DRYING_T" => $data["DRYING_T"],
                    "WHITENING_C" => $data["WHITENING_C"],
                    "WHITENING_T" => $data["WHITENING_T"],
                    "ELASTICITY_C" => $data["ELASTICITY_C"],
                    "ELASTICITY_T" => $data["ELASTICITY_T"],
                    "UV_C" => $data["UV_C"],
                    "UV_T" => $data["UV_T"],
                    "OTHER_C" => $data["OTHER_C"],
                    "OTHER_T" => $data["OTHER_T"],
                    "DETOXI_C" => $data["DETOXI_C"],
                    "DETOXI_T" => $data["DETOXI_T"],
                    "SUGGESTION" => $data["SUGGESTION"],
                    "MAKEUP_URL" => $makeupName,
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

    $result = $client->__soapCall("WS_CREIPSASKINCARE",

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
//  echo "送入資料";
//    var_dump(html_entity_decode($client->__getLastRequest(),ENT_QUOTES | ENT_XML1, 'UTF-8'));
//    echo "<br>";
//    echo("\nDumping response headers:\n");
//    var_dump($client->__getLastResponseHeaders());
//    echo "<br>";
//    echo("\nDumping response:\n");
//  echo "回傳資料";
//    var_dump(html_entity_decode($client->__getLastResponse(),ENT_QUOTES | ENT_XML1, 'UTF-8'));



//    printf('Result = %s' , $result->WS_CREIPSASKINCAREResult);

    $bcXml = simplexml_load_string($result->WS_CREIPSASKINCAREResult);

    $RTNCODE = (int)$bcXml->WSTATUS->ROW->RTNCODE;

    $ROWLEN = count($bcXml->RTNDATA->ROW);

//        echo $ROWLEN;

    if($RTNCODE === 0){


        if(savePDFImg($data) === true){

            if(sendMail($data) === "success"){

                delFile($data);

                echo "新增成功，信件已送出";

            }else{
                delFile($data);
                echo "MAIL無法發送";
            }

        }else{
            delFile($data);
            echo "處方籤資料已紀錄，預覽圖檔上傳失敗，PDF檔案無法輸出";
        }

    }else{

            delFile($data);
            $xml = $bcXml->WSTATUS->ROW->RTNCODE;
            $msg = $bcXml->WSTATUS->ROW->RTNMSG;
            echo "錯誤訊息:".$msg;

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
    if(empty($decodedImg)){
      return false;
    }else{
      $parh='image/skincare/pdf/';//pdf儲存路徑
      $vipids =$data["VIPIDS"];
      $fileName=$parh. $vipids;     //pdf檔名
      if(file_put_contents("$fileName.png",$decodedImg)){
        //  Save image to a temporary location

        //  Open new PDF document and print image
        $pdf = new FPDF('L','pt',array(574.56,481.32));
        $pdf->AddPage();
        $pdf->Image("$fileName.png",0,0,574.56,481.32,'png');
        $pdf->Output($fileName.".pdf",'F');
        return true;
      }else{
        return false;
      }
    }



}




function sendMail($data){

    require_once 'lib/swiftmailer/swift_required.php';
    $pdf = "image/skincare/pdf/".$data["VIPIDS"].".pdf";
    $vipMail = $data["MAIL"];
    $vipName = $data["VIPNM"];


// 採用預設的mail()數函發email
// $transport = Swift_MailTransport::newInstance();

// 使用SMTP的方式來發送gmail
  $smtp_host_ip = gethostbyname('smtp.hibox.biz'); //修正ip6 擋smtp  ip:210.71.195.30
  $transport = Swift_SmtpTransport::newInstance($smtp_host_ip, 25,'tls')
        ->setUsername('admin@ipsa.com.tw')
        ->setPassword('Cd27733766')
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
    $attachment = Swift_Attachment::fromPath($pdf,'application/pdf');
    $message->attach($attachment);

// Send the email
    $mailer = Swift_Mailer::newInstance($transport);
//    $mailer->send($message);

  try{
    $mailer->send($message);
    return "success";
  }catch (Swift_TransportException $e){
    header("content-type:text/xml");
    echo '<MSG>MAIL發送發生問題，檢測紀錄已儲存，請至POS機上查詢<br>' . '錯誤訊息:' . $e->getMessage().'</MSG>';
    return "fail";
  }


}


function delFile($data){

    $pdf = "image/skincare/pdf/".$data["VIPIDS"].".pdf";
    $png = "image/skincare/pdf/".$data["VIPIDS"].".png";
    unlink($pdf);
    unlink($png);

}

//savePDFImg($data);
//sendMail($data);
//delFile($data);
?>
