export const message = data => {
  let message = '';
    message += data.length + ' rows\n';
    message += data.columns.length + ' columns\n';
    message += Math.round(d3.csvFormat(data).length / 1024) + 'kBs\n';
  return message;
}
