const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const utf8 = require('utf8');

app.get('/', (req, res) => {
  res.json({
    'message': 'What?!'
  });
});

app.get('/mp3/:id', async (req, res) => {
  const info = await ytdl.getInfo(req.params.id);
  const url = await ytdl(req.params.id, { filter: 'audioonly' }, {
    format: 'mpeg'
  });

  const filename = utf8.encode(info.videoDetails.title);
  res.header('Content-Disposition', `attachment; filename = ${filename}.mp3`);
  url.pipe(res);
});

app.get('/mp4/:id', async (req, res) => {
  const info = await ytdl.getInfo(req.params.id);
  const url = await ytdl(req.params.id, { format: 'mp4' }, {
    format: 'mpeg'
  });

  const filename = utf8.encode(info.videoDetails.title);
  res.header('Content-Disposition', `attachment; filename = ${filename}.mp4`);
  url.pipe(res);
});

app.get('/info/:id', async (req, res) => {
  try {
    const info = await ytdl.getInfo(req.params.id);
    const max = info.videoDetails.thumbnail.thumbnails.reduce(function(prev, current) {
      return (prev.height > current.height) ? prev : current
    });

    res.json({
      id: info.videoDetails.videoId,
      title: info.videoDetails.title,
      description: info.videoDetails.shortDescription,
      length: info.videoDetails.lengthSeconds,
      thumbnail: max,
    });
  } catch (err) {
    res.json({
      error: true,
      message: 'Not Found'
    });
  }
});

const PORT = process.env.PORT || 7080;
app.listen(PORT, () => { console.log(`listen on port ${PORT}`); })
