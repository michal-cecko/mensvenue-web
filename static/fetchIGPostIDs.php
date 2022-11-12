<?php 
    function delete_files($target) {
        if(is_dir($target)){
            $files = glob( $target . '*', GLOB_MARK );
            foreach( $files as $file ){
                delete_files( $file );      
            }
            if(file_exists($target)) 
                rmdir( $target );
        } elseif(is_file($target)) {
            unlink( $target );  
        }
    }
    $myfile = fopen("accessToken.json", "r+") or die("Unable to open file!");
    $token = json_decode(fread($myfile, filesize("accessToken.json")));
    fclose($myfile);
    $url = 'https://graph.instagram.com/me/media?fields=id&access_token='.$token;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_USERAGENT, "I-am-browser");
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    $response = curl_exec($ch);
    curl_close($ch);

    $response = json_decode($response, true);

    if(is_array($response) && !array_key_exists("error", $response) && array_key_exists("data", $response)){

        $data = array_slice($response['data'], 0, 4);
        if(file_exists("images/instagram/dynamic")){
            delete_files("images/instagram/dynamic");
        }
        mkdir("images/instagram/dynamic", 0777, true);
        $i = 1;
        foreach ($data as $post) {
            $url = "https://graph.instagram.com/".$post['id']."?fields=media_type,media_url&access_token=".$token;
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_USERAGENT, "I-am-browser");
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            $response = curl_exec($ch);
            curl_close($ch);

            $response = json_decode($response, true);

            $imgURL = $response['media_url'];

            file_put_contents("images/instagram/dynamic/".$i.".jpg", file_get_contents($imgURL));
            echo "imgHasBeenDownloaded? ";
            var_dump(file_exists("images/instagram/dynamic/".$i.".jpg"));
            $i++;
        }
    }
?>