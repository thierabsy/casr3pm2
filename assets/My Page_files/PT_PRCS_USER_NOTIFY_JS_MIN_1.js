function SubscribeCaller()
{
Subscribe("PRCSEVENTS", ProcessNotif);}

function ProcessNotif(EventName, EventData)
{
 if(EventName == "PRCSEVENTS")
 {
 var prcsDescText = GetJSONObjectValue(EventData, "PRCSDESC"); var usrText = GetJSONObjectValue(EventData, "PRCSNLSUSER") + " " + GetJSONObjectValue(EventData, "PRCSUSER"); var statusState = GetJSONObjectValue(EventData, "PRCSSTATUS"); var nlsmsg = GetJSONObjectValue(EventData, "PRCSNLSMSG"); var nlsuseraction = GetJSONObjectValue(EventData, "PRCSNLSUSER"); var reportLink = GetJSONObjectValue(EventData, "PRCSLOCATION"); jQuery('#User').text("");  switch(statusState)
 {
 case "5":
 case "6":
 case "10":
 case "3":
 case "104":
 jQuery('#ProcessDescription').text(prcsDescText);  jQuery('#Status').text(nlsmsg); jQuery('#NewProcessMsgWindow').toggle('slide', {direction: 'Right'}, 500); jQuery('#NewProcessMsgWindow').delay(5000).toggle('slide', {direction: 'Right'}, 500); jQuery('#NewProcessMsgWindow').button("close").click(function(){
 jQuery('#NewProcessMsgWindow').hide(); }); break; case "9":
 jQuery('#ProcessDescription').text(prcsDescText); jQuery('#Status').text(nlsmsg); jQuery('#User').text(usrText); jQuery('#NewProcessMsgWindow').toggle('slide', {direction: 'Right'}, 500); jQuery('#NewProcessMsgWindow').delay(9000).toggle('slide', {direction: 'Right'}, 500); jQuery('#NewProcessMsgWindow').button("close").click(function(){
 jQuery('#NewProcessMsgWindow').hide(); }); break; case "105":
 if(reportLink)
 {
 jQuery('#ProcessDescription').text(""); jQuery('#ProcessDescription').append('<a id="ReportLink" href="http://www.oracle.com"></a>'); jQuery('#ReportLink').text(prcsDescText); jQuery('#NewProcessMsgWindow').show(); jQuery('#ReportLink').click(function(){
  window.open(reportLink);  return false; }); }
 else
 {
 jQuery('#ProcessDescription').text(prcsDescText); }
 jQuery('#Status').text(nlsmsg); jQuery('#User').text(usrText); jQuery('#NewProcessMsgWindow').button("close").click(function(){
 jQuery('#NewProcessMsgWindow').hide(); }); break;  }
 }
}


jq_main();function jq_main()
{
 jQuery(document).ready(function() {
 jQuery('#ptifrmtemplate').append('<div id="NewProcessMsgWindow"></div>'); jQuery('#NewProcessMsgWindow').addClass("prcsMsgWindow"); jQuery('#NewProcessMsgWindow').css({right: "0px"}); jQuery('#NewProcessMsgWindow').append('<input type="button" id = "close" value="x" style="float:right; background-color: #FFF6D9; font-weight: bold;">'); jQuery('#NewProcessMsgWindow').append('<div id="TopBorder"></div>'); jQuery('#TopBorder').addClass("prcsMsgWindowTopBorder"); jQuery('#NewProcessMsgWindow').append('<div id="ProcessDescription"></div>'); jQuery('#ProcessDescription').addClass("prcsMsgWindowDescr"); jQuery('#NewProcessMsgWindow').append('<div id="User"></div>'); jQuery('#User').addClass("prcsMsgWindowUser"); jQuery('#NewProcessMsgWindow').append('<div id="Status"></div>'); jQuery('#Status').addClass("prcsMsgWindowStatus"); jQuery('#NewProcessMsgWindow').hide();  if(document.getElementById("ptifrmtemplate"))
 {
 SubscribeCaller(); }
 }) 
};