try{
    var f=$vm.kb_path+"/Under testing/Clinical trial/Data Management/_data/participant.json";
    var arr=JSON.parse(fs.readFileSync(f, 'utf8'));
    const result = arr.find(obj => obj['_Password'] == p.d.password && obj['id'] == p.d.uid);
    if(result){
        $vm.g_response(p, {
            status:"ok",
            a:{
                "next":"Clinical trial visit 1 data entry",
                "Subject_Initials": result.Subject_Initials,
                "id": result.id
            }   
        });
    }
    else $vm.g_response(p, {status:"error",msg:"Invalid login"});
}catch(e){
    $vm.g_response(p, {status:"error",msg:e.message});
}
