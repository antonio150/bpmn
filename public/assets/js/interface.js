


var full_url = document.URL; // Get current url
var url_array = full_url.split('/') // Split the string into an array with / as separator
var org_Id = url_array[url_array.length-1];  // Get the last part of the array (-1)
console.log( "org_Id : "+org_Id ); // console.log last segment



function createLine(x1, y1, x2, y2, lineId)
{
    distance = Math.sqrt(((x1 - x2)*(x1 - x2)) + ((y1 - y2)*(y1 - y2)));
    xMid = (x1 + x2) / 2;
    yMid = (y1 + y2) / 2;

    console.log("lineId : "+lineId);
    salopeInRadian = Math.atan2(y1 - y2, x1 - x2)
    salopeInDegrees = (salopeInRadian * 180) / Math.PI;

    lineId = document.getElementById(lineId)
    lineId.style.width = distance+"px"
    lineId.style.top = yMid+"px"
    lineId.style.left = xMid - (distance/2)+"px"
    lineId.style.transform = "rotate("+salopeInDegrees+"deg) ";
}

var textB = "text";
var imgB = "img";
var textC = null;
var idToDrop = null;
var typeElem = null;

var textBC = null;
var flecheId = "fleche";
var flecheIdC = null;
var imgId = null;

var readyToDrag = false;
var i = 0;
var ja = 0;

var vI = 0;

var xInit = []; 
var yInit = []; 
var xEnd = []; 
var yEnd = [];  

var initName = []; 
var endName = [];  

