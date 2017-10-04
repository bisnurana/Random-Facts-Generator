(function(){
  var inputNum = document.querySelector('#input-field');
  var content = document.querySelector('#content');
  inputNum.addEventListener('input', requestFact);

  function requestFact(){
    var num = inputNum.value;
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://numbersapi.com/'+ num );
    xhr.onload = function(){
      if(this.status == 200 && num!=''){
        var txt = this.responseText;
        var firstNum = txt.split(' ');
        var restText = txt.substr(txt.indexOf(' ') + 1);
        content.innerHTML='<span>' + firstNum[0] + ' ' + '</span>' + restText;
      }
    }
    xhr.send();
  }
})();
