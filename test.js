const ytdl = require('ytdl-core');

async function getY(url) {
  const data = await ytdl.getInfo(url);
  return data;
}
const id = 'https://www.youtube.com/watch?v=I19KkDpCsYM';
ytdl.getInfo(id).then((res) => console.log(res));