// do {
  
  console.log("asaa");
 

  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    i = i + 1;
    textB = "text";
    textB = textB+i;
    
    
    imgB = imgB+i;
    flecheId = flecheId+i;
    flecheIdC = flecheId;
    // textC = typeElem;
    // console.log("drag textC : "+textC);

    ev.dataTransfer.setData(typeElem, ev.target.id);
    idToDrop  = ev.target.id;
    imgId = ev.target.id;

    // console.log("ev.target.id : "+ev.target.id)

    textBs = document.getElementById(imgId);
    console.log(textBs.getBoundingClientRect().top);


    // console.log("textB = "+textB);
    readyToDrag = true;
  }

 

  valX = 0;
  valY = 0;
 
  var iPool = 0;
  var iLane = 0;
  var poolId = null;

  var laneId = null;

  var longPool = 0;
    var laneHeightSave = 0;
  var longPoolContenu = 0;

  var i = 0;
  var j = 0;
  var k = 0;
  var l = 0;
  var m = 0;
  var n = 0;

  var ii = 0;
  var tools = [];
  var outils = [];
  var outilsSave = null;
  var toolsSave = null;
  var positX = 0;
  var positY = 0;
  var positXArray = [];
  var positYArray = [];

  var poolNameSave = 0;

  var poolSave = [];
  var poolWidth = [];
  var poolHeight = [];
  var poolName = [];

  var poolWidthSave = 0;
  var poolHeightSave = 0;
  var poolActioSave = 0;

  var laneNameSave = 0;

  var laneSave = [];
  var laneWidth = [];
  var laneHeight = [];
  var laneName = [];

  var laneWidthSave = 0;
  var laneHeightSave = 0;


  var outilsNameSave = null;
  var outilsName = []

  var ppp = 0;

  var imgIdArr = [];

  var valFlecheSave = 0;

  var posiElemX = null;
  var posiElemY = null;

  var situationSave = null;
  var situation = [];
  
  savedOutils();

  function savedOutils(event){

    $.ajax({  
      url:        '/pool/get/'+org_Id+'',  
      type:       'GET',  
      // data :  {
      //   orgId : '1',
      //   namePool : 'zareo',
      // }, 
      dataType:   'json', 
      async:      true, 
      
      success: function(data, status) { 
        
        if (data.length != 0) {
          console.log(data.length);
          $('#outputContent').append("<li> Chargement de pool avec succés </li>");
          situationSave = "succces";
          situation.push(situationSave);
        


        for (let i = 0; i < data.length; i++) {
          poolHeightSave = data[i].heightPool;
          longPoolContenu = data[i].heightPool ;
          poolWidthSave = data[i].widthPool;
          poolActioSave = data[i].heightPool - 80;
          
          var pathImgId = null;
    
    const elem = document.getElementById("div1");
          iPool = iPool + 1;
      poolId = "pool"+iPool;

      outilsSave = poolId;


      poolSave.push(poolId);
      outils.push(outilsSave);
      poolName.push(data[i].namePool);
      
      // toolsSave = poolId;
      // typeElem = poolId
      console.log("poolId : "+poolId);
      const divpool = document.createElement("div");
        divpool.setAttribute("id", poolId);
        divpool.setAttribute("onmousedown", "editKqueFuncPool(event)");

        elem.appendChild(divpool);

        const poolStyle = document.getElementById(poolId);

        poolStyle.style.width = poolWidthSave+"px";
        poolStyle.style.height = poolHeightSave+"px";
        poolStyle.style.display = "flex";
        poolStyle.style.border = "solid 1px grey";
        poolStyle.style.color = "white";
        // poolStyle.style.backgroundColor = "rgba(23, 71, 229, 0.757)";

        const divPooName = document.createElement("div");
        divPooName.setAttribute("id", ("namepool"+poolId));
        divPooName.setAttribute("onmousedown", "editKqueFuncPool(event)");
        // divPooName.setAttribute("value", "text");

        const poolElem = document.getElementById(poolId);
        poolElem.appendChild(divPooName);

          const poolNameStyle = document.getElementById(("namepool"+poolId));
          poolNameStyle.style.position = "relative";
          poolNameStyle.style.width = "60px";
          poolNameStyle.style.height = longPoolContenu+"px";
          poolNameStyle.style.border = "solid 1px grey";
          poolNameStyle.style.writingMode = "vertical-rl";
          poolNameStyle.style.transform = "rotate(180deg)";
          
          poolNameStyle.style.textAlign = "center";
          poolNameStyle.style.fontSize = "40px";
          poolNameStyle.style.backgroundColor = "rgba(23, 71, 229, 0.757)";
          // poolNameStyle.style.backgroundColor = "yellow";

          const divPooName2 = document.createElement("div");
          divPooName2.setAttribute("id", ("contenupool"+iPool));
          divPooName2.setAttribute("onmousedown", "editKqueFuncPool(event)");

          const poolElem2 = document.getElementById(poolId);
          poolElem2.appendChild(divPooName2);

          const poolNameStyle2 = document.getElementById(("contenupool"+iPool));
          poolNameStyle2.style.position = "relative";
          poolNameStyle2.style.width = "750px";
          poolNameStyle2.style.height = longPoolContenu+"px";
          poolNameStyle2.style.border = "solid 1px grey";


          

          const atioName = document.createElement("div");
          atioName.setAttribute("id", ("actioPool"+iPool));

          const actioElem = document.getElementById("contenupool"+iPool);
          actioElem.appendChild(atioName);

          const actioPoolStyle = document.getElementById(("actioPool"+iPool));
          actioPoolStyle.style.position = "absolute";
          actioPoolStyle.style.top = poolActioSave+"px";
          actioPoolStyle.style.left = "-40px";
          // actioPoolStyle.style.border = "solid 2px black";
          actioPoolStyle.style.width = "30px";



// =================================================================================

const plusName = document.createElement("img");
plusName.setAttribute("id", ("poolplus"+iPool));
plusName.setAttribute("draggable", "false");
plusName.setAttribute("class", "action");
plusName.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/plus2.png");
const plusElem = document.getElementById("actioPool"+iPool);
plusElem.appendChild(plusName);


const poolPlusStyle = document.getElementById("poolplus"+iPool);
poolPlusStyle.setAttribute("onclick", "plusFunc(event)");
// poolPlusStyle.style.border = "solid 2px black";
poolPlusStyle.style.color = "black";


const moinsName = document.createElement("img");
moinsName.setAttribute("id", ("poolmoins"+iPool));
moinsName.setAttribute("draggable", "false");
moinsName.setAttribute("class", "action");
moinsName.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/moins2.png");
const moinsElem = document.getElementById("actioPool"+iPool);
moinsElem.appendChild(moinsName);

          const textmoins = document.createTextNode("moins");
          moinsName.appendChild(textmoins);
          const poolMoinsStyle = document.getElementById("poolmoins"+iPool);
          poolMoinsStyle.setAttribute("onclick", "moinsFunc(event)");
          poolMoinsStyle.style.color = "black";


// ===============================================================================


        ppp = "editK"+poolId;
        console.log("outils.length = "+outils.length)
        if (outils.length!= 0) {
          for (let j = 0; j < outils.length-1; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ppp);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ppp);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+poolId);
        divname1.appendChild(labelName);

        

        const divname2 = document.getElementById("lblNameId"+poolId);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+poolId);

        divname2.appendChild(inputName); 

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecriId"+poolId);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecriId"+poolId);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+poolId);

        divDecri.appendChild(inputDecr); 

        const btnNamePool = document.createElement("div");
        btnNamePool.setAttribute("id", "namePoolSave"+poolId);
        btnNamePool.setAttribute("onclick", "setNamePool(event)");
        divEditK.appendChild(btnNamePool); 

        const nmPool = document.getElementById("namePoolSave"+poolId);
        const dd2 = document.createTextNode('SAVE');
        nmPool.appendChild(dd2);

        nmPool.style.border = "none ";
        nmPool.style.margin = "15px";
        nmPool.style.color = "white"
        nmPool.style.padding = "2px";
        nmPool.style.textAlign = "center";
        nmPool.style.backgroundColor = "rgba(23, 71, 229, 0.757)"
        
        const namePool = document.getElementById("nameTxt"+poolId).value;

        // const poolNameModif= document.getElementById("namepool"+iPool).value = namePool;

        poolNameSave = namePool;

        $('#namepool'+poolId).text(data[i].namePool); 
        $('#nameTxt'+poolId).text(data[i].namePool);

           

          $.ajax({  
            url:        '/lane/get/'+data[i].idPool+'',  
            type:       'GET',  
            // data :  {
            //   orgId : '1',
            //   namePool : 'zareo',
            // }, 
            dataType:   'json', 
            async:      true, 
            success: function(data2, status) { 
              
              situationSave = "succces";
          situation.push(situationSave);

              if (data2.length != 0) {
                console.log(data2.length);
              
              $('#outputContent').append("<li> Chargement de lane avec succés </li>");
            
              for (let i = 0; i < data2.length; i++) {
                // const element = array[i];
                
              
                    laneHeightSave = data2[i].heightLane;
    
    

      iLane = iLane + 1;
      laneId = "lane"+iLane;
      outilsSave = laneId;
      laneSave.push(laneId);
      outils.push(outilsSave);

      laneWidthSave = data2[i].widthLane;;
      // laneHeightSave = laneHeightSave;
      // typeElem = laneId;
      // console.log("laneId event.target.id : "+event.target.id);
      laneName.push(data2[i].nameLane);

    const elemLane = document.getElementById("contenupool"+iPool);

      const divlane = document.createElement("div");
        divlane.setAttribute("id", laneId);
        divlane.setAttribute("onmousedown", "editKqueFuncLane(event)");
        // editKqueFuncLane

        elemLane.appendChild(divlane);

        const laneStyle = document.getElementById(laneId);

        laneStyle.style.position = "relative";
        laneStyle.style.top = "0px";
        laneStyle.style.left = "1px";
        laneStyle.style.width = laneWidthSave+"px";
        laneStyle.style.height = laneHeightSave+"px";
        laneStyle.style.border = "solid 1px grey";
        
        

        const divLaneName = document.createElement("div");
        divLaneName.setAttribute("id", ("nameLane"+laneId));
        divLaneName.setAttribute("onmousedown", "editKqueFuncLane(event)");

        const laneElem = document.getElementById(laneId);
        laneElem.appendChild(divLaneName);

          const laneNameStyle = document.getElementById(("nameLane"+laneId));
          laneNameStyle.style.width = "5%";
          laneNameStyle.style.height = "98.5%";
          laneNameStyle.style.border = "solid 1px grey";
          laneNameStyle.style.color = "white";
          laneNameStyle.style.fontSize = "20px";
          laneNameStyle.style.backgroundColor = "rgba(245, 10, 30, 0.615)";
          laneNameStyle.style.writingMode = "vertical-rl";
          laneNameStyle.style.transform = "rotate(180deg)";
          laneNameStyle.style.textAlign = "center";

    
// ================================================================================

          const actioLanePoolId = "actioLane"+iLane;
          const atioNameLane = document.createElement("div");
          atioNameLane.setAttribute("id", (actioLanePoolId));
          atioNameLane.setAttribute("onmousedown", "editKqueFuncLane(event)");

          const actioElemLane = document.getElementById(laneId);
          actioElemLane.appendChild(atioNameLane);

          const actioLaneStyle = document.getElementById((actioLanePoolId));
          actioLaneStyle.style.position = "absolute";
          actioLaneStyle.style.bottom = "10px";
          
          actioLaneStyle.style.left = "3px";
          actioLaneStyle.style.width = "30px";



          const plusNameLane = document.createElement("img");
          plusNameLane.setAttribute("id", ("lanePlus"+iLane));
          plusNameLane.setAttribute("draggable", "false");
          plusNameLane.setAttribute("class", "action");
          plusNameLane.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/plus1.png");
          plusNameLane.setAttribute("onmousedown", "editKqueFuncLane(event)");

          const plusElemLane = document.getElementById(actioLanePoolId);
          plusElemLane.appendChild(plusNameLane);
          

          const lanePlusStyle = document.getElementById("lanePlus"+iLane);
          lanePlusStyle.setAttribute("onclick", "plusLaneFunc(event)");
          lanePlusStyle.style.color = "black";

          const moinsNameLane = document.createElement("img");
          moinsNameLane.setAttribute("id", ("laneMoins"+iLane));
          moinsNameLane.setAttribute("draggable", "false");
          moinsNameLane.setAttribute("class", "action");
          moinsNameLane.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/moins1.png");
          
          moinsNameLane.setAttribute("onmousedown", "editKqueFuncLane(event)");

          const moinsElemLane = document.getElementById(actioLanePoolId);
          moinsElemLane.appendChild(moinsNameLane);
          

          const laneMoinsStyle = document.getElementById("laneMoins"+iLane);
          laneMoinsStyle.setAttribute("onclick", "moinsLaneFunc(event)");
          laneMoinsStyle.style.color = "black"

  // ====================================================================================

  var sss = null;
          sss = "editK"+laneId;
        console.log("outils.length = "+outils.length)
        if (outils.length!= 0) {
          for (let j = 0; j < outils.length-1; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", sss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(sss);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+laneId);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+laneId);
        const dd = document.createTextNode('Name Lane: ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+laneId);

        divname2.appendChild(inputName); 

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrLaneiId"+laneId);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrLaneiId"+laneId);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+laneId);

        divDecri.appendChild(inputDecr); 

        const btnNameLane = document.createElement("div");
        btnNameLane.setAttribute("id", "nameLaneSave"+laneId);
        btnNameLane.setAttribute("onclick", "setNameLane()");
        divname1.appendChild(btnNameLane); 

        const nmLane = document.getElementById("nameLaneSave"+laneId);
        nmLane.style.border = "none ";
        nmLane.style.margin = "15px";
        nmLane.style.color = "white"
        nmLane.style.padding = "2px";
        nmLane.style.textAlign = "center";
        nmLane.style.backgroundColor = "rgba(245, 10, 30, 0.615)"
        const dd2 = document.createTextNode('SAVE LANE');
        nmLane.appendChild(dd2);
        
        
        const nameLane = document.getElementById("nameTxt"+laneId).value;

        $('#nameTxt'+laneId).text(data2[i].nameLane)
        $('#nameLane'+laneId).text(data2[i].nameLane); 


        // const poolNameModif= document.getElementById("namepool"+iPool).value = namePool;

        laneNameSave = nameLane;

        
        $.ajax({  
          url:        '/flow/get/'+data2[i].idLane+'',  
          type:       'GET',  
          // data :  {
          //   orgId : '1',
          //   namePool : 'zareo',
          // }, 
          dataType:   'json', 
          async:      true, 
          success: function(data3, status) { 
            
            if (data3.length != 0) {
              console.log(data3.length);
              situationSave = "succces";
          situation.push(situationSave);
            
            $('#outputContent').append("<li> Chargement de flow avec succés </li>");

            for (let i = 0; i < data3.length; i++) {
              
              data3[i].nameFlow;
              xInit.push(data3[i].initX);
              yInit.push(data3[i].initY);
              initName.push(data3[i].initName);
              xEnd.push(data3[i].endX);
              yEnd.push(data3[i].endY);
              endName.push(data3[i].endName);

              // ja = ja + 1;
              ligne.push("ligne"+i);

              valFlecheSave = i;

              const div = document.createElement("div");
              div.setAttribute("id", "ligne"+i);

            const element1 = document.getElementById("div1");
              element1.appendChild(div);
        
              const lineStyle = document.getElementById("ligne"+i);
        
              lineStyle.style.backgroundColor = "grey";
              lineStyle.style.position = "absolute";
              lineStyle.style.height = "1px";

              createLine(xInit[i], yInit[i], xEnd[i], yEnd[i], (ligne[i]));

              console.log("createLine("+xInit[i]+", "+yInit[i]+", "+xEnd[i]+", "+yEnd[i]+", (ligne["+i+"]));")
            }

              // createLine(xInit[v], yInit[v], xEnd[v], yEnd[v], ligne[v]);

              

          } 
          },
          error : function(xhr, textStatus, errorThrown) {  
            alert("error ajax");
            $('#outputContent').append("<li> Erreur de ajax au flow </li>");  
          }  
      });
    
                      
                    $.ajax({  
                      url:        '/gateway/get/'+data2[i].idLane+'',  
                      type:       'GET',  
                      // data :  {
                      //   orgId : '1',
                      //   namePool : 'zareo',
                      // }, 
                      dataType:   'json', 
                      async:      true, 
                      success: function(data3, status) { 
                        if (data3.length != 0) {
                          situationSave = "succces";
          situation.push(situationSave);
                        
                        console.log("gateway : "+data3.length);

                        $('#outputContent').append("<li> Chargement de Gateway avec succés </li>");

                        for (let k = 0; k < data3.length; k++) {
                          
                          
                        
                        var imgId2 = data3[k].typeGateway;
                        console.log("data3["+k+"].leftGateway = "+data3[k].leftGateway);
                        console.log("data3["+k+"].topGateway = "+data3[k].topGateway);

                        if (imgId2 === "AND" || imgId2 === "inclusive" || imgId2 === "XOR") {
                          pathImgId = "gateways/"+imgId2;
                  
                          i=i+1
                          typeElem = imgId2+""+i;
                        }
                        
                        outilsName.push(data3[k].nameGateway)
                  
                        textC = typeElem;
                  
                        const str = typeElem;

                        posiElemX = typeElem+"_"+data3[k].leftGateway;
                        posiElemY = typeElem+"_"+data3[k].topGateway;

                        positArrayX.push(posiElemX);
                        positArrayY.push(posiElemY);

						            console.log("first typeElem : "+typeElem)
                  
                        ii = ii + 1;
                  
                        flecheId = "fleche"+ii;
                        
                        const divDrag = document.createElement("div");
      divDrag.setAttribute("id", typeElem);
      divDrag.setAttribute("onmousemove", "startF(event, 'savedData')");
      divDrag.setAttribute("onmousedown", "editKqueFuncTools(event)")

      const elem = document.getElementById("div1");

      elem.appendChild(divDrag);

      // console.log("drawActivity event.pageX : "+event.pageX);
      // console.log("drawActivity event.pageY : "+event.pageY);

      var elemX = elem.getBoundingClientRect().x;
      var elemY = elem.getBoundingClientRect().y;
      console.log("elemX : "+elemX);
      console.log("elemY : "+elemY);

      const divFleche = document.getElementById(typeElem);
      divFleche.style.position = "absolute";
      // divFleche.style.backgroundColor = "white";

      divFleche.style.left = data3[k].leftGateway +"px";
      divFleche.style.top = data3[k].topGateway +"px";

      if (imgId2 === "AND" || imgId2 === "inclusive" || imgId2 === "XOR" || imgId2 === "start_message" || imgId2 === "start_signal" 
      || imgId2 === "start_timer" || imgId2 === "startnow" || imgId2 === "catch_link" || imgId2 === "catch_message" || imgId2 === "catch_signal" 
      || imgId2 === "throw_link" || imgId2 === "throw_message" || imgId2 === "throw_signal" || imgId2 === "timer" 
      || imgId2 === "end_error" || imgId2 === "end_message" || imgId2 === "end_signal" || imgId2 === "endnow" 
      || imgId2 === "terminate_end_event" ) {
        
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";

      }else if(imgId2 === "abstract_task" || imgId2 === "human" || imgId2 === "receive_task" || imgId2 === "script_task" || imgId2 === "send_task" || imgId2 === "service_task" || imgId2 === "Call_activity" || imgId2 === "Event_subprocess")
      {
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";
      }

      const nameTypeElem = document.createElement("div");
      nameTypeElem.setAttribute("id", "lbl"+typeElem);
      divFleche.appendChild(nameTypeElem);

      const lblStyle = document.getElementById("lbl"+typeElem);
      lblStyle.style.fontSize = "10px";

      const div = document.createElement("img");
        div.setAttribute("id", flecheId);
        div.setAttribute("draggable", "false");
        div.setAttribute("onmousedown", "funcFlecheInit(event)");
        // div.setAttribute("onmouseleave", "leaveFlec(event)");
        div.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/fleche.png");

        divFleche.appendChild(div);

        
        const img = document.createElement("img");
        img.setAttribute("id", typeElem);
        img.setAttribute("class", "caree");
        img.setAttribute("draggable", "false");
        img.setAttribute("src", "assets/img/bpm logo/"+pathImgId+".png");
        img.setAttribute("src", document.getElementById(imgId2).src);
        
        divFleche.appendChild(img);      
        // {{asset('assets/img/img.png')}}
        // =========================================================================================

        console.log("outils : "+outils);
        console.log("ssss : "+ssss);
        console.log("outils[outils.length-1] : "+outils[outils.length-1]);

    if(outils[outils.length] === undefined){
         ssss = "editK"+typeElem;
        console.log("coucou tool1");

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "1px black solid";
        divname1.style.display = "block";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

        
      }


    else
      {

        ssss = "editK"+typeElem;

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        console.log("ssss2 : "+ssss);
        console.log("editK outils2[outils.length-1] : editK"+outils[outils.length-1]);
        
        const ancienTool = document.getElementById("editK"+outils[outils.length-1]);
        ancienTool.style.display = "none";

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

                            }
                              
                            $('#nameTxt'+typeElem).text(data3[k].nameGateway)
                            $('#lbl'+typeElem).text(data3[k].nameGateway); 
                  
                        const textzaz = document.getElementById(typeElem);
                        // textzaz.addEventListener("onload", startF(event));
                  
                        const fleche = document.getElementById(flecheId);
                        
                        readyToDrag = false;
                        typeElem = textC;
                  
                        console.log("typeElem init : "+typeElem);
                  
                        toolsSave = typeElem;
                        tools.push(toolsSave);
                        outilsSave = typeElem;
                        outils.push(outilsSave);
                  
                          }

                        }
                      },
                      error : function(xhr, textStatus, errorThrown) {  
                        alert("error ajax");  
                        $('#outputContent').append("<li> Erreur ajax au Gateway </li>");
                      }  
                  });

                  $.ajax({  
                    url:        '/inter_ev/get/'+data2[i].idLane+'',  
                    type:       'GET',  
                    // data :  {
                    //   orgId : '1',
                    //   namePool : 'zareo',
                    // }, 
                    dataType:   'json', 
                    async:      true, 
                    success: function(data3, status) { 
                      situationSave = "succces";
          situation.push(situationSave);

                      if (data3.length != 0) {
                        
                        console.log(data3.length);

                      $('#outputContent').append("<li> Chargement de Intermediaire event avec succés </li>");

                      for (let k = 0; k < data3.length; k++) {
                          
                          
                        
                        var imgId2 = data3[k].typeInter;
                        console.log("data3["+k+"].leftInter = "+data3[k].leftInter);
                        console.log("data3["+k+"].topInter = "+data3[k].topInter);
                        if(imgId2 === "catch_link" || imgId2 === "catch_message" || imgId2 === "catch_signal" || imgId2 === "throw_link" || imgId2 === "throw_message" || imgId2 === "throw_signal" || imgId2 === "timer"){
                          pathImgId = "int events/"+imgId2;
                  
                          m=m+1
                          typeElem = imgId2+""+m;
                        }
                        
                        outilsName.push(data3[k].nameInter)
                  
                        textC = typeElem;
                  
                        const str = typeElem;
                        posiElemX = typeElem+"_"+data3[k].leftInter;
                        posiElemY = typeElem+"_"+data3[k].topInter;

                        positArrayX.push(posiElemX);
                        positArrayY.push(posiElemY);

						            console.log("first typeElem : "+typeElem)
                  
                        ii = ii + 1;
                  
                        flecheId = "fleche"+ii;
                        
                        const divDrag = document.createElement("div");
      divDrag.setAttribute("id", typeElem);
      divDrag.setAttribute("onmousemove", "startF(event, 'savedData')");
      divDrag.setAttribute("onmousedown", "editKqueFuncTools(event)")

      const elem = document.getElementById("div1");

      elem.appendChild(divDrag);

      // console.log("drawActivity event.pageX : "+event.pageX);
      // console.log("drawActivity event.pageY : "+event.pageY);

      var elemX = elem.getBoundingClientRect().x;
      var elemY = elem.getBoundingClientRect().y;
      console.log("elemX : "+elemX);
      console.log("elemY : "+elemY);

      const divFleche = document.getElementById(typeElem);
      divFleche.style.position = "absolute";
      // divFleche.style.backgroundColor = "white";
      divFleche.style.left = data3[k].leftInter +"px";
      divFleche.style.top = data3[k].topInter +"px";

      if (imgId2 === "AND" || imgId2 === "inclusive" || imgId2 === "XOR" || imgId2 === "start_message" 
      || imgId2 === "start_signal" || imgId2 === "start_timer" || imgId2 === "startnow" || imgId2 === "catch_link" 
      || imgId2 === "catch_message" || imgId2 === "catch_signal" || imgId2 === "throw_link" || imgId2 === "throw_message" 
      || imgId2 === "throw_signal" || imgId2 === "timer" || imgId2 === "end_error" || imgId2 === "end_message" 
      || imgId2 === "end_signal" || imgId2 === "endnow" || imgId2 === "terminate_end_event" ) {
        
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";

      }else if(imgId2 === "abstract_task" || imgId2 === "human" || imgId2 === "receive_task" || imgId2 === "script_task" || imgId2 === "send_task" || imgId2 === "service_task" || imgId2 === "Call_activity" || imgId2 === "Event_subprocess")
      {
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";
      }

      const nameTypeElem = document.createElement("div");
      nameTypeElem.setAttribute("id", "lbl"+typeElem);
      divFleche.appendChild(nameTypeElem);

      const lblStyle = document.getElementById("lbl"+typeElem);
      lblStyle.style.fontSize = "10px";
      // divFleche.style.display = "none";

      

      const div = document.createElement("img");
        div.setAttribute("id", flecheId);
        div.setAttribute("draggable", "false");
        div.setAttribute("onmousedown", "funcFlecheInit(event)");
        // div.setAttribute("onmouseleave", "leaveFlec(event)");
        div.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/fleche.png");

        divFleche.appendChild(div);

        
        const img = document.createElement("img");
        img.setAttribute("id", typeElem);
        img.setAttribute("class", "caree");
        img.setAttribute("draggable", "false");
        img.setAttribute("src", "assets/img/bpm logo/"+pathImgId+".png");
        img.setAttribute("src", document.getElementById(imgId2).src);
        
        divFleche.appendChild(img);      
        // {{asset('assets/img/img.png')}}
        // =========================================================================================

        console.log("outils : "+outils);
        console.log("ssss : "+ssss);
        console.log("outils[outils.length-1] : "+outils[outils.length-1]);

    if(outils[outils.length] === undefined){
         ssss = "editK"+typeElem;
        console.log("coucou tool1");

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "1px black solid";
        divname1.style.display = "block";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

        
      }


    else
      {

        ssss = "editK"+typeElem;

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        console.log("ssss2 : "+ssss);
        console.log("editK outils2[outils.length-1] : editK"+outils[outils.length-1]);
        
        const ancienTool = document.getElementById("editK"+outils[outils.length-1]);
        ancienTool.style.display = "none";

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

       

                            }
                            $('#nameTxt'+typeElem).text(data3[k].nameInter)
                            $('#lbl'+typeElem).text(data3[k].nameInter); 

                  
                        const textzaz = document.getElementById(typeElem);
                        // textzaz.addEventListener("onload", startF(event));
                  
                        const fleche = document.getElementById(flecheId);
                        
                        readyToDrag = false;
                        typeElem = textC;
                  
                        console.log("typeElem init : "+typeElem);
                  
                        toolsSave = typeElem;
                        tools.push(toolsSave);
                        outilsSave = typeElem;
                        outils.push(outilsSave);
                  
                          }

                        }
                    },
                    error : function(xhr, textStatus, errorThrown) {  
                      console.log("error ajax");  
                      $('#outputContent').append("<li> Erreur ajax au Intermediaire event </li>");
                    }  
                });

                $.ajax({  
                  url:        '/start_ev/get/'+data2[i].idLane+'',  
                  type:       'GET',  
                  // data :  {
                  //   orgId : '1',
                  //   namePool : 'zareo',
                  // }, 
                  dataType:   'json', 
                  async:      true, 
                  success: function(data3, status) { 

                    situationSave = "succces";
          situation.push(situationSave);

                    if (data3.length != 0) {
                      console.log(data3.length);
                    $('#outputContent').append("<li> Chargement de Start event avec succés </li>");

                    
                    for (let k = 0; k < data3.length; k++) {
                          
                          
                        
                      var imgId2 = data3[k].typeStart;
                      console.log("data3["+k+"].leftStart = "+data3[k].leftStart);
                      console.log("data3["+k+"].topStart = "+data3[k].topStart);
                      if(imgId2 === "start_message" || imgId2 === "start_signal" || imgId2 === "start_timer" || imgId2 === "startnow" ){
                        pathImgId = "start events/"+imgId2;
                
                        l=l+1
                        typeElem = imgId2+""+l;
                      }
                      
                      outilsName.push(data3[k].nameStart)
                
                      textC = typeElem;
                
                      const str = typeElem;
                      posiElemX = typeElem+"_"+data3[k].leftStart;
                      posiElemY = typeElem+"_"+data3[k].topStart;

                      positArrayX.push(posiElemX);
                      positArrayY.push(posiElemY);

                      console.log("first typeElem : "+typeElem)
                
                      ii = ii + 1;
                
                      flecheId = "fleche"+ii;
                      
                      const divDrag = document.createElement("div");
      divDrag.setAttribute("id", typeElem);
      divDrag.setAttribute("onmousemove", "startF(event, 'savedData')");
      divDrag.setAttribute("onmousedown", "editKqueFuncTools(event)")

      const elem = document.getElementById("div1");

      elem.appendChild(divDrag);

      // console.log("drawActivity event.pageX : "+event.pageX);
      // console.log("drawActivity event.pageY : "+event.pageY);

      var elemX = elem.getBoundingClientRect().x;
      var elemY = elem.getBoundingClientRect().y;
      console.log("elemX : "+elemX);
      console.log("elemY : "+elemY);

      const divFleche = document.getElementById(typeElem);
      divFleche.style.position = "absolute";
      // divFleche.style.backgroundColor = "white";
      divFleche.style.left = data3[k].leftStart +"px";
      divFleche.style.top = data3[k].topStart +"px";

      if (imgId2 === "AND" || imgId2 === "inclusive" || imgId2 === "XOR" || imgId2 === "start_message" 
      || imgId2 === "start_signal" || imgId2 === "start_timer" || imgId2 === "startnow" || imgId2 === "catch_link" 
      || imgId2 === "catch_message" || imgId2 === "catch_signal" || imgId2 === "throw_link" 
      || imgId2 === "throw_message" || imgId2 === "throw_signal" || imgId2 === "timer" || imgId2 === "end_error" 
      || imgId2 === "end_message" || imgId2 === "end_signal" || imgId2 === "endnow" || imgId2 === "terminate_end_event" ) {
        
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";

      }else if(imgId2 === "abstract_task" || imgId2 === "human" || imgId2 === "receive_task" || imgId2 === "script_task" 
      || imgId2 === "send_task" || imgId2 === "service_task" || imgId2 === "Call_activity" || imgId2 === "Event_subprocess")
      {
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";
      }

      const nameTypeElem = document.createElement("div");
      nameTypeElem.setAttribute("id", "lbl"+typeElem);
      divFleche.appendChild(nameTypeElem);

      const lblStyle = document.getElementById("lbl"+typeElem);
      lblStyle.style.fontSize = "10px";
      // divFleche.style.display = "none";

      

      const div = document.createElement("img");
        div.setAttribute("id", flecheId);
        div.setAttribute("draggable", "false");
        div.setAttribute("onmousedown", "funcFlecheInit(event)");
        // div.setAttribute("onmouseleave", "leaveFlec(event)");
        div.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/fleche.png");

        divFleche.appendChild(div);

        
        const img = document.createElement("img");
        img.setAttribute("id", typeElem);
        img.setAttribute("class", "caree");
        img.setAttribute("draggable", "false");
        img.setAttribute("src", "assets/img/bpm logo/"+pathImgId+".png");
        img.setAttribute("src", document.getElementById(imgId2).src);
        
        divFleche.appendChild(img);      
        // {{asset('assets/img/img.png')}}
        // =========================================================================================

        console.log("outils : "+outils);
        console.log("ssss : "+ssss);
        console.log("outils[outils.length-1] : "+outils[outils.length-1]);

    if(outils[outils.length] === undefined){
         ssss = "editK"+typeElem;
        console.log("coucou tool1");

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "1px black solid";
        divname1.style.display = "block";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

        
      }


    else
      {

        ssss = "editK"+typeElem;

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        console.log("ssss2 : "+ssss);
        console.log("editK outils2[outils.length-1] : editK"+outils[outils.length-1]);
        
        const ancienTool = document.getElementById("editK"+outils[outils.length-1]);
        ancienTool.style.display = "none";

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

                          }
                          $('#nameTxt'+typeElem).text(data3[k].nameStart)
                          $('#lbl'+typeElem).text(data3[k].nameStart); 

                
                      const textzaz = document.getElementById(typeElem);
                      // textzaz.addEventListener("onload", startF(event));
                
                      const fleche = document.getElementById(flecheId);
                      
                      readyToDrag = false;
                      typeElem = textC;
                
                      console.log("typeElem init : "+typeElem);
                
                      toolsSave = typeElem;
                      tools.push(toolsSave);
                      outilsSave = typeElem;
                      outils.push(outilsSave);
                
                        }
                      }
                  },
                  error : function(xhr, textStatus, errorThrown) {  
                    alert("error ajax"); 
                    $('#outputContent').append("<li> Erreur ajax au Start Event </li>"); 
                  }  
              });

              $.ajax({  
                url:        '/stop_ev/get/'+data2[i].idLane+'',  
                type:       'GET',  
                // data :  {
                //   orgId : '1',
                //   namePool : 'zareo',
                // }, 
                dataType:   'json', 
                async:      true, 
                success: function(data3, status) { 
                  situationSave = "succces";
          situation.push(situationSave);

                  if (data3.length != 0) {
                    console.log(data3.length);
                  $('#outputContent').append("<li> Chargement de Stop event avec succés </li>");

                  for (let k = 0; k < data3.length; k++) {
                          
                          
                        
                    var imgId2 = data3[k].typeStop;
                    console.log("data3["+k+"].leftStop = "+data3[k].leftStop);
                    console.log("data3["+k+"].topStop = "+data3[k].topStop);
                    if(imgId2 === "end_error" || imgId2 === "end_message" || imgId2 === "end_signal" || imgId2 === "endnow" || imgId2 === "terminate_end_event" ){
                      pathImgId = "end events/"+imgId2;
              
                      n=n+1
                      typeElem = imgId2+""+n;
                    }
                    
                    outilsName.push(data3[k].nameStop)
              
                    textC = typeElem;
              
                    const str = typeElem;

                    posiElemX = typeElem+"_"+data3[k].leftStop;
                    posiElemY = typeElem+"_"+data3[k].topStop;

                    positArrayX.push(posiElemX);
                    positArrayY.push(posiElemY);
                    console.log("first typeElem : "+typeElem)
              
                    ii = ii + 1;
              
                    flecheId = "fleche"+ii;
                    
                    const divDrag = document.createElement("div");
      divDrag.setAttribute("id", typeElem);
      divDrag.setAttribute("onmousemove", "startF(event, 'savedData')");
      divDrag.setAttribute("onmousedown", "editKqueFuncTools(event)")

      const elem = document.getElementById("div1");

      elem.appendChild(divDrag);

      // console.log("drawActivity event.pageX : "+event.pageX);
      // console.log("drawActivity event.pageY : "+event.pageY);

      var elemX = elem.getBoundingClientRect().x;
      var elemY = elem.getBoundingClientRect().y;
      console.log("elemX : "+elemX);
      console.log("elemY : "+elemY);

      const divFleche = document.getElementById(typeElem);
      divFleche.style.position = "absolute";
      // divFleche.style.backgroundColor = "white";

      divFleche.style.left = data3[k].leftStop+"px";
      divFleche.style.top = data3[k].topStop +"px";

      if (imgId2 === "AND" || imgId2 === "inclusive" || imgId2 === "XOR" || imgId2 === "start_message" 
      || imgId2 === "start_signal" || imgId2 === "start_timer" || imgId2 === "startnow" || imgId2 === "catch_link" 
      || imgId2 === "catch_message" || imgId2 === "catch_signal" || imgId2 === "throw_link" || imgId2 === "throw_message" 
      || imgId2 === "throw_signal" || imgId2 === "timer" || imgId2 === "end_error" || imgId2 === "end_message" 
      || imgId2 === "end_signal" || imgId2 === "endnow" || imgId2 === "terminate_end_event" ) {
        
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";

      }else if(imgId2 === "abstract_task" || imgId2 === "human" || imgId2 === "receive_task" || imgId2 === "script_task" 
      || imgId2 === "send_task" || imgId2 === "service_task" || imgId2 === "Call_activity" || imgId2 === "Event_subprocess")
      {
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";
      }

      const nameTypeElem = document.createElement("div");
      nameTypeElem.setAttribute("id", "lbl"+typeElem);
      divFleche.appendChild(nameTypeElem);

      const lblStyle = document.getElementById("lbl"+typeElem);
      lblStyle.style.fontSize = "10px";
      // divFleche.style.display = "none";

      

      const div = document.createElement("img");
        div.setAttribute("id", flecheId);
        div.setAttribute("draggable", "false");
        div.setAttribute("onmousedown", "funcFlecheInit(event)");
        // div.setAttribute("onmouseleave", "leaveFlec(event)");
        div.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/fleche.png");

        divFleche.appendChild(div);

        
        const img = document.createElement("img");
        img.setAttribute("id", typeElem);
        img.setAttribute("class", "caree");
        img.setAttribute("draggable", "false");
        img.setAttribute("src", "assets/img/bpm logo/"+pathImgId+".png");
        img.setAttribute("src", document.getElementById(imgId2).src);
        
        divFleche.appendChild(img);      
        // {{asset('assets/img/img.png')}}
        // =========================================================================================

        console.log("outils : "+outils);
        console.log("ssss : "+ssss);
        console.log("outils[outils.length-1] : "+outils[outils.length-1]);

    if(outils[outils.length] === undefined){
         ssss = "editK"+typeElem;
        console.log("coucou tool1");

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "1px black solid";
        divname1.style.display = "block";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

        
      }


    else
      {

        ssss = "editK"+typeElem;

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        console.log("ssss2 : "+ssss);
        console.log("editK outils2[outils.length-1] : editK"+outils[outils.length-1]);
        
        const ancienTool = document.getElementById("editK"+outils[outils.length-1]);
        ancienTool.style.display = "none";

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

               
                        }
                        $('#nameTxt'+typeElem).text(data3[k].nameStop)
                        $('#lbl'+typeElem).text(data3[k].nameStop); 
                          

              
                    const textzaz = document.getElementById(typeElem);
                    // textzaz.addEventListener("onload", startF(event));
              
                    const fleche = document.getElementById(flecheId);
                    
                    readyToDrag = false;
                    typeElem = textC;
              
                    console.log("typeElem init : "+typeElem);
              
                    toolsSave = typeElem;
                    tools.push(toolsSave);
                    outilsSave = typeElem;
                    outils.push(outilsSave);
              
                      }
                    }
                },
                error : function(xhr, textStatus, errorThrown) {  
                  alert("error ajax");  
                  $('#outputContent').append("<li> Erreur ajax au stop event </li>");
                }  
            });

            $.ajax({  
              url:        '/task/get/'+data2[i].idLane+'',  
              type:       'GET',  
              // data :  {
              //   orgId : '1',
              //   namePool : 'zareo',
              // }, 
              dataType:   'json', 
              async:      true, 
              success: function(data3, status) { 
                
                situationSave = "succces";
          situation.push(situationSave);

                if (data3.length != 0) {
                  console.log(data3.length);
                $('#outputContent').append("<li> Chargement de task avec succés </li>");

                for (let k = 0; k < data3.length; k++) {
                          
                          
                        
                  var imgId2 = data3[k].typeTask;
                  console.log("data3["+k+"].leftTask = "+data3[k].leftTask);
                  console.log("data3["+k+"].topTask = "+data3[k].topTask);
                  if(imgId2 === "abstract_task" || imgId2 === "human" || imgId2 === "receive_task" || imgId2 === "script_task" || imgId2 === "send_task" 
                  || imgId2 === "service_task" || imgId2 === "Call_activity" || imgId2 === "Event_subprocess"){
                    pathImgId = "tasks/"+imgId2;
            
                    j=j+1
                    typeElem = imgId2+""+j;
                  }
                  
                  outilsName.push(data3[k].nameTask)
            
                  textC = typeElem;
            
                  const str = typeElem;
                  posiElemX = typeElem+"_"+data3[k].leftTask;
                  posiElemY = typeElem+"_"+data3[k].topTask;

                  positArrayX.push(posiElemX);
                  positArrayY.push(posiElemY);
                  console.log("first typeElem : "+typeElem)
            
                  ii = ii + 1;
            
                  flecheId = "fleche"+ii;
                  
                  const divDrag = document.createElement("div");
      divDrag.setAttribute("id", typeElem);
      divDrag.setAttribute("onmousemove", "startF(event, 'savedData')");
      divDrag.setAttribute("onmousedown", "editKqueFuncTools(event)")

      const elem = document.getElementById("div1");

      elem.appendChild(divDrag);

      // console.log("drawActivity event.pageX : "+event.pageX);
      // console.log("drawActivity event.pageY : "+event.pageY);

      var elemX = elem.getBoundingClientRect().x;
      var elemY = elem.getBoundingClientRect().y;
      console.log("elemX : "+elemX);
      console.log("elemY : "+elemY);
      console.log("data3["+k+"].leftTask : "+data3[k].leftTask);
      console.log("data3["+k+"].topTask : "+data3[k].topTask);

      const divFleche = document.getElementById(typeElem);
      divFleche.style.position = "absolute";
      // divFleche.style.backgroundColor = "white";
      
      divFleche.style.left = data3[k].leftTask +"px";
      divFleche.style.top = data3[k].topTask +"px";

      if (imgId2 === "AND" || imgId2 === "inclusive" || imgId2 === "XOR" || imgId2 === "start_message" 
      || imgId2 === "start_signal" || imgId2 === "start_timer" || imgId2 === "startnow" || imgId2 === "catch_link" 
      || imgId2 === "catch_message" || imgId2 === "catch_signal" || imgId2 === "throw_link" || imgId2 === "throw_message" 
      || imgId2 === "throw_signal" || imgId2 === "timer" || imgId2 === "end_error" || imgId2 === "end_message" 
      || imgId2 === "end_signal" || imgId2 === "endnow" || imgId2 === "terminate_end_event" ) {
        
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";

      }else if(imgId2 === "abstract_task" || imgId2 === "human" || imgId2 === "receive_task" || imgId2 === "script_task" 
      || imgId2 === "send_task" || imgId2 === "service_task" || imgId2 === "Call_activity" || imgId2 === "Event_subprocess")
      {
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";
      }

      const nameTypeElem = document.createElement("div");
      nameTypeElem.setAttribute("id", "lbl"+typeElem);
      divFleche.appendChild(nameTypeElem);

      const lblStyle = document.getElementById("lbl"+typeElem);
      lblStyle.style.fontSize = "10px";
      // divFleche.style.display = "none";

      

      const div = document.createElement("img");
        div.setAttribute("id", flecheId);

        
        
        div.setAttribute("draggable", "false");
        div.setAttribute("onmousedown", "funcFlecheInit(event)");
        // div.setAttribute("onmouseleave", "leaveFlec(event)");
        div.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/fleche.png");

        divFleche.appendChild(div);

        
        const img = document.createElement("img");
        img.setAttribute("id", typeElem);
        img.setAttribute("class", "rectangleee");
        img.setAttribute("draggable", "false");
        img.setAttribute("src", "assets/img/bpm logo/"+pathImgId+".png");
        img.setAttribute("src", document.getElementById(imgId2).src);
        
        divFleche.appendChild(img);      
        // {{asset('assets/img/img.png')}}
        // =========================================================================================

        console.log("outils : "+outils);
        console.log("ssss : "+ssss);
        console.log("outils[outils.length-1] : "+outils[outils.length-1]);

    if(outils[outils.length] === undefined){
         ssss = "editK"+typeElem;
        console.log("coucou tool1");

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "1px black solid";
        divname1.style.display = "block";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

        
      }


    else
      {

        ssss = "editK"+typeElem;

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        console.log("ssss2 : "+ssss);
        console.log("editK outils2[outils.length-1] : editK"+outils[outils.length-1]);
        
        const ancienTool = document.getElementById("editK"+outils[outils.length-1]);
        ancienTool.style.display = "none";

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

       

            }
                      $('#nameTxt'+typeElem).text(data3[k].nameTask)
                      $('#lbl'+typeElem).text(data3[k].nameTask); 
              
                      outilsName.push(outilsNameSave);
            
                  const textzaz = document.getElementById(typeElem);
                  // textzaz.addEventListener("onload", startF(event));
            
                  const fleche = document.getElementById(flecheId);
                  
                  readyToDrag = false;
                  typeElem = textC;
            
                  console.log("typeElem init : "+typeElem);
            
                  toolsSave = typeElem;
                  tools.push(toolsSave);
                  outilsSave = typeElem;
                  outils.push(outilsSave);
            
                    }
                  }
                  
              },
              error : function(xhr, textStatus, errorThrown) { 
                situationSave = "error";
          situation.push(situationSave); 
                alert("error ajax"); 
                $('#outputContent').append("<li> Erreur ajax au Task </li>"); 
              }  
          });


          

                    }
                  }
                },  
                error : function(xhr, textStatus, errorThrown) {  
                  situationSave = "error";
          situation.push(situationSave); 
                  alert("error ajax");  
                  $('#outputContent').append("<li> Erreur ajax au Lane </li>");
                }  
            });
              
            }
          }
          
          },  
          error : function(xhr, textStatus, errorThrown) { 
            situationSave = "error";
          situation.push(situationSave);  
            alert("error ajax");
            $('#outputContent').append("<li> Erreur ajax au pool </li>");  
          }  
      });

      
      // else {
        
      // }
    }




// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================


      



  


  function moveDrag(event) {
    
    var pathImgId = null;
    
    const elem = document.getElementById("div1");

    if(imgId === "pool" ){

      poolHeightSave = 300;
      longPoolContenu = 300;
      poolWidthSave = 800;
      poolActioSave = 220;
      
      iPool = iPool + 1;
      poolId = "pool"+iPool;

      outilsSave = poolId;

      poolSave.push(poolId);
      outils.push(outilsSave);

      
      // toolsSave = poolId;
      // typeElem = poolId
      console.log("poolId : "+poolId);
      const divpool = document.createElement("div");
        divpool.setAttribute("id", poolId);
        divpool.setAttribute("onmousedown", "editKqueFuncPool(event)");

        elem.appendChild(divpool);

        const poolStyle = document.getElementById(poolId);

        poolStyle.style.width = poolWidthSave+"px";
        poolStyle.style.height = poolHeightSave+"px";
        poolStyle.style.display = "flex";
        poolStyle.style.border = "solid 1px grey";
        // poolStyle.style.backgroundColor = "green";

        const divPooName = document.createElement("div");
        divPooName.setAttribute("id", "namepool"+poolId);
        divPooName.setAttribute("onmousedown", "editKqueFuncPool(event)");
        // divPooName.setAttribute("value", "text");

        const poolElem = document.getElementById(poolId);
        poolElem.appendChild(divPooName);

          const poolNameStyle = document.getElementById("namepool"+poolId);
          poolNameStyle.style.position = "relative";
          poolNameStyle.style.width = "60px";
          poolNameStyle.style.height = longPoolContenu+"px";
          poolNameStyle.style.border = "solid 1px grey";
          poolNameStyle.style.writingMode = "vertical-rl";
          poolNameStyle.style.transform = "rotate(180deg)";
          poolNameStyle.style.textAlign = "center";
          poolNameStyle.style.fontSize = "40px";
          poolNameStyle.style.color = "white";
          poolNameStyle.style.backgroundColor = "rgba(23, 71, 229, 0.757)";

          const divPooName2 = document.createElement("div");
          divPooName2.setAttribute("id", ("contenupool"+iPool));
          divPooName2.setAttribute("onmousedown", "editKqueFuncPool(event)");

          const poolElem2 = document.getElementById(poolId);
          poolElem2.appendChild(divPooName2);

          const poolNameStyle2 = document.getElementById(("contenupool"+iPool));
          poolNameStyle2.style.position = "relative";
          poolNameStyle2.style.width = "750px";
          poolNameStyle2.style.height = longPoolContenu+"px";
          poolNameStyle2.style.border = "solid 1px grey";


          

          const atioName = document.createElement("div");
          atioName.setAttribute("id", ("actioPool"+iPool));

          const actioElem = document.getElementById("contenupool"+iPool);
          actioElem.appendChild(atioName);

          const actioPoolStyle = document.getElementById(("actioPool"+iPool));
          actioPoolStyle.style.position = "absolute";
          actioPoolStyle.style.top = poolActioSave+"px";
          actioPoolStyle.style.left = "-40px";
          actioPoolStyle.style.width = "30px";



// =================================================================================

const plusName = document.createElement("img");
plusName.setAttribute("id", ("poolplus"+iPool));
plusName.setAttribute("draggable", "false");
plusName.setAttribute("class", "action");
plusName.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/plus2.png");
const plusElem = document.getElementById("actioPool"+iPool);
plusElem.appendChild(plusName);


const poolPlusStyle = document.getElementById("poolplus"+iPool);
poolPlusStyle.setAttribute("onclick", "plusFunc(event)");
// poolPlusStyle.style.border = "solid 2px black";
poolPlusStyle.style.color = "black";


const moinsName = document.createElement("img");
moinsName.setAttribute("id", ("poolmoins"+iPool));
moinsName.setAttribute("draggable", "false");
moinsName.setAttribute("class", "action");
moinsName.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/moins2.png");
const moinsElem = document.getElementById("actioPool"+iPool);
moinsElem.appendChild(moinsName);
          const textmoins = document.createTextNode("moins");
          moinsName.appendChild(textmoins);
          const poolMoinsStyle = document.getElementById("poolmoins"+iPool);
          poolMoinsStyle.setAttribute("onclick", "moinsFunc(event)")


// ===============================================================================


        ppp = "editK"+poolId;
        console.log("outils.length = "+outils.length)
        if (outils.length!= 0) {
          for (let j = 0; j < outils.length-1; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ppp);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ppp);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        // divname1.style.height = "120px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+poolId);
        divname1.appendChild(labelName);

        

        const divname2 = document.getElementById("lblNameId"+poolId);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+poolId);

        divname2.appendChild(inputName); 

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecriId"+poolId);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecriId"+poolId);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+poolId);

        divDecri.appendChild(inputDecr); 

        

        const btnNamePool = document.createElement("div");
        btnNamePool.setAttribute("id", "namePoolSave"+poolId);
        btnNamePool.setAttribute("onclick", "setNamePool(event)");
        divEditK.appendChild(btnNamePool); 

        const nmPool = document.getElementById("namePoolSave"+poolId);
        const dd2 = document.createTextNode('SAVE POOL');
        nmPool.appendChild(dd2);

        nmPool.style.border = "none ";
        nmPool.style.margin = "15px";
        nmPool.style.color = "white"
        nmPool.style.padding = "2px";
        nmPool.style.textAlign = "center";
        nmPool.style.backgroundColor = "rgba(23, 71, 229, 0.757)"
        
        const namePool = document.getElementById("nameTxt"+poolId).value;

        // const poolNameModif= document.getElementById("namepool"+iPool).value = namePool;

        poolNameSave = namePool;

       
      // $('#namepool'+iPool).keyup(function (){
      //     $('#nameTxt'+poolId).val($(this).val()); // <-- and here
      // });

        // const divna = document.getElementById("namepool"+iPool);
        //   const d = document.createTextNode('Namehuhuhu : '+namePool);
        //   poolNameStyle2.innerHTML = "Namehuhuhu"+namePool;

        // const lblName = document.getElementById("nameTxt"+poolId);
        // divnme1.setAttribute("value", )

           
              
              

          
          
    

    }
    
    // =====================================================================
    
    else if(imgId === "lane"){
      
    var IdEvPoo = event.target.id;
    var IdpoolL = IdEvPoo.slice(0, 4);

    
    
    if (IdpoolL === "cont") {
      laneHeightSave = 200;

      iLane = iLane + 1;
      laneId = "lane"+iLane;
      outilsSave = laneId;
      laneSave.push(laneId);
      outils.push(outilsSave);

      laneWidthSave = 745;
      // laneHeightSave = laneHeightSave;
      // typeElem = laneId;
      console.log("laneId event.target.id : "+event.target.id);
 

    const elemLane = document.getElementById(event.target.id);

      const divlane = document.createElement("div");
        divlane.setAttribute("id", laneId);
        divlane.setAttribute("onmousedown", "editKqueFuncLane(event)");
        // editKqueFuncLane

        elemLane.appendChild(divlane);

        const laneStyle = document.getElementById(laneId);

        laneStyle.style.position = "relative";
        laneStyle.style.top = "0px";
        laneStyle.style.left = "1px";
        laneStyle.style.width = laneWidthSave+"px";
        laneStyle.style.height = laneHeightSave+"px";
        laneStyle.style.border = "solid 1px grey";
        
        

        const divLaneName = document.createElement("div");
        divLaneName.setAttribute("id", "nameLane"+laneId);
        divLaneName.setAttribute("onmousedown", "editKqueFuncLane(event)");

        const laneElem = document.getElementById(laneId);
        laneElem.appendChild(divLaneName);

          const laneNameStyle = document.getElementById("nameLane"+laneId);
          laneNameStyle.style.width = "5%";
          laneNameStyle.style.height = "98.5%";
          laneNameStyle.style.border = "solid 1px grey";
          laneNameStyle.style.backgroundColor = "rgba(245, 10, 30, 0.615)";
          laneNameStyle.style.writingMode = "vertical-rl";
          laneNameStyle.style.transform = "rotate(180deg)";
          laneNameStyle.style.fontSize = "20px";
          laneNameStyle.style.textAlign = "center";
          laneNameStyle.style.color = "white";
    
// ================================================================================

          const actioLanePoolId = "actioLane"+iLane;
          const atioNameLane = document.createElement("div");
          atioNameLane.setAttribute("id", (actioLanePoolId));
          atioNameLane.setAttribute("onmousedown", "editKqueFuncLane(event)");

          const actioElemLane = document.getElementById(laneId);
          actioElemLane.appendChild(atioNameLane);

          const actioLaneStyle = document.getElementById((actioLanePoolId));
          actioLaneStyle.style.position = "absolute";
          actioLaneStyle.style.bottom = "10px";
          actioLaneStyle.style.left = "3px";
          actioLaneStyle.style.width = "30px";



          const plusNameLane = document.createElement("img");
          plusNameLane.setAttribute("id", ("lanePlus"+iLane));
          plusNameLane.setAttribute("draggable", "false");
          plusNameLane.setAttribute("class", "action");
          plusNameLane.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/plus1.png");
          plusNameLane.setAttribute("onmousedown", "editKqueFuncLane(event)");

          const plusElemLane = document.getElementById(actioLanePoolId);
          plusElemLane.appendChild(plusNameLane);
          

          const lanePlusStyle = document.getElementById("lanePlus"+iLane);
          lanePlusStyle.setAttribute("onclick", "plusLaneFunc(event)");
          lanePlusStyle.style.color = "black";

          const moinsNameLane = document.createElement("img");
          moinsNameLane.setAttribute("id", ("laneMoins"+iLane));
          moinsNameLane.setAttribute("draggable", "false");
          moinsNameLane.setAttribute("class", "action");
          moinsNameLane.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/moins1.png");
          
          moinsNameLane.setAttribute("onmousedown", "editKqueFuncLane(event)");

          const moinsElemLane = document.getElementById(actioLanePoolId);
          moinsElemLane.appendChild(moinsNameLane);
         
          const laneMoinsStyle = document.getElementById("laneMoins"+iLane);
          laneMoinsStyle.setAttribute("onclick", "moinsLaneFunc(event)")

  // ====================================================================================

  var sss = null;
          sss = "editK"+laneId;
        console.log("outils.length = "+outils.length)
        if (outils.length!= 0) {
          for (let j = 0; j < outils.length-1; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", sss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(sss);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        // divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+laneId);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+laneId);
        const dd = document.createTextNode('Name Lane: ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+laneId);

        divname2.appendChild(inputName); 

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrLaneiId"+laneId);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrLaneiId"+laneId);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+laneId);

        divDecri.appendChild(inputDecr); 

        const btnNameLane = document.createElement("div");
        btnNameLane.setAttribute("id", "nameLaneSave"+laneId);
        btnNameLane.setAttribute("onclick", "setNameLane()");
        divname1.appendChild(btnNameLane); 

        const nmLane = document.getElementById("nameLaneSave"+laneId);
        nmLane.style.border = "none ";
        nmLane.style.margin = "15px";
        nmLane.style.color = "white"
        nmLane.style.padding = "2px";
        nmLane.style.textAlign = "center";
        nmLane.style.backgroundColor = "rgba(245, 10, 30, 0.615)"
        const dd2 = document.createTextNode('SAVE LANE');
        nmLane.appendChild(dd2);
        
        
        const nameLane = document.getElementById("nameTxt"+laneId).value;


        // const poolNameModif= document.getElementById("namepool"+iPool).value = namePool;

        laneNameSave = nameLane;

        

    }
   

    }else{

      if (imgId === "AND" || imgId === "inclusive" || imgId === "XOR") {
        pathImgId = "gateways/"+imgId;

        i=i+1
        typeElem = imgId+""+i;
      }
      
      else if(imgId === "abstract_task" || imgId === "human" || imgId === "receive_task" || imgId === "script_task" || imgId === "send_task" || imgId === "service_task"){
        pathImgId = "tasks/"+imgId;

        j=j+1
        typeElem = imgId+""+j;
      }
      else if(imgId === "Call_activity" || imgId === "Event_subprocess" ){
        pathImgId = "activities/"+imgId;

        k=k+1
        typeElem = imgId+""+k;

        console.log("k : "+k);
      }
      else if(imgId === "start_message" || imgId === "start_signal" || imgId === "start_timer" || imgId === "startnow" ){
        pathImgId = "start events/"+imgId;

        l=l+1
        typeElem = imgId+""+l;
      }
      else if(imgId === "catch_link" || imgId === "catch_message" || imgId === "catch_signal" || imgId === "throw_link" || imgId === "throw_message" || imgId === "throw_signal" || imgId === "timer"){
        pathImgId = "int events/"+imgId;

        m=m+1
        typeElem = imgId+""+m;
      }
      else if(imgId === "end_error" || imgId === "end_message" || imgId === "end_signal" || imgId === "endnow" || imgId === "terminate_end_event" ){
        pathImgId = "end events/"+imgId;

        n=n+1
        typeElem = imgId+""+n;
      }

      textC = typeElem;

      const str = typeElem;

      // flecheId = "fleche"+str.slice(4, str.length);

      ii = ii + 1;

      flecheId = "fleche"+ii;
      
      drawActivity(event, imgId, pathImgId)

    // console.log(event.pageX);
      // document.body.append(divFleche);


      // textB.onmousedown = startF(event);
      const textzaz = document.getElementById(typeElem);
      textzaz.addEventListener("mouseup", startF(event));

      // const texzaz = document.getElementById(flecheId);
      // texzaz.addEventListener("onmousemove", funcFlecheInit(event));

      // textB.onclick = develop(event);

      const fleche = document.getElementById(flecheId);
      // fleche.onclick = funcFleche(event);
      
      readyToDrag = false;
      typeElem = textC;

      console.log("typeElem init : "+typeElem);

      toolsSave = typeElem;
      tools.push(toolsSave);
      outilsSave = typeElem;
      outils.push(outilsSave);

      imgIdArr.push(imgId);
    }

    
    
  }

function setNamePool(event){
  
    poolName.length = 0;    

    for (let j = 0; j < outils.length; j++) {
      if ($('#namepool'+outils[j]).text() != 0) {
        poolName.push($('#namepool'+outils[j]).text());
        $('#outputContent').append("<li> Insertion de "+$('#namepool'+outils[j]).text()+" dans pool </li>"); 
      }
      
    }
 
  console.log("poolName : "+poolName);
}



function setNameLane(){

  laneName.length = 0;    

  for (let j = 0; j < outils.length; j++) {
    if ($('#nameLane'+outils[j]).text() != 0) {
      laneName.push($('#nameLane'+outils[j]).text());
      $('#outputContent').append("<li> Insertion de "+$('#nameLane'+outils[j]).text()+" dans lane </li>"); 
    }
    
        
  }

console.log("laneName : "+laneName);

  // laneName.push(laneNameSave);
  // console.log("laneName : "+laneName)
}

  var ssss = null;

function drawActivity(event, imgId, pathImgId) {

    var valIdPlus = event.target.id;
    const sliceEvLane = (valIdPlus).slice(0, 4);
    const valSliceSwim= (valIdPlus).slice(8, valIdPlus.length);      

    
    if (sliceEvLane === "lane") {
      
      const divDrag = document.createElement("div");
      divDrag.setAttribute("id", typeElem);
      divDrag.setAttribute("onmousemove", "startF(event, 'tag')");
      divDrag.setAttribute("onmousedown", "editKqueFuncTools(event)")

      const elem = document.getElementById("div1");

      elem.appendChild(divDrag);

      console.log("drawActivity event.pageX : "+event.pageX);
      console.log("drawActivity event.pageY : "+event.pageY);

      var elemX = elem.getBoundingClientRect().x;
      var elemY = elem.getBoundingClientRect().y;
      console.log("elemX : "+elemX);
      console.log("elemY : "+elemY);

      const divFleche = document.getElementById(typeElem);
      divFleche.style.position = "absolute";
      // divFleche.style.backgroundColor = "white";
      // divFleche.style.left = event.clientX - 2*elemX+"px";
      // divFleche.style.top = event.clientY - elemY +"px";

      if (imgId === "AND" || imgId === "inclusive" || imgId === "XOR" || imgId === "start_message" || imgId === "start_signal" || imgId === "start_timer" || imgId === "startnow" || imgId === "catch_link" || imgId === "catch_message" || imgId === "catch_signal" || imgId === "throw_link" || imgId === "throw_message" || imgId === "throw_signal" || imgId === "timer" || imgId === "end_error" || imgId === "end_message" || imgId === "end_signal" || imgId === "endnow" || imgId === "terminate_end_event" ) {
        
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";

      }else if(imgId === "abstract_task" || imgId === "human" || imgId === "receive_task" || imgId === "script_task" || imgId === "send_task" || imgId === "service_task" || imgId === "Call_activity" || imgId === "Event_subprocess")
      {
        divFleche.style.width = "auto";
        divFleche.style.height = "auto";
        divFleche.style.border = "white 2px solid";
        divFleche.style.backgroundColor = "white";
        divFleche.style.padding = "2px";
      }

      const nameTypeElem = document.createElement("div");
      nameTypeElem.setAttribute("id", "lbl"+typeElem);
      divFleche.appendChild(nameTypeElem);

      const lblStyle = document.getElementById("lbl"+typeElem);
      lblStyle.style.fontSize = "10px";
      // divFleche.style.display = "none";

      

      const div = document.createElement("img");
        div.setAttribute("id", flecheId);
        div.setAttribute("draggable", "false");
        div.setAttribute("onmousedown", "funcFlecheInit(event)");
        // div.setAttribute("onmouseleave", "leaveFlec(event)");
        div.setAttribute("src", "https://127.0.0.1:8000/assets/img/bpm%20logo/fleche.png");

        divFleche.appendChild(div);

        
        const img = document.createElement("img");
        img.setAttribute("id", typeElem);

        if (imgId === "AND" || imgId === "inclusive" || imgId === "XOR" || imgId === "start_message" 
        || imgId === "start_signal" || imgId === "start_timer" || imgId === "startnow" || imgId === "catch_link" 
        || imgId === "catch_message" || imgId === "catch_signal" || imgId === "throw_link" || imgId === "throw_message" 
        || imgId === "throw_signal" || imgId === "timer" || imgId === "end_error" || imgId === "end_message" 
        || imgId === "end_signal" || imgId === "endnow" || imgId === "terminate_end_event") {
          
          img.setAttribute("class", "caree");

        }else if(imgId === "abstract_task" || imgId === "human" || imgId === "receive_task" || imgId === "script_task" 
        || imgId === "send_task" || imgId === "service_task" || imgId === "Call_activity" || imgId === "Event_subprocess")
        {
          img.setAttribute("class", "rectangleee");
        }

        img.setAttribute("draggable", "false");
        img.setAttribute("src", "assets/img/bpm logo/"+pathImgId+".png");
        img.setAttribute("src", document.getElementById(imgId).src);
        
        divFleche.appendChild(img);      
        // {{asset('assets/img/img.png')}}
        // =========================================================================================

        console.log("outils : "+outils);
        console.log("ssss : "+ssss);
        console.log("outils[outils.length-1] : "+outils[outils.length-1]);

    if(outils[outils.length] === undefined){
         ssss = "editK"+typeElem;
        console.log("coucou tool1");

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        divname1.style.display = "block";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const labelDescri = document.createElement("label");
        labelDescri.setAttribute("id", "lblDecrOutilsId"+typeElem);
        divname1.appendChild(labelDescri);

        const divDecri = document.getElementById("lblDecrOutilsId"+typeElem);
        const desc = document.createTextNode('Description : ');
        divDecri.appendChild(desc);

        const inputDecr = document.createElement("input");
        inputDecr.setAttribute("type", "text");
        inputDecr.setAttribute("id", "nameDecri"+typeElem);

        divDecri.appendChild(inputDecr); 

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

        
      }


    else
      {

        ssss = "editK"+typeElem;

        if (outils.length!= 0) {
          for (let j = 0; j < outils.length; j++) {
            const d = document.getElementById("editK"+outils[j]);
            d.style.display = "none";            
          }
        }


        console.log("ssss2 : "+ssss);
        console.log("editK outils2[outils.length-1] : editK"+outils[outils.length-1]);
        
        const ancienTool = document.getElementById("editK"+outils[outils.length-1]);
        ancienTool.style.display = "none";

        const getEditKque = document.getElementById("editKque");
        const divEditK = document.createElement("div");
        divEditK.setAttribute("id", ssss);
        

        getEditKque.appendChild(divEditK);

        const divname1 = document.getElementById(ssss);
        divname1.style.display = "block";
        divname1.style.width = "200px";
        divname1.style.height = "50px";
        divname1.style.border = "2px black solid";

        const labelName = document.createElement("label");
        labelName.setAttribute("id", "lblNameId"+typeElem);
        divname1.appendChild(labelName);

        const divname2 = document.getElementById("lblNameId"+typeElem);
        const dd = document.createTextNode('Name : ');
        divname2.appendChild(dd);

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "nameTxt"+typeElem);

        divname2.appendChild(inputName);

        const btnNameOutils = document.createElement("div");
        btnNameOutils.setAttribute("id", "nameOutilsSave"+typeElem);
        btnNameOutils.setAttribute("onclick", "setNameOutils()");
        divname1.appendChild(btnNameOutils); 

        const nmTools = document.getElementById("nameOutilsSave"+typeElem);
        nmTools.style.border = "none ";
        nmTools.style.margin = "15px";
        nmTools.style.color = "white"
        nmTools.style.padding = "2px";
        nmTools.style.textAlign = "center";
        nmTools.style.backgroundColor = "rgba(17, 252, 9, 0.948)"
        const dd2 = document.createTextNode('SAVE TOOLS');
        nmTools.appendChild(dd2);
        
        
        const nameLane = document.getElementById("nameTxt"+typeElem).value;

        



      }

      
        


    }
    
  }

  function setNameOutils(){
    outilsName.push(outilsNameSave);
    $('#outputContent').append("<li> Insertion dans outils </li>"); 
  }




  function plusFunc(e){
    const evPool = "poolplus";
    var valIdPlus = e.target.id;
    const sliceEvPool = (valIdPlus).slice(0, 4);
    const valSlicePool= (valIdPlus).slice(8, valIdPlus.length);

    

    console.log("valSlicePool e.target.id : "+valIdPlus)
    console.log("valSlicePool : "+valSlicePool)

    var idPlusPool = "poolplus"+valSlicePool;
    var idAction = "actioPool"+valSlicePool;
    const contPool = document.getElementById(("contenupool"+valSlicePool));
    const poolNameStyle = document.getElementById(("namepoolpool"+valSlicePool));
    const plusPool = document.getElementById(idPlusPool);
    const Pool = document.getElementById("pool"+valSlicePool);
    const elemAction = document.getElementById(idAction);

    console.log("idAction : "+idAction)
    poolHeightSave = poolHeightSave + 50;
    poolActioSave = poolActioSave + 50;
    longPoolContenu = longPoolContenu + 50;
    Pool.style.height = poolHeightSave+"px";
    elemAction.style.top = poolActioSave+"px";
    contPool.style.height = longPoolContenu+"px";
    poolNameStyle.style.height = longPoolContenu+"px";
  }

  
  

  function moinsFunc(e){
    const evPool = "pool";
    var valIdMoins = e.target.id;
    const sliceEvPool = valIdMoins.slice(0, 4);
    const valSlicePool= valIdMoins.slice(9, valIdMoins.length);
    console.log("valIdMoins : "+valIdMoins)

    var idMoinsPool = "poolmoins"+valSlicePool;
    var idAction = "actioPool"+valSlicePool;
    const moinsPool = document.getElementById(idMoinsPool);
    const contPool = document.getElementById(("contenupool"+valSlicePool));
    const poolNameStyle = document.getElementById(("namepoolpool"+valSlicePool));
    const Pool = document.getElementById("pool"+valSlicePool);
    const elemAction = document.getElementById(idAction);

    poolHeightSave = poolHeightSave - 50;
    longPoolContenu = longPoolContenu - 50;
    poolActioSave = poolActioSave - 50;
    Pool.style.height = poolHeightSave+"px";
    elemAction.style.top = poolActioSave+"px";
    contPool.style.height = longPoolContenu+"px";
    poolNameStyle.style.height = longPoolContenu+"px";
  }

  // ========================================================================================

  function plusLaneFunc(e){

    const evLane = "lanePlus";
    const valIdPlus = e.target.id;
    const sliceEvLane = (valIdPlus).slice(0, 4);
    const valSliceLane= (valIdPlus).slice(8, valIdPlus.length);

    console.log("valIdPlus : "+valIdPlus)
    console.log("valSliceLane : "+valSliceLane)

    var IdLaneMod = "lane"+valSliceLane;
    var idPlusLane = "lanePlus"+valSliceLane;
    var idActionLane = "actioLane"+valSliceLane;
    const plusLane = document.getElementById(idPlusLane);
    const Lane = document.getElementById(IdLaneMod);
    const elemAction = document.getElementById(idActionLane);

    laneHeightSave = laneHeightSave + 50;
    Lane.style.height = laneHeightSave+"px";
    // elemAction.style.top = laneHeightSave+"px";
  }

  
  

  function moinsLaneFunc(e){
    const evLane = "laneMoins";
    const valIdMoins = e.target.id;
    const sliceEvLane = (valIdMoins).slice(0, 4);
    const valSliceLane= (valIdMoins).slice(9, valIdMoins.length);

    var idMoinsLane = "moinsLane"+valSliceLane;
    var idActionLane = "actioLane"+valSliceLane;
    var IdLaneMod = "lane"+valSliceLane;
    const moinsLane = document.getElementById(idMoinsLane);
    const Lane = document.getElementById(IdLaneMod);
    const elemAction = document.getElementById(idActionLane);

    laneHeightSave = laneHeightSave - 50;
    Lane.style.height = laneHeightSave+"px";
    // elemAction.style.top = laneHeightSave+"px";
  }
    

  // ========================================================================================

      

  function stopF(){

    // console.log("this function stop moove");

  }
  
  var flecheInitX = 0;
  var flecheInitY = 0;
  var flecheEndX = 0;
  var flecheEndY = 0;

  // ========================================================================================

  
