const errors = require('./errors');

function busboy(req) {
  console.log(req);

  return new Promise((resolve, reject) => {
    req.busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      let size = 0;
      const fileData = [];
      file.on('data', (data) => {
        size += data.length;
        fileData.push(data);
      });

      file.on('end', () => {
        resolve({
          filename,
          mimetype,
          encoding,
          size,
          file: fileData.join()
        });
      });

      file.on('limit', () => {
        reject(errors.TOO_BIG);
      });
    });
    //
    // req.busboy.on('field', (key, value, keyTruncated, valueTruncated) => {
    //   console.log('bb field received', key);
    // });

    // req.busboy.on('finish', () => {
    //   console.log('Done parsing form!');
    //   // res.writeHead(303, { Connection: 'close', Location: '/' });
    //   // res.send({ success: true });
    //   // res.send({success: true});
    // });

    req.pipe(req.busboy);
  });
}

module.exports = busboy;
