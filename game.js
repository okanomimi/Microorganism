enchant();
var agentNum = 0 ;
var agentList = [] ;
var game ;
var map;
var IniAgentNum=20 ;
window.onload = function() {
     game = new Game(320, 320);
    //game = new Game(500, 500);
    game.fps = 15;

    // include('jsTkylib.js')
    game.preload('map0.gif','map1.gif', 'chara0.gif', 'mi.png', 'boru.png', 'midori.png');
    game.onload = function() {
 map = new ExMap(16, 16);
map.image =game.assets['map0.gif'];
map.loadData([
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
    [39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39]
],[
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
]);
map.collisionData = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
//========================================================


        // var player3 = createAgent(game, map)  ;
        //画像を上から重ねていく
        var stage = new Group();
        stage.addChild(map);

        // var agentList = [] ;
        for(var i=0 ;i < IniAgentNum;i++){
            agentList[i]  = createAgent(i, null) ;
            stage.addChild(agentList[i]);
        }

        // stage.addChild(player2);
        // stage.addChild(player3);
        // stage.addChild(foregroundMap);
        game.rootScene.addChild(stage);

        // var pad = new Pad();
        // pad.x = 0;
        // pad.y = 220;
        // game.rootScene.addChild(pad);

        agentNum = agentList.length ;
        allAgentNum = 50 ;
        var agentNumLabel = new Label(agentNum.toString(10)+"/"+allAgentNum.toString(10));
        game.rootScene.addChild(agentNumLabel);
        //ゲームのカメラのエージェントへの追従
        game.rootScene.addEventListener('enterframe', function(e) {
            agentsIntersect(agentList, stage) ;
            game.rootScene.removeChild(agentNumLabel) ; 
            agentNumLabel = new Label(agentNum.toString(10)+"/"+allAgentNum.toString(10));
            agentNumLabel.color = "white"
            game.rootScene.addChild(agentNumLabel);
        // for(var i = 0 ;i < 30 ;i++){
        // var x = Math.min((game.width  - 16) / 2 - agentList[i].x, 0);
        // var x = Math.min((game.width  - 16) / 2 - player2.x, 0);
        // var y = Math.min((game.height - 16) / 2 - player2.y, 0);
        // x = Math.max(game.width,  x + map.width)  - map.width;
        // y = Math.max(game.height, y + map.height) - map.height;
        // stage.x = x;
        // stage.y = y;

        // }
        });
    };
    game.start();
};


/**
 * ランダムに動くエージェントの生成
 */
function createAgent(num, name){
    var agent ;
    if (name != null){
        if (name == "midorimusi"){
            agent = new Midorimusi() ;
        }else if(name == "boul"){
            agent = new Boul() ;
        }else{
            agent = new Mizinko() ;
        }
    }else{
        if (num < IniAgentNum/2){
            agent = new Boul() ;
        }else if (num < (IniAgentNum-2)){
            agent = new Midorimusi() ;
        }else{
            agent = new Mizinko() ;
        }
    } 
    r_x = Math.random() * 10;
    r_x = Math.round(r_x) ;
    agent.x = r_x * 16 - 8;

    r_y = Math.random() * 10 ;
    r_y = Math.round(r_y) ;
    agent.y = r_y * 16;

    agent.isMoving = false;
    agent.direction = 0;
    agent.walk = 1;
    agent.addEventListener('enterframe', function() {

        //各微生物の細かい挙動
        agent.frame ++ ;
        if(agent.frame > 2){
            agent.frame = 0 ; 
        }
        // this.frame = this.direction * 3 + this.walk;    //移動したときに画像の変化について
        if (this.isMoving) {
            this.moveBy(this.vx, this.vy);

            if (!(game.frame % 3)) {
                this.walk++;
                this.walk %= 3;
            }
            if ((this.vx && (this.x-8) % 16 == 0) || (this.vy && this.y % 16 == 0)) {
                this.isMoving = false;
                this.walk = 1;
            }
        } else {
            this.vx = this.vy = 0;
            // this.direction = 1;
            //次動く方向を決めて、実際に動く

            this.direction = Math.random() * 4;

            ran = Math.random() * 4
                if (ran < 1){

                    this.direction = 3;
                    this.vy = -4;
                }
                else if (ran < 2){

                    this.direction = 1;
                    this.vx = -4;
                }
                else if (ran < 3){
                    this.direction = 2;
                    this.vx = 4;
                }
                else{
                    this.direction = 4;
                    this.vy = 4;
                }

            //以下はあたり判定？
            if (this.vx || this.vy) {
                var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * 16 : 0) + 16;
                var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * 16 : 0) + 16;
                for(var i=0 ;i < agentList.length ;i++){
                    if (agentList[i]!= this && this.intersect[agentList[i]]){
                        break ;
                    }
                }
                if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x, y)) {
                    this.isMoving = true;
                    arguments.callee.call(this);

                } 

            }
        }
    });
    return agent ;
}