var val = "";

var mouseUp = false;
var xvalInit = 0;  
var yvalInit = 0;  
var xvalEnd = 0;  
var yvalEnd = 0;  
var changeColor = false;

var ligne = [];
var ligneEx = "lineEx";

var tagIdDown = null

  function funcFlecheInit(eve) {
    
    ja = ligne.length ;
    if (valFlecheSave !== 0) {
      
      vI = valFlecheSave;
    } else {
      
      vI = 0;
    }
    
    vI = vI + ja;

    ligne.push("ligne"+vI);
    ligneEx = "ligneEx"+ja;

    typeElem = textC
    const textzaz = document.getElementById(textC);
    // console.log("eve.target.id : "+eve.target.id);

    tagIdDown = eve.target.id;
    // textzaz.removeEventListener("mouseup", startF(event, textB));
    // textzaz.setAttribute("onmousemove", "stopF(event, 'aa')");
    
    const movePlace = document.getElementById("div1");


    var tagIdLeave = null;
    var tagIdUp = null;
    var valTag = null;
    var valTagUp = 0;
 
    document.onmousemove = function mouseMovee(ev){

      // ----------------------------------------------------------------

      console.log("ligne["+ja+"] : "+ligne[ja])
          const div = document.createElement("div");
            div.setAttribute("id", ligne[ja]);

          const element1 = document.getElementById("div1");
            element1.appendChild(div);
      
            const lineStyle = document.getElementById(ligne[ja]);
      
            lineStyle.style.backgroundColor = "grey";
            lineStyle.style.position = "absolute";
            lineStyle.style.height = "1px";

            // console.log("lineStyle : "+lineStyle);

        // ------------------------------------------------------------------
            // console.log("ligneEx : "+ligneEx);

          const div2 = document.createElement("div");
            div2.setAttribute("id", ligneEx);

          const element2 = document.getElementById("plane");
            element2.appendChild(div2);
      
            const lineStyle2 = document.getElementById(ligneEx);

            // console.log("lineStyle2 : "+lineStyle2);
      
            lineStyle2.style.backgroundColor = "red";
            lineStyle2.style.position = "absolute";
            lineStyle2.style.height = "1px";
            
        // ------------------------------------------------------------------    
            // console.log(e.pageX);

          // if (e.pageX != 0 || e.pageY != 0) {
            
          // }
          

          typeElem = textC;
            val = ev.target.id;
            // console.log("idd val = "+val);
        
            // const vTextB = document.getElementById(textB);
            // console.log("textB : "+textB);

            const sliTextB = typeElem.slice(0, 4);
            const slicFleche = flecheId.slice(0, 4);
            const sliceEvFlech = (ev.target.id).slice(0, 4);

            var str0 = sliceEvFlech.slice(0, 4);
                var valTgUp0 = 0;
                var tgIDuP0 = null;
                if(str0 === "flec"){
                  valTgUp0 = sliceEvFlech.slice(6, sliceEvFlech.length);
                }else{
                  valTgUp0 = sliceEvFlech.slice(4, sliceEvFlech.length); 
                }

                tgIDuP0 = "text"+valTgUp0; 

            // console.log("sliTextB : "+sliTextB);
            // console.log("sliceEvFlech : "+sliceEvFlech);

            const rer = document.getElementById(ev.target.id);

            
            if(sliceEvFlech === sliTextB){
              xvalInit = ev.pageX;
              yvalInit = ev.pageY;
            } 
            
      // if(sliceEvFlech === sliTextB){
          // rer.addEventListener("mousedown", rerMouseDown(e));
        
        rer.onmouseleave = function rerMouseDown(e){
          mouseUp = false;
          // console.log("ja : "+ja);

          
          if(ev.pageX != 0 || ev.pageY != 0){
            const ordTexB = document.getElementById(ev.target.id);
            tagIdLeave = ev.target.id;

            // const tagIdLeave2 = e.target.id;

            // console.log("tagIdLeave = "+tagIdLeave);
            // console.log("tagIdDown = "+tagIdDown);

            const elems = document.getElementById("div1");

            var elexXs = elems.getBoundingClientRect().x;
            var eleyYs = elems.getBoundingClientRect().y;
            

            if (tagIdLeave === tagIdDown) {
              xInit.push(ev.clientX - elexXs) ;
              yInit.push(ev.clientY - eleyYs) ;

              var str0 = tagIdLeave.slice(0, 3);
                var valTgLeave = 0;
                var tgIDLeave = null;
                // console.log("str0 : "+str0);
                if(str0 === "fle"){
                  console.log("cooouucoou1")
                  valTag = tagIdLeave.slice(0, 6);
                  valTgUp0 = tagIdLeave.slice(6, tagIdLeave.length);
                }else if(str0 === "AND"){
                  console.log("cooouucoou2")
                  valTag = tagIdLeave.slice(0, 3);
                  valTgUp0 = tagIdLeave.slice(3, tagIdLeave.length);
                }else if(str0 === "inc"){
                  console.log("cooouucoou3")
                  valTag = tagIdLeave.slice(0, 9);
                  valTgUp0 = tagIdLeave.slice(9, tagIdLeave.length);
                }else if(str0 === "XOR"){
                  console.log("cooouucoou4")
                  valTag = tagIdLeave.slice(0, 3);
                  valTgUp0 = tagIdLeave.slice(3, tagIdLeave.length);
                }else if(str0 === "abs"){
                  console.log("cooouucoou5")
                  valTag = tagIdLeave.slice(0, 13);
                  valTgUp0 = tagIdLeave.slice(13, tagIdLeave.length);
                }else if(str0 === "hum"){
                  console.log("cooouucoou6")
                  valTag = tagIdLeave.slice(0, 5);
                  valTgUp0 = tagIdLeave.slice(5, tagIdLeave.length);
                }else if(str0 === "rec"){
                  console.log("cooouucoou7")
                  valTag = tagIdLeave.slice(0, 12);
                  valTgUp0 = tagIdLeave.slice(12, tagIdLeave.length);
                }else if(str0 === "scr"){
                  console.log("cooouucoou8")
                  valTag = tagIdLeave.slice(0, 11);
                  valTgUp0 = tagIdLeave.slice(11, tagIdLeave.length);
                }else if(str0 === "sen"){
                  console.log("cooouucoou9")
                  valTag = tagIdLeave.slice(0, 9);
                  valTgUp0 = tagIdLeave.slice(9, tagIdLeave.length);
                }else if(str0 === "ser"){
                  console.log("cooouucoou10")
                  valTag = tagIdLeave.slice(0, 12);
                  valTgUp0 = tagIdLeave.slice(12, tagIdLeave.length);
                }else if(str0 === "cal"){
                  console.log("cooouucoou11")
                  valTag = tagIdLeave.slice(0, 13);
                  valTgUp0 = tagIdLeave.slice(13, tagIdLeave.length);
                }else if(str0 === "Eve"){
                  console.log("cooouucoou12")
                  valTag = tagIdLeave.slice(0, 16);
                  valTgUp0 = tagIdLeave.slice(16, tagIdLeave.length);
                }else if(str0 === "sta"){
                  console.log("cooouucoou13")
                  valTag = tagIdLeave.slice(0, 8);
                  valTgUp0 = tagIdLeave.slice(8, tagIdLeave.length);
                  if(valTgUp0 === "start_me"){
                    console.log("cooouucoou14")
                    valTag = tagIdLeave.slice(0, 13);
                    valTgUp0 = tagIdLeave.slice(13, tagIdLeave.length);
                  }else if(valTgUp0 === "start_ti"){
                    console.log("cooouucoou15")
                    valTag = tagIdLeave.slice(0, 12);
                    valTgUp0 = tagIdLeave.slice(12, tagIdLeave.length);
                  }else if(valTgUp0 === "startnow"){
                    console.log("cooouucoou16")
                    valTag = tagIdLeave.slice(0, 8);
                    valTgUp0 = tagIdLeave.slice(8, tagIdLeave.length);
                  }

                }else if(str0 === "cat"){
                  valTgUp0 = tagIdLeave.slice(8, tagIdLeave.length);
                  if (valTgUp0 === "catch_li") {
                    console.log("cooouucoou17")
                    valTag = tagIdLeave.slice(0, 10);
                    valTgUp0 = tagIdLeave.slice(10, tagIdLeave.length);
                  }else if (valTgUp0 === "catch_me") {
                    console.log("cooouucoou18")
                    valTag = tagIdLeave.slice(0, 13);
                    valTgUp0 = tagIdLeave.slice(13, tagIdLeave.length);
                  }else if (valTgUp0 === "catch_si") {
                    console.log("cooouucoou19")
                    valTag = tagIdLeave.slice(0, 12);
                    valTgUp0 = tagIdLeave.slice(12, tagIdLeave.length);
                  }
                  
                }else if(str0 === "thr"){

                  valTgUp0 = tagIdLeave.slice(8, tagIdLeave.length);
                  if (valTgUp0 === "throw_li") {
                    console.log("cooouucoou20")
                    valTag = tagIdLeave.slice(0, 10);
                    valTgUp0 = tagIdLeave.slice(10, tagIdLeave.length);
                  }else if (valTgUp0 === "throw_me") {
                    console.log("cooouucoou21")
                    valTag = tagIdLeave.slice(0, 13);
                    valTgUp0 = tagIdLeave.slice(13, tagIdLeave.length);
                  }else if (valTgUp0 === "throw_si") {
                    console.log("cooouucoou22")
                    valTag = tagIdLeave.slice(0, 12);
                    valTgUp0 = tagIdLeave.slice(12, tagIdLeave.length);
                  }
                  
                }else if(str0 === "tim"){
                  console.log("cooouucoou23")
                  valTag = tagIdLeave.slice(0, 5);
                  valTgUp0 = tagIdLeave.slice(5, tagIdLeave.length);
                }else if(str0 === "end"){
                  
                  valTgUp0 = tagIdLeave.slice(6, tagIdLeave.length);
                  if (valTgUp0 === "end_er") {
                    console.log("cooouucoou24")
                    valTag = tagIdLeave.slice(0, 9);
                    valTgUp0 = tagIdLeave.slice(9, tagIdLeave.length);
                  }else if (valTgUp0 === "end_me") {
                    console.log("cooouucoou25")
                    valTag = tagIdLeave.slice(0, 11);
                    valTgUp0 = tagIdLeave.slice(11, tagIdLeave.length);
                  }else if (valTgUp0 === "end_si") {
                    console.log("cooouucoou26")
                    valTag = tagIdLeave.slice(0, 10);
                    valTgUp0 = tagIdLeave.slice(10, tagIdLeave.length);
                  }
                  else if (valTgUp0 === "endnow") {
                    console.log("cooouucoou27")
                    valTag = tagIdLeave.slice(0, 6);
                    valTgUp0 = tagIdLeave.slice(6, tagIdLeave.length);
                  }

                }else if(str0 === "ter"){
                  console.log("cooouucoou28")
                  valTag = tagIdLeave.slice(0, 19);
                  valTgUp0 = tagIdLeave.slice(19, tagIdLeave.length);
                }
                
                // else{
                //   valTgUp0 = tagIdLeave.slice(4, tagIdLeave.length); 
                // }

                tgIDLeave = valTag+""+valTgUp0;  

                console.log("tgIDLeave : "+tgIDLeave);
              initName.push(tgIDLeave)
              console.log("======== xInit before :"+xInit);

            }

            

            return;
          }
        
        }
            
        var valTgUp0 = null;
      
        // rer.addEventListener("mouseup", rerMouseUp(e))
    rer.onmouseup = function rerMouseUp(e){

          // const vTextB = document.getElementById(textB);

          var slTextB = null;

          const tagmouseIdUp = ev.target.id;

          

          const sliceEvFl = tagmouseIdUp.slice(0, 4);

          var str1 = tagmouseIdUp.slice(0, 3);
            var tgIDuP0 = null;
                // if(sliceEvFl === "flec"){
                //   valTgUp0 = "text";
                // }else if(sliceEvFl === "text"){
                //   valTgUp0 = "text";
                // }
                // else{
                //   valTgUp0 = "unidentify";
                // }

                if(str1 === "fle"){
                  console.log("Aaaaoooonnnaaa1");
                  valTgUp0 = tagmouseIdUp.slice(0, 6);
                  valTagUp = tagmouseIdUp.slice(6, tagmouseIdUp.length);
                }else if(str1 === "AND"){
                  console.log("Aaaaoooonnnaaa2");
                  valTgUp0 = tagmouseIdUp.slice(0, 3);
                  valTagUp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
                }else if(str1 === "inc"){
                  console.log("Aaaaoooonnnaaa3");
                  valTgUp0 = tagmouseIdUp.slice(0, 9);
                  valTagUp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                }else if(str1 === "XOR"){
                  console.log("Aaaaoooonnnaaa4");
                  valTgUp0 = tagmouseIdUp.slice(0, 3);
                  valTagUp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
                }else if(str1 === "abs"){
                  console.log("Aaaaoooonnnaaa5");
                  valTgUp0 = tagmouseIdUp.slice(0, 13);
                  valTagUp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                }else if(str1 === "hum"){
                  console.log("Aaaaoooonnnaaa6");
                  valTgUp0 = tagmouseIdUp.slice(0, 5);
                  valTagUp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
                }else if(str1 === "rec"){
                  console.log("Aaaaoooonnnaaa6");
                  valTgUp0 = tagmouseIdUp.slice(0, 12);
                  valTagUp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                }else if(str1 === "scr"){
                  console.log("Aaaaoooonnnaaa7");
                  valTgUp0 = tagmouseIdUp.slice(0, 11);
                  valTagUp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
                }else if(str1 === "sen"){
                  console.log("Aaaaoooonnnaaa8");
                  valTgUp0 = tagmouseIdUp.slice(0, 9);
                  valTagUp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                }else if(str1 === "ser"){
                  console.log("Aaaaoooonnnaaa9");
                  valTgUp0 = tagmouseIdUp.slice(0, 12);
                  valTagUp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                }else if(str1 === "cal"){
                  console.log("Aaaaoooonnnaaa10");
                  valTgUp0 = tagmouseIdUp.slice(0, 13);
                  valTagUp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                }else if(str1 === "Eve"){
                  console.log("Aaaaoooonnnaaa11");
                  valTgUp0 = tagmouseIdUp.slice(0, 16);
                  valTagUp = tagmouseIdUp.slice(16, tagmouseIdUp.length);
                }else if(str1 === "sta"){
                  console.log("Aaaaoooonnnaaa12");
                  valTgUp0 = tagmouseIdUp.slice(0, 8);
                  valTagUp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
                  if(valTgUp0 === "start_me"){
                    console.log("Aaaaoooonnnaaa13");
                    valTgUp0 = tagmouseIdUp.slice(0, 13);
                    valTagUp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                  }else if(valTgUp0 === "start_ti"){
                    console.log("Aaaaoooonnnaaa14");
                    valTgUp0 = tagmouseIdUp.slice(0, 12);
                    valTagUp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                  }else if(valTgUp0 === "startnow"){
                    console.log("Aaaaoooonnnaaa15");
                    valTgUp0 = tagmouseIdUp.slice(0, 8);
                    valTagUp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
                  }

                }else if(str1 === "cat"){
                  valTgUp0 = tagmouseIdUp.slice(0, 8);
                  if (valTgUp0 === "catch_li") {
                    console.log("Aaaaoooonnnaaa16");
                    valTgUp0 = tagmouseIdUp.slice(0, 10);
                    valTagUp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                  }else if (valTgUp0 === "catch_me") {
                    console.log("Aaaaoooonnnaaa17");
                    valTgUp0 = tagmouseIdUp.slice(0, 13);
                    valTagUp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                  }else if (valTgUp0 === "catch_si") {
                    console.log("Aaaaoooonnnaaa18");
                    valTgUp0 = tagmouseIdUp.slice(0, 12);
                    valTagUp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                  }
                  
                }else if(str1 === "thr"){

                  valTgUp0 = tagmouseIdUp.slice(0, 8);
                  if (valTgUp0 === "throw_li") {
                    console.log("Aaaaoooonnnaaa19");
                    valTgUp0 = tagmouseIdUp.slice(0, 10);
                    valTagUp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                  }else if (valTgUp0 === "throw_me") {
                    console.log("Aaaaoooonnnaaa20");
                    valTgUp0 = tagmouseIdUp.slice(0, 13);
                    valTagUp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                  }else if (valTgUp0 === "throw_si") {
                    console.log("Aaaaoooonnnaaa21");
                    valTgUp0 = tagmouseIdUp.slice(0, 12);
                    valTagUp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                  }
                  
                }else if(str1 === "tim"){
                  console.log("Aaaaoooonnnaaa22");
                  valTgUp0 = tagmouseIdUp.slice(0, 5);
                  valTagUp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
                }else if(str1 === "end"){
                  
                  valTgUp0 = tagmouseIdUp.slice(0, 6);
                  if (valTgUp0 === "end_er") {
                    console.log("Aaaaoooonnnaaa23");
                    valTgUp0 = tagmouseIdUp.slice(0, 9);
                    valTagUp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                  }else if (valTgUp0 === "end_me") {
                    console.log("Aaaaoooonnnaaa24");
                    valTgUp0 = tagmouseIdUp.slice(0, 11);
                    valTagUp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
                  }else if (valTgUp0 === "end_si") {
                    console.log("Aaaaoooonnnaaa25");
                    valTgUp0 = tagmouseIdUp.slice(0, 10);
                    valTagUp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                  }
                  else if (valTgUp0 === "endnow") {
                    console.log("Aaaaoooonnnaaa26");
                    valTgUp0 = tagmouseIdUp.slice(0, 6);
                    valTagUp = tagmouseIdUp.slice(6, tagmouseIdUp.length);
                  }

                }else if(str1 === "ter"){
                  console.log("Aaaaoooonnnaaa27");
                  valTgUp0 = tagmouseIdUp.slice(0, 19);
                  valTagUp = tagmouseIdUp.slice(19, tagmouseIdUp.length);
                }

                // tgIDuP0 = "text"+valTgUp0; 

            console.log("valTgUp0 : "+valTgUp0);
            console.log("valTagUp : "+valTagUp);
            console.log("slTextB : "+slTextB);
            console.log("sliceEvFl : "+sliceEvFl);

          console.log("typeElem : "+typeElem);

          slTextB = e.target.id

          
          
            if(valTgUp0 === "fleche" || valTgUp0 === "AND" || valTgUp0 === "inclusive" || 
            valTgUp0 === "XOR" || valTgUp0 === "abstract_task" || valTgUp0 === "human" || valTgUp0 === "receive_task" || 
            valTgUp0 === "script_task" || valTgUp0 === "send_task" || valTgUp0 === "service_task" || 
            valTgUp0 === "Call_activity" || valTgUp0 === "Event_subprocess" || valTgUp0 === "start_message" || 
            valTgUp0 === "start_signal" || valTgUp0 === "start_timer" || valTgUp0 === "startnow" || 
            valTgUp0 === "catch_link" || valTgUp0 === "catch_message" || valTgUp0 === "catch_signal" || 
            valTgUp0 === "throw_link" || valTgUp0 === "throw_message" || valTgUp0 === "throw_signal" || 
            valTgUp0 === "timer" || valTgUp0 === "end_error" || valTgUp0 === "end_message" || valTgUp0 === "end_signal" || 
            valTgUp0 === "endnow" || valTgUp0 === "terminate_end_event" ){


              const ordTextB0 = document.getElementById(e.target.id);
              const ordTextB = document.getElementById(ordTextB0.nextElementSibling.id);

              var coorFlecXdTextB = ordTextB.getBoundingClientRect().x;
              var coorFlecYdTextB = ordTextB.getBoundingClientRect().y;
  
              var widthFlecTextB = ordTextB.getBoundingClientRect().width;
              var heightFlecTextB = ordTextB.getBoundingClientRect().height;
  
              var widthFlecPlusX = coorFlecXdTextB + widthFlecTextB;
              var heightFlecPlusY = coorFlecYdTextB + heightFlecTextB;

              // console.log("111111111111111111111");

              // ordTextB.parentElement.id;
              console.log("e.target.id= "+e.target.id);
              console.log("ordTextB0.nextElementSibling.id = "+ordTextB0.nextElementSibling.id);
              console.log("coorFlecXdTextB = "+coorFlecXdTextB);
              console.log("coorFlecYdTextB = "+coorFlecYdTextB);
              console.log("widthFlecPlusX = "+widthFlecPlusX);
              console.log("heightFlecPlusY = "+heightFlecPlusY);

              console.log("e.pageX : "+e.clientX);
              console.log("e.pageY : "+e.clientY);
  
              if ((coorFlecXdTextB <= (e.clientX) && widthFlecPlusX > (e.clientX)) && (coorFlecYdTextB <= (e.clientY) && heightFlecPlusY > (e.clientY)))
              {

                console.log("22222222222222222222")
                tagIdUp = ev.target.id;

                const elems = document.getElementById("div1");

                var elexX = elems.getBoundingClientRect().x;
                var eleyY = elems.getBoundingClientRect().y;
                

                if (tagIdLeave != tagIdUp) {
                  console.log("3333333333333333333")
                  // console.log("upp tagIdUp = "+tagIdUp);
                  xEnd.push(ev.clientX - elexX);
                  yEnd.push(ev.clientY - eleyY);

                  var str = tagIdUp.slice(0, 3);
                  var valTgUp = 0;
                  var tgIDuP = null;
                 
                  if(str === "fle"){
                    console.log("AaaaoYYYYnnaaa1");
                    valTgUp = tagmouseIdUp.slice(0, 6);
                    valTagUppp = tagmouseIdUp.slice(6, tagmouseIdUp.length);
                  }else if(str === "AND"){
                    console.log("AaaaoYYYYnnaaa2");
                    valTgUp = tagmouseIdUp.slice(0, 3);
                    valTagUppp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
                  }else if(str === "inc"){
                    console.log("AaaaoYYYYnnaaa3");
                    valTgUp = tagmouseIdUp.slice(0, 9);
                    valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                  }else if(str === "XOR"){
                    console.log("AaaaoYYYYnnaaa4");
                    valTgUp = tagmouseIdUp.slice(0, 3);
                    valTagUppp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
                  }else if(str === "abs"){
                    console.log("AaaaoYYYYnnaaa5");
                    valTgUp = tagmouseIdUp.slice(0, 13);
                    valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                  }else if(str === "hum"){
                    console.log("AaaaoYYYYnnaaa6");
                    valTgUp = tagmouseIdUp.slice(0, 5);
                    valTagUppp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
                  }else if(str === "rec"){
                    console.log("AaaaoYYYYnnaaa6");
                    valTgUp = tagmouseIdUp.slice(0, 12);
                    valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                  }else if(str === "scr"){
                    console.log("AaaaoYYYYnnaaa7");
                    valTgUp = tagmouseIdUp.slice(0, 11);
                    valTagUppp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
                  }else if(str === "sen"){
                    console.log("AaaaoYYYYnnaaa8");
                    valTgUp = tagmouseIdUp.slice(0, 9);
                    valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                  }else if(str === "ser"){
                    console.log("AaaaoYYYYnnaaa9");
                    valTgUp = tagmouseIdUp.slice(0, 12);
                    valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                  }else if(str === "cal"){
                    console.log("AaaaoYYYYnnaaa10");
                    valTgUp = tagmouseIdUp.slice(0, 13);
                    valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                  }else if(str === "Eve"){
                    console.log("AaaaoYYYYnnaaa11");
                    valTgUp = tagmouseIdUp.slice(0, 16);
                    valTagUppp = tagmouseIdUp.slice(16, tagmouseIdUp.length);
                  }else if(str === "sta"){
                    console.log("AaaaoYYYYnnaaa12");
                    valTgUp = tagmouseIdUp.slice(0, 8);
                    valTagUppp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
                    if(valTgUp === "start_me"){
                      console.log("AaaaoYYYYnnaaa13");
                      valTgUp = tagmouseIdUp.slice(0, 13);
                      valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                    }else if(valTgUp === "start_ti"){
                      console.log("AaaaoYYYYnnaaa14");
                      valTgUp = tagmouseIdUp.slice(0, 12);
                      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                    }else if(valTgUp === "startnow"){
                      console.log("AaaaoYYYYnnaaa15");
                      valTgUp = tagmouseIdUp.slice(0, 8);
                      valTagUppp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
                    }
  
                  }else if(str === "cat"){
                    valTgUp = tagmouseIdUp.slice(0, 8);
                    if (valTgUp === "catch_li") {
                      console.log("AaaaoYYYYnnaaa16");
                      valTgUp = tagmouseIdUp.slice(0, 10);
                      valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                    }else if (valTgUp === "catch_me") {
                      console.log("AaaaoYYYYnnaaa17");
                      valTgUp = tagmouseIdUp.slice(0, 13);
                      valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                    }else if (valTgUp === "catch_si") {
                      console.log("AaaaoYYYYnnaaa18");
                      valTgUp = tagmouseIdUp.slice(0, 12);
                      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                    }
                    
                  }else if(str === "thr"){
  
                    valTgUp = tagmouseIdUp.slice(0, 8);
                    if (valTgUp === "throw_li") {
                      console.log("AaaaoYYYYnnaaa19");
                      valTgUp = tagmouseIdUp.slice(0, 10);
                      valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                    }else if (valTgUp === "throw_me") {
                      console.log("AaaaoYYYYnnaaa20");
                      valTgUp = tagmouseIdUp.slice(0, 13);
                      valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                    }else if (valTgUp === "throw_si") {
                      console.log("AaaaoYYYYnnaaa21");
                      valTgUp = tagmouseIdUp.slice(0, 12);
                      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                    }
                    
                  }else if(str === "tim"){
                    console.log("AaaaoYYYYnnaaa22");
                    valTgUp = tagmouseIdUp.slice(0, 5);
                    valTagUppp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
                  }else if(str === "end"){
                    
                    valTgUp = tagmouseIdUp.slice(0, 6);
                    if (valTgUp === "end_er") {
                      console.log("AaaaoYYYYnnaaa23");
                      valTgUp = tagmouseIdUp.slice(0, 9);
                      valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                    }else if (valTgUp === "end_me") {
                      console.log("AaaaoYYYYnnaaa24");
                      valTgUp = tagmouseIdUp.slice(0, 11);
                      valTagUppp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
                    }else if (valTgUp === "end_si") {
                      console.log("AaaaoYYYYnnaaa25");
                      valTgUp = tagmouseIdUp.slice(0, 10);
                      valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                    }
                    else if (valTgUp === "endnow") {
                      console.log("AaaaoYYYYnnaaa26");
                      valTgUp = tagmouseIdUp.slice(0, 6);
                      valTagUppp = tagmouseIdUp.slice(6, tagmouseIdUp.length);
                    }
  
                  }else if(str === "ter"){
                    console.log("AaaaoYYYYnnaaa27");
                    valTgUp = tagmouseIdUp.slice(0, 19);
                    valTagUppp = tagmouseIdUp.slice(19, tagmouseIdUp.length);
                  }
  

                  tgIDuP = valTgUp+""+valTagUppp;   
                  // console.log("tgIDuP : "+tgIDuP);             
                  endName.push(tgIDuP);
                  console.log("++++++ xEnd before:"+xEnd);
                  
                }
                
              } 
             

              
              
              
            } 
            // else{
            //   xInit.pop();
            //   yInit.pop();
            //   // ligne.pop();
            //   ja = -1;
            // }
          
            

            for (let index = 0; index < xInit.length; index++) {

              for (let j = 0; j < xEnd.length; j++) {
                if (xInit.length != xEnd.length) {
                  
                 if (xInit.length > xEnd.length) {
                 
                  xInit.pop();
                  yInit.pop();
                  initName.pop();
                 }
                 if (xInit.length < xEnd.length) {
                  xEnd.pop();
                  yEnd.pop();
                  endName.pop();
                 
                 }
                    
    
                    // initName.pop
                 

                }
                
              }
              
              
              
            }
           

            console.log("======== xInit after :"+xInit);
            console.log("++++++ xEnd after:"+xEnd);
            console.log("onmouseup stop");
            mouseUp = true;

            return;
        }    

        if(mouseUp === true){
          // if(sliceEvFlech === sliTextB){
            // console.log("mose upppppp xInit : "+xInit);
            for (let v = 0; v < xInit.length; v++) {
  
              console.log("xInit["+v+"] : "+xInit[v]);
              console.log("yInit["+v+"] : "+yInit[v]);
              console.log("xinitName["+v+"] : "+initName[v]);
              console.log("xEnd["+v+"] : "+xEnd[v]);
              console.log("yEnd["+v+"] : "+yEnd[v]);
              console.log("xendName["+v+"] : "+endName[v]);

              console.log("createLine(xInit["+v+"], yInit["+v+"], xEnd["+v+"], yEnd["+v+"], ligne["+v+"])")
              
              createLine(xInit[v], yInit[v], xEnd[v], yEnd[v], ligne[v]);
  
              mouseUp = true;
              
            }

          // }
        }

        // }
            
        

        
        xvalEnd = ev.pageX;
        yvalEnd = ev.pageY;

       
  
        

        if (mouseUp === true) {
          
          

            var line = "lineEx";
            for (let index = 1; index <= ja; index++) {
              line = line + index;
              // console.log("ja index : "+ja);
              // console.log("index : "+index);
              // console.log("line : "+line);
              var lineS = document.getElementById(line);
              // lineS.style.display = "none";
            }
          
          return;
        }

  
      }
      
    
      
  }

  function leaveFlec(e){
    console.log("funcFlecheInit lefting ...");
  }

