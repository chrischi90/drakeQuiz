var quiz = [
  ["What is Drake's real first name?",'AUBREY'],
  ["What is Drake's hometown?", "TORONTO"],
  ["What TV show did Drake star in as a child?", "DEGRASSI"],
  ["What was Drake's first self-released mixtape called?", "ROOM FOR IMPROVEMENT"],
  ["What song does this lyric come from: I can tell that money's got you working...", "PRACTICE" ],
  ["What popular acronym did Drake coin in the song 'The Motto'?", "YOLO"],
  ["For which album did Drake win the Grammy for 'Best Rap Album'?", "TAKE CARE"]
]
var numberCorrect = 0;
var listCorrect = [];
var listIncorrect = [];

function print(message) {
  document.write(message);
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}



for(var i = 0; i < quiz.length; i += 1){
  
  var userAnswer = prompt(quiz[i][0]);
  
  if (userAnswer.toUpperCase() === quiz[i][1]) {
    listCorrect.push(quiz[i][0]);
    numberCorrect += 1;
  } else {
    listIncorrect.push(quiz[i][0]);
  }
 
}


print('Hey, you got ' + numberCorrect + ' questions right!');

//Which questions you got right
print('<h1>You got these questions right</h1>')
print(buildList(listCorrect))

//Which questions you got wrong
print('<h1>You got these questions wrong</h1>')
print(buildList(listIncorrect))
