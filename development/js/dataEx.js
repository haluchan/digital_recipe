function skinProdSelect() {
        var special =	[
                {id:'horny_', name:'角層' , option :[
                        {value:'0'  , name:'請選擇建議', option:[]},
                        {value:'14' , name:'去除老廢角質', option:[
                                {value:"0", name:"請選擇"},
                                {value:"1401", name:"泥狀角質按摩霜e"},
                                {value:"1402", name:"逆齡再生修復精露"},
                                {value:"1403", name:"角質發光液EX 1"},
                                {value:"1404", name:"角質發光液EX 2"}]},
                        {value:'15' , name:'提升角層濕潤度', option:[
                                {value:"0", name:"請選擇"},
                                {value:"1501", name:"泥狀角質按摩霜e"},
                                {value:"1502", name:"逆齡再生修復精露"},
                                {value:"1503", name:"角質發光液EX 1"},
                                {value:"1504", name:"角質發光液EX 2"}]},
                        {value:'16' , name:'其他'}]
                },
                {id:'drying_' ,name:'乾燥' , option :[
                        {value:'0'  , name:'請選擇建議', option:[]},
                        {value:'17' , name:'補充水分,深層鎖水造水', option:[
                                {value:"0", name:"請選擇"},
                                {value:"1701", name:"美膚膜力保濕露"},
                                {value:"1702", name:"美膚保水菁華棒"},
                                {value:"1703", name:"美膚溫感眼部精華"},
                                {value:"1704", name:"膜力護唇抗UV精華 "},
                                {value:"1705", name:"美膚微整機能液"},
                                {value:"1706", name:"美膚微整精華凝凍"}]},
                        {value:'18' , name:'給予肌膚滋潤,防止養分流失', option:[
                                {value:"0", name:"請選擇"},
                                {value:"1801", name:"美膚膜力保濕露"},
                                {value:"1802", name:"美膚保水菁華棒"},
                                {value:"1803", name:"美膚溫感眼部精華"},
                                {value:"1804", name:"膜力護唇抗UV精華 "},
                                {value:"1805", name:"美膚微整機能液"},
                                {value:"1806", name:"美膚微整精華凝凍"}]},
                        {value:'19' , name:'其他'}]
                },

                {id:'whitening_' , name:'美白' , option : [
                        {value:'0'  , name:'請選擇建議', option:[]},
                        {value:'20' , name:'排出,抑制黑色素', option:[
                                {value:"0", name:"請選擇"},
                                {value:"2001", name:"肌淨白精萃OP"},
                                {value:"2002", name:"肌淨白面膜"}]},
                        {value:'21' , name:'改善真皮層「黃色化」', option:[
                                {value:"0", name:"請選擇"},
                                {value:"2101", name:"肌淨白精萃OP"},
                                {value:"2102", name:"肌淨白面膜"}]},
                        {value:'22' , name:'促進血液循環正常,提高血液含氧量', option:[
                                {value:"0", name:"請選擇"},
                                {value:"2201", name:"肌淨白精萃OP"},
                                {value:"2202", name:"肌淨白面膜"}]},
                        {value:'23' , name:'其他'}]
                },

                {id:'elasticity_' , name:'張力．彈力' , option : [
                        {value:'0'  , name:'請選擇建議', option:[]},
                        {value:'24' , name:'活絡真皮細胞活力', option:[
                                {value:"0", name:"請選擇"},
                                {value:"2401", name:"逆齡再生無痕乳霜"},
                                {value:"2402", name:"逆齡再生無痕眼膜霜"},
                                {value:"2403", name:"肌能膜力緊緻精華"},
                                {value:"2404", name:"肌能補充膠囊"},
                                {value:"2405", name:"緊緻集效霜"},
                                {value:"2406", name:"抗皺集效霜"}]},
                        {value:'25' , name:'促進膠原,彈力蛋白纖維生成', option:[
                                {value:"0", name:"請選擇"},
                                {value:"2501", name:"逆齡再生無痕乳霜"},
                                {value:"2502", name:"逆齡再生無痕眼膜霜"},
                                {value:"2503", name:"肌能膜力緊緻精華"},
                                {value:"2504", name:"肌能補充膠囊"},
                                {value:"2505", name:"緊緻集效霜"},
                                {value:"2506", name:"抗皺集效霜"}]},
                        {value:'26' , name:'其他'}]
                },

                {id:'uv_' ,name:'紫外線' , option : [
                        {value:'0'  , name:'請選擇建議', option:[]},
                        {value:'27' , name:'白天做好防護', option:[
                                {value:"0", name:"請選擇"},
                                {value:"2701", name:"舒緩隔光霜EX"},
                                {value:"2702", name:"臉部抗痕防護乳EX"},
                                {value:"2703", name:"全身抗痕防護乳"}]},
                        {value:'28' , name:'其他'}]
                },

                {id:'other_' ,name:'其他困擾' , option : [
                        {value:'0'  , name:'請選擇建議', option:[]},
                        {value:'29' , name:'控油,抑制多餘油分', option:[
                                {value:"0", name:"請選擇"},
                                {value:"2901", name:"粉刺敷面組合N"},
                                {value:"2902", name:"急效抗壓馴荳精華"},
                                {value:"2903", name:"2步驟粉刺組"},
                                {value:"2904", name:"身體馴荳噴霧EX"},
                                {value:"2905", name:"按摩水凝露N"}]},
                        {value:'30' , name:'收斂毛孔', option:[
                                {value:"0", name:"請選擇"},
                                {value:"3001", name:"粉刺敷面組合N"},
                                {value:"3002", name:"急效抗壓馴荳精華"},
                                {value:"3003", name:"2步驟粉刺組"},
                                {value:"3004", name:"身體馴荳噴霧EX"},
                                {value:"3005", name:"按摩水凝露N"}]},
                        {value:'31' , name:'去除粉刺', option:[
                                {value:"0", name:"請選擇"},
                                {value:"3101", name:"粉刺敷面組合N"},
                                {value:"3102", name:"急效抗壓馴荳精華"},
                                {value:"3103", name:"2步驟粉刺組"},
                                {value:"3104", name:"身體馴荳噴霧EX"},
                                {value:"3105", name:"按摩水凝露N"}]},
                        {value:'32' , name:'消炎治痘', option:[
                                {value:"0", name:"請選擇"},
                                {value:"3201", name:"粉刺敷面組合N"},
                                {value:"3202", name:"急效抗壓馴荳精華"},
                                {value:"3203", name:"2步驟粉刺組"},
                                {value:"3204", name:"身體馴荳噴霧EX"},
                                {value:"3205", name:"按摩水凝露N"}]},
                        {value:'33' , name:'促進血液循環順暢', option:[
                                {value:"0", name:"請選擇"},
                                {value:"3301", name:"粉刺敷面組合N"},
                                {value:"3302", name:"急效抗壓馴荳精華"},
                                {value:"3303", name:"2步驟粉刺組"},
                                {value:"3304", name:"身體馴荳噴霧EX"},
                                {value:"3305", name:"按摩水凝露N"}]},
                        {value:'34' , name:'黑眼圈:促進眼週血液循環順暢', option:[
                                {value:"0", name:"請選擇"},
                                {value:"3401", name:"粉刺敷面組合N"},
                                {value:"3402", name:"急效抗壓馴荳精華"},
                                {value:"3403", name:"2步驟粉刺組"},
                                {value:"3404", name:"身體馴荳噴霧EX"},
                                {value:"3405", name:"按摩水凝露N"}]},
                        {value:'35' , name:'敏感:提升肌膚防禦力', option:[
                                {value:"0", name:"請選擇"},
                                {value:"3501", name:"粉刺敷面組合N"},
                                {value:"3502", name:"急效抗壓馴荳精華"},
                                {value:"3503", name:"2步驟粉刺組"},
                                {value:"3504", name:"身體馴荳噴霧EX"},
                                {value:"3505", name:"按摩水凝露N"}]},
                        {value:'36' , name:'其他'}]
                }
            ];

        return special ;
}