var positArrayX = [];
var positArrayY = [];
var j = 0;
var toucheee = false;
var touche = [];
// ==============================================================================
// =============================== STARTF =======================================
// ==============================================================================


var vEdit = 0;
var modifInitPos = false;
var modifEndPos = false;

var modif = false

  function startF(event, valTexB) { //  start the process
    // get ready to move: make an absolute and top z-index

    console.log("startffffffffffffff = ");

    console.log("valTexB : "+valTexB);
    // j = j+1;
    const sliceFlech = flecheId.slice(0, 3);
    // console.log("sliceFlech : "+sliceFlech);

    const sliceEventFlech = (event.target.id).slice(0, 3);
    // console.log("sliceEventFlech : "+sliceEventFlech);
    // console.log("sliceFlech : "+sliceFlech);


    const sliceEventLane = (event.target.id).slice(0, 3);

    // console.log("textBEdit typeElem : "+typeElem)
    // console.log("textC : "+textC)
    var valTextB = null;
    if(valTexB === "tag"){
      valTextB = "tag";

      typeElem = textC;
    }else if(valTexB === "savedData"){
      typeElem = event.target.id;
      console.log("typeElem ici = "+typeElem);
    }
    else{
       valTextB = document.getElementById(valTexB);

      //  console.log("valTextB = "+valTextB);
      //  console.log("flecheId = "+flecheId);

      if (valTextB == undefined || valTextB == null) {
        if (sliceEventLane === "lan") {
          typeElem = textC;
        }
        else if(sliceEventFlech === sliceFlech){
          // console.log("startF must exit");
          typeElem.setAttribute("onmousemove", "stopF(event, 'aa')");

          // textB.removeEventListener("mousemove", startF(event, valTextB));
          return;
        }else if(sliceEventFlech === "lbl"){
          typeElem = parentElement.id; 
        }
        
        else{
          typeElem = event.target.id;
        }
        
      }
      else{
        typeElem = textC;
      }
    }

    
    

    const eleme = document.getElementById(event.target.id)

      const zaza = document.getElementById("editK"+eleme);
      var zaza2 = null;
      console.log("typeElem test = "+typeElem);

      console.log("outils : "+outils);

      for (let i = 0; i < outils.length; i++) {
        
        if (outils[i] === typeElem) {
          zaza2 = document.getElementById("editK"+outils[i]);
          zaza2.style.display = "block";
        }else{
          zaza2 = document.getElementById("editK"+outils[i]);
          zaza2.style.display = "none";

        }
      }
    

    var textBEdit = document.getElementById(typeElem);

    const elm = document.getElementById("div1");

    var elemX = elm.getBoundingClientRect().x;
    var elemY = elm.getBoundingClientRect().y;

    console.log("elemX = "+elemX);
    console.log("elemY = "+elemY);

        var coorXdTextB = textBEdit.getBoundingClientRect().x - elemX;
        var coorYdTextB = textBEdit.getBoundingClientRect().y - elemY;

        var widthTextB = textBEdit.getBoundingClientRect().width;
        var heightTextB = textBEdit.getBoundingClientRect().height;

        var widthPlusX = coorXdTextB + widthTextB;
        var heightPlusY = coorYdTextB + heightTextB;
  
        console.log("===============================");
        console.log("coorXdTextB = "+coorXdTextB);
        console.log("coorYdTextB = "+coorYdTextB);
        console.log("widthPlusX = "+widthPlusX);
        console.log("heightPlusY = "+heightPlusY);
        console.log("widthTextB = "+widthTextB);
        console.log("heightTextB = "+heightTextB);

        console.log("typeElem : "+typeElem)
  
        
        const elems = document.getElementById("div1");
        // elems.appendChild(typeElemId);

        var elexX = elems.getBoundingClientRect().x;
        var eleyY = elems.getBoundingClientRect().y;


        // if (modifEndPos === true) {
          for (let j = 0; j < xInit.length; j++) {
            console.log(" xInit["+j+"] = "+xInit[j]);
          console.log(" yInit["+j+"] = "+yInit[j]);
          console.log(" xEnd["+j+"] = "+xEnd[j]);
          console.log(" yEnd["+j+"] = "+yEnd[j]);

            if ((coorXdTextB <= xInit[j] && widthPlusX > xInit[j]) && (coorYdTextB <= yInit[j] && heightPlusY > yInit[j])) {
              modifInitPos = true;
              // modifEndPos = false;
              // console.log("coorXInitdTextB is the same  ");
              modif = true;
            }
  
            else if ((coorXdTextB <= xEnd[j] && widthPlusX > xEnd[j]) && (coorYdTextB <= yEnd[j] && heightPlusY > yEnd[j])) {
              // modifInitPos = false;
              modifEndPos = true;
              // createLine(xInit[j], yInit[j], coorXdTextB, coorYdTextB, ligne);
              // console.log("coorXEnddTextB is the same  ");

              modif = true;
              
            }
            
            else{
              // console.log("=== unidentify point ===");
              modifInitPos = false;
              modifEndPos = false;
            }
    
            if (modifEndPos === true) {
              console.log("modifEndPos = true");
              console.log("modifEndPos xInit["+j+"] = "+xInit[j]);
              console.log("modifEndPos yInit["+j+"] = "+yInit[j]);
              console.log("modifEndPos xEnd["+j+"] = "+xEnd[j]);
              console.log("modifEndPos yEnd["+j+"] = "+yEnd[j]);

              // createLine(xInit[j], yInit[j], coorXdTextB, coorYdTextB, ligne);

              if (xEnd[j] != coorXdTextB || yEnd[j] != coorYdTextB) {
                xEnd[j] = coorXdTextB + (widthTextB/2);
                yEnd[j] = coorYdTextB + (heightTextB/2); 
              }
              modifEndPos = false;

            }
             if (modifInitPos === true) {
              console.log("modifEndPos = false");
              console.log("modifInitPos xInit["+j+"] = "+xInit[j]);
              console.log("modifInitPos yInit["+j+"] = "+yInit[j]);
              console.log("modifInitPos xEnd["+j+"] = "+xEnd[j]);
              console.log("modifInitPos yEnd["+j+"] = "+yEnd[j]);

              // createLine(coorXdTextB, coorYdTextB, xEnd[j], yEnd[j], ligne);

              
              if (xInit[j] != coorXdTextB || yInit[j] != coorYdTextB) {
                xInit[j] = coorXdTextB + (widthTextB/2);
                yInit[j] = coorYdTextB + (heightTextB/2);
              }

              modifInitPos = false;

              }
              

          }
          modif = false;

        // }else if(modifInitPos === true){
        //   for (let v = 0; v < xEnd.length; v++) {
    
            
        //   }
        // modif = false;
        // }

        var meme1 = 0;
        // touche.length = 0;

        // console.log("coorXdTextB = "+coorXdTextB);
        // console.log("coorYdTextB = "+coorYdTextB);
        // console.log("widthPlusX = "+widthPlusX);
        // console.log("heightPlusY = "+heightPlusY);
    if (toucheee === false) {
      for (let j = 0; j < xEnd.length; j++) {

              // console.log("toucheee xInit["+j+"] = "+xInit[j]);
              // console.log("toucheee yInit["+j+"] = "+yInit[j]);
              // console.log("toucheee xEnd["+j+"] = "+xEnd[j]);
              // console.log("toucheee yEnd["+j+"] = "+yEnd[j]);

        if (((coorXdTextB <= xInit[j] && widthPlusX > xInit[j]) && (coorYdTextB <= yInit[j] && heightPlusY > yInit[j])) || ((coorXdTextB <= xEnd[j] && widthPlusX > xEnd[j]) && (coorYdTextB <= yEnd[j] && heightPlusY > yEnd[j])))
          {
            meme1 = meme1 + 1;
            touche.push(j)
            // createLine(xInit[j], yInit[j], xEnd[j], yEnd[j], ligne[j]);
            // console.log("createLine("+xInit[j]+"," +yInit[j]+"," +xEnd[j]+"," +yEnd[j]+"," +ligne[j]+")");
            toucheee = true;
            // console.log("touche OKKKK");
            // break
          }
         
      }
      
    }
      // console.log("nb inp outp : "+meme1);
      // console.log("touche : "+touche);
      // console.log("toucheee : "+toucheee);

      // if (toucheee === false) {
        for (let j = 0; j < touche.length; j++) {
          // const element = touche[j];
          createLine(xInit[touche[j]], yInit[touche[j]], xEnd[touche[j]], yEnd[touche[j]], ligne[touche[j]]);
          console.log("createLine(xInit["+touche[j]+"]"," yInit["+touche[j]+"]","xEnd["+touche[j]+"]","yEnd["+touche[j]+"]"," +ligne["+touche[j]+"])");
          console.log("createLine("+xInit[touche[j]]+"," +yInit[touche[j]]+"," +xEnd[touche[j]]+"," +yEnd[touche[j]]+"," +ligne[touche[j]]+")");
          // toucheee = true;
        }
   
       
        modif = false;

   
    console.log("typeElem = "+typeElem);
    const typeElemId = document.getElementById(typeElem);
    
    typeElemId.style.position = 'absolute';
    // console.log(textB+".style.position : "+textB.style.position);
    typeElemId.style.zIndex = 1000;
    // move it from any existing parents directly to the body
    // to position it relative to the body
    
    const elem = document.getElementById("div1");
    elem.appendChild(typeElemId);

    var eleX = elem.getBoundingClientRect().x;
    var eleY = elem.getBoundingClientRect().y;

    console.log("event.clientX = "+event.clientX);
    console.log("event.clientY = "+event.clientY);

    // and put this absolutely positioned textB under the pointer
moveAt(event.clientX, event.clientY);
    // centers the textB on the coordinates (pageX, pageY)


    function moveAt(pageX, pageY) {
    
      

      console.log("eleX = "+eleX);
      console.log("eleY = "+eleY);

      console.log("event.pageXxx = "+pageX);
      console.log("event.pageYyy = "+pageY);

      typeElemId.style.left = event.clientX - eleX - typeElemId.offsetWidth / 2 + 'px';
      typeElemId.style.top = event.clientY - eleY - typeElemId.offsetHeight / 2 + 'px';


      var valX =  event.clientX - eleX - typeElemId.offsetWidth / 2 ;
      var valY =  event.clientY - eleY - typeElemId.offsetHeight / 2 ;

      

      const image = document.getElementById("image");
     

      console.log("valX = "+valX);
      console.log("valY = "+valY);

      // createLine(tes.x, tes.y, valX, valY, ligne);
      posiElemX = typeElem+"_"+valX;
      posiElemY = typeElem+"_"+valY;

      toolsSave = typeElem;
      positX = valX;
      positY = valY;

      var repetElem = false;
      var valI = 0;

      if (positArrayX.length === 0) {
        // positArrayX.push(posiElemX);
        // positArrayY.push(posiElemY);
      }else{

        for (let i = 0; i < positArrayX.length; i++) {

          var typeEleArr = positArrayX[i].slice(0, typeElem.length);
          console.log("typeElem : "+typeElem);
          console.log("typeEleArr : "+typeEleArr);
          console.log("posiElemX : "+posiElemX);
          console.log("posiElemY : "+posiElemY);
          console.log("positArrayX["+i+"].length : "+positArrayX[i].length);

          if (typeElem === typeEleArr) {
            
            console.log("ddddddddddddddd")
            repetElem = true;
            valI = i;
            
          }
          
        }
      }

      if (repetElem === true) {
        console.log("repetElem : "+repetElem)
        console.log("valI : "+valI)

        positArrayX.splice(valI, 1);
        positArrayY.splice(valI, 1);
        console.log("positArrayX["+valI+"] false: "+positArrayX[valI])
        
       

        positArrayX.push(posiElemX);
        positArrayY.push(posiElemY);
      }else{
        console.log("positArrayX["+valI+"] true: "+positArrayX[valI])
        positArrayX.push(posiElemX);
        positArrayY.push(posiElemY);
      }

      // positArrayX.push(posiElemX);
      // positArrayY.push(posiElemY);

      console.log("positArrayX : "+positArrayX);
      console.log("positArrayY : "+positArrayY);

    }

    
     


    function onMouseMove(event) {

      const idElem = document.getElementById(typeElem);

      var idElemtop = idElem.getBoundingClientRect().y;
      var idElemleft = idElem.getBoundingClientRect().x;
      var idElemwidth = idElem.getBoundingClientRect().width;
      var idElemheight = idElem.getBoundingClientRect().height;

      console.log("idElem.parentElement.id : "+idElem.parentElement.id)

      for (let j = 0; j < laneSave.length; j++) {

        
        const elemLane = document.getElementById(laneSave[j]);
        var elemLaneWidth = elemLane.getBoundingClientRect().width;
        var elemLaneHeight = elemLane.getBoundingClientRect().height;
        var elemLaneTop = elemLane.getBoundingClientRect().y;
        var elemLaneLeft = elemLane.getBoundingClientRect().x+63;

        var diffTop = elemLaneTop + elemLaneHeight;
        var diffLeft = elemLaneLeft + elemLaneWidth -32;

        var diffLeftP2 =  event.clientX;
        var diffTopP2 = event.clientY + (idElemheight/2);

        var diffLeftM2 =  event.clientX - (idElemwidth);
        var diffTopM2 = event.clientY - (idElemheight/2);

        if ((idElemleft <= diffLeft && idElemleft >= elemLaneLeft) && (idElemtop <= diffTop && idElemtop >= elemLaneTop)) {
          
          console.log("diff============================ ");
        
          console.log("diffTop : "+diffTop);
          console.log("diffTopP2 : "+diffTopP2);
          console.log("diffTopM2 : "+diffTopM2);

          console.log("diffLeftP2 : "+diffLeftP2);
          console.log("diffLeft : "+diffLeft);
          console.log("diffLeftM2 : "+diffLeftM2);
          console.log("diffelemLaneLeft : "+elemLaneLeft);
          console.log("diffelemLaneTop : "+elemLaneTop);
          console.log("diffdiffLaneWidth : "+elemLaneWidth);
          console.log("diffelemLaneHeight : "+elemLaneHeight);


          if ((diffLeftP2 <= diffLeft && diffLeftM2 >= elemLaneLeft) && (diffTopP2 <= diffTop && diffTopM2 >= elemLaneTop)) {
            moveAt(event.pageX, event.pageY);
            
          }else{
            console.log("t'as sortie dans lane")
          }
        }

      }
      
     

      // console.log("ceci est test")
    }
    
    document.addEventListener('mousemove', onMouseMove(event));
    

    var jOnmouseup = 0;
    var jOnmousedown = 0;

    const typeEleId = document.getElementById(typeElem);
    typeEleId.addEventListener("mouseup", function(e) {
      jOnmouseup = jOnmouseup+1;
      // console.log("onmouseup e.target.id : "+e.target.id);

      toucheee = false;
      touche.length = 0;
      // console.log("jOnmouseup = "+jOnmouseup);

      if (jOnmouseup != 1) {
        typeElem = e.target.id;
      }
      else{
        typeElem = textC;
      }
  
      const typeEleIdd = document.getElementById(typeElem);
      
      // document.removeEventListener('mousemove', onMouseMove(event));

      // textB.removeEventListener("mousemove", startF(event, valTextB));
      typeEleIdd.setAttribute("onmousemove", "stopF(event, 'aa')");
      

      // console.log("onmouseup is clicked")

      typeEleIdd.onmouseup = null;

    })
    // textB.onmouseup = ;
    const typeEleIdd = document.getElementById(typeElem);
    typeEleIdd.addEventListener("mousedown", function(e){

      // if(valTexB = "savedData"){
      //   const typeEl = document.getElementById(typeElem);
      //   typeEl.setAttribute("onmousemove", "startF(event, 'savedData')");
      // }
      // textB = e.target.id;
      jOnmousedown = jOnmousedown+1;
 
      console.log("jOnmousedown = "+jOnmousedown);
      
      

      if (jOnmousedown != 1) {
        if (e.target.id === flecheId) {
          return typeEleIdd.setAttribute("onmousemove", "stopF(event, 'aa')");
          // return textB.removeEventListener("mousemove", startF(event, valTextB));
        }else{
          typeElem = e.target.id;
        }
        

      }
      else{
        typeElem = textC;
      }

      
      

      // var valTextB = textB;
      // console.log("onmousedown textC : "+textC);
      // textB = textC;
      // console.log("onmousedown textB : "+textB);
      
      
      
      const valTextB = typeElem;
      // console.log("onmousedown e.target.id : "+e.target.id);
      // console.log("valTextB : "+valTextB);
      typeElem = document.getElementById(typeElem);
      typeElem.setAttribute("onmousemove", "startF(event, "+valTextB+")");
   
    })
    // textB.onmousedown = 

    // textB = textC;

    
  };

 
  