function include(fileName){
    var scriptE=document.createElement('script') ;
    scriptE.type='text/javascript' ;
    scriptE.src=fileName ;
    document.body.appendChild(scriptE) ;
}

/**
 * 微生物同士のあたり判定
 */
function agentsIntersect(agentList, stage){
    for(num in agentList) {
        for(num2 in agentList) {
            if(num != num2){
                if( agentList[num].intersect(agentList[num2])){
                    if (agentList[num].strength > agentList[num2].strength){
                        stage.removeChild(agentList[num2]) ;
                        agentList.splice(num2, 1) ;
                        agentNum = agentNum -1 ;
                    }else if(agentList[num].strength < agentList[num2].strength){
                        stage.removeChild(agentList[num]) ;
                        agentList.splice(num, 1) ;
                        agentNum = agentNum -1 ;
                    }else if(agentList[num].name == agentList[num2].name){   //同じやつ来たら新しいやつの生成
                        i = Math.random() 
                            if (agentList[num].name == "mizinko"){
                            } else if (i < 0.01 && agentNum < 50){
                                agent = createAgent(i, agentList[num].name) ;
                                // console.log(agent.name)  ;
                                agentList.push(agent) ;
                                stage.addChild(agent) ;
                                agentNum = agentNum +1 ;

                            }
                    }
                }
            }
        }
    }
}


    ////////////////////////////////////////////////////////////////////////
    //
    // == 以下 各微生物
    //
    ////////////////////////////////////////////////////////////////////////

    /*
     * みじんこクラス
     */
    var Mizinko = enchant.Class.create(enchant.Sprite,{
        initialize:function(){
            enchant.Sprite.call(this, 32, 32)  ;

            var image = new Surface(96, 128);
            image.draw(game.assets['mi.png'], 0, 0, 96, 128, 0, 0, 96, 128);  //主人公の画像表示
            this.image = image ;
        }, 
        name:"mizinko", 
        strength:3,       //強さ
               //空腹度 @todo
    } ) ;


    /*
     * ミドリムシクラス
     */
    var Midorimusi = enchant.Class.create(enchant.Sprite,{
        initialize:function(){
            enchant.Sprite.call(this, 32, 32)  ;

            var image = new Surface(96, 128);
            image.draw(game.assets['midori.png'], 0, 0, 96, 128, 0, 0, 96, 128);  //主人公の画像表示
            this.image = image ;
        }, 
        name:"midorimusi", 
        strength:2      //強さ
    } ) ;

    /*
     * ボールクラス
     */
    var Boul = enchant.Class.create(enchant.Sprite,{
        initialize:function(){
            enchant.Sprite.call(this, 32, 32)  ;
            var image = new Surface(96, 128);
            image.draw(game.assets['boru.png'], 0, 0, 96, 128, 0, 0, 96, 128);  //主人公の画像表示
            this.image = image ;
        }, 
        name:"boul", 
        strength:1      //強さ
    } ) ;

