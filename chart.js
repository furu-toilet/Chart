GetData();



function GetData(){
    Promise.all([
        RequestStart('./chart02.php')   //データの取得（リクエスト）
    ]).then( result => {
            //google.setOnLoadCallback(drawChart);
            console.log("promise success");
            console.log(result);
        });
}



/*　リクエスト用関数　*/
function RequestStart(url){       
    return new Promise(function(resove,reject){
        var xhr = new XMLHttpRequest(); //おまじない
        xhr.onreadystatechange = function(){
            if(xhr.readyState ===4 && xhr.status === 200){
                console.log("xhr Success");     //リクエスト成功
            }else if(xhr.status === 404){
                console.log("Err : Not Found");//リクエスト失敗
            }
        }    
        console.log("Ajax OK");
        xhr.open("GET",url,true);
        xhr.send(null);
        xhr.abort();
        console.log("xhr.open OK(END)");
    });
    
}
