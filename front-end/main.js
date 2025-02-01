const { app, BrowserWindow } = require('electron');
const waitOn = require('wait-on');

let mainWindow;

app.on('ready', async () => {
  mainWindow = new BrowserWindow({  
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, 
    },
  });

  try {
    mainWindow.hide();
    await waitOn({ resources: ['http://localhost:3000'], timeout: 5000 });
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.maximize()
    mainWindow.show()
  } catch (err) {
    console.error('React app did not start in time:', err);
  }

});
