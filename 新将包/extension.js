game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新将包",content:function(config,pack){      
    if(!lib.config.xjb_myStorage){
        lib.config.xjb_myStorage={
        total:0,
        }
    }  
    lib.extensionMenu.extension_新将包.author.onclick=function(){
        let order=prompt("你好，请问有什么事吗？")
        if(order=='3'){
            for(var i in lib.skill){
                if(lib.skill[i].audioname2){
                    delete lib.skill[i].audioname2
                    lib.skill[i]=game.xjb_filterData(["skill",i])
                }
            }
        } else if(order=='4'){
            if(game.editExtension&&lib.extensionPack){
                let word=prompt('请输入你要编辑的拓展');
                if(lib.extensionPack[word])game.editExtension(word);
                else if(word==null){}
                else alert('无法编辑未启用的扩展，请启用此扩展并重启后重试')
            }else{
                alert('无法编辑未启用的扩展，请启用此扩展并重启后重试')
            }
            }
    }    
    //选项    
    if(!lib.config.xjb_redSkill)lib.config.xjb_redSkill={list:[],skill:{},translate:{}}    
    lib.xjb_style={
        back:{
            width:"800px",
            height:"350px",
            position:"absolute",
            margin:"auto",
            'z-index':'10',
            'right':'0px',
            'top':'0px',        
            'left':'0px',
            'bottom':'0px',
            'border-radius':'3em',
            'background-image':`linear-gradient(to bottom right,#f0acf7,#7093DB,#f7f0ac)`,
            'border':'3px solid black',          
        },
        cj_box:{
            'font-size':'24px',
            'border':'1px solid #4A766E',
             'border-radius':'5em',
            float:"left",
            "margin-bottom":"14px"
        },
        storage_li:{
            height:"92%",
            width:"25%",
            "background-color":"#e4d5b7",
            "border-radius":"3em",
            float:"left",
            "margin-right":"8%",
            color:"#041322",
            "text-align":"center"
        }
    }
    lib.xjb_path={
        LH:lib.assetURL+"extension/新将包/xin_newCharacter.jpg",
        YQ:lib.assetURL+"extension/新将包/image/xjb_yuqiao.jpg",
    }
    lib.xjb_list_xinyuan={
        music:{
            "众神眷恋的幻想乡.mp3":"众神眷恋的幻想乡",
            "少女绮想曲.mp3":"少女绮想曲",
            "碎月.mp3":"碎月",
            "竹取飞翔～Lunatic Princess.mp3":"竹取飞翔～Lunatic Princess",
            "U.N.Owen就是她吗？.mp3":"U.N.Owen就是她吗？",
            "活泼的纯情小姑娘.mp3":"活泼的纯情小姑娘",
            "Bad Apple!!.mp3":"Bad Apple!!",
            "取消":"取消并恢复背景音乐",
        },
        video:{
            },
        translate:{
            "recover":"恢复体力",
            "loseHp":"失去体力",
            "loseMaxHp":"失去体力上限",
            "gainMaxHp":"增加体力上限",
            "die":"死亡",
            "link":"横置",
            "insertPhase":"额外进行一个回合",
            'none':'无',
            'limited':'限定技',
            'juexingji':'觉醒技',
            'zhuanhuanji':'转换技',
            'zhuSkill':'主公技', 
            'forced':'锁定技',
            'skill_X':'X技',
            'qzj':'强制技',
            'standard':'标准',
            'yijiang':'一将',
            'shenhua':'神话',
            'extra':'神将',
            'xinghuoliaoyuan':'星火',
            'refresh':'界限',
            'yxs':'英雄杀',
            'diy':'diy',
            'old':'怀旧',
            'fc_X':'player.fc_X，是X技的数据处理器，用法如下:<br>\
             1.num类参数，一个num只对应着一项事件(摸牌、恢复体力、失去体力等等)，可以连写，会依次执行<br>\
             2.bool类参数，bool用于确认是否选择角色，true选角色执行事件，false则onlyme角色执行<br>\
             3.Array类参数，Array的每一项和num对应，并决定着事件的数值<br>\
             4.str类参数，当这类参数为如下所提到的，会有如下效果:\
             ①noskill_temp:强制技效果；②baiban_temp:执行角色该回合白板；③usechenSkill:使用名臣技；④S:S之；⑤deS:取消S之\
            <br>5.obj类参数，其key有如下所提到的，会有如下效果:\
            ①nature:数组，为伤害设置属性；②expire:对象，为tempSkill设置期限；③skills:数组，设置获得的技能；④identity:数组，设置成为的身份；⑤awaken:数组，设置废除的技能；⑥onlyme:数组，设置onlyme角色\
            提示:每一个step中每一个player只能调用一次该函数，否则会报错'
        },
        path:{
            "1":lib.assetURL+'/extension/新将包/hpCard/',    
            
        },       
        jiangchi:[],
        skills:{
            red:["xjb_redSkill","xjb_redSkill_1","xjb_redSkill_2"].concat(lib.config.xjb_redSkill.list),
            zhugeliang:["tianhuo","kaori_siyuan","xin_weiwo"],
            caocao:["guixin","hujia","jiushi1","jiushi2","jiushi3"],
            xuemo:["xin_xuefa_wuxie","xin_xuefa_jiu","xin_xuefa_shan","xin_xuefa_sha","xin_xuefa_tao","xin_guimeng","xin_xueqi","xin_xuefa_shunshou"]
        },
        theStorage:"",
        theFunction:{
            xjb_chupingjisha:function(){
              if(ui.xjb_chupingjisha&&ui.xjb_chupingjisha.remove)  ui.xjb_chupingjisha.remove()
            var control1=ui.create.control("开启触杀",fc1)
            var control2=ui.create.control("关闭触杀",fc2)
            ui.xjb_chupingjisha=control1
            control2.close()
            function fc1(){
                this.remove()
                var t=ui.create.control("关闭触杀",fc2)
                ui.xjb_chupingjisha=t
                document.addEventListener('click',lib.xjb_list_xinyuan.dom_event.click2)
            }
            function fc2(){
                this.remove()
                var b=ui.create.control("开启触杀",fc1)
                ui.xjb_chupingjisha=b
                document.removeEventListener('click',lib.xjb_list_xinyuan.dom_event.click2)                         
            }
            }
        },
        onclick:false,
        onclick2:false,
        dom_event:{
            click1:function(e){
                //game.print(e.target.classList)
            let cl=e.target.classList;
            let list=["作","执","摸牌","回复","换人","复活","翻面","横置","伤害","弃牌","一","二","三","四","五"]
            if(list.contains(e.target.innerHTML)&&cl.contains("menubutton")){
                if(cl.contains("highlight")){
                    game.cost_xjb_cost(1,10)
                }
                else if(cl.contains("selectedx")){
                    e.target.classList.add('unselectable');
                    e.target.classList.remove('selectedx');
                     game.cost_xjb_cost(1,10)
                }
                else if(cl.contains("unselectable")){
                    game.cost_xjb_cost(1,10)
                }
            }            
            },
            click2:function(e){
                if(e.target.classList.contains("avatar")){
                    if(e.target.parentNode.classList.contains("player")&&!e.target.parentNode.classList.contains("xjb_interact_player")){
                        if(game.xjb_condition(1,2)){
                            e.target.parentNode.loseHp()
                            game.cost_xjb_cost(1,2)
                            game.xjb_systemEnergyChange(-2)                          
                        }
                    }
                }
            },
            
        }
    }
    //卡牌类别
    lib.cardType['xjb_unique']=0.5
    lib.cardType['xjb_unique_skill']=0.35
    lib.cardType['xjb_unique_talent']=0.4
    lib.cardType['xjb_unique_usual']=0.45
    lib.cardType['xjb_unique_money']=0.46
    if(!lib.config.xjb_music)lib.config.xjb_music='取消'    
    //设置角色统计
    if(!lib.config.xjb_count) lib.config.xjb_count={}
    //设计技能槽
    if(!lib.config.xjb_jnc) lib.config.xjb_jnc=0
    //设置称号
    if(!lib.config.xjb_title){
        lib.config.xjb_title=[],
        lib.config.xjb_title[0]=['战功赫赫',[]]
        lib.config.xjb_title[1]=['烈火燎原',[]]
        lib.config.xjb_title[2]=['震雷骇天',[]]
        lib.config.xjb_title[3]=['冰冻三尺',[]]
        game.saveConfig('xjb_title', lib.config.xjb_title);
    }
    //设置打卡
    if(!lib.config.xjb_hundaka) lib.config.xjb_hundaka=[0,0,0,0]    
    if(!lib.config.xjb_hundaka2)lib.config.xjb_hundaka2=0
    if(!lib.config.cjb_cj_type) lib.config.cjb_cj_type="1";
    if(!lib.config.xjb_systemEnergy) lib.config.xjb_systemEnergy=0;
    if(lib.config.xjb_systemEnergy>5e8) lib.config.xjb_systemEnergy=5e8;
    if(isNaN(lib.config.xjb_systemEnergy)) lib.config.xjb_systemEnergy=0;
    if(lib.config.xjb_hunbi!==undefined){
        if(lib.config.xjb_hunbi>5e7) lib.config.xjb_hunbi=5e7;
        if(isNaN(lib.config.xjb_hunbi)) lib.config.xjb_hunbi=0;   
    }
    //设置养成角色
    if(!lib.config.xjb_newcharacter){
       lib.config.xjb_newcharacter={
            name2:'李华',
            sex:'male',
            group:'qun',
            hp:1,
            skill:[],
            intro:'',         
       }
    }   
    if(lib.config.xjb_hun){        
        for(let a=0;a<lib.config.xjb_title.length;a++){
            let title='';       
            for(var b=0;b<lib.config.xjb_title[a][1].length;b++){
                   let name=lib.config.xjb_title[a][1][b]
                   if(lib.characterTitle[name]!=undefined){
                       title=lib.characterTitle[name]
                       title=title+'<hr>'+lib.config.xjb_title[a][0]
                   }
                   else{
                       title='<hr>'+lib.config.xjb_title[a][0]
                   }
                   lib.characterTitle[name]=title            
               }          
        }
    }
    lib.arenaReady.push(function(){        
        game.updateRed()
        if(!lib.character.xjb_newCharacter){
        let intro=lib.config.xjb_newcharacter.intro
        let sink='ext:新将包/xin_newCharacter.jpg',translate=lib.config.xjb_newcharacter.name2,sex=lib.config.xjb_newcharacter.sex,group=lib.config.xjb_newcharacter.group,hp=lib.config.xjb_newcharacter.hp,skill=[...lib.config.xjb_newcharacter.skill ]                                                                                                            
        lib.translate.xjb_newCharacter=translate;   
        if(get.mode()=="boss"){
            lib.character.xjb_Boss_Start=["none",null,0,["boss_xjb_start","xin_wlqxp","xin_hlyyd","xin_qns","xin_guimeng"],['boss','bossallowed',"ext:新将包/image/god.jpg"]]
            lib.translate.xjb_Boss_Start=translate+"传"    
        }
        function xin_newCharacter(){
        if(lib.config.xjb_yangcheng==1&&lib.config.xjb_hun){
            lib.characterIntro.xjb_newCharacter=intro
            if(get.mode()=="boss"&&["八云红","小红","王红","红毒抗原","境界之人类","月宫毁灭者"].contains(translate)){
                skill=lib.xjb_list_xinyuan.skills.red
                hp=3
                sink='ext:新将包/Red.jpg'
            }
            else if(group=="western"&&["血族","血魔","血天使","血鬼","吸血鬼"].contains(translate)){
                skill=lib.xjb_list_xinyuan.skills.xuemo
                hp=1
                sink='ext:新将包/xuemo1.jpg'
            }
            return [sex,group,hp,skill,[sink]]; 
        }
            return [sex,group,hp,skill,[sink,'unseen']]
        }
           lib.character.xjb_newCharacter=xin_newCharacter();       
    
        lib.characterPack["mode_extension_新将包"].xjb_newCharacter=xin_newCharacter();
        }
   })
   lib.arenaReady.push(function(){
       //qzj技描述
       let qzj_l=lib.config.xjb_list_hunbilist.qzj
        for(let i=0;i<qzj_l.length;i++){
            lib.dynamicTranslate[qzj_l[i]]=function(player) {
            return player.hasSkill("skill_off")?"因S之不能发动":lib.translate[qzj_l[i]+"_info"]
            }
        }
       //统计初始化
       for(var i in lib.character){
           if(lib.character[i]&&lib.character[i][3]){
               lib.character[i][3].add()
               
           }
           if(!lib.config.xjb_count[i]){
                   lib.config.xjb_count[i]={
                   kill:0,
                   thunder:0,
                   fire:0,
                   ice:0,
                   loseMaxHp:0,
                   gainMaxHp:0,
                   HpCard:[],    
                   uniqueSkill:[]     
                }
            }
            else if(lib.config.xjb_count[i].characterCard)delete lib.config.xjb_count[i].characterCard
            }   
        game.saveConfig('xjb_count', lib.config.xjb_count);       
   })
   lib.arenaReady.push(function(){
       //技能抽奖
       var Array=[]
       lib.config.xjb_list_hunbilist.choujiang["4"]={}
        for(var k in lib.character){
             Array=Array.concat(lib.character[k][3])
        }
       var list=[Array.randomGet(),Array.randomGet(),Array.randomGet(),Array.randomGet(),Array.randomGet()]
       for(var i=0;i<list.length;i++){
           lib.config.xjb_list_hunbilist.choujiang["4"][list[i]]="20*100"
       }
       
   })
   lib.arenaReady.push(function(){
       _status.xjb_level={
        name:get.mode(),
        number:"0000"
       }
       for(var i in lib.skill.xjb_theLevel.ActionOfPlayer){
         lib.element.player[i]=lib.skill.xjb_theLevel.ActionOfPlayer[i];
        }
   })
   lib.arenaReady.push(function(){
       if(lib.config.xjb_music!="取消"){
            ui.backgroundMusic.loop=true
            ui.backgroundMusic.src=lib.assetURL+'/extension/新将包/music/'+lib.config.xjb_music
        }
       if(lib.config.xjb_hun){
            var num1=game.xjb_getCurrentDate()
            var num2=lib.config.xjb_hundaka
            if(num1[0]>num2[0]||num1[1]>num2[1]||num1[2]>num2[2]){                
                lib.config.xjb_hundaka[0]=num1[0]
                lib.config.xjb_hundaka[1]=num1[1]
                lib.config.xjb_hundaka[2]=num1[2]
                lib.config.xjb_hundaka[3]++
                game.saveConfig('xjb_hundaka', lib.config.xjb_hundaka);
                lib.config.xjb_hundaka2++
                game.saveConfig('xjb_hundaka2', lib.config.xjb_hundaka2);
                alert('打卡成功！ \n你已打卡过'+lib.config.xjb_hundaka[3]+'次');
            }          
        }
   })
    //
    lib.config.xjb_list_hunbilist={
        card:{
                'HpCard(2)':"2点体力牌",
                Kami_sha:"神杀(×6)",
                skill_off_card:"S卡",
                xin_shouqi:"手气卡",
                xjb_suitchange:"天赋：浸染",          
                xjb_Infinity:"天赋：蓬莱",
                xjb_skillCard:"技能牌"
       },
        character:{   
                    machao:'马超(3魂币)',
                    guanyu:'关羽(3魂币)',
                    huatuo:'华佗(3魂币)',
                    jiaxu:'贾诩(3魂币)', 
                    zhugeliang:'诸葛亮(5魂币)',
        },
        skill:{
            first:['xjb_juanqu','xjb_lunhui'],
            second:['xjb_xinsheng','xjb_leijue','xjb_bingjue'],
            third:['xjb_pomie','xjb_sicuan','xjb_huojue']
        },
        qzj:["xin_xiongli","xin_taoni","xin_yiqing"],
        choujiang:{
                   "1":{
                       "技能(1个)":"9*100",
                       "称号(1个)":"1*100",
                       "体力卡(1张，3点)":'9*100',
                       "体力值(1点)":'15*100',
                       "免费更改势力":'16*100',
                       "免费更改性别":'50*100'
                    },
                   "2":{
                       "55魂币大礼包":'3*100',
                       "30魂币中礼包":'10*100',
                       "15魂币小礼包":'14*100',
                       "1魂币谢谢惠顾":'28*100',
                       "4魂币欢迎光临":'45*100',
                       
                   },
                   "3":{
                       "技能槽(1个)":'3*100',                  
                       "25魂币中礼包":'5*100',
                       "体力卡(1张，1点)":'22*100',
                       "打卡点数+1":'4*100',
                       "3魂币欢迎光临":'15*100',
                       "1魂币作者赐予":'23*100',
                       "0魂币谢谢惠顾":'30*100'                       
                   },
            
        }
    } 
        
    //ui函数
    ui.xjb_giveStyle=function(object1,object2){
        var list=Object.keys(object2)      
        for(var i=0;i<list.length;i++){
            object1.style[list[i]]=object2[list[i]]
        }
    }
    ui.create.xjb_back=function(){
        if(game.xjb_back&&game.xjb_back.remove)game.xjb_back.remove()
        var back=ui.create.div('.interact_back',ui.window)       
        ui.xjb_giveStyle(back,lib.xjb_style.back)     
        game.xjb_back=back
        var close = document.createElement('img');
                close.style['width']='40px'
                close.setAttribute('src', lib.assetURL+'/extension/新将包/image/xjb_close.png');
         ui.xjb_giveStyle(close,{float:"left"})     
                close.className = 'close';
                close.addEventListener("click",function() {
                    lib.xjb_list_xinyuan.onclick2=false
                    lib.xjb_list_xinyuan.onclick=false
                    ui.window.removeChild(back);
                })
                back.appendChild(close);
                ui.window.appendChild(back);        
                return [back,close]
    }
    
   //创建存档1     
    ui.create.xjb_storage=function(){
        var list=ui.create.xjb_back()        
        var back=list[0]
        var theX=list[1]
        var div_1=document.createElement('div');
        ui.xjb_giveStyle(div_1,{height:"75%",width:"90%",margin:"4% auto","border-radius":"1em",overflow:"auto",          
                                }
                                )
        var ul=document.createElement('ul');
        ui.xjb_giveStyle(ul,{height:"8%",width:"90%","background-color":"#996600",
                               "margin":"37% 0 0 1.5%","border-radius":"5em",
                                border:"8px solid #f4a460","list-style": "none"
                               })        
        back.appendChild(div_1)   
        back.appendChild(ul)
        var li_1=document.createElement('li');        
        ui.xjb_giveStyle(li_1,lib.xjb_style.storage_li)
        ul.appendChild(li_1)
        li_1.innerHTML="创建存档"
        var li_2=document.createElement('li');        
        ui.xjb_giveStyle(li_2,lib.xjb_style.storage_li)
        ul.appendChild(li_2)
        li_2.innerHTML="读取存档"
        var li_3=document.createElement('li');        
        ui.xjb_giveStyle(li_3,lib.xjb_style.storage_li)
        ul.appendChild(li_3)
        li_3.innerHTML="删除存档"
        return {
            back:back,
            div_1:div_1,
            ul:ul,
            li_1:li_1,
            li_2:li_2,
            li_3:li_3,
            close:theX
        }
    }
    ui.xjb_giveContent=function(){
        var list=[]
        for(var i=0;i<arguments.length-1;i++){
            if(typeof arguments[i]==="string"){
                list[i]=document.createElement("li")
                list[i].innerHTML=arguments[i]
                arguments[arguments.length-1][0].appendChild(list[i])
                if(arguments[arguments.length-1][1])ui.xjb_giveStyle(list[i],arguments[arguments.length-1][1])
                if(arguments[arguments.length-1][2]){
                    list[i].onclick=arguments[arguments.length-1][2]
                }
           }
        }
        return list
    }
    ui.create.xjb_theStorage=function(storage,num){
        var div=document.createElement('ul'),style1={height:"30%",width:"92%", 
                                      "border-radius":"2em",
                                "background-color":"#71291d",
                                      border:"9px solid #cb6d51",
                                      "list-style": "none",
                                      "background-image":"",
                                      "background-size":""             
                               }
                ui.xjb_giveStyle(div,style1)
                if(storage.children.length>0)ui.xjb_giveStyle(div,{"margin-top":"20px",})
                div.onclick=function(){
                    for(var i=0;i<storage.children.length;i++){
                        storage.children[i].id=""
                        ui.xjb_giveStyle(storage.children[i],style1)
                    }
                    ui.xjb_giveStyle(this,{"background-image":"url('"+lib.assetURL+"/extension/新将包/image/noname.png')",
                                "background-size":"10% 100%"})
                    this.id="xjb_storage_theStorage"
                }
                    var sto_list=ui.xjb_giveContent("<b>存档号</b>","<b>存档角色</b>","<b>关卡信息</b>","<b>存档时间</b>",[div,{height:"94%",
                width:"17%",
                float:"left",
                "margin-right":"8%",
                 fontSize:"14px"  ,                                                                                        
                 color:"#041322",
                "text-align":"center"}])  
                    div.num=num
                    sto_list[0].num=num
                    game.saveConfig("xjb_myStorage",lib.config.xjb_myStorage)
                    var p1=document.createElement("p")
                    var str=""+sto_list[0].num
                    while(str.length<7)str="0"+str
                    p1.innerHTML=str
                    sto_list[0].appendChild(p1)
                    storage.appendChild(div)
                    
                return {
                    ul:div,
                    theNum:sto_list[0],
                    theCharacter:sto_list[1],
                    theLevel:sto_list[2],
                    theTime:sto_list[3]
                }
                
    }
    ui.create.xjb_curtain=function(){
        var back=document.createElement("div")
        ui.window.appendChild(back)
        ui.xjb_giveStyle(back,{
            width:"100%",
            height:"100%",
            backgroundColor:"#3c4151",
            margin:"auto",
            opacity:"0.58",
            "z-index":"4",
            "text-align":"center",
            "font-size":"32px",
        })
        return back
    }
    ui.create.xjb_dialog=function(src,Name,color,str){          
        var back=ui.create.xjb_curtain()
        var div=document.createElement("div")
        ui.window.appendChild(div)
        ui.xjb_giveStyle(div,{
            width:"80.3%",
            height:"28%",
            backgroundColor:"#71d9e2",
            marginTop:"26.6%"  ,
            border:"10px solid #00bfff",       
            opacity:"0.89",
            "font-size":"24px",
            "z-index":"5",
            paddingLeft:"18%",
            paddingTop:"2%",
            paddingBottom:"2%",
        })
        div.innerHTML=str
        var img=document.createElement("div");
        ui.window.appendChild(img);
        ui.xjb_giveStyle(img,{
            height:"30%",
            width:"13%",
            marginTop:"29.3%"  ,
            marginLeft:"2%",
            "z-index":"6",
            backgroundImage:`url(${src})`,
            "background-size":"100% 100%"
        });        
        div.picture=img
        var name=document.createElement("div");
        ui.window.appendChild(name);
        ui.xjb_giveStyle(name,{
            height:"7%",
            width:"17%",
            backgroundColor:"#71d9e2",
            marginTop:"22.8%"  ,
            "z-index":"6",    
            "border-bottom-right-radius":"3em",
            "border-top-right-radius":"3em",
            border:`1px solid ${color}`,
            color:""+color,
            "font-size":"28px",
            "text-align":"center",
            paddingTop:"6px"
        });  
        div.name=name
        div.curtain=back
        name.innerHTML=`${Name}`
        
        return {
            curtain:back,
            dialog:div,
            name:name
        }
    }
    game.xjb_dialog=function(Array){
        var obj=ui.create.xjb_dialog(...Array[0])
        obj.dialog.num=0
        obj.dialog.Maxnum=Array.length-1  
        obj.dialog.Array=Array
        function fc(){
            var i=this.num
            if(i>=this.Maxnum){
                this.curtain.remove()
                this.remove()
                this.picture.remove()
                this.name.remove()
                game.resume()
            }                        
            else{
                this.num++    
            var i=this.num
            ui.xjb_giveStyle(this.name,{
            border:`1px solid ${this.Array[i][2]}`,
            color:""+this.Array[i][2]})
            this.name.innerHTML=`${this.Array[i][1]}`
            ui.xjb_giveStyle(this.picture,{
            backgroundImage:`url(${this.Array[i][0]})`,            
            });   
            this.innerHTML=this.Array[i][3]    
            this.curtain.innerHTML=this.Array[i][4]
            }        
        }
        obj.dialog.addEventListener("click",fc)   
    }
    
    
    
    
    
    game.xjb_bossLoad=function(str,player){
        lib.skill.xjb_theLevel.theLevel[str].init(player)
    }
    game.xjb_cardFactory=function(){
        var cards=[]
        for(var i=0;i<arguments.length;i++){
            cards.push(game.createCard(...arguments[i]))
        }
        return cards
    }
    game.xjb_filterData=function(Array){
        if(arguments.length>1){
            for(var i=0;i<arguments.length;i++){
                game.xjb_filterData(arguments[i])
            }
            return
        }
        var target=lib
        for(var i=0;i<Array.length;i++){
            target=target[Array[i]]
        }
        var list={}
        for(var i in target){
            if(target[i]!=null)list[i]=target[i]
        }
        target=list
        return target
    }
    game.xjb_storage_2=function(player){
        var step1=game.xjb_storage_1()
        step1.li_2.innerHTML="覆盖存档"
        step1.li_2.onclick=function(){
           var theUpdate=document.getElementById('xjb_storage_theStorage')
           if(theUpdate){
               var obj=lib.config.xjb_myStorage[theUpdate.num],time=game.xjb_getCurrentDate()
               var str=`${time[0]}-${time[1]}-${time[2]}-${time[3]}-${time[4]}`
               obj.date=str
               obj.character.id=player.name1
               obj.character.name=get.translation(player.name1)
               obj.character.hp=player.hp
               obj.character.maxHp=player.maxHp
               obj.character.h=player.xjb_getAllCards("h")
               obj.character.e=player.xjb_getAllCards("e")
               obj.character.j=player.xjb_getAllCards("j")
               obj.level={
               name:_status.xjb_level.name,
               number:_status.xjb_level.number,
               }
               game.saveConfig("xjb_myStorage",game.xjb_filterData(["config","xjb_myStorage"]))
               var p=theUpdate.getElementsByTagName("p")
               p[3].innerHTML=obj.date
               p[2].innerHTML=obj.level.name
               p[1].innerHTML=obj.character.name
           }
           
        }
    }
    
    game.xjb_storage_1=function(player){
        var storage=ui.create.xjb_storage()
        for(var i in lib.config.xjb_myStorage){
            if(typeof lib.config.xjb_myStorage[i]=="object"){
                var thelist=ui.create.xjb_theStorage(storage.div_1,get.xjb_number(i))
                var target=lib.config.xjb_myStorage[i]
                //日期部分
                var myDate=document.createElement("p")
                myDate.innerHTML=target.date
                thelist.theTime.appendChild(myDate)
                //角色部分
                var myCharacter=document.createElement("p")
                myCharacter.innerHTML=target.character.name
                thelist.theCharacter.appendChild(myCharacter)
                //关卡部分
                var myLevel=document.createElement("p")
                myLevel.innerHTML=target.level.name
                thelist.theLevel.appendChild(myLevel)
            }
        }
        storage.li_1.onclick=function(){
           var list=ui.create.xjb_theStorage(storage.div_1,lib.config.xjb_myStorage.total++)    
           lib.config.xjb_myStorage[list.theNum.num]={}
           var obj=lib.config.xjb_myStorage[list.theNum.num]
           obj.character={
               id:"",
               name:"",
               hp:3,
               maxHp:3,
               h:[],
               e:[],
               j:[]           }
           obj.level={
               name:"",
               number:""
           }
           //日期部分
           var p4=document.createElement("p"),time=game.xjb_getCurrentDate()
           var str=`${time[0]}-${time[1]}-${time[2]}-${time[3]}-${time[4]}`
           obj.date=str        
           p4.innerHTML=obj.date
           list.theTime.appendChild(p4)
           //角色部分
           var p2=document.createElement("p")
           p2.innerHTML=obj.character.name
           list.theCharacter.appendChild(p2)
           //关卡部分
           var p3=document.createElement("p")
           p3.innerHTML=obj.level.name
           list.theLevel.appendChild(p3)            
        }
        storage.li_2.onclick=function(){
            
           var theLoad=document.getElementById('xjb_storage_theStorage')
           if(theLoad){
               var theObj=lib.config.xjb_myStorage[theLoad.num]
               game.xjb_bossLoad(theObj.level.number,player)
               var obj=theObj.character
               if(obj.id!=="")player.reinit(player.name1,obj.id)
               else player.reinit(player.name1,"xin_fellow")
               player.maxHp=obj.maxHp
               player.hp=obj.hp
               player.lose(player.getCards("hejsx"))
               game.print(obj.h)
               player.gain(game.xjb_cardFactory(...obj.h))
               var e=game.xjb_cardFactory(...obj.e)
               for(var i=0;i<e.length;i++){
                   player.equip(e[i])
               }
               var j=game.xjb_cardFactory(...obj.j)
               for(var i=0;i<j.length;i++){
                   player.addJudge(j[i])
               }
               player.update()
               storage.back.remove()
           }
            
        }
        storage.li_3.onclick=function(){
           var theRemove=document.getElementById('xjb_storage_theStorage')
           if(theRemove){
               theRemove.remove()
               lib.config.xjb_myStorage[theRemove.num]=null
               game.saveConfig("xjb_myStorage",game.xjb_filterData(["config","xjb_myStorage"]))
               lib.config.xjb_myStorage=game.xjb_filterData(["config","xjb_myStorage"])
           }
        }
        return {li_1:storage.li_1,li_2:storage.li_2,li_3:storage.li_3,close:storage.close}
    }
    //奖池更新
    game.xjb_condition=function(num1,num2){
        var Uhave
        if(num1==1)Uhave=lib.config.xjb_hunbi
        else if(num1==2)Uhave=lib.config.xjb_hundaka2
        else if(num1==3){
            Uhave=lib.config.xjb_jnc-lib.config.xjb_newcharacter.skill.length
        }
        if(!Uhave) return false
        if(Uhave>=num2) return true
        return   false
    }
    game.cost_xjb_cost=function(num1,num2){
        if(num2<0)num2=0
        if(num1==1)lib.config.xjb_hunbi-=num2
        else if(num1==2)lib.config.xjb_hundaka2-=num2
        game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi)
        game.saveConfig('xjb_hundaka2', lib.config.xjb_hundaka2);
        game.xjb_systemEnergyChange(num2)
    }
    game.xjb_systemEnergyChange=function(num){
        lib.config.xjb_systemEnergy+=num
        game.saveConfig('xjb_systemEnergy', lib.config.xjb_systemEnergy);
        if(lib.config.xjb_systemEnergy<=0){
            if(num<0)alert("魂币系统能量耗尽")
            if(game.xjb_back&&game.xjb_back.remove)game.xjb_back.remove()
        }
    }
    game.xjb_gainJP=function(str,boolean){
        switch(str){
                //恢复3能量
                case "打卡点数+1":{
                   lib.config.xjb_hundaka2++
                   game.saveConfig('xjb_hundaka2', lib.config.xjb_hundaka2);
                   game.xjb_systemEnergyChange(3)
                };break;
                //有技能槽则获得，消耗能量
                case "技能(1个)":{
                    var haven=lib.config.xjb_newcharacter.skill
                var first=lib.config.xjb_list_hunbilist.skill.first
                var second=lib.config.xjb_list_hunbilist.skill.second
                var third=lib.config.xjb_list_hunbilist.skill.third
                var list=first.concat(second,third)
                var  willget=list.randomGet()
                if(game.xjb_condition(3,1)){
                    alert('你获得了技能'+get.translation(willget))
                    lib.config.xjb_newcharacter.skill.add(willget)
                    game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)
                    game.xjb_systemEnergyChange(-willget.length-2)
                }    
                else{alert("请确保你有获得技能的能力！")}     
                };break
                case "称号(1个)":{
                    var i=[0,1,2,3].randomGet()                    
                    alert('恭喜你为'+get.translation('xjb_newCharacter')+'解锁了'+lib.config.xjb_title[i][0])
                    if(!lib.config.xjb_title[i][1].contains('xjb_newCharacter')){
                        lib.config.xjb_hunbi+=50
                        game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);
                        alert('你获得了50魂币！')
                        lib.config.xjb_title[i][1].push('xjb_newCharacter')
                        game.saveConfig('xjb_title', lib.config.xjb_title);
                        game.xjb_systemEnergyChange(-2)
                    }
                };break
                case "技能槽(1个)":{
                    lib.config.xjb_jnc++
                    game.saveConfig('xjb_jnc', lib.config.xjb_jnc);
                    alert('你当前技能槽数量为'+lib.config.xjb_jnc)
                    game.xjb_systemEnergyChange(-12)
                };break
                case "体力卡(1张，3点)":{                
                    lib.config.xjb_count['xjb_newCharacter'].HpCard.push(3)
                    game.saveConfig('xjb_count', lib.config.xjb_count);
                    var dialog=ui.create.dialog(get.translation('xjb_newCharacter')+'获得了体力卡',game.createHpCard(3))
                    dialog.style['z-index']='15'
                    setTimeout(function(){
                    dialog.close();
                    },2500)
                    game.xjb_systemEnergyChange(-20)
                };break
                case "体力卡(1张，1点)":{               
                    lib.config.xjb_count['xjb_newCharacter'].HpCard.push(1)
                    game.saveConfig('xjb_count', lib.config.xjb_count);
                    var dialog=ui.create.dialog(get.translation('xjb_newCharacter')+'获得了体力卡',game.createHpCard(1))
                    dialog.style['z-index']='15'
                    setTimeout(function(){
                    dialog.close();
                    },2500)
                    game.xjb_systemEnergyChange(-20)
                };break
                case "体力值(1点)":{
                    var hp=lib.config.xjb_newcharacter.hp
                if(hp<8){
                    lib.config.xjb_newcharacter.hp++
                            game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)    
                            alert('你现在体力值为'+lib.config.xjb_newcharacter.hp+'，重启即更新数据')
                            game.xjb_systemEnergyChange(-2*hp)
                }
                };break
                case "免费更改势力":{
                    if(!game.xjb_condition(1,6)&&boolean===false) return alert("需要6魂币，你的魂币不足")
                    var list=["key","western"].concat(lib.group.slice(0,12))
                            var word='请按以下规则输入：'
                            for(var i=0;i<list.length;i++){
                                word=word+'改为'+get.translation(list[i])+'势力，请输入'+i+'，'
                            }
                            var num=prompt(word);
                            var newgroup=list[num]
                            if(list.contains(newgroup)){
                            if(boolean===false)game.cost_xjb_cost(1,6)    
                            lib.config.xjb_newcharacter.group=newgroup
                            game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)    
                            alert("你势力已更改为："+get.translation(lib.config.xjb_newcharacter.group)+"，重启即更新数据");    
                                
                                game.xjb_systemEnergyChange(-10)
                            }
                };break
                case "免费更改性别":{
                    if(!game.xjb_condition(1,10)&&boolean===false) return alert("需要10魂币，你的魂币不足")
                    var list=['male','female','none','unknown','double']
                            var word='请按以下规则输入：'
                            for(var i=0;i<list.length;i++){
                                word=word+'改为'+get.xjb_translation(list[i])+'性，请输入'+i+'，'
                            }
                            var num=prompt(word);
                            var newsex=list[num]
                     if(list.contains(newsex)){
                            if(boolean===false)game.cost_xjb_cost(1,10)
                            lib.config.xjb_newcharacter.sex=newsex
                            game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)    
                            alert("你性别已更改为："+get.xjb_translation(lib.config.xjb_newcharacter.sex)+"，重启即更新数据");     
                         game.xjb_systemEnergyChange(-20)
                     }
                            
                };break
                case "免费更改姓名":{
                     var newname=prompt("输入你更改后的姓名");
                     if(newname){
                            lib.config.xjb_newcharacter.name2=newname
                            game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)    
                            alert("你已更名为："+lib.config.xjb_newcharacter.name2+"，重启即更新数据");
                         game.xjb_systemEnergyChange(-1)
                     }   
                };break
                default:{
                    var num= get.xjb_number(str) 
                    if(Object.keys(lib.skill).contains(str)){
                        if(game.xjb_condition(3,1)){
                        alert('你获得了技能'+get.translation(str))
                        lib.config.xjb_newcharacter.skill.add(str)
                        game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)
                        game.xjb_systemEnergyChange(-str.length-2)
                        }
                    }
                    else if(num!=NaN){
                        if(!lib.config.xjb_hunbi) lib.config.xjb_hunbi=0
                        lib.config.xjb_hunbi+=num
                        game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);
                        alert('你获得了'+num+'魂币！')
                        game.xjb_systemEnergyChange(-num)
                    }
                };break
        }
    }
    game.xjb_jiangchiUpDate=function(){
        var x=lib.config.cjb_cj_type;
        var list1=Object.keys(lib.config.xjb_list_hunbilist.choujiang[x])
        var list2=Object.values(lib.config.xjb_list_hunbilist.choujiang[x])
        var list3=Object.keys(lib.xjb_list_xinyuan.jiangchi)
        for(var i=0;i<list1.length;i++){
            var a=get.xjb_number(list2[i])
            for(var b=0;b<a;b++){
                var c=list3.randomGet()
                lib.xjb_list_xinyuan.jiangchi[c]=list1[i]
                list3.remove(c)
            }
        }
    }
    game.xjb_getCurrentDate=function(boolean){
        var date = new Date()
        var a=date.getFullYear(),b=date.getMonth()+1,c=date.getDate(),d=date.getHours(),e=date.getMinutes()
        if(boolean){
            var d=date.getDay()
            return d===0?7:d
        }
        return [a,b,c,d,e]
    };
    game.xjb_update_choujiang=function(num){
        var list=Object.keys(lib.config.xjb_list_hunbilist.choujiang[num])
        for(var i=0;i<list.length;i++){
            var before=lib.config.xjb_list_hunbilist.choujiang[num][list[i]]
            var number=get.xjb_number(before)+game.xjb_getCurrentDate(true)
            if(i==list.length-1) number=get.xjb_number(before)-i*game.xjb_getCurrentDate(true)
            lib.config.xjb_list_hunbilist.choujiang[num][list[i]]=number+'*100'
        }
     } 
    game.xjb_jiangchi_zeroise=function(){
        for(var i=0;i<100;i++){
            lib.xjb_list_xinyuan.jiangchi[i]=''
        }
    }
    game.zeroise_xjbCount=function(target){
        lib.config.xjb_count[target.name1]={
                   kill:0,
                   thunder:0,
                   fire:0,
                   ice:0,
                   loseMaxHp:0,
                   gainMaxHp:0,
                   HpCard:[],    
                   uniqueSkill:[]     
        }
    }
    //game函数
    game.createHpCard=function(num){
        if(Array.isArray(num)){
            let list=[]
            for(let i=0;i<num.length;i++){
                list.push(game.createHpCard(num[i]))
            }              
            return list
        }
        var HpCard=ui.create.div('.HpCard')
        HpCard.number=num
        HpCard.innerHTML='<img src="'+lib.xjb_list_xinyuan.path["1"]+HpCard.number+'.jpg" height="120">'
        HpCard.style['position']='relative'
        HpCard.style['top']='70px'
        HpCard.style['left']='10px'
        var word=ui.create.div('.word',HpCard)
        word.innerHTML=get.cnNumber(num)
        word.style['font-size']='23px'
        word.style['position']='relative'
        word.style['top']='-100px'
        word.style['right']='25px'
        word.style['color']='red'
        return HpCard
    }
    //技能=object(强制技恢复)
    game.xjb_EqualizeSkillObject=function(string1,object2){
        lib.skill[string1]={}
        var list=Object.keys(object2)      
        for(var i=0;i<list.length;i++){
            lib.skill[string1][list[i]]=object2[list[i]]
        }
        return lib.skill[string1]
    }
    game.updateRed=function(){
        var list=lib.config["xjb_redSkill"].list,keys=Object.keys(lib.skill)
        for(let i=0;i<list.length;i++){
            var str=list[i]
            if(!keys.contains(str.slice(13))){
                lib.config["xjb_redSkill"].list.remove(str)
                i--
            }
            else{
                game.xjb_EqualizeSkillObject(list[i],lib.skill[str.slice(13)])
                lib.skill[str].audio=false
                lib.translate[list[i]]=lib.config["xjb_redSkill"].translate[list[i]]
                lib.translate[list[i]+"_info"]=lib.config["xjb_redSkill"].translate[list[i]+"_info"]
            }
        }          
    }
    game.xjb_choujiangStr=function(object,num){
        var willget=JSON.stringify(object)   
        willget=willget.replace(/\"|'/g,"");
        if(num&&num===1){
            willget=willget.replace(/\{|}/g,"");
            willget=willget.replace(/\gainMaxHp/g,"获得体力上限");
            willget=willget.replace(/\loseMaxHp/g,"失去体力上限");
            willget=willget.replace(/\uniqueSkill/g,"特殊技能");
            willget=willget.replace(/\HpCard/g,"体力牌");
            willget=willget.replace(/\,/g,"<br>");
        }        else{
            willget=willget.replace(/\*/g,"%<br>");
            willget=willget.replace(/\{|}/g,"<hr>");
            willget=willget.replace(/\,|100/g,"");
            willget=willget.replace(/\,|1?00/g,"");
        }
        return willget
    }
    
    //get函数
    //新将包翻译
    get.xjb_translation=function(target){
        if(Array.isArray(target)){
            var spare=[]
            for(var i=0;i<target.length;i++){
                spare.push(get.xjb_translation(target[i]))
            }
            return spare
        }
        var translation
        var list1=Object.keys(lib.xjb_list_xinyuan.translate)
        var list2=Object.values(lib.xjb_list_xinyuan.translate)
        for(var i=0;i<list1.length;i++){
            if(list1[i]==target) translation=list2[i]
            if(list2[i]==target) translation=list1[i]
        }
        if(!translation){
            translation=[]
            var list3=Object.keys(lib.translate)
            var list4=Object.values(lib.translate)
            for(var i=0;i<list3.length;i++){
            if(list4[i]==target) translation.push(list3[i])
            if(list3[i]==target){
                translation=list4[i]
            } 
            }
        }
        if(typeof target=='number') translation=get.xjb_number(target)
        return translation
    }
    //新将包数字
    get.xjb_number=function(number,tarlen1,num1){
        var tarlen=tarlen1
        if(!number) return ''   
        if(typeof number=='string'){
           return  parseInt(number,10)
        }
        if(!tarlen1) tarlen=1
        
        
       var numobj={},name='选择'+get.cnNumber(tarlen)+'名角色，你'
       var num2=num1||1
       for(var i=0;i<arguments.length;i++){
           if(typeof arguments[i]==='object'){
               numobj=arguments[i]
           }
                  }
       var words1=tarlen===1?'其':'这些角色各',words2=tarlen===1?'其':'这些角色分别',wordsAdd=numobj.wordsAdd||''
       if(tarlen==-1){
           words1='所有角色'
           words2='所有角色'
           name='你'
       }        
       switch(number){
               case 1:name=name+'令'+words1+'摸'+get.cnNumber(num2)+'张牌';break;
               case 11:name=name+'令'+words1+'恢复'+get.cnNumber(num2)+'点体力';break;
               case 21:name=name+'令'+words1+'加'+get.cnNumber(num2)+'点体力上限';break;
               case 2:name=name+'弃置'+words1+get.cnNumber(num2)+'张牌';break;
               case 12:name=name+'令'+words1+'失去'+get.cnNumber(num2)+'点体力';break;
               case 22:name=name+'令'+words1+'减'+get.cnNumber(num2)+'点体力上限';break;
               case 32:name=name+'获得'+words1+get.cnNumber(num2)+'张牌';break;
               case 42:name=name+'令'+words1+'弃置'+get.cnNumber(num2)+'张牌';break;
               case 3:name=name+'令'+words2+'重置之';break;
               case 13:name=name+'令'+words2+'横置之';break;
               case 23:name=name+'令'+words2+'获得技能'+get.translation(numobj.skills);break;
               case 33:name=name+'令'+words2+'获得技能'+get.translation(numobj.skills);break;           
               case 83:{
                   name=name+'令'+words2+'视为拥有技能'+get.translation(numobj.skills)
               };break;
               case 113:name=name+'令'+words2+'获得一个Debuff';break;
               case 123:name=name+'令'+words2+'获得一个Buff';break;
               case 153:name=name+'令'+words2+'正面朝上';break;
               case 163:name=name+'令'+words2+'背面朝上';break;
               case 173:name=name+'令'+words2+'翻面';break;
               case 4:name=name+'对'+words1+'造成'+get.cnNumber(num2)+'点火属性伤害';break;
               case 14:name=name+'对'+words1+'造成'+get.cnNumber(num2)+'点雷属性伤害';break;
               case 24:name=name+'对'+words1+'造成'+get.cnNumber(num2)+'点冰属性伤害';break;  
               case 34:name=name+'对'+words1+'造成'+get.cnNumber(num2)+'点神属性伤害';break;
               case 44:{
                   name=name+'对'+words1+'造成'+get.cnNumber(num2)+wordsAdd+'点伤害'
               };break;               
       }
        return name
    }
        
    
    //新事件
    lib.element.player.xjb_getAllCards=function(str){
        var cards=[],player=this
        for(var i=0;i<player.getCards(str).length;i++){
            cards.push([player.getCards(str)[i].name,
            player.getCards(str)[i].suit,
            player.getCards(str)[i].number,
            player.getCards(str)[i].nature])
        }
        return cards
    }
    //强制技效果
    lib.element.player.gain_noskill=function(){
        var player=this
        var list1=Object.keys(player.noskill)
        var list2=Object.keys(player.noskill_translate)    
        var list3=Object.values(player.noskill_translate)
        for(var i=0;i<list1.length;i++){
            game.xjb_EqualizeSkillObject(list1[i],player.noskill[list1[i]])
        }
        for(var i=0;i<list2.length;i++){
            lib.translate[list2[i]]=list3[i]
        }
        player.noskill={}
    }
    //失去体力至
    lib.element.player.xjb_loseHpTo=function(num){
        var player=this,number=player.hp-num||1
        if(num<0) number=1
        player.loseHp(number)
    }
    //展示体力牌
    lib.element.player.showHpCard=function(){
        var Array=[],String
        for(var i=0;i<arguments.length;i++){
            if(typeof arguments[i]=='number'){
                if(arguments[i]>5){
                    var num=arguments[i]
                    num-=num%5
                    num=num/5
                    for(var i=0;i<num;i++){
                        Array.push(5)
                    }
                }
                else if(arguments[i]<1){}
                else Array.push(arguments[i])
            }
            else if(typeof arguments[i]=='string') String=arguments[i]
        }
        if(!String)String=get.translation(this.name1)+'展示了体力牌：'
        var dialog=ui.create.dialog('<div class="text center" >'+String+'</div>');
        for(var i=0;i<Array.length;i++){
            var HpCard=game.createHpCard(Array[i])
            dialog.add(HpCard)
        }       
        setTimeout(function(){
                dialog.close();
        },2500)
    }
    //调整手牌至
    lib.element.player.xjb_adjustHandCardTo=function(num,str){
        var player=this
        var hlen=player.countCards("h")
        if(hlen>num){
            player.chooseToDiscard(hlen-num,true)
        }
        else if(hlen<num){
            if(str)player.gain(get.cards(num-hlen),"draw").gaintag.add(str)
            else player.gain(get.cards(num-hlen),"draw")
        } 
    }
    lib.element.player.giveHpCard=function(target,num){
        
        if(!lib.config.xjb_count[target.name].HpCard)lib.config.xjb_count[target.name].HpCard=[]
        var player=this 
        if(!num) num=player.maxHp    
        var count=player.maxHp      
        var num1=Math.min(num*5,player.maxHp)    
        var num2=Math.min(num*5,player.hp)    
        player.loseMaxHp(num1)      
        player.loseHp(num2)      
        target.recover(num2)       
        if(player.maxHp%5!=0){      
            var x=player.maxHp%5   
            lib.config.xjb_count[target.name].HpCard.push(x)     
            count-=player.maxHp%5 
        } 
        var times=count/5    
        for(var i=0;i<times;i++){      
            lib.config.xjb_count[target.name].HpCard.push(5)    
        }  
        player.showHpCard(x,count,get.translation(target.name1)+'获得体力牌：')      
        game.saveConfig('xjb_count', lib.config.xjb_count);
    }
    //使用体力牌
    lib.element.player.useHpCard = function(num,source){
        var player=this,number=num
        if(!source)source=player
        var name=source.name1
        if(!lib.config.xjb_count[name].HpCard) lib.config.xjb_count[name].HpCard=[]  
        if(!lib.config.xjb_count[name].HpCard.length){
            return
        }
        var x=lib.config.xjb_count[name].HpCard[number]
        if(!x){
            number=0
           x=lib.config.xjb_count[name].HpCard[number]  
        } 
        player.gainMaxHp(x)
        player.changeHp(x)
        lib.config.xjb_count[name].HpCard.splice(number--,1)
        player.showHpCard(x,get.translation(player.name1)+'使用了体力牌：')
        game.saveConfig('xjb_count', lib.config.xjb_count);
    }
    //S状态更改
    lib.element.player.changeS=function(num){
        var player=this
        if(!player.hasSkill('skill_off')){
            if(num&&num==1)player.addSkill('skill_off')
            else player.addTempSkill('skill_off')
            return
        }            
        player.removeSkill('skill_off')
    }
    lib.element.player.changeS2=function(boolean,num){
        var player=this
        if(boolean&&boolean==true){
            if(num&&num==1)player.addSkill('skill_off')
            else player.addTempSkill('skill_off')
            return
        }            
        player.removeSkill('skill_off')
    }
    //X技相关
    lib.element.player.fc_X=function(){
        var player=this
        var boolean,Array1=[],object={},Array2=[],Array3=[]
        for(var i=0;i<arguments.length;i++){                   
            if(Array.isArray(arguments[i])) Array2=arguments[i]
            else if(typeof arguments[i]=='number'){
                if(arguments[i]===0){}
                else Array1.push(arguments[i])
            } 
            else if(typeof arguments[i]=='string') Array3.push(arguments[i])
            else if(typeof arguments[i]==='boolean')boolean=arguments[i]
            else if(typeof arguments[i]==='object')object=arguments[i]
        } 
        //onlyme检测
        if(boolean==true) player.storage._skill_xin_X[4]=['onlyme','again'].concat(Array3)
        else player.storage._skill_xin_X[4]=['again'].concat(Array3)//将字符串放在4区(event.unique)
        //1区设置(event.do)
        player.storage._skill_xin_X[0]=Array1.shift()
        //2区设置(event.num)
        player.storage._skill_xin_X[1]=Array2[0]
        
        //7区设置(event.else)
            player.storage._skill_xin_X[7]=object
            player.storage._skill_xin_X[7].redo=Array1
            player.storage._skill_xin_X[7].redo2=Array2
            player.update()
            //使用X技
            player.useSkill('skill_X')
      }
    //标签检索牌
    lib.element.player.seekTag1=function(String){
        var player=this
        var gain=get.cardPile2(function(card){
              return get.tag(card,String);
        });
        if(gain){
           player.gain(gain,'gain2');
        }  
        game.updateRoundNumber();
    }
    lib.element.player.seekTag2=function(String){
        var player=this
            var gain=get.discardPile(function(card){
              return get.tag(card,String);
            });
            if(gain){
            player.gain(gain,'gain2');
            }  
        
        game.updateRoundNumber();
    }
    //使用名臣技
    lib.element.player.usechenSkill=function(){
        var player=this
        var list=[]
        var skills=player.getSkills();
        for(var i=0;i<skills.length;i++){
            if(lib.skill[skills[i]].chenSkill){        
            list.push(skills[i])
        }
        }
        if(list.length>0){ 
            for(var i=0;i<list.length;i++){
                player.addMark('_xin_junzhu');
                player.useSkill(list[i])                
            }
        }
    }
    lib.element.player.xjb_noskill=function(skillname){
        var player=this
        if(Array.isArray(skillname)){
            for(var i=0;i<skillname.length;i++){
                player.xjb_noskill(skillname[i])
            }
            return
        }        
        if(lib.skill[skillname].noskill!=undefined) return
        if(!player.noskill)player.noskill={}
        player.noskill[skillname]=lib.skill[skillname]
        player.noskill_translate[skillname+'_info']=lib.translate[skillname+'_info']
        lib.skill[skillname]={
            noskill:true
        }
        lib.translate[skillname+'_info']='已被强制技封印'
    }
    //随机获得技能
    lib.element.player.addSkillrandom=function(){
        var player=this,temp=false,list=lib.skilllist,skills=[]
        for(var i=0;i<arguments.length;i++){
            if(typeof arguments[i]==='boolean'){
                temp=true          
            } 
            else if(typeof arguments[i]==='object') var expire=arguments[i]
            else if(typeof arguments[i]=='string') var need=arguments[i]
            else if(typeof arguments[i]=='number') var num=arguments[i]
        }   
        for(var a=0;a<list.length;a++){
            var info=lib.skill[list[a]]
            if(list[a].endsWith('_roundcount'))list.splice(a--,1)
            else if(!info||info.sub||info.hiddenSkill) list.splice(a--,1)
            else if(!lib.translate[list[a]])list.splice(a--,1)
            else if(!lib.translate[list[a]+'_info'])list.splice(a--,1)
        }
        skills=skills.concat(list)
        for(var b=0;b<skills.length;b++){
            var info=lib.skill[skills[b]]
            if(need){
                if(!info[need])skills.splice(b--,1)
                else if(player.hasSkill(skills[b]))skills.splice(b--,1)
            }
        }
        var skill=skills.randomGet()
        if(lib.skill[skill].limited)player.restoreSkill(skill)
        if(num){
            if(num>0){
                player.gainMaxHp()
                player.draw(2)
            }
            if(num>1){
                player.recover()
                player.changeHujia()
            }
            if(num>2&&lib.skill[skill].juexingji){
                player.storage.addSkillrandom_filter=true
                 if(!lib.skill[skill].addSkillrandom_filter)lib.skill[skill].addSkillrandom_filter=lib.skill[skill].filter
                lib.skill[skill].filter=function(event,player){
                    if(player.storage.addSkillrandom_filter)return true
                    return this.addSkillrandom_filter.apply(this,arguments);
                }
            }
        }        
        if(temp==true)player.addTempSkill(skill,expire)
        else player.addSkill(skill)
        player.popup(skill)        
        game.log(player,'获得了技能〖'+get.translation(skill)+'〗')
        return skill
    }
   //回合统计
    lib.element.player.countPhase=function(){
        return this.storage.countPhase.length-1
    }
    //特殊技能1   
    lib.skill._xin_junzhu={
        superCharlotte:true,
        charlotte:true,
        fixed:true,
        marktext:"君",
        intro:{
           content:"因君主技而发动",
       },
    }
    lib.skill._xin_bianshen={         
    marktext:"变",
    intro:{
        name:"变",
        content:"已变身",
    },   
    },
    lib.skill._xjb_shuaxin={
        enable:"phaseUse",
        charlotte:true,
        filter:function(){
        return true
        },
        content:function(){
        player.update()
        },
    }  
    lib.translate._xjb_shuaxin="刷新"
    lib.skill.xjb_penglai={
        init:function(player,skill){        
        if(!player.storage.xjb_card_allow['xjb_penglai']) return      
        player.turnOver()
        player.storage[skill]=player.maxHp
        game.log(player,'忽闻海外有仙山，上联青云九霄天，下通沟壑九幽界。隐隐云窈窕，我得神皇药。');
        player.$epic()    
        player.maxHp=Infinity;
        player.hp=Infinity        
        },
        onremove:function(player,skill){
        var maxHp=player.storage[skill]||3
        player.maxHp=maxHp
        if(player.storage.xjb_card_allow['xjb_penglai']){
            player.storage.xjb_card_allow['xjb_penglai']=false
        }
        },
    }
    lib.translate.xjb_penglai="蓬莱"    
    lib.skill.skill_off={
            hidden:true,
            init:function(player){
                player.popup('S之')
                game.log(player,'S之')
            },
            onremove:function(player){
                player.popup('取消S之')
                game.log(player,'取消S之')
            }
    },
    //noskill    
    lib.skill.skill_noskill={        
    init:function(player,skills){
        var name=player.name1,list=lib.character[name][3]
        var skillname=list.randomGet()
        game.print(skillname)
        player.xjb_noskill(list)
    },
    onremove:function(player,skills){
        player.gain_noskill()
    }    
    }  
    //全局技能
    lib.skill._UseHpCard={
        trigger:{
            player:"dieBefore",
        },
        direct:true,
        filter:function(event,player){
            if(player.canUseHpCard===false) return false
        var name=player.name1     
        if(!lib.config.xjb_count[name]) return false
        if(!lib.config.xjb_count[name].HpCard||!lib.config.xjb_count[name].HpCard.length)return false
         return true
        },
        
        content:function(){
            "step 0"            
            var name=player.name1            
            var next=player.chooseControl(lib.config.xjb_count[name].HpCard,"取消")
            next.set('prompt','请选择你使用的体力牌的点数')
            "step 1"
            if(result.control=="取消"){event.finish()}
            else{
            var name=player.name1
            for(var i=0;i<lib.config.xjb_count[name].HpCard.length;i++){
                if(lib.config.xjb_count[name].HpCard[i]==result.control){
                    player.useHpCard(i)
                    break
                }                
            }
                }
            "step 2"
            if(player.hp<=0){
                var name=player.name1
                if(lib.config.xjb_count[name].HpCard.length>0) event.goto(0)
            }
            else if(player.hp>0) trigger.cancel()
        },
    }    
        
    lib.skill._damage_jxbhunbi={
        trigger:{
            source:["damageEnd"],
        },
        popup:false,
        forced:true,
        superCharlotte:true,
        charlotte:true,
        fixed:true,
        filter:function(event,player){
           if(!lib.config.xjb_hun)  return false  
           if(player!=game.me)return false
           if(!event.nature) return false
            return true
        },
        content:function(){
            var nature=trigger.nature
            var i
            switch(nature){
                    case 'thunder':i=2;break;
                    case 'fire':i=1;;break;
                    case 'ice':i=3;break;
            }
            var name=player.name;
            if(!lib.config.xjb_count[name])game.zeroise_xjbCount(player)
            if(lib.config.xjb_count[name][nature]==undefined) lib.config.xjb_count[name][nature]=0
            lib.config.xjb_count[name][nature]+=trigger.num
            game.saveConfig('xjb_count', lib.config.xjb_count);
            game.log(player,nature+'值为'+lib.config.xjb_count[name][nature])
            if(lib.config.xjb_count[name][nature]>=100&&!lib.config.xjb_title[i][1].contains(name)){
                lib.config.xjb_hunbi+=50
                game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);
                alert('恭喜'+get.translation(name)+'解锁了'+lib.config.xjb_title[i][0])
                lib.config.xjb_title[i][1].push(name)
                game.saveConfig('xjb_title', lib.config.xjb_title);
            }
        }
    }    
    lib.skill._jisha_jxbhunbi={
        trigger:{
        global:["dieBefore"],
        },
        popup:false,
        forced:true,
        superCharlotte:true,
        charlotte:true,
        fixed:true,
        filter:function(event,player){
           if(!lib.config.xjb_hun)  return false  
           if(player!=game.me)return false
           if(_status.currentPhase!=player) return false
           return true
        },
        content:function(){    
            lib.config.xjb_hunbi++
            game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);
            game.log('你的魂币+1')
            var name=trigger.player.name1
            
            var name=player.name1;
            if(!lib.config.xjb_count[name])game.zeroise_xjbCount(player)
            lib.config.xjb_count[name].kill++
            game.saveConfig('xjb_count', lib.config.xjb_count);
            game.log(player,'kill值为'+lib.config.xjb_count[name].kill)
            if(lib.config.xjb_count[name].kill>=100&&!lib.config.xjb_title[0][1].contains(name)){
                lib.config.xjb_hunbi+=50
                game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);
                alert('恭喜'+get.translation(name)+'解锁了'+lib.config.xjb_title[0][0])
                lib.config.xjb_title[0][1].push(name)
                game.saveConfig('xjb_title', lib.config.xjb_title);
            }
        }
    }
    lib.skill._xjb_huobi={
        trigger:{
            player:["useCardAfter","respond"],
        },
        direct:true,
        num1:0,
        num2:0,
        num:0,
        content:function(){
            if(trigger.card.number){
                lib.skill._xjb_huobi.num+=trigger.card.number
                lib.skill._xjb_huobi.num1+=trigger.card.number
                lib.skill._xjb_huobi.num2+=trigger.card.number
                if(lib.skill._xjb_huobi.num1>500){
                    lib.skill._xjb_huobi.num1=0
                    var card=game.createCard2("xjb_tianming_huobi1","black",13)
                    ui.cardPile.insertBefore(card,ui.cardPile.childNodes[get.rand(0,ui.cardPile.childNodes.length)]);
                }
                if(lib.skill._xjb_huobi.num2>2000){
                    lib.skill._xjb_huobi.num2=0
                    var card=game.createCard2("xjb_tianming_huobi2","red",1)
                    ui.cardPile.insertBefore(card,ui.cardPile.childNodes[get.rand(0,ui.cardPile.childNodes.length)]);
                }
            }
        }
    }
    lib.translate._xjb_huobi="货币"
    //初始化
    lib.skill._tianxing={
    nobracket:true,
    trigger:{
        global:["gameStart"],
    },
    popup:false,
    forced:true,
    superCharlotte:true,
    charlotte:true,
    fixed:true,    
    content:function(){    
        game.countPlayer(function(current){
            current.storage._skill_xin_X=[1,1,1,[],[],[],[]]
            current.storage.xjb_card_allow={}
            current.noskill={}
            current.noskill_translate={}
            //建X_skill区，[0]代表执行项目，[1]代表角色数目，[2]代表执行次数，[3]代表禁止武将，[4]代表限制条件，[5]修改其他五区，[6]控制[5]区(套娃)
        })
        if(player===game.me){
            if(lib.config.xjb_chupingjisha===1)lib.xjb_list_xinyuan.theFunction.xjb_chupingjisha()
        }
    },
    },
    lib.skill._unique_talent_xjb={
        trigger:{
            global:"roundStart",
        },
        direct:true,
        content:function(){
            if(player.storage.xjb_unique_talent==undefined) return
            if(player.storage.xjb_unique_talent.length>0){
                for(var i=0;i<player.storage.xjb_unique_talent.length;i++){
                    if(player.storage.xjb_unique_talent[i][0]==game.roundNumber){
                        var skill=player.storage.xjb_unique_talent[i][1]
                        player.removeSkill(skill)
                        player.update()
                    }
                }                    
            }
        }
    }   
    
    lib.skill.xjb_redSkill={
        init:function(player,skill){
            player.die=function(){
                
                if(game.me!=player){
                player.revive(player.maxHp)
                player.update()
                }  
                else if(confirm("【玩家死亡，是否复活？】")){
                    if(!lib.config.xjb_redSkill.dieTimes){lib.config.xjb_redSkill.dieTimes=0}
                    lib.config.xjb_redSkill.dieTimes++
                    game.saveConfig("xjb_redSkill",lib.config.xjb_redSkill)
                player.revive(player.maxHp)
                player.update()
                }
                else{
                    var target=lib.config[skill],length=Object.keys(lib.config[skill].skill).length
                target.skill[length]={}
                target.skill[length].list=target.list
                target.skill[length].translate=target.translate
                target.list=[]
                target.translate={}
                game.saveConfig(skill,lib.config[skill])
                lib.element.player.die.apply(this,[])
                }
            }
        },
    trigger:{
        global:"gameStart",
        player:"phaseBefore"
    },
    baned:lib.xjb_list_xinyuan.skills.red.concat(
           "rehuashen",
           "boss_xjb_start"
           
          ),
    forced:true,   
    content:function(){
        let Array=[],skill="xjb_redSkill"
        game.countPlayer(function(current){
           if(current.getSkills){
               Array=Array.concat(current.getSkills(null,false,false))
            } 
            })
        Array=Array.filter(function(ok){
            return !lib.skill[skill].baned.contains(ok)&&lib.skill[ok].sub==undefined&&!player.hasSkill(ok)
        })
        if(Array.length>30)Array.splice(0,30)
        for(var i=0;i<Array.length;i++){
            if(!lib.skill[skill][Array[i]])lib.skill[skill][Array[i]]=0
            Array[i]=Array[i]+"After"
            
        }
        lib.skill[skill].trigger.global=Array
        if(lib.skill[skill][trigger.name]!=undefined){
            if(lib.skill[skill][trigger.name]<20){lib.skill[skill][trigger.name]+=10}
            else if(lib.skill[skill][trigger.name]<30){lib.skill[skill][trigger.name]+=5}
            else if(lib.skill[skill][trigger.name]<100){lib.skill[skill][trigger.name]+=1}
        }
        var theNumber=lib.skill[skill][trigger.name]/1000
        if(Math.random()<theNumber){
            let toget=event.name+"_"+trigger.name
            if(!player.hasSkill(toget)&&!["rehuashen","game","phase"].contains(trigger.name)){
                lib.config[skill].list.add(toget)
                lib.config[skill].translate[toget]=lib.translate[trigger.name]
                lib.config[skill].translate[toget+"_info"]=lib.translate[trigger.name+"_info"]
                game.saveConfig(skill,lib.config[skill])
                game.updateRed()
                player.addSkill(toget)
                if(player==game.me)alert(`【系统提示：发现技能"${get.translation(toget)}"，已记录在技能目录中】`)
            }
        }
        player.removeSkill(skill)
        player.addSkill(skill)
        
    },   
    
} 
    lib.translate.xjb_redSkill="幻想乡OL"
    lib.translate.xjb_redSkill_info="①习得他人技能的能力②被人称为\"小红\"程度的能力"
    //基本技能
    lib.skill.skill_X={
        trigger:{
            player:'phaseBegin',
        },
    charlotte:true,     
    direct:true,
    popup:false,
        content:function(){
          'step 0'
          //载入存在storage的数据
           event.do=player.storage._skill_xin_X[0]||1;
           event.num=player.storage._skill_xin_X[1]||1;
           event.count=player.storage._skill_xin_X[2]||1;
           event.ban=player.storage._skill_xin_X[3];
           event.unique=player.storage._skill_xin_X[4]||[];
           event.change=player.storage._skill_xin_X[5];
           event.control=player.storage._skill_xin_X[6];
           event.else=player.storage._skill_xin_X[7]||{}
           'step 1'
           event.count--
           if(event.num==0) event.goto(4)
           if(trigger&&trigger.player)event.do=trigger.player.storage._skill_xin_X_locked
           'step 2'
           //处理num数据(选择角色数，事件数值)
           var name,num1,num2
           if(event.unique.contains('num_2')&&event.do%10!==3){
               num1=1
               num2=event.num
           }
           else{
               num1=event.num
               num2=1
           }
           if(event.do===33) num1=event.else.skills.length
           //处理prompt
           name=get.xjb_number(event.do,num1,num2,event.else)
            if(event.else.promptAdd) name=name+event.else.promptAdd
            if(event.unique.contains('draw')) name=name+'然后再同时摸一张牌'
            //检测用途，选择分支
            if(event.unique.contains('choose')){
                var choice
                 if(event.else.skills&&event.do===23) choice=event.else.skills
                 if(event.else.identity&&event.do===43) choice=event.else.identity
                 if(event.unique.contains('needResult')) choice=event.else.choice
                 if(event.unique.contains('getNumber')) choice=event.else.getNumber
                 var next=player.chooseControl(choice)
                 var chopro=event.else.chopro||'请选择一项'
                 next.set('prompt',chopro)
                 next.set('ai',function(){
                        return choice.randomGet()
                 })
            }
            //检测用途，指定角色分支
            if(!event.unique.contains('onlyme')){
            var next=player.chooseTarget([1,num1])
            next.set('prompt',name)
            next.set('filterTarget',function(card,player,target){
               if(event.ban.contains(target)) return false
               if(event.do==11&&target.hp==target.maxHp)return false;
               if(event.do==2&&target.countCards('he')==0)return false;
               if(event.do==32&&target.countCards('he')==0)return false;
               if(event.do==42&&target.countCards('he')==0)return false;
               if(event.do==3&&!target.isLinked())return false;
               if(event.do==13&&target.isLinked())return false; 
               if(event.unique.contains('linked')&&!target.isLinked())return false; 
               if(event.unique.contains('other')&&target==player)return false;
               return true;
            })
            next.set('ai',function(target){
                //利用余数写ai
            var player=_status.event.player;
            if(event.do%10==1)return get.attitude(player,target);
            if(event.do==3)return get.attitude(player,target);   
            if(event.do==13)return -get.attitude(player,target);      
            if(event.do%10==2)return  -get.attitude(player,target);   
            if(event.do%10==4)    return get.damageEffect(target,player,player)
            }) 
            }            
        'step 3'
        //选择分支
        if(event.unique.contains('needResult')){
            player.storage._skill_xin_X=[event.do,1,1,event.ban,[],[],[]]
            if(event.else.storage){
                var storage=event.else.storage
                player.storage[storage]=result.control;                
            } 
            return
        }
        else if(event.unique.contains('getNumber')){
            event.do=Number(result.control)===result.control?result.control:1
        }     
            //事件分支
            //角色处理
            if(result.bool)var targets=result.targets.slice(0)
            if(event.unique.contains('onlyme')){
                var targets=event.else.onlyme?event.else.onlyme:[player]
            }
            //再执行处理
            if(!event.unique.contains('num_2')&&event.else.redo2){
               var tarlen=event.else.redo2.length
               if(event.unique.contains('again')&&targets.length>event.else.redo2[tarlen])targets.length=event.else.redo2[tarlen]||1            
               }
            //执行事件
        if(targets&&targets.length){      
            if(event.unique.contains('draw')) game.asyncDraw(targets)   
            if(event.unique.contains('num_2')&&event.do%10!==3){
               var num=event.num
            }
            else var num=1
            for(var i=0;i<targets.length;i++){   
                if(event.unique.contains('baiban_temp')) targets[i].addTempSkill('baiban')  
                if(event.unique.contains('noskill_temp')) targets[i].addTempSkill('skill_noskill')
                if(event.unique.contains('usechenSkill')) targets[i].usechenSkill()
                if(event.unique.contains('S')) targets[i].changeS2(true)
                if(event.unique.contains('deS')) targets[i].changeS2()
                if(event.unique.contains('changeS_1')) targets[i].changeS(1)
                switch(event.do){
                    case 1:targets[i].draw(num,player);break;
                    case 11:targets[i].recover(num,player);break;    
                    case 21:targets[i].gainMaxHp(num);break;
                    case 31:targets[i].insertPhase();break;    
                    case 41:{
                        for(var a=0;a<num;a++){
                            targets[i].useCard(game.createCard("wuzhong","heart",5),'nowuxie',targets[i])
                        }
                    };break;     
                    case 2:player.discardPlayerCard(targets[i],num,'he',true);break;      ;
                    case 12:targets[i].loseHp(num);break;     
                    case 22:targets[i].loseMaxHp(num).source=player;break;           
                    case 32:player.gainPlayerCard(targets[i],true,num,'he');break;
                    case 42:targets[i].chooseToDiscard('he',1,true);break;   
                    case 52:{
                        targets[i].loseHp(num).source=player                        
                    };break   
                    case 62:{
                        for(var a=0;a<num;a++){
                            var card=game.createCard("du","club",1)
                            targets[i].gain(card)
                            targets[i].useCard(card,targets[i])
                        }                        
                    };break   
                    case 3:{
                        if(targets[i].isLinked())targets[i].link()
                    };break;
                    case 13:{
                        if(!targets[i].isLinked())targets[i].link()
                    };break;
                    case 23:{
                        if(result.control&&event.unique.contains('choose')){
                            targets[i].addSkill(result.control)
                        } 
                        else{
                            for(var a=0;a<event.else.skills.length;a++){
                               targets[i].addSkill(event.else.skills[a])                      
                            }
                        }
                    };break;        
                    case 33:targets[i].addSkill(event.else.skills[i]);break;
                    case 43:{
                        var identity
                        if(result.control&&event.unique.contains('choose')) identity=result.control
                        else identity=event.else.identity[0]
                        targets[i].identity=identity
                        if(targets[i]==game.me)targets[i].setIdentity(identity)
                        targets[i].update()
                    };break;    
                    case 53:{
                        targets[i].identity=event.else.identity[i]
                        if(targets[i]==game.me)player.setIdentity(event.else.identity[i])
                        targets[i].update()
                    };break;    
                    case 63:{
                        targets[i].showCharacter(2)
                        targets[i].maxHp=4
                        targets[i].hp=4
                        targets[i].enableJudge()
                        for(var a=1;a<6;a++){
                           targets[i].enableEquip(a)
                        }                
                        targets[i].changeHujia(-9999)
                        targets[i].addSkill('baiban')
                        targets[i].link(false)
                        targets[i].turnOver(false)
                        targets[i].update()
                    };break;   
                    case 73:{
                        targets[i].showCharacter(2);
                        targets[i].enableJudge()
                        for(var a=1;a<6;a++){
                            targets[i].enableEquip(a)
                        }
                        var name=targets[i].name1
                        var p=get.infoHp(lib.character[name][2])
                        var mp=get.infoMaxHp(lib.character[name][2])
                        var skills=lib.character[name][3]
                        targets[i].maxHp=mp
                        targets[i].hp=p
                        targets[i].update()
                        for(var i=0;i<skills.length;i++){
                            targets[i].addSkill(skills[i])              
                         }
                    };break; 
                    case 83:{
                        var expire={player:"phaseAfter"}                 
                        if(event.else.expire)expire=event.else.expire
                        if(result.control&&event.unique.contains('choose')){
                            var str=result.control
                            if(event.unique.contains('ootSkill')) expire={player:str+"After"}
                            targets[i].addTempSkill(str,expire)
                        } 
                        else{
                            for(var a=0;a<event.else.skills.length;a++){
                                var str=event.else.skills[a]
                               if(event.unique.contains('ootSkill')) expire={player:str+"After"}
                               targets[i].addTempSkill(str,expire)                      
                            }
                        }
                    };break;     
                    case 103:{
                        var hp1=player.hp,hp2=targets[i].hp,mp1=player.maxHp,mp2=targets[i].maxHp
                        player.maxHp=mp2
                        player.hp=hp2
                        player.update()
                        targets[i].maxHp=mp1        
                        targets[i].hp=hp1
                        targets[i].update()
                    };break;    
                    case 113:targets[i].getDebuff();break;
                    case 123:targets[i].getBuff();break;    
                    case 133:{
                        if(result.control&&event.unique.contains('choose')){
                            targets[i].awakenSkill(result.control);
                        } 
                        else{
                            for(var a=0;a<event.else.awaken.length;a++){
                               targets[i].awakenSkill(event.else.awaken[a])                      
                            }
                        }
                    };break;  
                    case 143:{
                        if(result.control&&event.unique.contains('choose')){
                            targets[i].removeSkill(result.control);
                        } 
                        else{
                            for(var a=0;a<event.else.remove.length;a++){
                               targets[i].removeSkill(event.else.remove[a])                      
                            }
                        }
                    };break;    
                    case 153:{
                        if(targets[i].isTurnedOver())targets[i].turnOver()
                    };break;
                    case 163:{
                        if(!targets[i].isTurnedOver())targets[i].turnOver()
                    };break;
                    case 173:{
                        targets[i].turnOver()
                    };break;    
                    case 4:targets[i].damage(num,'fire',player);break;
                    case 14:targets[i].damage(num,'thunder',player);break;
                    case 24:targets[i].damage(num,'ice',player);break;
                    case 34:targets[i].damage(num,'kami',player);break;
                    case 44:{
                        if(event.else.nature&&event.else.nature.length){
                            var nature=event.else.nature[0]
                            targets[i].damage(num,nature,player)
                        }
                        else targets[i].damage(num,player)
                    };break;        
                }             
            }
            }
            if(event.unique.contains('again')){
                if(event.else.redo.length){
                    event.do=event.else.redo.shift()
                    if(event.else.redo2.length){
                        event.num=event.else.redo2.shift()
                        
                    }
                    event.redo()
                }
            }
            'step 4'            
            //5区调控事件
            if(event.change.length){
            for(var a=0;a<event.change.length;a++){
                switch(event.change[a][0]){
                     case 0:event.do=event.change[a][1];break;
                     case 1:event.num=event.change[a][1];break   
                     case 2:event.count=event.change[a][1];break   
                     case 3:event.ban=event.change[a][1];break   
                     case 4:event.unique=event.change[a][1];break   
                     case 6:event.control=event.change[a][1];break
                     case 7:event.else=event.change[a][1];break
               }
            }           
            }
            'step 5'
            //6区调控5区
            if(event.count>0){
                event.change=event.control
                event.goto(1)
            } 
            else player.storage._skill_xin_X=[event.do,1,1,event.ban,[],[],[]]//重置数据
        },
    }//回合统计     
    lib.skill._xin_countPhase={
    trigger:{
        player:"phaseBefore",
        global:"roundStart",
    },
    superCharlotte:true,
    charlotte:true,
    fixed:true,
    forced:true,
    popup:false,
    priority:1000,
    content:function (){
        if(player.storage.countPhase==undefined||event.triggername=='roundStart'){         
           player.storage.countPhase=[];
        }    
           var num=player.storage.countPhase.length;
           player.storage.countPhase.push(num);     
           if(event.triggername=='phaseBefore')game.log(player,'第'+get.cnNumber(game.roundNumber)+'轮，第'+get.cnNumber(num)+'个回合开始');                        
    },
    }
    //翻译内容
    lib.characterIntro.xjb_zhangliang_liuhou="张良，字子房，祖、父共任韩国五代相，秦灭汉，张良曾刺始皇帝于博浪沙中，失败后，亡匿下邳。\
    曾遇黄石公刁难，忍之，遂得《太公兵法》一部。张良跟从刘邦出谋划策，为平定天下做出了卓越贡献。\
    汉高祖在封功臣时，说他：“运筹策帷帐中，决胜千里外。”让他“自择齐三万户”，张良拒绝，独留留地，被封为留侯。\
    定都关中后，张良体弱多病，修辟谷道引之术，险些饿死。\
    时刘邦宠爱戚夫人，欲立赵王刘如意，吕后担心自己儿子刘盈被废，求计于张良，刘盈最后保住了太子之位。"
    lib.characterIntro.xjb_yingzheng="秦始皇，赵氏嬴姓，名政，是我国的第一位皇帝。\
    他年少继位，\
    奋六世之余烈，振长策而御宇内，吞二周而亡诸侯，履至尊而制六合，执敲扑而鞭笞天下，威震四海。\
    "
    lib.group.push('han')
    lib.translate.han='汉'
    lib.translate.hanColor='#FF6347'   
    lib.translate.xjb_unique="新将",
    lib.translate.xjb_unique_skill="技能卡",   
    lib.translate.xjb_unique_talent="天赋卡" ,         
    lib.translate.xjb_unique_money="货币卡"    
    lib.translate.xjb_unique_usual="效用卡",
    lib.translate.xjb_chidan='赤胆忠心'
    lib.translate.xjb_fengyun='风云荟萃'
    lib.translate.xjb_zaiwu='天命在吾'
    lib.translate.xjb_tiandu='天妒英才'
    lib.translate.xjb_jincui='鞠躬尽瘁'
    lib.translate.xjb_guijin='三分归晋'
    lib.translate.xjb_huahao='花好月圆'
    lib.translate.xin_meng0='种植'
    lib.translate.xin_meng1='畜牧'
    lib.translate.xin_meng2='医药'
    lib.translate.xin_meng3='商业'
    lib.translate.xin_meng4='冶金'
    lib.translate.xin_meng5='手工'
    lib.translate.xin_shinu='狮怒'
    lib.translate.xin_yanyue='偃月'
    lib.translate.xin_zhuihun='追魂'
    lib.translate.xin_mousheng_K='谋圣_锦囊'
    lib.translate.xin_mousheng_7='谋圣_基本'
    lib.translate.xin_mousheng_2='谋圣_装备'
    lib.translate.xin_xuefa_shan='血法_闪'
    lib.translate.xin_xuefa_sha='血法_杀'
    lib.translate.xin_xuefa_jiu='血法_酒'
    lib.translate.xin_xuefa_tao='血法_桃'
    lib.translate.xin_xuefa_tao_info="每回合限一次，你可视为使用或打出一张【桃】"
    lib.translate.xin_xuefa_wuxie='血法_无懈可击'
    lib.translate.xin_xuefa_shunshou='血法_顺手牵羊'
    lib.translate.xin_qinnang2='青囊2'
    lib.translate.xin_qinnang1='青囊1'
    lib.translate.xin_xuming='续命'
    lib.translate.xjb_bingjue='冰诀'
    lib.translate._UseHpCard='体力牌'
    lib.translate.xjb_bingjue_info='出牌阶段限一次，你可弃置所有梅花手牌，然后获得等量张冰【杀】，你使用冰【杀】无次数限制。'
    lib.translate.xin_qimen_1_info='摸牌阶段，你改为摸X张牌(X为你本轮进行的回合数)？？？'
    lib.translate.xin_qinnang2_info='出牌阶段限一次，你可对一名角色使用任意张【桃】，你以此法你每使用一张【桃】，你和其各摸一张牌。'
    lib.dynamicTranslate["xin_tanyan"]=function(player) {
        var num=player.countMark('xin_tanyan')+1||1
        return '君主子技，出牌阶段限一次，你可交给有〖归心〗的角色'+get.cnNumber(num)+'张红色牌，然后你视为使用'+get.cnNumber(num)+'张【酒】。'
    },
    lib.dynamicTranslate["xin_mousheng"]=function(player) {
        return '你拼点时，可直接将一张点数为'+get.strNumber(game.roundNumber)+'的：锦囊牌/基本牌/装备牌，作为拼点牌。'
    },
    lib.dynamicTranslate["xin_jiang"]=function(player) {
        var num=0
        for(var i=0;i<game.players.length;i++){
                if(game.players[i].isLinked()) num++
        }
        if((player.hasZhuSkill('xin_yingyi')&&get.mode()=='identity')||get.mode()!='identity'){
            for(var i=0;i<game.players.length;i++){
                if(game.players[i].group==='wu') num++
            }
        }
        if(num>3) num=3
        return '当你造成伤害及受到伤害后，涉及的角色各摸'+get.cnNumber(num)+'张牌'
    },
    lib.dynamicTranslate["xjb_guose"]=function() {
        var num=game.countPlayer(function(current){
          return current.countCards('ej');
        });
        return '出牌阶段限一次，你可以选择一名判定区无牌的角色，你摸'+get.cnNumber(num)+'张牌并将其中的非♦️牌当做任意一张延时锦囊牌置于其判定区内。'
    },
    lib.dynamicTranslate["xin_yingzi"]=function() {
        return game.roundNumber%2==1?lib.skill.xin_yingzi.translate1:lib.skill.xin_yingzi.translate2
    },
    lib.dynamicTranslate["xin_niepan"]=function(player) {
        return player.hasSkill("skill_off")?lib.skill.xin_niepan.translate1:lib.skill.xin_niepan.translate2
    },   
    lib.dynamicTranslate["xin_xianzuo"]=function(player) {
        var target=game.filterPlayer(function(current){
            return current.hasSkill('xin_xianzuo_zt')
        });
        return target.length?lib.skill.xin_xianzuo.translate2:lib.skill.xin_xianzuo.translate1
    },     
    lib.perfectPair.xjbhan_caocao=["xjbhan_xunyu"]
    lib.perfectPair.xjbhan_xunyu=["xjbhan_caocao"]
    //
    if(lib.config.xjb_hun){
        game.xjb_update_choujiang('1')
        game.xjb_update_choujiang('2')
        game.xjb_jiangchi_zeroise()
        game.xjb_jiangchiUpDate()
        
    }
    //菜单    
    lib.extensionPack.新将包.author="新元"
    lib.extensionMenu.extension_新将包.author.name="作者："+lib.extensionPack.新将包.author,
    //更改删除
    lib.extensionMenu.extension_新将包.delete.name='<img src="'+lib.assetURL+'/extension/新将包/image/trash.png" width="16">'+'删除'
    //更改编辑
    lib.extensionMenu.extension_新将包.edit.name='<img src="'+lib.assetURL+'/extension/新将包/image/edit.png" width="16">'+'编辑',
    delete lib.extensionMenu.extension_新将包.edit.onclick
    lib.extensionMenu.extension_新将包['Eplanation']={
          name:'<img src="'+lib.assetURL+'/extension/新将包/image/instruction.png" width="16">查看/切换说明', 
          init:'',
          item:{
              qzj:'强制技',
              skill_off:'S',
              junchenSkill:'君臣技',
              skill_X:'X技',
              hun_system:'魂币系统',
              quanlan:'概念全览',
              shouqi:'收起'
          },            
          onclick:function(layout){ 
              if(this.hth_more!==undefined){
                  this.parentNode.removeChild(this.hth_more); 
                  delete this.hth_more; 
              }
              var a='<b>强制技(qzj)</b>：<br>发动技能时，本回合技能目标失去武将牌上的所有技能。(请不要于此时编辑扩展，防止数据丢失！)<br>'
              var b='<b>S(skill_off)</b>：<br>S之：成为S角色，默认时长为一回合。<br>若标在“强制技”后，指技能拥有者S之;<br>S角色：有S的角色，其不能主动发动强制技。<br>'                            
              var c='<b>君臣技</b>：<br>'+
            '<li><b>君主技(junSkill)</b>：特殊的主公技，身份场发动有身份限制，其余场无身份限制。君主子技是君主技的衍生技，有子技时，只有子技才能发起君臣技效果<br>'+
            '<li><b>名臣技(chenSkill)</b>:特殊的被动技，有这些技能的角色成为君主技的目标或发动君主子技，待结算完后，使用这些技能<br>'+   
            '<li>(A：有君主技的角色；B：有名臣技的角色)B成为A君主技的目标/B发动A的君主技的子技结算完后，B使用其武将牌上的名臣技(内容的加粗部分/全部)，<br>'
            var d='<b>X技(skill_X)</b>:为方便独立出来的技能。每一个数字对应一个效果，可以在信息查询中查看。一般和player.fc_X一起使用。'
            var e='<b>魂币系统</b>:一种交换系统，详情如下：'+    
            '<ul>'+
             '<li>魂币的功能：<ul>' +   
              '<li>商店：交易特殊卡牌，一些说明如下：</li><ul> '    +
               ' ①技能卡，对一名角色使用，输入技能的id，然后获得一张卡牌，持有该卡牌为拥有此技能。'+
                '<br>②天赋卡，对一名角色使用，其获得对应的天赋，并掷骰子决定持续轮数，时效过后将恢复初始状态'+
                 '<br>③效用卡，对一名角色使用，使用后卡牌点数+1，若卡牌点数＜10，你回收之。'+
                '</ul><li>变身：使用后变成对应的武将(实际上是获得一个随从)，有的自带装备和卡牌。当一名变身武将死亡后才可变身为另外的武将</li>' +    
                '<li>养成：点击养成功能的各选项即开始养成(可试试改换姓名和势力，有彩蛋哟！)</li>' +
                '<li>维持魂币系统：在使用上述系统功能以及某些魂币系统提供的技能时，会消耗系统能量，而消费魂币则会让系统获得能量，你在赛钱箱内所侍奉的魂币会以较高的概率转化为能量，而清零魂币则以最高概率转化为能量。</li>' +
            '</ul><li>魂币的获得方式：(开启情况下)<ul>' +
            '<li>打卡：游戏开始时，你获得1个打卡点，可用于抽奖，每天仅一次</li>'+    
            '<li>击杀：你的回合内每有一名角色死亡，则你获得1个魂币。</li>'+
            '<li>解锁称号：每个称号50个魂币，且称号只有在打开拓展后才显示。</li>'+
             '<li>超值抽奖(超坑！)：可以获得包括魂币在内的奖品</li>'+   
                '<li>回收技能：可以在养成功能-技能-查看并回收技能中回收，每个技能5魂币</li>'+
                '<li>两种货币：场上角色累积使用及打出牌点数>500，牌堆中便添加一张【铜币】；场上角色累积使用及打出牌点数>2000，牌堆中便添加一张【金币】</li>'+
            '</li></ul></ul>'
                  var words
                  switch(layout){
                          case 'qzj':{words=a};break;
                          case 'skill_off':{words=b};break;
                          case 'junchenSkill':{words=c};break;
                          case 'skill_X':{words=d};break;
                          case 'hun_system':{words=e};break;
                          case 'quanlan':{
                              words=[a,b,c,d,e]
                              words=words.join('<hr>')
                          };break;                     
                  }
                  if(layout!='shouqi'){
                          var more=ui.create.div('.hth_more','<div style="text-align:left"><table border="1"><tr><td>'+words+'</td></tr></div>');  
                          this.parentNode.insertBefore(more,this.nextSibling);
                          this.hth_more=more; 
                          
                  }
              return false;
              }
              }          
     if(!lib.config.xjb_hun){
        lib.extensionMenu.extension_新将包.open= {
         name: "<font color='blue'>点我开启魂币系统",
         clear:true,
         onclick:function(){
             if(!lib.config.xjb_hunbi){
                 lib.config.xjb_hunbi=0;
                 game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);
             }
             lib.config.xjb_hun=true
             game.saveConfig('xjb_hun', lib.config.xjb_hun);
             alert('已开启魂币系统，将自动重启');
             game.reload();
         }
         }
    }
    if(lib.config.xjb_hun){
        lib.extensionMenu.extension_新将包.hunbi={
        name:'<img src="'+lib.assetURL+'/extension/新将包/image/xjb_hunbi.png" height="20">'+'查看魂币数',            
        clear:true,
        onclick:function(){            
            var target=this,hunbi=''
            if(lib.config.xjb_hunbi>0&&lib.config.xjb_hunbi<6){
                for(var i=0;i<lib.config.xjb_hunbi;i++){
                    hunbi=hunbi+'<img src="'+lib.assetURL+'/extension/新将包/image/xjb_hunbi.png" height="20" >'
                }
            }
            else{
                hunbi='<img src="'+lib.assetURL+'/extension/新将包/image/xjb_hunbi.png" height="20" >×'+lib.config.xjb_hunbi
            
            }
            target.innerHTML='你已有魂币：'+hunbi+'('+ lib.config.xjb_hundaka2+')';
            setTimeout(function(){
                target.innerHTML='<img src="'+lib.assetURL+'/extension/新将包/image/xjb_hunbi.png" height="20">'+'查看魂币数'
            },2500)
            
        }    
        }     
        lib.extensionMenu.extension_新将包.hunbi_tozero= {
         name: '<img src="'+lib.assetURL+'/extension/新将包/image/zeroize.png" height="16">清零魂币',
         clear:true,
         onclick:function(){
             if(lib.config.xjb_hunbi>0){
                 if(confirm('确定要清零吗？')){
                 game.xjb_systemEnergyChange(lib.config.xjb_hunbi*4)    
                 game.cost_xjb_cost(1,lib.config.xjb_hunbi)
                 alert('你的魂币已清零');
                 }
             }
             else if(lib.config.xjb_hunbi==0){
                 alert('你的魂币无需清零');   
                 lib.config.xjb_hunbi=0;
                 game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);
                 }
             else if(lib.config.xjb_hunbi<0){
                 
                 game.xjb_systemEnergyChange(lib.config.xjb_hunbi*10)
                 lib.config.xjb_hunbi=0
             }
             else{
                 lib.config.xjb_hunbi=0;
                 alert('你的魂币已清零');
             }
         }
         }
        lib.extensionMenu.extension_新将包.level= {
         name: '<img src="'+lib.assetURL+'/extension/新将包/image/energySource.jpg" height="16">赛钱箱',
         clear:true,
         onclick:function(){
              var words=prompt("不要问是否有神灵，我只想让你给我魂币，这不是天经地义的诉求吗？")
              var number=get.xjb_number(words)
              if(words==null){return}
              else if(!words.length){return}
              else if(isNaN(number))alert("莫要糊弄傻子，你这是于我无意义的！")
              else if(lib.config.xjb_hunbi>number){
                   if(number>5e8){
                    alert("如海的财富呵！我却无法消受。退还去罢！")
                   }
                  else if(number<0){
                      alert("负的捐款，真是妙计！")
                  }
                  else{
                      game.xjb_systemEnergyChange(number*2)    
                      game.cost_xjb_cost(1,number)
                      alert('今日你所捐的，于你亦是有益的。');
                  }
              }else{alert("佯装行善，夸下海口，却无子，去罢。")}
         }
         }
        lib.extensionMenu.extension_新将包.hun_card={
            name:'<img src="'+lib.assetURL+'/extension/新将包/image/xjb_shop.png" width="16">'+'<font color="yellow">5魂币商店</font>',
            init:'Kami_sha', 
            item:lib.config.xjb_list_hunbilist.card,
            onclick:function(layout){
                if(lib.config.xjb_systemEnergy<0){
                    alert("请确保魂币系统有足够的能量！")
                    return
                }
                if(lib.config.xjb_hunbi>=5&&game.me.name){
                   game.cost_xjb_cost(1,5)
                   var card
                   switch(layout){
                        case 'Kami_sha':{
                            game.xjb_systemEnergyChange(-1)
                            for(var i=0;i<5;i++){
                                
                                card=game.createCard('sha','',13,'kami');
                                game.me.gain(card,'draw')
                            }
                            card=game.createCard('sha','',13,'kami');
                        };break;
                        case 'HpCard(2)':{
                            var target=game.me
                            if(!lib.config.xjb_count[target.name].HpCard)lib.config.xjb_count[target.name].HpCard=[]
                            lib.config.xjb_count[target.name].HpCard.push(2)
                            var dialog=ui.create.dialog('<div class="text center" >'+get.translation(target.name1)+'获得体力牌：</div>',game.createHpCard(2));
                            setTimeout(function(){
                            dialog.close();
                            },2500)
                            game.saveConfig('xjb_count', lib.config.xjb_count);
                            game.closeMenu();
                            game.xjb_systemEnergyChange(-20)
                            return
                        };break;   
                        
                        default:{
                            card=game.createCard(layout,'red',1)
                            game.xjb_systemEnergyChange(-10)
                        }  ;break;
                   }
                   game.me.gain(card,'draw')  
                   game.closeMenu();
                }
                else if(game.me.name==undefined) alert('找不到角色！')
                else alert('需要5个魂币，你的魂币不足！'); 
            }
        }  
        lib.extensionMenu.extension_新将包['information']={
            name:'<img src="'+lib.assetURL+'/extension/新将包/image/instruction.png" width="16">'+'<font color="yellow">信息查询！</font>',
            clear:true,
            onclick:function(){
                let thelist=ui.create.xjb_back()    
                let back=thelist[0]
                let div=ui.create.div(".my")
                back.appendChild(div);
                let textarea=document.createElement("textarea")
                textarea.value="输入数字来获取相应的X技能解释，输入武将名获得相应的数据"
                textarea.onclick=function(){
                    if(textarea.value=="输入数字来获取相应的X技能解释，输入武将名获得相应的数据")textarea.value=""
                }
                ui.xjb_giveStyle(textarea,{width:"600px",height:"18px",margin:"15px 12px",float:"left"})
                div.appendChild(textarea);
                let ul=document.createElement("ul")
                ui.xjb_giveStyle(ul,{"margin-top":"45px",overflow:"auto",height:"270px"})
                back.appendChild(ul);
                let button=document.createElement("button")
                button.innerHTML="确定"
                ui.xjb_giveStyle(button,{width:"100px","margin-top":"15px",float:"left"})
                div.appendChild(button);
                button.onclick=function(){
                    let content=textarea.value
                    if(content==parseInt(content)) content=parseInt(content)
                    if(content!=""){
                        let li=document.createElement("li")
                        let rc=get.xjb_translation(content),ok=get.xjb_translation(content)
                        if(Array.isArray(rc)){
                            if(!lib.config.xjb_count[rc[0]])ok=rc[0]
                            else if(rc.length==1){
                                let Myobject={...lib.config.xjb_count[rc[0]]}
                                Myobject.HpCard=game.createHpCard(Myobject.HpCard)
                                ok=lib.translate[rc[0]]+'('+rc[0]+'):<br>'+game.xjb_choujiangStr(Myobject,1);
                                li.innerHTML=ok
                            }
                            else{
                               let select=document.createElement("select") 
                               select.innerHTML+='<option>空项</option>'
                               for(let i=0;i<rc.length;i++){
                                   select.innerHTML+='<option>'+rc[i]+'</option>'
                               }
                               select.onchange=function(){
                                   let text=select.options[select.selectedIndex].text
                                   let Myobject={...lib.config.xjb_count[text]}
                                   Myobject.HpCard=game.createHpCard(Myobject.HpCard)
                                   li.innerHTML=lib.translate[text]+'('+text+'):<br>'+game.xjb_choujiangStr(Myobject,1)
                               }
                               li.appendChild(select);
                               }
                        }
                        else li.innerHTML=content+':'+ok
                        textarea.value=""
                        ul.insertBefore(li,ul.firstChild);
                        
                    }
                }
            }
        }
        lib.extensionMenu.extension_新将包['choujiang']={
            name:'<img src="'+lib.assetURL+'/extension/新将包/image/Lucky.png" width="16">'+'<font color="yellow">超值抽奖！</font>',
            clear:true,
            onclick:function(){
                if(lib.config.xjb_systemEnergy<0){
                    alert("请确保魂币系统有足够的能量！")
                    return
                }
                var myFunc=function(num){
                    return function(){
                    lib.config.cjb_cj_type=`${num}`                 
                   var xx=lib.config.cjb_cj_type,xjb_txt1=document.getElementById('myChouJiang_XJB_TXT')
                   xjb_txt1.innerHTML=game.xjb_choujiangStr(lib.config.xjb_list_hunbilist.choujiang[xx])
                   game.xjb_jiangchiUpDate()}
                }
                var thelist=ui.create.xjb_back()    
                var back=thelist[0]
                var xjb_list=ui.create.div('.xjb_choujiang',back)
                ui.xjb_giveStyle(xjb_list,{width:"125px"})
                var choujiang1=ui.create.div('.xjb_choujiang',xjb_list)
                choujiang1.innerHTML='养成奖池'
                ui.xjb_giveStyle(choujiang1,lib.xjb_style.cj_box)
                ui.xjb_giveStyle(choujiang1,{"margin-top":"50px",color:"red"})
                let myFunc1=myFunc(1)
                let myFunc2=myFunc(2)
                let myFunc3=myFunc(3)
                let myFunc4=myFunc(4)
                choujiang1.addEventListener("click",myFunc1)
                var choujiang2=ui.create.div('.xjb_choujiang',xjb_list)
                choujiang2.innerHTML='魂币奖池'
                ui.xjb_giveStyle(choujiang2,lib.xjb_style.cj_box)
                ui.xjb_giveStyle(choujiang2,{"margin-top":"100px",color:"orange"})
                choujiang2.addEventListener("click",myFunc2)
                var choujiang3=ui.create.div('.xjb_choujiang',xjb_list)
                choujiang3.innerHTML='免费奖池'
                ui.xjb_giveStyle(choujiang3,lib.xjb_style.cj_box)
                ui.xjb_giveStyle(choujiang3,{"margin-top":"150px",color:"blue"})
                choujiang3.addEventListener("click",myFunc3)
                var choujiang4=ui.create.div('.xjb_choujiang',xjb_list)
                choujiang4.innerHTML='技能奖池'
                ui.xjb_giveStyle(choujiang4,lib.xjb_style.cj_box)
                ui.xjb_giveStyle(choujiang4,{"margin-top":"200px",color:"pink"})
                choujiang4.addEventListener("click",myFunc4)
                var text=ui.create.div(".choujiang_text",back)
                text.id="myChouJiang_XJB_TXT"
                var xx=lib.config.cjb_cj_type,xjb_txtself=document.getElementById('myChouJiang_XJB_TXT')
                text.innerHTML=game.xjb_choujiangStr(lib.config.xjb_list_hunbilist.choujiang[xx])
                ui.xjb_giveStyle(text,{'font-size':"20px",right:"410px",top:"10px"})
                var content=ui.create.div(".choujiang_content",back)
                content.innerHTML='奖品'
                content.id="myChouJiang_XJB_CONTENT"
                ui.xjb_giveStyle(content,{'font-size':"30px",'color':"#D9D919","margin-left":"56%","margin-top":"100px","width":"240px","text-align":"center"})
                var btn=document.createElement("BUTTON")
                btn.innerHTML='点击抽奖'
                ui.xjb_giveStyle(btn,{"margin-left":"60%",'border-radius':"5em",position:"relative",color:"red",border:"1px solid green",'font-size':"24px","margin-top":"200px",width:"175px",height:"80px"})
                back.appendChild(btn);
                btn.onclick=function(){
                    var xx=get.xjb_number(lib.config.cjb_cj_type),num=8
                    if(xx==1&&!game.xjb_condition(1,8)){
                        return alert("你未达成抽奖的条件！")
                    }
                    else if(xx==2&&!game.xjb_condition(2,1)){
                        return alert("你未达成抽奖的条件！")
                    }
                    else if(xx==4&&!game.xjb_condition(1,8)){
                        return alert("你未达成抽奖的条件！")
                    }
                    if(xx==2)num=1
                    if(xx==4)xx=1
                    if(xx!==3)game.cost_xjb_cost(xx,num)
                    game.xjb_jiangchiUpDate()
                    btn.disabled=true;
                    choujiang1.removeEventListener("click",myFunc1)
                    choujiang2.removeEventListener("click",myFunc2)
                    choujiang3.removeEventListener("click",myFunc3)
                    choujiang4.removeEventListener("click",myFunc4)
                    var xjb_content=document.getElementById('myChouJiang_XJB_CONTENT')
                    var i=0
                    var timer=setInterval(function(){
                        if(i<100){
                            var jp=lib.xjb_list_xinyuan.jiangchi[i]
                            i++
                            xjb_content.innerHTML=jp
                        }
                        else{
                            alert(xjb_content.innerHTML)
                             game.xjb_gainJP(xjb_content.innerHTML)
                             clearInterval(timer)
                             btn.disabled=false
                             choujiang1.addEventListener("click",myFunc1)
                             choujiang2.addEventListener("click",myFunc2)
                             choujiang3.addEventListener("click",myFunc3)
                             choujiang4.addEventListener("click",myFunc4)
                        }
                    },50)
                    
                }
                
            }
        }
        if(lib.config.xjb_yangcheng==1){   
            zengjiaHp=function(){
                var hp=lib.config.xjb_newcharacter.hp
                var cost=hp*hp*2
                if(hp<8){
                    if(confirm('你已有'+hp+'点体力，加1点体力需要'+cost+'个魂币，确定要增加吗？')){
                        if(lib.config.xjb_hunbi>=cost){
                            lib.config.xjb_newcharacter.hp++
                            game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)    
                            lib.config.xjb_hunbi-=cost;
                            game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);
                            alert('你现在体力值为'+lib.config.xjb_newcharacter.hp+'，重启即更新数据')
                            if(confirm('是否继续？')) zengjiaHp()
                         }
                         else{
                         alert('需要'+cost+'个魂币，你的魂币不足！')
                         }
                    }                  
                }
                else{
                    alert('你的体力值已达到最大！')
                }                                                  
            }
            changeSkill=function(){
                if(!lib.config.xjb_jnc){
                    lib.config.xjb_jnc=0
                    game.saveConfig('xjb_jnc', lib.config.xjb_jnc);
                } 
                var target=['0','1','2','3']
                var num=prompt('请按以下规则输入：开启技能槽，请输入0；查看及删除技能，请输入1；学习技能，请输入2；退出该界面，请输入3')
                if(target.contains(num)){
                    switch(num){
                      case '0':changeSkill1();break;
                      case '1':changeSkill2();break;
                      case '2':changeSkill3();break;
                      }
                }
                else if(num==null){}
                else{
                    alert('请规范输入！即将重来！')
                    changeSkill()
                }
            }
            changeSkill1=function(){
                var num=lib.config.xjb_jnc
                var add=prompt('每开启一个技能槽，消费便多5个魂币，你当前有'+num+'个技能槽，请输入你要开启的技能槽数量')
                if(parseInt(add,10)!=NaN&&add>0){
                    add=parseInt(add,10)
                    var first=(15+(num+1)*5)
                    var last=(15+(num+add)*5)
                    var cost=((first+last)*add)/2
                    if(lib.config.xjb_hunbi>=cost){
                        if(confirm('开启'+add+'个技能槽，需要'+cost+'个魂币，是否开启？')){
                            game.xjb_systemEnergyChange(-10)
                            game.cost_xjb_cost(1,cost)
                            game.saveConfig('xjb_jnc', lib.config.xjb_jnc+=add);
                            alert('你当前技能槽数量为'+lib.config.xjb_jnc)
                            if(confirm('是否返回上级菜单？')) changeSkill()
                        }
                    }
                    else alert('需要'+cost+'个魂币，你的魂币不足！')                   
                }
             }
            changeSkill2=function(){
                var list=lib.config.xjb_newcharacter.skill.slice(0,10)
                if(!lib.config.cda){
                    if(confirm('是否进入回收模式？')) lib.config.cda=1
                    else lib.config.cda=2
                }
                if(list.length<1) alert('你没有技能！')
                else{
                    var word='请按以下规则输入'
                    for(var i=0;i<list.length;i++){
                                word=word+'查看技能〖'+get.translation(list[i])+'〗，请输入'+i+'，'
                            }
                            var num=prompt(word);
                            var skill=list[num]
                 if(list.contains(skill)){
                     var str='〖'+get.translation(skill)+'〗：'+lib.translate[skill+'_info']
                     str=str.replace(/\<br>/g,' \n') 
                     alert(str)
                     if(lib.config.cda==1){
                         if(confirm('是否回收此技能？')){
                             lib.config.xjb_newcharacter.skill.remove(skill)
                             game.xjb_systemEnergyChange(skill.length)
                             game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)    
                             game.xjb_gainJP("5")
                             alert('你已删除该技能，重启即生效！')
                         }
                     }
                     if(confirm('是否继续查看？'))changeSkill2()
                     else if(confirm('是否返回上级菜单？')) changeSkill()
                     }     
                    else if(num==null){}
                    else{
                                alert('请规范输入！即将重来！')
                                changeSkill2()
                    } 
                }
                
            }
            changeSkill3=function(){
                var haven=lib.config.xjb_newcharacter.skill
                var first=lib.config.xjb_list_hunbilist.skill.first
                var second=lib.config.xjb_list_hunbilist.skill.second
                var third=lib.config.xjb_list_hunbilist.skill.third
                var list=first.concat(second,third)
                list.remove(haven)
                var word='请按以下规则输入：'
                            for(var i=0;i<list.length;i++){
                                word=word+'查看技能〖'+get.translation(list[i])+'〗，请输入'+i+'，'
                            }
                            var num=prompt(word,0);
                            var willget=list[num]
                            if(list.contains(willget)){
                                var str='〖'+get.translation(willget)+'〗：'+lib.translate[willget+'_info']
                     str=str.replace(/\<br>/g,' \n') 
                     alert(str)
                                if(haven.length<lib.config.xjb_jnc){
                                    if(first.contains(willget)) var cost=15
                                    if(second.contains(willget)) var cost=25
                                    if(third.contains(willget)) var cost=50
                                    if(lib.config.xjb_hunbi>=cost){
                                        if(confirm('你已达成获得该技能的条件，是否花费'+cost+'个魂币，获得此技能？')){
                                      game.cost_xjb_cost(1,cost)  
                                      game.xjb_systemEnergyChange(-willget.length)
                                     lib.config.xjb_newcharacter.skill.add(willget)
                                     game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)    
                                     alert('你已获得该技能，重启即生效！')
                                    }
                                    }                                  
                                }
                                if(confirm('是否继续查看？'))changeSkill3()  
                                  else if(confirm('是否返回上级菜单？')) changeSkill()

                }
                                                        
                         else if(num==null){}
                         else{
                                alert('请规范输入！即将重来！')
                                changeSkill3()
                             } 
                
            }
            
            lib.extensionMenu.extension_新将包.newCharacter={
                name:'<img src="'+lib.assetURL+'/extension/新将包/xin_newCharacter.jpg" height="16">'+'<font color="yellow">武将养成</font>',
                init:'name2', 
                item:{   
                    name2:'姓名:'+lib.config.xjb_newcharacter.name2,
                    sex:'性别:'+get.translation(lib.config.xjb_newcharacter.sex),
                    group:'势力:'+get.translation(lib.config.xjb_newcharacter.group),
                    hp:'体力值:'+lib.config.xjb_newcharacter.hp+'/8', 
                    skill:'技能'+lib.config.xjb_newcharacter.skill.length+'/'+lib.config.xjb_jnc,		
                    intro:'设置武将的身份背景',
                },
                onclick:function(layout){
                    if(lib.config.xjb_systemEnergy<0){
                    alert("请确保魂币系统有足够的能量！")
                    return
                }
                    switch(layout){
                            case 'name2':{
                                game.xjb_gainJP("免费更改姓名")
                            };break;
                            case 'sex':{
                                let sex=lib.config.xjb_newcharacter.sex                
                                if(confirm('你当前性别为：'+get.translation(sex)+'，更改性别需要10个魂币，确定要更改吗？')){
                                    game.xjb_gainJP("免费更改性别",false)
                                }
                                
                            };break;
                            case 'group':{
                                let group=lib.config.xjb_newcharacter.group                
                                if(confirm('你当前势力为：'+get.translation(group)+'，更改势力需要6个魂币，确定要更改吗？')){
                                    game.xjb_gainJP("免费更改势力",false)
                                }
                            };break;
                            case 'hp':{
                                zengjiaHp()
                            };break;
                            case 'skill':{
                                changeSkill()
                            };break;
                            case 'intro':{
                               var intro=prompt('请输入该角色的背景信息',lib.config.xjb_newcharacter.intro)
                               lib.config.xjb_newcharacter.intro=intro
                               game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter) 
                               game.xjb_systemEnergyChange(-1)
                            };break;
                            default:alert('正在施工中，换换别的试试吧！');break;
                    }
                    return false;
                }
                
            }
            }
        
        
        if(lib.config.xjb_bianshen==1){
            lib.extensionMenu.extension_新将包.hun_bianshen={
                name:'<img src="'+lib.assetURL+'/extension/新将包/image/god.jpg" height="16">'+'<font color="yellow">变身功能</font>',
                init:'machao', 
                item:lib.config.xjb_list_hunbilist.character,
                onclick:function(layout){
                    if(lib.config.xjb_systemEnergy<0){
                    alert("请确保魂币系统有足够的能量！")
                    return
                }
                    let object={
                    name:layout,
                    skills:['skill_X','xjb_shuaxin','xjb_huobi'],
                    hp:1,
                    maxHp:4,
                    hs:get.cards(4),
                    es:[],               
                    skill:'skill_X',
                    onremove:function(player){
                    delete player.storage[layout];
                    player.removeMark("_xin_bianshen",1)   
                     }
                  }
                    var bs_list={machao:function(){
                 game.me.storage._skill_xin_X_locked=1      
                 object.skills.push('xin_htzjq2','mashu')
                 object.es.push(game.createCard('xin_hutou','spade',11),game.createCard('xin_baiyin','club',1))
             },
             guanyu:function(){
                 game.me.storage._skill_xin_X_locked=2    
                 object.skills.push('xin_hlyyd')
                 object.es.push(game.createCard('xin_qinglong','spade',5),game.createCard('xin_chitu','heart',5))
             },
             huatuo:function(){
                 game.me.storage._skill_xin_X_locked=11        
                 object.skills.push('xin_qns','xin_qinnang2')
                 object.es.push(game.createCard('xin_qinnangshu','heart',7))
             },
             jiaxu:function(){
                 game.me.storage._skill_xin_X_locked=12
                 object.skills.push('xin_whlw2','xin_whlw1')
                 object.hs.push(game.createCard('card_lw','red',13))    
             },
             zhugeliang:function(){    
                 game.me.storage._skill_xin_X_locked=1
                 object.skills.push('xin_wlqxp','kongcheng')
                 object.hs.push(game.createCard('qimendunjia'),game.createCard('xin_qixing','diamond',7))
             }}
                    var cost
                    switch(layout){                         
                         case 'zhugeliang':cost=5;break;
                         default:cost=3;break   
                    }
                    if(game.me.isAlive()&&game.me.name!=undefined&&game.me.countMark('_xin_bianshen')<1){
                        if(lib.config.xjb_hunbi>=cost){
                            lib.config.xjb_hunbi-=cost;
                            game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);    
                            alert('你已变身成功！')    
                            alert('你还剩'+lib.config.xjb_hunbi+'个魂币')
                            bs_list[layout]()
                            game.me.storage[layout]=game.me.addSubPlayer(object);
                            game.me.callSubPlayer(object)
                            game.me.addMark('_xin_bianshen')
                            game.closeMenu();
                            game.xjb_systemEnergyChange(-15)
                        }
                        else alert('需要'+cost+'个魂币，你的魂币不够！')                        
                    }
                    else if(game.me.countMark('_xin_bianshen')>0)alert('你已变身过！')    
                    else alert('请确保你有可变身的武将！')
                }
            }
                         
        }                
                if(!lib.config.xjb_bianshen){
        lib.extensionMenu.extension_新将包.bianshen_hun_open= {
         name: '<img src="'+lib.assetURL+'/extension/新将包/image/xjb_locked.png" width="16">'+'点我解锁变身功能',
         clear:true,
         onclick:function(){
             if(lib.config.xjb_hunbi>=15){
                 if(confirm('你已有'+lib.config.xjb_hunbi+'个魂币，解锁该功能需要15个魂币，确定要解锁吗？')){
                     game.cost_xjb_cost(1,15)
                     game.saveConfig('xjb_bianshen', 1);
                     alert('已解锁变身功能，重启即生效');
                     this.innerHTML='<img src="'+lib.assetURL+'/extension/新将包/image/xjb_open.png" width="16">'+'你已解锁变身功能'
                     }                        
             }
             else alert('需要15个魂币，你的魂币不足！');
        }
        }
        }
        else{
           on_or_off1=function(){
                if(lib.config.xjb_bianshen==2) return '<font color="blue">开启变身功能</font>'
                return '<img src="'+lib.assetURL+'/extension/新将包/image/xjb_close.png" width="16">'+'<font color="red">关闭变身功能</font>'
            }
            lib.extensionMenu.extension_新将包.bianshen_hun_on_or_off={
                name:on_or_off1(),
                clear:true,
                onclick:function(){
                    if(lib.config.xjb_bianshen==2) lib.config.xjb_bianshen=1;
                    else lib.config.xjb_bianshen=2;
                    game.saveConfig('xjb_bianshen', lib.config.xjb_bianshen);
                    alert('魂币系统已更新，重启即生效');
                    this.innerHTML=on_or_off1()
                    }
            } 
        }
        if(!lib.config.xjb_yangcheng){
        lib.extensionMenu.extension_新将包.yangcheng_hun_open= {
         name: '<img src="'+lib.assetURL+'/extension/新将包/image/xjb_locked.png" width="16">'+'点我解锁养成功能',
         clear:true,
         onclick:function(){
             if(lib.config.xjb_hunbi>=5){
                 if(confirm('你已有'+lib.config.xjb_hunbi+'个魂币，解锁养成功能需要5个魂币，确定要解锁吗？')){
                     game.cost_xjb_cost(1,5)
                     game.saveConfig('xjb_yangcheng', 1);
                     game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter);
                     alert('已解锁养成功能，角色自动添加到收藏，通过自由选将—收藏可选，重启则自动生效');
                     this.innerHTML='<img src="'+lib.assetURL+'/extension/新将包/image/xjb_open.png" width="16">'+'你已解锁养成功能'
                     }                        
             }
             else alert('需要5个魂币，你的魂币不足！');
        }
        }
        }
        else{
           on_or_off2=function(){
                if(lib.config.xjb_yangcheng==2) return '<font color="blue">开启养成功能</font>'
                return '<img src="'+lib.assetURL+'/extension/新将包/image/xjb_close.png" width="16">'+'<font color="red">关闭养成功能</font>'
            }
            lib.extensionMenu.extension_新将包.yangcheng_hun_on_or_off={
                name:on_or_off2(),
                clear:true,
                onclick:function(){
                    game.saveConfig('xjb_newcharacter', lib.config.xjb_newcharacter)                  
                     if(lib.config.xjb_yangcheng==2) lib.config.xjb_yangcheng=1;
                    else lib.config.xjb_yangcheng=2;
                    game.saveConfig('xjb_yangcheng', lib.config.xjb_yangcheng);
                    alert('魂币系统已更新，重启即生效');
                     this.innerHTML=on_or_off2()
                    }
            } 
        }
        if(!lib.config.xjb_chupingjisha){
        lib.extensionMenu.extension_新将包.xjb_chupingjisha_hun_open= {
         name: '<img src="'+lib.assetURL+'/extension/新将包/image/xjb_locked.png" width="16">'+'点我解锁触屏击杀功能',
         clear:true,
         onclick:function(){
             if(lib.config.xjb_hunbi>=50){
                 if(confirm('你已有'+lib.config.xjb_hunbi+'个魂币，解锁触屏击杀功能需要50个魂币，确定要解锁吗？')){
                     game.cost_xjb_cost(1,50)
                     game.saveConfig('xjb_chupingjisha', 1);
                     this.innerHTML='<img src="'+lib.assetURL+'/extension/新将包/image/xjb_open.png" width="16">'+'你已解锁触屏击杀'
                     }                        
             }
             else alert('需要50个魂币，你的魂币不足！');
        }
        }
        }else{
           let on_or_off3=function(){
                if(lib.config.xjb_chupingjisha==2) return '<font color="blue">开启触屏击杀</font>'
                return '<img src="'+lib.assetURL+'/extension/新将包/image/xjb_close.png" width="16">'+'<font color="red">关闭触屏击杀</font>'
            }
            lib.extensionMenu.extension_新将包.xjb_chupingjisha_hun_on_or_off={
                name:on_or_off3(),
                clear:true,
                onclick:function(){
                    if(lib.config.xjb_chupingjisha==2){
                        lib.config.xjb_chupingjisha=1;
                        lib.xjb_list_xinyuan.theFunction.xjb_chupingjisha()
                    } 
                    else{
                        lib.config.xjb_chupingjisha=2;
                        if(ui.xjb_chupingjisha&&ui.xjb_chupingjisha.remove)ui.xjb_chupingjisha.remove()
                        
                        document.removeEventListener('click',lib.xjb_list_xinyuan.dom_event.click2)
                    }
                    game.saveConfig('xjb_chupingjisha', lib.config.xjb_chupingjisha);
                    
                    this.innerHTML=on_or_off3()
                    }
            } 
        }
        lib.extensionMenu.extension_新将包.hun_close= {
         name: '<img src="'+lib.assetURL+'/extension/新将包/image/xjb_close.png" width="16">'+'<font color="red">点我关闭魂币系统</font>',
         clear:true,
         onclick:function(){
             lib.config.xjb_hun=false
             game.saveConfig('xjb_hun', lib.config.xjb_hun);
             alert('已关闭魂币系统，将自动重启');
             game.xjb_systemEnergyChange(1)
             game.reload();
         }
         }
    }
    
    lib.extensionMenu.extension_新将包['player']={
        name:'<img src="'+lib.assetURL+'/extension/新将包/image/xjb_video.png" width="16">今天放点什么呢？',
        clear:true,
       // item:lib.xjb_list_xinyuan.video, 
        onclick:function(chosen){
            var thelist=ui.create.xjb_back()    
                                var back=thelist[0]
                                ui.xjb_giveStyle(back,{overflow:"auto",          
                            }
                            )
                                var video=document.createElement("video")
                                video.controls=true;
                                video.autoplay=true
                                back.appendChild(video)
                                ui.create.div('','<input type="file" id="xjb_sink_inp" style="width:153px"><textarea value="" id="xjb_sink_text"></textarea><button id="xjb_sink_btn">确定</button>',back);
                                let inp=document.getElementById('xjb_sink_inp')
                                let btn=document.getElementById('xjb_sink_btn')
                                let text=document.getElementById('xjb_sink_text')
                                inp.onchange=function(e){
                                    var file=e.target.files[0]
                                    var Reader=new FileReader()
                                    Reader.readAsDataURL(file)
                                    Reader.onload=function(){
                                        video.src=Reader.result
                                        video.onload=function(){
                                        video.height="100px"
                                        }
                                        
                                    }
                                    
                                }
                                btn.onclick=function(){
                                    var Reader=new FileReader()
                                    Reader.readAsDataURL(text.value)
                                    Reader.onload=function(){
                                        video.src=Reader.result
                                        video.onload=function(){
                                        video.height="250px"
                                        }
                                        
                                    }
                                }
           /* const my=new XMLHttpRequest()
            my.open('GET',chosen)
            my.responseType='blob'
            my.send()
            my.onload=function(){
                var thelist=ui.create.xjb_back()    
                var back=thelist[0]
                var player=createElement('video')
                const file=my.response
                const fileUrl=URL.createObjectURL(file)
                player.setAttribute('src',file)
                player.setAttribute('width','260')
                back.appendChild(player)
            }//*/
           /* if(this.hth_more!=undefined){
                  this.parentNode.removeChild(this.hth_more); 
                  delete this.hth_more; 
           }
            var name=chosen
            var play="<video width='260' height='240'controls autoplay><source src='"+lib.assetURL+"/extension/新将包/video/"+chosen+"' type='video/mp4'></video>"
            var more=ui.create.div('.hth_more',play)
            this.parentNode.insertBefore(more,this.nextSibling);
            this.hth_more=more;      //*/       
        }
    }
    lib.extensionMenu.extension_新将包['music']={
        name:'<img src="'+lib.assetURL+'/extension/新将包/image/xjb_yinfu.png" width="16">'+'今天听点什么呢？',
        clear:true,
        init:'machao', 
        item:lib.xjb_list_xinyuan.music, 
        onclick:function(layout){
           /* if(this.hth_more!=undefined){
                  this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.hth_more); 
                  delete this.hth_more; 
           }
            game.saveConfig('background_music','music_off');
            game.playBackgroundMusic();\\*/
            var name=layout
            lib.config.xjb_music=layout
            game.saveConfig('xjb_music',layout)
            ui.backgroundMusic.src=lib.assetURL+'/extension/新将包/music/'+name
            ui.backgroundMusic.loop=true
            //var play='<audio autoplay loop><source src="'+lib.assetURL+'/extension/新将包/music/'+name+'" ></audio>'
            // var more=ui.create.div('.hth_more',play)
            //this.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(more,this.parentNode.parentNode.parentNode.parentNode.nextSibling);
            //this.hth_more=more;     
            if(layout=="取消"){
                game.saveConfig('background_music','music_default');
                game.playBackgroundMusic();
             }
            return false;
        }
    }
    changeHunBi=function(){
        var num=1
        for(var i=0;i<arguments.length;i++){
            if(typeof arguments[i]=='number') num=arguments[i]
        }
        lib.config.xjb_hunbi+=num
        game.saveConfig('xjb_hunbi', lib.config.xjb_hunbi);        
    }
    lib.characterSort['mode_extension_新将包'] = {        
        'xjb_fengyun': ["xjb_zhangliang_liuhou","xjb_yingzheng","xjb_newCharacter"], 
        'xjb_chidan':["xjb_ganning","xjb_dianwei"],     
        'xjb_tiandu':["xjb_sunce","xjb_zhouyu","xjb_pangtong","xjb_guojia","xjb_xizhicai"],                      
        'xjb_zaiwu':["xjbhan_caocao","xjbhan_xunyu","xjb_caocao"],     
        'xjb_jincui':["xjb_zhugeliang","xjb_liushan"],     
        'xjb_guijin':["xjb_jin_simayi"],    
        'xjb_huahao':["xjb_daqiao"],
        }
    //养成技能:冰诀
    lib.skill.xjb_bingjue={
    mod:{
        cardUsable:function(card,player,num){
            if(card.name==='sha'&&card.nature==='ice') return Infinity;
        },
    },
    enable:"phaseUse",
    filterCard:{
        suit:"club",
    },
    selectCard:-1,
    filter:function (card,player,target){
        return player.countCards('h')>0;
    },
    discard:false,
    lose:false,
    delay:false,
    content:function(){
        for(var i=0;i<cards.length;i++){
            cards[i].storage.vanish=true         
            player.gain(game.createCard2('sha','club',1,'ice'))            
        }
        player.lose(cards)
    },
}
    lib.skill.xjb_juanqu={
    audio:"ext:新将包:false",
    enable:"phaseUse",
    round:1,   
    filter:function(event,player){
        return player.hp>0
    },
    filterTarget:function(card,player,target){
        return target!=player
    },
    content:function(){
        player.fc_X(true,22,[1])
        target.fc_X(true,21,11,1,[1,1,1],'num_2')
    },
    mark:true,
}
    lib.translate.xjb_juanqu="恩赐"
    lib.translate.xjb_juanqu_info="每轮限一次，你可以失去一点体力上限，然后令一名角色加一点体力上限并恢复一点体力值然后摸一张牌。"
     //装备技能:续命       
    lib.skill.xin_xuming={
    trigger:{
        global:"dying",
    },
    frequent:true,
    content:function(){
        "step 0"
        var list0=[]
        if(player.getExpansions('qixing').length>0) list0.push('弃置一颗"星"，令其恢复1点体力')        
        list0.push('使用一张【奇门遁甲】')
        if(list0.length>0) event.list0=list0
        "step 1"
        player.chooseControl(event.list0).set('prompt','续命:选择一项执行之').set('ai',function(){
            if(get.attitude(player,trigger.player)>0) return '弃置一颗"星"，令其恢复1点体力'
            return '使用一张【奇门遁甲】';
        })
        "step 2"
        if(result.control=='使用一张【奇门遁甲】'){
            player.chooseUseTarget(game.createCard('qimendunjia'),true)
            event.finish();      
        }
        else{
            var card=player.getExpansions('qixing').slice(-1)
            player.loseToDiscardpile(card);
            trigger.player.recover()
        }
        }
            }  
    
      lib.skill.xin_qinnang2={
          audio:"ext:新将包:2",
    enable:"phaseUse",
    usable:1,
    filter:function (event,player){                
         return player.countCards('h','tao')>0||(player.hasSkill('xin_qns')&&player.countCards('hes',{color:'red'})>0);      
    },
    filterTarget:function (card,player,target){
        return target.hp<target.maxHp;
    },
          content:function(){        
        "step 0"
        player.chooseToUse('使用一张桃',{name:'tao'},true,function(card,player,target){
            if(targets[0]==target) return true;           
            return false;
        });
        game.asyncDraw([target,player]);        
        "step 1"
        if(player.countCards('h','tao')>0||(player.hasSkill('xin_qns')&&player.countCards('hes',{color:'red'}))){
            if(targets[0].hp<targets[0].maxHp)player.chooseBool('是否继续出【桃】');
        }
        else event.finish()
        "step 2"
        if(result.bool){
            if(player.countCards('h','tao')>0||(player.hasSkill('xin_qns')&&player.countCards('hes',{color:'red'}))){
                if(targets[0].hp<targets[0].maxHp)event.goto(0);
            }
        }        
    },
          ai:{
        order:4.5,
        result:{
            target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
        },
        threaten:2,
    },
      }
      //装备技能:青囊1
   lib.skill.xin_qinnang1={
    audio:"ext:新将包:2",
    enable:"phaseUse",
    filterCard:true,
    selectCard:function(){
        return [0,2]
    },
    position:"hs",
    check:function(card){
        return 10-get.value(card)
    },
          usable:3,
          content:function(){
        'step 0'
        var list=[]
        if(cards.length==0){
            if(player.countDisabled()<4) list.push('废弃两个装备栏')
            list.push('失去两点体力')
        }
        if(cards.length==1){
            if(player.countDisabled()<5) list.push('废弃一个装备栏')
            list.push('失去一点体力')
        }
        if(list.length){
            player.chooseControl(list);
        }
        'step 1'
        if(result.control=='废弃两个装备栏'){
            for(var i=0;i<2;i++){
                player.chooseToDisable().ai=function(event,player,list){                
                return list.randomGet();
            }
            }                        
        }
              else if(result.control=='失去两点体力'){
            player.loseHp(2)
        }
        else if(result.control=='废弃一个装备栏'){
            player.chooseToDisable().ai=function(event,player,list){                
                return list.randomGet();
            };
        }
        else if(result.control=='失去一点体力'){
            player.loseHp()
        }        
        'step 2'
        var save=get.cardPile2(function(card){
                return get.tag(card,'recover');
        });
        if(save){
           player.gain(save,'gain2');
        }  
        else{
           player.seekTag2('recover')
        }
        'step 3'
        game.updateRoundNumber();
    },
          ai:{
        order:5,
              result:{
                  player:function (player,target){                
                if(player.countCards('h')>player.hp) return 1;
                return 0;
            },
            
        },
        threaten:2,
    },
      }        
      //装备技能:狮怒
      lib.skill.xin_shinu={
          equipSkill:true,
          trigger:{
              player:"damageBegin2",
         },
          content:function(){
              'step 0'
              trigger.source.damage(trigger.num)
              'step 1'
              if(player.hp<=1){
                  trigger.cancel()
                  var s=player.getCards('e',{subtype:'equip2'});
                  player.lose(s,ui.cardPile);        
              }
           },
          
      }
      //装备技能:追魂
      lib.skill.xin_zhuihun={
          equipSkill:true,
          trigger:{
              player:"damageEnd",
          },
          forced:true,
          check:function(event,player){
               return get.attitude(player,event.source)<0;
        },
          content:function(){
              if(trigger.source.countCards('h')>0)trigger.source.chooseToDiscard('h',1,true)
              if(trigger.source) trigger.source.addMark('new_wuhun_mark',1)
              player.insertPhase();
          },
          
      }
      //装备技能:偃月
      lib.skill.xin_yanyue={
          equipSkill:true,
          trigger:{
              source:"damageBegin2",
          },
          check:function(event,player){
               return get.attitude(player,event.target)<0;
          },
          content:function(){
              player.loseHp()
              trigger.num++
              trigger.player.addMark('new_wuhun_mark',1);
          },
          
      }
      lib.translate.xjb_skillCard="技能卡"
      lib.card.xjb_skillCard={
          audio:"ext:新将包",
          type:"xjb_unique",
          subtype:"xjb_unique_skill",
          derivation:"",
          enable:function(event,player){
          return true;
          },
          lianheng:true,
           logv:false,
           selectTarget:1,
          modTarget:true,
          filterTarget:true,
           content:function(){  
           var id=prompt("请输入技能的id")
           if(Object.keys(lib.skill).contains(id)){
               lib.card[id+"_card"]={
                   enable:false,
                   type:"xjb_unique",
                   subtype:"xjb_unique_skill",
                   ai:{
                   basic:{
                        useful:8,
                   }
                   },
                   hasSkill:id,
                   ai:{
                       basic:{
                       useful:[6.5,4,3,2],
                       value:[6.5,4,3,2],
                   },
                   },
                   fullskin:true,
                   
                   image:"ext:新将包/skillCard.png"
               }
               lib.translate[id+"_card"]=lib.translate[id]
               var card=game.createCard(id+"_card")
               target.gain(card)
               lib.translate[id+"_card_info"]="当你持有"+get.translation(card)+"时，你视为拥有技能:【"+get.translation(id)+"】<br><ins><i>"+lib.translate[id+"_info"]+"</i></ins>"
               var skill=game.xjb_EqualizeSkillObject(id+"_card",lib.skill[id])
               if(skill.init)skill.init=function(player,skill){player.storage[skill]=false}
               if(!skill.filter){
                   skill.filter=function(){return true}
               }
               skill.filter2=skill.filter
               skill.filter=function(event,player){
                   if(player.countCards("hs",{name:id+"_card"})<1) return false
                   return this.filter2.apply(this,arguments);
               }
               game.addGlobalSkill(id+"_card")
               
           }else{
               player.gain(cards)
               alert("未找到该技能！")
           }
          },
          fullskin:true,
          image:"ext:新将包/skillCard.png",
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      //
    
},precontent:function(){
    //引子
    lib.skill.boss_xjb_start={
    mode:["boss"],
    trigger:{
        global:"gameStart",
    },
    direct:true,
    content:function(){
        ui.create.xjb_thePlay=function(){
            var alsj=ui.create.xjb_back()
        var back=alsj[0]
        var ul=document.createElement("ul")
        var list=[...arguments]
        var lis=[]
        ui.xjb_giveStyle(ul,{height:"78%",width:"88%",
                             margin:"5% auto","list-style": "none",overflow:"auto"})
        back.appendChild(ul)       
        if(list.contains("幻想乡玩家")){
            var red=ui.create.xjb_newPlayLi("幻想乡玩家",lib.assetURL+"/extension/新将包/Red.jpg",ul,"Red0001",back,arguments[arguments.length-1])                    
            lis.push(red)
        }
        if(list.contains("李华的冒险")){
            var LH=ui.create.xjb_newPlayLi("蓬莱访仙记",lib.assetURL+"/extension/新将包/xin_newCharacter.jpg",ul,"LH0001",back,arguments[arguments.length-1])                    
            lis.push(LH)
        }
        if(list.contains("血传奇")){
            var blood=ui.create.xjb_newPlayLi("血传奇",lib.assetURL+"/extension/新将包/xuemo1.jpg",ul,"Blood_1",back,arguments[arguments.length-1])               
            lis.push(blood)
        }
        for(var i=0;i<lis.length;i++){
            lis[i].onclick=function(){
                for(var a=0;a<lis.length;a++){
                    ui.xjb_giveStyle(lis[a],{height:"88%",width:"23%"})
                }
                ui.xjb_giveStyle(this,{height:"93%",width:"28%"})
                return false
            }
        } 
          return {close:alsj[1]}   
       }
    ui.create.xjb_newPlayLi=function(str,img,ul,num,close,player){
        var li=document.createElement("li")
        ui.xjb_giveStyle(li,{height:"88%",width:"23%","color":"#FF0000",
                             margin:"2% 2%",border:"1px solid black",
                             "border-radius":"1em","text-align":"center",float:"left",
         "background-image":`url('${img}')`,
         "background-size" :"100% 100%"   ,
                             "font-size":"25px",
                          "text-shadow":"0 0 3px #840101",   
                             "font-weight":"900"
                            })
        li.innerHTML=str
        ul.appendChild(li)
        li.ondblclick=function(){
            game.xjb_bossLoad(num,player);
            close.remove();            
        }
        return li
        }
        var boolean=true,target
        player.node.name.innerHTML="引<br>者"
        game.countPlayer(function(current){
            if(current.name1=="xjb_newCharacter"){        
                current.xjb_init(player)
                target=current                
                boolean=false                
            }            
        })
        if(boolean){
            player.useCard({name:"qimendunjia"},player)
            player.useCard({name:"card_lw"},player)
            player.useCard({name:"xjb_Infinity"},player)               
            player.turnOver(false)                        
        }
        else{
            ui.auto.show(); 
            ui.me.show();
            game.removePlayer(player)    
            game.pause()
            function func(){
                var control1=ui.create.control("选关",func1)
                var control2=ui.create.control("读档",func2)
                //利用预解析写两个函数
                function func1(){
                control1.close()
                control2.close()
                var list=["李华的冒险"],info=lib.character[target.name1][4]
                if(info){
                if(info.contains("ext:新将包/Red.jpg")){list.push("幻想乡玩家")}
                if(info.contains("ext:新将包/xuemo1.jpg")){list.push("血传奇")}
                }
                var play=ui.create.xjb_thePlay(...list,target)
                play.close.addEventListener("click",func)
                game.xjb_back=null
                }
                function func2(){
                control1.close()
                control2.close()
                var storage=game.xjb_storage_1(target)
                storage.close.addEventListener("click",func)
                game.xjb_back=null
                }
            }
            func()
        }
    },
}
    //关卡表
    lib.skill.xjb_theLevel={
    init:function(player,skill){
        game.removePlayer(player)
    },
    ActionOfPlayer:{
        //角色登场
        xjb_init:function(player){
            //角色数大于2，移除上下两人
            while(game.players.length>2){
                if(this.previousSeat!==player)game.removePlayer(this.previousSeat)
                if(this.nextSeat!==player)game.removePlayer(this.nextSeat)
                
           }
            //对最后一名进行判定
           if(this.nextSeat!=player)game.removePlayer(this.nextSeat)
           
        },
        
    },  
    theLevel:{
        //一般读档
        "0000":{
            init:function(){game.resume()},
        },
        //李华关卡
        "LH0001":{
            init:function(player){
                //防止重读
                if(_status.xjb_level.number==="LH0001"){
                    return 
                }                              
                //设置卡关信息                
                _status.xjb_level={
                   name:"蓬莱访仙记<br>1-1四方",
                   number:"LH0001",                   
                }
                //角色登场
                var fellow1=game.addFellow(2,"boss_qinglong");
                var fellow2=game.addFellow(3,"boss_baihu");
                var fellow3=game.addFellow(4,"boss_zhuque");
                var fellow4=game.addFellow(5,"boss_xuanwu");
                function fun1(fellow){
                    if(Array.isArray(fellow)){
                        for(var i=0;i<fellow.length;i++){
                            fun1(fellow[i])
                        }
                    }
                    else if(arguments.length>1){
                        fun1([...arguments])
                    }
                    else{
                        fellow.directgain(get.cards(4));
                        fellow.side=true;
                        fellow.identity='zhong';
                        fellow.setIdentity('zhong');
                        game.addVideo('setIdentity',fellow,'zhong');
                        fellow.update()
                    }
                }
                fun1(fellow1,fellow2,fellow3,fellow4)
                ui.xjb_giveStyle(fellow1,{marginLeft:"200px",marginTop:"86px"})
                ui.xjb_giveStyle(fellow2,{marginLeft:"600px",marginTop:"86px"})
                ui.xjb_giveStyle(fellow3,{marginLeft:"400px",marginTop:"-65px"})
                ui.xjb_giveStyle(fellow4,{marginLeft:"400px",marginTop:"189px"})
                game.phaseLoop(player);
                //
                game.xjb_dialog(
                    [
                        [lib.xjb_path.YQ,"渔父","brown","忽闻海上有仙山，上联青云九霄天，下通沟壑九幽界。隐隐云窈窕，我得神皇药。",""],
                        [lib.xjb_path.LH,lib.config.xjb_newcharacter.name2,"green","仙人且慢，我有一言相问",""],
                        [lib.xjb_path.YQ,"渔父","brown","我并非什么仙人，不过你所问何事？",""],
                        [lib.xjb_path.LH,lib.config.xjb_newcharacter.name2,"green","方才听得老兄提及蓬莱之山，又得神皇之药，甚是好奇，故来一问。",""],
                        [lib.xjb_path.YQ,"渔父","brown","呵呵。这蓬莱之山，乃是仙人住处，在渤海汪洋之中。我不日在梦中神游过那处，竟是迷蒙不清的一片，只听得一钟声沉，一鼓声急，我心神震颤，便醒来。枕边有一物，我看是一药包，上有小字：“神皇所制”。遂以此作了此歌。",""],                                                                       
                        [lib.xjb_path.LH,lib.config.xjb_newcharacter.name2,"green","老兄竟有如此机缘，不知那神药是如何？",""],
                        [lib.xjb_path.YQ,"渔父","brown","仙人之药也。其似有强身健体，豁达心境之效。每日取此药三两熬制成汤，一屋则满溢其香，引来百鸟齐唱，蜂蝶匆忙。",""],
                        [lib.xjb_path.LH,lib.config.xjb_newcharacter.name2,"green","世上真有此神奇之物？",""],
                        [lib.xjb_path.YQ,"渔父","brown","其为造化之所钟爱也。我等凡人，为造化之仆役也。造化之功亦可夺也，于三山之山，于九天之天，于九幽之幽。",""],
                        [lib.xjb_path.LH,lib.config.xjb_newcharacter.name2,"green","以凡人之躯，夺造化之功，无异于沐猴欲冠而法蚍蜉撼树也。",""],
                        [lib.xjb_path.YQ,"渔父","brown","纵然低如蝼蚁，也要让造化将我之低下言明。纵然粉身碎骨，何以将畏惧献于这普世之主宰。",""],
                    ])
            },               
        },
        //血传奇关卡
        "Blood_1":{
            init:function(player){},
        },
        //幻想乡玩家关卡
        "Red0001":{
            init:function(player){
                //防止重读
                if(_status.xjb_level.number==="LH0001"){
                    return 
                }              
                //设置卡关信息                
                _status.xjb_level={
                   name:"幻想乡玩家<br>1 初入幻想乡",
                   number:"Red0001",                   
                }
                //
                game.pause()
                game.xjb_dialog(
                    [
                        ["none","旁白","white","清晨的阳光照在了少年的脸上，即使少年闭着眼睛，也能感觉到外面阳光的刺眼。",""],
                        [lib.xjb_path.Red,"???","red","什么时候冬天的阳光也这么刺眼了啊……",""],
                        ["none","旁白","white","被阳光强迫着醒来的少年有些不情愿地翻了个身，然后伸手试图把身边的被褥拉到身上来。",""],
                        ["none","旁白","white","少年心中一惊，这才发现自己身下并不是自己那张略窄却很舒适的小床，而是有些松散并且有点湿润的土地。",""],
                        ["none","旁白","white","想到这里，少年的睡意全无，连忙一个翻身坐了起来，向四周打量着。",""],                                                                               
                        ["none","旁白","white","一棵棵参天大树在少年的周围耸立着，裸露的地面上零零散散地分布着几片小小的草坪，空气中弥漫着一股湿润的气息，仔细看去还能发现空气中混杂着一丝淡淡的雾气。",""],
                        [lib.xjb_path.Red,"???","red","见鬼了……",""],
                        [lib.xjb_path.Red,"???","red","对……对了，系统地图……","【系统地图】<br>【人物界面】",""],
                    ])
            },
        },
    },
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
},help:{"新将包":"<a href='file:///storage/emulated/0/Android/data/com.widget.noname.cola/extension/新将包/htm/index.htm'>进入本地网页</a>\n<br><h3>X技</h3>\n<ul>\n<li>介绍：X技即skill_X，于你的准备阶段发动，通过player.storage._skill_xin_X和player.storage._skill_xin_X_locked储存有关数据，通过fc_X执行</li>\n<li>X技的编号：<br>1：摸牌；<br>11：恢复体力；<br>21：加体力上限。<hr>\n2：（你）弃（？）牌；<br>12：失去体力；<br>22：减体力上限。\n<hr>3：重置；<br>13：横置；<br>23：填加技能1；<br>33：添加技能2；<br>43：改变身份1；<br>53：改变身份2；<br>63：;<br>73：；<br>83：获得技能直到（?）；<br>103：；<br>113：获得Debuff；<br>123：获得Buff；<br>133；<br>134<hr>\n4：（你）对（？）造成火属性伤害；<br>14：（你）对（？）造成冰属性伤害；<br>14：（你）对（？）造成冰属性伤害  \n</li></ul>"},config:{},package:{
    character:{
        character:{
            "xin_fellow":["male","shen",5,[],["unseen"]],
            "xjb_daqiao":["female","wu",3,["xjb_liuli","xjb_guose"],[]],
            "xjb_sunce":["male","wu","3/3",["xin_taoni","xin_jiang","xin_yingyi"],["zhu"]],
            "xjb_guojia":["male","wei",3,["xin_dongxin","xin_qizuo","xin_zaozhong"],[]],
            "xjbhan_caocao":["male","han",4,["xin_zhibang","xin_chuhui"],[]],
            "xjbhan_xunyu":["male","han",3,["xin_bingjie","xin_liuxiang"],[]],
            "xjb_pangtong":["male","shu",3,["xin_niepan","xin_lianhuan"],[]],
            "xjb_caocao":["male","wei",4,["xin_guixin","xin_fengtian"],["zhu"]],
            "xjb_zhouyu":["male","wu",3,["xin_shiyin","xin_yingzi"],[]],
            "xjb_liushan":["male","shu",3,["xin_fangquan","xin_baisu","xin_xiangle"],["zhu"]],
            "xjb_zhangliang_liuhou":["male","shen",3,["xin_mousheng","xin_weiwo","xin_duice"],[]],
            "xjb_dianwei":["male","wei",5,["xin_huzhu","xin_xiongli"],[]],
            "xjb_ganning":["male","wu",4,["xin_yexi","xin_ziruo"],[]],
            "xjb_zhugeliang":["male","shu","3/5",["xin_jincui","xin_chushi","xin_qimen"],[]],
            "xjb_jin_simayi":["male","jin","3/5",["xin_huanshi","xin_zhabing"],[]],
            "xjb_yingzheng":["male","shen",3,["xin_tianming","xin_zulong","xin_longpan"],[]],
            "xjb_fazheng":["male","shu",3,["xin_enyuan","xin_qisuan","xjb_fuyi"],[]],
        },
        translate:{
            "xin_fellow":"秦兵",
            "xjb_daqiao":"大乔",
            "xjb_sunce":"孙策",
            "xjb_guojia":"郭嘉",
            "xjbhan_caocao":"曹操",
            "xjbhan_xunyu":"荀彧",
            "xjb_pangtong":"庞统",
            "xjb_caocao":"曹操",
            "xjb_zhouyu":"周瑜",
            "xjb_liushan":"刘禅",
            "xjb_zhangliang_liuhou":"张良",
            "xjb_dianwei":"典韦",
            "xjb_ganning":"甘宁",
            "xjb_zhugeliang":"诸葛亮",
            "xjb_jin_simayi":"司马懿",
            "xjb_yingzheng":"嬴政",
            "xjb_fazheng":"法正",
        },
    },
    card:{
        card:{
            suicide:{
                enable:true,
                type:"basic",
                toself:true,
                selectTarget:-1,
                fullskin:true,
                modTarget:true,
                filterTarget:function(card,player,target){
        return target==player;
    },
                content:function(){
        'step 0'      
        target.showCharacter(2)
        if(target.name.endsWith('caocao')){
            target.useCard({name:'wuzhong'},target,false);      
            event.finish()
        }       
        'step 1'
        var s=[]
        var shan=target.getCards('h',{name:'shan'});        
        for(var a=0;a<0;a++){
            s.push(shan[a])
        }            
        var hs=target.getCards('h');        
        for(var i in hs){
            if(!get.tag(hs[i],'damage')) continue;
            s.push(hs[i])
        }   
        target.lose(s,ui.cardPile);
        game.log(player,'将'+get.translation(s)+'置入弃牌堆')
        target.useCard({name:'sha'},target,false);        
        'step 2'
        game.updateRoundNumber();
    },
            },
            bulu:{
                audio:true,
                fullskin:true,
                type:"basic",
                toself:true,
                enable:function(event,player){
        return true;
    },
                lianheng:true,
                logv:false,
                selectTarget:-1,
                modTarget:true,
                filterTarget:function(card,player,target){
        return target==player;
    },
                content:function(){
        'step 0'
        target.showCharacter(2)
        if(target.name1.endsWith('caocao')){
            target.useCard({name:'wuzhong'},target,false);      
            event.finish()
        }       
        'step 1'
        game.playAudio('..','extension','新将包','bulu')
        target.loseHp()        
        var s=target.getCards('he',{color:'red'});
        target.lose(s,ui.cardPile);     
        game.log(player,'将'+get.translation(s)+'置入弃牌堆')
    },
            },
            qimendunjia:{
                audio:"ext:新将包",
                type:"trick",
                toself:true,
                derivation:"zhugeliang",
                enable:function(event,player){
        return true;
    },
                lianheng:true,
                logv:false,
                selectTarget:-1,
                modTarget:true,
                filterTarget:function(card,player,target){
        return target==player;
    },
                content:function(){  
        'step 0'
        var list=[1,11,21,2,12,32,3,13,4,14,24]   
        if(player.hasSkill('skill_off')){        
            player.fc_X(true,'choose','needResult',{choice:list,storage:"qimendunjia",chopro:"请选择一个X技编号，详见说明"}) 
            event.bool=true
        }
        else event.num=list.randomGet()
        'step 1'
        var num=event.bool===true?player.storage["qimendunjia"]:event.num
        player.storage._skill_xin_X_locked=num
        player.fc_X(num)
    },
                fullskin:true,
            },
            hengshuofushi:{
                enable:true,
                type:"trick",
                derivation:"xin_caocao",
                filterTarget:function(card,player,target){
        return target.hasSkill('xin_fengtian');
    },
                selectTarget:-1,
                content:function(){
        'step 0'
        game.playAudio('..','extension','新将包','tianxiaguixin')
        player.draw()
        target.recover()
        target.addTempSkill('new_rejianxiong',{player:"phaseBefore"})
        player.update()
        'step 1'
        if(target.hp>2)target.damage('nosource','nocard')
    },
                fullskin:true,
            },
            "xin_qinnangshu":{
                type:"equip",
                subtype:"equip5",
                skills:["xin_qinnang1"],
                nomod:true,
                nopower:true,
                cardcolor:"red",
                unique:true,
                onLose:function(){
        card.fix();
        card.remove();
        card.destroyed=true;
        game.log(card,'被销毁了');        
    },
                ai:{
                    equipValue:7.5,
                    basic:{
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:1,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
                image:"ext:新将包/xin_qingnangshu.jpg",
                fullskin:true,
            },
            "card_lw":{
                enable:true,
                type:"trick",
                derivation:"jiaxu",
                toself:true,
                selectTarget:-1,
                modTarget:true,
                filterTarget:function(card,player,target){
        return target==player;
    },
                content:function(){        
        "step 0"
        player.logSkill('luanwu')
        event.current=target.next;
        event.currented=[];
        "step 1"       
        event.currented.push(event.current);
        event.current.animate('target');        
        event.current.chooseToUse('乱武：使用一张杀或失去一点体力',function(card){
            if(get.name(card)!='sha') return false;
            return lib.filter.filterCard.apply(this,arguments)
        },function(card,player,target){
            if(player==target) return false;
            var dist=get.distance(player,target);
            if(dist>1){
                if(game.hasPlayer(function(current){
                    return current!=player&&get.distance(player,current)<dist;
                })){
                    return false;
                }
            }
            return lib.filter.filterTarget.apply(this,arguments)
        }).set('ai2',function(){
            return get.effect_use.apply(this,arguments)+0.01;
        });
        "step 2"
        if(result.bool==false){
            event.current.chooseToDiscard('h',2,true)
            event.current.loseHp();
        } 
        event.current=event.current.next;
        if(event.current!=player&&!event.currented.contains(event.current)){
            game.delay(0.5);
            event.goto(1);
        }
    
    },
                fullimage:true,
            },
            "xin_qinglong":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                onLose:function(){        
        card.fix();
        card.remove();
        card.destroyed=true;
        game.log(card,'被销毁了');
        player.$skill('二龙互化','legend','metal');
        player.equip(game.createCard('qinglong','spade',5))        
    },
                ai:{
                    equipValue:function(card,player){
            var num=2.5+(player.countCards('h')+player.countCards('e'))/2.5;
            return Math.min(num,5);
        },
                    basic:{
                        equipValue:4.5,
                    },
                },
                skills:["xin_yanyue","qinglong_skill","qinglong_guozhan"],
            },
            "xin_chitu":{
                fullskin:true,
                type:"equip",
                subtype:"equip4",
                nomod:true,
                nopower:true,
                distance:{
                    globalFrom:-1,
                    globalTo:1,
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
                onLose:function(){
        card.fix();
        card.remove();
        card.destroyed=true;
        game.log(card,'被销毁了');
        player.equip(game.createCard('chitu','heart',5))
    },
                skills:["xin_zhuihun","new_wuhun"],
                ai:{
                    basic:{
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:4,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
            },
            "xin_baiyin":{
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                loseDelay:false,
                onLose:function(){  
        card.fix();
        card.remove();
        card.destroyed=true;
        game.log(card,'被销毁了');
        player.equip(game.createCard('baiyin','club',1))
        player.recover();
    },
                skills:["xin_shinu"],
                tag:{
                    recover:1,
                },
                ai:{
                    order:9.5,
                    equipValue:function(card,player){
            if(player.hp==player.maxHp) return 5;
            if(player.countCards('h','baiyin')) return 6;
            return 0;
        },
                    basic:{
                        equipValue:5,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
            "xin_hutou":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["hengwu"],
                loseDelay:false,
                onLose:function(){  
        card.fix();
        card.remove();
        card.destroyed=true;
        game.log(card,'被销毁了');
        player.$skill('虎恨','legend','metal');  
        player.equip(game.createCard(get.typeCard('equip').randomGet()))
    },
                ai:{
                    basic:{
                        equipValue:2,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "xin_qixing":{
                type:"equip",
                subtype:"equip2",
                skills:["qixing","xin_xuming"],
                onLose:function(){        
        player.gain(player.getExpansions('qixing'),'gain2','fromStorage');
        card.fix();
        card.remove();
        card.destroyed=true;        
        game.log(card,'被销毁了');        
        player.removeSkill('guanxing')        
    },
                ai:{
                    basic:{
                        equipValue:6.5,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                fullskin:true,
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        target.equip(cards[0]);
        player.$skill('武侯之魂','legend','metal');        game.me.addToExpansion(get.cards(7),'gain2').gaintag.add('qixing');
        alert("触屏击杀模式已开启！点一次2魂币哟！再输入0即关闭哦！")
                
    },
                toself:true,
            },
            "xin_tianzizhaoling":{
                enable:true,
                type:"trick",
                filterTarget:function(card,player,target){
        return target.hasSkill('xin_fengtian')||target.hasSkill('xin_zulong');
    },
                selectTarget:-1,
                content:function(){
        'step 0'
        event.cards=get.cards(4);
        target.chooseButton(['天子诏令：请选择两张牌，令'+get.translation(player)+'获得并使用之',event.cards],2,true).set('ai',function(button){
           return get.attitude(player,target)*get.value(button.link);
        });  
        'step 1'
        if(result.bool){
            player.gain(result.links,'gain2')
            for(var i=0;i<result.links.length;i++){
                player.chooseUseTarget(result.links[i],true,false)                
            }            
        }   
    },
                fullskin:true,
            },
            "skill_off_card":{
                audio:"ext:新将包",
                type:"xjb_unique",
                subtype:"xjb_unique_usual",
                derivation:"",
                enable:function(event,player){
        return true;
    },
                lianheng:true,
                logv:false,
                selectTarget:1,
                modTarget:true,
                filterTarget:true,
                content:function(){  
        if(target.hasSkill('skill_off')) target.removeSkill('skill_off')
        else target.addSkill('skill_off')
        var num=cards[0].number+1
        if(cards[0].number<10) player.gain(game.createCard(cards[0].name,cards[0].suit,num))
    },
                fullskin:true,
            },
            "xin_shouqi":{
                audio:"ext:新将包",
                type:"xjb_unique",
                subtype:"xjb_unique_usual",
                derivation:"",
                enable:function(event,player){
        return true;
    },
                lianheng:true,
                logv:false,
                selectTarget:1,
                modTarget:true,
                filterTarget:true,
                content:function(){  
        var s=target.getCards('h');
        target.lose(s,ui.cardPile);
        target.draw(s.length)
        var num=cards[0].number+1
        if(cards[0].number<10) player.gain(game.createCard(cards[0].name,cards[0].suit,num))    
    },
                fullskin:true,
            },
            "xjb_tianming_huobi1":{
                audio:true,
                fullskin:true,
                type:"xjb_unique",
                subtype:"xjb_unique_money",
                enable:true,
                selectTarget:-1,
                cardcolor:"red",
                toself:true,
                filterTarget:function(card,player,target){
        return target===game.me;
    },
                modTarget:true,
                content:function(){
        game.xjb_gainJP("8吃饭")
        delete card.storage.vanish;
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                },
            },
            "xjb_tianming_huobi2":{
                audio:true,
                fullskin:true,
                type:"xjb_unique",
                subtype:"xjb_unique_money",
                enable:true,
                selectTarget:-1,
                cardcolor:"red",
                toself:true,
                filterTarget:function(card,player,target){
        return target===game.me;
    },
                modTarget:true,
                content:function(){      
        game.xjb_gainJP("19上限")
        delete card.storage.vanish;
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                },
            },
            "xjb_suitchange":{
                audio:"ext:新将包",
                type:"xjb_unique",
                subtype:"xjb_unique_talent",
                derivation:"",
                toself:true,
                enable:function(event,player){
        return true;
    },
                lianheng:true,
                logv:false,
                selectTarget:-1,
                modTarget:true,
                filterTarget:function(card,player,target){
        return target==player;
    },
                content:function(){  
    'step 0'
    lib.skill.xjbsuit_change={
    subSkill:{
        diamond:{
            mod:{
                suit:function(card,suit){
                if(suit!=='diamond')return 'diamond';
              },
            },
            sub:true,
        },
        club:{
            mod:{
                suit:function(card,suit){
                if(suit!=='club')return 'club';
              },
            },
            sub:true,
        },
        spade:{
            mod:{
                suit:function(card,suit){
                if(suit!=='spade') return 'spade';
              },
            },
            sub:true,
        },
        heart:{
            mod:{
                suit:function(card,suit){
                if(suit!=='heart') return 'heart';
              },
            },
            }
        }
        }
    lib.translate.xjbsuit_change="浸染"
    if(target.storage.xjb_unique_talent==undefined) target.storage.xjb_unique_talent=[]
    target.throwDice();
    'step 1'  
    target.removeSkill('xjbsuit_change_heart')
    target.removeSkill('xjbsuit_change_spade')
    target.removeSkill('xjbsuit_change_club')
    target.removeSkill('xjbsuit_change_diamond')
    target.chooseControl('heart','diamond','club','spade')
    "step 2"
    var skill
    game.log(target,'选择了'+get.translation(result.control));
    switch(result.control){
            case 'spade':skill='xjbsuit_change_spade';break
            case 'diamond':skill='xjbsuit_change_diamond';break
            case 'club':skill='xjbsuit_change_club';break
            case 'heart':skill='xjbsuit_change_heart';break
    }
    target.addTempSkill(skill,{player:"dieAfter"})
    var list=[[]],num=game.roundNumber+event.num
    list[0]=[num,skill]
    target.storage.xjb_unique_talent=target.storage.xjb_unique_talent.concat(list)
    },
                fullskin:true,
            },
            "xjb_Infinity":{
                audio:"ext:新将包",
                type:"xjb_unique",
                subtype:"xjb_unique_talent",
                derivation:"",
                enable:function(event,player){
        return true;
    },
                savable:true,
                lianheng:true,
                logv:false,
                selectTarget:1,
                modTarget:true,
                filterTarget:true,
                content:function(){  
        'step 0'
        if(!target.storage.xjb_card_allow)target.storage.xjb_card_allow={}
        target.storage.xjb_card_allow['xjb_penglai']=true
        if(target.storage.xjb_unique_talent==undefined) target.storage.xjb_unique_talent=[]
        target.throwDice();
       'step 1'
        if(event.num>3) event.num=4
        var list=[[]],num=game.roundNumber+event.num,skill=target.getSkills(null,false,false)
        for(var i in player.tempSkills){
            skill.remove(i);
        }  
        list[0]=[num,'xjb_penglai']
        target.storage.xjb_unique_talent=target.storage.xjb_unique_talent.concat(list)
        'step 2'
        target.addSkill('xjb_penglai')
        target.update()
        
    },
                fullskin:true,
            },
        },
        translate:{
            suicide:"自戕",
            "suicide_info":"出牌阶段，对自己使用。你失去手牌中的所有带有“伤害”标签，然后视为对自己使用一张【杀】。若你为曹操，则改为使用一张【无中生有】。",
            bulu:"不禄",
            "bulu_info":"出牌阶段，对自己使用，令自己失去一点体力并失去所有红色牌。若你为曹操，改为使用一张【无中生有】",
            qimendunjia:"奇门遁甲",
            "qimendunjia_info":"出牌阶段，对自己使用使用，你可随机发动一项X技(你为S角色，则改为自选)",
            hengshuofushi:"横槊赋诗",
            "hengshuofushi_info":"出牌阶段，对有“奉天”的角色使用，你摸一张牌。若此时其体力值大于2，其受到一点伤害。",
            "xin_qinnangshu":"青囊书",
            "xin_qinnangshu_info":"青囊1：出牌阶段限三次，你可选择至多两张手牌弃置之，然后你选择废弃X个装备栏或失去X点体力，之后你从牌堆中获得一张带有恢复标签的牌。(无此类牌则返回弃置的牌)(X为2-你弃置的牌数)<br>当你失去此装备时立即销毁之。",
            "card_lw":"文和乱武",
            "card_lw_info":"出牌阶段，对你自己使用，所有其他角色除非对其距离最近的角色使用【杀】，否则弃置两张牌并失去1点体力。",
            "xin_qinglong":"黄龙偃月刀",
            "xin_qinglong_info":"<br>偃月:当你对一名角色造成伤害前，你可失去一点体力令此伤害+1，你令其获得一个\"梦魇\"标记。<br>青龙相伴：此刀拥有【青龙偃月刀】的效果<br>二龙互化：你失去此牌时你立即销毁之，你装备【青龙偃月刀】。",
            "xin_chitu":"梦魇赤兔马",
            "xin_chitu_info":"增加以下效果:<br>追魂:锁定技，你受到伤害后，伤害来源须弃置一张牌并获得一个\"梦魇\"，然后你额外进行一个回合。<br>关公之魂：你失去此牌时立即销毁之，然后你装备【赤兔】。",
            "xin_baiyin":"曜日银狮子",
            "xin_baiyin_info":"<br>狮怒:你受到伤害前，你立即反伤；你可抵消一次，你体力值为1时受到的伤害，然后移去此牌。<br>你失去装备区里的该牌时立即销毁之，然后你恢复1点体力，之后你装备【白银狮子】。",
            "xin_hutou":"虎头湛金枪",
            "xin_hutou_info":"马超之魂：你装备了此牌【横骛】<br>虎恨：当你装备区失去此牌时你立即销毁之，然后你装备任意一张装备牌。",
            "xin_qixing":"卧龙七星袍",
            "xin_qixing_info":"<br>武侯之魂：你装备有此牌时，则拥有技能【七星】；你装备此牌时，立即获得七颗“星”。<br>七星续命：当一名角色濒死时，然后选择一项执行：1.使用一张【奇门遁甲】；2.自动弃置一颗\"星\"，令其恢复1点体力；<br>你失去此牌时，你立即销毁之，你获得你武将牌上的所有“星\"",
            "xin_tianzizhaoling":"天子诏令",
            "xin_tianzizhaoling_info":"出牌阶段，对有\"奉天\"的角色使用，其为你选择牌堆顶的四张牌中的两张牌，你获得并依次使用这些牌。",
            "skill_off_card":"S卡",
            "skill_off_card_info":"出牌阶段，对一名角色使用，你令其更改此时的S状态。",
            "xin_shouqi":"手气卡",
            "xin_shouqi_info":"出牌阶段，对一名角色使用，其更换手牌。",
            "xjb_tianming_huobi1":"铜币",
            "xjb_tianming_huobi1_info":"普普通通的铜币。",
            "xjb_tianming_huobi2":"金币",
            "xjb_tianming_huobi2_info":"珍贵的金币。",
            "xjb_suitchange":"浸染",
            "xjb_suitchange_info":"浸染(上限6回合)：你选择一种花色，你的所有牌均视为该花色。",
            "xjb_Infinity":"蓬莱",
            "xjb_Infinity_info":"蓬莱(上限4回合)：你的体力值为无限。使用后翻面",
        },
        list:[],
    },
    skill:{
        skill:{
            "xin_jincui":{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                round:1,
                content:function (){        
        player.fc_X(true,22,31)
        trigger.cancel()              
    },
                group:["xin_jincui_roundcount"],
            },
            "xin_chushi":{
                audio:"ext:新将包:false",
                enable:"phaseUse",
                filter:function (event,player){        
        if(player.countCards('h',{type:['trick','basic']})>0) return true
        return false
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filterCard:{
                    type:["trick","basic"],
                },
                unique:true,
                discard:false,
                lose:false,
                delay:false,
                usable:1,
                content:function (){               
        var name=get.name(cards[0],player),number=get.number(cards[0],player),suit=get.suit(cards[0],player),nature=get.nature(cards[0],player)
        var card=game.createCard(name,suit,number,nature)
        target.gain(cards,player,'giveAuto')                                                                                       
        player.chooseUseTarget(card);  
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){            
                return 2;
            },
                    },
                    threaten:1.5,
                },
            },
            "xin_yeling":{
                audio:"ext:新将包:false",
                trigger:{
                    player:["phaseBegin"],
                },
                forced:true,
                marktext:"谒",
                intro:{
                    markcount:"expansion",
                    mark:function(dialog,content,player){
            var content=player.getExpansions('xin_yeling');
            if(content&&content.length){
                if(player==game.me||player.isUnderControl()){
                    dialog.addAuto(content);
                }
                else{
                    return '共有'+get.cnNumber(content.length)+'次谒';
                }
            }
        },
                    content:function(content,player){
            var content=player.getExpansions('xin_yeling');
            if(content&&content.length){
                if(player==game.me||player.isUnderControl()){
                    return get.translation(content);
                }
                return '共有'+get.cnNumber(content.length)+'次谒';
            }
        },
                },
                mark:true,
                priority:1000,
                content:function(){
        'step 0'  
        player.judge()
        'step 1'
        player.addToExpansion(result.card,'gain2').gaintag.add('xin_yeling');
    },
            },
            "xin_huanshi":{
                group:["xin_huanshi_judge"],
                enable:"phaseUse",
                audio:"ext:新将包:false",
                content:function(){ 
        "step 0"
        player.draw()
        player.loseMaxHp()       
        "step 1"
        player.addGaintag(result,'xin_huanshi');   
    },
                subSkill:{
                    judge:{
                        trigger:{
                            global:["judgeBefore"],
                        },
                        filter:function(event,player){
                return player.countCards('he')>0;
            },
                        content:function(){
            "step 0"
            player.chooseCard('hes',true,'将一张牌置于牌堆顶').set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var result=trigger.judge(card)
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||result==0) return 0;
            if(attitude>0){
                return result-get.value(card)/2;
            }
            else{
                return -result-get.value(card)/2;
            }
        })
            "step 1"
         if(result.bool){      
            event.card=result.cards[0];
            player.lose(event.card,ui.cardPile,'visible','insert');
            player.$throw(event.card,1000);
            game.log(player,'将',event.card,'置于牌堆顶');
            player.draw().set('bottom',true);        
         }
          else event.finish()
           "step 2"          
            player.addGaintag(result,'xin_huanshi');   
            game.updateRoundNumber();
            game.playAudio('..','extension','新将包','xin_huanshi2')            
        },
                        sub:true,
                    },
                },
            },
            "xin_bianzhu":{
                audio:"ext:新将包:false",
                trigger:{
                    global:"phaseBegin",
                },
                filter:function(event,player){
        return event.player!=player;
    },
                unique:true,
                limited:true,
                skillAnimation:true,
                animationColor:"thunder",
                filterTarget:true,
                content:function(){
        "step 0" 
        var gains=trigger.player.getExpansions('xin_yeling')
        player.gain(gains,'gain2');
        game.countPlayer(function(current){
            if(current.hasSkill('xin_yeling')){                
                current.removeSkill('xin_yeling');
            }
        });      
        game.playAudio('..','extension','新将包','xin_bianzhu')
        player.chooseToUse('使用一张杀',{name:'sha'},true,function(card,player,target){
            if(trigger.player==target) return true;           
            return false;
        });
        "step 1"
        if(player.countCards('hs','sha')>0){
            player.chooseBool('是否继续出【杀】');
        }
        else event.goto(3)
        "step 2"
        if(result.bool){
            if(trigger.player.isAlive())event.goto(0);
        } 
        "step 3"
        player.awakenSkill('xin_bianzhu');
        if(trigger.player.isAlive()){                       
            player.die()
        } 
        else player.addSkill('xin_yiqing')                                
        game.countPlayer(function(current){
            if(current.hasSkill('xin_yeling')){                
                current.removeSkill('xin_yeling');
            }
       });
        /*
        "step 1"
        if(result.bool){
            player.logSkill('xin_bianzhu')
            var num=trigger.player.countMark('xin_yeling')+result.cards.length     
            trigger.player.damage(num)
            trigger.player.update()
            player.awakenSkill('xin_bianzhu');
        }
        else event.finish()
        "step 2"
        if(trigger.player.isAlive()){                       
            player.die()
        } 
        else player.addSkill('xin_yiqing')                                
        game.countPlayer(function(current){
            if(current.hasSkill('xin_yeling')){                
                current.removeSkill('xin_yeling');
            }
       });
       */
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            "xin_zhabing":{
                audio:"ext:新将包:false",
                trigger:{
                    player:"phaseBegin",
                },
                derivation:["xin_yeling","xin_bianzhu","xin_yiqing"],
                juexingji:true,
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                forced:true,
                filter:function(event,player){
        return player.hp===player.maxHp;
    },
                content:function(){     
        'step 0'
        trigger.cancel()               
        var targets=game.players.slice(0)
        player.fc_X(true,83,{skills:['xin_yeling'],expire:{player:'dieAfter'},onlyme:targets})
        'step 1'
        player.fc_X(true,1,23,133,143,{skills:['xin_bianzhu'],awaken:['xin_zhabing'],remove:['xin_yeling']})                          
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
        player.storage.xin_zhabing=false;
    },
            },
            "xin_yiqing":{
                enable:"phaseUse",
                qzj:true,
                filterCard:function(card){
        if(ui.selected.cards.length){
            if(get.type(card)!==get.type(ui.selected.cards[0])) return false
            if(!card.hasGaintag('xin_huanshi')) return false
            return true
        }        
        return card.hasGaintag('xin_huanshi')
    },
                complexCard:true,
                selectCard:function(card){
        if(ui.selected.cards.length) return-1
        return 1
    },
                filterTarget:function (card,player,target){ 
        return player.inRange(target)&&player!=target
    },
                filter:function(event,player,skill){
        return !player.hasSkill('skill_off')
    },
                changeS:true,
                content:function (){          
        target.addTempSkill('skill_noskill')      
        target.damage(cards.length)      
        player.changeS()   
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){         
                if(target.hp==1) return -3
                return -2;
            },
                    },
                    threaten:1.4,
                },
            },
            "xin_huzhu":{
                derivation:["xin_huzhu2"],
                audio:"ext:新将包:false",
                trigger:{
                    global:"useCardToTargeted",
                },
                check:function(event,player){
        return get.attitude(player,event.target)>0&&!event.target.hasSkill('xin_huzhu2');
    },
                filter:function (event,player){
      if(event.card.name=='sha'&&event.player!=player) return true    
      return false            
    },
                prompt:function(event,player){
        return '是否对'+get.translation(event.target)+'发动〖护主〗？'
    },
                content:function (){
        'step 0'
        player.chooseToDiscard('hs',1,'弃置一张手牌，或点受到一点伤害').set('ai',function(card){                        
            return 8-get.value(card)
        })        
        'step 1'
        if(result.bool){            
            trigger.target.draw(2)
        }  
        else{        
            player.damage('nosource')      
            trigger.target.addTempSkill('xin_huzhu2',{player:'dieAfter'})
            trigger.target.storage.xin_huzhu2++
        }
        'step 2'
        trigger.target.update();       
    },
                ai:{
                    threaten:2.6,
                },
            },
            "xin_huzhu2":{
                init:function (player){
        player.storage.xin_huzhu2=0;
        player.markSkill('xin_huzhu2');
        player.syncStorage('xin_huzhu2');
    },
                enable:["chooseToUse","chooseToRespond"],
                viewAs:{
                    name:"shan",
                    isCard:true,
                },
                filterCard:function(){return false},
                selectCard:-1,
                viewAsFilter:function(player){
        if(player.hp>-5) return true;
        return false;
    },
                onuse:function(event,player){
        'step 0'
        player.draw()
        player.storage.xin_huzhu2--;
        player.update();               
        'step 1'
        if(player.storage.xin_huzhu2<=0)player.removeSkill('xin_huzhu2')
    },
                onrespond:function(event,player){
        'step 0'
        player.draw()
        player.storage.xin_huzhu2--;
        player.update();               
        'step 1'
        if(player.storage.xin_huzhu2<=0)player.removeSkill('xin_huzhu2')
    },
                marktext:"护",
                prompt:"视为使用或打出一张【闪】",
                intro:{
                    content:"护：你可在需要时，视为使用或打出一张【闪】。若此做，你失去一个“护”。 ",
                },
                ai:{
                    respondShan:true,
                    order:3,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                    result:{
                        player:1,
                    },
                },
            },
            "xin_xiongli":{
                subSkill:{
                    damageadd:{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function(event,player){
              return (event.player.storage.xin_xiongli!=undefined&&event.player.storage.xin_xiongli>0)
            },
                        forced:true,
                        content:function(){
                trigger.num+=trigger.player.storage.xin_xiongli
                trigger.player.storage.xin_xiongli=0
            },
                        sub:true,
                    },
                },
                group:["xin_xiongli_damageadd"],
                enable:"phaseUse",
                init:function(player){
        player.storage.xin_xiongli=[]
    },
                filterTarget:function(target,player){
        return (target!=player)
    },
                filter:function (event,player){        
        if(player.hasSkill('skill_off')) return false
        return true
    },
                qzj:true,
                content:function (){
         if(!target.storage.xin_xiongli) target.storage.xin_xiongli=0
         target.storage.xin_xiongli++
         target.update()
         targets[0].addTempSkill('skill_noskill')
         targets[0].turnOver()
         player.damage('nosource')
         player.changeS2(true)         
    },
                ai:{
                    damage:true,
                    order:6,
                    result:{
                        target:function(player,target){
                return get.damageEffect(target,player);
            },
                    },
                    threaten:1.5,
                    expose:0.3,
                },
            },
            "xin_qimen":{
                trigger:{
                    player:"phaseJieshu",
                },
                chenSkill:true,
                content:function(){
       var prepare={
           skills:['xin_qimen_1'],          
       }
       player.fc_X(83,prepare,'ootSkill') 
       if(player.countMark('_xin_junzhu')>0) player.removeMark('_xin_junzhu',1)
    },
                group:"xin_qimen_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:["phaseDrawBegin"],
                        },
                        forced:true,
                        content:function(){
               var num=player.name1.endsWith('zhugeliang')?123:113          
               player.fc_X(true,num)
               trigger.num=player.countPhase()                         
            },
                        sub:true,
                    },
                },
            },
            "xin_mousheng":{
                audio:"ext:新将包:false",
                trigger:{
                    player:["chooseToCompareBefore","compareMultipleBefore"],
                    target:["chooseToCompareBefore","compareMultipleBefore"],
                },
                frequent:true,
                content:function(){
        'step 0'       
        var objects={
            choice:["xin_mousheng_2","xin_mousheng_K","xin_mousheng_7"],
            storage:"xin_mousheng",
        }
        player.fc_X(true,'choose','needResult',objects)
        'step 1'
        var string=player.storage["xin_mousheng"]
        player.addTempSkill(string,{player:string+"After"})        
    },
                subSkill:{
                    "2":{
                        enable:"chooseCard",
                        forced:false,
                        check:function(event,player){
        var player=_status.event.player;
        return (!player.hasCard(function(card){
            var val=get.value(card);
            return val<0||(val<=4&&(card.number<=10));
        },'h'))?10:0;
    },
                        filter:function(event){
             return event.type=='compare'&&!event.directresult;
            },
                        onCompare:function(player){                 
                player.removeSkill('xin_mousheng_2')
                var x=game.roundNumber
             return game.cardsGotoOrdering(game.createCard(get.typeCard('equip').randomGet(),'black',x)).cards;                
            },
                        sub:true,
                    },
                    "7":{
                        enable:"chooseCard",
                        forced:false,
                        xjb:true,
                        check:function(event,player){
        var player=_status.event.player;
        return (!player.hasCard(function(card){
            var val=get.value(card);
            return val<0||(val<=4&&(card.number<=10));
        },'h'))?10:0;
    },
                        filter:function(event){
        return event.type=='compare'&&!event.directresult;
    },
                        onCompare:function(player){     
                var x=game.roundNumber
                player.removeSkill('xin_mousheng_7')
        return game.cardsGotoOrdering(game.createCard(get.typeCard('basic').randomGet(),'red',x)).cards;                
    },
                        sub:true,
                    },
                    K:{
                        enable:"chooseCard",
                        xjb:true,
                        forced:false,
                        check:function(event,player){
        var player=_status.event.player;
        return (!player.hasCard(function(card){
            var val=get.value(card);
            return val<0||(val<=4&&(card.number>=10));
        },'h'))?10:0;
    },
                        filter:function(event){
        return event.type=='compare'&&!event.directresult;
    },
                        onCompare:function(player){    
                var x=game.roundNumber
                player.removeSkill('xin_mousheng_K')
        return game.cardsGotoOrdering(game.createCard(get.typeCard('trick').randomGet(),'red',x)).cards;                
    },
                        sub:true,
                    },
                },
            },
            "xin_weiwo":{
                trigger:{
                    player:"useCardAfter",
                },
                check:function(event,player){
        if(player==event.player) return true;
        return false;
    },
                filter:function(event,player){
        return (get.type(event.card)=='trick');
    },
                frequent:true,
                delay:["lebu","bingliang","caomu"],
                content:function(){ 
        player.chooseUseTarget(game.createCard2(lib.skill.xin_weiwo.delay.randomGet()));
    },
                ai:{
                    effect:{
                        target:function(card,player,target,current){
                if(card.name=='tiesuo') return 'zeroplayertarget';
            },
                    },
                },
            },
            "xin_fq1":{
                trigger:{
                    player:["phaseAfter","phaseJieshuBegin","phaseDrawBefore","phaseDiscardBefore"],
                },
                charlotte:true,
                direct:true,
                forced:true,
                priority:100,
                content:function(){
        if(event.triggername=='phaseAfter'){
            player.storage.xin_fq1=0
            player.removeSkill('xin_fq1')
            player.update()
        }
        else trigger.cancel()
        if(event.triggername=='phaseJudgeBegin')game.log(player,'跳过了判定阶段');       
        else if(event.triggername=='phaseDrawBefore')game.log(player,'跳过了摸牌阶段');       
        else if(event.triggername=='phaseJieshuBegin')game.log(player,'跳过了结束阶段');
        else game.log(player,'跳过了弃牌阶段');
    },
                init:function (player){
        player.storage.xin_fq1=0;
        player.markSkill('xin_fq1');
        player.syncStorage('xin_fq1');
    },
                intro:{
                    content:"该回合你跳过判定阶段、摸牌阶段、弃牌阶段、结束阶段",
                },
            },
            "xin_fq2":{
                trigger:{
                    player:["phaseAfter","phaseUseBefore","phaseDiscardBefore","phaseJudgeBegin"],
                },
                charlotte:true,
                direct:true,
                forced:true,
                priority:100,
                content:function(){
        if(event.triggername=='phaseAfter'){
            player.storage.xin_fq2=0
            player.removeSkill('xin_fq2')
            player.update()
        }
        else trigger.cancel(); 
        if(event.triggername=='phaseUseBefore')game.log(player,'跳过了出牌阶段');              
        else if(event.triggername=='phaseJudgeBegin')game.log(player,'跳过了判定阶段');
        else game.log(player,'跳过了弃牌阶段');
    },
                init:function (player){
        player.storage.xin_fq2=0;
        player.markSkill('xin_fq2');
        player.syncStorage('xin_fq2');
    },
                intro:{
                    content:"该回合你跳过准备阶段、出牌阶段、弃牌阶段",
                },
            },
            "xin_fq3":{
                trigger:{
                    player:["phaseAfter","phaseDiscardBefore","phaseZhunbeiBegin","phaseJieshuBegin"],
                },
                charlotte:true,
                direct:true,
                forced:true,
                priority:100,
                content:function(){
        if(event.triggername=='phaseAfter'){
            player.storage.xin_fq3=0
            player.removeSkill('xin_fq3')
            player.update()
        }
        else trigger.cancel();
        if(event.triggername=='phaseZhunbeiBegin')game.log(player,'跳过了准备阶段');
        else if(event.triggername=='phaseJieshuBegin')game.log(player,'跳过了结束阶段');
        else game.log(player,'跳过了弃牌阶段');
    },
                init:function (player){
        player.storage.xin_fq3=0;
        player.markSkill('xin_fq3');
        player.syncStorage('xin_fq3');
    },
                intro:{
                    content:"该回合你跳过准备阶段、弃牌阶段",
                },
            },
            "xin_fangquan":{
                enable:"phaseUse",
                filterCard:true,
                selectCard:[1,3],
                position:"hes",
                check:function (card){
        return 6-get.value(card)
    },
                xjb:true,
                usable:1,
                filterTarget:function (card,player,target){
        return !target.hasSkill('xin_fangquan')&&!target.hasSkill('xin_fq2')&&!target.hasSkill('xin_fq3')&&!target.hasSkill('xin_fq1');
    },
                prompt:"令一名角色额外进行一个回合",
                content:function (){
        var num=cards.length;
        switch(num){
            case 1:{                
                target.addSkill('xin_fq1')    
                target.storage.xin_fq1++;     
                target.update()
            };break;
            case 2:{                
                target.addSkill('xin_fq2')  
                target.storage.xin_fq2++;   
                target.update()
            };break;
            case 3:{
                target.addSkill('xin_fq3')
                target.storage.xin_fq3++;   
                target.update()
            };break;             
        }         
       target.insertPhase();
    },
                ai:{
                    order:6,
                    result:{
                        target:function (player,target){             
                return 2;
            },
                    },
                    threaten:1.2,
                },
            },
            "xin_baisu":{
                audio:"ext:新将包:false",
                trigger:{
                    global:"phaseAfter",
                },
                priority:-1,
                forced:true,
                junSkill:true,
                zhuSkill:true,
                direct:true,
                filter:function(event,player){
        var target=_status.currentPhase
            if(!player.hasZhuSkill('xin_baisu')&&get.mode()=='identity') return false;
            return target!=undefined&&target.group=='shu'
    },
                content:function(){
        if(trigger.player.getHistory('skipped').length>0){
            game.asyncDraw([trigger.player,player])
            player.logSkill('xin_baisu')
            trigger.player.usechenSkill()                        
        }                            
    },
            },
            "xin_xiangle":{
                audio:"ext:新将包:false",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                priority:1,
                content:function(){
        "step 0"
        var list=[]       
        list.push('xin_fq1')
        list.push('xin_fq2')
        event.list=list      
        "step 1"
        if(event.list&&event.list.length){
            player.chooseControl(event.list).set('prompt','选择一项将要获得标记').set('ai',function(){
                return event.list.randomGet()
            })
        }
        "step 2"
        if(result.control){
            event.control=result.control
            player.chooseTarget(get.prompt('xin_xiangle'),'令一名角色获得'+get.translation(event.control)+'标记',function(card,player,target){
                return target!=_status.currentPhase&&!target.hasSkill('xin_fq2')&&!target.hasSkill('xin_fq3')&&!target.hasSkill('xin_fq1');
        }).set('ai',function(target){
            return get.attitude(player,target);     
        }); 
        }
        "step 3"
        if(result.bool){
            var target=result.targets[0]
            if(event.control=='xin_fq2'){  
                target.addSkill(event.control)
                target.storage.xin_fq2++;     
            } 
            if(event.control=='xin_fq1'){
                target.addSkill(event.control)
                target.storage.xin_fq1++;     
            }         
            target.update();       
            player.logSkill('xin_xiangle',target)
            target.insertPhase();
        }
    },
            },
            "xin_zhibang":{
                init:function(player,skill){
        if(!player.storage[skill]) player.storage.xin_zhibang=[];
    },
                marktext:"棒",
                intro:{
                    content:"cards",
                    onunmark:function(storage,player){
            if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
             storage.length=0;
            }
        },
                },
                mark:true,
                trigger:{
                    source:["damageBegin"],
                    player:["phaseZhunbeiBegin"],
                },
                xjb:true,
                content:function(){
        'step 0'
        event.target=trigger.player
        event.num=player.storage.xin_chuhui.contains(event.target)?2:1
        'step 1'        
        event.num--;
       'step 2'
       var num=event.target==player?Infinity:1
        player.choosePlayerCard(event.target,[1,num],'hej',true).set('prompt','选择作为"棒"的牌');
        'step 3'
        if(result&&result.links&&result.links.length){
            event.target.lose(result.links,ui.special,'toStorage');
            player.markAuto('xin_zhibang',result.links);            
            game.log(player,'将',result.links,'置于其武将牌上');
        }
    },
                ai:{
                    damage:true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.type(card)=='delay'){
                    return 'zeroplayertarget';
                }
            },
                    },
                    expose:0.3,
                },
            },
            "xin_chuhui":{
                audio:"ext:新将包:false",
                enable:"phaseUse",
                init:function(player){
        if(!player.storage.xin_chuhui) player.storage.xin_chuhui=[];
    },
                filter:function(event,player){
        return player.getStorage('xin_zhibang').length>=5;
    },
                filterTarget:function(card,player,target){
        if(!player.storage.xin_chuhui) return true
        if(target==player) return true
        if(!player.storage.xin_chuhui.contains(target)) return true
        return false
    },
                content:function(){                        
        if(!player.storage.xin_chuhui) player.storage.xin_chuhui=[];
        player.storage.xin_chuhui.add(target);
        player.storage.xin_chuhui.sortBySeat();
        player.markSkill('xin_chuhui');      
        target.gain(player.storage.xin_zhibang,'gain2','fromStorage');        
        player.storage.xin_zhibang.length=0;
        player.update()           
        target.damage(2,player)    
        if(target.name1.endsWith('caocao')){
            target.recover(2)
        }
    },
                intro:{
                    content:"已对$发动过〖除秽〗",
                },
                ai:{
                    damage:true,
                    order:2,
                    result:{
                        target:function(player,target){
                return get.damageEffect(target,player);
            },
                    },
                    threaten:1.5,
                    expose:0.3,
                },
            },
            "xin_bingjie":{
                trigger:{
                    global:["phaseZhunbeiBegin"],
                    player:"damageEnd",
                },
                filter:function(event,player){
        return event.player!=undefined;
    },
                direct:true,
                content:function(){
        'step 0'   
        if(event.triggername=='damageEnd')event.count=trigger.num
        'step 1'
        if(event.triggername=='damageEnd'){
            event.count--
            player.chooseTarget('令一名角色将手牌调至体力上限(至多为5)',true,function(card,player,target){
            return true
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            var draw=Math.min(5,target.maxHp)-target.countCards('h');
            if(draw>=0){
                if(target.hasSkillTag('nogain')) att/=6;
                if(att>2){
                    return Math.sqrt(draw+1)*att;
                }
                return att/3;
            }
            if(draw<-1){
                if(target.hasSkillTag('nogain')) att*=6;
                if(att<-2){
                    return -Math.sqrt(1-draw)*att;
                }
            }
            return 0;
            var draw=Math.min(5,target.maxHp)-target.countCards('h');
            if(draw>=0){
                if(target.hasSkillTag('nogain')) att/=6;
                if(att>2){
                    return Math.sqrt(draw+1)*att;
                }
                return att/3;
            }
            if(draw<-1){
                if(target.hasSkillTag('nogain')) att*=6;
                if(att<-2){
                    return -Math.sqrt(1-draw)*att;
                }
            }
            return 0;
        });
        }
        else{
            event.target=trigger.player
            var a=event.target.maxHp
            var n=a>5?5:a
            var next=player.chooseBool('是否令'+get.translation(event.target)+'将手牌调至'+n+'张牌，然后你失去1点体力？')
            next.set('ai',function(){
                    var event=_status.event;                    
                    if(event.player.hp>1){
                        if(event.source.countCards("h")<event.source.maxHp)return (get.attitude(event.player,event.source)>0)
                    }
                    return false
            });
            next.set('source',event.target);
        }
        'step 2'     
        if(result.bool){
        event.target=event.triggername=='damageEnd'?result.targets[0]:trigger.player
        var num=event.target.maxHp>5?5:event.target.maxHp
        event.target.xjb_adjustHandCardTo(num,'xin_liuxiang')                     
        }   
        else if(event.count>0) event.goto(1)
        else event.finish()
        'step 3' 
         if(event.triggername!='damageEnd'){
            player.loseHp()
        }
        else if(event.count>0) event.goto(1)
        else event.finish()
        
    },
            },
            "xin_shiyin":{
                audio:"ext:新将包:false",
                trigger:{
                    player:"phaseDiscardEnd",
                },
                direct:true,
                filter:function(event,player){
        var cards=[];
        player.getHistory('lose',function(evt){
            if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards2);
        });
        return cards.length>0;
    },
                chenSkill:true,
                content:function(){
        'step 0'     
        event.cards=[];  
        player.getHistory('lose',function(evt){
            if(evt.type=='discard'&&evt.getParent('phaseDiscard')==trigger) event.cards.addArray(evt.cards2);
        });
        'step 1'
        var colors=[],type=[],num1=0,num2=0;
        for(var i=0;i<event.cards.length;i++){
            colors.add(get.color(event.cards[i]));
            type.add(get.type(event.cards[i]));
        }
        event.colors=colors;
        event.type=type
        'step 2'
        var num1=0,num2=0        
        if(event.colors.length==1){
            num1=get.color(event.cards[0])=='red'?11:12
        }
        if(event.type.length==1){
            switch(get.type(event.cards[0])){
                case 'basic':num2=1;break;
                case 'trick':num2=13;break;
                case 'equip':num2=42;break;
            }
                      
        }
        if(num1||num2)player.chooseBool(get.xjb_number(num1,-1)+'？'+get.xjb_number(num2,-1)+'？')                                        
        else event.finish()
        if(num1) event.num1=num1
            if(num2) event.num2=num2
        'step 3'
        if(result.bool){         
            player.fc_X(true,event.num1,event.num2,{onlyme:game.players.slice(0)}) 
        }
        if(player.countMark('_xin_junzhu')>0) player.removeMark('_xin_junzhu',1)              
     },
            },
            "xin_liuxiang":{
                group:["xin_liuxiang_xiang","xin_liuxiang_aid"],
                charlotte:true,
                subSkill:{
                    xiang:{
                        marktext:"香",
                        intro:{
                            name:"香",
                            content:"mark",
                        },
                        sub:true,
                    },
                    aid:{
                        trigger:{
                            global:["useCardAfter","respondAfter"],
                        },
                        forced:true,
                        charlotte:true,
                        filter:function(event,player){
                return event.player.hasHistory('lose',function(evt){
                    if(evt.getParent()!=event) return false;
                    for(var i in evt.gaintag_map){
                        if(evt.gaintag_map[i].contains('xin_liuxiang')) return true;
                    }
                    return false;
                });
            },
                        logTarget:"player",
                        content:function(){
                'step 0'
                event.target=trigger.player
                event.target.addMark('xin_liuxiang_xiang',1)
                event.target.update()                
                var num=event.target.hp
                if(event.target.countMark('xin_liuxiang_xiang')>=num){
                    player.chooseBool('对'+get.translation(event.target)+'是否令其恢复一点体力，或点取消令其加一点体力上限')
                }
                else event.finish()
                'step 1'
                var num=result.bool?11:21 
                event.target.fc_X(true,num)
                event.target.removeMark('xin_liuxiang_xiang',event.target.countMark('xin_liuxiang_xiang'));
            },
                        sub:true,
                    },
                },
            },
            "xin_yexi":{
                enable:"phaseUse",
                filter:function(event,player){
        return player.countCards('h')>0
    },
                filterTarget:true,
                filterCard:function(card){
        if(ui.selected.cards.length){
            return get.suit(card)==get.suit(ui.selected.cards[0])
        }        
        return true
    },
                complexCard:true,
                selectCard:function(card){
        if(ui.selected.cards.length) return-1
        return 1
    },
                check:function (card){
        return 6-get.value(card)
    },
                changeS:true,
                content:function (){     
        player.fc_X(true,2,[cards.length],'num_2',{onlyme:[target]})   
        player.changeS(1)
    },
                ai:{
                    order:5,
                    result:{
                        player:function(player){
                var num1=player.countCards('h',{color:"black"}),num2=player.countCards('h',{color:"red"})
                if(Math.abs(num1-num2)<3) return 2
                return 0
            },
                    },
                    threaten:1.5,
                },
            },
            "xin_ziruo":{
                trigger:{
                    target:"useCardToTarget",
                },
                changeS:true,
                filter:function(event,player){
        if(event.player==player) return false
        if(!event.targets||!event.targets.contains(player)) return false;
        return game.hasPlayer(function(current){
            return event.targets.contains(current)&&!current.hasSkill('skill_off')
        });
    },
                content:function(){
        "step 0"
        player.chooseTarget('为此牌减少任意个目标',
            [1,Infinity],function(card,player,target){
            return _status.event.targets.contains(target)&&!target.hasSkill('skill_off');
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            if(!trigger.excluded.contains(target)){
                return -get.effect(target,trigger.card,trigger.player,_status.event.player);
            }
            return -1;
        }).set('targets',trigger.targets);
        "step 1"
        if(result.bool){       
            trigger.getParent().excluded.addArray(result.targets);
            game.delay();
           for(var i=0;i<result.targets.length;i++) result.targets[i].changeS2(true,1)            
        }       
    },
            },
            "xin_guixin":{
                audio:"ext:新将包:2",
                trigger:{
                    player:"damageEnd",
                },
                junSkill:true,
                unique:true,
                zhuSkill:true,
                xjb:true,
                derivation:["xin_tanyan"],
                direct:true,
                filter:function(event,player){        
        if(get.mode()=='identity')return player.hasZhuSkill('xin_guixin')&&player.identity=='zhu';       
        return true
    },
                content:function(){
        'step 0'  
        event.num=trigger.num
        'step 1'
        var groups=[]
        var a=game.filterPlayer(function(target){
            return true;
        })      
        for(var i=0;i<a.length;i++){
            groups.add(a[i].group)            
        }        
        groups.add('取消')
        player.chooseControl(groups)        
        'step 2'     
        if(result.control=='取消'){
            event.num--
            event.goto(5)
        }
        else{
         event.targets=game.filterPlayer(function(target){
            return target.group==result.control
        })
        if(player.countMark('_xin_junzhu')>0) event.goto(3)    
       }           
        'step 3'
        game.asyncDraw(event.targets);
        player.draw()
        'step 4'       
        for(var i=0;i<event.targets.length;i++){
            if(event.targets[i]!=player)event.targets[i].addSkill('xin_tanyan')
            if(event.targets[i].countMark('xin_tanyan')>0){
                event.targets[i].removeMark('xin_tanyan',1);
        }
        }
        player.removeMark('_xin_junzhu',1);
        event.num--
        'step 5'
        if(event.num>0) event.goto(1)
    },
            },
            "xin_tanyan":{
                audio:"ext:新将包:false",
                enable:"phaseUse",
                usable:1,
                filterCard:{
                    color:["red"],
                },
                check:function(card){
        return 9-get.value(card)
    },
                position:"he",
                selectCard:[1,Infinity],
                discard:false,
                lose:false,
                filterTarget:function(card,player,target){
        var num1=ui.selected.cards.length;
        var num2=player.countMark('xin_tanyan')+1||1
        return target.hasSkill('xin_guixin')&&num1==num2;
    },
                content:function(){
        'step 0'
        target.gain(cards,player,'giveAuto')
        player.addMark('xin_tanyan',1)
        player.update()
        'step 1'
        for(var i=0;i<cards.length;i++){
            player.useCard(game.createCard('jiu','black'),player)
        }      
        player.usechenSkill()        
    },
                ai:{
                    order:10,
                    result:{
                        target:function(player,target){
                if(target.hp==1) return 5;
                return 2;
            },
                    },
                },
                intro:{
                    content:"已发动过#次技能",
                },
                marktext:"讌",
            },
            "xin_fengtian":{
                init:function(player,skill){
        game.broadcastAll(function(){lib.inpile.add('xin_tianzizhaoling','hengshuofushi')});
        game.updateRoundNumber();
        if(!player.storage[skill]){
            player.storage.xin_fengtian=[];
            player.storage.xin_fengtian.push(game.createCard2('hengshuofushi','spade',12))
            player.update()
        } 
    },
                marktext:"奉天",
                intro:{
                    content:"cards",
                    onunmark:function(storage,player){
            if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
             storage.length=0;
            }
        },
                },
                mark:true,
                enable:"phaseUse",
                filterCard:{
                    color:"red",
                },
                position:"hes",
                filterTarget:function(game,player,target){
        return target.isZhu
    },
                xjb:true,
                round:1,
                content:function(){
        'step 0' 
        if(!player.storage.xin_fengtian||player.storage.xin_fengtian.length<1){
            player.storage.xin_fengtian=[];
            player.storage.xin_fengtian.push(game.createCard2('xin_tianzizhaoling','spade',12))
            player.update()
        }  
        event.card=player.storage.xin_fengtian[0];
        target.chooseBool('是否令'+get.translation(player)+'指定另一名角色使用'+get.translation(event.card)).set('ai',function(){
            if(get.attitude(player,target)>0) return true
            if(Math.random()<0.33) return false
            return true
        })
        'step 1'       
        if(result.bool) event.goto(3)
        else player.fc_X(true,'getNumber','choose',{
            getNumber:[44,173],
            onlyme:targets,                                      
            chopro:"选择44令"+get.translation(target)+"受到一点伤害，或选择173令其翻面"})
        'step 2'      
        event.finish()
        'step 3'       
        player.chooseTarget(get.prompt('xin_fengtian'),'令一名角色使用【天子诏令】',true,function(card,player,target){
                return target!=targets[0];
        }).set('ai',function(target){         
            if(event.card.name=='bulu') return -get.attitude(player,target);
            if(event.card.name=='suicide') return -get.attitude(player,target);
            if(event.card.name=='hengshuofushi') return get.attitude(player,target);            
        });           
        'step 4'
        if(result.bool){
        event.target=result.targets[0]      
        var card=game.createCard(event.card)
        ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
        game.log(player,'将',card,'置于牌堆顶');
        event.target.chooseUseTarget(game.createCard('xin_tianzizhaoling'),true,false)
        }
        'step 5'
        player.storage.xin_fengtian=[];
        switch(get.name(event.card)){
            case 'bulu':{                  
                  player.storage.xin_fengtian.push(game.createCard2('suicide','spade',12))
                  player.update()
             };break;                 
            case 'hengshuofushi':{            
                  player.storage.xin_fengtian.push(game.createCard2('bulu','heart',7))
                  player.update()
              };break;
            case 'suicide':{
                  player.storage.xin_fengtian.push(game.createCard2('hengshuofushi','red',73))
                  player.update()
              };break;
            
        }
    },
                ai:{
                    order:8,
                    result:{
                        player:1,
                        target:-1,
                    },
                },
                group:["xin_fengtian_roundcount"],
            },
            "xin_niepan":{
                audio:"ext:新将包:false",
                enable:"chooseToUse",
                usable:1,
                filter:function(event,player){
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        else if(event.parent.name=='phaseUse'){
            return true;
        }
        return false;
    },
                "translate1":"你濒死时/出牌阶段时限一次，你可以摸两张牌。",
                "translate2":"你濒死时/出牌阶段时限一次，你可以恢复一点体力。",
                content:function(){        
        var num=player.hasSkill('skill_off')?1:11
        var num2=num==1?2:1
        player.fc_X(true,num,'num_2',[num2])
    },
                ai:{
                    save:true,
                    order:9,
                    result:{
                        player:function(player){
                if(player.hp<=0) return 10;
                if(player.hp<=2&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                },
            },
            "xin_tianming":{
                audio:"ext:新将包:false",
                trigger:{
                    player:["loseAfter"],
                },
                marktext:"命",
                init:function(player){
        if(!player.storage.xin_tianming) player.storage.xin_tianming=[];
    },
                intro:{
                    content:"你已有花色$",
                },
                charlotte:true,
                forced:true,
                content:function(){     
        player.storage._skill_xin_X[0]=13
        for(var i=0;i<trigger.cards.length;i++){
            var suit=get.suit(trigger.cards[i])
            if(!player.storage.xin_tianming.contains(suit)){
                player.storage.xin_tianming.add(suit);
                player.draw()
            }
        }
        player.markSkill('xin_tianming');
                      
    },
                ai:{
                    threaten:0.7,
                },
            },
            "xin_zulong":{
                audio:"ext:新将包:false",
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                frequent:true,
                content:function(){  
        'step 0'         
        var objects={
            choice:['限定技','转换技','觉醒技','主公技','锁定技'],
            storage:"xin_zulong",
        }
        player.fc_X(true,'choose','needResult',objects)
        'step 1'
        var string=get.xjb_translation(player.storage["xin_zulong"])
        trigger.player.addSkillrandom(string,trigger.num-1)
    },
            },
            "xin_duice":{
                audio:"ext:新将包:false",
                enable:"phaseUse",
                filterCard:true,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                content:function (){
        "step 0"              
        player.chooseToCompare(target);        
        "step 1"      
        if(result.bool){                 
            player.gain(result.player);
            player.gain(result.target);
            event.finish()
         }       
    },
                ai:{
                    order:9,
                    result:{
                        player:1,
                        target:function (player,target){            
                return -2;
            },
                    },
                },
            },
            "xin_dongxin":{
                enable:"phaseUse",
                usable:10,
                filterTarget:function(card,player,target){
        return target!=player&&target.countCards('h')
    },
                content:function(){
        'step 0'
        var cards=target.getCards('h',{type:"trick"});//获取目标的手牌
        if(cards.length>0){
            var num=player.hp>target.hp?1:0
            if(num==1)var next=player.chooseButton(['洞心：'+get.translation(target)+'的手牌',cards],1,false);
            else player.chooseButton(['洞心：'+get.translation(target)+'的手牌',cards],0,false);      
        }       
        'step 1'
        if(result.bool){ 
            var gain=result.links
            player.gain(gain,target,'giveAuto')          
        } 
    },
                prompt:"观看一名角色的手牌",
            },
            "xin_qizuo":{
                trigger:{
                    global:"useCard",
                },
                filter:function(event,player){
        if(event.player.hp<=player.hp) return false
        if(!event.targets||!event.card) return false;
        var type=get.type(event.card,player),name=get.name(event.card,player)
        if(type!=='trick'&&type!=='delay'&&name!=='sha') return false
        if(player.countCards('he',function(card){
            return card.number>=10
        })<1) return false
        return game.hasPlayer(function(current){
            return player.canUse(event.card,current);
        });
    },
                check:function(event,player){
        if(get.attitude(player,event.target)>0){
            return true
        }
    },
                direct:true,
                content:function(){   
        "step 0"
        player.chooseToDiscard('he',function(card){
            return get.number(card)>=10;
        }).set("prompt","是否弃置一张点数不小于10的牌来重新指定目标？")  
        "step 1"
        if(result.bool){
            trigger.targets.length=0;
            trigger.all_excluded=true;
            event.card=result.cards
            /*var name=trigger.card.name
            if(lib.card[name].selectTarget&&==-1){
                event.targets=game.players.slice(0)
                event.targets.remove(player)
                event.goto(3)
            }
            if(lib.card[name].selectTarget) event.num=lib.card[name].selectTarget*/
        }
        else event.finish()
        "step 2"  
        var name=trigger.card.name
        var num=lib.card[name].selectTarget
        if(num===-1){
            num=game.countPlayer(function(current){
                return player.canUse(trigger.card.name,current)
            })
        }        
        var next=player.chooseTarget(num)         
        next.set('filterTarget',function(card,player,target){
            if(player.canUse(trigger.card.name,target)) return true
        });
        next.set('prompt',('选择'+get.translation(trigger.card)+'的目标'));
        "step 3"
         var cards=[]
        cards=cards.concat(trigger.cards,event.card)
        if(get.type(trigger.card)=='delay')result.targets[0].addJudge({name:trigger.card.name},cards)
        else  player.useCard({name:trigger.card.name},result.targets,cards)           
    },
                ai:{
                    threaten:1.3,
                },
            },
            "xin_zaozhong":{
                audio:"ext:新将包:false",
                frequent:true,
                trigger:{
                    player:["damageEnd"],
                },
                content:function (){
        player.fc_X(2,"num_2",[3])             
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    result:{
                        effect:function (card,player,target){              
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    var num=1;
                    if(get.attitude(player,target)>0){
                        if(player.needsToDiscard()){
                            num=0.7;
                        }
                        else{
                            num=0.5;
                        }
                    }
                    if(player.hp>=4) return [1,num*2];
                    if(target.hp==3) return [1,num*1.5];
                    if(target.hp==2) return [1,num*0.5];
                }
            },
                    },
                    threaten:0.6,
                },
            },
            "xin_taoni":{
                enable:"phaseUse",
                filterCard:{
                    suit:"diamond",
                },
                filterTarget:true,
                position:"he",
                qzj:true,
                filter:function (event,player){        
        if(player.hasSkill('skill_off')) return false
        return player.countCards('hes',{suit:'diamond'})>0
    },
                prepare:function(cards,player){
        player.$throw(cards,1000);
        game.log(player,'将',cards,'置入了弃牌堆');
    },
                discard:false,
                loseTo:"discardPile",
                visible:true,
                delay:0.5,
                content:function(){
        target.fc_X(true,13,'noskill_temp')
        player.fc_X(true,1,'S')
    },
                mod:{
                    cardUsableTarget:function(card,player,target){
            if(target.isLinked()) return true;
        },
                },
                ai:{
                    order:9,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            "xin_jiang":{
                audio:"ext:新将包:false",
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                filter:function(event,player){
        return event.source.isAlive()
    },
                content:function(){
        var num=0
        for(var i=0;i<game.players.length;i++){
                if(game.players[i].isLinked()) num++
        }
        if((player.hasZhuSkill('xin_yingyi')&&get.mode()=='identity')||get.mode()!='identity'){
            for(var i=0;i<game.players.length;i++){
                if(game.players[i].group==='wu') num++
            }
        }
        if(num>3) num=3
        game.asyncDraw([trigger.player,trigger.source],num)
    },
            },
            "xin_yingyi":{
                zhuSkill:true,
                junSkill:true,
            },
            "xin_whlw":{
                audio:"ext:新将包:false",
                trigger:{
                    global:["dying","dieAfter"],
                    player:"dying",
                },
                filter:function(event,player){
        if(_status.currentPhase==player) return true;
        if(event.player==player) return true;
        return false
    },
                frequent:true,
                content:function(){
        player.draw()
    },
                ai:{
                    expose:0.2,
                    threaten:1.5,
                },
            },
            "xin_qns":{
                mod:{
                    aiValue:function(player,card,num){
            if(get.name(card)!='tao'&&get.color(card)!='red') return;
            var cards=player.getCards('hs',function(card){
                return get.name(card)=='tao'||get.color(card)=='red';
            });
            cards.sort(function(a,b){
                return (get.name(a)=='tao'?1:2)-(get.name(b)=='tao'?1:2);
            });
            var geti=function(){
                if(cards.contains(card)){
                    return cards.indexOf(card);
                }
                return cards.length;
            };
            return Math.max(num,[6.5,4,3,2][Math.min(geti(),2)]);
        },
                    aiUseful:function(){
            return lib.skill.kanpo.mod.aiValue.apply(this,arguments);
        },
                },
                locked:false,
                audio:"ext:新将包:false",
                enable:"chooseToUse",
                viewAsFilter:function(player){
        return player.countCards('hes',{color:'red'})>0;
    },
                filterCard:function(card){
        return get.color(card)=='red';
    },
                position:"hes",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张红色牌当桃使用",
                check:function(card){return 15-get.value(card)},
                onuse:function(event,player){
        if(player.countCards('h')<3) player.draw()
    },
                ai:{
                    threaten:1.5,
                    basic:{
                        order:function(card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function(player,target){
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "xin_hlyyd":{
                mod:{
                    cardUsableTarget:function(card,player,target){
            if(target.hasMark('new_wuhun_mark')) return true;
        },
                },
                locked:false,
                audio:"ext:新将包:false",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        if(get.zhu(player,'shouyue')) return true;
        return get.color(card)=='red';
    },
                position:"hes",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function(player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('hes')) return false;
        }
        else{
            if(!player.countCards('hes',{color:'red'})) return false;
        }
    },
                onuse:function(event,player){
        player.seekTag1('damage')
    },
                prompt:"将一张红色牌当杀使用或打出",
                check:function(card){
        var val=get.value(card);
        if(_status.event.name=='chooseToRespond') return 1/Math.max(0.1,val);
        return 5-val;
    },
                ai:{
                    respondSha:true,
                    skillTagFilter:function(player){
            if(get.zhu(player,'shouyue')){
                if(!player.countCards('hes')) return false;
            }
            else{
                if(!player.countCards('hes',{color:'red'})) return false;
            }
        },
                    yingbian:function(card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            var base=0,hit=false;
            if(get.cardtag(card,'yingbian_hit')){
                hit=true;
                if(targets.filter(function(target){
                    return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_all')){
                if(game.hasPlayer(function(current){
                    return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_damage')){
                if(targets.filter(function(target){
                    return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                    },true))&&!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })
                })) base+=5;
            }
            return base;
        },
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function(item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
                    if(!isLink&&player.hasSkill('jiu')){
                        if(!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:card,
                            jiu:true,
                        })){
                            if(get.attitude(player,target)>0){
                                return -7;
                            }
                            else{
                                return -4;
                            }
                        }
                        return -0.5;
                    }
                    return -1.5;
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function(card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function(card){
                if(card.nature) return 1;
            },
                        fireDamage:function(card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function(card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function(card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "xin_wlqxp":{
                audio:"ext:新将包:false",
                trigger:{
                    player:["phaseZhunbeiBegin"],
                },
                frequent:true,
                content:function(){
        "step 0"
        var num=game.countPlayer()<4?4:6;
        var cards=get.cards(num);
        game.cardsGotoOrdering(cards);
        var next=player.chooseToMove();
        next.set('list',[
            ['牌堆顶',cards],
            ['牌堆底'],
       ]);
        next.set('prompt','观星：点击将牌移动到牌堆顶或牌堆底');
        next.processAI=function(list){
            var cards=list[0][1],player=_status.event.player;
            var target=(_status.event.getTrigger().name=='phaseZhunbei')?player:player.next;
            var att=get.sgn(get.attitude(player,target));
            var top=[];
            var judges=target.getCards('j');
            var stopped=false;
            if(player!=target||!target.hasWuxie()){
                for(var i=0;i<judges.length;i++){
                    var judge=get.judge(judges[i]);
                    cards.sort(function(a,b){
                        return (judge(b)-judge(a))*att;
                    });
                    if(judge(cards[0])*att<0){
                        stopped=true;break;
                    }
                    else{
                        top.unshift(cards.shift());
                    }
                }
            }
            var bottom;
            if(!stopped){
                cards.sort(function(a,b){
                    return (get.value(b,player)-get.value(a,player))*att;
                });
                while(cards.length){
                    if((get.value(cards[0],player)<=5)==(att>0)) break;
                    top.unshift(cards.shift());
                }
            }
            bottom=cards;
            return [top,bottom];
        }
        "step 1"
        var top=result.moved[0];
        var bottom=result.moved[1];
        top.reverse();
        for(var i=0;i<top.length;i++){
            ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
        }
        for(i=0;i<bottom.length;i++){
            ui.cardPile.appendChild(bottom[i]);
        }
        if(top.length==0){
            player.addTempSkill('skill_off')
            player.useCard(game.createCard('qimendunjia'),player)
        }
        if(bottom.length==0){
            player.addTempSkill('skill_off')
            player.useCard(game.createCard('qimendunjia'),player)
        }
        player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
        game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
        game.updateRoundNumber();
        game.delayx();
        
    },
                subSkill:{
                    on:{
                        sub:true,
                    },
                },
            },
            "xin_whlw1":{
                audio:"ext:新将包:false",
                mod:{
                    targetEnabled:function(card){
            if(get.color(card)=='black') return false;
        },
                },
                trigger:{
                    player:"damageBegin2",
                },
                forced:true,
                filter:function(event,player){
        return player==_status.currentPhase;
    },
                content:function(){
        trigger.cancel();
        player.draw(2)
    },
                ai:{
                    effect:{
                        target:function(card,player,target){
                if(target==_status.currentPhase&&get.tag(card,'damage')) return 'zerotarget';
            },
                    },
                },
            },
            "xin_whlw2":{
                audio:"ext:新将包:false",
                global:"rewansha_global",
                trigger:{
                    global:"dyingBegin",
                },
                forced:true,
                logTarget:"player",
                filter:function(event,player){
        return player==_status.currentPhase;
    },
                content:function(){
        game.countPlayer(function(current){
            if(current!=player&&current!=trigger.player) current.addSkillBlocker('rewansha_fengyin');
        });      
        player.draw()
    },
            },
            "xin_htzjq2":{
                shaRelated:true,
                audio:"ext:新将包:false",
                audioname:["boss_lvbu3"],
                trigger:{
                    player:"useCardToPlayered",
                },
                check:function(event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function(event,player){
        return event.card.name=='sha';
    },
                logTarget:"target",
                content:function(){
        "step 0"
        player.judge(function(){return 0});     
        "step 1"
        var suit=result.color;
        var target=trigger.target;
        var num=target.countCards('h','shan');
        target.addTempSkill("skill_noskill")
        target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','hes',function(card){
            return get.suit(card)==_status.event.suit;
        }).set('ai',function(card){
            var num=_status.event.num;
            if(num==0) return 0;
            if(card.name=='shan') return num>1?2:0;
            return 10-get.value(card);
        }).set('num',num).set('suit',suit);
        "step 2"
        if(!result.bool){
            trigger.num=1             
        }
        else event.finish()
        "step 3"
        player.chooseTarget('为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
                var trigger=_status.event.getTrigger();
                return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,trigger.player,target);
            }).set('ai',function(target){
                var trigger=_status.event.getTrigger();
                return get.effect(target,trigger.card,trigger.player,_status.event.player);
            });
        "step 4"
       if(result.bool) trigger.targets.push(result.targets[0]);
    },
                ai:{
                    ignoreSkill:true,
                },
            },
            "xjb_leijue":{
                enable:"phaseUse",
                filterCard:{
                    suit:"spade",
                },
                usable:1,
                filter:function(event,player){
       if(lib.config.xjb_systemEnergy<1)return false
    },
                filterTarget:true,
                content:function(){
        target.damage('thunder')
        game.xjb_systemEnergyChange(-1)
    },
            },
            "xjb_huojue":{
                trigger:{
                    global:["phaseBegin"],
                },
                forced:true,
                content:function(){              
        let Array=[],skill="xjb_huojueReal"   
        lib.skill.xjb_huojueReal={
            trigger:{
            global:[""]
            },
            prompt:"是否发动〖火诀〗？",
            filter:function(event,player){
                return event.player!=player&&lib.config.xjb_systemEnergy>=3
            },
            content:function(){
                player.fc_X(true,4,{onlyme:[trigger.player]})
                game.xjb_systemEnergyChange(-3)
            }
        }
        game.countPlayer(function(current){
            if(current.getSkills){
               Array=Array.concat(current.getSkills(null,false,false))               
            } 
         })
         Array=Array.filter(lib.filter.all)
         if(Array.length>20)Array.length=20
          for(var i=0;i<Array.length;i++){
             Array[i]=Array[i]+"After"          
           }
        lib.skill[skill].trigger.global=Array
        player.addTempSkill(skill)        
    },
            },
            "xjb_pomie":{
                trigger:{
                    source:"dying",
                },
                filter:function(event,player){
       if(lib.config.xjb_systemEnergy<50)return false
    },
                content:function(){
        "step 0"        
        if(game.xjb_condition(3,1)){
            let skills1=trigger.player.skills,skills2=[]
            for(let i=0;i<skills1.length;i++){
                if(!lib.config.xjb_newcharacter.skill.contains(skills1[i])){
                    skills2.add(skills1[i])
                }
            }
            player.chooseControl(skills2)
        }
        "step 1"
        if(result.control){
            player.addSkill(result.control)
            lib.config.xjb_newcharacter.skill.add(result.control)
            game.saveConfig("xjb_newcharacter",lib.config.xjb_newcharacter)        
            game.xjb_systemEnergyChange(-50)
        }        
    },
            },
            "xjb_xinsheng":{
                enable:"phaseUse",
                filter:function(event,player){
      return game.dead.length>0   
    },
                filterCard:true,
                selectCard:3,
                content:function(){
        "step 0"            
        player.chooseControl(game.dead.slice(0))
        "step 1"
        if(result.control){
            result.control.revive(1)            
        } 
    },
            },
            "xjb_lunhui":{
                enable:"phaseUse",
                filter:function(event,player){
    var name=player.name1      
    if(!lib.config.xjb_count[name].HpCard||!lib.config.xjb_count[name].HpCard.length)return false
     return true
    },
                filterTarget:true,
                content:function(){
        "step 0"            
            var name=player.name1            
            player.chooseControl(lib.config.xjb_count[name].HpCard,"取消")
            "step 1"
            if(result.control=="取消"){return}
            var name=player.name1
            for(var i=0;i<lib.config.xjb_count[name].HpCard.length;i++){
                if(lib.config.xjb_count[name].HpCard[i]==result.control){
                    target.useHpCard(i,player)
                    break
                }                
            }
    },
            },
            "xin_guimeng":{
                init:function(player,skill){        
        player.dieTimes=0
        player.die=function(){
            var num=player.dieTimes
            if(num<3){
                if(num==0){                                                                                                                           //。。。。。。。。。。。。。。。。            
                ui.xjb_giveStyle(this.node.avatar,{"background-image":"url('"+lib.assetURL+"/extension/新将包/xuemo2.jpg')"})
                    }
                if(num==1){
                ui.xjb_giveStyle(this.node.avatar,{"background-image":"url('"+lib.assetURL+"/extension/新将包/xuemo3.jpg')" })
                }
                if(num==2){
                ui.xjb_giveStyle(this.node.avatar,{"background-image":"url('"+lib.assetURL+"/extension/新将包/xuemo4.jpg')"})
                }
                this.recover(2-player.hp)
                player.dieTimes++
            }
            else{
                lib.element.player.die.apply(this,[])
            };                        
        }
    },
                trigger:{
                    global:"phaseBegin",
                },
                filter:function(event,player){
        return event.player.getDamagedHp()!==0
    },
                direct:true,
                dieTimes:1,
                content:function(){
        'step 0'
        player.chooseToRespond('是否打出一张【酒】来发动〖血梦〗？',{name:'jiu'});            
        'step 1'
        if(result.bool){
            trigger.player.addTempSkill("xin_guimeng_1")
        }       
    },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
                let info=lib.card[event.card.name]
                if (info.notarget) return false;
                if (info.contentBefore) return false;
                if (info.contentAfter) return false;
                return info.content;
            },
                        direct:true,
                        content:function(){         
                player.removeSkill("xin_guimeng_2")
                let info=lib.skill["xin_guimeng_2"]
                info.trigger.player=trigger.card.name+"Before"
                player.addTempSkill("xin_guimeng_2",{player:"xin_guimeng_2After"})
            },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            player:"shaBefore",
                        },
                        direct:true,
                        card:["sha","juedou","wuzhong","guohe","huogong","tao"],
                        content:function(){           
                let card=[...lib.skill["xin_guimeng_2"].card]
                card.remove(trigger.name)
                let cardname=card.randomGet()
                trigger.content = lib.init.parsex(lib.card[cardname].content);
                game.log(trigger.card,"因【瑰梦】混乱变为"+get.translation(cardname))
                
            },
                        sub:true,
                    },
                },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            "xin_lianhuan":{
                enable:"chooseToUse",
                filter:function(event,player){
        return player.countCards('hes',{suit:'club'})>0;
    },
                filterCard:{
                    suit:"club",
                },
                viewAs:{
                    name:"tiesuo",
                },
                onuse:function(event,player){
        player.changeS(1)
    },
                prompt:"将一张梅花牌当铁锁连环使用",
                check:function(card){return 6-get.value(card)},
                position:"hes",
                ai:{
                    wuxie:function(target,card,player,viewer){
            if(_status.event.getRand()<0.5) return 0;
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    basic:{
                        useful:4,
                        value:4,
                        order:7,
                    },
                    result:{
                        target:function(player,target){
                if(target.isLinked()){
                    if(target.hasSkillTag('link')) return 0;
                    var f=target.hasSkillTag('nofire');
                    var t=target.hasSkillTag('nothunder');
                    if(f&&t) return 0;
                    if(f||t) return 0.5;
                    return 2;
                }
                if(get.attitude(player,target)>=0) return -0.9;
                if(ui.selected.targets.length) return -0.9;
                if(game.hasPlayer(function(current){
                    return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
                })){
                    return -0.9;
                }
                return 0;
            },
                    },
                    tag:{
                        multitarget:1,
                        multineg:1,
                        norepeat:1,
                    },
                },
            },
            "xjb_chakanxinxi":{
                enable:"phaseUse",
                charlotte:true,
                content:function(){
        var name=player.name
        var title='<div class="text center">信息表</div>'
        var words1='<div style="text-align:left"><li>你拥有土地：'+lib.config.xjb_tudi.situation[name].have+
       '<br><li>居住用地：'+lib.config.xjb_tudi.situation[name].live
        if(lib.config.xjb_tudi.situation[name].kaiken!=undefined){
               words1=words1+'<br><li>你已开垦土地：'+lib.config.xjb_tudi.situation[name].kaiken
        }
        if(lib.config.xjb_tudi.situation[name].feili!=undefined){
               words1=words1+'<br><li>土地肥力为：'+lib.config.xjb_tudi.situation[name].feili
        }
        words1=words1+'<br><li>你还剩土地：'+lib.config.xjb_tudi.situation[name].unused
        var dialog=[title,words1];
        if(lib.config.xjb_tudi.situation[name].money!==undefined){
             var cards=lib.config.xjb_tudi.situation[name].money
             dialog.push('<div style="text-align:left">钱财')
             if(cards.length){                
                 dialog.push(cards)
            }            
            else dialog.push('你身无分文！(｡•́︿•̀｡)')            
         }
        if(lib.config.xjb_tudi.situation[name].zhongzhi!==undefined){
            var cards=lib.config.xjb_tudi.situation[name].zhongzhi             
            dialog.push('<div style="text-align:left">种植')
            if(cards.length){                
                 dialog.push(cards)
            }            
            else dialog.push('你没种任何东西！ヽ( ￣д￣;)ノ')
         }       
        if(lib.config.xjb_tudi.situation[name].zhongzhi2!==undefined&&lib.config.xjb_tudi.situation[name].zhongzhi2.all!==undefined){
           if(cards.length) dialog.push('总共种植作物：'+lib.config.xjb_tudi.situation[name].zhongzhi2.all)
        } 
         var next=player.chooseButton(dialog)
         next.set('filter',function(){return false})
    },
            },
            "xin_xuefa":{
                group:["xin_xuefa_shan","xin_xuefa_sha","xin_xuefa_jiu","xin_xuefa_tao","xin_xuefa_wuxie"],
                subSkill:{
                    shunshou:{
                        enable:["chooseToUse","chooseToRespond"],
                        viewAs:{
                            name:"shunshou",
                            isCard:true,
                        },
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAsFilter:function(player){    
              if(player.hp>0) return true;
                return false;
            },
                        onuse:function(event,player){
               'step 0'
               player.hp--
               player.update()
             },
                        onrespond:function(event,player){
               player.hp--;
               player.update();               
            },
                        sub:true,
                        ai:{
                            wuxie:function(target,card,player,viewer){
                    if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                        return 0;
                    }
                },
                            basic:{
                                order:7.5,
                                useful:4,
                                value:9,
                            },
                            result:{
                                target:function(player,target){
                        if(get.attitude(player,target)<=0) return (target.countCards('he',function(card){
                            return get.value(card,target)>0&&card!=target.getEquip('jinhe');
                        })>0)?-1.5:1.5;
                        return (target.countCards('ej',function(card){
                            if(get.position(card)=='e') return get.value(card,target)<=0;
                            var cardj=card.viewAs?{name:card.viewAs}:card;
                            return get.effect(target,cardj,target,player)<0;
                        })>0)?1.5:-1.5;
                    },
                                player:function(player,target){
                        if(get.attitude(player,target)<0&&!target.countCards('he',function(card){
                            return get.value(card,target)>0&&card!=target.getEquip('jinhe');
                        })){
                            return 0;
                        }
                        if(get.attitude(player,target)>1){
                            return (target.countCards('ej',function(card){
                                if(get.position(card)=='e') return get.value(card,target)<=0;
                                var cardj=card.viewAs?{name:card.viewAs}:card;
                                return get.effect(target,cardj,target,player)<0;
                            })>0)?1.5:-1.5;
                        }
                        return 1;
                    },
                            },
                            tag:{
                                loseCard:1,
                                gain:1,
                            },
                        },
                        "audioname2":{
                            "key_shiki":"shiki_omusubi",
                        },
                    },
                    wuxie:{
                        enable:["chooseToUse","chooseToRespond"],
                        viewAs:{
                            name:"wuxie",
                            isCard:true,
                        },
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAsFilter:function(player){
                if(player.hp>0) return true;
                return false;
            },
                        onuse:function(event,player){
               'step 0'
               player.hp--
               player.update()
             },
                        onrespond:function(event,player){
               player.hp--;
               player.update();               
            },
                        sub:true,
                        ai:{
                            basic:{
                                useful:[6,4,3],
                                value:[6,4,3],
                            },
                            result:{
                                player:1,
                            },
                            expose:0.2,
                        },
                        "audioname2":{
                            "key_shiki":"shiki_omusubi",
                        },
                    },
                    tao:{
                        usable:1,
                        enable:["chooseToUse","chooseToRespond"],
                        viewAs:{
                            name:"tao",
                            isCard:true,
                        },
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAsFilter:function(player){
                if(player.isPhaseUsing())return false
                return true;
            },
                        sub:true,
                        ai:{
                            basic:{
                                order:function(card,player){
                        if(player.hasSkillTag('pretao')) return 5;
                        return 2;
                    },
                                useful:[6.5,4,3,2],
                                value:[6.5,4,3,2],
                            },
                            result:{
                                target:2,
                                "target_use":function(player,target){
                        // if(player==target&&player.hp<=0) return 2;
                        if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                        var nd=player.needsToDiscard();
                        var keep=false;
                        if(nd<=0){
                            keep=true;
                        }
                        else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                            keep=true;
                        }
                        var mode=get.mode();
                        if(target.hp>=2&&keep&&target.hasFriend()){
                            if(target.hp>2||nd==0) return 0;
                            if(target.hp==2){
                                if(game.hasPlayer(function(current){
                                    if(target!=current&&get.attitude(target,current)>=3){
                                        if(current.hp<=1) return true;
                                        if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                                    }
                                })){
                                    return 0;
                                }
                            }
                        }
                        if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                        var att=get.attitude(player,target);
                        if(att<3&&att>=0&&player!=target) return 0;
                        var tri=_status.event.getTrigger();
                        if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                            if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                                var num=game.countPlayer(function(current){
                                    if(current.identity=='fan'){
                                        return current.countCards('h','tao');
                                    }
                                });
                                if(num>1&&player==target) return 2;
                                return 0;
                            }
                        }
                        if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                            if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                                return 0;
                            }
                        }
                        if(mode=='stone'&&target.isMin()&&
                        player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                        tri.source!=target.getEnemy()){
                            return 0;
                        }
                        return 2;
                    },
                            },
                            tag:{
                                recover:1,
                                save:1,
                            },
                        },
                        "audioname2":{
                            "key_shiki":"shiki_omusubi",
                        },
                    },
                    jiu:{
                        enable:["chooseToUse","chooseToRespond"],
                        viewAs:{
                            name:"jiu",
                            isCard:true,
                        },
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAsFilter:function(player){
                if(player.hp>0) return true;
                return false;
            },
                        onuse:function(event,player){
               'step 0'
               player.hp--
               player.update()
             },
                        onrespond:function(event,player){
               player.hp--;
               player.update();               
            },
                        sub:true,
                        ai:{
                            basic:{
                                useful:function(card,i){
                        if(_status.event.player.hp>1){
                            if(i==0) return 4;
                            return 1;
                        }
                        if(i==0) return 7.3;
                        return 3;
                    },
                                value:function(card,player,i){
                        if(player.hp>1){
                            if(i==0) return 5;
                            return 1;
                        }
                        if(i==0) return 7.3;
                        return 3;
                    },
                            },
                            order:function(){
                    return get.order({name:'sha'})+0.2;
                },
                            result:{
                                target:function(player,target){
                        if(target&&target.isDying()) return 2;
                        if(target&&!target.isPhaseUsing()) return 0;
                        if(lib.config.mode=='stone'&&!player.isMin()){
                            if(player.getActCount()+1>=player.actcount) return 0;
                        }
                        var shas=player.getCards('h','sha');
                        if(shas.length>1&&(player.getCardUsable('sha')>1||player.countCards('h','zhuge'))){
                            return 0;
                        }
                        shas.sort(function(a,b){
                            return get.order(b)-get.order(a);
                        })
                        var card;
                        if(shas.length){
                            for(var i=0;i<shas.length;i++){
                                if(lib.filter.filterCard(shas[i],target)){
                                    card=shas[i];break;
                                }
                            }
                        }
                        else if(player.hasSha()&&player.needsToDiscard()){
                            if(player.countCards('h','hufu')!=1){
                                card={name:'sha'};
                            }
                        }
                        if(card){
                            if(game.hasPlayer(function(current){
                                return (get.attitude(target,current)<0&&
                                    target.canUse(card,current,true,true)&&
                                    !current.hasSkillTag('filterDamage',null,{
                                        player:player,
                                        card:card,
                                        jiu:true,
                                    })&&
                                    get.effect(current,card,target)>0);
                            })){
                                return 1;
                            }
                        }
                        return 0;
                    },
                            },
                            tag:{
                                save:1,
                                recover:0.1,
                            },
                        },
                        "audioname2":{
                            "key_shiki":"shiki_omusubi",
                        },
                    },
                    sha:{
                        enable:["chooseToUse","chooseToRespond"],
                        viewAs:{
                            name:"sha",
                            isCard:true,
                        },
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAsFilter:function(player){
                if(player.hp>0) return true;
                return false;
            },
                        onuse:function(event,player){
               'step 0'
               player.hp--
               player.update()
             },
                        onrespond:function(event,player){
               player.hp--;
               player.update();               
            },
                        sub:true,
                        ai:{
                            yingbian:function(card,player,targets,viewer){
                    if(get.attitude(viewer,player)<=0) return 0;
                    var base=0,hit=false;
                    if(get.cardtag(card,'yingbian_hit')){
                        hit=true;
                        if(targets.filter(function(target){
                            return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                        })) base+=5;
                    }
                    if(get.cardtag(card,'yingbian_all')){
                        if(game.hasPlayer(function(current){
                            return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                        })) base+=5;
                    }
                    if(get.cardtag(card,'yingbian_damage')){
                        if(targets.filter(function(target){
                            return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                            },true))&&!target.hasSkillTag('filterDamage',null,{
                                player:player,
                                card:card,
                                jiu:true,
                            })
                        })) base+=5;
                    }
                    return base;
                },
                            canLink:function(player,target,card){
                    if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                    if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                        target:target,
                        card:card,
                    },true)) return false;
                    if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                    return true;
                },
                            basic:{
                                useful:[5,3,1],
                                value:[5,3,1],
                            },
                            order:function(item,player){
                    if(player.hasSkillTag('presha',true,null,true)) return 10;
                    if(lib.linked.contains(get.nature(item))){
                        if(game.hasPlayer(function(current){
                            return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                        })&&game.countPlayer(function(current){
                            return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                        })>1) return 3.1;
                        return 3;
                    }
                    return 3.05;
                },
                            result:{
                                target:function(player,target,card,isLink){
                        var eff=function(){
                            if(!isLink&&player.hasSkill('jiu')){
                                if(!target.hasSkillTag('filterDamage',null,{
                                    player:player,
                                    card:card,
                                    jiu:true,
                                })){
                                    if(get.attitude(player,target)>0){
                                        return -7;
                                    }
                                    else{
                                        return -4;
                                    }
                                }
                                return -0.5;
                            }
                            return -1.5;
                        }();
                        if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                        },true)) return eff/1.2;
                        return eff;
                    },
                            },
                            tag:{
                                respond:1,
                                respondShan:1,
                                damage:function(card){
                        if(card.nature=='poison') return;
                        return 1;
                    },
                                natureDamage:function(card){
                        if(card.nature) return 1;
                    },
                                fireDamage:function(card,nature){
                        if(card.nature=='fire') return 1;
                    },
                                thunderDamage:function(card,nature){
                        if(card.nature=='thunder') return 1;
                    },
                                poisonDamage:function(card,nature){
                        if(card.nature=='poison') return 1;
                    },
                            },
                        },
                        "audioname2":{
                            "key_shiki":"shiki_omusubi",
                        },
                    },
                    shan:{
                        enable:["chooseToUse","chooseToRespond"],
                        viewAs:{
                            name:"shan",
                            isCard:true,
                        },
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAsFilter:function(player){
                if(player.hp>0) return true;
                return false;
            },
                        onuse:function(event,player){
               'step 0'
               player.hp--
               player.update()
             },
                        onrespond:function(event,player){
               player.hp--;
               player.update();               
            },
                        sub:true,
                        ai:{
                            order:3,
                            basic:{
                                useful:[7,5.1,2],
                                value:[7,5.1,2],
                            },
                            result:{
                                player:1,
                            },
                        },
                        "audioname2":{
                            "key_shiki":"shiki_omusubi",
                        },
                    },
                },
                ai:{
                    basic:{
                        order:function(card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function(player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "xin_xueqi":{
                trigger:{
                    source:"damageBefore",
                },
                skillAnimation:true,
                animationColor:"metal",
                content:function(){
        'step 0'
        trigger.cancel()
        player.fc_X(103,52,true,{onlyme:[trigger.player]})        
    },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            "xjb_liuli":{
                trigger:{
                    player:"damageBegin",
                },
                filter:function(event,player){
        return player.countCards('hes',{suit:'diamond'})>0
    },
                direct:true,
                content:function(){
        "step 0"
        player.chooseCardTarget({
            filterCard:{
                suit:"diamond",
            },
            position:"hes",
            selectCard:1,
            filterTarget:function(event,player,target){
                if(target==player) return false
                return true
            },
            ai1:function(card){
                var player=_status.event.player;
                return 15-get.value(card);
            },
            ai2:function(target){
                var player=_status.event.player,card=ui.selected.cards[0];
                if(get.value(card,target)<0) return -get.attitude(player,target);
                if(get.value(card,target)<1) return 0.01*-get.attitude(player,target);
                return Math.max(1,get.value(card,target)-get.value(card,player))*get.attitude(player,target);
            },
            prompt:'交给另一名其他角色一张♦️牌，你令伤害来源改为这名角色并令其重新分配伤害'
        });
        "step 1"
        if(result.bool){
            var num=trigger.num
            result.targets[0].gain(result.cards,player,'giveAuto');    
            var daqiao={}
            if(trigger.nature){
                daqiao.nature=[trigger.nature]
                daqiao.wordsAdd=get.translation(trigger.nature)+'属性'
            } 
            result.targets[0].fc_X(44,[num],daqiao)
            game.print(trigger.nature)
            trigger.cancel()
        }       
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function(card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return;
                if(get.tag(card,'damage')&&target.countCards('he')>1) return 0.7;
            },
                    },
                },
            },
            "xjb_guose":{
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        return game.countPlayer(function(current){
          return current.countCards('ej');
        })>0
    },
                filterTarget:function(event,player,target){
        return target.countCards('j')==0
    },
                content:function(){
     "step 0"
     var num=game.countPlayer(function(current){
          return current.countCards('ej');
     });
     if(num<1) num=1
     player.draw(num)
     "step 1"
     var list1=[],list2=[]
     for(var i=0;i<result.length;i++){
         if(get.suit(result[i])!='diamond')list1.push(result[i])   
     }
     if(list1.length>0){
         for(var i=0;i<lib.inpile.length;i++){
            if(get.type(lib.inpile[i])=='delay') list2.push(game.createCard(lib.inpile[i],'','',''));
         }
         event.list1=list1
         player.chooseButton(['视为使用一张延时锦囊牌',list2],1)
     }              
     "step 2"
     if(result.bool){
        target.addJudge({name:result.links[0].name},event.list1);        
     }
   },
            },
            "xin_longpan":{
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                content:function(){
        'step 0'
        var list=[]
        var suit=player.storage.xin_tianming;
        if(suit.length==0){
            event.finish()
        }
        else{
            for(var i=0;i<suit.length;i++){
            var cardname='xin_zhaoling_'+suit[i];
                lib.card[cardname]={
                    fullimage:true,
                    image:'character:'+player.name1
                }
                lib.translate[cardname]=lib.translate[suit[i]];
                list.push(game.createCard(cardname,suit[i],''));
            }      
        }        
        player.chooseButton(['龙蟠：选择移去的花色',list],[1,Infinity])
        'step 1'
        if(result.bool){
            event.suit=[]
            for(var i=0;i<result.links.length;i++){
                event.suit.push(get.suit(result.links[i]))
                player.storage.xin_tianming.remove(get.suit(result.links[i]))  
                player.markSkill('xin_tianming');
            }       
            var num=result.links.length
            player.fc_X(true,12,[num],'num_2')
        }
    },
            },
            "xin_yingzi":{
                trigger:{
                    player:"phaseBegin",
                },
                "translate1":"锁定技，你的额定摸牌数+2。",
                "translate2":"锁定技，你的手牌上限+2",
                direct:true,
                content:function(){
        if(game.roundNumber%2==0){
            player.addTempSkill('xin_yingzi_1')
        }
        else{
            player.addTempSkill('xin_yingzi_2')
        }
    },
                ai:{
                    order:2,
                    result:{
                        player:1,
                    },
                },
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcardBase:function(player,num){
                return num+2;
                },
                        },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        content:function(){
                trigger.num+=2
            },
                        sub:true,
                    },
                },
            },
            "xin_guangji":{
                trigger:{
                    player:["phaseZhunBeiBegin","phaseDiscardBefore","phaseJudgeBegin"],
                },
                forced:true,
                content:function(){
        trigger.content=lib.init.parsex(function(){player.draw()});               
    },
            },
            "xin_enyuan":{
                audio:"ext:新将包:false",
                trigger:{
                    player:["gainEnd","drawEnd","damageEnd"],
                    source:"gainEnd",
                },
                usable:3,
                filter:function(event,player){
        if(!event.source)return false
        if(!event.source.isAlive())return false       
        if(event.source==event.player) return false
        if(event.name=="damage")return true
        if(event.cards&&event.cards.length>=2)return true;
        else if(event.num>=2)return true
    },
                content:function(){
        if(trigger.name=="damage")trigger.source.fc_X(true,62)
        else if(trigger.player==player)trigger.source.fc_X(true,41)
        else if(trigger.source==player)trigger.player.fc_X(true,62)             
    },
            },
            "xin_qisuan":{
                trigger:{
                    global:["phaseEnd"],
                },
                filter:function(event,player){
        if(event.player==player) return false
        if(player.countCards("he")<1) return false
        player.out()
        if(event.player.isMaxHandcard()){
            player.in()
            return true
        }
        else player.in()
    },
                content:function(){
        "step 0"        
        player.chooseCard([2,Infinity],"he",true)
        "step 1"
        if(result.bool){
            trigger.player.gain(result.cards,player,"giveAuto")
        }
    },
            },
            "xjb_fuyi":{
                trigger:{
                    global:["phaseEnd"],
                },
                filter:function(event,player){
        if(event.player==player) return false
        if(event.player.countCards("he")<1) return false
        player.out()
        if(event.player.isMinHandcard()){
            player.in()
            return true
        }
        else player.in()
    },
                content:function(){
        "step 0"        
        trigger.player.draw()
        trigger.player.chooseCard(2,"he",true)
        "step 1"
        if(result.bool){
            player.gain(result.cards,trigger.player,"giveAuto")
        }
    },
            },
            "xjb_sicuan":{
                audio:"ext:新将包:2",
                enable:"phaseUse",
                usable:1,
                check:function(card){
        return 9-get.value(card)
    },
                filterTarget:function(card,player,target){
        return true;
    },
                content:function(){
        "step 0"
        var list=["恢复体力","失去体力","额外进行一个回合","失去体力上限","横置"]
        player.chooseControl(list)
        "step 1"
        var list=["恢复体力","失去体力","额外进行一个回合","失去体力上限","横置"].remove(result.control)
        player.chooseControl(list)
        event.xjb_a=get.xjb_translation(result.control)
        "step 2"
        event.xjb_b=get.xjb_translation(result.control)
        game.print(event.xjb_a,event.xjb_b)
        var c=target[event.xjb_a],a=event.xjb_a,b=event.xjb_b
        target[a]=target[b]
        target[b]=c
    },
                ai:{
                    order:9,
                    threaten:2,
                },
            },
        },
        translate:{
            "xin_jincui":"尽瘁",
            "xin_jincui_info":"锁定技，每轮一次，你跳过结束阶段，然后你减一点体力上限并额外进行一个回合。",
            "xin_chushi":"出师",
            "xin_chushi_info":"出牌阶段限一次，你可以将的一张：普通锦囊牌/基本牌，交给一名其他角色，然后你可以视为与此牌相同的一张牌。",
            "xin_yeling":"谒陵",
            "xin_yeling_info":"<i><b>\"锁定技\"</b>，你的回合开始时，你进行一次判定，你将判定牌置于武将牌上。",
            "xin_huanshi":"豢士",
            "xin_huanshi_info":"①出牌阶段，你可以减一点体力上限，你摸一张牌称为“豢士”。②当一张牌判定牌生效前，你可将一张牌置于牌堆顶，然后你从牌堆底摸一张牌称为“豢士”。",
            "xin_bianzhu":"变诛",
            "xin_bianzhu_info":"<b>限定技</b>，一名角色回合开始前，你可获得其武将牌上的“豢士”，然后你依次对他使用任意张【杀】。若此做，你获得技能\"夷清\"。",
            "xin_zhabing":"诈病",
            "xin_zhabing_info":"<b>觉醒技</b>，回合开始时，若你未受伤，你摸三张牌并跳过此回合，然后你获得技能\"变诛\"，场上所有其他角色视为拥有<b>\"谒陵\"</b>直到你发动<b>\"变诛\"</b>。",
            "xin_yiqing":"夷清",
            "xin_yiqing_info":"<b>强制技(本局游戏S之)</b>，出牌阶段，你可以弃置一种类别所有豢士手牌，然后你对攻击范围内的一名角色造成等量的伤害。",
            "xin_huzhu":"护主",
            "xin_huzhu_info":"当一名其他角色使用【杀】指定目标时，你可以选择以下一项执行之：⑴弃置一张牌，目标角色摸两张牌；⑵受到1点伤害，目标角色获得1个“护”。 ",
            "xin_huzhu2":"护主",
            "xin_huzhu2_info":"<i>护：你可以在需要时，视为使用或打出一张【闪】。若此做，你摸一张牌并移去1个“护”。</i> ",
            "xin_xiongli":"凶力",
            "xin_xiongli_info":"<b>强制技</b>(S之)，出牌阶段，你可以令一名角色翻面，下一次你对其造成伤害+1。若此做，你受到一点伤害。",
            "xin_qimen":"奇门",
            "xin_qimen_info":"①锁定技，摸牌阶段，你改为摸X张牌(X为你本轮进行的回合数)<br>②名臣技，结束阶段，你可令一名角色视为拥有技能〖奇门①〗。<br>奇门之中，变换无穷。",
            "xin_mousheng":"谋圣",
            "xin_mousheng_info":"你拼点时，可直接将一张点数为X的：锦囊牌/基本牌/装备牌(X为游戏轮数)，作为拼点牌。",
            "xin_weiwo":"帷幄",
            "xin_weiwo_info":"当你使用普通锦囊牌时，你可以使用一张延时锦囊牌。",
            "xin_fq1":"放权1",
            "xin_fq1_info":"",
            "xin_fq2":"放权2",
            "xin_fq2_info":"",
            "xin_fq3":"放权3",
            "xin_fq3_info":"",
            "xin_fangquan":"放权",
            "xin_fangquan_info":"出牌阶段限一次，你可弃置至多三张牌并令一名其他无\"放权系列标记\"的角色额外进行一个回合，若你弃置的牌数为1/2/3，则其分别获得标记\"放权1\"/\"放权2\"/\"放权3\"。<br><br>放权系列标记：<li>放权1：跳过摸牌阶段、弃牌阶段、结束阶段<br><li>放权2：跳过判定阶段、出牌阶段、弃牌阶段<br><li>放权3：跳过准备阶段、弃牌阶段、结束阶段",
            "xin_baisu":"白素",
            "xin_baisu_info":"君主技，锁定技，蜀势力的角色回合结束后，若其本回合有跳过的阶段，你与其各摸一张牌。",
            "xin_xiangle":"享乐",
            "xin_xiangle_info":"你受到伤害后，可令一名非当前回合角色(无放权系列标记)获得一个“放权1”/\"放权2\"标记，然后其额外进行一个回合。",
            "xin_zhibang":"置棒",
            "xin_zhibang_info":"你对一名角色造成伤害前，你可以将：这名角色区域内至多一张牌，置于你的武将牌上，称为“棒\"。<br>棒出于己，则无此限制",
            "xin_chuhui":"除秽",
            "xin_chuhui_info":"每名角色各限一次，出牌阶段，若你\"棒\"数量≥5，你可令一名角色获得全部的\"棒\"并对其造成2点伤害。<br>除秽如霹雳，收棒亦可行。",
            "xin_bingjie":"秉节",
            "xin_bingjie_info":"你受到1点伤害后/一名角色准备阶段前，你可以令：一名角色/该角色，将手牌调至体力上限(至多为5)，因此获得的牌均记为\"留香\"。？？？",
            "xin_shiyin":"识音",
            "xin_shiyin_info":"名臣技，弃牌阶段后，若你弃置的牌均为：红色/黑色/基本牌/普通锦囊牌/装备，场上所有角色：恢复1点体力/失去1点体力/摸一张牌/横置/弃置一张牌。",
            "xin_liuxiang":"留香",
            "xin_liuxiang_info":"一名角色每使用或打出X张\"留香\"牌后，则你令其加一点体力上限或体力值。(X为其体力值)",
            "xin_yexi":"夜袭",
            "xin_yexi_info":"出牌阶段，你可弃置一花色的所有手牌并弃置一名角色等量张牌。然后你更改你的S状态。",
            "xin_ziruo":"自若",
            "xin_ziruo_info":"当你成为其他角色的牌的目标时，你可为此牌减少任意名非S角色的目标，然后这些目标本局游戏S之。",
            "xin_guixin":"归心",
            "xin_guixin_info":"君主技，当你受到1点伤害后，你可以选择一个势力，该势力所有角色与你各摸1张牌。若此做，你令这些角色获得技能“谈讌”，已有“谈讌”的角色发动过该技能的次数-1。",
            "xin_tanyan":"谈讌",
            "xin_tanyan_info":"君主子技，出牌阶段限一次，你可交给有〖归心〗的角色X张红色牌(X为此技能使用次数)，然后你视为使用等量张【酒】。",
            "xin_fengtian":"奉天",
            "xin_fengtian_info":"出牌阶段限一次，你可以弃置一张红色牌，你令主公选择是否同意你使用【天子诏令】，若同意，你令另一名角色使用之；否则，你令其翻面。",
            "xin_niepan":"涅槃",
            "xin_niepan_info":"你濒死时/出牌阶段时限一次，你若你已S之，你可摸两张牌；否则，你恢复一点体力。",
            "xin_tianming":"天命",
            "xin_tianming_info":"锁定技，当你失去一张区域的牌后，若你有未记录该牌的花色，你记录之并摸一张牌。",
            "xin_zulong":"祖龙",
            "xin_zulong_info":"当你体力值减少后，可以你获得一个技能。",
            "xin_duice":"对策",
            "xin_duice_info":"出牌阶段，你可以弃置一张手牌并与一名角色拼点，若你赢，你获得拼点牌。",
            "xin_dongxin":"洞心",
            "xin_dongxin_info":"出牌阶段限十次，你可观看一名其他角色的普通锦囊牌。若其体力值小于你，你可以获得其一张牌。",
            "xin_qizuo":"奇佐",
            "xin_qizuo_info":"当一名体力值大于你的角色使用一张锦囊牌或【杀】后，你可以弃置一张点数不小于10的牌，令此牌改为你使用，并你弃置的牌加入到对应的实体牌中。",
            "xin_zaozhong":"早终",
            "xin_zaozhong_info":"你受到伤害后，你可以令一名角色弃置三张牌。",
            "xin_taoni":"讨逆",
            "xin_taoni_info":"①强制技，出牌阶段，你可以重铸一张♦️牌，然后横置一名角色<br>②你对已横置的角色使用牌无次数限制。",
            "xin_jiang":"激昂",
            "xin_jiang_info":"当你造成伤害及受到伤害后，涉及的角色各摸X张牌(X为已横置的角色，X至多为3)",
            "xin_yingyi":"英义",
            "xin_yingyi_info":"君主技，锁定技，场上每有一名吴势力角色，你激昂的X值便+1。",
            "xin_whlw":"毒士",
            "xin_whlw_info":"每有一名在你回合内进入濒死阶段，你则摸一张牌，若其死亡，你再摸一张牌。你进入濒死阶段后，你摸一张牌。",
            "xin_qns":"急救",
            "xin_qns_info":"你可以将一张红色牌当做【桃】使用。若此时，你的手牌数<3，你摸一张牌。",
            "xin_hlyyd":"武圣",
            "xin_hlyyd_info":"你可以将一张红色牌当做【杀】使用或打出，你每以此法使用一张转化【杀】，你从牌堆中获得一张带伤害标签的牌。你对有“梦魇”标记的角色使用牌无次数限制。",
            "xin_wlqxp":"观星",
            "xin_wlqxp_info":"准备阶段，你可以观看牌堆顶的六张牌（存活角色小于4时改为四张），并将其以任意顺序置于牌堆项或牌堆底，若你将〖观星〗的牌都放在了牌堆底/牌堆顶，你S之然后使用一张【奇门遁甲】。",
            "xin_whlw1":"帷幕",
            "xin_whlw1_info":"锁定技。①你不能成为黑色牌的目标。②当你于回合内受到伤害时，防止此伤害并摸两张牌。",
            "xin_whlw2":"完杀",
            "xin_whlw2_info":"锁定技。①你的回合内，不处于濒死状态的角色不能使用【桃】。②当有角色于你的回合内进入濒死状态时，你摸一张牌。",
            "xin_htzjq2":"铁骑",
            "xin_htzjq2_info":"强制技，当你使用【杀】指定一名角色为目标后，你可以进行一次判定，该角色除非弃置一张与判定结果花色相同的牌。否则你多指定一个目标。",
            "xjb_leijue":"雷诀",
            "xjb_leijue_info":"出牌阶段限一次，你可以弃置一张牌，然后对一名角色造成1点雷属性伤害。",
            "xjb_huojue":"火诀",
            "xjb_huojue_info":"在一定限度内，当一名其他角色发动技能时，你可以对其造成一点火属性伤害。",
            "xjb_pomie":"破灭",
            "xjb_pomie_info":"当你使一名角色进入濒死阶段，你可将其一个技能添加到养成武将的武将牌上。",
            "xjb_xinsheng":"新生",
            "xjb_xinsheng_info":"出牌阶段，你可以弃置三张手牌令一名角色复活。",
            "xjb_lunhui":"注生",
            "xjb_lunhui_info":"出牌阶段，你可以对任意名角色使用你的使用体力卡。",
            "xin_guimeng":"血梦",
            "xin_guimeng_info":"一名角色的回合开始时，若其已受伤，你令其使用牌混乱。<br>",
            "xin_lianhuan":"连环",
            "xin_lianhuan_info":" 你可以将一张♣牌当【铁索连环】使用，然后你改变你的S状态。",
            "xjb_chakanxinxi":"信息",
            "xjb_chakanxinxi_info":"",
            "xin_xuefa":"血法",
            "xin_xuefa_info":"你可以将你的1点体力值当【杀】/【闪】/【酒】/【桃】/【无懈可击】使用或打出。",
            "xin_xueqi":"血契",
            "xin_xueqi_info":"当你对一名角色造成伤害后，你可改为你与该角色交换体力牌，之后你令该角色失去1点体力(若其死亡，视为你击杀)。",
            "xjb_liuli":"流离",
            "xjb_liuli_info":"当你受到伤害前，你可交给另一名其他角色一张♦️牌，若此做，你令伤害来源改为这名角色并令其重新分配伤害(每名角色至多1点伤害)",
            "xjb_guose":"国色",
            "xjb_guose_info":"出牌阶段限一次，你可以选择一名判定区无牌的角色，然后你摸X张牌(X为场上的牌数)并将其中的非♦️牌当做任意一张延时锦囊牌置于其判定区内。",
            "xin_longpan":"龙蟠",
            "xin_longpan_info":"锁定技，你的回合后，你可以移去\"天命\"中的任意个花色，若此做，你失去等量的体力。",
            "xin_yingzi":"英姿",
            "xin_yingzi_info":"锁定技，奇数轮，你额定摸牌数+2；偶数轮，你手牌上限+2。",
            "xin_guangji":"虎踞",
            "xin_guangji_info":"锁定技，你的准备阶段、判定阶段、弃牌阶段均视改为摸一张牌。",
            "xin_enyuan":"恩怨",
            "xin_enyuan_info":"每回合限三次，①当你一次因一名其他角色获得两张牌时，你可以令其使用一张【无中生有】；②当一名角色一次获得你的两张牌时/你体力值减少时，你可以令其使用一张【毒】。",
            "xin_qisuan":"奇算",
            "xin_qisuan_info":"(法孝直时而离场时而出场)一名其他角色结束阶段，其手牌数为全场最多，你交给其至少两张牌。",
            "xjb_fuyi":"辅翼",
            "xjb_fuyi_info":"(法孝直时而离场时而出场)一名其他角色结束阶段，其手牌数为全场最少，你可令其摸一张牌，然后其交给你两张牌。",
            "xjb_sicuan":"私篡",
            "xjb_sicuan_info":"每轮限一次，你可令一名角色的两种事件颠倒进行",
        },
    },
    intro:"",
    author:"新元",
    diskURL:"",
    forumURL:"",
    version:" 1.2.9.060322",
},files:{"character":["xjb_fazheng.jpg"],"card":["xjb_Infinity.png"],"skill":[]}}})