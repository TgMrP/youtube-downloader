const express = require('express');
const path = require('path');

const ytdl = require('ytdl-core');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');
const compression = require('compression');
const utf8 = require('utf8');

const app = express();

app.use(cors());
app.use(volleyball);
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'www')));

app.get('/mp3/:id', async (req, res) => {
  const info = await ytdl.getInfo(req.params.id);
  const filename = utf8.encode(info.videoDetails.title);
  res.header('Content-Disposition', `attachment; filename = ${filename}.mp3`);
  ytdl(req.params.id, { filter: 'audioonly' }, {
    format: 'mpeg',
  }).pipe(res);
  res.json({
    error: true,
    message: 'Problem With Download',
  });
});

app.get('/mp4/:id', async (req, res) => {
  const info = await ytdl.getInfo(req.params.id);
  const filename = utf8.encode(info.videoDetails.title);

  res.header('Content-Disposition', `attachment; filename = ${filename}.mp4`);
  ytdl(req.params.id, {
    format: 'mp4',
  }).pipe(res);
});

app.get('/info/:id', async (req, res) => {
  const info = await ytdl.getInfo(req.params.id);
  const max = info
    .videoDetails
    .thumbnail
    .thumbnails.reduce((prev, current) => ((prev.height > current.height) ? prev : current));

  res.json({
    id: info.videoDetails.videoId,
    title: info.videoDetails.title,
    description: info.videoDetails.shortDescription,
    length: info.videoDetails.lengthSeconds,
    thumbnail: max,
  });
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

// ------------LISTEN--------------------
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
