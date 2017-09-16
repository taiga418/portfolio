import ko from 'knockout'

// TODO: serve this myself
const backgroundImageUrl = 'https://i.pinimg.com/originals/91/2f/82/912f8214449d625e8e3d4ba70c51416e.jpg'

const AppModel = function() {
  const appBody = document.querySelector('#app')

  // Load the background image in a separate image node. When it has loaded, delete the node
  // and set the background image of the target.
  // https://stackoverflow.com/questions/5057990/how-can-i-check-if-a-background-image-is-loaded
  const tempImage = new Image();
  tempImage.src = backgroundImageUrl
  tempImage.onload = function () {
    const app = document.querySelector('#app')
    const target = app.querySelector('.full-screen-overlay')

    target.style.backgroundImage = `"url('${backgroundImageUrl}')"`
    tempImage.remove()
    app.classList.add('background-image-loaded')
  }

  // expand box
  this.expandBox = function() {
    const banner = document.querySelector('.banner')
    banner.classList.add('expanded')
  }
};

ko.applyBindings(
  new AppModel(),
  document.getElementById('app')
);