// }while (readyToDrag === true);

var del = document.getElementById("deletee");

function stt(ev){
  console.log("iddd : " +ev.target.id);
  var ddd = document.getElementById(ev.target.id);

  var slddd = (ev.target.id).slice(0, 3);
  console.log("slddd : "+slddd)
  if (slddd === "fle" || slddd === "lig" || slddd === "AND" || slddd === "inc" || 
  slddd === "XOR" || slddd === "abs" || slddd === "hum" || slddd === "rec" || 
  slddd === "scr" || slddd === "sen" || slddd === "ser" || 
  slddd === "Cal" || slddd === "Eve" || slddd === "sta" || slddd === "cat" || 
  slddd === "thr" || slddd === "tim" || slddd === "end" || slddd === "ter" ) {

    ddd.style.display = "none";
    var editK = document.getElementById("editK"+ev.target.id);
    editK.style.display = "none";

    for (let i = 0; i < outils.length; i++) {
      if (outils[i] === ev.target.id) {
        outils.splice(i, 1)
      }
      
    }

    const firstElemChild = ddd.firstElementChild.id;
        console.log("firstElemChild : "+firstElemChild);

        const g = document.getElementById(firstElemChild);
        const secondeElmChild = g.nextElementSibling.id;
        console.log("fir secondeElemChild : "+secondeElmChild);
        var initNameAvant = initName.length;
        var endNameAvant = endName.length;

        var valLigneDel = [];

        for (let i = 0; i < initNameAvant; i++) {
          for (let j = 0; j < endNameAvant; j++) {
            var flecc = "fleche"
            
              console.log("ss secondeElemChild : "+secondeElmChild);
              console.log("ss initName["+i+"] Del : "+initName[i]);
              console.log("ss endName["+j+"] Del : "+endName[i]);
              console.log("ss initName Del : "+initName);
              console.log("ss endName Del : "+endName);
    
                    if (secondeElmChild === initName[j]) {

                      valLigneDel.push(j)
                       
                     
    
                    }
    
                    if (secondeElmChild === endName[j]) {
                      valLigneDel.push(j)
                     
                    }
          
            
          }
          
        }
        for (let h = 0; h < valLigneDel.length; h++) {
          const delEle = document.getElementById(ligne[valLigneDel[h]]);
          delEle.style.display = "none";
          console.log("dellllletttt")
          
        }


    for (let i = 0; i < initName.length; i++) {
      for (let j = 0; j < endName.length; j++) {
        var flecc = "fleche"
        
          console.log("ss secondeElemChild : "+secondeElmChild);
          console.log("ss initName["+i+"] Del : "+initName[i]);
          console.log("ss endName["+j+"] Del : "+endName[i]);
          console.log("ss initName Del : "+initName);
          console.log("ss endName Del : "+endName);

                if (secondeElmChild === initName[j]) {
                  console.log("derr1 initName Del : "+initName[j]);
                  console.log("derr1 endName Del : "+endName[j]);
                  xInit.splice(j, 1);
                  yInit.splice(j, 1);
                  initName.splice(j, 1);
                  xEnd.splice(j, 1);
                  yEnd.splice(j, 1);
                  endName.splice(j, 1);

                  imgIdArr.splice(j, 1);

                  valLigneDel.push(j);

                  ligne.splice(j, 1);

                }

                if (secondeElmChild === endName[j]) {
                  console.log("derr2 initName Del : "+initName[j]);
                  console.log("derr2 endName Del : "+endName[j]);
                  xInit.splice(j, 1);
                  yInit.splice(j, 1);
                  initName.splice(j, 1);
                  xEnd.splice(j, 1);
                  yEnd.splice(j, 1);
                  endName.splice(j, 1);

                  imgIdArr.splice(j, 1);

                  ligne.splice(j, 1);

                }
      
        
      }
      
    }
  }

  
}
var click = 0;
function deleteElem(ev) {
  click = click + 1;
  // document.ondblclick = 

  if (click % 2 != 0) {
    del.style.color = "red"
  document.addEventListener("dblclick",stt)
  }else{
    del.style.color = "black"
    document.removeEventListener("dblclick",stt)
  }
  
}

document.onmousemove = function(e){
  // console.log("e.target.id : "+e.target.id)
}

// const plusNameLane = document.createElement("div");
// plusNameLane.setAttribute("id", ("lanePlus"+iLane));
// const plusElemLane = document.getElementById(actioLanePoolId);
// plusElemLane.appendChild(plusNameLane);
// const textPlusLane = document.createTextNode("plusLane");
// plusNameLane.appendChild(textPlusLane);


// valTgUp0 === "fleche" || valTgUp0 === "AND" || valTgUp0 === "inclusive" || 
//             valTgUp0 === "XOR" || valTgUp0 === "abstract_task" || valTgUp0 === "human" || valTgUp0 === "receive_task" || 
//             valTgUp0 === "script_task" || valTgUp0 === "send_task" || valTgUp0 === "service_task" || 
//             valTgUp0 === "Call_activity" || valTgUp0 === "Event_subprocess" || valTgUp0 === "start_message" || 
//             valTgUp0 === "start_signal" || valTgUp0 === "start_timer" || valTgUp0 === "startnow" || 
//             valTgUp0 === "catch_link" || valTgUp0 === "catch_message" || valTgUp0 === "catch_signal" || 
//             valTgUp0 === "throw_link" || valTgUp0 === "throw_message" || valTgUp0 === "throw_signal" || 
//             valTgUp0 === "timer" || valTgUp0 === "end_error" || valTgUp0 === "end_message" || valTgUp0 === "end_signal" || 
//             valTgUp0 === "endnow" || valTgUp0 === "terminate_end_event"

document.onclick = function(e){
  var tagIdUp = e.target.id;
  const tagmouseIdUp = e.target.id;
  var str = tagIdUp.slice(0, 3);
  var valTgUp = 0;
  var tgIDuP = null;
  var valTagUppp = 0
 
  if(str === "fle"){
    console.log("AaaaoYYYYnnaaa1");
    valTgUp = tagmouseIdUp.slice(0, 6);
    valTagUppp = tagmouseIdUp.slice(6, tagmouseIdUp.length);
  }else if(str === "AND"){
    console.log("AaaaoYYYYnnaaa2");
    valTgUp = tagmouseIdUp.slice(0, 3);
    valTagUppp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
  }else if(str === "inc"){
    console.log("AaaaoYYYYnnaaa3");
    valTgUp = tagmouseIdUp.slice(0, 9);
    valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
  }else if(str === "XOR"){
    console.log("AaaaoYYYYnnaaa4");
    valTgUp = tagmouseIdUp.slice(0, 3);
    valTagUppp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
  }else if(str === "abs"){
    console.log("AaaaoYYYYnnaaa5");
    valTgUp = tagmouseIdUp.slice(0, 13);
    valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
  }else if(str === "hum"){
    console.log("AaaaoYYYYnnaaa6");
    valTgUp = tagmouseIdUp.slice(0, 5);
    valTagUppp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
  }else if(str === "rec"){
    console.log("AaaaoYYYYnnaaa6");
    valTgUp = tagmouseIdUp.slice(0, 12);
    valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
  }else if(str === "scr"){
    console.log("AaaaoYYYYnnaaa7");
    valTgUp = tagmouseIdUp.slice(0, 11);
    valTagUppp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
  }else if(str === "sen"){
    console.log("AaaaoYYYYnnaaa8");
    valTgUp = tagmouseIdUp.slice(0, 9);
    valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
  }else if(str === "ser"){
    console.log("AaaaoYYYYnnaaa9");
    valTgUp = tagmouseIdUp.slice(0, 12);
    valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
  }else if(str === "cal"){
    console.log("AaaaoYYYYnnaaa10");
    valTgUp = tagmouseIdUp.slice(0, 13);
    valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
  }else if(str === "Eve"){
    console.log("AaaaoYYYYnnaaa11");
    valTgUp = tagmouseIdUp.slice(0, 16);
    valTagUppp = tagmouseIdUp.slice(16, tagmouseIdUp.length);
  }else if(str === "sta"){
    console.log("AaaaoYYYYnnaaa12");
    valTgUp = tagmouseIdUp.slice(0, 8);
    valTagUppp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
    if(valTgUp === "start_me"){
      console.log("AaaaoYYYYnnaaa13");
      valTgUp = tagmouseIdUp.slice(0, 13);
      valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
    }else if(valTgUp === "start_si"){
      console.log("AaaaoYYYYnnaaa14");
      valTgUp = tagmouseIdUp.slice(0, 12);
      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);}
    else if(valTgUp === "start_ti"){
      console.log("AaaaoYYYYnnaaa14");
      valTgUp = tagmouseIdUp.slice(0, 12);
      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
    }else if(valTgUp === "startnow"){
      console.log("AaaaoYYYYnnaaa15");
      valTgUp = tagmouseIdUp.slice(0, 8);
      valTagUppp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
    }
 

  }else if(str === "cat"){
    valTgUp = tagmouseIdUp.slice(0, 8);
    if (valTgUp === "catch_li") {
      console.log("AaaaoYYYYnnaaa16");
      valTgUp = tagmouseIdUp.slice(0, 10);
      valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
    }else if (valTgUp === "catch_me") {
      console.log("AaaaoYYYYnnaaa17");
      valTgUp = tagmouseIdUp.slice(0, 13);
      valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
    }else if (valTgUp === "catch_si") {
      console.log("AaaaoYYYYnnaaa18");
      valTgUp = tagmouseIdUp.slice(0, 12);
      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
    }
    
  }else if(str === "thr"){

    valTgUp = tagmouseIdUp.slice(0, 8);
    if (valTgUp === "throw_li") {
      console.log("AaaaoYYYYnnaaa19");
      valTgUp = tagmouseIdUp.slice(0, 10);
      valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
    }else if (valTgUp === "throw_me") {
      console.log("AaaaoYYYYnnaaa20");
      valTgUp = tagmouseIdUp.slice(0, 13);
      valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
    }else if (valTgUp === "throw_si") {
      console.log("AaaaoYYYYnnaaa21");
      valTgUp = tagmouseIdUp.slice(0, 12);
      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
    }
    
  }else if(str === "tim"){
    console.log("AaaaoYYYYnnaaa22");
    valTgUp = tagmouseIdUp.slice(0, 5);
    valTagUppp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
  }else if(str === "end"){
    
    valTgUp = tagmouseIdUp.slice(0, 6);
    if (valTgUp === "end_er") {
      console.log("AaaaoYYYYnnaaa23");
      valTgUp = tagmouseIdUp.slice(0, 9);
      valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
    }else if (valTgUp === "end_me") {
      console.log("AaaaoYYYYnnaaa24");
      valTgUp = tagmouseIdUp.slice(0, 11);
      valTagUppp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
    }else if (valTgUp === "end_si") {
      console.log("AaaaoYYYYnnaaa25");
      valTgUp = tagmouseIdUp.slice(0, 10);
      valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
    }
    else if (valTgUp === "endnow") {
      console.log("AaaaoYYYYnnaaa26");
      valTgUp = tagmouseIdUp.slice(0, 6);
      valTagUppp = tagmouseIdUp.slice(6, tagmouseIdUp.length);
    }

  }else if(str === "ter"){
    console.log("AaaaoYYYYnnaaa27");
    valTgUp = tagmouseIdUp.slice(0, 19);
    valTagUppp = tagmouseIdUp.slice(19, tagmouseIdUp.length);
  }

  else if(str === "poo" || str === "lan"){
    console.log("AaaaoYYYYnnaaa28");
    valTgUp = tagmouseIdUp.slice(0, 4);
    valTagUppp = tagmouseIdUp.slice(4, tagmouseIdUp.length);
  }


}



function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("POST", "https://127.0.0.1:8000/groupe/edit/12/4", true);
  xhttp.send();
}


function deleteElemAll(e){

  $.ajax({  
    url:        '/pool/delete/'+org_Id+'',  
    type:       'GET',  
    // data :  {
    //   orgId : org_Id,
    // }, 
    // dataType:   'json', 
    async:      true, 
    success: function(data, status) {
      let text = "Voulez-vous supprimer tous les pool, lane et outls ?"
      if(confirm(text) === true){
        location.reload();
        console.log("FORMATAGE SUCCESSFUL");
      }
      
    },
      error : function(xhr, textStatus, errorThrown) {  
        console.log("formtage error ajax");  
     }  
    });
}

var postX = 0;
var postY = 0;

var editKk = null;
var successPool = false;

var poolVal = 0;
var laneVal = 0;

var k = 0;

var outilsSaveArrAvant = outils;
var outilsSaveArr2Avant = outils;

var outilsSaveArr = [];
  var outilsSaveArr2 = [];

  var nameInit = [];
  var nameEnd = [];
  var nameInit0 = [];
  var nameEnd0 = [];