function removeVal() {
    basc_remove = [
        {value:"1" , name:"瞬卸潔膚油EX"},
        {value:"2" , name:"瞬卸潔膚蜜EX"},
        {value:"3" , name:"瞬卸潔膚霜EX"},
        {value:"4" , name:"逆齡再生溫感卸妝凝露"},
        {value:"5" , name:"眼唇卸妝液"}
    ];
    return basc_remove;

}

function cleanVal() {
    basc_clean = [
        {value:"1" , name:"舒緩潔膚乳"},
        {value:"2" , name:"海洋礦物皂"},
        {value:"3" , name:"透明潔膚乳e"},
        {value:"4" , name:"柔潤潔膚乳N"}
    ];
    return basc_clean;
}

function wetVal(){
    basc_wet = [
        {value:"1" , name:"基礎1"},
        {value:"2" , name:"基礎2"},
        {value:"3" , name:"基礎3"},
        {value:"4" , name:"基礎4"},
        {value:"5" , name:"強化1"},
        {value:"6" , name:"強化2"},
        {value:"7" , name:"強化3"},
        {value:"8" , name:"強化4"},
        {value:"9" , name:"超強化1"},
        {value:"10" , name:"超強化2"},
        {value:"11" , name:"超強化3"},
        {value:"12" , name:"超強化4"},
        {value:"13" , name:"舒緩1"},
        {value:"14" , name:"舒緩2"},
        {value:"15" , name:"極致1"},
        {value:"16" , name:"極致2"},
        {value:"17" , name:"極致3"}
    ];

    return  basc_wet;
}