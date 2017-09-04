import ko from 'knockout'


const backgroundImageUrl = 'https://i.pinimg.com/originals/91/2f/82/912f8214449d625e8e3d4ba70c51416e.jpg'

const AppModel = function() {
  const appBody = document.querySelector('#app')

  const tempImage = new Image();
  tempImage.src = backgroundImageUrl
  tempImage.onload = function () {
    console.log('temp', tempImage)
    const target = document.querySelector('#app')
    target.style.backgroundImage = `"url('${backgroundImageUrl}')"`
    target.classList.add('background-image-loaded')
  }
};

ko.applyBindings(
  new AppModel(),
  document.getElementById('app')
);