function lets(e){
  var objDiv = document.getElementById("outputContent");
objDiv.scrollTop = objDiv.scrollHeight;


  // console.log("xinit : "+xInit)
  nameInit = initName.slice();
  nameEnd = endName.slice();

  nameInit0 = initName.slice();
  nameEnd0 = endName.slice();

   outilsSaveArr = outils.slice();
   outilsSaveArr2 = outils.slice();

  var urlScript = null;
  

  console.log("poolSave : "+poolSave);
  
  poolHeight.push(poolHeightSave);
  console.log("poolHeight : "+poolHeight);
  poolWidth.push(poolWidthSave);
  console.log("poolWidth : "+poolWidth);

  for (let index = 0; index < poolSave.length; index++) {
    if (poolName.length != poolSave.length) {
      alert("Veuillez remplir tous les noms du Pool")
      return;
    }
  }
  for (let j = 0; j < laneSave.length; j++) {
    if (laneName.length != laneSave.length) {
      alert("Veuillez remplir tous les noms du Lane");
      return;
    }
  }

  for (let m = 0; m < outilsSaveArr.length; m++) {
    if ($('#lbl'+outilsSaveArr[k]).text() === null) {
      alert("Veuillez remplir tous les noms");
      return;
      
    }
  }

  $.ajax({  
    url:        '/pool/get/'+org_Id,  
    type:       'GET',  
    // data :  {
    //   orgId : '1',
    //   namePool : 'zareo',
    // }, 
    dataType:   'json', 
    async:      true, 
    success: function(data0, status) { 

      if (data0.length != 0) {

        
        $.ajax({  
          url:        '/pool/delete/'+org_Id+'',  
          type:       'GET',  
          // data :  {
          //   orgId : org_Id,
          // }, 
          // dataType:   'json', 
          async:      true, 
          success: function(data, status) {
            console.log("FORMATAGE SUCCESSFUL");
            
            $('#outputContent').append("<li> FORMATAGE SUCCESSFUL </li>"); 

            for (let index = 0; index < poolSave.length; index++) {
    
              const namePool = document.getElementById("nameTxt"+poolSave[index]).value;
              console.log("poolName : "+poolName);

              const poolKque = document.getElementById(poolSave[index]);
           var poolWidthPart = poolKque.getBoundingClientRect().width;
           var poolHeightPart = poolKque.getBoundingClientRect().height;

              urlScript = "/pool";
              
              dat = {
                        orgId : org_Id,
                        namePool: poolName[index],
                        widthPool : poolWidthPart,
                        heightPool : poolHeightPart,
              }
              console.log("urlScript : "+urlScript);
            $.ajax({  
              url:        urlScript,  
              type:       'POST',  
              data :  dat, 
              // dataType:   'json', 
              beforeSend: function() {
                $("#bgLoading").show();
             },
              success: function(data, status) {  
                $("#bgLoading").hide();
                console.log("Pool successful");

                $('#outputContent').append("<li> Pool successful <li>");
                
                successPool = true;
        
                const poolKque = document.getElementById(poolSave[index]);
           var poolWidthPart = poolKque.getBoundingClientRect().width;
           var poolHeightPart = poolKque.getBoundingClientRect().height;
           var poolTopPart = poolKque.getBoundingClientRect().y;
           var poolLeftPart = poolKque.getBoundingClientRect().x;
        
           var diffHeightPlusY = poolHeightPart + poolTopPart;
           var diffHeightPlusX = poolWidthPart + poolLeftPart;
        
           for (let j = 0; j < laneSave.length; j++) {
            
            const laneKque = document.getElementById(laneSave[j]);
            var laneTopPart = laneKque.getBoundingClientRect().y;
            var laneLeftPart = laneKque.getBoundingClientRect().x;
            var laneWidthPart = laneKque.getBoundingClientRect().width;
            var laneHeightPart = laneKque.getBoundingClientRect().height;
        
            var LanediffHeightPlusY = laneHeightPart + laneTopPart;
            var LanediffHeightPlusX = laneWidthPart + laneLeftPart;
        
        
            laneHeight.push(laneHeightSave);
          console.log("laneHeight : "+laneHeight);
          laneWidth.push(laneWidthSave);
          console.log("laneWidth : "+laneWidth);
          console.log("laneName["+j+"] : "+laneName[j]);
          console.log("laneWidth["+j+"] : "+laneWidth[j]);
          console.log("laneHeight["+j+"] : "+laneHeight[j]);
        
            if (laneTopPart >= poolTopPart && laneTopPart <= diffHeightPlusY 
              && laneLeftPart >= poolLeftPart && laneLeftPart <= diffHeightPlusX) {
              
                console.log("pool : "+poolSave[index]+" lane : "+laneSave[j]);
        
                $.ajax({  
                  url:        '/pool/get/'+org_Id+'/'+poolName[index]+'',  
                  type:       'GET',  
                  // data :  {
                  //   orgId : '1',
                  //   namePool : 'zareo',
                  // }, 
                  dataType:   'json', 
                  async:      true, 
                  success: function(data, status) { 
                    for (let i = 0; i < data.length; i++) {
                      console.log("data: "+data[i].idPool);
                      poolVal = data[i].idPool;
                      
                    }
                    const laneKque = document.getElementById(laneSave[j]);
                    var laneWidthPart = laneKque.getBoundingClientRect().width;
                    var laneHeightPart = laneKque.getBoundingClientRect().height;
        
                    datt = {
                      poolid : poolVal,
                      nameLane : laneName[j],
                      widthLane : laneWidthPart,
                      heightLane : laneHeightPart,
                    }
              
                    $.ajax({  
                      
                      url:        '/lane',  
                      type:       'POST',  
                      data :  datt, 
                      // dataType:   'json', 
                      beforeSend: function() {
                        $("#bgLoading").show();
                     },
                      success: function(data, status) {  
                        console.log("Lane successful");
                        $("#bgLoading").hide();
                        $('#outputContent').append("<li> Lane successful </li>");


                        console.log("poolVal: "+poolVal);
        
                        $.ajax({  
                          url:        '/lane/get/'+poolVal+'/'+laneName[j]+'',  
                          type:       'GET',  
                          // data :  {
                          //   orgId : '1',
                          //   namePool : 'zareo',
                          // }, 
                          dataType:   'json', 
                          async:      true, 
                          beforeSend: function() {
                            $("#bgLoading").show();
                         },
                          success: function(data, status) { 
                            $("#bgLoading").hide();
                            var breakIncrem = false;
                            for (let i = 0; i < data.length; i++) {
                              console.log("data lane: "+data[i].idLane);
                              laneVal = data[i].idLane;

                              

                             
        
                              for (let m = 0; m < outilsSaveArr.length; m++) {

                                 k = m;
                                const tagmouseIdUp = outilsSaveArr[k];

                                console.log("outilsSaveArr["+k+"] str: "+outilsSaveArr[k])
                                var str = outilsSaveArr[k].slice(0, 3);
                                var valTgUp = 0;
                                var tgIDuP = null;
                                var valTagUppp = 0
                                for (let d = 0; d < positArrayX.length; d++) {
                                  for (let b = 0; b < positArrayY.length; b++) {

                                    breakIncrem = false;
                                  var strPositX = positArrayX[d].slice(0, 3);
                                  var strPositY = positArrayY[b].slice(0, 3);

                                  var strPostX = positArrayX[d].slice(0, outilsSaveArr[k].length);
                                  var strPostY = positArrayY[b].slice(0, outilsSaveArr[k].length);

                                  console.log("strPostX : "+strPostX);
                                  console.log("strPostY : "+strPostY);

                                  
                                if ((strPositX === str || strPositY === str) && b === d && 
                                (strPostX === outilsSaveArr[k] && strPostY === outilsSaveArr[k])) {
                                  
                                
                            
                                // if (str === "poo") {
                                  
                                // }
                                const postId = document.getElementById(outilsSaveArr[k]);

                                console.log("outilsSaveArr["+k+"] : "+outilsSaveArr[k]);
                                console.log("positArrayX["+d+"] : "+positArrayX[d]);
                                console.log("positArrayY["+b+"] : "+positArrayY[b]);
                                
                                var postElX = positArrayX[d].slice(outilsSaveArr[k].length+1, positArrayX[d].length);
                                var postElY = positArrayY[b].slice(outilsSaveArr[k].length+1, positArrayY[b].length);
        
                                postX = postId.getBoundingClientRect().x;
                                postY = postId.getBoundingClientRect().y;

                                

                                console.log("postElX : "+postElX);
                                console.log("postElY : "+postElY);

                                console.log("postX : "+postX);
                                console.log("postY : "+postY);
                                console.log("laneTopPart : "+laneTopPart+", LanediffHeightPlusY : "+LanediffHeightPlusY);
                                console.log("laneLeftPart : "+laneLeftPart+", LanediffHeightPlusX : "+LanediffHeightPlusX);
                              
                               
              
                                // if (postY >= laneTopPart && postY <= LanediffHeightPlusY 
                                //   && postX >= laneLeftPart && postX <= LanediffHeightPlusX 
                                //   && str != "poo" && str != "lan"){
                            
                                  console.log("pool2 : "+poolSave[index]+" lane2 : "+laneSave[j]+" outilsSaveArr : "+outilsSaveArr[k]);
        
                                  // for (let u = 0; u < outilsSaveArrName.length; u++) {
        
                                  positX = postElX;
                                  positY = postElY;
        
                                    
                                    // editKk = "lbl"+outilsSaveArr[k];
                                    editKk = $('#lbl'+outilsSaveArr[k]).text()
                                    console.log("lbl = "+editKk);
                                    var zzz = editKk;
                                
                                    
                                    console.log("zzz = "+zzz);
                                
                                   
                                    console.log("str: "+str);
                                    var dat = [];
                                   
                                    if(str === "AND"){
                                      console.log("AaaaoYYYYnnaaa2");
                                      valTgUp = tagmouseIdUp.slice(0, 3);
                                      valTagUppp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/gateway";
                                      dat = {
                                                        laneId : laneVal,
                                                nameGateway: zzz,
                                                typeGateway : valTgUp,
                                                topGateway : positY,
                                                leftGateway: positX,
                                      }
                                    }else if(str === "inc"){
                                      console.log("AaaaoYYYYnnaaa3");
                                      valTgUp = tagmouseIdUp.slice(0, 9);
                                      valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/gateway";
                                      dat = {
                                                        laneId : laneVal,
                                                nameGateway: zzz,
                                                typeGateway : valTgUp,
                                                topGateway : positY,
                                                leftGateway: positX,
                                      }
                                    }else if(str === "XOR"){
                                      console.log("AaaaoYYYYnnaaa4");
                                      valTgUp = tagmouseIdUp.slice(0, 3);
                                      valTagUppp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/gateway";
                                      dat = {
                                                laneId : laneVal,
                                                nameGateway: zzz,
                                                typeGateway : valTgUp,
                                                topGateway : positY,
                                                leftGateway: positX,
                                      }
                                    }else if(str === "abs"){
                                      console.log("AaaaoYYYYnnaaa5");
                                      valTgUp = tagmouseIdUp.slice(0, 13);
                                      valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/task";
                                      dat = {
                                                laneId : laneVal,
                                                nameTask: zzz,
                                                typeTask : valTgUp,
                                                topTask : positY,
                                                leftTask: positX,
                                      }
                                
                                       
                                    }else if(str === "hum"){
                                      console.log("AaaaoYYYYnnaaa6");
                                      valTgUp = tagmouseIdUp.slice(0, 5);
                                      valTagUppp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/task";
                                      dat = {
                                                laneId : laneVal,
                                                nameTask: zzz,
                                                typeTask : valTgUp,
                                                topTask : positY,
                                                leftTask: positX,
                                      }
                                
                                      
                                
                                
                                    }else if(str === "rec"){
                                      console.log("AaaaoYYYYnnaaa6");
                                      valTgUp = tagmouseIdUp.slice(0, 12);
                                      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/task";
                                      dat = {
                                                laneId : laneVal,
                                                nameTask: zzz,
                                                typeTask : valTgUp,
                                                topTask : positY,
                                                leftTask: positX,
                                      }
                                
                                      
                                
                                
                                    }else if(str === "scr"){
                                      console.log("AaaaoYYYYnnaaa7");
                                      valTgUp = tagmouseIdUp.slice(0, 11);
                                      valTagUppp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/task";
                                      dat = {
                                                laneId : laneVal,
                                                nameTask: zzz,
                                                typeTask : valTgUp,
                                                topTask : positY,
                                                leftTask: positX,
                                      }
                                 
                                    }else if(str === "sen"){
                                      console.log("AaaaoYYYYnnaaa8");
                                      valTgUp = tagmouseIdUp.slice(0, 9);
                                      valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/task";
                                      dat = {
                                                laneId : laneVal,
                                                nameTask: zzz,
                                                typeTask : valTgUp,
                                                topTask : positY,
                                                leftTask: positX,
                                      }
                                
                                    }else if(str === "ser"){
                                      console.log("AaaaoYYYYnnaaa9");
                                      valTgUp = tagmouseIdUp.slice(0, 12);
                                      valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/task";
                                      dat = {
                                                laneId : laneVal,
                                                nameTask: zzz,
                                                typeTask : valTgUp,
                                                topTask : positY,
                                                leftTask: positX,
                                      }
                                
                                    }else if(str === "Cal"){
                                      console.log("AaaaoYYYYnnaaa10");
                                      valTgUp = tagmouseIdUp.slice(0, 13);

                                      breakIncrem = true;

                                      console.log("valTgUp Call-activ: "+valTgUp);
                                      valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                                
                                      urlScript = "/task";
                                      dat = {
                                                laneId : laneVal,
                                                nameTask: zzz,
                                                typeTask : valTgUp,
                                                topTask : positY,
                                                leftTask: positX,
                                      }
                                
                                     
                                    }else if(str === "Eve"){
                                      console.log("AaaaoYYYYnnaaa11");
                                      valTgUp = tagmouseIdUp.slice(0, 16);
                                      valTagUppp = tagmouseIdUp.slice(16, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/task";
                                      dat = {
                                                laneId : laneVal,
                                                nameTask: zzz,
                                                typeTask : valTgUp,
                                                topTask : positY,
                                                leftTask: positX,
                                      }
                                
                                    
                                     
                                    }else if(str === "sta"){
                                      console.log("AaaaoYYYYnnaaa12");
                                      valTgUp = outilsSaveArr[k].slice(0, 8);
                                      // valTagUppp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
                                      if(valTgUp === "start_me"){
                                        console.log("AaaaoYYYYnnaaa13");
                                        valTgUp = tagmouseIdUp.slice(0, 13);
                                        valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/start_ev";
                                        dat = {
                                                  laneId : laneVal,
                                                nameStart: zzz,
                                                typeStart : valTgUp,
                                                topStart : positY,
                                                leftStart: positX,
                                      }
                                      }else if(valTgUp === "start_si"){
                                        console.log("AaaaoYYYYnnaaa14");
                                        valTgUp = tagmouseIdUp.slice(0, 12);
                                        valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/start_ev";
                                        dat = {
                                                  laneId : laneVal,
                                                nameStart: zzz,
                                                typeStart : valTgUp,
                                                topStart : positY,
                                                leftStart: positX,
                                      }
                                    }else if(valTgUp === "start_ti"){
                                        console.log("AaaaoYYYYnnaaa14");
                                        valTgUp = tagmouseIdUp.slice(0, 12);
                                        valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/start_ev";
                                        dat = {
                                                  laneId : laneVal,
                                                nameStart: zzz,
                                                typeStart : valTgUp,
                                                topStart : positY,
                                                leftStart: positX,
                                      }
                                      }else if(valTgUp === "startnow"){
                                        console.log("AaaaoYYYYnnaaa15");
                                        valTgUp = tagmouseIdUp.slice(0, 8);
                                        valTagUppp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/start_ev";
                                        dat = {
                                                  laneId : laneVal,
                                                nameStart: zzz,
                                                typeStart : valTgUp,
                                                topStart : positY,
                                                leftStart: positX,
                                      }
                                      }
                                   
                                  
                                    }else if(str === "cat"){
                                      console.log("Aaaao defined");
                                      valTgUp = outilsSaveArr[k].slice(0, 8);
                                      console.log("Aaaao valTgUp: "+valTgUp);
                                      if (valTgUp === "catch_li") {
                                        console.log("AaaaoYYYYnnaaa16");
                                        valTgUp = tagmouseIdUp.slice(0, 10);
                                        valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/inter_ev";
                                        dat = {
                                                  laneId : laneVal,
                                                nameInter: zzz,
                                                typeInter : valTgUp,
                                                topInter : positY,
                                                leftInter: positX,
                                      }
                                      }else if (valTgUp === "catch_me") {
                                        console.log("AaaaoYYYYnnaaa17");
                                        valTgUp = tagmouseIdUp.slice(0, 13);
                                        valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/inter_ev";
                                        dat = {
                                                  laneId : laneVal,
                                                nameInter: zzz,
                                                typeInter : valTgUp,
                                                topInter : positY,
                                                leftInter: positX,
                                      }
                                      }else if (valTgUp === "catch_si") {
                                        console.log("AaaaoYYYYnnaaa18");
                                        valTgUp = tagmouseIdUp.slice(0, 12);
                                        valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/inter_ev";
                                        dat = {
                                                  laneId : laneVal,
                                                nameInter: zzz,
                                                typeInter : valTgUp,
                                                topInter : positY,
                                                leftInter: positX,
                                      }
                                      }
                                      
                                    }else if(str === "thr"){
                                  
                                      valTgUp = tagmouseIdUp.slice(0, 8);
                                      if (valTgUp === "throw_li") {
                                        console.log("AaaaoYYYYnnaaa19");
                                        valTgUp = tagmouseIdUp.slice(0, 10);
                                        valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/inter_ev";
                                        dat = {
                                                  laneId : laneVal,
                                                nameInter: zzz,
                                                typeInter : valTgUp,
                                                topInter : positY,
                                                leftInter: positX,
                                      }
                                      }else if (valTgUp === "throw_me") {
                                        console.log("AaaaoYYYYnnaaa20");
                                        valTgUp = tagmouseIdUp.slice(0, 13);
                                        valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/inter_ev";
                                        dat = {
                                                laneId : laneVal,
                                                nameInter: zzz,
                                                typeInter : valTgUp,
                                                topInter : positY,
                                                leftInter: positX,
                                      }
                                      }else if (valTgUp === "throw_si") {
                                        console.log("AaaaoYYYYnnaaa21");
                                        valTgUp = tagmouseIdUp.slice(0, 12);
                                        valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/inter_ev";
                                        dat = {
                                                laneId : laneVal,
                                                nameInter: zzz,
                                                typeInter : valTgUp,
                                                topInter : positY,
                                                leftInter: positX,
                                      }
                                      }
                                      
                                    }else if(str === "tim"){
                                      console.log("AaaaoYYYYnnaaa22");
                                      valTgUp = tagmouseIdUp.slice(0, 5);
                                      valTagUppp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/inter_ev";
                                      dat = {
                                                laneId : laneVal,
                                                nameInter: zzz,
                                                typeInter : valTgUp,
                                                topInter : positY,
                                                leftInter: positX,
                                      }
                                    }else if(str === "end"){
                                      
                                      valTgUp = outilsSaveArr[k].slice(0, 6);
                                      if (valTgUp === "end_er") {
                                        console.log("AaaaoYYYYnnaaa23");
                                        valTgUp = tagmouseIdUp.slice(0, 9);
                                        valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/stop_ev";
                                      dat = {
                                                laneId : laneVal,
                                                nameStop: zzz,
                                                typeStop : valTgUp,
                                                topStop : positY,
                                                leftStop: positX,
                                      }
                                      }else if (valTgUp === "end_me") {
                                        console.log("AaaaoYYYYnnaaa24");
                                        valTgUp = tagmouseIdUp.slice(0, 11);
                                        valTagUppp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/stop_ev";
                                      dat = {
                                                laneId : laneVal,
                                                nameStop: zzz,
                                                typeStop : valTgUp,
                                                topStop : positY,
                                                leftStop: positX,
                                      }
                                      }else if (valTgUp === "end_si") {
                                        console.log("AaaaoYYYYnnaaa25");
                                        valTgUp = tagmouseIdUp.slice(0, 10);
                                        valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/stop_ev";
                                      dat = {
                                                laneId : laneVal,
                                                nameStop: zzz,
                                                typeStop : valTgUp,
                                                topStop : positY,
                                                leftStop: positX,
                                      }
                                      }
                                      else if (valTgUp === "endnow") {
                                        console.log("AaaaoYYYYnnaaa26");
                                        valTgUp = tagmouseIdUp.slice(0, 6);
                                        valTagUppp = tagmouseIdUp.slice(6, tagmouseIdUp.length);
                                
                                        breakIncrem = true;

                                        urlScript = "/stop_ev";
                                      dat = {
                                                laneId : laneVal,
                                                nameStop: zzz,
                                                typeStop : valTgUp,
                                                topStop : positY,
                                                leftStop: positX,
                                      }
                                      }
                                  
                                    }else if(str === "ter"){
                                      console.log("AaaaoYYYYnnaaa27");
                                      valTgUp = tagmouseIdUp.slice(0, 19);
                                      valTagUppp = tagmouseIdUp.slice(19, tagmouseIdUp.length);
                                
                                      breakIncrem = true;

                                      urlScript = "/stop_ev";
                                      dat = {
                                                laneId : laneVal,
                                                nameStop: zzz,
                                                typeStop : valTgUp,
                                                topStop : positY,
                                                leftStop: positX,
                                      }
                                    }
                                  
                                   
                                   
                                
                                    
                                    console.log("urlScript : "+urlScript);
                                    $.ajax({  
                                      url:        urlScript,  
                                      type:       'POST',  
                                      data :  dat, 
                                      // dataType:   'json', 
                                      success: function(data, status) {  
                                        console.log("outilsSaveArr successful")
                                        $('#outputContent').append("<li> outilsSaveArr successful </li>");
                                      },  
                                      error : function(xhr, textStatus, errorThrown) {  
                                         console.log('outilsSaveArr error failed.'); 
                                         $('#outputContent').append("<li> outilsSaveArr error failed. </li>"); 
                                      }  
                                   }); 
            
                                  console.log("laneVal : "+laneVal);
                                  console.log("name : "+zzz);
                                  console.log("initName.length : "+initName.length);
                                  console.log("type : "+valTgUp);
                                  console.log("positY : "+positY);
                                  console.log("positX : "+positX);
                                  console.log("xInit.length : "+xInit.length);
                                  console.log("initName.length : "+initName.length);
            
                               
                                   
                                   
                                  }

                                  if (breakIncrem === true) {
                                    break;
                                  }
                                }

                                  if (breakIncrem === true) {
                                    break;
                                  }
                             
                              }

                              // if (breakIncrem === true) {
                              //   break;
                              // }else{
                              //   breakIncrem === false;
                              // }
                            }
                            
                              for (let i = 0; i < nameInit0.length; i++) {
                                  
                                for (let j = 0; j < nameEnd0.length; j++) {
                                  if(i === j){
                                    
                                    console.log("Name : "+initName[i]);
                                    console.log("xinit : "+xInit[i]);
                                    console.log("xend : "+xEnd[i]);
                            
                                    
                                    // $(document).ready(function(){    
                                      // $("#loadstudent").on("click", function(event){  
                                         $.ajax({  
                                            url:        '/flow',  
                                            type:       'POST',  
                                            data :  {
                                              laneId : laneVal,
                                              nameFlow: "test",
                                              initX: xInit[i],
                                              initY : yInit[i],
                                              initName : initName[i],
                                              endX: xEnd[i],
                                              endY : yEnd[i],
                                              endName : endName[i]
                                            }, 
                                            // dataType:   'json', 
                                            beforeSend: function() {
                                              $("#bgLoading").show();
                                           },
                                            success: function(data, status) { 
                                              $("#bgLoading").hide();
                                              console.log("flow successful")
                                              $('#outputContent').append("<li> flow successful </li>");
                                            },  
                                            error : function(xhr, textStatus, errorThrown) {  
                                               console.log('flow error failed.'); 
                                               
                                        $('#outputContent').append("<li> flow error failed. </li>");
                                            }  
                                         });  
                                      // });  
                                    // });  
                                  }
                                  
                                
                                
                              }
                          
                          
                            }
        
                            // if (breakIncrem === true) {
                            //   break;
                            // }else{
                            //   breakIncrem === false;
                            // }
                            nameEnd0.length = 0;
                            nameInit0.length = 0;
                              
                            }

                            outilsSaveArr.length = 0
                          },
                            error : function(xhr, textStatus, errorThrown) {  
                              console.log("tools error ajax");  
                              $('#outputContent').append("<li> tools error ajax </li>");
                           }  
                          });
                          
        
        
        
        
                        
        
                        
                      },  
                      error : function(xhr, textStatus, errorThrown) {  
                         console.log('Lane Ajax request failed.'); 
                          $('#outputContent').append("<li> Lane Ajax request failed. </li>");
                      }  
                   }); 
                     
                    
                  },  
                  error : function(xhr, textStatus, errorThrown) {  
                     console.log("error ajax");
                     $('#outputContent').append("<li> error ajax </li>"); 
                  }  
               }); 
               var datt = [];
               
               
        
            }
          
            
           }
        
              },  
              error : function(xhr, textStatus, errorThrown) {  
                 console.log('Pool Ajax request failed.');
                 $('#outputContent').append("<li> Pool Ajax request failed </li>");  
                 successPool = false;
              }  
           }); 
          }
              
          },  
          error : function(xhr, textStatus, errorThrown) {  
            console.log("FORMATAGE error"); 
            $('#outputContent').append("<li> FORMATAGE error </li>"); 
          }  
          }); 
          
      }else{

       

        for (let index = 0; index < poolSave.length; index++) {
    
          const namePool = document.getElementById("nameTxt"+poolSave[index]).value;
          console.log("poolName : "+poolName);
          console.log("widthPool : "+poolWidth[index]);
          console.log("heightPool : "+poolHeight[index]);

          const poolKque = document.getElementById(poolSave[index]);
           var poolWidthPart = poolKque.getBoundingClientRect().width;
           var poolHeightPart = poolKque.getBoundingClientRect().height;

          urlScript = "/pool";
          dat = {
                    orgId : org_Id,
                    namePool: poolName[index],
                    widthPool : poolWidthPart,
                    heightPool : poolHeightPart,
          }
          console.log("urlScript : "+urlScript);
        $.ajax({  
          url:        urlScript,  
          type:       'POST',  
          data :  dat, 
          // dataType:   'json', 
          beforeSend: function() {
            $("#bgLoading").show();
         },
          success: function(data, status) {
            $("#bgLoading").hide();  
            console.log("Pool successful");
            $('#outputContent').append("<li> Pool successful </li>");

            successPool = true;
    
            const poolKque = document.getElementById(poolSave[index]);
       var poolWidthPart = poolKque.getBoundingClientRect().width;
       var poolHeightPart = poolKque.getBoundingClientRect().height;
       var poolTopPart = poolKque.getBoundingClientRect().y;
       var poolLeftPart = poolKque.getBoundingClientRect().x;
    
       var diffHeightPlusY = poolHeightPart + poolTopPart;
       var diffHeightPlusX = poolWidthPart + poolLeftPart;
    
       for (let j = 0; j < laneSave.length; j++) {
        
        const laneKque = document.getElementById(laneSave[j]);
        var laneTopPart = laneKque.getBoundingClientRect().y;
        var laneLeftPart = laneKque.getBoundingClientRect().x;
        var laneWidthPart = laneKque.getBoundingClientRect().width;
        var laneHeightPart = laneKque.getBoundingClientRect().height;
    
        var LanediffHeightPlusY = laneHeightPart + laneTopPart;
        var LanediffHeightPlusX = laneWidthPart + laneLeftPart;
    
    
        laneHeight.push(laneHeightSave);
      console.log("laneHeight : "+laneHeight);
      laneWidth.push(laneWidthSave);
      console.log("laneWidth : "+laneWidth);
      console.log("laneName["+j+"] : "+laneName[j]);
      console.log("laneWidth["+j+"] : "+laneWidth[j]);
      console.log("laneHeight["+j+"] : "+laneHeight[j]);
    
        if (laneTopPart >= poolTopPart && laneTopPart <= diffHeightPlusY 
          && laneLeftPart >= poolLeftPart && laneLeftPart <= diffHeightPlusX) {
          
            console.log("pool : "+poolSave[index]+" lane : "+laneSave[j]);
    
            $.ajax({  
              url:        '/pool/get/'+org_Id+'/'+poolName[index]+'',  
              type:       'GET',  
              // data :  {
              //   orgId : '1',
              //   namePool : 'zareo',
              // }, 
              dataType:   'json', 
              async:      true, 
              success: function(data, status) { 
                for (let i = 0; i < data.length; i++) {
                  console.log("data: "+data[i].idPool);
                  poolVal = data[i].idPool;
                  
                }

                const laneKque = document.getElementById(laneSave[j]);
                var laneWidthPart = laneKque.getBoundingClientRect().width;
                var laneHeightPart = laneKque.getBoundingClientRect().height;
    
                datt = {
                  poolid : poolVal,
                  nameLane : laneName[j],
                  widthLane : laneWidthPart,
                  heightLane : laneHeightPart,
                }
          
                $.ajax({  
                  
                  url:        '/lane',  
                  type:       'POST',  
                  data :  datt, 
                  // dataType:   'json',
                  beforeSend: function() {
                    $("#bgLoading").show();
                 }, 
                  success: function(data, status) { 
                    $("#bgLoading").hide(); 
                    console.log("Lane successful");
                    $('#outputContent').append("<li> Lane successful </li>");

                    console.log("poolVal: "+poolVal);
    
                    $.ajax({  
                      url:        '/lane/get/'+poolVal+'/'+laneName[j]+'',  
                      type:       'GET',  
                      // data :  {
                      //   orgId : '1',
                      //   namePool : 'zareo',
                      // }, 
                      dataType:   'json', 
                      async:      true, 
                      success: function(data, status) { 
                        var breakIncrem1 = false;

                        for (let i = 0; i < data.length; i++) {
                          console.log("data lane: "+data[i].idLane);
                          laneVal = data[i].idLane;

                          

                          
    
                          for (let s = 0; s < outilsSaveArr2.length; s++) {
                            
                            k = s;
                            const tagmouseIdUp = outilsSaveArr2[k];

                            console.log("outilsSaveArr2["+k+"] str: "+outilsSaveArr2[k])
                            var str = outilsSaveArr2[k].slice(0, 3);
                            var valTgUp = 0;
                            var tgIDuP = null;
                            var valTagUppp = 0
                            for (let d = 0; d < positArrayX.length; d++) {
                              for (let b = 0; b < positArrayY.length; b++) {
                                breakIncrem1 = false;

                              var strPositX = positArrayX[d].slice(0, 3);
                              var strPositY = positArrayY[b].slice(0, 3);

                              var strPostX = positArrayX[d].slice(0, outilsSaveArr2[k].length);
                                  var strPostY = positArrayY[b].slice(0, outilsSaveArr2[k].length);

                                  console.log("strPostX : "+strPostX);
                                  console.log("strPostY : "+strPostY);

           
                              
                            if ((strPositX === str || strPositY === str) && b === d && 
                            (strPostX === outilsSaveArr2[k] && strPostY === outilsSaveArr2[k])) {
                              
                            
                        
                            // if (str === "poo") {
                              
                            // }
                            const postId = document.getElementById(outilsSaveArr2[k]);

                            console.log("outilsSaveArr2["+k+"] : "+outilsSaveArr2[k]);

                            console.log("positArrayX["+d+"] : "+positArrayX[d]);
                            console.log("positArrayY["+b+"] : "+positArrayY[b]);
                            
                            var postElX = positArrayX[d].slice(outilsSaveArr2[k].length+1, positArrayX[d].length);
                            var postElY = positArrayY[b].slice(outilsSaveArr2[k].length+1, positArrayY[b].length);
    
                            postX = postId.getBoundingClientRect().x;
                            postY = postId.getBoundingClientRect().y;

                            console.log("postElX : "+postElX);
                            console.log("postElY : "+postElY);

                            console.log("postX : "+postX);
                            console.log("postY : "+postY);
                            console.log("laneTopPart : "+laneTopPart+", LanediffHeightPlusY : "+LanediffHeightPlusY);
                            console.log("laneLeftPart : "+laneLeftPart+", LanediffHeightPlusX : "+LanediffHeightPlusX);
                          
          
                            // if (postY >= laneTopPart && postY <= LanediffHeightPlusY 
                            //   && postX >= laneLeftPart && postX <= LanediffHeightPlusX 
                            //   && str != "poo" && str != "lan"){
                        
                              console.log("pool2 : "+poolSave[index]+" lane2 : "+laneSave[j]+" outilsSaveArr2 : "+outilsSaveArr2[k]);
    
                              // for (let u = 0; u < outilsSaveArr2Name.length; u++) {
    
                              positX = postElX;
                              positY = postElY;
    
                                
                                // editKk = "lbl"+outilsSaveArr2[k];
                                // console.log("lbl = "+editKk);
                                // var zzz = document.getElementById(editKk).value;
                                editKk = $('#lbl'+outilsSaveArr2[k]).text()
                                    console.log("lbl = "+editKk);
                                    var zzz = editKk;
                            
                                
                                console.log("zzz = "+zzz);
                            
                               
                                console.log("str: "+str);
                                var dat = [];
                               
                                if(str === "AND"){
                                  console.log("AaaaoYYYYnnaaa2");
                                  valTgUp = tagmouseIdUp.slice(0, 3);
                                  valTagUppp = tagmouseIdUp.slice(3, tagmouseIdUp.length);

                                  breakIncrem1 = true;

                                  urlScript = "/gateway";
                                  dat = {
                                                    laneId : laneVal,
                                            nameGateway: zzz,
                                            typeGateway : valTgUp,
                                            topGateway : positY,
                                            leftGateway: positX,
                                  }
                                }else if(str === "inc"){
                                  console.log("AaaaoYYYYnnaaa3");
                                  valTgUp = tagmouseIdUp.slice(0, 9);
                                  valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/gateway";
                                  dat = {
                                                    laneId : laneVal,
                                            nameGateway: zzz,
                                            typeGateway : valTgUp,
                                            topGateway : positY,
                                            leftGateway: positX,
                                  }
                                }else if(str === "XOR"){
                                  console.log("AaaaoYYYYnnaaa4");
                                  valTgUp = tagmouseIdUp.slice(0, 3);
                                  valTagUppp = tagmouseIdUp.slice(3, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/gateway";
                                  dat = {
                                            laneId : laneVal,
                                            nameGateway: zzz,
                                            typeGateway : valTgUp,
                                            topGateway : positY,
                                            leftGateway: positX,
                                  }
                                }else if(str === "abs"){
                                  console.log("AaaaoYYYYnnaaa5");
                                  valTgUp = tagmouseIdUp.slice(0, 13);
                                  valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/task";
                                  dat = {
                                            laneId : laneVal,
                                            nameTask: zzz,
                                            typeTask : valTgUp,
                                            topTask : positY,
                                            leftTask: positX,
                                  }
                            
                                   
                                }else if(str === "hum"){
                                  console.log("AaaaoYYYYnnaaa6");
                                  valTgUp = tagmouseIdUp.slice(0, 5);
                                  valTagUppp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/task";
                                  dat = {
                                            laneId : laneVal,
                                            nameTask: zzz,
                                            typeTask : valTgUp,
                                            topTask : positY,
                                            leftTask: positX,
                                  }
                            
                                  
                            
                            
                                }else if(str === "rec"){
                                  console.log("AaaaoYYYYnnaaa6");
                                  valTgUp = tagmouseIdUp.slice(0, 12);
                                  valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/task";
                                  dat = {
                                            laneId : laneVal,
                                            nameTask: zzz,
                                            typeTask : valTgUp,
                                            topTask : positY,
                                            leftTask: positX,
                                  }
                            
                                  
                            
                            
                                }else if(str === "scr"){
                                  console.log("AaaaoYYYYnnaaa7");
                                  valTgUp = tagmouseIdUp.slice(0, 11);
                                  valTagUppp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/task";
                                  dat = {
                                            laneId : laneVal,
                                            nameTask: zzz,
                                            typeTask : valTgUp,
                                            topTask : positY,
                                            leftTask: positX,
                                  }
                             
                                }else if(str === "sen"){
                                  console.log("AaaaoYYYYnnaaa8");
                                  valTgUp = tagmouseIdUp.slice(0, 9);
                                  valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/task";
                                  dat = {
                                            laneId : laneVal,
                                            nameTask: zzz,
                                            typeTask : valTgUp,
                                            topTask : positY,
                                            leftTask: positX,
                                  }
                            
                                }else if(str === "ser"){
                                  console.log("AaaaoYYYYnnaaa9");
                                  valTgUp = tagmouseIdUp.slice(0, 12);
                                  valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/task";
                                  dat = {
                                            laneId : laneVal,
                                            nameTask: zzz,
                                            typeTask : valTgUp,
                                            topTask : positY,
                                            leftTask: positX,
                                  }
                            
                                }else if(str === "Cal"){
                                  console.log("AaaaoYYYYnnaaa10");
                                  valTgUp = tagmouseIdUp.slice(0, 13);

                                  console.log("valTgUp Call-activ: "+valTgUp);
                                  valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/task";
                                  dat = {
                                            laneId : laneVal,
                                            nameTask: zzz,
                                            typeTask : valTgUp,
                                            topTask : positY,
                                            leftTask: positX,
                                  }
                            
                                 
                                }else if(str === "Eve"){
                                  console.log("AaaaoYYYYnnaaa11");
                                  valTgUp = tagmouseIdUp.slice(0, 16);
                                  valTagUppp = tagmouseIdUp.slice(16, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/task";
                                  dat = {
                                            laneId : laneVal,
                                            nameTask: zzz,
                                            typeTask : valTgUp,
                                            topTask : positY,
                                            leftTask: positX,
                                  }
                            
                                
                                 
                                }else if(str === "sta"){
                                  console.log("AaaaoYYYYnnaaa12");
                                  valTgUp = outilsSaveArr2[k].slice(0, 8);
                                  // valTagUppp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
                                  if(valTgUp === "start_me"){
                                    console.log("AaaaoYYYYnnaaa13");
                                    valTgUp = tagmouseIdUp.slice(0, 13);
                                    valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/start_ev";
                                    dat = {
                                              laneId : laneVal,
                                            nameStart: zzz,
                                            typeStart : valTgUp,
                                            topStart : positY,
                                            leftStart: positX,
                                  }
                                  }else if(valTgUp === "start_si"){
                                    console.log("AaaaoYYYYnnaaa14");
                                    valTgUp = tagmouseIdUp.slice(0, 12);
                                    valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/start_ev";
                                    dat = {
                                              laneId : laneVal,
                                            nameStart: zzz,
                                            typeStart : valTgUp,
                                            topStart : positY,
                                            leftStart: positX,
                                  }
                                }else if(valTgUp === "start_ti"){
                                    console.log("AaaaoYYYYnnaaa14");
                                    valTgUp = tagmouseIdUp.slice(0, 12);
                                    valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/start_ev";
                                    dat = {
                                              laneId : laneVal,
                                            nameStart: zzz,
                                            typeStart : valTgUp,
                                            topStart : positY,
                                            leftStart: positX,
                                  }
                                  }else if(valTgUp === "startnow"){
                                    console.log("AaaaoYYYYnnaaa15");
                                    valTgUp = tagmouseIdUp.slice(0, 8);
                                    valTagUppp = tagmouseIdUp.slice(8, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/start_ev";
                                    dat = {
                                              laneId : laneVal,
                                            nameStart: zzz,
                                            typeStart : valTgUp,
                                            topStart : positY,
                                            leftStart: positX,
                                  }
                                  }
                               
                              
                                }else if(str === "cat"){
                                  console.log("Aaaao defined");
                                  valTgUp = outilsSaveArr2[k].slice(0, 8);
                                  console.log("Aaaao valTgUp: "+valTgUp);
                                  if (valTgUp === "catch_li") {
                                    console.log("AaaaoYYYYnnaaa16");
                                    valTgUp = tagmouseIdUp.slice(0, 10);
                                    valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/inter_ev";
                                    dat = {
                                              laneId : laneVal,
                                            nameInter: zzz,
                                            typeInter : valTgUp,
                                            topInter : positY,
                                            leftInter: positX,
                                  }
                                  }else if (valTgUp === "catch_me") {
                                    console.log("AaaaoYYYYnnaaa17");
                                    valTgUp = tagmouseIdUp.slice(0, 13);
                                    valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/inter_ev";
                                    dat = {
                                              laneId : laneVal,
                                            nameInter: zzz,
                                            typeInter : valTgUp,
                                            topInter : positY,
                                            leftInter: positX,
                                  }
                                  }else if (valTgUp === "catch_si") {
                                    console.log("AaaaoYYYYnnaaa18");
                                    valTgUp = tagmouseIdUp.slice(0, 12);
                                    valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/inter_ev";
                                    dat = {
                                              laneId : laneVal,
                                            nameInter: zzz,
                                            typeInter : valTgUp,
                                            topInter : positY,
                                            leftInter: positX,
                                  }
                                  }
                                  
                                }else if(str === "thr"){
                              
                                  valTgUp = tagmouseIdUp.slice(0, 8);
                                  if (valTgUp === "throw_li") {
                                    console.log("AaaaoYYYYnnaaa19");
                                    valTgUp = tagmouseIdUp.slice(0, 10);
                                    valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/inter_ev";
                                    dat = {
                                              laneId : laneVal,
                                            nameInter: zzz,
                                            typeInter : valTgUp,
                                            topInter : positY,
                                            leftInter: positX,
                                  }
                                  }else if (valTgUp === "throw_me") {
                                    console.log("AaaaoYYYYnnaaa20");
                                    valTgUp = tagmouseIdUp.slice(0, 13);
                                    valTagUppp = tagmouseIdUp.slice(13, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/inter_ev";
                                    dat = {
                                            laneId : laneVal,
                                            nameInter: zzz,
                                            typeInter : valTgUp,
                                            topInter : positY,
                                            leftInter: positX,
                                  }
                                  }else if (valTgUp === "throw_si") {
                                    console.log("AaaaoYYYYnnaaa21");
                                    valTgUp = tagmouseIdUp.slice(0, 12);
                                    valTagUppp = tagmouseIdUp.slice(12, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/inter_ev";
                                    dat = {
                                            laneId : laneVal,
                                            nameInter: zzz,
                                            typeInter : valTgUp,
                                            topInter : positY,
                                            leftInter: positX,
                                  }
                                  }
                                  
                                }else if(str === "tim"){
                                  console.log("AaaaoYYYYnnaaa22");
                                  valTgUp = tagmouseIdUp.slice(0, 5);
                                  valTagUppp = tagmouseIdUp.slice(5, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/inter_ev";
                                  dat = {
                                            laneId : laneVal,
                                            nameInter: zzz,
                                            typeInter : valTgUp,
                                            topInter : positY,
                                            leftInter: positX,
                                  }
                                }else if(str === "end"){
                                  
                                  valTgUp = outilsSaveArr2[k].slice(0, 6);
                                  if (valTgUp === "end_er") {
                                    console.log("AaaaoYYYYnnaaa23");
                                    valTgUp = tagmouseIdUp.slice(0, 9);
                                    valTagUppp = tagmouseIdUp.slice(9, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/stop_ev";
                                  dat = {
                                            laneId : laneVal,
                                            nameStop: zzz,
                                            typeStop : valTgUp,
                                            topStop : positY,
                                            leftStop: positX,
                                  }
                                  }else if (valTgUp === "end_me") {
                                    console.log("AaaaoYYYYnnaaa24");
                                    valTgUp = tagmouseIdUp.slice(0, 11);
                                    valTagUppp = tagmouseIdUp.slice(11, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/stop_ev";
                                  dat = {
                                            laneId : laneVal,
                                            nameStop: zzz,
                                            typeStop : valTgUp,
                                            topStop : positY,
                                            leftStop: positX,
                                  }
                                  }else if (valTgUp === "end_si") {
                                    console.log("AaaaoYYYYnnaaa25");
                                    valTgUp = tagmouseIdUp.slice(0, 10);
                                    valTagUppp = tagmouseIdUp.slice(10, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/stop_ev";
                                  dat = {
                                            laneId : laneVal,
                                            nameStop: zzz,
                                            typeStop : valTgUp,
                                            topStop : positY,
                                            leftStop: positX,
                                  }
                                  }
                                  else if (valTgUp === "endnow") {
                                    console.log("AaaaoYYYYnnaaa26");
                                    valTgUp = tagmouseIdUp.slice(0, 6);
                                    valTagUppp = tagmouseIdUp.slice(6, tagmouseIdUp.length);
                            
                                    breakIncrem1 = true;

                                    urlScript = "/stop_ev";
                                  dat = {
                                            laneId : laneVal,
                                            nameStop: zzz,
                                            typeStop : valTgUp,
                                            topStop : positY,
                                            leftStop: positX,
                                  }
                                  }
                              
                                }else if(str === "ter"){
                                  console.log("AaaaoYYYYnnaaa27");
                                  valTgUp = tagmouseIdUp.slice(0, 19);
                                  valTagUppp = tagmouseIdUp.slice(19, tagmouseIdUp.length);
                            
                                  breakIncrem1 = true;

                                  urlScript = "/stop_ev";
                                  dat = {
                                            laneId : laneVal,
                                            nameStop: zzz,
                                            typeStop : valTgUp,
                                            topStop : positY,
                                            leftStop: positX,
                                  }
                                }
                              
                               
                               
                            
                                
                                console.log("urlScript : "+urlScript);
                                $.ajax({  
                                  url:        urlScript,  
                                  type:       'POST',  
                                  data :  dat, 
                                  // dataType:   'json', 
                                  beforeSend: function() {
                                    $("#bgLoading").show();
                                 },
                                  success: function(data, status) {  
                                   
                                    console.log("outilsSaveArr2 successful");
                                    $('#outputContent').append("<li> outilsSaveArr2 successful </li>");
                                    $("#bgLoading").hide();
                                  },  
                                  error : function(xhr, textStatus, errorThrown) {  
                                     console.log('outilsSaveArr2 error failed.');  
                                     $('#outputContent').append("<li> outilsSaveArr2 error failed </li>");
                                  }  
                               }); 
        
                               console.log("laneVal : "+laneVal);
                                  console.log("name : "+zzz);
                                  console.log("initName.length : "+initName.length);
                                  console.log("type : "+valTgUp);
                                  console.log("positY : "+positY);
                                  console.log("positX : "+positX);
                                  console.log("xInit.length : "+xInit.length);
                                  console.log("initName.length : "+initName.length);
                                
                              
    
                                
                              // }
          
                              
          
                              }
                              
                              if (breakIncrem1 === true) {
                                break;                                
                              }
                            }

                            if (breakIncrem1 === true) {
                              break;                                
                            }
                          }
                            // if (breakIncrem1 === true) {
                            //   break;
                            // }else{
                            //   breakIncrem1 === false;
                            // }
                          // }

                          // if (breakIncrem1 === true) {
                          //   break;
                          // }else{
                          //   breakIncrem1 === false;
                          // }
                        // }
                      }
                          for (let i = 0; i < nameInit.length; i++) {
                              
                            for (let j = 0; j < nameEnd.length; j++) {
                              if(i === j){
                                
                                console.log("Name : "+initName[i]);
                                console.log("xinit : "+xInit[i]);
                                console.log("xend : "+xEnd[i]);
                        
                                
                                // $(document).ready(function(){    
                                  // $("#loadstudent").on("click", function(event){  
                                     $.ajax({  
                                        url:        '/flow',  
                                        type:       'POST',  
                                        data :  {
                                          laneId : laneVal,
                                          nameFlow: "test",
                                          initX: xInit[i],
                                          initY : yInit[i],
                                          initName : initName[i],
                                          endX: xEnd[i],
                                          endY : yEnd[i],
                                          endName : endName[i]
                                        }, 
                                        // dataType:   'json', 
                                        success: function(data, status) {  
                                          console.log("flow successful");
                                          $('#outputContent').append("<li> flow successful </li>");
                                        },  
                                        error : function(xhr, textStatus, errorThrown) {  
                                           console.log('flow error failed.');  
                                           $('#outputContent').append("<li> flow error failed </li>");
                                        }  
                                     });  
                                  // });  
                                // }); 
                               
                              }
                              
                            
                            
                          }
                      
                      
                        }

                        nameEnd.length = 0;
                        nameInit.length = 0;
    
                        // if (breakIncrem1 === true) {
                        //   break;
                        // }else{
                        //   breakIncrem1 === false;
                        // }
                          
                        }

                        outilsSaveArr2.length = 0
                      },
                        error : function(xhr, textStatus, errorThrown) {  
                          console.log("tools error ajax");  
                          $('#outputContent').append("<li> tools error ajax </li>");
                       }  
                      });
                      
    
    
    
    
                    
    
                    
                  },  
                  error : function(xhr, textStatus, errorThrown) {  
                     console.log('Lane Ajax request failed.');  
                     $('#outputContent').append("<li> Lane Ajax request failed. </li>");
                  }  
               }); 
                 
                
              },  
              error : function(xhr, textStatus, errorThrown) {  
                 console.log("error ajax"); 
                 $('#outputContent').append("<li> error ajax </li>"); 
              }  
           }); 
           var datt = [];
           
           
    
        }
      
        
       }
    
          },  
          error : function(xhr, textStatus, errorThrown) {  
             console.log('Pool Ajax request failed.');  
             $('#outputContent').append("<li> Pool Ajax request failed. </li>"); 
             successPool = false;
          }  
       }); 
      }

      }
  
      
},  
error : function(xhr, textStatus, errorThrown) {  
   console.log("VERIFICATION error"); 
   $('#outputContent').append("<li> VERIFICATION error </li>"); 
}  



}); 




}


document.onmouseup = function (e){
  console.log("tag : "+e.target.id)
  console.log("tagNB : "+e.pageX)
}


function editKqueFuncPool(e) {
  console.log("outils = "+outils);
      const eleme = document.getElementById(e.target.id)

      const zaza = document.getElementById("editK"+eleme);

      var ident = (e.target.id).slice(0, 3);
      console.log("ident : "+ident)
    
      if (ident === "poo" || ident === "con" || ident === "nam") {
        
        var idTag = e.target.id;
        var contenupool = (idTag).slice(0, 8);
        var namePool = (idTag).slice(0, 8);
        var  ss = idTag.slice(11, idTag.length);
        var dds = idTag.slice(12, idTag.length);
        var valu = 0
        var  plusPool = idTag.slice(8, idTag.length);
        var moinsPool = idTag.slice(9, idTag.length);

        console.log("contenupool : "+contenupool);
        if (contenupool === "contenup") {
          
            // zaza2 = document.getElementById("editKpool"+ss);
            // zaza2.style.display = "block";

            valu = ss
            console.log("pool 1111");
          }

          else if (contenupool === "namepool") {
            // zaza2 = document.getElementById("editKpool"+dds);
            // zaza2.style.display = "block";
            valu = dds;
            console.log("pool 2222");
          }

          else if (contenupool === "poolplus") {
            // zaza2 = document.getElementById("editKpool"+plusPool);
            // zaza2.style.display = "block";
            valu = plusPool;
            console.log("pool 3333");
          }

          else if (contenupool === "poolmoin") {
            // zaza2 = document.getElementById("editKpool"+moinsPool);
            // zaza2.style.display = "block";
            valu = moinsPool;
            console.log("pool 4444");
          }

          console.log("valu : "+valu)

          for (let i = 0; i < outils.length; i++) {
        
            var outil = outils[i].slice(0, 4);
            // if (outil === "pool") {
              
            
              if (outils[i] === "pool"+valu) {
                console.log("poooool 1");
                zaza2 = document.getElementById("editK"+outils[i]);
                zaza2.style.display = "block";
              }else{
                console.log("poooool 2");
                zaza2 = document.getElementById("editK"+outils[i]);
                zaza2.style.display = "none";
              }
            // }
            
          }

          
          for (let o = 0; o < outils.length; o++) {

            var outil = outils[o].slice(0, 4);
            if (outil === "pool") {
                console.log("typeElem first : "+idTag);
                console.log("outils["+o+"] : "+outils[o]);
                if (idTag === "contenu"+outils[o] || idTag === "namepool"+outils[o]) {
                
                $('#nameTxt'+outils[o]).keyup(function (){
                  $('#namepool'+outils[o]).text($(this).val()); 
                  poolNameSave = $(this).val();
                });
              }
            }
          }


      }
      
        
        
      
      
}


function editKqueFuncLane(e) {
  // console.log("outils lane= "+outils);
      const eleme = document.getElementById(e.target.id)

      const zaza = document.getElementById("editK"+eleme);

      var ident = (e.target.id).slice(0, 3);
      console.log("ident : "+ident)
    
      if (ident === "lan" || ident === "nam") {
        

        var idTag = e.target.id;
        var contenuLane = (idTag).slice(0, 8);
        var nameLane = (idTag).slice(0, 4);
        var  ss = idTag.slice(11, idTag.length);
        var dds1 = idTag.slice(12, idTag.length);
        var laneIds = (idTag).slice(4, idTag.length);
        var valu1 = 0
        var  plusPool = idTag.slice(8, idTag.length);
        var moinsPool = idTag.slice(9, idTag.length);

    
        var zaza3 = null;
        if (nameLane === "lane") {
          
            valu1 = laneIds
            console.log("lane 1111");

            if (contenuLane === "lanePlus") {
              // zaza3 = document.getElementById("editKpool"+plusPool);
              // zaza3.style.display = "block";
              valu1 = plusPool;
              console.log("lane 3333");
            }
  
            if (contenuLane === "laneMoin") {
              // zaza3 = document.getElementById("editKpool"+moinsPool);
              // zaza3.style.display = "block";
              valu1 = moinsPool;
              console.log("lane 4444");
            }

          }
        if (contenuLane === "nameLane" || nameLane === "name") {
              // zaza3 = document.getElementById("editKpool"+dds);
              // zaza3.style.display = "block";
              valu1 = dds1;
              console.log("lane 2222");
            }
  
           
          console.log("valu1 lane : "+valu1)
          console.log("outils lane : "+outils)
          for (let i = 0; i < outils.length; i++) {
        
            var outil = outils[i].slice(0, 4);
            // if (outil === "lane") {
              if (outils[i] === "lane"+valu1) {
                console.log("1 editK"+outils[i]);
                zaza3 = document.getElementById("editK"+outils[i]);
                zaza3.style.display = "block";
              }else{
                console.log("2 editK"+outils[i]);
                zaza3 = document.getElementById("editK"+outils[i]);
                zaza3.style.display = "none";
              }
            // }
            
            
          }

          for (let o = 0; o < outils.length; o++) {
            console.log("typeElem first : "+idTag);
            console.log("outils["+o+"] : "+outils[o]);
            var outil = outils[o].slice(0, 4);
            if (outil === "lane") {
              if (idTag === outils[o] || idTag === "nameLane"+outils[o]) {
              
                $('#nameTxt'+outils[o]).keyup(function (){
                  $('#nameLane'+outils[o]).text($(this).val()); 
                  laneNameSave = $(this).val();
                });
              }
            }
          }

      }
}


function editKqueFuncTools(e) {
  console.log("outils = "+outils);
      const eleme = document.getElementById(e.target.id)

      const zaza = document.getElementById("editK"+eleme);

      var ident = (e.target.id).slice(0, 3);
      console.log("ident : "+ident)
    
      if (ident === "fle" || ident === "lig" || ident === "AND" || ident === "inc" || 
      ident === "XOR" || ident === "abs" || ident === "hum" || ident === "rec" || 
      ident === "scr" || ident === "sen" || ident === "ser" || 
      ident === "Cal" || ident === "Eve" || ident === "sta" || ident === "cat" || 
      ident === "thr" || ident === "tim" || ident === "end" || ident === "ter") {
        

        var idTag = e.target.id;
        console.log("idTag : "+idTag)
        for (let o = 0; o < outils.length; o++) {
          if (idTag === outils[o]) {
          console.log("typeElem first : "+idTag);
          $('#nameTxt'+outils[o]).keyup(function (){
            $('#lbl'+outils[o]).text($(this).val()); 
            outilsNameSave = $(this).val();
          });
        }
          
        }
        
        

      }
        
        
      
      
}
