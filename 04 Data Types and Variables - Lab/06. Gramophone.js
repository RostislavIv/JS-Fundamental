function gramophone(band, album, song) {
  let durations = (album.length * band.length * song.length) / 2;
  rotations = Math.ceil(durations / 2.5);
  console.log(`The plate was rotated ${rotations} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
