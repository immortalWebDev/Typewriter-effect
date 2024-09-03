const span = document.querySelector('h1 span');
const span2 = document.querySelector('h2 span');

const wordsList = ['Developer.', 'Coder.', 'Engineer.', 'Programmer.'];
const wordsList2 = ['Student.', 'Reader.', 'Writer.', 'Designer.'];

function autoType(wordsList, element, time = 100) {
  let wordIndex = 0;
  let characterIndex = 0;
  let typing = true; 

  const typeWord = () => {
    const currentWord = wordsList[wordIndex];
    element.innerText = currentWord.slice(0, characterIndex);

    if (typing) {
      characterIndex++;
      if (characterIndex > currentWord.length) {
        typing = false;
        setTimeout(typeWord, 500); 
        return;
      }
    } else {
      characterIndex--;
      if (characterIndex === 0) {
        typing = true;
        wordIndex = (wordIndex + 1) % wordsList.length; 
        setTimeout(typeWord, 500); 
        return;
      }
    }

    setTimeout(typeWord, time);
  };

  typeWord(); 
}

autoType(wordsList, span);
autoType(wordsList2, span2);
